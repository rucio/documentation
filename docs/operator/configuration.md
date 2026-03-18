---
id: configuration
title: Configuration
sidebar_label: Configuration
sidebar_position: 5
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

A complete configuration guide for RSEs can be found [here](/operator/rse_configuration), including CLI and Python API instructions.
Below is a check-list of things to do when creating a new RSE.

1. Create a new RSE:
```bash
$ rucio rse add $RSE_NAME
```

2. Attach a transfer protocol

Below is the protocol for a posix RSE (suitable for testing and single-node deployments). Other configurations can be found [here](/operator/rse_configuration#rse-configuration-examples).

```bash
$ rucio rse protocol add \
  --hostname $HOSTNAME \
  --scheme $SCHEME \
  --impl rucio.rse.protocols.posix.Default \
  --domain-json \
      '{"wan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}, \
      "lan": {"read": 1, "write": 1, "third_party_copy": 0, "delete": 1}}' \
  --prefix /tmp/$RSE_NAME/ $RSE_NAME
```

3. Set RSE Attributes

Different RSE attributes and their uses are listed [here](/operator/configuration_parameters#rse-attributes). Other RSE attributes can be added and used for plugins, policies, and organization via [RSE Expressions](/started/concepts/rse_expressions).

```bash
$ rucio rse attribute add $RSE_NAME --key tier --value 1
```

4. Verify main settings

List the protocols, settings, and attributes for the RSE.
```bash
$ rucio rse show $RSE_NAME
```

5. Set user limits
Sets how much an account can write to an RSE. If no limit has been set for an account, it cannot be used to write to the given RSE.

```bash
$ rucio account limit add $USER --rse $RSE_NAME --bytes 10GB
```
