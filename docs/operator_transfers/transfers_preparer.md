---
id: transfers-preparer
title: Transfers Preparer
---

`conveyor-preparer` (transfer preparer) is the main entry point into the
transfer machinery. It leverages topological information to pick the best source
replica for the transfer. It also decides if the transfer has to be handled by
the throttler or not. For all new Rucio installations, it is recommended to run
this daemon and activate it by setting the `conveyor/use_preparer = True`
configuration option.

Preparer:

- finds all source RSEs which have a replica of the desired file
- filters out the source RSEs which don't respect administrative constraints
- ensures protocol compatibility between sources and destination
- performs path computations to find the best sources
- transitions the transfer request either to a `Waiting` or to a `Queued` state

# Source replica selection

One of the main jobs done by the preparer is the selection of the replica
to be used as a transfer sources. For that, it relies on multiple RSE
attributes and on the configured protocols. This section provides a summary
of what configuration parameters can influence the preparer at this stage.

We will use the notation `section/option` to speak about a configuration
value to be set in `rucio.cfg` like this:

```text
[section]
option = value
```

The preparer will start by retrieving all the possible sources from the
database.

In the following step, the preparer will skip all sources which don't
respect the administrative constraints. For example, it will ignore source
RSEs with `availability_read=False` (unless the preparer is run with
`--ignore-availability`). It also respects the `restricted_read` and
`restricted_write` RSE attributes for the source and the destination.

Some request attributes will impact the source selection. For example, preparer
will skip source RSEs which don't match the `source_replica_expression` or
`allow_tape_source` conditions. It will also ignore requests witch require a
`transfertool` that this preparer cannot use. The request attributes are
either inherited from the rule, or set by another transfer daemon
(for example: preparer)

The next step is to perform the path computation. At this stage, preparer
uses the distance between RSEs to perform shortest-path computations.
Each hop, even for single-hop transfers, must respect the protocol
compatibility between the source of the hop and its destination. The
[SCHEME_MAP](https://github.com/rucio/rucio/blob/1b8ca368523d13fd11bc0b32c14528f2fcec778b/lib/rucio/common/constants.py#L48)
constant defines the compatibility between protocols. Only protocols with
non-zero `third_party_copy_read` will be considered for source RSEs, ordered
by priority. Same for the destination: `third_party_copy_write` is used.

**Note**: distances between RSEs which are set by the administrator via

```shell
rucio-admin rse add-distance --distance 1 RSE1 RSE2
# Note: before rucio 1.30 (as a consequence: also in the current LTS release 1.29),
# the --ranking option was used for the same purpose. The --distance option
# could still be set and was mentioned in documentation alongside --ranking
# but was completely ignored by rucio.
# On 1.29, you'll have to use the following command:
rucio-admin rse add-distance --ranking 1 RSE1 RSE2
```

Once all valid paths are found, after all the filtering done previously,
the paths are ordered using the following simple
[rules](https://github.com/rucio/rucio/blob/608c9b1dc834f07396cc49dfcbc3daa613b61d56/lib/rucio/core/transfer.py#L905)
:

- the source ranking is compared first. Source ranking is an integer which is
  decreased each time a particular source is found to have an issue to perform
  this particular transfer. It is thus equal to 0 at first try, and decreased
  at transfer failure before re-trying the transfer. This ensures that
  problematic sources are much less likely to be reused.
- On equal source ranking, the RSE type is checked. Disk sources are preferred
  over tape.
- On equal source RSE type, the distance between the source RSE and the
  destination RSE is compared.
- On equal distance, we prefer single-hop paths.
