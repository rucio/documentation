"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8943],{48759:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=s(74848),t=s(28453);const o={id:"using_the_client",title:"Using the Client"},r=void 0,a={id:"user/using_the_client",title:"Using the Client",description:"Rucio provides several commands for the end-user. See executables.",source:"@site/../docs/user/using_the_client.md",sourceDirName:"user",slug:"/user/using_the_client",permalink:"/documentation/user/using_the_client",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/using_the_client.md",tags:[],version:"current",lastUpdatedBy:"rdimaio",lastUpdatedAt:1718375314e3,frontMatter:{id:"using_the_client",title:"Using the Client"},sidebar:"docs",previous:{title:"Setting Up the Rucio Client",permalink:"/documentation/user/setting_up_the_rucio_client"},next:{title:"Using the Admin Client",permalink:"/documentation/user/using_the_admin_client"}},c={},l=[{value:"Getting help",id:"getting-help",level:2},{value:"Enable command line autocompletion",id:"enable-command-line-autocompletion",level:2},{value:"Getting user information",id:"getting-user-information",level:2},{value:"Open ID Connect authentication examples",id:"open-id-connect-authentication-examples",level:2},{value:"Querying basic information about RSEs",id:"querying-basic-information-about-rses",level:2},{value:"Querying information about DIDs",id:"querying-information-about-dids",level:2},{value:"Rules operations",id:"rules-operations",level:2},{value:"Accessing files",id:"accessing-files",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Rucio provides several commands for the end-user. See ",(0,i.jsx)(n.a,{href:"/documentation/bin/rucio",children:"executables"}),".\nThe command line client is called ",(0,i.jsx)(n.code,{children:"rucio"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-help",children:"Getting help"}),"\n",(0,i.jsxs)(n.p,{children:["To get an overview of the available ",(0,i.jsx)(n.code,{children:"rucio"})," subcommands and flags, run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rucio --help\n"})}),"\n",(0,i.jsx)(n.h2,{id:"enable-command-line-autocompletion",children:"Enable command line autocompletion"}),"\n",(0,i.jsxs)(n.p,{children:["If you would like to automatically complete ",(0,i.jsx)(n.code,{children:"rucio"})," commands, install the\n",(0,i.jsx)(n.a,{href:"https://pypi.org/project/argcomplete/",children:"argcomplete"})," package and run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'eval "$(register-python-argcomplete rucio)"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Next, type ",(0,i.jsx)(n.code,{children:"rucio "})," (note the trailing space) and press the ",(0,i.jsx)("kbd",{children:"Tab"}),"\nkey to see all available options. To use the autocompletion feature, type enough\nletters of a subcommand or flag to uniquely define it and then press\n",(0,i.jsx)("kbd",{children:"Tab"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"getting-user-information",children:"Getting user information"}),"\n",(0,i.jsx)(n.p,{children:"The first thing you might try is to check who you are:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:52:18\nupdated_at : 2014-01-17T07:52:18\nsuspended_at : None\ndeleted_at : None\nemail      : jdoe@blahblah.com\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can switch between different accounts by setting the ",(0,i.jsx)(n.code,{children:"RUCIO_ACCOUNT"}),"\nvariable:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ export RUCIO_ACCOUNT=root\n$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:51:59\nupdated_at : 2014-01-17T07:51:59\nsuspended_at : None\ndeleted_at : None\nemail      : root@blahblah.com\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you try to authenticate with an account that is not mapped with your\ncredentials:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ export RUCIO_ACCOUNT=janedoe\n$ rucio whoami\ncannot get auth_token\n2018-01-30 16:50:08,554 ERROR   Cannot authenticate.\nDetails: x509 authentication failed\n2018-01-30 16:50:08,554 ERROR   Please verify that your proxy is \\\n  still valid and renew it if needed.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The VO to authenticate against is set in the configuration file, if you're\nrunning a ",(0,i.jsx)(n.em,{children:"multi-VO"})," instance of Rucio. However you can specify a different VO\nas a CLI argument if your credentials map to an account there too:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio whoami\nstatus     : ACTIVE\naccount    : jdoe\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:52:18\nupdated_at : 2014-01-17T07:52:18\nsuspended_at : None\ndeleted_at : None\nemail      : jdoe@normalvo.com\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio --vo abc --account root whoami\nstatus     : ACTIVE\naccount    : root\naccount_type : SERVICE\ncreated_at : 2014-01-17T07:51:59\nupdated_at : 2014-01-17T07:51:59\nsuspended_at : None\ndeleted_at : None\nemail      : root@abc.com\n"})}),"\n",(0,i.jsx)(n.h2,{id:"open-id-connect-authentication-examples",children:"Open ID Connect authentication examples"}),"\n",(0,i.jsxs)(n.p,{children:["There are 3 CLI login methods. Two were introduced in order to avoid typing the\npassword in the Rucio CLI. The default Identity Provider ",(0,i.jsx)(n.code,{children:"(IdP)/issuer"})," is\nconfigured on the side of Rucio server. In case multiple IdPs are supported,\nuser can specify which one he desires to use by ",(0,i.jsx)(n.code,{children:"--oidc-issuer=\\<IdP nickname\\>"}),"\noption (where IdP nickname is the key under which issuers are configured on\nRucio server side in the ",(0,i.jsx)(n.em,{children:"idpsecrets.json"})," file). In the following examples we\nassume that user does not want to use the rucio account name specified in the\n",(0,i.jsx)(n.em,{children:"rucio.cfg"})," file on the client side (if so ",(0,i.jsx)(n.code,{children:"-a"})," parameter can be omitted).  If\n",(0,i.jsx)(n.em,{children:"auth_type"}),' is specified to be "oidc" in the ',(0,i.jsx)(n.em,{children:"rucio.cfg"})," file, ",(0,i.jsx)(n.code,{children:"-S"})," can be\nomitted as well.  Furthermore, we use the same default issuer as configured on\nRucio server side."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login via user's browser + fetch code:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rucio -a=\\<rucio_account_name\\> -S=OIDC -v whoami\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Login via user's browser + polling Rucio auth server:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rucio -a=\\<rucio_account_name\\> -S=OIDC --oidc-polling -v whoami\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Automatic login:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rucio -a=\\<rucio_account_name\\> \\\n  -S=OIDC --oidc-user=\\<idp_username\\> \\\n  --oidc-password=\\<idp_password\\> \\\n  --oidc-auto \\\n  -v \\\n  whoami\n"})}),"\n",(0,i.jsx)(n.p,{children:"We strongly discourage this approach, typing your password in CLI does not\ncomply with OAuth2/OIDC standard !"}),"\n",(0,i.jsxs)(n.p,{children:["Options for automatic token refresh: Assuming the rucio-oauth-manager daemon is\nrunning on the Rucio server side, one can also grant Rucio a refresh token and\nspecify the time for which Rucio should act on behalf of the user (in hours)\nusing the ",(0,i.jsx)(n.code,{children:"--refresh-lifetime"})," option:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'rucio -a=\\<rucio_account_name\\> \\\n  -S=OIDC \\\n  --oidc-scope="openid profile offline_access" \\\n  --oidc-refresh-lifetime=24 \\\n  -v \\\n  whoami\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If Rucio Server is granted a user both valid access and refresh tokens, it is\nalso possible to configure Rucio Client to ask Rucio Server for token\nrefresh. Assuming user used one of the 3 CLI authentication methods above +\nrequested offline_access in the scope, rucio.cfg file can be configured with the\nfollowing parameters in the ",(0,i.jsx)(n.code,{children:"[client]"})," section:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[client]\nauth_oidc_refresh_active = true\nauth_oidc_refresh_before_exp = 20\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"auth_oidc_refresh_active"})," is false by default. If set to true, the Rucio Client\nwill be following up token expiration timestamp. As soon as the current time\ngets to ",(0,i.jsx)(n.code,{children:"auth_oidc_refresh_before_exp"})," minutes (20 min default) before token\nexpiration, Rucio Client will ask Rucio Server for token refresh with every\ncommand. If the token has been refreshed in the recent 5 min already once, the\nsame one will be returned (protection on the Rucio Server side). If the\npresented token has been refreshed automatically on the Rucio Server side by a\noauth_manager daemon run, it will return this existing new token. If the\npresented token is invalid/expired/does not have refresh token in the DB, no\nrefresh will be attempted."]}),"\n",(0,i.jsx)(n.p,{children:"Example of rucio.cfg file configuration with automatic token refresh:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[client]\n\nrucio_host = https://\\<rucio_host\\>:443\nauth_host = https://\\<rucio_auth_host\\>:443\nauth_type = oidc\naccount = \\<rucio_account_name\\>\noidc_audience = rucio\noidc_scope = openid profile offline_access\noidc_issuer = wlcg\nauth_oidc_refresh_active = true\nauth_oidc_refresh_before_exp = 20\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, you should be able to do simply:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rucio -v whoami\n"})}),"\n",(0,i.jsxs)(n.p,{children:["and follow the instruction for first log-in with your browser. New token will be\nrequested before the current expires if a user types a rucio command within\n",(0,i.jsx)(n.code,{children:"auth_oidc_refresh_before_exp"})," minutes before the expiry.  Note: If user does\nnot use Rucio Client within ",(0,i.jsx)(n.code,{children:"auth_oidc_refresh_before_exp"})," minutes before token\nexpires, it will be necessary to re-authenticate asking for a new offline_access\ntoken."]}),"\n",(0,i.jsx)(n.p,{children:"If a user wishes to authenticate with Rucio using a JSON web token not issued\nvia the Rucio login mechanisms (CLI, WebUI), one has to make sure that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The token scope claim is no less than the minimum scope (e.g. 'openid\nprofile') required by the Rucio Auth server (configured there in the rucio.cfg\nfile)."}),"\n",(0,i.jsx)(n.li,{children:"same as above is true for the use of audience claim"}),"\n",(0,i.jsx)(n.li,{children:"token issuer is known to Rucio Authentication server"}),"\n",(0,i.jsxs)(n.li,{children:["the identity of the token (",(0,i.jsx)(n.code,{children:"SUB=\\<user sub claim\\>, ISS=\\<issuer url\\>"}),") is\nassigned to an existing Rucio account (pre-provisioned)"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If so, one can directly present the token to the Rucio REST endpoint in the\n",(0,i.jsx)(n.code,{children:"X-Rucio-Auth-Token"})," header, e.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'python\nimport requests\ns=requests.session()\nyour_token=\\<your JWT access token string\\>\nheaders={\'X-Rucio-Auth-Token\': your_token}\naddress=\'https://\\<Rucio Auth Server Name\\>/accounts/guenther\'\nresult=s.get(address, headers=headers, verify=False)\nresult.text\nu\'{\n  "status": "ACTIVE",\n  "account": "guenther",\n  "account_type": "USER",\n  "created_at": "2019-11-13T13:01:58",\n  "suspended_at": null,\n  "updated_at": "2019-11-13T13:01:58",\n  "deleted_at": null,\n  "email": "jaroslav.guenther@gmail.com"\n}\'\n'})}),"\n",(0,i.jsxs)(n.p,{children:["There is also an option to specify a ",(0,i.jsx)(n.code,{children:"auth_token_file_path"})," in the ",(0,i.jsx)(n.code,{children:"client"}),"\nsection of the rucio.cfg file. Rucio Client will then store and search for\nuser's token saved in such file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:"[client]\nauth_token_file_path = /path/to/token/file\n"})}),"\n",(0,i.jsx)(n.h2,{id:"querying-basic-information-about-rses",children:"Querying basic information about RSEs"}),"\n",(0,i.jsx)(n.p,{children:"You can query the list of available RSEs:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio list-rses\nSITE1_DISK\nSITE1_TAPE\nSITE2_DISK\nSITE2_SCRATCH\nSITE3_TAPE\n"})}),"\n",(0,i.jsx)(n.p,{children:"If the RSEs are tagged with attributes you can build RSE expressions and query\nthe sites matching these expressions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ rucio list-rses --rses "tier=1&disk=1"\nSITE1_DISK\nSITE2_DISK\n'})}),"\n",(0,i.jsx)(n.h2,{id:"querying-information-about-dids",children:"Querying information about DIDs"}),"\n",(0,i.jsx)(n.p,{children:"To list all the possible scopes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio list-scopes\nmc\ndata\nuser.jdoe\nuser.janedoe\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can query the DIDs matching a certain pattern. It always requires to specify\nthe scope in which you want to search:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio list-dids user.jdoe:*\n+-------------------------------------------+--------------+\n| SCOPE:NAME                                | [DID TYPE]   |\n|-------------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |\n| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |\n| user.jdoe:user.jdoe.test.dataset.1        | DATASET      |\n| user.jdoe:user.jdoe.test.dataset.2        | DATASET      |\n| user.jdoe:test.file.1                     | FILE         |\n| user.jdoe:test.file.2                     | FILE         |\n| user.jdoe:test.file.3                     | FILE         |\n|-------------------------------------------+--------------|\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can filter by key/value, e.g.:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio list-dids --filter type=CONTAINER\n+-------------------------------------------+--------------+\n| SCOPE:NAME                                | [DID TYPE]   |\n|-------------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.container.1234.1 | CONTAINER    |\n| user.jdoe:user.jdoe.test.container.1234.2 | CONTAINER    |\n|-------------------------------------------+--------------|\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you want to resolve a collection (CONTAINER or DATASET) into the list of its\nconstituents:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio list-content user.jdoe:user.jdoe.test.container.1234.1\n+------------------------------------+--------------+\n| SCOPE:NAME                         | [DID TYPE]   |\n|------------------------------------+--------------|\n| user.jdoe:user.jdoe.test.dataset.1 | DATASET      |\n| user.jdoe:user.jdoe.test.dataset.2 | DATASET      |\n+------------------------------------+--------------+\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can resolve also the collections (CONTAINER or DATASET) into the list of\nfiles:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio list-files user.jdoe:user.jdoe.test.container.1234.1\n+-----------------------+---------+-------------+------------+----------+\n| SCOPE:NAME            | GUID    | ADLER32     | FILESIZE   | EVENTS   |\n|-----------------------+---------+-------------+------------+----------|\n| user.jdoe:test.file.1 | 9DF3... | ad:56fb0723 | 39.247 kB  |          |\n| user.jdoe:test.file.2 | 67E8... | ad:e3e573b5 | 636.075 kB |          |\n| user.jdoe:test.file.3 | 32CD... | ad:22849380 | 641.427 kB |          |\n+-----------------------+---------+-------------+------------+----------+\nTotal files : 3\nTotal size : 1.316 MB:\n"})}),"\n",(0,i.jsx)(n.h2,{id:"rules-operations",children:"Rules operations"}),"\n",(0,i.jsx)(n.p,{children:"You can create a new rule like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'$ rucio add-rules --lifetime 1209600 \\\n  user.jdoe:user.jdoe.test.container.1234.1 1 \\\n  "tier=1&disk=1"\na12e5664555a4f12b3cc6991db5accf9\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command returns the rule_id of the rule."}),"\n",(0,i.jsx)(n.p,{children:"You can list the rules for a particular DID:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ rucio list-rules user.jdoe:user.jdoe.test.container.1234.1\nID    ACCOUNT  SCOPE:NAME  STATE[OK/REPL/STUCK]  RSE_EXPRESSION  COPIES  EXPIRES\n----  -------  ----------  --------------------  --------------  ------  -------\na...  jdoe     user....    OK[3/0/0]             tier=1&disk=1   1       2018...\nb...  janedoe  user....    REPLICATING[4/1/1     tier=1&tape=1   2\n4...  mc       user....    OK[3/0/0]             tier=1&tape=1   2\n"})}),"\n",(0,i.jsx)(n.p,{children:"The state indicates how many locks (physical replicas of the files) are OK,\nReplicating or Stuck"}),"\n",(0,i.jsx)(n.h2,{id:"accessing-files",children:"Accessing files"}),"\n",(0,i.jsx)(n.p,{children:"The command to download DIDs locally is called rucio download. It supports\nvarious sets of option. You can invoke it like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# rucio download user.jdoe:user.jdoe.test.container.1234.1\n2018-02-02 15:13:08,450 INFO    Thread 1/3 : Starting the download of user.jdoe:test.file.2\n2018-02-02 15:13:08,451 INFO    Thread 2/3 : Starting the download of user.jdoe:test.file.3\n2018-02-02 15:13:08,451 INFO    Thread 3/3 : Starting the download of user.jdoe:test.file.1\n2018-02-02 15:13:08,503 INFO    Thread 1/3 : File user.jdoe:test.file.2 trying \\\n  from SITE1_DISK\n2018-02-02 15:13:08,549 INFO    Thread 2/3 : File user.jdoe:test.file.3 trying \\\n  from SITE2_DISK\n2018-02-02 15:13:08,551 INFO    Thread 3/3 : File user.jdoe:test.file.1 trying \\\n  from SITE1_DISK\n2018-02-02 15:13:10,399 INFO    Thread 3/3 : File user.jdoe:test.file.1 \\\n  successfully downloaded from SITE1_DISK\n2018-02-02 15:13:10,415 INFO    Thread 2/3 : File user.jdoe:test.file.3 \\\n  successfully downloaded from SITE2_DISK\n2018-02-02 15:13:10,420 INFO    Thread 3/3 : File user.jdoe:test.file.1 \\\n  successfully downloaded. 39.247 kB in 1.85 seconds = 0.02 MBps\n2018-02-02 15:13:10,537 INFO    Thread 2/3 : File user.jdoe:test.file.3 \\\n  successfully downloaded. 641.427 kB in 1.87 seconds = 0.34 MBps\n2018-02-02 15:13:10,614 INFO    Thread 1/3 : File user.jdoe:test.file.2 \\\n  successfully downloaded from SITE1_DISK\n2018-02-02 15:13:10,633 INFO    Thread 1/3 : File user.jdoe:test.file.2 \\\n  successfully downloaded. 636.075 kB in 2.11 seconds = 0.3 MBps\n----------------------------------\nDownload summary\n----------------------------------------\nDID user.jdoe:user.jdoe.test.container.1234.1\nTotal files :                                 3\nDownloaded files :                            3\nFiles already found locally :                 0\nFiles that cannot be downloaded :             0\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var i=s(96540);const t={},o=i.createContext(t);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);