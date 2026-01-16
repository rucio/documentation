---
title: Replication rule examples
---

Replica management is based on replication rules defined on data identifiers. A
replication rule gets resolved and issues replica locks on the physical
replicas.

A replication rule consists (besides other parameters) of a factor representing
the numbers of replicas wanted and a Rucio Storage Element Expression that
allows to select a set of probable RSEs to store the replicas.

The [__RSE Expression__](rse_expressions.md) gets resolved into a set of RSEs,
which are possible destination RSEs for the number of replicas the user wants to
create.

## Examples

### I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs

```bash
username@host:~$ rucio rule add --copies 2 --rses 'tier=1' scope:first_dataset scope:second_dataset
```

To see all possible targets, the command `rucio rse list` can be used with the same RSE expression:

```bash
username@host:~$ rucio rse list --rses 'tier=1'
```

### I want to have 2 replicas on whatever T2 RSEs in the UK but not in Glasgow

```bash
username@host:~$ rucio rule add --copies 2 --rses 'tier=2&country=uk\site=GLASGOW' scope:first_dataset scope:second_dataset
```
