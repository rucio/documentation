---
id: deletion-overview
title: Deletion Overview
---

Deletion in rucio can be performed in broadly two ways.

- Rule based deletion:

    Each rule have a corresponding lifetime associated with it (default is None). The attribute `expires at` of the rule is time when the lifetime is set plus the lifetime associated with rule.
    Also each rule can also have attribute called `lock`, if a rule is locked then the rule is protected from any deletion.
    Daemon `Judge-cleaner` is responsible for handling expired rule. It checks all the expired rule and if the rule is locked no any action os taken else it removes the rule (delet rule) and set a tombstone to the replica associated with the rule.

- DID based deletion:

    On the other hand, each dids also has lifetime associated with it (default is None). The metadata `expires at` of the did is calculated same a rule.
    Daemon `Undertaker-undertaker` is responsible for handling expired dids. It checks all the expired dids and gets all the rules associated with the did. If rule of did is NOT locked then it removes all the rules of the did, set tombstone to all replicas , removes the did itself. If a did is has child , it removes all the child dids and sets tombstone for the child's replicas.

**The did expiration overrules the rule expiration. But the locked rules are protected.**

After the tombstone is set for replicas, actual file deletion is done by daemon `Reaper-repear`.  It deletes the replicas RSE by RSE. This daemon check the `availability_delete` atrribute of RSEs and if True it then checks what mode of deletion is set in RSEs.
The deletion service supports two different modes: greedy and non-greedy.

- Greedy
    
    The undertaker daemon gets all the replicas with tombstone in RSEs and immediately delete all replicas. 
    
- Non-greedy

    The undertaker daemon first check if the free space is needed in RSEs. The needed free space is the difference of minimum free space (attrribute set for RSE) and actual free space in RSE. If the needed free space is negative then no deletion occurs.
    else it gets all the replicas with tombstone in RSEs. The iy useses a Least Recently Used (LRU) algorithm to select replicas for deletion. 


![Judge-cleaner chart](/img/Judge-cleaner.png)

![Undertaker-undertaker chart](/img/Undertaker-undertaker.png)

![Repear-repear chart](/img/Repear-repear.png)

