---
id: using_the_client
title: Using the Client
sidebar_position: 3
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
# OpenID Connect (OIDC) authentication

Rucio supports authentication with JSON Web Tokens (JWT) issued by an OpenID Connect
Identity Provider (IdP), following the OAuth 2.0 and WLCG token specifications.

The default IdP/issuer is configured on the Rucio server side. If the server supports
multiple IdPs, you can select one with the `--oidc-issuer=<IdP nickname>` option, where
the nickname is the key under which the issuer is configured in the server-side
`idpsecrets.json` file.

In the examples below we assume you do not want to use the Rucio account name from your
client-side `rucio.cfg` (otherwise the `--account` option can be omitted). If `auth_type = oidc`
is set in `rucio.cfg`, the `--auth-strategy` option can be omitted as well. The examples also use the
default issuer configured on the Rucio server.

## CLI login methods

Two interactive CLI login flows are available. Both are based on the OAuth 2.0
authorization code flow and never require typing your IdP password into the CLI.

### 1. Login via browser + fetch code

You are given a URL to open in your browser. After logging in at the IdP, you copy the
returned code back into the CLI:

```bash
rucio --account <rucio_account_name> --auth-strategy OIDC -v whoami
```

### 2. Login via browser + polling the Rucio auth server

Same as above, but instead of copying a code back, the Rucio client polls the Rucio
auth server until the browser login completes:

```bash
rucio --account <rucio_account_name> --auth-strategy OIDC --oidc-polling -v whoami
```

## WLCG bearer token discovery

