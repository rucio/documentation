(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{260:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return O})),a.d(t,"metadata",(function(){return _})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(3),i=a(7),r=(a(0),a(359)),l=["components"],O={id:"installing-rucio-daemons",title:"Installing Rucio Daemons",sidebar_label:"Installing Rucio Daemons"},_={unversionedId:"installing-rucio-daemons",id:"installing-rucio-daemons",isDocsHomePage:!1,title:"Installing Rucio Daemons",description:"Prerequisites",source:"@site/../docs/installing_daemons.md",sourceDirName:".",slug:"/installing-rucio-daemons",permalink:"/documentation/installing-rucio-daemons",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/installing_daemons.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1633431020,formattedLastUpdatedAt:"10/5/2021",sidebar_label:"Installing Rucio Daemons",frontMatter:{id:"installing-rucio-daemons",title:"Installing Rucio Daemons",sidebar_label:"Installing Rucio Daemons"},sidebar:"docs",previous:{title:"Prerequisites",permalink:"/documentation/installing-rucio-server"},next:{title:"Monitoring",permalink:"/documentation/monitoring"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install via pip",id:"install-via-pip",children:[]},{value:"Install via Docker",id:"install-via-docker",children:[]},{value:"Environment Variables",id:"environment-variables",children:[{value:"RUCIO_DAEMON",id:"rucio_daemon",children:[]},{value:"RUCIO_DAEMON_ARGS",id:"rucio_daemon_args",children:[]},{value:"RUCIO_ENABLE_LOGFILE",id:"rucio_enable_logfile",children:[]},{value:"RUCIO_CFG configuration parameters:",id:"rucio_cfg-configuration-parameters",children:[]}]}],b={toc:c};function o(e){var t=e.components,a=Object(i.a)(e,l);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"The Rucio daemons run on Python 2.7, 3.6 and 3.7 on any Unix-like\nplatform."),Object(r.b)("h2",{id:"install-via-pip"},"Install via pip"),Object(r.b)("p",null,"Heads up: We recommend to use the docker-based install (see next\nsection) as it will configure many things for you automatically. Only\nuse the pip-based install if you have a good reason and know how to\nconfigure your web service manually:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"pip install rucio\n")),Object(r.b)("p",null,"This will pull the latest release from\n",Object(r.b)("a",{parentName:"p",href:"https://pypi.python.org/pypi/rucio/"},Object(r.b)("strong",{parentName:"a"},"PyPi")),". The Rucio server also needs\nseveral Python dependencies. These are all listed in the file\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/etc/pip-requires"},Object(r.b)("inlineCode",{parentName:"a"},"etc/pip-requires")),"\nand will be pulled in as necessary."),Object(r.b)("h2",{id:"install-via-docker"},"Install via Docker"),Object(r.b)("p",null,"This image provides the Rucio daemons. Each daemon has to be run in a\nseparate container. It supports MySQL, PostgreSQL, Oracle, and SQLite as\ndatabase backends."),Object(r.b)("p",null,"This image expects that there is an already initialised Rucio DB. To\nstart a simple ",Object(r.b)("inlineCode",{parentName:"p"},"judge-cleaner")," daemon using a database on\n",Object(r.b)("inlineCode",{parentName:"p"},"mysql.db")," without any additional parameters just run this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'docker run --name=rucio-judge-cleaner -e RUCIO_CFG_DATABASE_DEFAULT="mysql+pymysql://rucio:rucio@mysql.db/rucio" -e RUCIO_DAEMON=judge-cleaner  rucio/rucio-daemons\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_DAEMON")," environment variable gives the name of\nthe rucio daemon."),Object(r.b)("p",null,"Rucio can be configured fully using environment variables like\n",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". If you want to instead use a\ncomplete rucio.cfg it can also be mounted. This will then ignore the\n",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG")," environment variables:"),Object(r.b)("p",null,"The rucio.cfg is used to configure the database backend and the daemons:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-judge-cleaner -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg -e RUCIO_DAEMON=judge-cleaner  rucio/rucio-daemons\n")),Object(r.b)("p",null,"By default the daemon logs are written to stdout and stderr if you want\nto write to a file you can use ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_ENABLE_LOGS")," like\nthis:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"docker run --name=rucio-judge-cleaner -v /tmp/rucio.cfg:/opt/rucio/etc/rucio.cfg -v /tmp/logs:/var/log/rucio -e RUCIO_DAEMON=judge-cleaner  -e RUCIO_ENABLE_LOGS=True rucio/rucio-daemons\n")),Object(r.b)("h2",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"As shown in the examples above the rucio-daemon image can be configured\nusing environment variables that are passed with ","[docker\nrun]","{.title-ref}. Below is a list of all available variables and their\nbehaviour:"),Object(r.b)("h3",{id:"rucio_daemon"},"RUCIO_DAEMON"),Object(r.b)("p",null,"This variable is mandatory and it specifies the name of the daemon,\ne.g., ",Object(r.b)("inlineCode",{parentName:"p"},"hermes"),", ",Object(r.b)("inlineCode",{parentName:"p"},"kronos"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"judge-evaluator"),", etc."),Object(r.b)("h3",{id:"rucio_daemon_args"},"RUCIO_DAEMON_ARGS"),Object(r.b)("p",null,"Any additional command line parameter can be specified here, e.g.,\n",Object(r.b)("inlineCode",{parentName:"p"},"\\--run-once")," This field is optional."),Object(r.b)("h3",{id:"rucio_enable_logfile"},"RUCIO_ENABLE_LOGFILE"),Object(r.b)("p",null,"By default, the log output of the daemon is written to stdout and\nstderr. If you set this variable to ",Object(r.b)("inlineCode",{parentName:"p"},"True")," the output will\nbe written to ",Object(r.b)("inlineCode",{parentName:"p"},"access_log")," and ",Object(r.b)("inlineCode",{parentName:"p"},"error_log")," under\n",Object(r.b)("inlineCode",{parentName:"p"},"/var/log/rucio")),Object(r.b)("h3",{id:"rucio_cfg-configuration-parameters"},"RUCIO_CFG configuration parameters:"),Object(r.b)("p",null,"Environment variables can be used to set values for the auto-generated\nrucio.cfg. The names are derived from the actual names in the\nconfiguration file prefixed by ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG"),", e.g., the\n",Object(r.b)("inlineCode",{parentName:"p"},"default")," value in the ",Object(r.b)("inlineCode",{parentName:"p"},"database")," section\nbecomes ",Object(r.b)("inlineCode",{parentName:"p"},"RUCIO_CFG_DATABASE_DEFAULT"),". All available\nenvironment variables are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_ACCOUNTS_SPECIAL_ACCOUNTS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGDIR"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_LOGLEVEL"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_COMMON_MAILTEMPLATEDIR"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_DEFAULT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_SCHEMA"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RESET_ON_RETURN"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_ECHO"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_RECYCLE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_SIZE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POOL_TIMEOUT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_MAX_OVERFLOW"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERACCOUNT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_DATABASE_POWUSERPASSWORD"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_SERVER"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_CARBON_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MONITOR_USER_SCOPE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_POLICY"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SCHEMA"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_LFN2PFN_ALGORITHM_DEFAULT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_PERMISSION_SUPPORT_RUCIO"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SITES"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SLEEP_TIME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_DATASET_LIFETIME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_AUTOMATIX_SET_METADATA"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_AUDITOR_RESULTS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_AUDITOR_CACHE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_SCHEME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_TRANSFERTOOL"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_FTSHOSTS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_CACERT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USERCERT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_CACHE_TIME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USE_DETERMINISTIC_ID"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_POLL_TIMEOUT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_SUBMIT_TIMEOUT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_BRING_ONLINE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_QUEUE_MODE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_USING_MEMCACHE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CONVEYOR_FTSMONHOSTS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_SSL_KEY_FILE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_SSL_CERT_FILE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_DESTINATION"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_BROKERS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_FTS3_VONAME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_USERNAME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_PASSWORD"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_NONSSL_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_USE_SSL"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_SSL_KEY_FILE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_SSL_CERT_FILE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_DESTINATION"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_BROKERS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_VONAME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_EMAIL_FROM"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_HERMES_EMAIL_TEST"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_BROKERS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SSL_KEY_FILE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SSL_CERT_FILE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_QUEUE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_PREFETCH_SIZE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_CHUNKSIZE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_SUBSCRIPTION_ID"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_USE_SSL"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_RECONNECT_ATTEMPTS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_EXCLUDED_USRDNS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_USERNAME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_KRONOS_PASSWORD"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_TRACER_DATASET_WAIT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_PORT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_SSL_KEY_FILE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_SSL_CERT_FILE"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_DESTINATION"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_BROKERS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_VONAME"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_MESSAGING_CACHE_ACCOUNT"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CREDENTIALS_GCS"),Object(r.b)("li",{parentName:"ul"},"RUCIO_CFG_CREDENTIALS_SIGNATURE_LIFETIME")))}o.isMDXComponent=!0},359:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):O(O({},t),e)),a},o=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},C=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=_(e,["components","mdxType","originalType","parentName"]),o=b(a),C=n,p=o["".concat(l,".").concat(C)]||o[C]||u[C]||r;return a?i.a.createElement(p,O(O({ref:t},c),{},{components:a})):i.a.createElement(p,O({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=C;var O={};for(var _ in t)hasOwnProperty.call(t,_)&&(O[_]=t[_]);O.originalType=e,O.mdxType="string"==typeof e?e:n,l[1]=O;for(var c=2;c<r;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}C.displayName="MDXCreateElement"}}]);