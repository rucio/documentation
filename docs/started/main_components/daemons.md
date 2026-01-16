---
id: daemons
title: Rucio Daemons
sidebar_label: Rucio Daemons
---

Rucio relies on several daemons (processes) to perform different logic.
Most of the daemons connect to the DB to read some data, perform some computation,
and then write some data back into the DB.

Usually one daemon will create some work for another daemon and vice-versa.
In Rucio realm, daemons communicate to others by the DB.
The following table represents a high level view of the responsibility of each of the daemons and basic functionality.

## Daemons

Name | Domain|  Purpose |  Batched? | Threaded? | Multi-VO? | Details
-----------| ----------------- | -------| ----- | ----- | ----- | ----- |
rucio-abacus-account | Accounting | Account usage | ❌ | ✅ | ❌ |  [Details](bin/rucio-abacus-account.md)
rucio-abacus-collection-replica | Accounting |  Updates collection replicas | ❌ | ✅ | ❌ |  [Details](bin/rucio-abacus-collection-replica.md)
rucio-abacus-rse | Accounting | Updates RSE counters | ❌ | ✅ | ❌ |  [Details](bin/rucio-abacus-rse.md)
rucio-atropos | Replica | End the life of the rules according to the Lifetime Model | ❌ | ✅ | ❌ |  [Details](bin/rucio-atropos.md)
rucio-auditor | Replica | Find inconsistencies on storage, for example, dark data discovery | ❌ | ✅ | ❌ |  [Details](bin/rucio-auditor.md)
rucio-automatix | Replica | Used for testing: injects random data in RSEs to check liveness | ❌ | ✅  | ❌ |  [Details](bin/rucio-automatix.md)
rucio-bb8 | Replica | Rebalance data across RSEs | ❌ | ✅ | ❌ |  [Details](bin/rucio-bb8.md)
rucio-cache-client | Replica | Populates information of replicas on volatile storage  | ❌ | ❌ | ❌ |  [Details](bin/rucio-cache-client.md)
rucio-cache-consumer | Replica | Adds and deletes cache replicas to the Rucio catalog | ❌ | ✅ | ❌ |  [Details](bin/rucio-cache-consumer.md)
rucio-conveyor-finisher | Transfer | Updates Rucio internal state after the file transfer has finished | ✅  | ✅ | ✅ |  [Details](bin/rucio-conveyor-finisher.md)
rucio-conveyor-poller | Transfer | Polls updates from the transfer tool to check the transfer state | ✅ | ✅ | ❌ |  [Details](bin/rucio-conveyor-poller.md)
rucio-conveyor-preparer | Transfer | Prepares data transfers | ✅ | ✅ | ❌ |  [Details](bin/rucio-conveyor-preparer.md)
rucio-conveyor-receiver | Transfer | Sister of poller, instead of polling for updates, it reads transfer tools notifications to check transfer state | ❌ | ✅  | ❌ |  [Details](bin/rucio-conveyor-receiver.md)
rucio-conveyor-stager | Transfer | Issues staging (bring online) requests to tape RSEs  | ✅ | ✅ |  ✅ |  [Details](bin/rucio-conveyor-stager.md)
rucio-conveyor-submitter | Transfer | Submit transfer requests to the transfer tool (prepares the transfer as well if the conveyor-preparer is not enabled) | ✅ | ✅ | ✅ |  [Details](bin/rucio-conveyor-submitter.md)
rucio-conveyor-throttler | Transfer | Queues transfer requests inside Rucio, applying limits, ex: only one transfer at a time, etc ... | ❌ | ❌ | ❌ |  [Details](bin/rucio-conveyor-throttler.md)
rucio-dark-reaper | Deletion | Deletes quarantined replicas | ✅ | ✅ | ✅ |  [Details](bin/rucio-dark-reaper.md)
rucio-dumper | Consistency | Dumps file lists. The rucio-auditor consumes these dumps to discover dark data | ❌ | ❌ | ❌ |  [Details](bin/rucio-dumper.md)
rucio-follower | Telemetry | Aggregates events affecting DIDs | ❌ | ✅ | ❌ |  [Details](bin/rucio-follower.md)
rucio-hermes | Telemetry | Sends Rucio messages to external services (InfluxDB, OpenSearch, ActiveMQ, ...) | ✅ | ✅ | ❌ |  [Details](bin/rucio-hermes.md)
rucio-judge-cleaner | Rule | Cleans expired replication rules | ❌ | ✅ | ❌ |  [Details](bin/rucio-judge-cleaner.md)
rucio-judge-evaluator | Rule | Creates and evaluates replication rules based on their state (OK/REPL/STUCK)  | ❌ | ✅ | ❌ |  [Details](bin/rucio-judge-evaluator.md)
rucio-judge-injector | Rule | Asynchronously injects replication rules  | ❌ | ✅ | ❌ |  [Details](bin/rucio-judge-injector.md)
rucio-judge-repairer | Rule | Repairs stuck replication rules (STATE=STUCK) | ❌ | ✅ | ❌ |  [Details](bin/rucio-judge-repairer.md)
rucio-kronos | Telemetry | Consumes Rucio tracing messages, updates access time of replicas and access count of DIDs | ❌ | ✅ | ❌ |  [Details](bin/rucio-kronos.md)
rucio-minos | Replica | Reads list of physical file names (PFNs) declared bad and classifies them in: temporary unavailable  and permanently unavailable (to be recovered by the necromancer daemon)  | ✅ | ✅ | ❌ |  [Details](bin/rucio-minos.md)
rucio-minos-temporary-expiration | Replica | Moves back TEMPORARY_UNAVAILABLE replicas into AVAILABLE state  | ✅ | ✅ | ❌ |  [Details](bin/rucio-minos-temporary-expiration.md)
rucio-necromancer | Deletion | Works on permanently unavailable replicas, it tries to recover the data from other valid replicas if any, else declares the replica as lost  | ✅ | ✅ | ❌ |  [Details](bin/rucio-necromancer.md)
rucio-oauth-manager | Auth/Authz | Deletes expired access tokens (in case there is a valid refresh token, expired access tokens will be kept until refresh_token expires as well.) and deletion of expired OAuth session parameters | ✅ | ✅ | ❌ |  [Details](bin/rucio-oauth-manager.md)
rucio-reaper | Deletion | Deletes replicas that don't have locks anymore, i.e. they have a tombstone set | ✅ | ✅ | ✅ |  [Details](bin/rucio-reaper.md)
rucio-replica-recoverer | Replica | Declares suspicious replicas as bad if they are found available on other RSEs, so necromancer will work on them | ❌ | ❌ | ✅ |  [Details](bin/rucio-replica-recoverer.md)
rucio-rse-decommissioner | Deletion | Decommissions an RSE. The actions to perform are specified in decommissioning profiles (delete all data, move replicas, etc ...)  | ❌ | ❌ | ❌ |  [Details](bin/rucio-rse-decommissioner.md)
rucio-storage-consistency-actions | Consistency | Applies corrective actions as a result of a consistency check on an RSE | ❌ | ✅ | ❌ |  [Details](bin/rucio-storage-consistency-actions.md)
rucio-transmogrifier | Rule | Creates replication rules for DIDs matching a subscription | ✅ | ✅ | ❌ |  [Details](bin/rucio-transmogrifier.md)
rucio-undertaker | Deletion | Manages expired DIDs, deleting them (does not delete replicas)  | ✅ |  ✅ | ❌ |  [Details](bin/rucio-undertaker.md)

