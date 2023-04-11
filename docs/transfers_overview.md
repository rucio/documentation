---
id: transfers-overview
title: Transfers Overview
---

Rucio has a set of daemons in charge of transfers between rucio storage elements
(RSE). Historically, these daemons were grouped under the name of `conveyor`,
so a big part of the documentation and source code still uses this naming
when referring to the transfer machinery.

Rucio doesn't execute the actual physical data movement between storage
elements. It relies on external tools for this scope. Currently, rucio supports
[fts3](https://fts3-docs.web.cern.ch/fts3-docs/docs/overview.html) and
[globus](https://www.globus.org/data-transfer). Rucio builds on top of these
"TransferTools" and provides additional services like recovery from a transfer
failure by using another copy from another storage element, multi-hopping
using multiple transfertools (or multiple instances of the same transfertool
type) and others.

## Daemon overview

The following transfer-related daemons exist in rucio, presented in the order
they intervene in a transfer lifecycle:

- **preparer**: a strongly recommended optional daemon which is required for
  many advanced usages, like multiple transfertools together.
  It is also required to be able to use throttler. If active, performs part
  of the source selection and path computation work instead of the submitter.
  For all new rucio installation, it is recommended to run this daemon and
  activate it by setting the `conveyor/use_preparer = True` configuration
  option.
- **throttler**: an optional daemon which can throttle request submissions
  to/from an RSE
- **submitter**, **stager**: perform the actual submission of transfers to the
  external transfertool. If used without preparer, also perform path computation
  and source replica selection. Stager is a specialized submitter for issuing
  stagein operations to tape archives.
- **receiver**: optional daemons which listens for events published into a
  queueing system (activemq) by the external transfertool and reacts to those
  events to mark transfers as successful or failed.
- **poller**: regularly polls the external transfertool for the status of
  pending transfers and marks them as successful/failed
- **finisher**: acts on successful or failed transfers. For example, by
  re-scheduling a new attempt.

The minimal list of daemons needed for transfer execution is:
`submitter`, `poller` and `finisher`.

# Lifecycle of transfer requests

There is no user-facing way to schedule a transfer. All transfer requests are
created internally by rucio as result of rule evaluations. The lifetime of a
rucio transfer is thus strongly bound to the rule which created it.
Hereafter is a simple example which gives the intuition of how rucio proceeds
with a replication/transfer of a file as part of a rule.

In the rest of this example we'll assume the following 4 rucio storage
elements:

```text
┌──────┐   5    ┌──────┐
│      │◄──────►│      │
│ RSE1 │        │ RSE2 │
│      │    ┌──►│      │
└──────┘    │   └──────┘
   ▲        │
   │100     │3
   ▼        │
┌──────┐    │   ┌──────┐
│      │◄───┘   │      │
│ RSE3 │        │ RSE4 │
│      │◄──────►│      │
└──────┘   2    └──────┘
```

The numbers on the arrows represent the administrative cost which is set
by the rucio administrator. Cost is unidirectional, but, in this example,
we assume that the cost was configured identical in both directions.
For example:

```shell
rucio-admin rse add-distance --distance 5 RSE1 RSE2
rucio-admin rse add-distance --distance 5 RSE2 RSE1
# Note: before rucio 1.30 (as a consequence: also in the current LTS release 1.29),
# the --ranking option was used for the same purpose. The --distance option
# could still be set and was mentioned in documentation alongside --ranking
# but was completely ignored by rucio.
# On 1.29, you'll have to use the following command:
rucio-admin rse add-distance --ranking 5 RSE1 RSE2
rucio-admin rse add-distance --ranking 5 RSE2 RSE1
```

Assume a certain dataset `someScope:dsName`, which has two files
`someScope:file1` and `someScope:file2`, and both files are located on `RSE1`.

The destination of the transfer will be decided on the rule evaluation phase,
For example the user adds a rule to ensure that rucio maintains two copies
for each of the files on any of the RSEs.

```shell
rucio add-rule someScope:dsName 2 '*'
```

The rule evaluation mechanism detects that a copy is already available
on RSE1, but one additional copy is needed to respect the rule requirements of
2 copies. It will thus create a transfer request to one of the other 3 rses.
As of time of writing, the selection of the destination is random as
long as it respects the RSE expression. Here, `*` matches any RSE.
For the seek of the example, lets assume that RSE4 was selected.

The rule evaluation mechanism will then create two transfer requests, which
will be picked by the transfer machinery. Depending on the configuration value
`conveyor/use_preparer`, the transfer will be either handled by the `preparer`
or by the `submitter` directly.

At this stage, the transfer machinery finds all the possible sources. It
filters out the ones which don't match different rule criterias (for example:
source RSE expression) and administrative constraints (for example:
skip blocklisted RSEs). It then computes the paths. In the previous example,
the path `RSE1 -> RSE2 -> RSE3 -> RSE4` will be picked due to cost constraints.
Note that it's possible to make rucio prefer shorter parts by setting the RSE
attribute `hop_penalty`, or the global configuration value with the same name.
For more details about how a source is selected, refer to the [Preparer](transfers_preparer.md)
documentation.

The path will be then submitted to the transfertool either in its integrity,
if transfertool supports multi-hopping, or in multiple iterations.

The final steps are for the `reciver` or `poller` to monitor the transfer's
completion in transfertool and `finisher` to mark the transfers as completed.
We only described here a simple case, when the transfer is successful on the
first try. In case of errors, multiple transitions are possible between
different daemons. Check the following request state transition diagram
for a more detailed view:

![Request State Transition Chart](/img/request_state_transition_chart.svg)
