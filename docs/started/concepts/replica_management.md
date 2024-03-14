---
title: Replica management with replication rules
---

Replica management is based on replication rules defined on data identifiers
(files, datasets, containers). A replication rule is owned by an account and
defines the minimum number of replicas to be available on a list of RSEs,
denoted by an [RSE Expression](rse_expressions.md).  Accounts are allowed to set
multiple rules[^1]. Rules may optionally have a limited lifetime and can be
added, removed or modified at any time.

An example listing of replication rules is given below:

- prod: 1x replica @ CERN, no lifetime
- barisits: 1x replica @ US-T2, until 2019-01-01
- vgaronne: 2x replica @ T1, no lifetime

A rule engine validates the rules and creates transfer primitives to fulfil all
rules, e.g. transfer a file from RSE A to RSE B. The rule engine is triggered
when a new rule is defined on an existing data identifier, or when a file is
added to a dataset with existing rules.  The rule engine will only create the
minimum set of necessary transfer primitives to satisfy all rules.

Notifications can be provided for rules and their underlying transfer
requests. All transfer requests are transient.

Some examples of replication rules are listed
[here](replication_rules_examples.md).

## Footnotes

[^1]: The system may reject rules if these violate other policies, e.g., only
    specific accounts are allowed to request replication rules for tape systems.
