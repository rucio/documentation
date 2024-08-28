---
id: suspicious-replica-recoverer
title: Suspicious Replica Recoverer
---

Rucio has a daemon that is in charge of handling and recovering suspicious replicas, called the suspicious replica recoverer. A suspicious replica is a file where an attempt to access the file resulted in certain types of error messages. Whether the error was the result of an issue with the file itself or if the problem was caused by something else (e.g. there could have been a problem with the server on which the file is located), is unknown and needs to be taken into account by the suspicious replica recoverer.

An overview of the typical workflow for a replica before it reaches the suspicious replica recoverer can be seen [here](https://rucio.cern.ch/documentation/started/concepts/replica_workflow/).

## Suspicious Replicas

Replicas can have various states, two of which are `SUSPICIOUS` and `BAD`. Files that are `BAD` need to either be replaced or removed. The job of the suspicious replica recoverer is to decide how a suspicious replica should be handled. 

A replica can be declared suspicious multiple times: each time an attempt to access the replica results in an error message, the replica is declared suspicious. This allows the daemon to handle replicas differently depending on how many times it has been declared suspicious. As long as a file has been declared suspicious less than a certain number of times (referred to as `nattempts`), it's assumed that there is nothing wrong with the replica and that the errors can be ignored. Once there are more that `nattempts` suspicious declarations, the replica is handled by the daemon.

Before replicas are handled individually, the daemon checks how many suspicious replicas are on each Rucio storage element (RSE), which are the servers that host replicas. If an RSE has more than `limit_suspicious_files_on_rse` suspicious replicas, then it is assumed that the problem lays with the RSE and not the replicas themselves. Under such a circumstance, the replicas on that RSE are set to the state `TEMPORARILY UNAVAILABLE` for three days. A replica in this state can't be interacted with. The assumption is that after three days, problems with the RSE will have been fixed. If not, then the replicas on that RSE will end up being declared suspicious en masse, which will result in them being set as `TEMPORARILY UNAVAILABLE` again. This cycle will be repeated until the underlying issue is solved.

## Last remaining copy of a file

Before any handling of a replica is done, the daemon first checks to see if the replica is the last remaining copy of a file. Specifically, if there is another copy of the replica on a different RSE, then the suspicious replica can safely be declared `BAD`. If, however, the replica is the last remaining copy, then steps are taken to decide whether or not the replica can be declared `BAD`:
-**Auditor/checksum**: if the replica was declared `SUSPICIOUS` by the auditor daemon or if the term `checksum` appears in the error message that lead to the replica being declared `SUSPICIOUS`, then the replica is declared `BAD`.
-**User and log files**: if the replica is for a user or log file, then the replica is declared `BAD`.
-**Policy**: if a replica survives the first two checks, then the handling of the replica is decided by its associated policy.

## Replica policies

A policy defines how a replica is to be handled by the daemon based on the replica's datatype and scope. This approach allows for flexibility and specific handling. By default, all replicas are ignored, meaning that if there is no policy specified for the datatype/scope, then no actions are taken on the replica and it will remain untouched.

The current polices are:
-**ignore**: this is the default policy. Datatypes and scopes can be explicitly set to be ignored, which highlights that a decision has purposefully been made to not perform any actions on these replicas. This is done to prevent mistakes in the future.
-**declare bad**: this dictates that any associated datatypes or scopes will be declared `BAD` by the daemon.
-**dry run**: this policy makes the daemon handle the replicas as if they were to be declared `BAD`, but at the final step, no actions are taken. This results in log messages with which it becomes possible to see how many replicas of the given datatype/scope would be declared `BAD` by the daemon.

The replica policies can easily be expanded in the future.

The policies are stored in a JSON file, an example of which can be seen in he following:

````
[
    {
        "action": "declare bad",
        "datatype": ["HITS"],
        "scope": []
    },
    {
        "action": "ignore",
        "datatype": ["RAW"],
        "scope": []
    }
    {
        "action": "dry run",
        "datatype": [],
        "scope": ["mc.*"]
    }
]
````


## `nattempts = 1`

A very large number of suspicious replicas have `nattempts = 1`. To clean up the database, replicas with `nattempts = 1` that also have a policy that would result in the replica being declared bad are given a "boost". This means that rules for those replicas are created. These rules only exist to create an attempt to interact with the replica. If there is in fact a problem with the replica (or the RSE), then each rule will result in an error and that replica will be declared `SUSPICIOUS` once for each rule, which will bring the number of declarations over the `nattempts` barrier. This results in the replica being handled normally by the daemon during the daemon's next cycle.

## Passive and active modes
The suspicious replica recoverer has two modes of operation:
- **Passive (default)**: no actions are taken by the daemon, but log files are generated as if the actions were taken (like a dry-run mode). Useful for testing daemon runs without affecting data.
- **Active**: the daemon is allowed to take actions on the replicas. This option has to explicitly be set when the daemon is called.


