"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[588],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>h});var r=a(11504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||i;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=a(45072),n=a(95656),i=(a(11504),a(95788)),l=["components"],o={title:"1.24.0"},s=void 0,u={unversionedId:"release-notes/1.24.0",id:"release-notes/1.24.0",title:"1.24.0",description:"Upgrade Instructions",source:"@site/../docs/release-notes/1.24.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.0",permalink:"/documentation/release-notes/1.24.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.0.md",tags:[],version:"current",frontMatter:{title:"1.24.0"}},c={},p=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],g={toc:p},m="wrapper";function h(e){var t=e.components,a=(0,n.c)(e,l);return(0,i.yg)(m,(0,r.c)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.yg)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),(0,i.yg)("p",null,"The following changes are necessary and are covered by the ",(0,i.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Adding missing indices which were only available as functional oracle indices. For oracle databases installed with the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/etc/sql/oracle/schema.sql"},"schema.sql")," definition, these should already exist (Please verify). (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"8ea9122275b1"),")"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"SUBSCRIPTIONS_STATE_IDX")," on ",(0,i.yg)("inlineCode",{parentName:"li"},"subscriptions")," table"),(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"CONTENTS_RULE_EVAL_FB_IDX")," on ",(0,i.yg)("inlineCode",{parentName:"li"},"contents")," table"),(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"REPLICAS_STATE_IDX")," on ",(0,i.yg)("inlineCode",{parentName:"li"},"replicas")," table"),(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"BAD_REPLICAS_ACCOUNT_IDX")," on ",(0,i.yg)("inlineCode",{parentName:"li"},"bad_replicas")," table"),(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"REQUESTS_DEST_RSE_ID_IDX")," on ",(0,i.yg)("inlineCode",{parentName:"li"},"requests")," table"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Update of ",(0,i.yg)("inlineCode",{parentName:"p"},"REQUESTS_STATE_CHK")," constraint in ",(0,i.yg)("inlineCode",{parentName:"p"},"requests")," table in preparation for Conveyor Preparer (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"d23453595260"),")"))),(0,i.yg)("h2",{id:"important-changes"},"Important changes"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"This Rucio release line drops support for Python 2.7 on the Server/Daemon Side. Only Python 3.6 and 3.7 are supported from now on. Rucio clients are still Python 2.7 compatible for the foreseen future (EOL will be announced). If your environment is requiring to run Rucio under Python 2.7 we recommend the Rucio 1.23 LTS release line, which will be supported until 2022.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Due to a fix (",(0,i.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio/issues/3994"},"#3994"),") in the salting-algorithm used for Python 3 all hashes for stored passwords in Rucio need to be re-collected. This only affects password authentication. X509, Kerberos or OIDCS authentication is unaffected."))),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Add check that alembic version of DB works with rucio release ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1157"},"#1157")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Some function based indexes missing in models.py ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2714"},"#2714")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Policy packages should support multi-VO Rucio installations ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3542"},"#3542")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Provide a bulk method for setting metadata ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3847"},"#3847")),(0,i.yg)("li",{parentName:"ul"},"Database: Upgrade SQLAlchemy version ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4055"},"#4055")),(0,i.yg)("li",{parentName:"ul"},"Replicas: Allow declaring bad replicas via RSE/DID pair and REST API ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4099"},"#4099")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Re-Write of Conveyor-Throttler and the throtteling system ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4056"},"#4056"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Make tool execution-dir independent ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4113"},"#4113")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Hardcoded atlas-adc-ddm-support eMail address for rule approval ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4164"},"#4164")),(0,i.yg)("li",{parentName:"ul"},"Deletion: all_rses option redundant for light and dark reaper ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3933"},"#3933")),(0,i.yg)("li",{parentName:"ul"},"Release management: Upgrade information in setup.py (1.24.0) ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4120"},"#4120")),(0,i.yg)("li",{parentName:"ul"},"Release management: 1.24 Dependency upgrade ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4157"},"#4157")),(0,i.yg)("li",{parentName:"ul"},"Release management: Python memcached package ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4169"},"#4169")),(0,i.yg)("li",{parentName:"ul"},"Replicas: Set geoip as default sorting algorithm in list_replicas ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4017"},"#4017"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authentication & Authorisation: Userpass authentication not backwards compatible nor unicode capable ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3994"},"#3994")),(0,i.yg)("li",{parentName:"ul"},"Clients: list_replicas returns a generator with an empty string when there are no replicas ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2517"},"#2517")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Clean URLs coming from AWS ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4159"},"#4159")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: S3 endpoints in TPC must use s3s:// instead of s3:// ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4173"},"#4173")),(0,i.yg)("li",{parentName:"ul"},"DIRAC: Bug in Belle II permission for dirac ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4174"},"#4174")),(0,i.yg)("li",{parentName:"ul"},"Release management: Security upgrade for oic dependency ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4181"},"#4181"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Python3 client subparser failure ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4202"},"#4202"))),(0,i.yg)("h2",{id:"webui"},"WebUI"),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WebUI: Suspicious replicas page is hidden ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4185"},"#4185")),(0,i.yg)("li",{parentName:"ul"},"WebUI: RSE usage page uses obsolete SRM counter ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4195"},"#4195"))))}h.isMDXComponent=!0}}]);