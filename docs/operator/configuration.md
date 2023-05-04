---
id: configuration
title: Configuration
sidebar_label: Configuration
---

## Prerequisites

You need to have a Rucio server up and running with the root account
created. Please refer to [installation documentation](operator/installing_server.md) for
further information

## Creating new users

The first step is to create new accounts:

```bash
  $ rucio-admin account add --type USER --email jdoe@blahblih.com jdoe
```

You can choose from different types in the list USER, GROUP, SERVICE. Different
policies/permissions can be set depending on the account type.  Once the account
is created, you need to create and attach an identity to this account:

```bash
  $ rucio-admin identity add --type X509 \
      --id "CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah" \
      --email jdoe@blahblih.com --account jdoe
```

The list of possible identity types is X509, GSS, USERPASS, SSH, OIDC:

```bash
  $ rucio-admin account list-identities jdoe
  Identity: CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah,        type: X509
```

You can set attributes to the users:

```bash
  $ rucio-admin account add-attribute --key country --value xyz jdoe
```

And list these attributes:

```bash
  $ rucio-admin account list-attributes jdoe
  +---------+-------+
  | Key     | Value |
  |---------+-------|
  | country | xyz   |
  +---------+-------+
```

You can also list all the accounts matching a certain attribute using the filter
option:

```bash
  $ rucio-admin account list --filters "country=xyz"
  jdoe
```

### X509 identity format

By default, X509 identities must be formatted according to the relevant RFCs: a
comma-separated list of the DN components, ordered last-to-first (e.g.
`CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah`).  However, operators might
prefer to store them in the legacy format: a slash-separated list of the DN
components, starting with a slash, ordered first-to-last (e.g.
`/DC=blah/DC=blih/OU=Organic Units/OU=Users/CN=jdoe`).

To do so, it is necessary to enable the `LegacyDNStringFormat` configuration
option of mod_ssl.  When using the official Rucio container images, one must set
the `RUCIO_HTTPD_LEGACY_DN` environmental variable to `True`.  For custom
installations, one must edit the appropriate Apache configuration file so that
the `SSLOptions` directive looks like this:

```
SSLOptions +StdEnvVars +LegacyDNStringFormat
```

## Creating scope

One needs then to create some scopes associated with the accounts:

```bash
  $ rucio-admin scope add --account jdoe --scope user.jdoe
```

Only the owner of the scope or privileged users can write into the scope.

To list all the scopes:

```bash
  $ rucio-admin scope list
  user.janedoe
  user.jdoe
```

## Creating new RSEs

To create a new RSE:

```bash
  $ rucio-admin rse add SITE3_DISK
  Added new RSE: SITE3_DISK
```

Then you can attach protocols to this RSE. In the following example, a file
protocol is added to the site created previously:

```bash
  $ rucio-admin rse add-protocol --hostname blahblah --scheme file \
      --impl rucio.rse.protocols.posix.Default --domain-json \
      '{"wan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}, \
      "lan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}}' \
      --prefix /tmp/SITE3_DISK/ SITE3_DISK
```

The different parameters are explained in more details if you use the --help
option.

Last step is to create RSE attributes that can be used to build RSE expressions:

```bash
  $ rucio-admin rse set-attribute --rse SITE3_DISK --key tier --value 1
  Added new RSE attribute for SITE3_DISK: tier-1
  $ rucio-admin rse set-attribute --rse SITE3_DISK --key disk --value 1
  Added new RSE attribute for SITE3_DISK: disk-1
  $ rucio list-rses --rses "disk=1&tier=1"
  SITE3_DISK
```

Let's check that everything is properly defined:

```bash
  $ rucio-admin rse info SITE3_DISK
  Settings:
  =========
    third_party_copy_protocol: 1
    rse_type: DISK
    domain: [u'lan', u'wan']
    availability_delete: True
    delete_protocol: 1
    rse: SITE3_DISK
    deterministic: True
    write_protocol: 1
    read_protocol: 1
    staging_area: False
    credentials: None
    availability_write: True
    lfn2pfn_algorithm: default
    availability_read: True
    volatile: False
    id: 4079d6873603462b8867e4a49674cc11
  Attributes:
  ===========
    tier: True
    disk: True
    istape: False
    SITE3_DISK: True
  Protocols:
  ==========
    file
      extended_attributes: None
      hostname: blahblih
      prefix: /tmp/SITE3_DISK/
      domains: {u'wan': {u'read': 1, u'write': 1, u'third_party_copy': 0, \
        u'delete': 1}, u'lan': {u'read': 1, u'write': 1, u'delete': 1}}
      scheme: file
      port: 0
      impl: rucio.rse.protocols.posix.Default
  Usage:
  ======
    rucio
      used: 0
      rse: SITE3_DISK
      updated_at: 2018-02-22 13:05:45
      free: None
      source: rucio
      total: 0
```

## Setting quota and permissions

The root account has all the privileges. You can define other admin accounts by
setting the account attribute admin:

```bash
  $ rucio-admin account add-attribute --key admin --value 1 jdoe
  $ rucio-admin account list --filter "admin=1"
  jdoe
```

The permissions are easily tunable by overloading the [generic permission file](https://github.com/rucio/rucio/blob/master/lib/rucio/core/permission/generic.py).

This is an advanced feature that is not explained there, for more details get in
touch with the developers.

To set the quota for one account on a given RSE:

```bash
  $ rucio-admin account set-limits jdoe SITE3_DISK 10000000000000
  Set account limit for account jdoe on SITE3_DISK: 10.000 TB
  $ rucio-admin account get-limits jdoe SITE3_DISK
  Quota on SITE3_DISK for jdoe : 10 TB
```
