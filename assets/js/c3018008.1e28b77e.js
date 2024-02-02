"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8432],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>d});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),g=r,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},20434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=a(45072),r=a(95656),i=(a(11504),a(95788)),l=["components"],o={title:"1.23.0rc1"},s=void 0,u={unversionedId:"release-notes/1.23.0rc1",id:"release-notes/1.23.0rc1",title:"1.23.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.23.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.0rc1",permalink:"/documentation/release-notes/1.23.0rc1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.0rc1.md",tags:[],version:"current",frontMatter:{title:"1.23.0rc1"}},c={},p=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:p},g="wrapper";function d(e){var t=e.components,a=(0,r.c)(e,l);return(0,i.yg)(g,(0,n.c)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"release-candidate"},"Release Candidate"),(0,i.yg)("p",null,"This is a release candidate! Only to be used in testing environments!"),(0,i.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.yg)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),(0,i.yg)("p",null,"The following changes are necessary and are covered by the ",(0,i.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Adding column ",(0,i.yg)("inlineCode",{parentName:"p"},"services")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"messages")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"messages_history")," table (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"a193a275255c"),")")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Preparation for QoS feature (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"c0937668555f")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"50280c53117c"),")"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"rse_qos_map")," table"),(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"qos_class")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"rses")," table")))),(0,i.yg)("h2",{id:"important-changes"},"Important changes"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Due to the metadata unification feature (",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3096"},"#3096"),") added in this release, the APIs for ",(0,i.yg)("inlineCode",{parentName:"li"},"add_did_meta"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"get_did_meta"),", and ",(0,i.yg)("inlineCode",{parentName:"li"},"delete_did_meta")," were removed. This data is now available through the plugin mechanism of the common ",(0,i.yg)("inlineCode",{parentName:"li"},"get_metadata")," API.")),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: MultiVO functionality for Rucio ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2635"},"#2635")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Unification of metadata interfaces ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3096"},"#3096")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: QoS: Core and interfaces ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3543"},"#3543")),(0,i.yg)("li",{parentName:"ul"},"Messaging: Extending Hermes to submit to influxDB or Elastic ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3680"},"#3680"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: token exchange of JWTs not acquired via Rucio CLI (cases with offline_access scope) ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3778"},"#3778")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Support bulk requests in the list_dataset_replicas CLI API ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2459"},"#2459")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Introduce BelleII activities ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3771"},"#3771")),(0,i.yg)("li",{parentName:"ul"},"RSE Manager: GlobusRSEProtocol Modifications: remove RSEDeterministicTranslation and call super of protocol base class ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3584"},"#3584")),(0,i.yg)("li",{parentName:"ul"},"Testing: Reaper tests make no assertions or deletions ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3726"},"#3726")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Adding list and exists methods to GlobusRSEProtocol ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3346"},"#3346"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authentication & Authorisation: OAuth2/OIDC: fix to py2/3 compatibility of common.utils  ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3743"},"#3743")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Internal error during adding duplicate attribute to account ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3777"},"#3777")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Fix extract_scope method for BelleII ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3797"},"#3797")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Conveyor submitter creates partitions wrongly ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3752"},"#3752"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"features-1"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Moving upload method from rsemgr to client ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3084"},"#3084"))),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Allow passing the dynamic parameter to get_did() ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3760"},"#3760"))),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Python 3 error with uploadclient json.dump ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3747"},"#3747"))),(0,i.yg)("h2",{id:"webui"},"WebUI"),(0,i.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WebUI: Harden security on the Web UI ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3757"},"#3757"))))}d.isMDXComponent=!0}}]);