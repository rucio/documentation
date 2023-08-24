"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5478],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},56384:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"using_the_client",title:"Using the Client"},l=void 0,u={unversionedId:"user/using_the_client",id:"user/using_the_client",title:"Using the Client",description:"Rucio provides several commands for the end-user. See executables.",source:"@site/../docs/user/using_the_client.md",sourceDirName:"user",slug:"/user/using_the_client",permalink:"/documentation/user/using_the_client",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/using_the_client.md",tags:[],version:"current",lastUpdatedBy:"Anton Schwarz",lastUpdatedAt:1692888845,formattedLastUpdatedAt:"Aug 24, 2023",frontMatter:{id:"using_the_client",title:"Using the Client"},sidebar:"docs",previous:{title:"Setting Up the Rucio Client",permalink:"/documentation/user/setting_up_the_rucio_client"},next:{title:"Using the Admin Client",permalink:"/documentation/user/using_the_admin_client"}},c={},d=[{value:"Getting user information",id:"getting-user-information",level:2},{value:"Open ID Connect authentication examples",id:"open-id-connect-authentication-examples",level:2},{value:"Querying basic information about RSEs",id:"querying-basic-information-about-rses",level:2},{value:"Querying information about DIDs",id:"querying-information-about-dids",level:2},{value:"Rules operations",id:"rules-operations",level:2},{value:"Accessing files",id:"accessing-files",level:2}],p={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rucio provides several commands for the end-user. See ",(0,r.kt)("a",{parentName:"p",href:"/documentation/bin/rucio"},"executables"),"."),(0,r.kt)("h2",{id:"getting-user-information"},"Getting user information"),(0,r.kt)("p",null,"The first thing you might try is to check who you are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:52:18\nupdated_at : 2014-01-17T07:52:18\nsuspended_at : None\ndeleted_at : None\nemail      : jdoe@blahblah.com\n")),(0,r.kt)("p",null,"You can switch between different accounts by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"RUCIO_ACCOUNT"),"\nvariable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ export RUCIO_ACCOUNT=root\n$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:51:59\nupdated_at : 2014-01-17T07:51:59\nsuspended_at : None\ndeleted_at : None\nemail      : root@blahblah.com\n")),(0,r.kt)("p",null,"If you try to authenticate with an account that is not mapped with your\ncredentials:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ export RUCIO_ACCOUNT=janedoe\n$ rucio whoami\ncannot get auth_token\n2018-01-30 16:50:08,554 ERROR   Cannot authenticate.\nDetails: x509 authentication failed\n2018-01-30 16:50:08,554 ERROR   Please verify that your proxy is \\\n  still valid and renew it if needed.\n")),(0,r.kt)("p",null,"The VO to authenticate against is set in the configuration file, if you're\nrunning a ",(0,r.kt)("em",{parentName:"p"},"multi-VO")," instance of Rucio. However you can specify a different VO\nas a CLI argument if your credentials map to an account there too:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:52:18\nupdated_at : 2014-01-17T07:52:18\nsuspended_at : None\ndeleted_at : None\nemail      : jdoe@normalvo.com\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio --vo abc --account root whoami\nstatus     : ACTIVE\naccount    : root\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:51:59\nupdated_at : 2014-01-17T07:51:59\nsuspended_at : None\ndeleted_at : None\nemail      : root@abc.com\n")),(0,r.kt)("h2",{id:"open-id-connect-authentication-examples"},"Open ID Connect authentication examples"),(0,r.kt)("p",null,"There are 3 CLI login methods. Two were introduced in order to avoid typing the\npassword in the Rucio CLI. The default Identity Provider ",(0,r.kt)("inlineCode",{parentName:"p"},"(IdP)/issuer")," is\nconfigured on the side of Rucio server. In case multiple IdPs are supported,\nuser can specify which one he desires to use by ",(0,r.kt)("inlineCode",{parentName:"p"},"--oidc-issuer=\\<IdP nickname\\>"),"\noption (where IdP nickname is the key under which issuers are configured on\nRucio server side in the ",(0,r.kt)("em",{parentName:"p"},"idpsecrets.json")," file). In the following examples we\nassume that user does not want to use the rucio account name specified in the\n",(0,r.kt)("em",{parentName:"p"},"rucio.cfg")," file on the client side (if so ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," parameter can be omitted).  If\n",(0,r.kt)("em",{parentName:"p"},"auth_type"),' is specified to be "oidc" in the ',(0,r.kt)("em",{parentName:"p"},"rucio.cfg")," file, ",(0,r.kt)("inlineCode",{parentName:"p"},"-S")," can be\nomitted as well.  Furthermore, we use the same default issuer as configured on\nRucio server side."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login via user's browser + fetch code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> -S=OIDC -v whoami\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login via user's browser + polling Rucio auth server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> -S=OIDC --oidc-polling -v whoami\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Automatic login:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio -a=\\<rucio_account_name\\> \\\n  -S=OIDC --oidc-user=\\<idp_username\\> \\\n  --oidc-password=\\<idp_password\\> \\\n  --oidc-auto \\\n  -v \\\n  whoami\n")))),(0,r.kt)("p",null,"We strongly discourage this approach, typing your password in CLI does not\ncomply with OAuth2/OIDC standard !"),(0,r.kt)("p",null,"Options for automatic token refresh: Assuming the rucio-oauth-manager daemon is\nrunning on the Rucio server side, one can also grant Rucio a refresh token and\nspecify the time for which Rucio should act on behalf of the user (in hours)\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"--refresh-lifetime")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'rucio -a=\\<rucio_account_name\\> \\\n  -S=OIDC \\\n  --oidc-scope="openid profile offline_access" \\\n  --oidc-refresh-lifetime=24 \\\n  -v \\\n  whoami\n')),(0,r.kt)("p",null,"If Rucio Server is granted a user both valid access and refresh tokens, it is\nalso possible to configure Rucio Client to ask Rucio Server for token\nrefresh. Assuming user used one of the 3 CLI authentication methods above +\nrequested offline_access in the scope, rucio.cfg file can be configured with the\nfollowing parameters in the ",(0,r.kt)("inlineCode",{parentName:"p"},"[client]")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[client]\nauth_oidc_refresh_active = true\nauth_oidc_refresh_before_exp = 20\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"auth_oidc_refresh_active")," is false by default. If set to true, the Rucio Client\nwill be following up token expiration timestamp. As soon as the current time\ngets to ",(0,r.kt)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes (20 min default) before token\nexpiration, Rucio Client will ask Rucio Server for token refresh with every\ncommand. If the token has been refreshed in the recent 5 min already once, the\nsame one will be returned (protection on the Rucio Server side). If the\npresented token has been refreshed automatically on the Rucio Server side by a\noauth_manager daemon run, it will return this existing new token. If the\npresented token is invalid/expired/does not have refresh token in the DB, no\nrefresh will be attempted."),(0,r.kt)("p",null,"Example of rucio.cfg file configuration with automatic token refresh:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"[client]\n\nrucio_host = https://\\<rucio_host\\>:443\nauth_host = https://\\<rucio_auth_host\\>:443\nauth_type = oidc\naccount = \\<rucio_account_name\\>\noidc_audience = rucio\noidc_scope = openid profile offline_access\noidc_issuer = wlcg\nauth_oidc_refresh_active = true\nauth_oidc_refresh_before_exp = 20\n")),(0,r.kt)("p",null,"Then, you should be able to do simply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rucio -v whoami\n")),(0,r.kt)("p",null,"and follow the instruction for first log-in with your browser. New token will be\nrequested before the current expires if a user types a rucio command within\n",(0,r.kt)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes before the expiry.  Note: If user does\nnot use Rucio Client within ",(0,r.kt)("inlineCode",{parentName:"p"},"auth_oidc_refresh_before_exp")," minutes before token\nexpires, it will be necessary to re-authenticate asking for a new offline_access\ntoken."),(0,r.kt)("p",null,"If a user wishes to authenticate with Rucio using a JSON web token not issued\nvia the Rucio login mechanisms (CLI, WebUI), one has to make sure that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The token scope claim is no less than the minimum scope (e.g. 'openid\nprofile') required by the Rucio Auth server (configured there in the rucio.cfg\nfile)."),(0,r.kt)("li",{parentName:"ul"},"same as above is true for the use of audience claim"),(0,r.kt)("li",{parentName:"ul"},"token issuer is known to Rucio Authentication server"),(0,r.kt)("li",{parentName:"ul"},"the identity of the token (",(0,r.kt)("inlineCode",{parentName:"li"},"SUB=\\<user sub claim\\>, ISS=\\<issuer url\\>"),") is\nassigned to an existing Rucio account (pre-provisioned)")),(0,r.kt)("p",null,"If so, one can directly present the token to the Rucio REST endpoint in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"X-Rucio-Auth-Token")," header, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'python\nimport requests\ns=requests.session()\nyour_token=\\<your JWT access token string\\>\nheaders={\'X-Rucio-Auth-Token\': your_token}\naddress=\'https://\\<Rucio Auth Server Name\\>/accounts/guenther\'\nresult=s.get(address, headers=headers, verify=False)\nresult.text\nu\'{\n  "status": "ACTIVE",\n  "account": "guenther",\n  "account_type": "USER",\n  "created_at": "2019-11-13T13:01:58",\n  "suspended_at": null,\n  "updated_at": "2019-11-13T13:01:58",\n  "deleted_at": null,\n  "email": "jaroslav.guenther@gmail.com"\n}\'\n')),(0,r.kt)("p",null,"There is also an option to specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"auth_token_file_path")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"client"),"\nsection of the rucio.cfg file. Rucio Client will then store and search for\nuser's token saved in such file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},"[client]\nauth_token_file_path = /path/to/token/file\n")),(0,r.kt)("h2",{id:"querying-basic-information-about-rses"},"Querying basic information about RSEs"),(0,r.kt)("p",null,"You can query the list of available RSEs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-rses\nSITE1_DISK\nSITE1_TAPE\nSITE2_DISK\nSITE2_SCRATCH\nSITE3_TAPE\n")),(0,r.kt)("p",null,"If the RSEs are tagged with attributes you can build RSE expressions and query\nthe sites matching these expressions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ rucio list-rses --rses "tier=1&disk=1"\nSITE1_DISK\nSITE2_DISK\n')),(0,r.kt)("h2",{id:"querying-information-about-dids"},"Querying information about DIDs"),(0,r.kt)("p",null,"To list all the possible scopes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-scopes\nmc\ndata\nuser.jdoe\nuser.janedoe\n")),(0,r.kt)("p",null,"You can query the DIDs matching a certain pattern. It always requires to specify\nthe scope in which you want to search:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-dids user.jdoe:*\n+-------------------------------------------+--------------+\n| SCOPE:NAME                                | [DID TYPE]   |\n|-------------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |\n| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |\n| user.jdoe:user.jdoe.test.dataset.1        | DATASET      |\n| user.jdoe:user.jdoe.test.dataset.2        | DATASET      |\n| user.jdoe:test.file.1                     | FILE         |\n| user.jdoe:test.file.2                     | FILE         |\n| user.jdoe:test.file.3                     | FILE         |\n|-------------------------------------------+--------------|\n")),(0,r.kt)("p",null,"You can filter by key/value, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-dids --filter type=CONTAINER\n+-------------------------------------------+--------------+\n| SCOPE:NAME                                | [DID TYPE]   |\n|-------------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |\n| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |\n|-------------------------------------------+--------------|\n")),(0,r.kt)("p",null,"If you want to resolve a collection (CONTAINER or DATASET) into the list of its\nconstituents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-content user.jdoe:user.jdoe.test.container.1234.1\n+------------------------------------+--------------+\n| SCOPE:NAME                         | [DID TYPE]   |\n|------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.dataset.1 | DATASET      |\n| user.jdoe:user.jdoe.test.dataset.2 | DATASET      |\n+------------------------------------+--------------+\n")),(0,r.kt)("p",null,"You can resolve also the collections (CONTAINER or DATASET) into the list of\nfiles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-files user.jdoe:user.jdoe.test.container.1234.1\n+-----------------------+---------+-------------+------------+----------+\n| SCOPE:NAME            | GUID    | ADLER32     | FILESIZE   | EVENTS   |\n|-----------------------+---------+-------------+------------+----------|\n| user.jdoe:test.file.1 | 9DF3... | ad:56fb0723 | 39.247 kB  |          |\n| user.jdoe:test.file.2 | 67E8... | ad:e3e573b5 | 636.075 kB |          |\n| user.jdoe:test.file.3 | 32CD... | ad:22849380 | 641.427 kB |          |\n+-----------------------+---------+-------------+------------+----------+\nTotal files : 3\nTotal size : 1.316 MB:\n")),(0,r.kt)("h2",{id:"rules-operations"},"Rules operations"),(0,r.kt)("p",null,"You can create a new rule like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ rucio add-rules --lifetime 1209600 \\\n  user.jdoe:user.jdoe.test.container.1234.1 1 \\\n  "tier=1&disk=1"\na12e5664555a4f12b3cc6991db5accf9\n')),(0,r.kt)("p",null,"The command returns the rule_id of the rule."),(0,r.kt)("p",null,"You can list the rules for a particular DID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-rules user.jdoe:user.jdoe.test.container.1234.1\nID    ACCOUNT  SCOPE:NAME  STATE[OK/REPL/STUCK]  RSE_EXPRESSION  COPIES  EXPIRES\n----  -------  ----------  --------------------  --------------  ------  -------\na...  jdoe     user....    OK[3/0/0]             tier=1&disk=1   1       2018...\nb...  janedoe  user....    REPLICATING[4/1/1     tier=1&tape=1   2\n4...  mc       user....    OK[3/0/0]             tier=1&tape=1   2\n")),(0,r.kt)("p",null,"The state indicates how many locks (physical replicas of the files) are OK,\nReplicating or Stuck"),(0,r.kt)("h2",{id:"accessing-files"},"Accessing files"),(0,r.kt)("p",null,"The command to download DIDs locally is called rucio download. It supports\nvarious sets of option. You can invoke it like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# rucio download user.jdoe:user.jdoe.test.container.1234.1\n2018-02-02 15:13:08,450 INFO    Thread 1/3 : Starting the download of user.jdoe:test.file.2\n2018-02-02 15:13:08,451 INFO    Thread 2/3 : Starting the download of user.jdoe:test.file.3\n2018-02-02 15:13:08,451 INFO    Thread 3/3 : Starting the download of user.jdoe:test.file.1\n2018-02-02 15:13:08,503 INFO    Thread 1/3 : File user.jdoe:test.file.2 trying \\\n  from SITE1_DISK\n2018-02-02 15:13:08,549 INFO    Thread 2/3 : File user.jdoe:test.file.3 trying \\\n  from SITE2_DISK\n2018-02-02 15:13:08,551 INFO    Thread 3/3 : File user.jdoe:test.file.1 trying \\\n  from SITE1_DISK\n2018-02-02 15:13:10,399 INFO    Thread 3/3 : File user.jdoe:test.file.1 \\\n  successfully downloaded from SITE1_DISK\n2018-02-02 15:13:10,415 INFO    Thread 2/3 : File user.jdoe:test.file.3 \\\n  successfully downloaded from SITE2_DISK\n2018-02-02 15:13:10,420 INFO    Thread 3/3 : File user.jdoe:test.file.1 \\\n  successfully downloaded. 39.247 kB in 1.85 seconds = 0.02 MBps\n2018-02-02 15:13:10,537 INFO    Thread 2/3 : File user.jdoe:test.file.3 \\\n  successfully downloaded. 641.427 kB in 1.87 seconds = 0.34 MBps\n2018-02-02 15:13:10,614 INFO    Thread 1/3 : File user.jdoe:test.file.2 \\\n  successfully downloaded from SITE1_DISK\n2018-02-02 15:13:10,633 INFO    Thread 1/3 : File user.jdoe:test.file.2 \\\n  successfully downloaded. 636.075 kB in 2.11 seconds = 0.3 MBps\n----------------------------------\nDownload summary\n----------------------------------------\nDID user.jdoe:user.jdoe.test.container.1234.1\nTotal files :                                 3\nDownloaded files :                            3\nFiles already found locally :                 0\nFiles that cannot be downloaded :             0\n")))}m.isMDXComponent=!0}}]);