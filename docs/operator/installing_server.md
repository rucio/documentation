---
id: installing_server
title: Installing Rucio Server
---

## Prerequisites

The Rucio server runs on Python 2.7, 3.6 and 3.7 on any Unix-like platform.

## Install via pip

Heads up: We recommend to use the docker-based install (see next section) as it
will configure many things for you automatically. Only use the pip-based install
if you have a good reason and know how to configure your webservices manually:

```bash
pip install rucio
```

This will pull the latest release from
[__PyPi__](https://pypi.python.org/pypi/rucio/). The Rucio server also needs
several Python dependencies. These are all listed in the file
[`requirements.server.txt`](https://github.com/rucio/rucio/blob/master/requirements/requirements.server.txt)
and will be pulled in as necessary.

## Install via Docker

A simple server without SSL can be started like this:

```bash
docker run --name=rucio-server -p 80:80 -d rucio/rucio-server
```

This will start up a simple server using sqlite based on an automatically
generated configuration. You can check if the server is running with

```bash
curl http://localhost/ping
```

This should return the Rucio version used in the container. Any other curl
requests will not work as the database backend is not initialized as this image
is meant to be used with an already bootstrapped database backend. I.e., that
the container has to be configured to point to the correct database. There are
two ways to manage the Rucio configuration: using environment variables or by
mounting a full rucio.cfg.

If you want to set the connection string for the database it can be done using
the `RUCIO_CFG_DATABASE_DEFAULT` environment variable, e.g., to start a
container connecting to a MySQL DB running at `mysql.db` you could use something
like this:

```bash
docker run --name=rucio-server \
  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \
  -p 80:80 \
  -d \
  rucio/rucio-server
```

The are much more configuration parameters available that will be listed at the
end of this readme.

Another way to configure Rucio is to directly mount a complete rucio.cfg into
the container. This will then be used instead of the auto-generated one, e.g.,
if you have a rucio.cfg ready on your host system under `/tmp/rucio.cfg` you
could start a container like this:

```bash
docker run --name=rucio-server \
  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \
  -p 80:80 \
  -d \
  rucio/rucio-server
```

The rucio.cfg is used to configure the database backend.

If you want to enable SSL you would need to set the `RUCIO_ENABLE_SSL` variable
and also need to include the host certificate, key and the the CA certificate as
volumes. E.g.,:

```bash
docker run --name=rucio-server \
  -v /tmp/ca.pem:/etc/grid-security/ca.pem \
  -v /tmp/hostcert.pem:/etc/grid-security/hostcert.pem \
  -v /tmp/hostkey.pem:/etc/grid-security/hostkey.pem \
  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \
  -p 443:443 \
  -e RUCIO_ENABLE_SSL=True \
  -d \
  rucio/rucio-server
```

By default the output of the Apache web server is written directly to stdout and
stderr. If you would rather direct them into separate files it can be done using
the `RUCIO_ENABLE_LOGS` variable. The storage folder of the logs can be used as
a volume:

```bash
docker run --name=rucio-server \
  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \
  -v /tmp/logs:/var/log/httpd \
  -p 80:80 \
  -e RUCIO_ENABLE_LOGS=True \
  -d \
  rucio/rucio-server
```

## Environment Variables

As shown in the examples above the rucio-server image can be configured using
environment variables that are passed with `docker run`. Below is a list of all
available variables and their behavior:

### RUCIO_ENABLE_SSL

By default, the rucio server runs without SSL on port 80. If you want to enable
SSL set this variable to `True`. If you enable SSL you will also have to provide
the host certificate and key and the certificate authority file. The server will
look for `hostcert.pem`, `hostkey.pem` and `ca.pem` under `/etc/grid-security`
so you will have to mount them as volumes. Furthermore you will also have to
expose port 443.

### RUCIO_SSL_PROTOCOL

By default, the server will only accept TLSv1.2 connections. Defining this
environment variable will allow specification of a custom Apache SSLProtocol.

### RUCIO_CA_PATH

If you are using SSL and want use `SSLCACertificatePath` and
`SSLCARevocationPath` you can do so by specifying the path in this variable.

### RUCIO_DEFINE_ALIASES

By default, the web server is configured with all common rest endpoints except
the authentication endpoint. If you want to specify your own set of aliases you
can set this variable to `True`. The web server then expects an alias file under
`/opt/rucio/etc/aliases.conf`

### RUCIO_ENABLE_LOGS

By default, the log output of the web server is written to stdout and stderr. If
you set this variable to `True` the output will be written to `access_log` and
`error_log` under `/var/log/httpd`.

### RUCIO_LOG_LEVEL

The default log level is `info`. You can change it using this
variable.

### RUCIO_LOG_FORMAT

The default rucio log format is
`%ht%tt%{X-Rucio-Forwarded-For}it%Tt%Dt\"%{X-Rucio-Auth-Token}i\"t%{X-Rucio-RequestId}it%{X-Rucio-Client-Ref}it\"%r\"t%\>st%b`
You can set your own format using this variable.

### RUCIO_HOSTNAME

This variable sets the server name in the apache config.

### RUCIO_SERVER_ADMIN

This variable sets the server admin in the apache config.

## RUCIO_CFG configuration parameters

Environment variables can be used to set values for the auto-generated
rucio.cfg. The names are derived from the actual names in the configuration file
prefixed by `RUCIO_CFG`, e.g., the `default` value in the `database` section
becomes `RUCIO_CFG_DATABASE_DEFAULT`. All available environment variables are:

- RUCIO_CFG_COMMON_LOGDIR
- RUCIO_CFG_COMMON_LOGLEVEL
- RUCIO_CFG_COMMON_MAILTEMPLATEDIR
- RUCIO_CFG_DATABASE_DEFAULT
- RUCIO_CFG_DATABASE_SCHEMA
- RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN
- RUCIO_CFG_DATABASE_ECHO
- RUCIO_CFG_DATABASE_POLL_RECYCLE
- RUCIO_CFG_DATABASE_POOL_SIZE
- RUCIO_CFG_DATABASE_POOL_TIMEOUT
- RUCIO_CFG_DATABASE_MAX_OVERFLOW
- RUCIO_CFG_DATABASE_POWUSERACCOUNT
- RUCIO_CFG_DATABASE_USERPASSWORD
- RUCIO_CFG_MONITOR_CARBON_SERVER
- RUCIO_CFG_MONITOR_CARBON_PORT
- RUCIO_CFG_MONITOR_USER_SCOPE
- RUCIO_CFG_TRACE_TRACEDIR
- RUCIO_CFG_TRACE_BROKERS
- RUCIO_CFG_TRACE_PORT
- RUCIO_CFG_TRACE_USERNAME
- RUCIO_CFG_TRACE_PASSWORD
- RUCIO_CFG_TRACE_TOPIC
- RUCIO_CFG_PERMISSION_POLICY
- RUCIO_CFG_PERMISSION_SCHEMA
- RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT
- RUCIO_CFG_PERMISSION_SUPPORT
- RUCIO_CFG_PERMISSION_SUPPORT_RUCIO
- RUCIO_CFG_WEBUI_USERCERT


## Server Configuration for OpenID Connect Authentication & Authorization and Transfers

To enable OIDC authentication and authorization with Rucio using JSON Web Tokens (JWTs) and OAuth2.0, you need an Identity Provider (IdP) that supports OIDC. First, you need to register a client (let's call it `user_auth_client`) with the IdP using the following criteria:

### User Authentication Client
- **Grant Type**: `authorization_code`
- **Scopes**: Minimum `openid` and `profile`
- **Audience**: Recommended: `rucio`
- **Redirect URIs**: `https://<rucio_authorization_host>/auth/oidc_code`

#### Creating `idpsecrets.json`

For a single VO instance, create a file `idpsecrets.json` with the following content:

```json
{
  "def": {
      "user_auth_client": [
          {
              "issuer": "<issuer>",
              "client_id": "mock-client-id",
              "client_secret": "secret",
              "redirect_uris": "https://rucio/auth/oidc_code"
          }
      ]
  }
}
```
And please make sure you specify the path to this file either via env var `IDP_SECRETS_FILE` or in rucio.cfg as
```cfg
[oidc]
idpsecrets = /path/to/your/idpsecrets.json
```

#### Requiring extra Scopes
If you want to add extra scope of ID token for authentication you can add it as required in server.

Scopes can be extended if needed using the following configuration and corresponding claims existence for the scopes
```cfg
[oidc]
id_token_extra_scopes= email, extra_scope
id_token_extra_claims= email, claim_of_extra_scope
```

Only claim existence is check for now. If you need functionality for exact claim's value match please contact us we can add that feature too.

Rucio will exchange the authorization code using user_auth_client for an ID token and an access token. If additional scopes are required for the access token, configure them as follows:

[oidc]
extra_access_token_scope= extra_access_scopes

Ensure all required scopes are included as needed.

#### Adding user identity
To add user oidc identity you ned to get `SUB`, Subject Identifier, of the user in the IDP. Then run the command:
```shell
rucio account identity add --account jdoe --type OIDC --id 'SUB=<sub> ISS=<issuer>'
```
or legacy command
```shell
rucio-admin identity add --account jdoe --type OIDC --id 'SUB=<sub> ISS=<issuer>'
```
Example for IAM instance
```shell
rucio account identity add --account jdoe --type OIDC --id 'SUB=3ed4fg-6ff2-4097-ad3b-953e11bb52b8 ISS=https://panda-iam-doma.cern.ch/'
```

#### Multiple IDP
To configure multiple IDPs your `idpsecrets.json` looks like:
```json
{
  "def": {
      "user_auth_client": [
          {
              "issuer": "<issuer>",
              "client_id": "mock-client-id",
              "client_secret": "secret",
              "redirect_uris": "https://rucio/auth/oidc_code",
              "issuer_nickname": "issuer1"
          },
          {
              "issuer": "<issuer>",
              "client_id": "mock-client-id2",
              "client_secret": "secret2",
              "redirect_uris": "https://rucio/auth/oidc_code",
              "issuer_nickname": "issuer2"
          }
      ]
  }
}
```
Notice now we *must* add `issuer_nickname` field to each idp. This is used by client to reference which issuer it is authenticating to.

### Transfer
To use tokens for transfers you need to register another client lets call it `client_credential_client` which needs following.

- **Grant Type**: `client_credentials`
- **Scopes**: `fts`, `storage.read:/<path>` and `storage.modify:/<path>`
- **Audience**: `<fts_hostname>` and `<RSE_hostname>`

If you want to allow FTS to refresh storage token, allow refresh token to be returned too i.e. add `offline_access` in the scopes.

#### **Configuration File (idpsecrets.json) Format (Single VO Syntax)**

```json
{
  "def": {
    "user_auth_client": [
          {
              "issuer": "<issuer>",
              "client_id": "mock-client-id",
              "client_secret": "secret",
              "redirect_uris": "https://rucio/auth/oidc_code"
          }
      ],
      "client_credential_client": {
          "client_id": "<your_client_id>",
          "client_secret": "<your_client_secret>",
          "issuer": "<issuer>"
      }
  }
}
```

#### Configuration for RSE
For RSEs which uses token, RSEs must have an attribute set as follows:

```
oidc_support: True
```
Lets say your RSE has protocol with prefix `/path/myexp/mypath` , if you want to use this as scope you needs to have `client_credential_client`
scope `storage:read:/path/myexp/mypath` and `storage:modify:/path/myexp/mypath`.

If you want to register scopes as `storage:read:/myexp/mypath` and `storage:modify:/myexp/mypath` you need to set RSE's attribute as:
```
oidc_base_path: /path
```

