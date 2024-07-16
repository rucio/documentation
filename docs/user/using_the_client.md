---
id: using_the_client
title: Using the Client
---

Rucio provides several commands for the end-user. See [executables](bin/rucio.md).
The command line client is called ``rucio``.


## Getting help

To get an overview of the available ``rucio`` subcommands and flags, run:

```bash
rucio --help
```

## Enable command line autocompletion

If you would like to automatically complete ``rucio`` commands, install the
[argcomplete](https://pypi.org/project/argcomplete/) package and run:

```bash
eval "$(register-python-argcomplete rucio)"
```

Next, type ``rucio `` (note the trailing space) and press the <kbd>Tab</kbd>
key to see all available options. To use the autocompletion feature, type enough
letters of a subcommand or flag to uniquely define it and then press
<kbd>Tab</kbd>.

## Getting user information

The first thing you might try is to check who you are:

```bash
$ rucio whoami
status     : ACTIVE
account    : jdoe
account_type : SERVICE
created_at : 2014-01-17T07:52:18
updated_at : 2014-01-17T07:52:18
suspended_at : None
deleted_at : None
email      : jdoe@blahblah.com
```

You can switch between different accounts by setting the `RUCIO_ACCOUNT`
variable:

```bash
$ export RUCIO_ACCOUNT=root
$ rucio whoami
status     : ACTIVE
account    : jdoe
account_type : SERVICE
created_at : 2014-01-17T07:51:59
updated_at : 2014-01-17T07:51:59
suspended_at : None
deleted_at : None
email      : root@blahblah.com
```

If you try to authenticate with an account that is not mapped with your
credentials:

```bash
$ export RUCIO_ACCOUNT=janedoe
$ rucio whoami
cannot get auth_token
2018-01-30 16:50:08,554 ERROR   Cannot authenticate.
Details: x509 authentication failed
2018-01-30 16:50:08,554 ERROR   Please verify that your proxy is \
  still valid and renew it if needed.
```

The VO to authenticate against is set in the configuration file, if you're
running a *multi-VO* instance of Rucio. However you can specify a different VO
as a CLI argument if your credentials map to an account there too:

```bash
$ rucio whoami
status     : ACTIVE
account    : jdoe
account_type : SERVICE
created_at : 2014-01-17T07:52:18
updated_at : 2014-01-17T07:52:18
suspended_at : None
deleted_at : None
email      : jdoe@normalvo.com
```

```bash
$ rucio --vo abc --account root whoami
status     : ACTIVE
account    : root
account_type : SERVICE
created_at : 2014-01-17T07:51:59
updated_at : 2014-01-17T07:51:59
suspended_at : None
deleted_at : None
email      : root@abc.com
```

## Open ID Connect authentication examples

There are 3 CLI login methods. Two were introduced in order to avoid typing the
password in the Rucio CLI. The default Identity Provider `(IdP)/issuer` is
configured on the side of Rucio server. In case multiple IdPs are supported,
user can specify which one he desires to use by `--oidc-issuer=\<IdP nickname\>`
option (where IdP nickname is the key under which issuers are configured on
Rucio server side in the *idpsecrets.json* file). In the following examples we
assume that user does not want to use the rucio account name specified in the
*rucio.cfg* file on the client side (if so `-a` parameter can be omitted).  If
*auth_type* is specified to be "oidc" in the *rucio.cfg* file, `-S` can be
omitted as well.  Furthermore, we use the same default issuer as configured on
Rucio server side.

1. Login via user's browser + fetch code:

  ```bash
  rucio -a=\<rucio_account_name\> -S=OIDC -v whoami
  ```

1. Login via user's browser + polling Rucio auth server:

  ```bash
  rucio -a=\<rucio_account_name\> -S=OIDC --oidc-polling -v whoami
  ```

1. Automatic login:

  ```bash
  rucio -a=\<rucio_account_name\> \
    -S=OIDC --oidc-user=\<idp_username\> \
    --oidc-password=\<idp_password\> \
    --oidc-auto \
    -v \
    whoami
  ```

We strongly discourage this approach, typing your password in CLI does not
comply with OAuth2/OIDC standard !

Options for automatic token refresh: Assuming the rucio-oauth-manager daemon is
running on the Rucio server side, one can also grant Rucio a refresh token and
specify the time for which Rucio should act on behalf of the user (in hours)
using the `--refresh-lifetime` option:

```bash
rucio -a=\<rucio_account_name\> \
  -S=OIDC \
  --oidc-scope="openid profile offline_access" \
  --oidc-refresh-lifetime=24 \
  -v \
  whoami
```

If Rucio Server is granted a user both valid access and refresh tokens, it is
also possible to configure Rucio Client to ask Rucio Server for token
refresh. Assuming user used one of the 3 CLI authentication methods above +
requested offline_access in the scope, rucio.cfg file can be configured with the
following parameters in the `[client]` section:

```bash
[client]
auth_oidc_refresh_active = true
auth_oidc_refresh_before_exp = 20
```

`auth_oidc_refresh_active` is false by default. If set to true, the Rucio Client
will be following up token expiration timestamp. As soon as the current time
gets to `auth_oidc_refresh_before_exp` minutes (20 min default) before token
expiration, Rucio Client will ask Rucio Server for token refresh with every
command. If the token has been refreshed in the recent 5 min already once, the
same one will be returned (protection on the Rucio Server side). If the
presented token has been refreshed automatically on the Rucio Server side by a
oauth_manager daemon run, it will return this existing new token. If the
presented token is invalid/expired/does not have refresh token in the DB, no
refresh will be attempted.

Example of rucio.cfg file configuration with automatic token refresh:

```cfg
[client]

rucio_host = https://\<rucio_host\>:443
auth_host = https://\<rucio_auth_host\>:443
auth_type = oidc
account = \<rucio_account_name\>
oidc_audience = rucio
oidc_scope = openid profile offline_access
oidc_issuer = wlcg
auth_oidc_refresh_active = true
auth_oidc_refresh_before_exp = 20
```

Then, you should be able to do simply:

```bash
rucio -v whoami
```

and follow the instruction for first log-in with your browser. New token will be
requested before the current expires if a user types a rucio command within
`auth_oidc_refresh_before_exp` minutes before the expiry.  Note: If user does
not use Rucio Client within `auth_oidc_refresh_before_exp` minutes before token
expires, it will be necessary to re-authenticate asking for a new offline_access
token.

If a user wishes to authenticate with Rucio using a JSON web token not issued
via the Rucio login mechanisms (CLI, WebUI), one has to make sure that:

- The token scope claim is no less than the minimum scope (e.g. 'openid
  profile') required by the Rucio Auth server (configured there in the rucio.cfg
  file).
- same as above is true for the use of audience claim
- token issuer is known to Rucio Authentication server
- the identity of the token (`SUB=\<user sub claim\>, ISS=\<issuer url\>`) is
  assigned to an existing Rucio account (pre-provisioned)

If so, one can directly present the token to the Rucio REST endpoint in the
`X-Rucio-Auth-Token` header, e.g.:

```python
python
import requests
s=requests.session()
your_token=\<your JWT access token string\>
headers={'X-Rucio-Auth-Token': your_token}
address='https://\<Rucio Auth Server Name\>/accounts/guenther'
result=s.get(address, headers=headers, verify=False)
result.text
u'{
  "status": "ACTIVE",
  "account": "guenther",
  "account_type": "USER",
  "created_at": "2019-11-13T13:01:58",
  "suspended_at": null,
  "updated_at": "2019-11-13T13:01:58",
  "deleted_at": null,
  "email": "jaroslav.guenther@gmail.com"
}'
```

There is also an option to specify a `auth_token_file_path` in the `client`
section of the rucio.cfg file. Rucio Client will then store and search for
user's token saved in such file:

```cfg
[client]
auth_token_file_path = /path/to/token/file
```

## Querying basic information about RSEs

You can query the list of available RSEs:

```bash
$ rucio list rse
SITE1_DISK
SITE1_TAPE
SITE2_DISK
SITE2_SCRATCH
SITE3_TAPE
```

If the RSEs are tagged with attributes you can build RSE expressions and query
the sites matching these expressions:

```bash
$ rucio list rse --rse "tier=1&disk=1"
SITE1_DISK
SITE2_DISK
```

## Querying information about DIDs

To list all the possible scopes:

```bash
$ rucio list scope
mc
data
user.jdoe
user.janedoe
```

You can query the DIDs matching a certain pattern. It always requires to specify
the scope in which you want to search:

```bash
$ rucio list did --did user.joe*
+-------------------------------------------+--------------+
| SCOPE:NAME                                | [DID TYPE]   |
|-------------------------------------------+--------------|
| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |
| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |
| user.jdoe:user.jdoe.test.dataset.1        | DATASET      |
| user.jdoe:user.jdoe.test.dataset.2        | DATASET      |
| user.jdoe:test.file.1                     | FILE         |
| user.jdoe:test.file.2                     | FILE         |
| user.jdoe:test.file.3                     | FILE         |
|-------------------------------------------+--------------|
```

You can filter by key/value, e.g.:

```bash
$ rucio list did --filter type=CONTAINER
+-------------------------------------------+--------------+
| SCOPE:NAME                                | [DID TYPE]   |
|-------------------------------------------+--------------|
| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |
| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |
|-------------------------------------------+--------------|
```

If you want to resolve a collection (CONTAINER or DATASET) into the list of its
constituents:

```bash
$ rucio list-content user.jdoe:user.jdoe.test.container.1234.1
+------------------------------------+--------------+
| SCOPE:NAME                         | [DID TYPE]   |
|------------------------------------+--------------|
| user.jdoe:user.jdoe.test.dataset.1 | DATASET      |
| user.jdoe:user.jdoe.test.dataset.2 | DATASET      |
+------------------------------------+--------------+
```

You can resolve also the collections (CONTAINER or DATASET) into the list of
files:

```bash
$ rucio list-files user.jdoe:user.jdoe.test.container.1234.1
+-----------------------+---------+-------------+------------+----------+
| SCOPE:NAME            | GUID    | ADLER32     | FILESIZE   | EVENTS   |
|-----------------------+---------+-------------+------------+----------|
| user.jdoe:test.file.1 | 9DF3... | ad:56fb0723 | 39.247 kB  |          |
| user.jdoe:test.file.2 | 67E8... | ad:e3e573b5 | 636.075 kB |          |
| user.jdoe:test.file.3 | 32CD... | ad:22849380 | 641.427 kB |          |
+-----------------------+---------+-------------+------------+----------+
Total files : 3
Total size : 1.316 MB:
```

## Rules operations

You can create a new rule like this:

```bash
$ rucio add rule --lifetime 1209600 \
  --did user.jdoe:user.jdoe.test.container.1234.1 \
  --copies mock1 \
  --rse "tier=1&disk=1"
a12e5664555a4f12b3cc6991db5accf9
```

The command returns the rule_id of the rule.

You can list the rules for a particular DID:

```bash
$ rucio list rule --did user.jdoe:user.jdoe.test.container.1234.1
ID    ACCOUNT  SCOPE:NAME  STATE[OK/REPL/STUCK]  RSE_EXPRESSION  COPIES  EXPIRES
----  -------  ----------  --------------------  --------------  ------  -------
a...  jdoe     user....    OK[3/0/0]             tier=1&disk=1   1       2018...
b...  janedoe  user....    REPLICATING[4/1/1     tier=1&tape=1   2
4...  mc       user....    OK[3/0/0]             tier=1&tape=1   2
```

The state indicates how many locks (physical replicas of the files) are OK,
Replicating or Stuck

## Accessing files

The command to download DIDs locally is called rucio download. It supports
various sets of option. You can invoke it like this:

```bash
# rucio download user.jdoe:user.jdoe.test.container.1234.1
2018-02-02 15:13:08,450 INFO    Thread 1/3 : Starting the download of user.jdoe:test.file.2
2018-02-02 15:13:08,451 INFO    Thread 2/3 : Starting the download of user.jdoe:test.file.3
2018-02-02 15:13:08,451 INFO    Thread 3/3 : Starting the download of user.jdoe:test.file.1
2018-02-02 15:13:08,503 INFO    Thread 1/3 : File user.jdoe:test.file.2 trying \
  from SITE1_DISK
2018-02-02 15:13:08,549 INFO    Thread 2/3 : File user.jdoe:test.file.3 trying \
  from SITE2_DISK
2018-02-02 15:13:08,551 INFO    Thread 3/3 : File user.jdoe:test.file.1 trying \
  from SITE1_DISK
2018-02-02 15:13:10,399 INFO    Thread 3/3 : File user.jdoe:test.file.1 \
  successfully downloaded from SITE1_DISK
2018-02-02 15:13:10,415 INFO    Thread 2/3 : File user.jdoe:test.file.3 \
  successfully downloaded from SITE2_DISK
2018-02-02 15:13:10,420 INFO    Thread 3/3 : File user.jdoe:test.file.1 \
  successfully downloaded. 39.247 kB in 1.85 seconds = 0.02 MBps
2018-02-02 15:13:10,537 INFO    Thread 2/3 : File user.jdoe:test.file.3 \
  successfully downloaded. 641.427 kB in 1.87 seconds = 0.34 MBps
2018-02-02 15:13:10,614 INFO    Thread 1/3 : File user.jdoe:test.file.2 \
  successfully downloaded from SITE1_DISK
2018-02-02 15:13:10,633 INFO    Thread 1/3 : File user.jdoe:test.file.2 \
  successfully downloaded. 636.075 kB in 2.11 seconds = 0.3 MBps
----------------------------------
Download summary
----------------------------------------
DID user.jdoe:user.jdoe.test.container.1234.1
Total files :                                 3
Downloaded files :                            3
Files already found locally :                 0
Files that cannot be downloaded :             0
```

# Migrating from the client versions <35.0.0

In Version 35.0.0, Rucio migrated to a new CLI client.
All commands produce the same output, but are called differently.
The base structure of all commands follows:

```bash
rucio [--authentication args] {command verb} {main command} [{subcommand}] [--command args]
```
When running the old commands, a warning will be displayed, but output will be unchanged.
This new structure replaces both `rucio-admin` and `rucio`.

## Command Verbs

Verb         | Description
:----------- | :-------------
`list`       | Read the state of an object, or view all objects under this category
`add`        | Add a new object to the rucio database
`remove`     | Delete an existing object, opposite of `add`
`set`        | Update an existing object
`unset`      | Reset the state of an object back to its default, opposite of `set`

Not all verbs are implemented for all objects, but besides for a few exceptions, these are the only way to interact with Rucio using the cli.
(The exceptions in this case are the commands `ping`, `whoami`, `upload`, `download`, which are called with `rucio {command}`).

## Command Translations

### `rucio`
Version <35.0.0      | Version >=35.0.0
:----------- | :-------------
"rucio list-file-replicas"| "rucio list replicas"
"rucio list-dataset-replicas"| "rucio list replica --type dataset"
"rucio add-dataset"| "rucio add replica --type dataset"
"rucio add-container"| "rucio add replica --type container"
"rucio attach"| "rucio rucio add did parent"
"rucio detach"| "rucio rucio remove did parent"
"rucio ls"| "rucio rucio list did"
"rucio list-dids"| "rucio list did"
"rucio list-dids-extended"| "rucio --view info list did"
"rucio list-parent-dids"| "rucio list did parent"
"rucio list-parent-datasets"| "rucio list did parent --type dataset"
"rucio list-scopes"| "rucio list scope"
"rucio erase"| "rucio remove did"
"rucio list-files"| "rucio list did --type file"
"rucio list-content"| "rucio list did --type dataset"
"rucio list-content-history"| "rucio list did history"
"rucio get-metadata"| "rucio list did metadata"
"rucio set-metadata"| "rucio add did metadata"
"rucio delete-metadata"| "rucio remove did metadata"
"rucio list-rse-usage"| "rucio list rse usage"
"rucio list-account-limits"| "rucio list account limits"
"rucio add-rule"| "rucio add rule"
"rucio delete-rule"| "rucio remove rule"
"rucio rule-info"| "rucio --view info list rule"
"rucio list-rules"| "rucio list rule"
"rucio list-rules-history"| "rucio --view history list rule "
"rucio update-rule"| "rucio set rule"
"rucio move-rule"| "rucio set rule --move"
"rucio list-rses"| "rucio list rse"
"rucio list-suspicious-replicas"| "rucio list replica state --suspicious"
"rucio list-rse-attributes"| "rucio list rse attribute"
"rucio list-datasets-rse"| "rucio list dataset"
"rucio add-lifetime-exception"| "rucio add lifetime-exception"

### `rucio-admin`

Version <35.0.0      | Version >=35.0.0
:----------- | :-------------
"rucio-admin account list"| "rucio list account"
"rucio-admin account list-attributes"| "rucio list account attribute"
"rucio-admin account add-attribute"| "rucio add account attribute"
"rucio-admin account add"| "rucio add account"
"rucio-admin account delete"| "rucio remove account"
"rucio-admin account info"| "rucio --view info list account"
"rucio-admin account list-identities"| "rucio list account identities"
"rucio-admin account set-limits"| "rucio add account limits"
"rucio-admin account get-limits"| "list account limits"
"rucio-admin account delete-limits"| "rucio remove account limits"
"rucio-admin account ban"| "set account ban"
"rucio-admin account unban"| "rucio unset account ban"
"rucio-admin account update"| "rucio set account"
"rucio-admin identity add" | "rucio account add identities"
"rucio-admin delete" | "rucio remove account identities"
"rucio-admin rses list"| "rucio list rse"
"rucio-admin rses add"| "rucio add rse"
"rucio-admin rses update"| "rucio set rse"
"rucio-admin rses info"| "rucio- -view info list rse"
"rucio-admin rses set-attribute"| "rucio add rse attribute"
"rucio-admin rses delete-attribute"| "rucio remove rse attribute"
"rucio-admin rses add-distance"| "rucio add rse distance"
"rucio-admin rses update-distance"| "rucio set rse distance"
"rucio-admin rses delete-distance"| "rucio remove rse distance"
"rucio-admin rses get-distance"| "rucio list rse distance"
"rucio-admin rses get-attribute"| "rucio list rse attribute"
"rucio-admin rses add-protocol"| "rucio add rse protocol"
"rucio-admin rses delete-protocol"| "rucio remove rse protocol"
"rucio-admin rses delete"| "rucio remove rse"
"rucio-admin rses add-qos-policy"| "rucio add rse qos-policy"
"rucio-admin rses delete-qos-policy"| "rucio remove rse qos-policy"
"rucio-admin rses list-qos-policies"| "rucio list rse qos-policy"
"rucio-admin rses set-limit"| "rucio add rse limit"
"rucio-admin rses delete-limit"| "rucio remove rse limit"
"rucio-admin scope add"| "rucio add scope"
"rucio-admin scope list"| "rucio list scope"
"rucio-admin config get"| "rucio get config"
"rucio-admin config set"| "rucio set config"
"rucio-admin config delete"| "rucio unset config"
"rucio-admin subscription list"| "rucio list subscription"
"rucio-admin subscription add"| "rucio add subscription"
"rucio-admin subscription update"| "rucio set subscription"
"rucio-admin replica quarantine"| "rucio set replica state --quarantine"
"rucio-admin replica declare-bad"| "rucio set replica state --bad"
"rucio-admin replica declare-temporary-unavailable"| "rucio set replica state --temporary-unavailable"
"rucio-admin replica list-pfns"| "rucio list replica pfn"
"rucio-admin replica set-tombstone"| "rucio add replica tombstone"