## FAQ


### Conveyor daemons
It is important to know the following:
* The throttler daemon will need the preparer to work.
* The preparer is a daemon that optimizes transfer requests, while recommended to install, it's not mandatory.
* The submitter is the only daemon needed to submit transfers and can do a subset of what the preparer can do.
* To update the state of requests, the conveyor poller (polls for changes) or conveyor receiver (listens for changes)  are needed to understand the new state.
* The finisher analyzes this new state and updates the state.

### What happens when a rule is stuck?
Please mind that STUCK is not a terminal state (only OK and SUSPENDED are).
If a rule is STUCK, it means that the associated transfers attempts failed three times (or more) already, or that Rucio was unable to create a transfer request (e.g. the destination is unavailable for writing).
When this happens, the judge-repairer daemon will analyse the reasons and try to "unstuck" such rules (very quickly the first time they are encountered and with some extra delay for each subsequent attempt) possibly transitioning them from STUCK to REPLICATING during the repair process.
Eventually the rule will transition either to OK (if all the locks become OK) either to SUSPENDED (after two continuous weeks as STUCK have passed).
An operator can speedup the reevaluation of a stuck rule by issuing the cli command:
```
rucio rule update --stuck --boost-rule RULE_ID
```

### What happens when new data is added to an existing dataset that already has replicas?
The judge evaluator will keep track of new data added to datasets that are already replicated to trigger the necessary transfer requests to ensure all new data is copied to the RSEs.

