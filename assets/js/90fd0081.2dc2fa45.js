"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4235],{3822:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(74848),c=i(28453);const o={title:"Configuring the Client"},r=void 0,l={id:"user/configuring_the_client",title:"Configuring the Client",description:"Environmental variables",source:"@site/../docs/user/configuring_the_client.md",sourceDirName:"user",slug:"/user/configuring_the_client",permalink:"/documentation/user/configuring_the_client",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/configuring_the_client.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1729244232e3,frontMatter:{title:"Configuring the Client"},sidebar:"docs",previous:{title:"Setting Up the Rucio Client",permalink:"/documentation/user/setting_up_the_rucio_client"},next:{title:"Using the Client",permalink:"/documentation/user/using_the_client"}},s={},d=[{value:"Environmental variables",id:"environmental-variables",level:2},{value:"ATLAS_SITE_NAME",id:"atlas_site_name",level:3},{value:"CONDA_PREFIX",id:"conda_prefix",level:3},{value:"OSG_SITE_NAME",id:"osg_site_name",level:3},{value:"RUCIO_ACCOUNT",id:"rucio_account",level:3},{value:"RUCIO_AUTH_TYPE",id:"rucio_auth_type",level:3},{value:"RUCIO_CLIENT_MODE",id:"rucio_client_mode",level:3},{value:"RUCIO_CONFIG",id:"rucio_config",level:3},{value:"RUCIO_HOME",id:"rucio_home",level:3},{value:"RUCIO_LATITUDE",id:"rucio_latitude",level:3},{value:"RUCIO_LOGGING_FORMAT",id:"rucio_logging_format",level:3},{value:"RUCIO_LONGITUDE",id:"rucio_longitude",level:3},{value:"RUCIO_VO",id:"rucio_vo",level:3},{value:"SITE_NAME",id:"site_name",level:3},{value:"VIRTUAL_ENV",id:"virtual_env",level:3},{value:"X509_CERT_DIR",id:"x509_cert_dir",level:3},{value:"BitTorrent",id:"bittorrent",level:3},{value:"Traces",id:"traces",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"environmental-variables",children:"Environmental variables"}),"\n",(0,t.jsx)(n.p,{children:"Please note that the underlying libraries that the Rucio client uses (e.g. GFAL) may be further affected by environmental variables not mentioned in this page."}),"\n",(0,t.jsx)(n.h3,{id:"atlas_site_name",children:"ATLAS_SITE_NAME"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"#SITE_NAME",children:"SITE_NAME"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"conda_prefix",children:"CONDA_PREFIX"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"#RUCIO_HOME",children:"RUCIO_HOME"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"osg_site_name",children:"OSG_SITE_NAME"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"#SITE_NAME",children:"SITE_NAME"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_account",children:"RUCIO_ACCOUNT"}),"\n",(0,t.jsxs)(n.p,{children:["Which account to use to authenticate to Rucio.\nCorresponds to the ",(0,t.jsx)(n.code,{children:"--account"})," command-line option and the ",(0,t.jsx)(n.code,{children:"clients.account"})," configuration-file option."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_auth_type",children:"RUCIO_AUTH_TYPE"}),"\n",(0,t.jsxs)(n.p,{children:["Which mechanism to use to authenticate to Rucio.\nCorresponds to the ",(0,t.jsx)(n.code,{children:"--auth-strategy"})," command-line option and the ",(0,t.jsx)(n.code,{children:"clients.auth_type"})," configuration-file option.\nValid options are ",(0,t.jsx)(n.code,{children:"gss"}),", ",(0,t.jsx)(n.code,{children:"oidc"}),", ",(0,t.jsx)(n.code,{children:"saml"}),", ",(0,t.jsx)(n.code,{children:"ssh"}),", ",(0,t.jsx)(n.code,{children:"userpass"}),", ",(0,t.jsx)(n.code,{children:"x509"}),", and ",(0,t.jsx)(n.code,{children:"x509_proxy"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_client_mode",children:"RUCIO_CLIENT_MODE"}),"\n",(0,t.jsxs)(n.p,{children:["Force the Rucio client to communicate to the Rucio server.\nOnly matters when the ",(0,t.jsx)(n.code,{children:"database"})," section exists in the configuration file.\nAny non-empty value is treated as true."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_config",children:"RUCIO_CONFIG"}),"\n",(0,t.jsxs)(n.p,{children:["The path to the main Rucio configuration file.\nDefaults to ",(0,t.jsx)(n.code,{children:"$RUCIO_HOME/rucio.cfg"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_home",children:"RUCIO_HOME"}),"\n",(0,t.jsxs)(n.p,{children:["The directory where the Rucio configuration files are located.\nDefaults to ",(0,t.jsx)(n.code,{children:"/opt/rucio/"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_latitude",children:"RUCIO_LATITUDE"}),"\n",(0,t.jsxs)(n.p,{children:["The geographical location where the client is run.\nUsed to potentially prefer replicas on RSEs which are closer geographically.\nThe value is a floating-point number.\nDefaults to ",(0,t.jsx)(n.code,{children:"0"}),".\nBoth ",(0,t.jsx)(n.code,{children:"RUCIO_LATITUDE"})," and ",(0,t.jsx)(n.code,{children:"RUCIO_LONGITUDE"})," must be properly set to have effect."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_logging_format",children:"RUCIO_LOGGING_FORMAT"}),"\n",(0,t.jsxs)(n.p,{children:["Configure the content and presentation of log entries.\nRefer to the ",(0,t.jsx)(n.a,{href:"https://docs.python.org/3/library/logging.html#logrecord-attributes",children:"Python logging documentation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_longitude",children:"RUCIO_LONGITUDE"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"#RUCIO_LATITUDE",children:"RUCIO_LATITUDE"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"rucio_vo",children:"RUCIO_VO"}),"\n",(0,t.jsxs)(n.p,{children:["Which Virtual Organisation (VO) to use to authenticate to Rucio.\nIt matters for multi-VO Rucio instances.\nCorresponds to the ",(0,t.jsx)(n.code,{children:"--vo"})," command-line option and the ",(0,t.jsx)(n.code,{children:"client.vo"})," configuration-file option.\nDefaults to ",(0,t.jsx)(n.code,{children:"def"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"site_name",children:"SITE_NAME"}),"\n",(0,t.jsxs)(n.p,{children:["The name of the site on which the Rucio client is run.\nIt matters for sites which have different RSE protocols for WAN and LAN.\nIf the ",(0,t.jsx)(n.code,{children:"site"})," RSE attribute matches ",(0,t.jsx)(n.code,{children:"SITE_NAME"}),", then the LAN domain is preferred.\nThe site name of the site is also put in the Rucio traces.\nDefaults to ",(0,t.jsx)(n.code,{children:"ROAMING"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"virtual_env",children:"VIRTUAL_ENV"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"#RUCIO_HOME",children:"RUCIO_HOME"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"x509_cert_dir",children:"X509_CERT_DIR"}),"\n",(0,t.jsxs)(n.p,{children:["The path to the directory or certificate bundle to use to verify the Rucio servers.\nCorresponds to the ",(0,t.jsx)(n.code,{children:"--ca-certificate"})," command-line option and the ",(0,t.jsx)(n.code,{children:"client.ca_cert"})," configuration-file option.\nDefaults to using the Mozilla certificate collection (Certifi).\nOn Red Hat Enterprise Linux (and derivatives), depending on the method of installation, the system trust may be the default instead."]}),"\n",(0,t.jsx)(n.h3,{id:"bittorrent",children:"BitTorrent"}),"\n",(0,t.jsx)(n.p,{children:"The following environmental variables affect the experimental BitTorrent feature:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"QBITTORRENT_LISTEN_PORT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"QBITTORRENT_TRACKER_PORT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"QBITTORRENT_UI_CERT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"QBITTORRENT_UI_KEY"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"QBITTORRENT_UI_PASSWORD"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"QBITTORRENT_UI_PORT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"QBITTORRENT_UI_USERNAME"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"traces",children:"Traces"}),"\n",(0,t.jsx)(n.p,{children:"The following environmental variables offer an advanced mechanism to populate the content of the Rucio traces:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RUCIO_TRACE_APPID"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RUCIO_TRACE_DATASET"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RUCIO_TRACE_DATASETSCOPE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RUCIO_TRACE_EVENTTYPE"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RUCIO_TRACE_PQ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RUCIO_TRACE_TASKID"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"RUCIO_TRACE_USRDN"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(96540);const c={},o=t.createContext(c);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);