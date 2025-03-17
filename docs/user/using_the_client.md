---
id: using_the_client
title: Using the Client
---

Rucio provides several commands for the end-user. See [executables](bin/rucio.md).
The command line client is called ``rucio``.

Note: for Python scripts, we encourage using the [Python client](pathname:///html/site/client.html) instead of the commands listed here.

If you are using a version of the client prior to ~36.0, please view the [migration guide](user/migrate_to_36_cli.md).

# Basic Commands

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
$ rucio rse list
SITE1_DISK
SITE1_TAPE
SITE2_DISK
SITE2_SCRATCH
SITE3_TAPE
```

If the RSEs are tagged with attributes you can build RSE expressions and query
the sites matching these expressions:

```bash
$ rucio rse list --rses "tier=1&disk=1"
SITE1_DISK
SITE2_DISK
```

## Querying information about DIDs

To list all the possible scopes:

```bash
$ rucio scope list
mc
data
user.jdoe
user.janedoe
```

You can query the DIDs matching a certain pattern. It always requires to specify
the scope in which you want to search:

```bash
$ rucio did list --did user.jdoe:*
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
$ rucio did list --filter type=CONTAINER --did user.jdoe:*
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
$ rucio did content list --did user.jdoe:user.jdoe.test.container.1234.1
+------------------------------------+--------------+
| SCOPE:NAME                         | [DID TYPE]   |
|------------------------------------+--------------|
| user.jdoe:user.jdoe.test.dataset.1 | DATASET      |
| user.jdoe:user.jdoe.test.dataset.2 | DATASET      |
+------------------------------------+--------------+
```

## Rules operations

You can create a new rule like this:

```bash
$ rucio add-rules --lifetime 1209600 \
  --did user.jdoe:user.jdoe.test.container.1234.1 \
  --copies 1 \
  --rses "tier=1&disk=1"
a12e5664555a4f12b3cc6991db5accf9
```

The command returns the rule_id of the rule.

You can list the rules for a particular DID:

```bash
$ rucio rule list --did user.jdoe:user.jdoe.test.container.1234.1
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

# Operator Commands 

Rucio provides a CLI for administrative tasks. The get methods can be executed
by any user, but the set methods require some admin privileges. 


## Account and identity methods

To create a new account:

```bash
  $ rucio account add --type USER --email jdoe@blahblih.com jdoe
```

You can choose different types in the list USER, GROUP, SERVICE. Different
policies/permissions can be set depending on the account type.  Once the account
is created, you need to create and attach an identity to this account:

```bash
  $ rucio account identity add --type X509 \
      --id "CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah" \
      --email jdoe@blahblih.com \
      --account jdoe
```

The list of possible identity types is X509, GSS, USERPASS, SSH, SAML, OIDC:

```bash
  $ rucio account identity list --account jdoe
  Identity: CN=jdoe,OU=Users,OU=Organic Units,DC=blih,DC=blah,        type: X509
```

You can set attributes to the users:

```bash
  $ rucio account attribute add --key country --value xyz --account jdoe
```

And list these attributes:

```bash
  $ rucio account attribute list --account jdoe
  +---------+-------+
  | Key     | Value |
  |---------+-------|
  | country | xyz   |
  +---------+-------+
```

You can also list all the accounts matching a certain attribute using the filter
option:

```bash
  $ rucio account list --filters "country=xyz"
  jdoe
```

To add the quota for one account on a given RSE:

```bash
  $ rucio account limit add --account jdoe --rses SITE2_SCRATCH  --bytes 10000000000000
  Set account limit for account jdoe on RSE SITE2_SCRATCH: 10.000 TB

  $ rucio account limit list --account jdoe --rses SITE2_SCRATCH
  Quota on SITE2_SCRATCH for jdoe : 10 TB
```

## Scope methods

To create a new scope:

```bash
  $ rucio scope add --account jdoe --scope user.jdoe
```

Only the owner of the scope or privileged users can write into the scope.

To list all the scopes:

```bash
  $ rucio scope list
  user.janedoe
  user.jdoe
```

## RSE methods

To create a new RSE:

```bash
  $ rucio rse add --rse SITE2_SCRATCH
```

To add a RSE attribute:

```bash
  $ rucio rse attribute add --rse SITE2_SCRATCH --key country --value xyz
```

To check an RSE attribute:

```bash
  $ rucio rse attribute list --rse SITE2_SCRATCH
  country: xyz
```

## Replica methods

To declare bad (i.e. corrupted or lost replicas):

```bash
  $ rucio replica state update bad --reason "File corrupted" --files https//path/to/lost/file
```
