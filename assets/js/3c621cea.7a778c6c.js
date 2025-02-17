"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[283],{28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var l=i(96540);const r={},_=l.createContext(r);function s(e){const n=l.useContext(_);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(_.Provider,{value:n},e.children)}},28875:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>t,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"operator/installing_daemons","title":"Installing Rucio Daemons","description":"Prerequisites","source":"@site/../docs/operator/installing_daemons.md","sourceDirName":"operator","slug":"/operator/installing_daemons","permalink":"/documentation/operator/installing_daemons","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/installing_daemons.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1739800590000,"frontMatter":{"id":"installing_daemons","title":"Installing Rucio Daemons"},"sidebar":"docs","previous":{"title":"Installing Rucio Server","permalink":"/documentation/operator/installing_server"},"next":{"title":"Configuration","permalink":"/documentation/operator/configuration"}}');var r=i(74848),_=i(28453);const s={id:"installing_daemons",title:"Installing Rucio Daemons"},c=void 0,a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install via pip",id:"install-via-pip",level:2},{value:"Install via Docker",id:"install-via-docker",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"RUCIO_DAEMON",id:"rucio_daemon",level:3},{value:"RUCIO_DAEMON_ARGS",id:"rucio_daemon_args",level:3},{value:"RUCIO_ENABLE_LOGS",id:"rucio_enable_logs",level:3},{value:"RUCIO_CFG configuration parameters",id:"rucio_cfg-configuration-parameters",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,_.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"The Rucio daemons run on Python 2.7, 3.6 and 3.7 on any Unix-like\nplatform."}),"\n",(0,r.jsx)(n.h2,{id:"install-via-pip",children:"Install via pip"}),"\n",(0,r.jsx)(n.p,{children:"Heads up: We recommend to use the docker-based install (see next\nsection) as it will configure many things for you automatically. Only\nuse the pip-based install if you have a good reason and know how to\nconfigure your web service manually:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pip install rucio\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will pull the latest release from\n",(0,r.jsx)(n.a,{href:"https://pypi.python.org/pypi/rucio/",children:(0,r.jsx)(n.strong,{children:"PyPi"})}),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",(0,r.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/requirements/requirements.server.txt",children:(0,r.jsx)(n.code,{children:"requirements.server.txt"})}),"\nand will be pulled in as necessary."]}),"\n",(0,r.jsx)(n.h2,{id:"install-via-docker",children:"Install via Docker"}),"\n",(0,r.jsx)(n.p,{children:"This image provides the Rucio daemons. Each daemon has to be run in a\nseparate container. It supports MySQL, PostgreSQL, Oracle, and SQLite as\ndatabase backends."}),"\n",(0,r.jsxs)(n.p,{children:["This image expects that there is an already initialised Rucio DB. To\nstart a simple ",(0,r.jsx)(n.code,{children:"judge-cleaner"})," daemon using a database on\n",(0,r.jsx)(n.code,{children:"mysql.db"})," without any additional parameters just run this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'docker run --name=rucio-judge-cleaner \\\n  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \\\n  -e RUCIO_DAEMON=judge-cleaner \\\n  rucio/rucio-daemons\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"RUCIO_DAEMON"})," environment variable gives the name of\nthe rucio daemon."]}),"\n",(0,r.jsxs)(n.p,{children:["Rucio can be configured fully using environment variables like\n",(0,r.jsx)(n.code,{children:"RUCIO_CFG_DATABASE_DEFAULT"}),". If you want to instead use a\ncomplete rucio.cfg it can also be mounted. This will then ignore the\n",(0,r.jsx)(n.code,{children:"RUCIO_CFG"})," environment variables:"]}),"\n",(0,r.jsx)(n.p,{children:"The rucio.cfg is used to configure the database backend and the daemons:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run --name=rucio-judge-cleaner \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -e RUCIO_DAEMON=judge-cleaner \\\n  rucio/rucio-daemons\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By default the daemon logs are written to stdout and stderr if you want\nto write to a file you can use ",(0,r.jsx)(n.code,{children:"RUCIO_ENABLE_LOGS"})," like\nthis:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run --name=rucio-judge-cleaner \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -v /tmp/logs:/var/log/rucio -e RUCIO_DAEMON=judge-cleaner \\\n  -e RUCIO_ENABLE_LOGS=True \\\n  rucio/rucio-daemons\n"})}),"\n",(0,r.jsx)(n.h2,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["As shown in the examples above the rucio-daemon image can be configured\nusing environment variables that are passed with ",(0,r.jsx)(n.code,{children:"docker run"}),".\nBelow is a list of all available variables and their behaviour:"]}),"\n",(0,r.jsx)(n.h3,{id:"rucio_daemon",children:"RUCIO_DAEMON"}),"\n",(0,r.jsxs)(n.p,{children:["This variable is mandatory and it specifies the name of the daemon,\ne.g., ",(0,r.jsx)(n.code,{children:"hermes"}),", ",(0,r.jsx)(n.code,{children:"kronos"}),",\n",(0,r.jsx)(n.code,{children:"judge-evaluator"}),", etc."]}),"\n",(0,r.jsx)(n.h3,{id:"rucio_daemon_args",children:"RUCIO_DAEMON_ARGS"}),"\n",(0,r.jsxs)(n.p,{children:["Any additional command line parameter can be specified here, e.g.,\n",(0,r.jsx)(n.code,{children:"\\--run-once"})," This field is optional."]}),"\n",(0,r.jsx)(n.h3,{id:"rucio_enable_logs",children:"RUCIO_ENABLE_LOGS"}),"\n",(0,r.jsxs)(n.p,{children:["By default, the log output of the daemon is written to stdout and\nstderr. If you set this variable to ",(0,r.jsx)(n.code,{children:"True"})," the output will\nbe written to ",(0,r.jsx)(n.code,{children:"access_log"})," and ",(0,r.jsx)(n.code,{children:"error_log"})," under\n",(0,r.jsx)(n.code,{children:"/var/log/rucio"})]}),"\n",(0,r.jsx)(n.h3,{id:"rucio_cfg-configuration-parameters",children:"RUCIO_CFG configuration parameters"}),"\n",(0,r.jsxs)(n.p,{children:["Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the\nconfiguration file prefixed by ",(0,r.jsx)(n.code,{children:"RUCIO_CFG"}),", e.g., the\n",(0,r.jsx)(n.code,{children:"default"})," value in the ",(0,r.jsx)(n.code,{children:"database"})," section\nbecomes ",(0,r.jsx)(n.code,{children:"RUCIO_CFG_DATABASE_DEFAULT"}),". All available\nenvironment variables are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_ACCOUNTS_SPECIAL_ACCOUNTS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_COMMON_LOGDIR"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_COMMON_LOGLEVEL"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_DEFAULT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_SCHEMA"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_SCHEMA"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_ECHO"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POOL_RECYCLE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POOL_SIZE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POOL_TIMEOUT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_MAX_OVERFLOW"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POWUSERACCOUNT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_DATABASE_POWUSERPASSWORD"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MONITOR_CARBON_SERVER"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MONITOR_CARBON_PORT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MONITOR_USER_SCOPE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_POLICY"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_SCHEMA"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_SUPPORT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_AUTOMATIX_SITES"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_AUTOMATIX_SLEEP_TIME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_AUTOMATIX_DATASET_LIFETIME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_AUTOMATIX_SET_METADATA"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_AUDITOR_RESULTS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_AUDITOR_CACHE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_SCHEME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_TRANSFERTOOL"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_FTSHOSTS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_CACERT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_USERCERT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_CACHE_TIME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_USE_DETERMINISTIC_ID"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_POLL_TIMEOUT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_SUBMIT_TIMEOUT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_BRING_ONLINE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_QUEUE_MODE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_USING_MEMCACHE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CONVEYOR_FTSMONHOSTS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_FTS3_PORT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_FTS3_SSL_KEY_FILE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_FTS3_SSL_CERT_FILE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_FTS3_DESTINATION"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_FTS3_BROKERS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_FTS3_VONAME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_USERNAME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_PASSWORD"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_PORT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_NONSSL_PORT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_USE_SSL"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_SSL_KEY_FILE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_SSL_CERT_FILE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_DESTINATION"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_BROKERS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_VONAME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_EMAIL_FROM"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_HERMES_EMAIL_TEST"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_KRONOS_BROKERS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_KRONOS_PORT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_SSL_KEY_FILE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_SSL_CERT_FILE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_QUEUE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_PREFETCH_SIZE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_CHUNKSIZE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_SUBSCRIPTION_ID"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_USE_SSL"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_RECONNECT_ATTEMPTS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_EXCLUDED_USRDNS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_KRONOS_USERNAME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_KRONOS_PASSWORD"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_TRACER_DATASET_WAIT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_CACHE_PORT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_CACHE_SSL_KEY_FILE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_CACHE_SSL_CERT_FILE"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_CACHE_DESTINATION"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_CACHE_BROKERS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_CACHE_VONAME"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_MESSAGING_CACHE_ACCOUNT"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CREDENTIALS_GCS"}),"\n",(0,r.jsx)(n.li,{children:"RUCIO_CFG_CREDENTIALS_SIGNATURE_LIFETIME"}),"\n"]})]})}function t(e={}){const{wrapper:n}={...(0,_.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);