"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5270],{17689:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator/installing_server","title":"Installing Rucio Server","description":"Prerequisites","source":"@site/../docs/operator/installing_server.md","sourceDirName":"operator","slug":"/operator/installing_server","permalink":"/documentation/operator/installing_server","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/installing_server.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1729601659000,"frontMatter":{"id":"installing_server","title":"Installing Rucio Server"},"sidebar":"docs","previous":{"title":"Setting up Rucio on Kubernetes","permalink":"/documentation/operator/kubernetes"},"next":{"title":"Installing Rucio Daemons","permalink":"/documentation/operator/installing_daemons"}}');var s=i(74848),r=i(28453);const o={id:"installing_server",title:"Installing Rucio Server"},c=void 0,a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install via pip",id:"install-via-pip",level:2},{value:"Install via Docker",id:"install-via-docker",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"RUCIO_ENABLE_SSL",id:"rucio_enable_ssl",level:3},{value:"RUCIO_SSL_PROTOCOL",id:"rucio_ssl_protocol",level:3},{value:"RUCIO_CA_PATH",id:"rucio_ca_path",level:3},{value:"RUCIO_DEFINE_ALIASES",id:"rucio_define_aliases",level:3},{value:"RUCIO_ENABLE_LOGS",id:"rucio_enable_logs",level:3},{value:"RUCIO_LOG_LEVEL",id:"rucio_log_level",level:3},{value:"RUCIO_LOG_FORMAT",id:"rucio_log_format",level:3},{value:"RUCIO_HOSTNAME",id:"rucio_hostname",level:3},{value:"RUCIO_SERVER_ADMIN",id:"rucio_server_admin",level:3},{value:"RUCIO_CFG configuration parameters",id:"rucio_cfg-configuration-parameters",level:2},{value:"Server Configuration for Open ID Connect AuthN/Z",id:"server-configuration-for-open-id-connect-authnz",level:2},{value:"Configuration for Daemons",id:"configuration-for-daemons",level:3},{value:"Rucio WebUI Login with CERN SSO",id:"rucio-webui-login-with-cern-sso",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"The Rucio server runs on Python 2.7, 3.6 and 3.7 on any Unix-like platform."}),"\n",(0,s.jsx)(n.h2,{id:"install-via-pip",children:"Install via pip"}),"\n",(0,s.jsx)(n.p,{children:"Heads up: We recommend to use the docker-based install (see next section) as it\nwill configure many things for you automatically. Only use the pip-based install\nif you have a good reason and know how to configure your webservices manually:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pip install rucio\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will pull the latest release from\n",(0,s.jsx)(n.a,{href:"https://pypi.python.org/pypi/rucio/",children:(0,s.jsx)(n.strong,{children:"PyPi"})}),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/requirements/requirements.server.txt",children:(0,s.jsx)(n.code,{children:"requirements.server.txt"})}),"\nand will be pulled in as necessary."]}),"\n",(0,s.jsx)(n.h2,{id:"install-via-docker",children:"Install via Docker"}),"\n",(0,s.jsx)(n.p,{children:"A simple server without SSL can be started like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name=rucio-server -p 80:80 -d rucio/rucio-server\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will start up a simple server using sqlite based on an automatically\ngenerated configuration. You can check if the server is running with"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl http://localhost/ping\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should return the Rucio version used in the container. Any other curl\nrequests will not work as the database backend is not initialized as this image\nis meant to be used with an already bootstrapped database backend. I.e., that\nthe container has to be configured to point to the correct database. There are\ntwo ways to manage the Rucio configuration: using environment variables or by\nmounting a full rucio.cfg."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to set the connection string for the database it can be done using\nthe ",(0,s.jsx)(n.code,{children:"RUCIO_CFG_DATABASE_DEFAULT"})," environment variable, e.g., to start a\ncontainer connecting to a MySQL DB running at ",(0,s.jsx)(n.code,{children:"mysql.db"})," you could use something\nlike this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run --name=rucio-server \\\n  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \\\n  -p 80:80 \\\n  -d \\\n  rucio/rucio-server\n'})}),"\n",(0,s.jsx)(n.p,{children:"The are much more configuration parameters available that will be listed at the\nend of this readme."}),"\n",(0,s.jsxs)(n.p,{children:["Another way to configure Rucio is to directly mount a complete rucio.cfg into\nthe container. This will then be used instead of the auto-generated one, e.g.,\nif you have a rucio.cfg ready on your host system under ",(0,s.jsx)(n.code,{children:"/tmp/rucio.cfg"})," you\ncould start a container like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name=rucio-server \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -p 80:80 \\\n  -d \\\n  rucio/rucio-server\n"})}),"\n",(0,s.jsx)(n.p,{children:"The rucio.cfg is used to configure the database backend."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to enable SSL you would need to set the ",(0,s.jsx)(n.code,{children:"RUCIO_ENABLE_SSL"})," variable\nand also need to include the host certificate, key and the the CA certificate as\nvolumes. E.g.,:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name=rucio-server \\\n  -v /tmp/ca.pem:/etc/grid-security/ca.pem \\\n  -v /tmp/hostcert.pem:/etc/grid-security/hostcert.pem \\\n  -v /tmp/hostkey.pem:/etc/grid-security/hostkey.pem \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -p 443:443 \\\n  -e RUCIO_ENABLE_SSL=True \\\n  -d \\\n  rucio/rucio-server\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By default the output of the Apache web server is written directly to stdout and\nstderr. If you would rather direct them into separate files it can be done using\nthe ",(0,s.jsx)(n.code,{children:"RUCIO_ENABLE_LOGS"})," variable. The storage folder of the logs can be used as\na volume:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run --name=rucio-server \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -v /tmp/logs:/var/log/httpd \\\n  -p 80:80 \\\n  -e RUCIO_ENABLE_LOGS=True \\\n  -d \\\n  rucio/rucio-server\n"})}),"\n",(0,s.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["As shown in the examples above the rucio-server image can be configured using\nenvironment variables that are passed with ",(0,s.jsx)(n.code,{children:"docker run"}),". Below is a list of all\navailable variables and their behavior:"]}),"\n",(0,s.jsx)(n.h3,{id:"rucio_enable_ssl",children:"RUCIO_ENABLE_SSL"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the rucio server runs without SSL on port 80. If you want to enable\nSSL set this variable to ",(0,s.jsx)(n.code,{children:"True"}),". If you enable SSL you will also have to provide\nthe host certificate and key and the certificate authority file. The server will\nlook for ",(0,s.jsx)(n.code,{children:"hostcert.pem"}),", ",(0,s.jsx)(n.code,{children:"hostkey.pem"})," and ",(0,s.jsx)(n.code,{children:"ca.pem"})," under ",(0,s.jsx)(n.code,{children:"/etc/grid-security"}),"\nso you will have to mount them as volumes. Furthermore you will also have to\nexpose port 443."]}),"\n",(0,s.jsx)(n.h3,{id:"rucio_ssl_protocol",children:"RUCIO_SSL_PROTOCOL"}),"\n",(0,s.jsx)(n.p,{children:"By default, the server will only accept TLSv1.2 connections. Defining this\nenvironment variable will allow specification of a custom Apache SSLProtocol."}),"\n",(0,s.jsx)(n.h3,{id:"rucio_ca_path",children:"RUCIO_CA_PATH"}),"\n",(0,s.jsxs)(n.p,{children:["If you are using SSL and want use ",(0,s.jsx)(n.code,{children:"SSLCACertificatePath"})," and\n",(0,s.jsx)(n.code,{children:"SSLCARevocationPath"})," you can do so by specifying the path in this variable."]}),"\n",(0,s.jsx)(n.h3,{id:"rucio_define_aliases",children:"RUCIO_DEFINE_ALIASES"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the web server is configured with all common rest endpoints except\nthe authentication endpoint. If you want to specify your own set of aliases you\ncan set this variable to ",(0,s.jsx)(n.code,{children:"True"}),". The web server then expects an alias file under\n",(0,s.jsx)(n.code,{children:"/opt/rucio/etc/aliases.conf"})]}),"\n",(0,s.jsx)(n.h3,{id:"rucio_enable_logs",children:"RUCIO_ENABLE_LOGS"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the log output of the web server is written to stdout and stderr. If\nyou set this variable to ",(0,s.jsx)(n.code,{children:"True"})," the output will be written to ",(0,s.jsx)(n.code,{children:"access_log"})," and\n",(0,s.jsx)(n.code,{children:"error_log"})," under ",(0,s.jsx)(n.code,{children:"/var/log/httpd"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"rucio_log_level",children:"RUCIO_LOG_LEVEL"}),"\n",(0,s.jsxs)(n.p,{children:["The default log level is ",(0,s.jsx)(n.code,{children:"info"}),". You can change it using this\nvariable."]}),"\n",(0,s.jsx)(n.h3,{id:"rucio_log_format",children:"RUCIO_LOG_FORMAT"}),"\n",(0,s.jsxs)(n.p,{children:["The default rucio log format is\n",(0,s.jsx)(n.code,{children:'%ht%tt%{X-Rucio-Forwarded-For}it%Tt%Dt\\"%{X-Rucio-Auth-Token}i\\"t%{X-Rucio-RequestId}it%{X-Rucio-Client-Ref}it\\"%r\\"t%\\>st%b'}),"\nYou can set your own format using this variable."]}),"\n",(0,s.jsx)(n.h3,{id:"rucio_hostname",children:"RUCIO_HOSTNAME"}),"\n",(0,s.jsx)(n.p,{children:"This variable sets the server name in the apache config."}),"\n",(0,s.jsx)(n.h3,{id:"rucio_server_admin",children:"RUCIO_SERVER_ADMIN"}),"\n",(0,s.jsx)(n.p,{children:"This variable sets the server admin in the apache config."}),"\n",(0,s.jsx)(n.h2,{id:"rucio_cfg-configuration-parameters",children:"RUCIO_CFG configuration parameters"}),"\n",(0,s.jsxs)(n.p,{children:["Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the configuration file\nprefixed by ",(0,s.jsx)(n.code,{children:"RUCIO_CFG"}),", e.g., the ",(0,s.jsx)(n.code,{children:"default"})," value in the ",(0,s.jsx)(n.code,{children:"database"})," section\nbecomes ",(0,s.jsx)(n.code,{children:"RUCIO_CFG_DATABASE_DEFAULT"}),". All available environment variables are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_COMMON_LOGDIR"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_COMMON_LOGLEVEL"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_DEFAULT"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_SCHEMA"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_ECHO"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POLL_RECYCLE"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POOL_SIZE"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POOL_TIMEOUT"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_MAX_OVERFLOW"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POWUSERACCOUNT"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_USERPASSWORD"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_MONITOR_CARBON_SERVER"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_MONITOR_CARBON_PORT"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_MONITOR_USER_SCOPE"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_TRACE_TRACEDIR"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_TRACE_BROKERS"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_TRACE_PORT"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_TRACE_USERNAME"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_TRACE_PASSWORD"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_TRACE_TOPIC"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_POLICY"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_SCHEMA"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_SUPPORT"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"}),"\n",(0,s.jsx)(n.li,{children:"RUCIO_CFG_WEBUI_USERCERT"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"server-configuration-for-open-id-connect-authnz",children:"Server Configuration for Open ID Connect AuthN/Z"}),"\n",(0,s.jsxs)(n.p,{children:["In order to be able to use ",(0,s.jsx)(n.a,{href:"https://openid.net/connect/",children:"OIDC"}),"\nJSON Web Tokens (",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/JSON_Web_Token",children:"JWTs"}),") and\nrelated ",(0,s.jsx)(n.a,{href:"https://oauth.net/2/",children:"OAuth2.0"})," authentication and authorization with Rucio,\none first needs to have an account with an Identity Provider (IdP)\nwhich will act as Rucio admin account representing the Rucio Application.\nCurrently, the only fully supported IdP is ",(0,s.jsx)(n.a,{href:"https://indigo-iam.github.io/v/current/",children:"INDIGO IAM"}),".\nOnce you have got your Rucio Service IAM Account [A]\n(and its subject claim identifier), you will need to ",(0,s.jsx)(n.a,{href:"https://indigo-iam.github.io/docs/v/current/user-guide/client-registration.html",children:"register two IAM Rucio\nclients"}),"\nlinked to this account. Please save the relevant ",(0,s.jsx)(n.strong,{children:"client_id"}),",\n",(0,s.jsx)(n.strong,{children:"client_secret"}),", and ",(0,s.jsx)(n.strong,{children:"registration access token (RAT)"})," in\na safe place, as you will be needing them."]}),"\n",(0,s.jsxs)(n.p,{children:["In both clients, one needs to setup the ",(0,s.jsx)(n.strong,{children:"redirect_uris"})," to\ninclude the following paths:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"https://<your_server_name>/auth/oidc_token\nhttps://<your_server_name>/auth/oidc_code\n"})}),"\n",(0,s.jsxs)(n.p,{children:["We will use one client as\n",(0,s.jsx)(n.strong,{children:"Rucio Auth IAM Client"})," [C1] (i.e. client for the authentication and\nauthorization on the Rucio server). This client needs to have ",(0,s.jsx)(n.strong,{children:"token_exchange"}),",\n",(0,s.jsx)(n.strong,{children:"token_refresh"}),", and ",(0,s.jsx)(n.strong,{children:"authorization_code"})," grants enabled. For ",(0,s.jsx)(n.strong,{children:"token_exchange"}),"\nand ",(0,s.jsx)(n.strong,{children:"token_refresh"})," you might need to contact the IAM admin as such settings are\nusually not accessible to IAM users. In addition, you will need to request your\nIAM admin to allow your client returning refresh tokens with lifetime being visible\nin their unverified header. In addition Rucio assumes refresh tokens to expire\nimmediately after their first use, which has to be also confirmed by your IAM admin."]}),"\n",(0,s.jsxs)(n.p,{children:["The second\nclient, let's call it ",(0,s.jsx)(n.strong,{children:"Rucio Admin IAM Client"})," [C2], can be used by a Rucio probe\nscript (e.g. ",(0,s.jsx)(n.a,{href:"https://github.com/rucio/probes/blob/master/attic/check_scim",children:"check_scim"}),",\n",(0,s.jsx)(n.a,{href:"https://github.com/ESCAPE-WP2/Utilities-and-Operations-Scripts/blob/master/iam-rucio-sync/sync_iam_rucio.py",children:"sync_iam_rucio"}),")\nin order to synchronize existing Rucio accounts with Rucio\nidentities. Rucio will also use this client's credentials in order to request\ntokens for itself. The IAM administrator must include the ",(0,s.jsx)(n.strong,{children:"scim:read"})," scope and\nallow the ",(0,s.jsx)(n.strong,{children:"client_credentials"})," grant type for [C2] in order\nto grant you rights to pre-provision IAM users for Rucio. Examples of the\nconfiguration of these two clients follow below:"]}),"\n",(0,s.jsxs)(n.p,{children:["Example of the ",(0,s.jsx)(n.strong,{children:"Rucio Auth IAM Client"})," [C1] configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "client_id": "AbcCDe123...",\n  "registration_access_token": "AbcCDe123...",\n  "redirect_uris": [\n    "https://rucio-auth.cern.ch/auth/oidc_token",\n    "https://rucio-auth.cern.ch/auth/oidc_code",\n  ],\n  "client_name": "rucio-admin-client",\n  "client_uri": null,\n  "logo_uri": null,\n  "contacts": [\n    "jaroslav.guenther@gmail.com"\n  ],\n  "tos_uri": null,\n  "token_endpoint_auth_method": "client_secret_basic",\n  "scope": "address fts phone openid profile offline_access \\\n    rucio email wlcg wlcg.groups fts:submit-transfer",\n  "grant_types": [\n    "refresh_token",\n    "urn:ietf:params:oauth:grant-type:token-exchange",\n    "authorization_code"\n  ],\n  "response_types": [\n    "code"\n  ],\n  "policy_uri": null,\n  "jwks_uri": null,\n  "jwks": null,\n  "jwksType": "URI",\n  "application_type": null,\n  "sector_identifier_uri": null,\n  "subject_type": null,\n  "request_object_signing_alg": null,\n  "userinfo_signed_response_alg": null,\n  "userinfo_encrypted_response_alg": null,\n  "userinfo_encrypted_response_enc": null,\n  "id_token_signed_response_alg": null,\n  "id_token_encrypted_response_alg": null,\n  "id_token_encrypted_response_enc": null,\n  "default_max_age": 60000,\n  "require_auth_time": true,\n  "default_acr_values": null,\n  "initiate_login_uri": null,\n  "post_logout_redirect_uris": null,\n  "claims_redirect_uris": [],\n  "request_uris": [],\n  "software_statement": null,\n  "software_id": null,\n  "software_version": null,\n  "code_challenge_method": null,\n  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/fdc297fc-0907-4a68-9022-3ccc7dd2501a",\n  "client_secret_expires_at": 0,\n  "client_id_issued_at": 1574700620\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Example of the ",(0,s.jsx)(n.strong,{children:"Rucio Admin IAM Client"})," [C2] configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\n  "client_id": "AbcDe123...",\n  "registration_access_token": "AbcDe123...",\n  "client_secret": "AbcDe123...",\n  "redirect_uris": [],\n  "client_name": null,\n  "client_uri": null,\n  "logo_uri": null,\n  "contacts": [\n    "jaroslav.guenther@gmail.com"\n  ],\n  "tos_uri": null,\n  "token_endpoint_auth_method": "client_secret_basic",\n  "scope": "address scim:read phone email wlcg profile \\\n    fts:submit-transfer rucio fts fts:submit-transfer",\n  "grant_types": [\n    "client_credentials"\n  ],\n  "response_types": [],\n  "policy_uri": null,\n  "jwks_uri": null,\n  "jwks": null,\n  "jwksType": "URI",\n  "application_type": null,\n  "sector_identifier_uri": null,\n  "subject_type": null,\n  "request_object_signing_alg": null,\n  "userinfo_signed_response_alg": null,\n  "userinfo_encrypted_response_alg": null,\n  "userinfo_encrypted_response_enc": null,\n  "id_token_signed_response_alg": null,\n  "id_token_encrypted_response_alg": null,\n  "id_token_encrypted_response_enc": null,\n  "default_max_age": 60000,\n  "require_auth_time": true,\n  "default_acr_values": null,\n  "initiate_login_uri": null,\n  "post_logout_redirect_uris": null,\n  "claims_redirect_uris": [],\n  "request_uris": [],\n  "software_statement": null,\n  "software_id": null,\n  "software_version": null,\n  "code_challenge_method": null,\n  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/5b5e5d37-926b-4b42-8a98-a0b4b28baf18",\n  "client_secret_expires_at": 0,\n  "client_id_issued_at": 1574700703\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To make the Rucio server aware of the two clients above, one has to exchange the\nempty dictionary in ",(0,s.jsx)(n.code,{children:"etc/idpsecrets.json"})," file with one containing the\nrelevant information. Example of such dictionary (for multiple IdPs) follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "<IdP nickname>": {\n\n        "issuer": "https://<issuer_server_name>",\n\n        "redirect_uris": [\n            "https://<auth_server_name>/auth/oidc_token",\n            "https://<auth_server_name>/auth/oidc_code"\n        ],\n\n        "client_id": "<C1_client_id>",\n        "client_secret": "<C1_client_secret>",\n\n        # this is not really needed for the OIDC functionality\n        # but it is suggested to store it anyway as it is required\n        # to edit the client in INDIGO IAM\n        "registration_access_token": "<C1_client_RAT_string>",\n\n        "SCIM": {\n            "client_id": "<C2_client_id>",\n            "client_secret": "<C2_client_secret>",\n            "registration_access_token": "<C2_client_RAT_string>"\n        }\n    },\n\n    "wlcg": {\n\n        "issuer": "https://wlcg.cloud.cnaf.infn.it/",\n\n        "redirect_uris": [\n            "https://rucio-auth.cern.ch/auth/oidc_token",\n            "https://rucio-auth.cern.ch/auth/oidc_code"\n        ],\n\n        "client_id": "fdc297fc-09 ...",\n        "client_secret": "APFVcga_X ...",\n        "registration_access_token": "eyJraWQiOi ...",\n\n        "SCIM": {\n            "client_id": "5b5e5d3 ...",\n            "client_secret": "IQqAcMOa ...",\n            "registration_access_token": "eyJraW ..."\n        }\n    },\n\n    "xdc": { ... },\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After this is done, please make sure your ",(0,s.jsx)(n.code,{children:"rucio.cfg"})," file contains the\nfollowing section:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[oidc]\nidpsecrets = /path/to/your/idpsecrets.json\nadmin_issuer = <IdP_nickname>\nexpected_audience = '<rucio>'\nexpected_scope = 'openid profile'\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Parameters ",(0,s.jsx)(n.strong,{children:"idpsecrets"})," and ",(0,s.jsx)(n.strong,{children:"admin_issuer"})," have to be present.\n",(0,s.jsx)(n.strong,{children:"IdP nickname"})," stands for your preferred IdP (e.g. 'wlcg'). The IdP\nspecified under ",(0,s.jsx)(n.strong,{children:"admin_issuer"})," will be contacted to get information about Rucio\nUsers (SCIM) and to request tokens for the Rucio ",(0,s.jsx)(n.strong,{children:"root"})," account.  The\n",(0,s.jsx)(n.strong,{children:"expected_scope"})," and ",(0,s.jsx)(n.strong,{children:"expected_audence"})," parameters are optional and if not filled,\nthe Rucio server will set them to ",(0,s.jsx)(n.code,{children:"openid profile"})," and ",(0,s.jsx)(n.code,{children:"rucio"}),"\nrespectively. The expected scopes and audiences have to be configured\ncorrespondingly on the side of your registered clients at your IdP (usually you\ncan control accepted scopes and audiences for your clients via an IdP web\ninterface)."]}),"\n",(0,s.jsxs)(n.p,{children:["To finalize the process, one should assign the OIDC identities to the relevant\nRucio ",(0,s.jsx)(n.strong,{children:"admin_account"})," (e.g. 'root', 'ddmadmin'). This identity ID is\ncomposed of the Rucio Service IAM Account [A] subject claim and\nissuer url such as demonstrated below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Add the Rucio Service IAM Account ID as an OIDC identity\nrucio-admin identity add --account rucio_admin_account \\\n  --type OIDC \\\n  --id "SUB=b3127dc7-2be3-417b-9647-6bf61238ad01, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A second identity has to be added to the same ",(0,s.jsx)(n.strong,{children:"admin_account"})," representing\nthe ",(0,s.jsx)(n.strong,{children:"client_credentials"})," flow of the Rucio application, i.e.  of the\n",(0,s.jsx)(n.strong,{children:"Rucio Admin IAM Client"})," [C2] from above. This identity consists of\nthe ",(0,s.jsx)(n.strong,{children:"client_id"})," of [C2] and the issuer (the token obtained via the\nclient credentials flow using [C2] will contain in the ",(0,s.jsx)(n.strong,{children:"sub"})," claim the\n",(0,s.jsx)(n.strong,{children:"client_id"})," of [C2] instead of Rucio Service IAM Account [A] ",(0,s.jsx)(n.strong,{children:"sub"})," claim):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Add the Rucio Admin IAM Client client_id as an OIDC identity\nrucio-admin identity add --account rucio_admin_account \\\n  --type OIDC \\\n  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note: In case you can not/will not run any IAM -> Rucio user mapping tool in\norder to sync Rucio accounts with their IAM identities, you should assign the\nappropriate OIDC identity manually (as in the example above) to each Rucio\naccount which is meant to use the OIDC authN/Z:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Add an IAM User Account ID as an OIDC identity\n# (needs to be done for each user!)\nrucio-admin identity add --account rucio_user_account \\\n  --type OIDC \\\n  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Finally, in order to ensure the correct lifetime management of the tokens and auth\nsessions, one has to run the ",(0,s.jsx)(n.strong,{children:"oauth-manager"})," daemon."]}),"\n",(0,s.jsx)(n.h3,{id:"configuration-for-daemons",children:"Configuration for Daemons"}),"\n",(0,s.jsxs)(n.p,{children:["OIDC authN/Z is also supported by the Rucio conveyor daemons and more\nspecifically by the ",(0,s.jsx)(n.strong,{children:"conveyor-submitter"})," and ",(0,s.jsx)(n.strong,{children:"conveyor-poller"})," ones.\n",(0,s.jsx)(n.strong,{children:"Conveyor-submitter"})," is responsible for submission of the transfers created in\nconnection with an existing Rucio rule. ",(0,s.jsx)(n.strong,{children:"Conveyor-poller"})," is responsible for\npolling the state of the transfers that have been submitted and updating the\nrelevant state in the database."]}),"\n",(0,s.jsx)(n.p,{children:"In order to enable this functionality, RSEs must have an attribute set as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"oidc_support: True\n"})}),"\n",(0,s.jsx)(n.p,{children:"In general, the Rucio account which created such a rule will be used to request a\nJWT token for OAuth2 authentication with FTS3. More specifically, there\nare three Rucio authentication flows that are possible:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"User Token Exchange"}),": In this case, a valid OIDC token that the user authenticated\nwith in Rucio is getting ",(0,s.jsx)(n.a,{href:"https://indigo-iam.github.io/docs/v/current/user-guide/api/oauth-token-exchange.html",children:"exchanged"}),"\nwith an appropriate token that is intended to be served to the FTS3 server.\nThis FTS3 intended token must have a specific audience [*] as well as\nspecific scopes [**] that the FTS3 server expects, this applies for the next\nauthentication flows as well. It is also worth noting that the acquired FTS3\nintended token includes all original claims that were present in the initial token."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Admin Flow"}),": In this Rucio authN/Z flow, the ",(0,s.jsx)(n.a,{href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow",children:"client_credentials"}),"\nflow is used with the ",(0,s.jsx)(n.strong,{children:"Rucio Admin IAM Client"})," [C2]. The ",(0,s.jsx)(n.strong,{children:"sub"})," claim of the\nacquired token becomes the ",(0,s.jsx)(n.strong,{children:"client_id"})," of [C2]. In this case any group membership\nthat was present in the original token is not included in the new FTS3 intended\ntoken. Additionally, for this flow to be successful a valid user OIDC token\nmust already be present in the database."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Admin Root Flow"}),": This scenario has the same logic as flow 2, with the\ndifference that it is used when the relevant rule is created by the\nRucio ",(0,s.jsx)(n.strong,{children:"admin_account"})," (e.g. 'root').\nNo other user token is involved in this case."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In all three formerly mentioned cases, if a valid FTS3 intended token\nalready exists in the Rucio database then a new token is not requested\nand the existing one is used."}),"\n",(0,s.jsxs)(n.p,{children:["The OIDC authentication mechanism shall be configured by the\nfollowing parameters in the ",(0,s.jsx)(n.code,{children:"rucio.cfg"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[conveyor]\n# if set to True, then only flow 1 will be tried\n# if set to False, then flow 1 will never be tried\nallow_user_oidc_tokens = False (default)\n\n# FTS3 intended audience [*]\nrequest_oidc_audience = 'fts:example' (default)\n\n# FTS3 intended scopes [**]\nrequest_oidc_scope = 'fts:submit-transfer' (default)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.strong,{children:"conveyor-poller"})," to work an additional configuration is needed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[conveyor]\npoller_oidc_account = rucio_admin_account\n"})}),"\n",(0,s.jsxs)(n.p,{children:["On an another level, the ",(0,s.jsx)(n.strong,{children:"reaper"})," daemon can be also configured to\nperform deletions of files on the storage by using an OIDC token,\nthe following configuration is needed:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:"[reaper]\noidc_account = rucio_admin_account\noidc_audience = same logic as [*] but for the storage\noidc_scope = same logic as [**] but for the storage\n"})}),"\n",(0,s.jsx)(n.p,{children:"Note aside: For some IdPs it may happen that the scope and audience claims are\nnot a part of the token payload. For this reason Rucio has a fall-back mechanism\nto get this information using the IdPs introspection endpoint. To allow Rucio to\nintrospect tokens that were not issued by its clients, please talk to the IdP\nadmin who should enable this functionality for your clients."}),"\n",(0,s.jsx)(n.h3,{id:"rucio-webui-login-with-cern-sso",children:"Rucio WebUI Login with CERN SSO"}),"\n",(0,s.jsxs)(n.p,{children:["By using the Rucio OIDC capabilities it is possible to integrate the\n",(0,s.jsx)(n.a,{href:"https://auth.docs.cern.ch/user-documentation/oidc/oidc/",children:"CERN SSO"})," service with\nthe WebUI so users will be able to login with a CERN account.\nPlease note that in contrast to INDIGO IAM, the CERN IdP can only be\nused for WebUI login at the moment and not for the other operations\nthat were described previously. The following steps are needed:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The Rucio administrators need to create a new application at the\n",(0,s.jsx)(n.a,{href:"https://application-portal.web.cern.ch/",children:"Application Portal"}),".\nPlease note that the ",(0,s.jsx)(n.strong,{children:"Application Identifier"})," field will be the\naudience claim in the tokens acquired by the CERN Authorization Service."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["In the newly created Application, a new ",(0,s.jsx)(n.strong,{children:"SSO Registration"})," is needed.\nPlease select OIDC in the\n'Which protocol does your application use for authentication?' question.\nAt the same time, the two Rucio redirect URIs are needed as\ndescribed in the ",(0,s.jsx)(n.code,{children:"etc/idpsecrets.json"})," configuration that was mentioned previously."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The new CERN IdP needs to be added in the ",(0,s.jsx)(n.code,{children:"etc/idpsecrets.json"})," configuration,\nwith the newly acquired client secret that was given after step 2.\nPlease note that in this case the SCIM field needs to be filled even though\nit will never be used for this IdP, one can just repeat the original\nclient_id and client_secret. The configuration will have the following format:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    # ...\n    "cern": {\n\n        "issuer": "https://auth.cern.ch/auth/realms/cern",\n\n        "redirect_uris": [\n            "https://<auth_server_name>/auth/oidc_token",\n            "https://<auth_server_name>/auth/oidc_code"\n        ],\n\n        "client_id": "<SSO_client_id>", # Same as Application Identifier\n        "client_secret": "<SSO_client_secret>",\n\n        "SCIM": {\n            "client_id": "<SSO_client_id>",\n            "client_secret": "<SSO_client_secret>",\n        }\n    }\n    # ...\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Finally, the CERN user identities need to be mapped to Rucio accounts\nas it was previously described. One example mapping follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Add an CERN User Account Username as an OIDC identity\n# (needs to be done for each user!)\n# Note that the SUB field is the CERN Account username\nrucio-admin identity add --account rucio_user_account \\\n--type OIDC \\\n--id "SUB=ridona, \\\n    ISS=https://auth.cern.ch/auth/realms/cern" \\\n--email "rucio@cern.ch"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);