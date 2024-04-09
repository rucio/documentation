"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5270],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||r;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},50480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=t(58168),i=t(98587),r=(t(96540),t(15680)),o=["components"],l={id:"installing_server",title:"Installing Rucio Server"},s=void 0,c={unversionedId:"operator/installing_server",id:"operator/installing_server",title:"Installing Rucio Server",description:"Prerequisites",source:"@site/../docs/operator/installing_server.md",sourceDirName:"operator",slug:"/operator/installing_server",permalink:"/documentation/operator/installing_server",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/installing_server.md",tags:[],version:"current",lastUpdatedBy:"Dimitrios Christidis",lastUpdatedAt:1712663262,formattedLastUpdatedAt:"Apr 9, 2024",frontMatter:{id:"installing_server",title:"Installing Rucio Server"},sidebar:"docs",previous:{title:"Setting up Rucio on Kubernetes",permalink:"/documentation/operator/kubernetes"},next:{title:"Installing Rucio Daemons",permalink:"/documentation/operator/installing_daemons"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install via pip",id:"install-via-pip",level:2},{value:"Install via Docker",id:"install-via-docker",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"RUCIO_ENABLE_SSL",id:"rucio_enable_ssl",level:3},{value:"RUCIO_SSL_PROTOCOL",id:"rucio_ssl_protocol",level:3},{value:"RUCIO_CA_PATH",id:"rucio_ca_path",level:3},{value:"RUCIO_DEFINE_ALIASES",id:"rucio_define_aliases",level:3},{value:"RUCIO_ENABLE_LOGS",id:"rucio_enable_logs",level:3},{value:"RUCIO_LOG_LEVEL",id:"rucio_log_level",level:3},{value:"RUCIO_LOG_FORMAT",id:"rucio_log_format",level:3},{value:"RUCIO_HOSTNAME",id:"rucio_hostname",level:3},{value:"RUCIO_SERVER_ADMIN",id:"rucio_server_admin",level:3},{value:"RUCIO_CFG configuration parameters",id:"rucio_cfg-configuration-parameters",level:2},{value:"Server Configuration for Open ID Connect AuthN/Z",id:"server-configuration-for-open-id-connect-authnz",level:2},{value:"Configuration for Daemons",id:"configuration-for-daemons",level:3},{value:"Rucio WebUI Login with CERN SSO",id:"rucio-webui-login-with-cern-sso",level:3}],d={toc:p},g="wrapper";function h(e){var n=e.components,t=(0,i.A)(e,o);return(0,r.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"The Rucio server runs on Python 2.7, 3.6 and 3.7 on any Unix-like platform."),(0,r.yg)("h2",{id:"install-via-pip"},"Install via pip"),(0,r.yg)("p",null,"Heads up: We recommend to use the docker-based install (see next section) as it\nwill configure many things for you automatically. Only use the pip-based install\nif you have a good reason and know how to configure your webservices manually:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"pip install rucio\n")),(0,r.yg)("p",null,"This will pull the latest release from\n",(0,r.yg)("a",{parentName:"p",href:"https://pypi.python.org/pypi/rucio/"},(0,r.yg)("strong",{parentName:"a"},"PyPi")),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/requirements.txt"},(0,r.yg)("inlineCode",{parentName:"a"},"requirements.txt")),"\nand will be pulled in as necessary."),(0,r.yg)("h2",{id:"install-via-docker"},"Install via Docker"),(0,r.yg)("p",null,"A simple server without SSL can be started like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server -p 80:80 -d rucio/rucio-server\n")),(0,r.yg)("p",null,"This will start up a simple server using sqlite based on an automatically\ngenerated configuration. You can check if the server is running with"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost/ping\n")),(0,r.yg)("p",null,"This should return the Rucio version used in the container. Any other curl\nrequests will not work as the database backend is not initialized as this image\nis meant to be used with an already bootstrapped database backend. I.e., that\nthe container has to be configured to point to the correct database. There are\ntwo ways to manage the Rucio configuration: using environment variables or by\nmounting a full rucio.cfg."),(0,r.yg)("p",null,"If you want to set the connection string for the database it can be done using\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT")," environment variable, e.g., to start a\ncontainer connecting to a MySQL DB running at ",(0,r.yg)("inlineCode",{parentName:"p"},"mysql.db")," you could use something\nlike this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'docker run --name=rucio-server \\\n  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \\\n  -p 80:80 \\\n  -d \\\n  rucio/rucio-server\n')),(0,r.yg)("p",null,"The are much more configuration parameters available that will be listed at the\nend of this readme."),(0,r.yg)("p",null,"Another way to configure Rucio is to directly mount a complete rucio.cfg into\nthe container. This will then be used instead of the auto-generated one, e.g.,\nif you have a rucio.cfg ready on your host system under ",(0,r.yg)("inlineCode",{parentName:"p"},"/tmp/rucio.cfg")," you\ncould start a container like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -p 80:80 \\\n  -d \\\n  rucio/rucio-server\n")),(0,r.yg)("p",null,"The rucio.cfg is used to configure the database backend."),(0,r.yg)("p",null,"If you want to enable SSL you would need to set the ",(0,r.yg)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_SSL")," variable\nand also need to include the host certificate, key and the the CA certificate as\nvolumes. E.g.,:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/ca.pem:/etc/grid-security/ca.pem \\\n  -v /tmp/hostcert.pem:/etc/grid-security/hostcert.pem \\\n  -v /tmp/hostkey.pem:/etc/grid-security/hostkey.pem \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -p 443:443 \\\n  -e RUCIO_ENABLE_SSL=True \\\n  -d \\\n  rucio/rucio-server\n")),(0,r.yg)("p",null,"By default the output of the Apache web server is written directly to stdout and\nstderr. If you would rather direct them into separate files it can be done using\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_LOGS")," variable. The storage folder of the logs can be used as\na volume:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-server \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -v /tmp/logs:/var/log/httpd \\\n  -p 80:80 \\\n  -e RUCIO_ENABLE_LOGS=True \\\n  -d \\\n  rucio/rucio-server\n")),(0,r.yg)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.yg)("p",null,"As shown in the examples above the rucio-server image can be configured using\nenvironment variables that are passed with ",(0,r.yg)("inlineCode",{parentName:"p"},"docker run"),". Below is a list of all\navailable variables and their behavior:"),(0,r.yg)("h3",{id:"rucio_enable_ssl"},"RUCIO_ENABLE_SSL"),(0,r.yg)("p",null,"By default, the rucio server runs without SSL on port 80. If you want to enable\nSSL set this variable to ",(0,r.yg)("inlineCode",{parentName:"p"},"True"),". If you enable SSL you will also have to provide\nthe host certificate and key and the certificate authority file. The server will\nlook for ",(0,r.yg)("inlineCode",{parentName:"p"},"hostcert.pem"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"hostkey.pem")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ca.pem")," under ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/grid-security"),"\nso you will have to mount them as volumes. Furthermore you will also have to\nexpose port 443."),(0,r.yg)("h3",{id:"rucio_ssl_protocol"},"RUCIO_SSL_PROTOCOL"),(0,r.yg)("p",null,"By default, the server will only accept TLSv1.2 connections. Defining this\nenvironment variable will allow specification of a custom Apache SSLProtocol."),(0,r.yg)("h3",{id:"rucio_ca_path"},"RUCIO_CA_PATH"),(0,r.yg)("p",null,"If you are using SSL and want use ",(0,r.yg)("inlineCode",{parentName:"p"},"SSLCACertificatePath")," and\n",(0,r.yg)("inlineCode",{parentName:"p"},"SSLCARevocationPath")," you can do so by specifying the path in this variable."),(0,r.yg)("h3",{id:"rucio_define_aliases"},"RUCIO_DEFINE_ALIASES"),(0,r.yg)("p",null,"By default, the web server is configured with all common rest endpoints except\nthe authentication endpoint. If you want to specify your own set of aliases you\ncan set this variable to ",(0,r.yg)("inlineCode",{parentName:"p"},"True"),". The web server then expects an alias file under\n",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/rucio/etc/aliases.conf")),(0,r.yg)("h3",{id:"rucio_enable_logs"},"RUCIO_ENABLE_LOGS"),(0,r.yg)("p",null,"By default, the log output of the web server is written to stdout and stderr. If\nyou set this variable to ",(0,r.yg)("inlineCode",{parentName:"p"},"True")," the output will be written to ",(0,r.yg)("inlineCode",{parentName:"p"},"access_log")," and\n",(0,r.yg)("inlineCode",{parentName:"p"},"error_log")," under ",(0,r.yg)("inlineCode",{parentName:"p"},"/var/log/httpd"),"."),(0,r.yg)("h3",{id:"rucio_log_level"},"RUCIO_LOG_LEVEL"),(0,r.yg)("p",null,"The default log level is ",(0,r.yg)("inlineCode",{parentName:"p"},"info"),". You can change it using this\nvariable."),(0,r.yg)("h3",{id:"rucio_log_format"},"RUCIO_LOG_FORMAT"),(0,r.yg)("p",null,"The default rucio log format is\n",(0,r.yg)("inlineCode",{parentName:"p"},'%ht%tt%{X-Rucio-Forwarded-For}it%Tt%Dt\\"%{X-Rucio-Auth-Token}i\\"t%{X-Rucio-RequestId}it%{X-Rucio-Client-Ref}it\\"%r\\"t%\\>st%b'),"\nYou can set your own format using this variable."),(0,r.yg)("h3",{id:"rucio_hostname"},"RUCIO_HOSTNAME"),(0,r.yg)("p",null,"This variable sets the server name in the apache config."),(0,r.yg)("h3",{id:"rucio_server_admin"},"RUCIO_SERVER_ADMIN"),(0,r.yg)("p",null,"This variable sets the server admin in the apache config."),(0,r.yg)("h2",{id:"rucio_cfg-configuration-parameters"},"RUCIO_CFG configuration parameters"),(0,r.yg)("p",null,"Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the configuration file\nprefixed by ",(0,r.yg)("inlineCode",{parentName:"p"},"RUCIO_CFG"),", e.g., the ",(0,r.yg)("inlineCode",{parentName:"p"},"default")," value in the ",(0,r.yg)("inlineCode",{parentName:"p"},"database")," section\nbecomes ",(0,r.yg)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". All available environment variables are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGDIR"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGLEVEL"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_DEFAULT"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_ECHO"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POLL_RECYCLE"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_SIZE"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_TIMEOUT"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_MAX_OVERFLOW"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERACCOUNT"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_USERPASSWORD"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_SERVER"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_PORT"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_USER_SCOPE"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_TRACEDIR"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_BROKERS"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_PORT"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_USERNAME"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_PASSWORD"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_TRACE_TOPIC"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_POLICY"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SCHEMA"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"),(0,r.yg)("li",{parentName:"ul"},"RUCIO_CFG_WEBUI_USERCERT")),(0,r.yg)("h2",{id:"server-configuration-for-open-id-connect-authnz"},"Server Configuration for Open ID Connect AuthN/Z"),(0,r.yg)("p",null,"In order to be able to use ",(0,r.yg)("a",{parentName:"p",href:"https://openid.net/connect/"},"OIDC"),"\nJSON Web Tokens (",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token"},"JWTs"),") and\nrelated ",(0,r.yg)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth2.0")," authentication and authorization with Rucio,\none first needs to have an account with an Identity Provider (IdP)\nwhich will act as Rucio admin account representing the Rucio Application.\nCurrently, the only fully supported IdP is ",(0,r.yg)("a",{parentName:"p",href:"https://indigo-iam.github.io/v/current/"},"INDIGO IAM"),".\nOnce you have got your Rucio Service IAM Account ","[A]","\n(and its subject claim identifier), you will need to ",(0,r.yg)("a",{parentName:"p",href:"https://indigo-iam.github.io/docs/v/current/user-guide/client-registration.html"},"register two IAM Rucio\nclients"),"\nlinked to this account. Please save the relevant ",(0,r.yg)("strong",{parentName:"p"},"client_id"),",\n",(0,r.yg)("strong",{parentName:"p"},"client_secret"),", and ",(0,r.yg)("strong",{parentName:"p"},"registration access token (RAT)")," in\na safe place, as you will be needing them."),(0,r.yg)("p",null,"In both clients, one needs to setup the ",(0,r.yg)("strong",{parentName:"p"},"redirect_uris")," to\ninclude the following paths:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"https://<your_server_name>/auth/oidc_token\nhttps://<your_server_name>/auth/oidc_code\n")),(0,r.yg)("p",null,"We will use one client as\n",(0,r.yg)("strong",{parentName:"p"},"Rucio Auth IAM Client")," ","[C1]"," (i.e. client for the authentication and\nauthorization on the Rucio server). This client needs to have ",(0,r.yg)("strong",{parentName:"p"},"token_exchange"),",\n",(0,r.yg)("strong",{parentName:"p"},"token_refresh"),", and ",(0,r.yg)("strong",{parentName:"p"},"authorization_code")," grants enabled. For ",(0,r.yg)("strong",{parentName:"p"},"token_exchange"),"\nand ",(0,r.yg)("strong",{parentName:"p"},"token_refresh")," you might need to contact the IAM admin as such settings are\nusually not accessible to IAM users. In addition, you will need to request your\nIAM admin to allow your client returning refresh tokens with lifetime being visible\nin their unverified header. In addition Rucio assumes refresh tokens to expire\nimmediately after their first use, which has to be also confirmed by your IAM admin."),(0,r.yg)("p",null,"The second\nclient, let's call it ",(0,r.yg)("strong",{parentName:"p"},"Rucio Admin IAM Client")," ","[C2]",", can be used by a Rucio probe\nscript (e.g. ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rucio/probes/blob/master/attic/check_scim"},"check_scim"),",\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ESCAPE-WP2/Utilities-and-Operations-Scripts/blob/master/iam-rucio-sync/sync_iam_rucio.py"},"sync_iam_rucio"),")\nin order to synchronize existing Rucio accounts with Rucio\nidentities. Rucio will also use this client's credentials in order to request\ntokens for itself. The IAM administrator must include the ",(0,r.yg)("strong",{parentName:"p"},"scim:read")," scope and\nallow the ",(0,r.yg)("strong",{parentName:"p"},"client_credentials")," grant type for ","[C2]"," in order\nto grant you rights to pre-provision IAM users for Rucio. Examples of the\nconfiguration of these two clients follow below:"),(0,r.yg)("p",null,"Example of the ",(0,r.yg)("strong",{parentName:"p"},"Rucio Auth IAM Client")," ","[C1]"," configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "client_id": "AbcCDe123...",\n  "registration_access_token": "AbcCDe123...",\n  "redirect_uris": [\n    "https://rucio-auth.cern.ch/auth/oidc_token",\n    "https://rucio-auth.cern.ch/auth/oidc_code",\n  ],\n  "client_name": "rucio-admin-client",\n  "client_uri": null,\n  "logo_uri": null,\n  "contacts": [\n    "jaroslav.guenther@gmail.com"\n  ],\n  "tos_uri": null,\n  "token_endpoint_auth_method": "client_secret_basic",\n  "scope": "address fts phone openid profile offline_access \\\n    rucio email wlcg wlcg.groups fts:submit-transfer",\n  "grant_types": [\n    "refresh_token",\n    "urn:ietf:params:oauth:grant-type:token-exchange",\n    "authorization_code"\n  ],\n  "response_types": [\n    "code"\n  ],\n  "policy_uri": null,\n  "jwks_uri": null,\n  "jwks": null,\n  "jwksType": "URI",\n  "application_type": null,\n  "sector_identifier_uri": null,\n  "subject_type": null,\n  "request_object_signing_alg": null,\n  "userinfo_signed_response_alg": null,\n  "userinfo_encrypted_response_alg": null,\n  "userinfo_encrypted_response_enc": null,\n  "id_token_signed_response_alg": null,\n  "id_token_encrypted_response_alg": null,\n  "id_token_encrypted_response_enc": null,\n  "default_max_age": 60000,\n  "require_auth_time": true,\n  "default_acr_values": null,\n  "initiate_login_uri": null,\n  "post_logout_redirect_uris": null,\n  "claims_redirect_uris": [],\n  "request_uris": [],\n  "software_statement": null,\n  "software_id": null,\n  "software_version": null,\n  "code_challenge_method": null,\n  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/fdc297fc-0907-4a68-9022-3ccc7dd2501a",\n  "client_secret_expires_at": 0,\n  "client_id_issued_at": 1574700620\n}\n')),(0,r.yg)("p",null,"Example of the ",(0,r.yg)("strong",{parentName:"p"},"Rucio Admin IAM Client")," ","[C2]"," configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'{\n  "client_id": "AbcDe123...",\n  "registration_access_token": "AbcDe123...",\n  "client_secret": "AbcDe123...",\n  "redirect_uris": [],\n  "client_name": null,\n  "client_uri": null,\n  "logo_uri": null,\n  "contacts": [\n    "jaroslav.guenther@gmail.com"\n  ],\n  "tos_uri": null,\n  "token_endpoint_auth_method": "client_secret_basic",\n  "scope": "address scim:read phone email wlcg profile \\\n    fts:submit-transfer rucio fts fts:submit-transfer",\n  "grant_types": [\n    "client_credentials"\n  ],\n  "response_types": [],\n  "policy_uri": null,\n  "jwks_uri": null,\n  "jwks": null,\n  "jwksType": "URI",\n  "application_type": null,\n  "sector_identifier_uri": null,\n  "subject_type": null,\n  "request_object_signing_alg": null,\n  "userinfo_signed_response_alg": null,\n  "userinfo_encrypted_response_alg": null,\n  "userinfo_encrypted_response_enc": null,\n  "id_token_signed_response_alg": null,\n  "id_token_encrypted_response_alg": null,\n  "id_token_encrypted_response_enc": null,\n  "default_max_age": 60000,\n  "require_auth_time": true,\n  "default_acr_values": null,\n  "initiate_login_uri": null,\n  "post_logout_redirect_uris": null,\n  "claims_redirect_uris": [],\n  "request_uris": [],\n  "software_statement": null,\n  "software_id": null,\n  "software_version": null,\n  "code_challenge_method": null,\n  "registration_client_uri": "https://wlcg.cloud.cnaf.infn.it/register/5b5e5d37-926b-4b42-8a98-a0b4b28baf18",\n  "client_secret_expires_at": 0,\n  "client_id_issued_at": 1574700703\n}\n')),(0,r.yg)("p",null,"To make the Rucio server aware of the two clients above, one has to exchange the\nempty dictionary in ",(0,r.yg)("inlineCode",{parentName:"p"},"etc/idpsecrets.json")," file with one containing the\nrelevant information. Example of such dictionary (for multiple IdPs) follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "<IdP nickname>": {\n\n        "issuer": "https://<issuer_server_name>",\n\n        "redirect_uris": [\n            "https://<auth_server_name>/auth/oidc_token",\n            "https://<auth_server_name>/auth/oidc_code"\n        ],\n\n        "client_id": "<C1_client_id>",\n        "client_secret": "<C1_client_secret>",\n\n        # this is not really needed for the OIDC functionality\n        # but it is suggested to store it anyway as it is required\n        # to edit the client in INDIGO IAM\n        "registration_access_token": "<C1_client_RAT_string>",\n\n        "SCIM": {\n            "client_id": "<C2_client_id>",\n            "client_secret": "<C2_client_secret>",\n            "registration_access_token": "<C2_client_RAT_string>"\n        }\n    },\n\n    "wlcg": {\n\n        "issuer": "https://wlcg.cloud.cnaf.infn.it/",\n\n        "redirect_uris": [\n            "https://rucio-auth.cern.ch/auth/oidc_token",\n            "https://rucio-auth.cern.ch/auth/oidc_code"\n        ],\n\n        "client_id": "fdc297fc-09 ...",\n        "client_secret": "APFVcga_X ...",\n        "registration_access_token": "eyJraWQiOi ...",\n\n        "SCIM": {\n            "client_id": "5b5e5d3 ...",\n            "client_secret": "IQqAcMOa ...",\n            "registration_access_token": "eyJraW ..."\n        }\n    },\n\n    "xdc": { ... },\n}\n')),(0,r.yg)("p",null,"After this is done, please make sure your ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio.cfg")," file contains the\nfollowing section:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cfg"},"[oidc]\nidpsecrets = /path/to/your/idpsecrets.json\nadmin_issuer = <IdP_nickname>\nexpected_audience = '<rucio>'\nexpected_scope = 'openid profile'\n")),(0,r.yg)("p",null,"Parameters ",(0,r.yg)("strong",{parentName:"p"},"idpsecrets")," and ",(0,r.yg)("strong",{parentName:"p"},"admin_issuer")," have to be present.\n",(0,r.yg)("strong",{parentName:"p"},"IdP nickname")," stands for your preferred IdP (e.g. 'wlcg'). The IdP\nspecified under ",(0,r.yg)("strong",{parentName:"p"},"admin_issuer")," will be contacted to get information about Rucio\nUsers (SCIM) and to request tokens for the Rucio ",(0,r.yg)("strong",{parentName:"p"},"root")," account.  The\n",(0,r.yg)("strong",{parentName:"p"},"expected_scope")," and ",(0,r.yg)("strong",{parentName:"p"},"expected_audence")," parameters are optional and if not filled,\nthe Rucio server will set them to ",(0,r.yg)("inlineCode",{parentName:"p"},"openid profile")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio"),"\nrespectively. The expected scopes and audiences have to be configured\ncorrespondingly on the side of your registered clients at your IdP (usually you\ncan control accepted scopes and audiences for your clients via an IdP web\ninterface)."),(0,r.yg)("p",null,"To finalize the process, one should assign the OIDC identities to the relevant\nRucio ",(0,r.yg)("strong",{parentName:"p"},"admin_account")," (e.g. 'root', 'ddmadmin'). This identity ID is\ncomposed of the Rucio Service IAM Account ","[A]"," subject claim and\nissuer url such as demonstrated below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Add the Rucio Service IAM Account ID as an OIDC identity\nrucio-admin identity add --account rucio_admin_account \\\n  --type OIDC \\\n  --id "SUB=b3127dc7-2be3-417b-9647-6bf61238ad01, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n')),(0,r.yg)("p",null,"A second identity has to be added to the same ",(0,r.yg)("strong",{parentName:"p"},"admin_account")," representing\nthe ",(0,r.yg)("strong",{parentName:"p"},"client_credentials")," flow of the Rucio application, i.e.  of the\n",(0,r.yg)("strong",{parentName:"p"},"Rucio Admin IAM Client")," ","[C2]"," from above. This identity consists of\nthe ",(0,r.yg)("strong",{parentName:"p"},"client_id")," of ","[C2]"," and the issuer (the token obtained via the\nclient credentials flow using ","[C2]"," will contain in the ",(0,r.yg)("strong",{parentName:"p"},"sub")," claim the\n",(0,r.yg)("strong",{parentName:"p"},"client_id")," of ","[C2]"," instead of Rucio Service IAM Account ","[A]"," ",(0,r.yg)("strong",{parentName:"p"},"sub")," claim):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Add the Rucio Admin IAM Client client_id as an OIDC identity\nrucio-admin identity add --account rucio_admin_account \\\n  --type OIDC \\\n  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n')),(0,r.yg)("p",null,"Note: In case you can not/will not run any IAM -> Rucio user mapping tool in\norder to sync Rucio accounts with their IAM identities, you should assign the\nappropriate OIDC identity manually (as in the example above) to each Rucio\naccount which is meant to use the OIDC authN/Z:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Add an IAM User Account ID as an OIDC identity\n# (needs to be done for each user!)\nrucio-admin identity add --account rucio_user_account \\\n  --type OIDC \\\n  --id "SUB=5b5e5d37-926b-4b42-8a98-a0b4b28baf18, \\\n    ISS=https://wlcg.cloud.cnaf.infn.it/" \\\n  --email "wlcg-doma-rucio@cern.ch"\n')),(0,r.yg)("p",null,"Finally, in order to ensure the correct lifetime management of the tokens and auth\nsessions, one has to run the ",(0,r.yg)("strong",{parentName:"p"},"oauth-manager")," daemon."),(0,r.yg)("h3",{id:"configuration-for-daemons"},"Configuration for Daemons"),(0,r.yg)("p",null,"OIDC authN/Z is also supported by the Rucio conveyor daemons and more\nspecifically by the ",(0,r.yg)("strong",{parentName:"p"},"conveyor-submitter")," and ",(0,r.yg)("strong",{parentName:"p"},"conveyor-poller")," ones.\n",(0,r.yg)("strong",{parentName:"p"},"Conveyor-submitter")," is responsible for submission of the transfers created in\nconnection with an existing Rucio rule. ",(0,r.yg)("strong",{parentName:"p"},"Conveyor-poller")," is responsible for\npolling the state of the transfers that have been submitted and updating the\nrelevant state in the database."),(0,r.yg)("p",null,"In order to enable this functionality, RSEs must have an attribute set as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cfg"},"oidc_support: True\n")),(0,r.yg)("p",null,"In general, the Rucio account which created such a rule will be used to request a\nJWT token for OAuth2 authentication with FTS3. More specifically, there\nare three Rucio authentication flows that are possible:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"User Token Exchange"),": In this case, a valid OIDC token that the user authenticated\nwith in Rucio is getting ",(0,r.yg)("a",{parentName:"p",href:"https://indigo-iam.github.io/docs/v/current/user-guide/api/oauth-token-exchange.html"},"exchanged"),"\nwith an appropriate token that is intended to be served to the FTS3 server.\nThis FTS3 intended token must have a specific audience ","[*]"," as well as\nspecific scopes ","[**]"," that the FTS3 server expects, this applies for the next\nauthentication flows as well. It is also worth noting that the acquired FTS3\nintended token includes all original claims that were present in the initial token.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Admin Flow"),": In this Rucio authN/Z flow, the ",(0,r.yg)("a",{parentName:"p",href:"https://auth0.com/docs/get-started/authentication-and-authorization-flow/client-credentials-flow"},"client_credentials"),"\nflow is used with the ",(0,r.yg)("strong",{parentName:"p"},"Rucio Admin IAM Client")," ","[C2]",". The ",(0,r.yg)("strong",{parentName:"p"},"sub")," claim of the\nacquired token becomes the ",(0,r.yg)("strong",{parentName:"p"},"client_id")," of ","[C2]",". In this case any group membership\nthat was present in the original token is not included in the new FTS3 intended\ntoken. Additionally, for this flow to be successful a valid user OIDC token\nmust already be present in the database.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Admin Root Flow"),": This scenario has the same logic as flow 2, with the\ndifference that it is used when the relevant rule is created by the\nRucio ",(0,r.yg)("strong",{parentName:"p"},"admin_account")," (e.g. 'root').\nNo other user token is involved in this case."))),(0,r.yg)("p",null,"In all three formerly mentioned cases, if a valid FTS3 intended token\nalready exists in the Rucio database then a new token is not requested\nand the existing one is used."),(0,r.yg)("p",null,"The OIDC authentication mechanism shall be configured by the\nfollowing parameters in the ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio.cfg")," file:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cfg"},"[conveyor]\n# if set to True, then only flow 1 will be tried\n# if set to False, then flow 1 will never be tried\nallow_user_oidc_tokens = False (default)\n\n# FTS3 intended audience [*]\nrequest_oidc_audience = 'fts:example' (default)\n\n# FTS3 intended scopes [**]\nrequest_oidc_scope = 'fts:submit-transfer' (default)\n")),(0,r.yg)("p",null,"For the ",(0,r.yg)("strong",{parentName:"p"},"conveyor-poller")," to work an additional configuration is needed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cfg"},"[conveyor]\npoller_oidc_account = rucio_admin_account\n")),(0,r.yg)("p",null,"On an another level, the ",(0,r.yg)("strong",{parentName:"p"},"reaper")," daemon can be also configured to\nperform deletions of files on the storage by using an OIDC token,\nthe following configuration is needed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cfg"},"[reaper]\noidc_account = rucio_admin_account\noidc_audience = same logic as [*] but for the storage\noidc_scope = same logic as [**] but for the storage\n")),(0,r.yg)("p",null,"Note aside: For some IdPs it may happen that the scope and audience claims are\nnot a part of the token payload. For this reason Rucio has a fall-back mechanism\nto get this information using the IdPs introspection endpoint. To allow Rucio to\nintrospect tokens that were not issued by its clients, please talk to the IdP\nadmin who should enable this functionality for your clients."),(0,r.yg)("h3",{id:"rucio-webui-login-with-cern-sso"},"Rucio WebUI Login with CERN SSO"),(0,r.yg)("p",null,"By using the Rucio OIDC capabilities it is possible to integrate the\n",(0,r.yg)("a",{parentName:"p",href:"https://auth.docs.cern.ch/user-documentation/oidc/oidc/"},"CERN SSO")," service with\nthe WebUI so users will be able to login with a CERN account.\nPlease note that in contrast to INDIGO IAM, the CERN IdP can only be\nused for WebUI login at the moment and not for the other operations\nthat were described previously. The following steps are needed:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The Rucio administrators need to create a new application at the\n",(0,r.yg)("a",{parentName:"p",href:"https://application-portal.web.cern.ch/"},"Application Portal"),".\nPlease note that the ",(0,r.yg)("strong",{parentName:"p"},"Application Identifier")," field will be the\naudience claim in the tokens acquired by the CERN Authorization Service.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the newly created Application, a new ",(0,r.yg)("strong",{parentName:"p"},"SSO Registration")," is needed.\nPlease select OIDC in the\n'Which protocol does your application use for authentication?' question.\nAt the same time, the two Rucio redirect URIs are needed as\ndescribed in the ",(0,r.yg)("inlineCode",{parentName:"p"},"etc/idpsecrets.json")," configuration that was mentioned previously.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The new CERN IdP needs to be added in the ",(0,r.yg)("inlineCode",{parentName:"p"},"etc/idpsecrets.json")," configuration,\nwith the newly acquired client secret that was given after step 2.\nPlease note that in this case the SCIM field needs to be filled even though\nit will never be used for this IdP, one can just repeat the original\nclient_id and client_secret. The configuration will have the following format:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n    # ...\n    "cern": {\n\n        "issuer": "https://auth.cern.ch/auth/realms/cern",\n\n        "redirect_uris": [\n            "https://<auth_server_name>/auth/oidc_token",\n            "https://<auth_server_name>/auth/oidc_code"\n        ],\n\n        "client_id": "<SSO_client_id>", # Same as Application Identifier\n        "client_secret": "<SSO_client_secret>",\n\n        "SCIM": {\n            "client_id": "<SSO_client_id>",\n            "client_secret": "<SSO_client_secret>",\n        }\n    }\n    # ...\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Finally, the CERN user identities need to be mapped to Rucio accounts\nas it was previously described. One example mapping follows:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'# Add an CERN User Account Username as an OIDC identity\n# (needs to be done for each user!)\n# Note that the SUB field is the CERN Account username\nrucio-admin identity add --account rucio_user_account \\\n--type OIDC \\\n--id "SUB=ridona, \\\n    ISS=https://auth.cern.ch/auth/realms/cern" \\\n--email "rucio@cern.ch"\n')))))}h.isMDXComponent=!0}}]);