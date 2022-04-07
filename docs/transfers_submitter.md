---
id: transfers-submitter
title: Transfers Submitter
---

The `conveyor-submitter` (transfer submitter) is the rucio daemon in charge
of submitting transfers for execution by an external third-party-copy
trasfertool. As input, it gets the transfer requests in `queued` state and
performs multiple tasks on them with the end goal of submitting the actual
transfer to one or more transfertools. It:

- finds all source RSEs which have a replica of the desired file
- filters out the source RSEs which don't respect administrative constraints
- ensures protocol compatibility between sources and destination
- performs path computations to find the best sources
- generates the full URIs to be used by the transfertool
- performs the actual submission of the transfer

# Source replica selection

One of the main jobs done by the submitter is the selection of the replica
to be used as a transfer sources. For that, it relies on multiple RSE
attributes and on the configured protocols. This section provides a summary
of what configuration parameters can influence the submitter at this stage.

We will use the notation `section/option` to speak about a configuration
value to be set in `rucio.cfg` like this:

```text
[section]
option = value
```

The submitter will start by retrieving all the possible sources from the
database. If the configuration value `conveyor/filter_transfertool` is set, it
will avoid source RSEs which don't have the `transfertool` RSE attribute
set to the correct value. Except for a particular case: when submitter is
run with a list of transfertools in `conveyor/transfertool` and multi-hoping
is enabled. In this case the `transfertool` RSE attribute will be ignored at
this stage, because we assume a will to multi-hop between transfertools.

In the following step, the submitter will skip all sources which don't
respect the administrative constraints. For example, it will ignore source
RSEs with `availability_read=False` (unless the submitter is run with
`--ignore-availability`). It also respects the `restricted_read` and
`restricted_write` RSE attributes for the source and the destination.

Some request attributes will impact the source selection. For example, submitter
will skip source RSEs which don't match the `source_replica_expression` or
`allow_tape_source` conditions. It will also ignore requests witch require a
`transfertool` that this submitter cannot use. The request attributes are
either inherited from the rule, or set by another transfer daemon
(for example: preparer)

The next step is to perform the path computation. At this stage, submitter
uses the distance between RSEs to perform shortest-path computations. If
multi-hopping is enabled via `transfers/use_multihop`, then the configuration
value `transfers/hop_penalty` + the RSE attributes `available_for_multihop`
and `hop_penalty` will influence the distances for multi-hop paths.
Each hop, even for single-hop transfers, must respect the protocol
compatibility between the source of the hop and its destination. The
[SCHEME_MAP](https://github.com/rucio/rucio/blob/1b8ca368523d13fd11bc0b32c14528f2fcec778b/lib/rucio/common/constants.py#L48)
constant defines the compatibility between protocols. Only protocols with
non-zero `third_party_copy_read` will be considered for source RSEs, ordered
by priority. Same for the destination: `third_party_copy_write` is used.

**Note**: distances between RSEs which are set by the administrator via

```shell
rucio-admin rse add-distance --distance 1 --ranking 1 RSE1 RSE2
```

Once all valid paths are found, after all the filtering done previously,
the paths are ordered using the following simple
[rules](https://github.com/rucio/rucio/blob/608c9b1dc834f07396cc49dfcbc3daa613b61d56/lib/rucio/core/transfer.py#L905)
:

- the source ranking is compared first. Source ranking is an integer which is
  decreased each time a particular source is found to have an issue to perform
  this particular transfer. It is thus equal to 0 at first try, and decreased
  at transfer failure before re-trying the transfer. This ensures that
  problematic sources are much less likely to be re-used.
- On equal source ranking, the RSE type is checked. Disk sources are preferred
  over tape.
- On equal source RSE type, the distance between the source RSE and the
  destination RSE is compared.
- On equal distance, we prefer single-hop paths.

In its final step before submission, submitter will check in order the
paths from the previous steps until it finds one which can be submitted by
any of the transfertools configured in `conveyor/transfertool`. Here
transfertool-specific RSE attributes enter into the equation. For example,
the fts3 transfertool requires an `fts` RSE attribute with a list of fts
servers; while the globus transfertool requires the `globus_endpoint_id`
attribute on both source and destination RSE.

If a path can be submitted, all missing hops are created into the database,
and submitter goes to the submission step, which is straightforward and
consists of calling the transfertool with the correct arguments.

