---
id: deletion_overview
title: Deletion Overview
---

Deletion in Rucio can be performed in broadly two ways.

- Rule based deletion:

    Each rule has a corresponding lifetime associated with it (default is None). The attribute `expires_at` of the rule is the time when the lifetime is set plus the lifetime associated with the rule.
    Additionally each rule can be `locked` for additional protection. If a rule is locked the rule is protected from expiration.
    The `Judge-cleaner` daemon is responsible for handling expired rules. If an expired rule is not locked it sets `tombstones` on all replicas not covered by the rule anymore (or any other rule). These replicas then become eligible for deletion.

- DID based deletion:

    Additionally, each DID also has a lifetime associated with it (default is None). The metadata `expires_at` of the DID is calculated similarly to a rule.
    The `Undertaker` daemon is responsible for handling expired DIDs. The daemon checks if none of the associated rules to the DID are locked, if not it removes all rules of the DID (see section above). The DID itself is then removed from the catalog.
    If all the DIDs in a collection type dataset are deleted, the collection itself is not removed unless it also has an expired lifetime.

**The DID expiration overrules the rule expiration. But the locked rules are protected.**

After the tombstone is set for replicas, the actual data deletion is done by the `Reaper` daemon. The reaper physically deletes the tombstoned replicas from storage.
The deletion service supports two different modes: greedy and non-greedy.

- Greedy
    
    The reaper daemon gets all the replicas with tombstone in the RSE and immediately deletes all replicas. 
    
- Non-greedy

    The reaper daemon first checks if the free space is needed in the RSE. The needed free space is the difference of minimum free space (attribute set for RSE) and actual free space in RSE. Deletion only occurs once free space is needed.
    Deletions are processed by Least Recently Used (LRU) algorithm, thus oldest accessed (tombstoned) replicas are deleted first.


```mermaid
flowchart TB

    A((Undertaker))-->1[Get expired dids]

    1-->2[Get all rules for did]
    2-->D{Are Rules Locked?}

    D--"yes"-->f([Finished])
    D--"no"--> sub1[Remove Rules]

    subgraph sg[ ]
        sub1[Remove Rules] --> sub2["`Set tombstones 
                        on replicas`"]
        sub2 --> sub3[Remove DID]
        sub3 --> sub4{"`Does the DID 
                        have children?`"}
        sub4 --yes-->sub5["`Remove Child
                             DID and Replicas`"]
    end

    sub4 --"no"--> f
    sub5--> f
```


```mermaid
    graph TD

    R((Reaper)) --> RSEs[Get all RSEs]
    RSEs --> D1{RSE.availability_delete}
    D1--"False"--> f([Finished])
    D1--"True"--> Greedy_RSE{Greedy RSE?}

    %% Non-greedy RSE Logic
    Greedy_RSE--"no"--> MinFreeSpace{Min free space <= Actual Free Space}
    MinFreeSpace--"no"--> f
    MinFreeSpace--"yes"--> i[List replicas with tombstones] --> id4[Apply LRU algorithm to replicas]
    id4 --> RemoveReplicas[Remove replicas]

    %% Greedy RSE Logic
    Greedy_RSE--"yes" --> j[List replicas with tombstones] --> RemoveReplicas --> f


```

