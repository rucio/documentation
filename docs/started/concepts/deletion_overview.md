---
id: deletion-overview
title: Deletion Overview
---

Deletion in rucio can be performed in broadly two ways.

- Rule based deletion:

    Each rule has a corresponding lifetime associated with it (default is None). The attribute `expires at` of the rule is the time when the lifetime is set plus the lifetime associated with rule.
    Additionally each rule can be `locked` for additional protection. If a rule is locked the rule is protected from expiration.
    The `Judge-cleaner` daemon is responsible for handling expired rules. If an expired rule is not locked it sets `tombstones` on all replicas not covered by the rule anymore (or any other rule). These replicas then become eligible for deletion.

- DID based deletion:

    Additionally, each did also has a lifetime associated with it (default is None). The metadata `expires_at` of the did is calculated similarly to a rule.
    The `Undertaker` daemon is responsible for handling expired dids. The daemon checks if none of the associated rules to the did are locked, if not it removes all rules of the did (see section above). The did itself is then removed from the catalog.

**The did expiration overrules the rule expiration. But the locked rules are protected.**

After the tombstone is set for replicas, the actual data deletion is done by the `Reaper` daemon. The reaper physically deletes the tombstoned replicas from storage.
The deletion service supports two different modes: greedy and non-greedy.

- Greedy
    
    The reaper daemon gets all the replicas with tombstone in the RSE and immediately delete all replicas. 
    
- Non-greedy

    The reaper daemon first check if the free space is needed in the RSE. The needed free space is the difference of minimum free space (attrribute set for RSE) and actual free space in RSE. Deletion only occurs once free space is needed.
    Deletions are processed by Least Recently Used (LRU) algorithm, thus oldest accessed (tombstoned) replicas are deleted first.


![Judge-cleaner chart](/img/Judge-cleaner.png)

![Undertaker chart](/img/undertaker.png)

![Reaper chart](/img/reaper.png)
