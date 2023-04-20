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
[`requirements.txt`](https://github.com/rucio/rucio/blob/master/requirements.txt)
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

The default log level is [info]{.title-ref}. You can change it using this
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

## Server Configuration for Open ID Connect AuthN/Z

In order to be able to use [OIDC](https://openid.net/connect/)
JSON Web Tokens ([JWTs](https://en.wikipedia.org/wiki/JSON_Web_Token)) and
related [OAuth2.0](https://oauth.net/2/) authentication and authorization with Rucio,
one first needs to have an account with an Identity Provider (IdP)
which will act as Rucio admin account representing the Rucio Application.
Currently, the only fully supported IdP is [INDIGO IAM](https://indigo-iam.github.io/v/current/).
Once you have got your Rucio Service IAM Account [A]
(and its subject claim identifier), you will need to [register two IAM Rucio
clients](https://indigo-iam.github.io/docs/v/current/user-guide/client-registration.html)
linked to this account. Please save the relevant __client_id__,
__client_secret__, and __registration access token (RAT)__ in
a safe place, as you will be needing them.

In both clients, one needs to setup the __redirect_uris__ to
include the following paths:

```bash
https://<your_server_name>/auth/oidc_token
https://<your_server_name>/auth/oidc_code
```

We will use one client as
__Rucio Auth IAM Client__ [C1] (i.e. client for the authentication and
authorization on the Rucio server). This client needs to have __token_exchange__,
__token_refresh__, and __authorization_code__ grants enabled. For __token_exchange__
and __token_refresh__ you might need to contact the IAM admin as such settings are
usually not accessible to IAM users. In addition, you will need to request your
IAM admin to allow your client returning refresh tokens with lifetime being visible
in their unverified header. In addition Rucio assumes refresh tokens to expire
immediately after their first use, which has to be also confirmed by your IAM admin.

The second
client, let's call it __Rucio Admin IAM Client__ [C2], can be used by a Rucio probe
script (e.g. [check_scim](https://github.com/rucio/probes/blob/master/attic/check_scim),
[sync_iam_rucio](https://github.com/ESCAPE-WP2/Utilities-and-Operations-Scripts/blob/master/iam-rucio-sync/sync_iam_rucio.py))
in order to synchronize existing Rucio accounts with Rucio
identities. Rucio will also use this client's credentials in order to request
tokens for itself. The IAM administrator must include the __scim:read__ scope and
allow the __client_credentials__ grant type for [C2] in order
to grant you rights to pre-provision IAM users for Rucio. Examples of the
configuration of these two clients follow below:

Example of the __Rucio Auth IAM Client__ [C1] configuration:

```json
{
  "client_id": "AbcCDe123...",
  "registration_access_token": "AbcCDe123...",
  "redirect_uris": [
    "https://rucio-auth.cern.ch/auth/oidc_token",
    "https://rucio-auth.cern.ch/auth/oidc_code",
  ],
  "client_name": "rucio-admin-client",
  "client_uri": null,
  "logo_uri": null,
  "contacts": [
    "jaroslav.guenther@gmail.com"
  ],
  "tos_uri": null,
  "token_endpoint_auth_method": "client_secret_basic",
  "scope": "address fts phone openid profile offline_access \
    rucio email wlcg wlcg.groups fts:submit-transfer",
  "grant_types": [
    "refresh_token",
    "urn:ietf:params:oauth:grant-type:token-exchange",
    "authorization_code"
  ],
  "response_types": [
    "code"
  ],
  "policy_uri": null,
  "jwks_uri": null,
  "jwks": null,
  "jwksType": "URI",
  "application_type": null,
  "sector_identifier_uri": null,
  "subject_type": null,
  "request_object_signing_alg": null,
  "userinfo_signed_response_alg": null,
  "userinfo_encrypted_response_alg": null,
  "userinfo_encrypted_response_enc": null,
  "id_token_signed_response_alg": null,
  "id_token_encrypted_response_alg": null,
  "id_token_encrypted_response_enc": null,
  "default_max_age": 60000,
  "require_auth_time": true,
  "default_acr_values": null,
  "initiate_login_uri": null,
  "post_logout_redirect_uris": null,
  "claims_redirect_uris": [],
  "request_uris": [],
  "software_statement": null,
  "software_id": null,
  "software_version": null,
  "code_challenge_method": null,
  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/fdc297fc-0907-4a68-9022-3ccc7dd2501a",
  "client_secret_expires_at": 0,
  "client_id_issued_at": 1574700620
}
```

Example of the __Rucio Admin IAM Client__ [C2] configuration:

```bash
{
  "client_id": "AbcDe123...",
  "registration_access_token": "AbcDe123...",
  "client_secret": "AbcDe123...",
  "redirect_uris": [],
  "client_name": null,
  "client_uri": null,
  "logo_uri": null,
  "contacts": [
    "jaroslav.guenther@gmail.com"
  ],
  "tos_uri": null,
  "token_endpoint_auth_method": "client_secret_basic",
  "scope": "address scim:read phone email wlcg profile \
    fts:submit-transfer rucio fts fts:submit-transfer",
  "grant_types": [
    "client_credentials"
  ],
  "response_types": [],
  "policy_uri": null,
  "jwks_uri": null,
  "jwks": null,
  "jwksType": "URI",
  "application_type": null,
  "sector_identifier_uri": null,
  "subject_type": null,
  "request_object_signing_alg": null,
  "userinfo_signed_response_alg": null,
  "userinfo_encrypted_response_alg": null,
  "userinfo_encrypted_response_enc": null,
  "id_token_signed_response_alg": null,
  "id_token_encrypted_response_alg": null,
  "id_token_encrypted_response_enc": null,
  "default_max_age": 60000,
  "require_auth_time": true,
  "default_acr_values": null,
  "initiate_login_uri": null,
  "post_logout_redirect_uris": null,
  "claims_redirect_uris": [],
  "request_uris": [],
  "software_statement": null,
  "software_id": null,
  "software_version": null,
  "code_challenge_method": null,
  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/5b5e5d37-926b-4b42-8a98-a0b4b28baf18",
  "client_secret_expires_at": 0,
  "client_id_issued_at": 1574700703
}
```

To make the Rucio server aware of the two clients above, one has to exchange the
empty dictionary in `etc/idpsecrets.json` file with one containing the
relevant information. Example of such dictionary (for multiple IdPs) follows:

```json
{
    "<IdP nickname>": {

        "issuer": "https://<issuer_server_name>",

        "redirect_uris": [
            "https://<auth_server_name>/auth/oidc_token",
            "https://<auth_server_name>/auth/oidc_code"
        ],

        "client_id": "<C1_client_id>",
        "client_secret": "<C1_client_secret>",

        # this is not really needed for the OIDC functionality
        # but it is suggested to store it anyway as it is required
        # to edit the client in INDIGO IAM
        "registration_access_token": "<C1_client_RAT_string>",

        "SCIM": {
            "client_id": "<C2_client_id>",
            "client_secret": "<C2_client_secret>",
            "registration_access_token": "<C2_client_RAT_string>"
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
        "registration_access_token": "eyJraWQiOi ...",

        "SCIM": {
            "client_id": "5b5e5d3 ...",
            "client_secret": "IQqAcMOa ...",
            "registration_access_token": "eyJraW ..."
        }
    },

    "xdc": { ... },
}
```

After this is done, please make sure your `rucio.cfg` file contains the
following section:

```cfg
[oidc]
idpsecrets = /path/to/your/idpsecrets.json
admin_issuer = <IdP_nickname>
expected_audience = '<rucio>'
expected_scope = 'openid profile'
```

Parameters __idpsecrets__ and __admin_issuer__ have to be present.
__IdP nickname__ stands for your preferred IdP (e.g. 'wlcg'). The IdP
specified under __admin_issuer__ will be contacted to get information about Rucio
Users (SCIM) and to request tokens for the Rucio __root__ account.  The
__expected_scope__ and __expected_audence__ parameters are optional and if not filled,
the Rucio server will set them to `openid profile` and `rucio`
respectively. The expected scopes and audiences have to be configured
correspondingly on the side of your registered clients at your IdP (usually you
can control accepted scopes and audiences for your clients via an IdP web
interface).

To finalize the process, one should assign the OIDC identities to the relevant
Rucio __admin_account__ (e.g. 'root', 'ddmadmin'). This identity ID is
composed of the Rucio Service IAM Account [A] subject claim and
issuer url such as demonstrated below:

```bash
# Add the Rucio Service IAM Account ID as an OIDC identity
rucio-admin identity add --account rucio_admin_account \
  --type OIDC \
  --id "SUB=b3127dc7-2be3-417b-9647-6bf61238ad01, \
    ISS=https://wlcg.cloud.cnaf.infn.it/" \
  --email "wlcg-doma-rucio@cern.ch"
```

A second identity has to be added to the same __admin_account__ representing
the __client_credentials__ flow of the Rucio application, i.e.  of the
__Rucio Admin IAM Client__ [C2] from above. This identity consists of
the __client_id__ of [C2] and the issuer (the token obtained via the
client credentials flow using [C2] will contain in the __sub__ claim the
__client_id__ of [C2] instead of Rucio Service IAM Account [A] __sub__ claim):

```bash
# Add the Rucio Admin IAM Client client_id as an OIDC identity
rucio-admin identity add --account rucio_admin_account \
  --type OIDC \
  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \
    ISS=https://wlcg.cloud.cnaf.infn.it/" \
  --email "wlcg-doma-rucio@cern.ch"
```

Note: In case you can not/will not run any IAM -> Rucio user mapping tool in
order to sync Rucio accounts with their IAM identities, you should assign the
appropriate OIDC identity manually (as in the example above) to each Rucio
account which is meant to use the OIDC authN/Z:

```bash
# Add an IAM User Account ID as an OIDC identity
# (needs to be done for each user!)
rucio-admin identity add --account rucio_user_account \
  --type OIDC \
  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \
    ISS=https://wlcg.cloud.cnaf.infn.it/" \
  --email "wlcg-doma-rucio@cern.ch"
```

Finally, in order to ensure the correct lifetime management of the tokens and auth
sessions, one has to run the __oauth-manager__ daemon.

### Configuration for Daemons

OIDC authN/Z is also supported by the Rucio conveyor daemons and more
specifically by the __conveyor-submitter__ and __conveyor-poller__ ones.
__Conveyor-submitter__ is responsible for submission of the transfers created in
connection with an existing Rucio rule. __Conveyor-poller__ is responsible for
polling the state of the transfers that have been submitted and updating the
relevant state in the database.

In order to enable this functionality, RSEs must have an attribute set as follows:

```cfg
oidc_support: True
```

In general, the Rucio account which created such a rule will be used to request a
JWT token for OAuth2 authentication with FTS3. More specifically, there
are three Rucio authentication flows that are possible:

1. __User Token Exchange__: In this case, a valid OIDC token that the user authenticated
   with in Rucio is getting [exchanged](https://indigo-iam.github.io/docs/v/current/user-guide/api/oauth-token-exchange.html)
   with an appropriate token that is intended to be served to the FTS3 server.
   This FTS3 intended token must have a specific audience [*] as well as
   specific scopes [**] that the FTS3 server expects, this applies for the next
   authentication flows as well. It is also worth noting that the acquired FTS3
   intended token includes all original claims that were present in the initial token.

1. __Admin Flow__: In this Rucio authN/Z flow, the [client_credentials](https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow)
   flow is used with the __Rucio Admin IAM Client__ [C2]. The __sub__ claim of the
   acquired token becomes the __client_id__ of [C2]. In this case any group membership
   that was present in the original token is not included in the new FTS3 intended
   token. Additionally, for this flow to be successful a valid user OIDC token
   must already be present in the database.

1. __Admin Root Flow__: This scenario has the same logic as flow 2, with the
   difference that it is used when the relevant rule is created by the
   Rucio __admin_account__ (e.g. 'root').
   No other user token is involved in this case.

In all three formerly mentioned cases, if a valid FTS3 intended token
already exists in the Rucio database then a new token is not requested
and the existing one is used.

The OIDC authentication mechanism shall be configured by the
following parameters in the `rucio.cfg` file:

```cfg
[conveyor]
# if set to True, then only flow 1 will be tried
# if set to False, then flow 1 will never be tried
allow_user_oidc_tokens = False (default)

# FTS3 intended audience [*]
request_oidc_audience = 'fts:example' (default)

# FTS3 intended scopes [**]
request_oidc_scope = 'fts:submit-transfer' (default)
```

For the __conveyor-poller__ to work an additional configuration is needed:

```cfg
[conveyor]
poller_oidc_account = rucio_admin_account
```

On an another level, the __reaper__ daemon can be also configured to
perform deletions of files on the storage by using an OIDC token,
the following configuration is needed:

```cfg
[reaper]
oidc_account = rucio_admin_account
oidc_audience = same logic as [*] but for the storage
oidc_scope = same logic as [**] but for the storage
```

Note aside: For some IdPs it may happen that the scope and audience claims are
not a part of the token payload. For this reason Rucio has a fall-back mechanism
to get this information using the IdPs introspection endpoint. To allow Rucio to
introspect tokens that were not issued by its clients, please talk to the IdP
admin who should enable this functionality for your clients.

### Rucio WebUI Login with CERN SSO

By using the Rucio OIDC capabilities it is possible to integrate the
[CERN SSO](https://auth.docs.cern.ch/user-documentation/oidc/oidc/) service with
the WebUI so users will be able to login with a CERN account.
Please note that in contrast to INDIGO IAM, the CERN IdP can only be
used for WebUI login at the moment and not for the other operations
that were described previously. The following steps are needed:

1. The Rucio administrators need to create a new application at the
   [Application Portal](https://application-portal.web.cern.ch/).
   Please note that the __Application Identifier__ field will be the
   audience claim in the tokens acquired by the CERN Authorization Service.

1. In the newly created Application, a new __SSO Registration__ is needed.
   Please select OIDC in the
   'Which protocol does your application use for authentication?' question.
   At the same time, the two Rucio redirect URIs are needed as
   described in the `etc/idpsecrets.json` configuration that was mentioned previously.

1. The new CERN IdP needs to be added in the `etc/idpsecrets.json` configuration,
   with the newly acquired client secret that was given after step 2.
   Please note that in this case the SCIM field needs to be filled even though
   it will never be used for this IdP, one can just repeat the original
   client_id and client_secret. The configuration will have the following format:

    ```json
    {
        # ...
        "cern": {

            "issuer": "https://auth.cern.ch/auth/realms/cern",

            "redirect_uris": [
                "https://<auth_server_name>/auth/oidc_token",
                "https://<auth_server_name>/auth/oidc_code"
            ],

            "client_id": "<SSO_client_id>", # Same as Application Identifier
            "client_secret": "<SSO_client_secret>",

            "SCIM": {
                "client_id": "<SSO_client_id>",
                "client_secret": "<SSO_client_secret>",
            }
        }
        # ...
    }
    ```

1. Finally, the CERN user identities need to be mapped to Rucio accounts
   as it was previously described. One example mapping follows:

    ```bash
    # Add an CERN User Account Username as an OIDC identity
    # (needs to be done for each user!)
    # Note that the SUB field is the CERN Account username
    rucio-admin identity add --account rucio_user_account \
    --type OIDC \
    --id "SUB=ridona, \
        ISS=https://auth.cern.ch/auth/realms/cern" \
    --email "rucio@cern.ch"
    ```
