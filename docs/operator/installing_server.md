---
id: installing_server
title: Installing Rucio Server
sidebar_position: 3
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

## Enable OIDC
This section describes how to enable authentication and authorization in Rucio using OpenID Connect (OIDC), OAuth2, and JSON Web Tokens (JWTs).

Rucio currently provides full support for INDIGO IAM, and has been tested with CILogon.
Two separate OIDC clients must be registered in the Identity Provider (IdP): one for user authentication and one for daemon/service authorization.

### Registering OIDC Clients to Identity provider (IdP)

Rucio requires two clients at the IdP:

1. [C1] Rucio Auth Client
    This client is used for interactive user authentication (CLI, WebUI) using the Authorization Code Flow.
    - Grant Type: `authorization_code`
    - Audience: `rucio` .
    - Scopes: 
      - At minimum `openid` .
      - Default in rucio `openid` `profile` and `email` .
    - redirect_uris : 
      - `https://<auth_server_name>/auth/oidc_token` 
      - `https://<auth_server_name>/auth/oidc_code` 
  
2. [C2] Rucio Admin Client
   This client is responsible interaction to storages and FTS. Used by transfer and deletion daemons.
   - Grant Type: `client_credential`
   - Audience: 
       - `<storage_hostname>` 
       - `fts`
   - Scopes: 
     - `fts`
     - `storage.modify:<path>`
     - `storage.create:<path>` 
     - `storage.read:<path>`

  `<path>` typically corresponds to the scope accepted by the storage, as described later. 

Please save the client_id and client_secret from both of [C1] and [C2].

### Preparing idpsecrets.json
Create an `idpsecrets.json` file containing the configuration of the two IdP clients. The mount this file to server and daemons.
If using Helm Chart then use mounting as [described here](https://github.com/rucio/helm-charts/tree/master/charts/rucio-server#additional-secrets).

Example:

```json
{
    "<IdP_nickname>": {

        "issuer": "https://<issuer_server_name>",

        "redirect_uris": [
            "https://<auth_server_name>/auth/oidc_token",
            "https://<auth_server_name>/auth/oidc_code"
        ],
        "client_id": "<C1_client_id>",
        "client_secret": "<C1_client_secret>",

        "SCIM": {
            "client_id": "<C2_client_id>",
            "client_secret": "<C2_client_secret>",
        }
    },

    "wlcg": {

        "issuer": "https://wlcg.cloud.cnaf.infn.it/",

        "redirect_uris": [
            "https://rucio-auth.cern.ch/auth/oidc_token",
            "https://rucio-auth.cern.ch/auth/oidc_code"
        ],

        "client_id": "fdc297fc-09 ...",
        "client_secret": "APFVcga_X ...",

        "SCIM": {
            "client_id": "5b5e5d3 ...",
            "client_secret": "IQqAcMOa ...",
        }
    }
}
```

### Configuring Rucio Server for OIDC based authentication
The Rucio Auth Client (C1) is used for user login. Enable OIDC in `rucio.cfg`:

```cfg
[oidc]
# Required: Path to the idpsecrets JSON file.
idpsecrets = /path/to/your/idpsecrets.json 

# Required: Matches the <IdP_nickname> key in idpsecrets.json. 
# example config above make it 'wlcg'
admin_issuer = <IdP_nickname>

# Optional: # Optional: Expected 'aud' value in the user JWT. Defaults to 'rucio'.
# if different from default then put what you have for [C1]
expected_audience = 'rucio' 

# Optional: Expected scopes in the JWT. Defaults to 'openid profile email'.
# if different from default then put what you have for [c1]
expected_scope = 'openid profile'
```

Each user must have an OIDC identity linked to their Rucio account. The OIDC identity consists of:
  - sub claim (unique subject ID)
  - issuer URL of the IdP

Example:
```bash
rucio account identity add --account rucio_user_account \
  --type OIDC \
  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \
    ISS=https://wlcg.cloud.cnaf.infn.it/" \
  --email "wlcg-doma-rucio@cern.ch"
```

### Enabling OIDC for Transfers & Deletions
Rucio uses WLCG profile with [Capability based authorization](https://github.com/WLCG-AuthZ-WG/common-jwt-profile/blob/master/profile.md#221-capability-based-authorization-scope) for token-based interactions with storage and FTS.

Token-based operations require:
  1. The RSE must have the davs protocol enabled.
  2. The RSE must have the oidc_support attribute set to True.

      ```bash
      rucio rse attribute add --key oidc_support --value True RSE_NAME
      ```

#### Defining `<path>` for Storage Capabilities:
Each storage enforces a specific prefix for `storage.<capability>:<path>` scopes.
There are two cases:
  1. Storage accepts the full RSE protocol prefix
  2. Storage expects part of the RSE protocol prefix
      Set the oidc_base_path RSE attribute to remove the unwanted leading prefix.

      Example:
        - RSE protocol prefix: `/path/to/vo`
        - Storage expects: `/vo`
      Then add:
        ```bash
        rucio rse attribute add --key oidc_base_path --value '/path/to' RSE_NAME
        ```


FTS must be configured to accept `fts` scope and `<fts_hostname>` audience.

#### Transfer daemon token flow.

1. Transfer job submission to FTS
For TPC transfer rucio sends 3 tokens to FTS.
<fts_token>, <src_token> and <destination_token>.
If the lifetime of token is short like 6 hours your transfer can take longer than that. So you have to configure FTS to manage your token.
More info [here](https://fts3-docs.web.cern.ch/fts3-docs/docs/token_support.html) and [here](https://fts3-docs.web.cern.ch/fts3-docs/docs/install/upgrades/3.14.html).
```mermaid
sequenceDiagram
    participant D as Transfer Daemon
    participant I as Identity Provider
    participant F as FTS

    Note over D,I: Client ID: C2 (Rucio Admin Client)

    alt Tokens NOT cached
        D->>+I: 1. Request FTS token
        I-->>-D: [F]

        D->>+I: 2. Request SRC token
        I-->>-D: [S]

        D->>+I: 3. Request DEST token
        I-->>-D: [D]
    else Tokens cached
        activate D
        Note right of D: Load tokens<br/>from cache
        deactivate D
    end

    D->>F: 4. Submit job [F], [S], [D]
```

2. Poller Daemon Token Support
   For poller to use token to communicate with fts we need
   ```cfg
   [conveyor]
   poller_oidc_support = True
   ```

   ```mermaid
   sequenceDiagram
       participant D as Poller Daemon
       participant I as Identity Provider
       participant F as FTS
       alt Tokens NOT cached
           D->>I: Request fts token
           I-->>D: [F]
       else Tokens cached
           Note over D: Load [F] from cache
       end
       loop Poll for status
           D->>F: [F]
           F-->>D: Status
       end
   ```

3. Reaper (deletion) Daemon Token support.
If the criteria for RSE to support token interaction described before, that enough for deletion via token
```mermaid
sequenceDiagram
    participant D as Reaper Daemon
    participant I as Identity Provider
    participant S as Storage
    
    alt Tokens NOT cached
        D->>I: Request storage token
        I-->>D: Token [S]
    else Tokens cached
        Note over D: Load [S] from cache
    end

    loop Delete files
        D->>S: [S]
    end
```