The Rucio client also supports the [WLCG Bearer Token Discovery](https://zenodo.org/records/3937438)
mechanism. This lets you authenticate with a token obtained by an external tool (e.g.
`oidc-agent`, `htgettoken`) without going through the Rucio login flows at all.

When `auth_type = oidc`, before falling back to its locally stored token (and before
starting any interactive login), the client looks for a token in the following order:

1. The `BEARER_TOKEN` environment variable (the token string itself).
2. The file pointed to by the `BEARER_TOKEN_FILE` environment variable.
3. `$XDG_RUNTIME_DIR/bt_u$ID`, if `XDG_RUNTIME_DIR` is set (where `$ID` is your
   effective user ID, i.e. the output of `id -u`).
4. `/tmp/bt_u$ID`.

The first token found is presented to the Rucio server.

A token obtained this way was not issued via the Rucio login mechanisms, so it must meet
the same requirements as any externally issued token in order to be accepted:

- The token `scope` claim contains at least the minimum scope (e.g. `openid profile`)
  required by the Rucio auth server (configured in its `rucio.cfg`).
- The same holds for the `aud` (audience) claim.
- The token issuer is known to the Rucio authentication server.
- The identity of the token (`SUB=<user sub claim>`, `ISS=<issuer url>`) is assigned to
  an existing, pre-provisioned Rucio account.


## Automatic token refresh

If the Rucio server has been granted both a valid access token and a refresh token, the
Rucio client can be configured to ask the server to refresh the token. This requires
that you logged in with one of the CLI methods above **and** requested the
`offline_access` scope. Configure the `[client]` section of `rucio.cfg`:

```cfg
[client]
auth_oidc_refresh_active = true
auth_oidc_refresh_before_exp = 20
```

`auth_oidc_refresh_active` is `false` by default. If enabled, the client tracks the
token expiration timestamp. Once the current time is within
`auth_oidc_refresh_before_exp` minutes (default 20) of expiry, the client asks the
server for a token refresh with every command. Server-side behaviour:

- If the token was already refreshed within the last 5 minutes, the same refreshed token
  is returned (server-side protection).
- If the presented token is invalid, expired, or has no refresh token in the database,
  no refresh is attempted.

You can control the maximum period (in hours) during which the server will refresh the
token on your behalf with the `--oidc-refresh-lifetime` option at login time (default:
96 hours). This option is only effective if `offline_access` is included in
`--oidc-scope`, so that a refresh token is granted to Rucio:

```bash
rucio --account <rucio_account_name> \
  --auth-strategy OIDC \
  --oidc-scope "openid profile offline_access" \
  --oidc-refresh-lifetime 24 \
  -v whoami
```

Example of a full `rucio.cfg` client configuration with automatic token refresh:

```cfg
[client]
rucio_host = https://<rucio_host>:443
auth_host = https://<rucio_auth_host>:443
auth_type = oidc
account = <rucio_account_name>
oidc_audience = rucio
oidc_scope = openid profile offline_access
oidc_issuer = wlcg
auth_oidc_refresh_active = true
auth_oidc_refresh_before_exp = 20
```

With this in place you can simply run:

```bash
rucio -v whoami
```

and follow the instructions for the first browser login. A new token is requested
before the current one expires, provided you run a Rucio command within
`auth_oidc_refresh_before_exp` minutes of expiry (there is no background refresh).

:::note
If you do not use the Rucio client within `auth_oidc_refresh_before_exp` minutes before
the token expires, you will need to re-authenticate and request a new `offline_access`
token.
:::

## Using externally issued tokens

If you wish to authenticate with a JWT that was not issued via the Rucio login
mechanisms (CLI, WebUI) — including tokens picked up via WLCG token discovery — make
sure that:

- The token `scope` claim contains at least the minimum scope (e.g. `openid profile`)
  required by the Rucio auth server (configured in its `rucio.cfg`).
- The same holds for the `aud` (audience) claim.
- The token issuer is known to the Rucio authentication server.
- The identity of the token (`SUB=<user sub claim>`, `ISS=<issuer url>`) is assigned to
  an existing, pre-provisioned Rucio account.

Such a token can also be presented directly to the Rucio REST API in the
`X-Rucio-Auth-Token` header:

```python
import requests

s = requests.session()
your_token = "<your JWT access token string>"
headers = {"X-Rucio-Auth-Token": your_token}
address = "https://<Rucio Auth Server Name>/accounts/guenther"
result = s.get(address, headers=headers, verify=False)
print(result.text)
```

```json
{
  "status": "ACTIVE",
  "account": "guenther",
  "account_type": "USER",
  "created_at": "2019-11-13T13:01:58",
  "suspended_at": null,
  "updated_at": "2019-11-13T13:01:58",
  "deleted_at": null,
  "email": "jaroslav.guenther@gmail.com"
}
```

## Token file location

By default the Rucio client stores its token in a file under a per-account token
directory. You can override this with `auth_token_file_path` in the `[client]` section
of `rucio.cfg`; the client will then store and look for the token in that file:

```cfg
[client]
auth_token_file_path = /path/to/token/file
```

Note that tokens found via WLCG token discovery (environment variables or `bt_u$ID`
files) take precedence over the token stored in this file.

## Querying basic information about RSEs

You can query the list of available RSEs:

```bash
$ rucio list-rses
SITE1_DISK
SITE1_TAPE
SITE2_DISK
SITE2_SCRATCH
SITE3_TAPE
```

If the RSEs are tagged with attributes you can build RSE expressions and query
the sites matching these expressions:

```bash
$ rucio list-rses --rses "tier=1&disk=1"
SITE1_DISK
SITE2_DISK
```

## Querying information about DIDs

To list all the possible scopes:

```bash
$ rucio list-scopes
mc
data
user.jdoe
user.janedoe
```

You can query the DIDs matching a certain pattern. It always requires to specify
the scope in which you want to search:

```bash
$ rucio list-dids user.jdoe:*
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
$ rucio list-dids --filter type=CONTAINER
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
$ rucio add-rules --lifetime 1209600 \
  user.jdoe:user.jdoe.test.container.1234.1 1 \
  "tier=1&disk=1"
a12e5664555a4f12b3cc6991db5accf9
```

The command returns the rule_id of the rule.

You can list the rules for a particular DID:

```bash
$ rucio list-rules user.jdoe:user.jdoe.test.container.1234.1
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
