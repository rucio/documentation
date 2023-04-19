"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2709],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),C=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=C(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},E=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=_(e,["components","mdxType","originalType","parentName"]),p=C(a),E=l,m=p["".concat(o,".").concat(E)]||p[E]||O[E]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=E;var _={};for(var o in t)hasOwnProperty.call(t,o)&&(_[o]=t[o]);_.originalType=e,_[p]="string"==typeof e?e:l,i[1]=_;for(var C=2;C<r;C++)i[C]=a[C];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}E.displayName="MDXCreateElement"},50843:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>_,metadata:()=>C,toc:()=>p});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],_={id:"installing_daemons",title:"Installing Rucio Daemons"},o=void 0,C={unversionedId:"installing_daemons",id:"installing_daemons",title:"Installing Rucio Daemons",description:"Prerequisites",source:"@site/../docs/installing_daemons.md",sourceDirName:".",slug:"/installing_daemons",permalink:"/documentation/installing_daemons",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/installing_daemons.md",tags:[],version:"current",lastUpdatedBy:"Radu Carpa",lastUpdatedAt:1681908577,formattedLastUpdatedAt:"Apr 19, 2023",frontMatter:{id:"installing_daemons",title:"Installing Rucio Daemons"},sidebar:"docs",previous:{title:"Installing Rucio Server",permalink:"/documentation/installing_server"},next:{title:"Monitoring",permalink:"/documentation/monitoring"}},u={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install via pip",id:"install-via-pip",level:2},{value:"Install via Docker",id:"install-via-docker",level:2},{value:"Environment Variables",id:"environment-variables",level:2},{value:"RUCIO_DAEMON",id:"rucio_daemon",level:3},{value:"RUCIO_DAEMON_ARGS",id:"rucio_daemon_args",level:3},{value:"RUCIO_ENABLE_LOGS",id:"rucio_enable_logs",level:3},{value:"RUCIO_CFG configuration parameters",id:"rucio_cfg-configuration-parameters",level:3}],O={toc:p},E="wrapper";function m(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)(E,(0,n.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The Rucio daemons run on Python 2.7, 3.6 and 3.7 on any Unix-like\nplatform."),(0,r.kt)("h2",{id:"install-via-pip"},"Install via pip"),(0,r.kt)("p",null,"Heads up: We recommend to use the docker-based install (see next\nsection) as it will configure many things for you automatically. Only\nuse the pip-based install if you have a good reason and know how to\nconfigure your web service manually:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install rucio\n")),(0,r.kt)("p",null,"This will pull the latest release from\n",(0,r.kt)("a",{parentName:"p",href:"https://pypi.python.org/pypi/rucio/"},(0,r.kt)("strong",{parentName:"a"},"PyPi")),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/requirements.txt"},(0,r.kt)("inlineCode",{parentName:"a"},"requirements.txt")),"\nand will be pulled in as necessary."),(0,r.kt)("h2",{id:"install-via-docker"},"Install via Docker"),(0,r.kt)("p",null,"This image provides the Rucio daemons. Each daemon has to be run in a\nseparate container. It supports MySQL, PostgreSQL, Oracle, and SQLite as\ndatabase backends."),(0,r.kt)("p",null,"This image expects that there is an already initialised Rucio DB. To\nstart a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"judge-cleaner")," daemon using a database on\n",(0,r.kt)("inlineCode",{parentName:"p"},"mysql.db")," without any additional parameters just run this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker run --name=rucio-judge-cleaner \\\n  -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" \\\n  -e RUCIO_DAEMON=judge-cleaner \\\n  rucio/rucio-daemons\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RUCIO_DAEMON")," environment variable gives the name of\nthe rucio daemon."),(0,r.kt)("p",null,"Rucio can be configured fully using environment variables like\n",(0,r.kt)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". If you want to instead use a\ncomplete rucio.cfg it can also be mounted. This will then ignore the\n",(0,r.kt)("inlineCode",{parentName:"p"},"RUCIO_CFG")," environment variables:"),(0,r.kt)("p",null,"The rucio.cfg is used to configure the database backend and the daemons:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-judge-cleaner \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -e RUCIO_DAEMON=judge-cleaner \\\n  rucio/rucio-daemons\n")),(0,r.kt)("p",null,"By default the daemon logs are written to stdout and stderr if you want\nto write to a file you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_LOGS")," like\nthis:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-judge-cleaner \\\n  -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg \\\n  -v /tmp/logs:/var/log/rucio -e RUCIO_DAEMON=judge-cleaner \\\n  -e RUCIO_ENABLE_LOGS=True \\\n  rucio/rucio-daemons\n")),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"As shown in the examples above the rucio-daemon image can be configured\nusing environment variables that are passed with ","[docker\nrun]","{.title-ref}. Below is a list of all available variables and their\nbehaviour:"),(0,r.kt)("h3",{id:"rucio_daemon"},"RUCIO_DAEMON"),(0,r.kt)("p",null,"This variable is mandatory and it specifies the name of the daemon,\ne.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"hermes"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kronos"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"judge-evaluator"),", etc."),(0,r.kt)("h3",{id:"rucio_daemon_args"},"RUCIO_DAEMON_ARGS"),(0,r.kt)("p",null,"Any additional command line parameter can be specified here, e.g.,\n",(0,r.kt)("inlineCode",{parentName:"p"},"\\--run-once")," This field is optional."),(0,r.kt)("h3",{id:"rucio_enable_logs"},"RUCIO_ENABLE_LOGS"),(0,r.kt)("p",null,"By default, the log output of the daemon is written to stdout and\nstderr. If you set this variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," the output will\nbe written to ",(0,r.kt)("inlineCode",{parentName:"p"},"access_log")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"error_log")," under\n",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/rucio")),(0,r.kt)("h3",{id:"rucio_cfg-configuration-parameters"},"RUCIO_CFG configuration parameters"),(0,r.kt)("p",null,"Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the\nconfiguration file prefixed by ",(0,r.kt)("inlineCode",{parentName:"p"},"RUCIO_CFG"),", e.g., the\n",(0,r.kt)("inlineCode",{parentName:"p"},"default")," value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," section\nbecomes ",(0,r.kt)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". All available\nenvironment variables are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_ACCOUNTS_SPECIAL_ACCOUNTS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGDIR"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGLEVEL"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_DEFAULT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_ECHO"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RECYCLE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_SIZE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_TIMEOUT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_MAX_OVERFLOW"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERACCOUNT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERPASSWORD"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_SERVER"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_PORT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_USER_SCOPE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_POLICY"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SCHEMA"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SITES"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SLEEP_TIME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_DATASET_LIFETIME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SET_METADATA"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_AUDITOR_RESULTS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_AUDITOR_CACHE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_SCHEME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_TRANSFERTOOL"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_FTSHOSTS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_CACERT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USERCERT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_CACHE_TIME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USE_DETERMINISTIC_ID"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_POLL_TIMEOUT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_SUBMIT_TIMEOUT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_BRING_ONLINE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_QUEUE_MODE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USING_MEMCACHE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_FTSMONHOSTS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_PORT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_SSL_KEY_FILE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_SSL_CERT_FILE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_DESTINATION"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_BROKERS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_VONAME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_USERNAME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_PASSWORD"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_PORT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_NONSSL_PORT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_USE_SSL"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_SSL_KEY_FILE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_SSL_CERT_FILE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_DESTINATION"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_BROKERS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_VONAME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_EMAIL_FROM"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_EMAIL_TEST"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_BROKERS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_PORT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SSL_KEY_FILE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SSL_CERT_FILE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_QUEUE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_PREFETCH_SIZE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_CHUNKSIZE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SUBSCRIPTION_ID"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_USE_SSL"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_RECONNECT_ATTEMPTS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_EXCLUDED_USRDNS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_USERNAME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_PASSWORD"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_DATASET_WAIT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_PORT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_SSL_KEY_FILE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_SSL_CERT_FILE"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_DESTINATION"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_BROKERS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_VONAME"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_ACCOUNT"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CREDENTIALS_GCS"),(0,r.kt)("li",{parentName:"ul"},"RUCIO_CFG_CREDENTIALS_SIGNATURE_LIFETIME")))}m.isMDXComponent=!0}}]);