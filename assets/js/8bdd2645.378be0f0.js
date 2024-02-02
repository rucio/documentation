"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8032],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>y});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(s,".").concat(m)]||p[m]||g[m]||i;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44564:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var r=n(45072),a=n(95656),i=(n(11504),n(95788)),l=["components"],o={title:"1.20.0"},s=void 0,u={unversionedId:"release-notes/1.20.0",id:"release-notes/1.20.0",title:"1.20.0",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/1.20.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.0",permalink:"/documentation/release-notes/1.20.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.0.md",tags:[],version:"current",frontMatter:{title:"1.20.0"}},c={},p=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],g={toc:p},m="wrapper";function y(e){var t=e.components,n=(0,a.c)(e,l);return(0,i.yg)(m,(0,r.c)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"long-term-support-lts"},"Long Term Support (LTS)"),(0,i.yg)("p",null,"This release marks the start of the 1.20 ",(0,i.yg)("strong",{parentName:"p"},"Long Term Support (LTS)")," release line. This release line will be supported with security and critical patches until at least ",(0,i.yg)("strong",{parentName:"p"},"June 2021"),"."),(0,i.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.yg)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),(0,i.yg)("p",null,"The following changes are necessary and are covered by the ",(0,i.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Changing size of ",(0,i.yg)("inlineCode",{parentName:"p"},"extended_attributes")," column in ",(0,i.yg)("inlineCode",{parentName:"p"},"rse_protocols")," table (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"8523998e2e76"),")")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Adding ",(0,i.yg)("inlineCode",{parentName:"p"},"comments")," column to ",(0,i.yg)("inlineCode",{parentName:"p"},"subscriptions_history")," table (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"b8caac94d7f0"),")")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Removal of replica state ",(0,i.yg)("inlineCode",{parentName:"p"},"SOURCE (S)")," since it is not used (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"b7d287de34fd"),")"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Adapting ",(0,i.yg)("inlineCode",{parentName:"li"},"REPLICAS_STATE_CHK")," constraint in ",(0,i.yg)("inlineCode",{parentName:"li"},"replicas")," table"),(0,i.yg)("li",{parentName:"ul"},"Adapting ",(0,i.yg)("inlineCode",{parentName:"li"},"COLLECTION_REPLICAS_STATE_CHK")," constraint in ",(0,i.yg)("inlineCode",{parentName:"li"},"collection_replicas")," table"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Adding new column to ",(0,i.yg)("inlineCode",{parentName:"p"},"heartbeats")," table (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"cebad904c4dd"),")"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Adding ",(0,i.yg)("inlineCode",{parentName:"li"},"payload")," column"),(0,i.yg)("li",{parentName:"ul"},"Dropping ",(0,i.yg)("inlineCode",{parentName:"li"},"HEARTBEATS_UPDATED_AT")," index"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Adding ",(0,i.yg)("inlineCode",{parentName:"p"},"volume")," column to ",(0,i.yg)("inlineCode",{parentName:"p"},"rse_transfer_limits")," table (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"p"},"2cbee484dcf9"),")"))),(0,i.yg)("p",null,"The following change is only executed on PostgreSQL databases:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Changing all ENUM column types to varchar and adding the respective constraint checks (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"li"},"f1b14a8c2ac1"),")")),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Core & Internals: Size of the "extended_attributes" field of the "rse_protocols" table ',(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1543"},"#1543")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Bring S3 and Swift signature support in line with rest of code ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1787"},"#1787")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Changing sql-alchemy enginge to create PostgreSQL check_constraints instead of ENUMS ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2436"},"#2436")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Include payload functionality in heartbeats ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2443"},"#2443")),(0,i.yg)("li",{parentName:"ul"},"Deletion: Use signed URLs when deleting from object stores ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2411"},"#2411")),(0,i.yg)("li",{parentName:"ul"},"Recovery: Automatic recovery of suspicious files that have more than one replica ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/403"},"#403")),(0,i.yg)("li",{parentName:"ul"},"Release management: Alembic script for comments column in subscription_history table needed ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2238"},"#2238")),(0,i.yg)("li",{parentName:"ul"},"Release management: Security vulnerability with Jinja2 CVE-2019-10906 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2493"},"#2493")),(0,i.yg)("li",{parentName:"ul"},"Release management: Security vulnerability with SQLAlchemy CVE-2019-7164 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2494"},"#2494")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Throttler mechanic to release transfers based on a strategy (FIFO) ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2220"},"#2220"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: ReplicaState.SOURCE is not used and should be removed ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1874"},"#1874")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Upgrade of CHECK_CONSTRAINT of replicas table missing in alembic revision b96a1c7e1cc4 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2166"},"#2166")),(0,i.yg)("li",{parentName:"ul"},"Dataset deletion: Pause dids in the undertaker which raise nowait errors ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2355"},"#2355")),(0,i.yg)("li",{parentName:"ul"},"Probes & Alarms: Migrate Nagios probes to a separate repository ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1638"},"#1638")),(0,i.yg)("li",{parentName:"ul"},"Recovery: Optimize the update of the final states in the necromancer ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2601"},"#2601")),(0,i.yg)("li",{parentName:"ul"},"Release management: Adress security in pycrpyto ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1475"},"#1475")),(0,i.yg)("li",{parentName:"ul"},"Release management: Dependency upgrade for 1.20.0 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2460"},"#2460")),(0,i.yg)("li",{parentName:"ul"},"Release management: Security vulnerability with urllib3 CVE-2019-11324 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2501"},"#2501"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Infrastructure: wrong configuration docker dev ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2576"},"#2576")),(0,i.yg)("li",{parentName:"ul"},"Infrastructure: double requirement definition ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2579"},"#2579")),(0,i.yg)("li",{parentName:"ul"},"Rebalancing: File size not returned in decomission mode ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2591"},"#2591")),(0,i.yg)("li",{parentName:"ul"},"Testing: Test error with python3.6.3 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2154"},"#2154")),(0,i.yg)("li",{parentName:"ul"},"Testing: Fix Python 3.6 syntax test ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2496"},"#2496")),(0,i.yg)("li",{parentName:"ul"},"Testing: wrong python version in python3 travis test ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2541"},"#2541"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"features-1"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Implement pcaches into clients. ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2039"},"#2039"))),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Client: expose replicalocks to client ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2112"},"#2112"))),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Compiling issues with Python 3 (3.6.8) and hash sum calculation ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2480"},"#2480"))))}y.isMDXComponent=!0}}]);