### What is the purpose of the minos daemons?
An human operator can declare some datasets as temporarily unavailable due to maintenance, outages, etc ...The operator will set an expiration time on the temporary unavailable status. When the expiration time is reached, the minos-temporary-expiration will put the replicas back in available state.

### What is the relationship between auditor, rucio-dumper and dark-reaper?
The dumper will create a dump of all the files in an RSE that will be passed to the auditor. The auditor will check for inconsistencies and mark missing data as dark data (quarantined replicas).
Dark reaper is the one deleting this dark data to free up space from the quarantined replicas table.

### How is data deleted?
When replicas are healthy, the judge-cleaner will set a tombstone on replicas where the lifetime has expired. These replicas are taken by the reaper and they are deleted.
Sometimes, replicas can become unhealthy. A dump is created by the dumper daemon. The auditor checks these dumps and declares replicas as suspicious.

### How is a replica declared bad?
- An operator can declare a replica as bad issuing rucio cli commands.
```
rucio-admin replicas declare-bad [-h] --reason REASON [--inputfile [INPUTFILE]] [--allow-collection] [--lfns [LFNS]] [--scope [SCOPE]] [--rse [RSE]] [listbadfiles ...]
```

These bad replicas are taken by the necromancer daemon and then deleted if they cannot be recovered from other RSEs.
- the suspicious-replica-recoverer is a daemon that will analyze different counters (transfer errors, download errors, etc ...) to mark replicas as being suspicious to have an issue. After hitting
a certain limit (configurable by `--nattempts` flag), the replica is marked as bad and eventually consumed by the necromancer.

### What is the purpose of undertaker?
A dataset is "never" deleted, however, when the dataset is known to be bad, there is no point having it in the catalog. The undertaker daemon takes care to remove these datasets.
An operator will set an expiration date in the past of the DIDs and this daemon will delete the dataset from the DB. If there were any replicas attached, the replicas will be deleted as well.

## Daemon arguments
A full description for each daemon's arguments can be found by running `rucio-{daemon} --help` or viewing the `Details` in the daemon description table above.
Listed below are common definitions between different daemons.

- **run-once** - Only run one iteration of the daemon. If executed with this argument the daemon will run once and close.
- **sleep-time** - How long a daemon will sleep between iterations, mutually exclusive with `run-once`. Units of seconds.
- **threads**, **total-workers**, **threads-per-process**, **nprocs** - _[Present in threaded daemons]_ Run in threaded mode.
- **bulk**, **chunk-size**, **max-rows** - _[Present in batched daemons]_ Provide a limit of the number of operations a single instance of a daemon can run in an iteration.
- **dry-run** - Run once, showing logs of the daemon's operations without performing any action. Useful for verifying settings of the instance and daemon.
- **vos** - _[Present in Multi-VO daemons]_ Provide a list of VOs with which the daemon can interact. Used when VOs use different settings for their daemons.

### Batched Daemons

Some daemons can run over large backlogs depending on the traffic of an instance.
To prevent the daemon from running too long, or submitting too many requests at once to an external system, a daemon's workload can be batched.
Between batches of work, the daemon sleeps for `sleep-time`.

This setting is present in daemons that either submit requests (e.g. transfer requests) or process multiple replicas or DIDs (e.g. setting statuses, running deletion).

### Threaded Daemons

When daemons are run with threaded arguments, the database query used by the daemons has a `threads` argument applied to the query string.
This is applicable to `oracle`, `postgres` and `mysql` databases.

> **_Note:_**
This definition doesn't apply for producer/consumer daemons. When producer/consumer daemons are run in threaded mode, it creates multiple instances of producers and consumers. This includes the threaded `conveyor` daemons.


### Multi-VO Daemons

Daemons that have a `vos` option can be set to have separate settings per vo running in a multi-vo instance.
When this is set, the daemon will only interact with objects that are explicitly included in the specific VO.

By default, a daemon with multi-VO options interact with all VOs on the instance.
For example, this is the log displayed by the `replica-recoverer` daemon.

```bash
$ rucio-replica-recoverer --run-once
2020-07-28 15:15:14,151 5461    INFO    replica_recoverer: This instance will work on VOs: def, abc, xyz, 123


$ rucio-replica-recoverer --run-once --vos abc xyz
2020-07-28 15:16:36,066 5474    INFO    replica_recoverer: This instance will work on VOs: abc, xyz
```

> **_Note:_**
Multi-VO daemons can still be used in single-VO instances, and the `vos` option does not need to be set.
