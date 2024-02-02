"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6988],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>y});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),g=n,y=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},21464:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=r(45072),n=r(95656),i=(r(11504),r(95788)),o=["components"],l={title:"1.28.0rc1"},s=void 0,p={unversionedId:"release-notes/1.28.0rc1",id:"release-notes/1.28.0rc1",title:"1.28.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/1.28.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.0rc1",permalink:"/documentation/release-notes/1.28.0rc1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.0rc1.md",tags:[],version:"current",frontMatter:{title:"1.28.0rc1"}},c={},u=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],m={toc:u},g="wrapper";function y(e){var t=e.components,r=(0,n.c)(e,o);return(0,i.yg)(g,(0,a.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"release-candidate"},"Release Candidate"),(0,i.yg)("p",null,"This is a release candidate! Only to be used in testing environments!"),(0,i.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.yg)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),(0,i.yg)("p",null,"The following changes are necessary and are covered by the ",(0,i.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Introduction of the ",(0,i.yg)("inlineCode",{parentName:"p"},"transfer_hops")," table for the transfer system. (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"0f1adb7a599a"),")")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy_read")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy_write")," replace the ",(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy")," priority for protocols (",(0,i.yg)("inlineCode",{parentName:"p"},"rse_protocols")," table) (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"fe1a65b176c9"),")"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Introduction of default values for  ",(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy_read")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy_write")," (",(0,i.yg)("inlineCode",{parentName:"p"},"rse_protocols")," table)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Migrate script copies ",(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy")," values to the ",(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy_read")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy_write")," column")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"third_party_copy")," column will be removed from the table at a later release"))))),(0,i.yg)("h2",{id:"important-changes"},"Important changes"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"This release drops the ",(0,i.yg)("inlineCode",{parentName:"p"},"gfalv2")," protocol implementation which is replaced by the ",(0,i.yg)("inlineCode",{parentName:"p"},"gfal.NoRename")," protocol. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"In case you run multiple releases (e.g. ",(0,i.yg)("inlineCode",{parentName:"p"},"1.28.0rc1")," for integration, ",(0,i.yg)("inlineCode",{parentName:"p"},"1.27.X")," in production) in your Rucio deployment, please be aware that this release is in general incompatible with older releases, due to the changes in the transfer machinery. Such a mixed production/integration deployment will only be possible with the Rucio ",(0,i.yg)("inlineCode",{parentName:"p"},"1.27.10")," release."))),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Consistency checks: Create CMS-style consistency checking daemon ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5113"},"#5113")),(0,i.yg)("li",{parentName:"ul"},"Metadata: Add MongoDB metadata plugin ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5143"},"#5143")),(0,i.yg)("li",{parentName:"ul"},"Remove deprecated CLI arguments ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5078"},"#5078")),(0,i.yg)("li",{parentName:"ul"},"REST & API: decorate some APIs function with session handler and pass session ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5002"},"#5002")),(0,i.yg)("li",{parentName:"ul"},"Transfers: REST interfaces for request_history ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4949"},"#4949"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Consistency checks: Remove/change ",(0,i.yg)("inlineCode",{parentName:"li"},"bz2file")," dependency ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5348"},"#5348")),(0,i.yg)("li",{parentName:"ul"},"Monitoring & Logging: Upgrade ",(0,i.yg)("inlineCode",{parentName:"li"},"prometheus_client")," to newer version ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5345"},"#5345")),(0,i.yg)("li",{parentName:"ul"},"Protocols: Remove gfalv2 implementation ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5227"},"#5227")),(0,i.yg)("li",{parentName:"ul"},"Rebalancing: BB8 rewrite ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4706"},"#4706")),(0,i.yg)("li",{parentName:"ul"},"Recovery: Necromancer update-history procedure is wasteful when there\u2019s a backlog ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5268"},"#5268")),(0,i.yg)("li",{parentName:"ul"},"Release management: Remove forecast extension and numpy as a dependency ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5172"},"#5172")),(0,i.yg)("li",{parentName:"ul"},"Rules: Allow overriding all possible options in move_rule ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4995"},"#4995")),(0,i.yg)("li",{parentName:"ul"},"Testing: Enabling tests for different policy package ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3878"},"#3878")),(0,i.yg)("li",{parentName:"ul"},"Testing: add pymongo to requirements & mongodb container to CI pipeline ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5260"},"#5260")),(0,i.yg)("li",{parentName:"ul"},"Testing: Remove py37 and py38 test workflows from autotests ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5349"},"#5349")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Switch protocol selection to third_party_copy read/write ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3254"},"#3254")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Protection to prevent getting files from GCS ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3510"},"#3510")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Disentangle fts3 specific code from conveyor poller and receiver  ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4873"},"#4873")),(0,i.yg)("li",{parentName:"ul"},"Transfers: delete conveyor-fts-throttler executable ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5203"},"#5203"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Load policy packages in client ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4918"},"#4918"))))}y.isMDXComponent=!0}}]);