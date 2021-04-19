---
id: cli-admin-examples
title: Rucio administration CLI: Examples
sidebar_label: Rucio administration CLI: Examples
---

Rucio provides a CLI for administrative tasks. The get methods can be executed by
any user, but the set methods require some admin privileges. See the [rucio-admin help page](bin/rucio-admin.md).

## Account and identity methods

To create a new account::

```bash
  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe
```

You can choose different types in the list USER, GROUP, SERVICE. Different policies/permissions can be set depending on the account type.  Once the account is created, you need to create and attach an identity to this account::

```bash
  $ rucio-admin identity add --type X509 --id "/DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe" --email jdoe@blahblih.com --account jdoe
```
The list of possible identity types is X509, GSS, USERPASS, SSH::

```bash
  $ rucio-admin account list-identities jdoe
  Identity: /DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe,        type: X509
```

You can set attributes to the users::

```bash
  $ rucio-admin account add-attribute --key country --value xyz jdoe
```
And list these attributes::

```bash
  $ rucio-admin account list-attributes jdoe
  +---------+-------+
  | Key     | Value |
  |---------+-------|
  | country | xyz   |
  +---------+-------+
```

You can also list all the accounts matching a certain attribute using the filter option::
```bash
  $ rucio-admin account list --filters "country=xyz"
  jdoe
```

To set the quota for one account on a given RSE::

```bash
  $ rucio-admin account set-limits jdoe SITE2_SCRATCH 10000000000000
  Set account limit for account jdoe on RSE SITE2_SCRATCH: 10.000 TB
  $ rucio-admin account get-limits dcameron SITE2_SCRATCH
  Quota on SITE2_SCRATCH for jdoe : 10 TB
```

## Scope methods

To create a new scope::
```bash
  $ rucio-admin scope add --account jdoe --scope user.jdoe
```
Only the owner of the scope or privileged users can write into the scope.

To list all the scopes::
```bash
  $ rucio-admin scope list
  user.janedoe
  user.jdoe
```

## RSE methods

To create a new RSE::
```bash
  $ rucio-admin rse add SITE2_SCRATCH
```

To add a RSE attribute::
```bash
  $ rucio-admin rse set-attribute --rse SITE2_SCRATCH --key country --value xyz
```

To check an RSE attribute::
```bash
  $ rucio-admin rse get-attribute SITE2_SCRATCH
  country: xyz
```

## Replica methods

To declare bad (i.e. corrupted or lost replicas)::
```bash
  $ rucio-admin replicas declare-bad --reason "File corrupted" https//path/to/lost/file
```
