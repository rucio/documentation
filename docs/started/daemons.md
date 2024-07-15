---
id: daemons
title: Rucio Daemons
sidebar_label: daemons
---

Rucio relies on several daemons (processes) to perform different logic.
Most of the daemons connect to the DB to read some data, perform some computation, 
and then write some data back into the DB.

Usually one daemon will create some work for another daemon and viceversa.
In Rucio realm, daemons communicate to others by the DB.

The following table represents a high level view of the responsibility of each of the daemons.

## Daemons

Name | Domain|  Purpose |  Details
-----------| ----------------- | -------| ----- |
rucio-abacus-account | Accounting | Account usage | [Details](../bin/rucio-abacus-account)
rucio-abacus-collection-replica | Accounting |  Updates collection replicas | [Details](../bin/rucio-abacus-collection-replica)
rucio-abacus-rse | Accounting | Updates RSE counters | [Details](../bin/rucio-abacus-rse)
rucio-atropos | Replica | End the life of the rules according to the Lifetime Model | [Details](../bin/rucio-atropos)
rucio-auditor | Replica | Find inconsistencies on storage, for example, dark data discovery | [Details](../bin/rucio-auditor)
rucio-automatix | Replica | Used for testing: injects random data in RSEs to check liveness | [Details](../bin/rucio-automatix)
rucio-bb8 | Replica | Rebalance data across RSEs | [Details](../bin/rucio-bb8)
rucio-cache-client | Replica | Populates information of replicas on volatile storage  | [Details](../bin/rucio-cache-client)
rucio-cache-consumer | Replica | Adds and deletes cache replicas to the Rucio catalog | [Details](../bin/rucio-cache-consumer)
rucio-conveyor-finisher | Transfer | Updates Rucio internal state after the file transfer has finished | [Details](../bin/rucio-conveyor-finisher)
rucio-conveyor-poller | Transfer | Polls updates from the transfer tool to check the transfer state | [Details](../bin/rucio-conveyor-poller)
rucio-conveyor-preparer | Transfer | Prepares data transfers | [Details](../bin/rucio-conveyor-preparer)
rucio-conveyor-receiver | Transfer | Sister of poller, instead of polling for updates, it reads transfer tools notifications to check transfer state | [Details](../bin/rucio-conveyor-receiver)
rucio-conveyor-stager | Transfer | Issues staging (bring online) requests to tape RSEs  | [Details](../bin/rucio-conveyor-stager)
rucio-conveyor-submitter | Transfer | Submit transfer requests to the transfer tool (prepares the transfer as well if the conveyor-preparer is not enabled) | [Details](../bin/rucio-conveyor-submitter)
rucio-conveyor-throttler | Transfer | Queues transfer requests inside Rucio, applying limits, ex: only one transfer at a time, etc ... | [Details](../bin/rucio-conveyor-throttler)
rucio-dark-reaper | Deletion | Deletes quarantined replicas | [Details](../bin/rucio-dark-reaper)
rucio-dumper | Consistency | Dumps file lists. The rucio-auditor consumes these dumps to discover dark data | [Details](../bin/rucio-dumper)
rucio-follower | Telemetry | Aggregates events affecting DIDs | [Details](../bin/rucio-follower)
rucio-hermes | Telemetry | Sends Rucio messages to external services (InfluxDB, OpenSearch, ActiveMQ, ...) | [Details](../bin/rucio-hermes)
rucio-judge-cleaner | Rule | Cleans expired replication rules | [Details](../bin/rucio-judge-cleaner)
rucio-judge-evaluator | Rule | Creates and evaluates replication rules based on their state (OK/REPL/STUCK)  | [Details](../bin/rucio-judge-evaluator)
rucio-judge-injector | Rule | Asynchronously injects replication rules  | [Details](../bin/rucio-judge-injector)
rucio-judge-repairer | Rule | Repairs stuck replication rules (STATE=STUCK) | [Details](../bin/rucio-judge-repairer)
rucio-kronos | Telemetry | Consumes Rucio tracing messages, updates access time of replicas and access count of DIDs | [Details](../bin/rucio-kronos)
rucio-minos | Replica | Reads list of physical file names (PFNs) declared bad and classifies them in: temporary unavailable  and permanently unavailable (to be recovered by the necromancer daemon)  | [Details](../bin/rucio-minos)
rucio-minos-temporary-expiration | Replica | Moves back TEMPORARY_UNAVAILABLE replicas into AVAILABLE state  | [Details](../bin/rucio-minos-temporary-expiration)
rucio-necromancer | Deletion | Works on permanently unavailable replicas, it tries to recover the data from other valid replicas if any, else declares the replica as lost  | [Details](../bin/rucio-necromancer)
rucio-oauth-manager | Auth/Authz | Deletes expired access tokens (in case there is a valid refresh token, expired access tokens will be kept until refresh_token expires as well.) and deletion of expired OAuth session parameters | [Details](../bin/rucio-oauth-manager)
rucio-reaper | Deletion | Deletes replicas that don't have locks anymore, i.e. they have a tombstone set | [Details](../bin/rucio-reaper)
rucio-suspicious-replica-recoverer | Replica | Declares suspicious replicas as bad if they are found available on other RSEs, so necromancer will work on them | [Details](../bin/rucio-replica-recoverer)
rucio-rse-decommissioner | Deletion | Decommissions an RSE. The actions to perform are specified in decommissioning profiles (delete all data, move replicas, etc ...)  | [Details](../bin/rucio-rse-decommissioner)
rucio-storage-consistency-actions | Consistency | Applies corrective actions as a result of a consistency check on an RSE | [Details](../bin/rucio-storage-consistency-actions)
rucio-transmogrifier | Rule | Creates replication rules for DIDs matching a subscription | [Details](../bin/rucio-transmogrifier)
rucio-undertaker | Deletion | Manages expired DIDs, deleting them (does not delete replicas)  | [Details](../bin/rucio-undertaker)

## FAQ


### Conveyor daemons
It is important to know the following:
* The throttler daemon will need the preparer to work.
* The preparer is a daemon that optimizes transfer requests, while recommended to install, it's not mandatory.
* The submitter is the only daemon needed to submit transfers and can do a subset of what the preparer can do.
* To update the state of requests, the conveyor poller (polls for changes) or conveyor receiver (listens for changes)  are needed to understand the new state.
* The finisher analyzes this new state and updates the state.

### What happens when a rule is stuck?
The judge repairer will analyze why the transfer is stuck and try to unstuck it, eventually resubmitting the request.

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

## How is a replica declared bad?
- An operator can declare a replica as bad issuing rucio cli commands.
```
rucio-admin replicas declare-bad [-h] --reason REASON [--inputfile [INPUTFILE]] [--allow-collection] [--lfns [LFNS]] [--scope [SCOPE]] [--rse [RSE]] [listbadfiles ...]
```

These bad replicas are taken by the necromancer daemon and then deleted if they cannot be recovered from other RSEs.
- the suspicious-replica-recoverer is a daemon that will analyze different counters (transfer errors, download errors, etc ...) to mark replicas as being suspicious to have an issue. After hitting
a certain limit (configurable by `--nattempts` flag), the replica is marked as bad and eventually consumed by the necromancer.

## What is the purpose of undertaker?
A dataset is "never" deleted, however, when the dataset is known to be bad, there is no point having it in the catalog. The undertaker daemon takes care to remove these datasets.
An operator will set an expiration date in the past of the DIDs and this daemon will delete the dataset from the DB. If there were any replicas attached, the replicas will be deleted as well.
