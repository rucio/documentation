"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6400],{52056:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var n=i(74848),r=i(28453);const t={title:"1.20.0"},c=void 0,l={id:"release-notes/1.20.0",title:"1.20.0",description:"Long Term Support (LTS)",source:"@site/../docs/release-notes/1.20.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.0",permalink:"/documentation/release-notes/1.20.0",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.0.md",tags:[],version:"current",frontMatter:{title:"1.20.0"}},o={},h=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"long-term-support-lts",children:"Long Term Support (LTS)"}),"\n",(0,n.jsxs)(s.p,{children:["This release marks the start of the 1.20 ",(0,n.jsx)(s.strong,{children:"Long Term Support (LTS)"})," release line. This release line will be supported with security and critical patches until at least ",(0,n.jsx)(s.strong,{children:"June 2021"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,n.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,n.jsx)(s.a,{href:"https://rucio.readthedocs.io/en/latest/database.html",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,n.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,n.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Changing size of ",(0,n.jsx)(s.code,{children:"extended_attributes"})," column in ",(0,n.jsx)(s.code,{children:"rse_protocols"})," table (Alembic revision ",(0,n.jsx)(s.code,{children:"8523998e2e76"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Adding ",(0,n.jsx)(s.code,{children:"comments"})," column to ",(0,n.jsx)(s.code,{children:"subscriptions_history"})," table (Alembic revision ",(0,n.jsx)(s.code,{children:"b8caac94d7f0"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Removal of replica state ",(0,n.jsx)(s.code,{children:"SOURCE (S)"})," since it is not used (Alembic revision ",(0,n.jsx)(s.code,{children:"b7d287de34fd"}),")"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Adapting ",(0,n.jsx)(s.code,{children:"REPLICAS_STATE_CHK"})," constraint in ",(0,n.jsx)(s.code,{children:"replicas"})," table"]}),"\n",(0,n.jsxs)(s.li,{children:["Adapting ",(0,n.jsx)(s.code,{children:"COLLECTION_REPLICAS_STATE_CHK"})," constraint in ",(0,n.jsx)(s.code,{children:"collection_replicas"})," table"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Adding new column to ",(0,n.jsx)(s.code,{children:"heartbeats"})," table (Alembic revision ",(0,n.jsx)(s.code,{children:"cebad904c4dd"}),")"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Adding ",(0,n.jsx)(s.code,{children:"payload"})," column"]}),"\n",(0,n.jsxs)(s.li,{children:["Dropping ",(0,n.jsx)(s.code,{children:"HEARTBEATS_UPDATED_AT"})," index"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Adding ",(0,n.jsx)(s.code,{children:"volume"})," column to ",(0,n.jsx)(s.code,{children:"rse_transfer_limits"})," table (Alembic revision ",(0,n.jsx)(s.code,{children:"2cbee484dcf9"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The following change is only executed on PostgreSQL databases:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Changing all ENUM column types to varchar and adding the respective constraint checks (Alembic revision ",(0,n.jsx)(s.code,{children:"f1b14a8c2ac1"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,n.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['Core & Internals: Size of the "extended_attributes" field of the "rse_protocols" table ',(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1543",children:"#1543"})]}),"\n",(0,n.jsxs)(s.li,{children:["Core & Internals: Bring S3 and Swift signature support in line with rest of code ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1787",children:"#1787"})]}),"\n",(0,n.jsxs)(s.li,{children:["Core & Internals: Changing sql-alchemy enginge to create PostgreSQL check_constraints instead of ENUMS ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2436",children:"#2436"})]}),"\n",(0,n.jsxs)(s.li,{children:["Core & Internals: Include payload functionality in heartbeats ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2443",children:"#2443"})]}),"\n",(0,n.jsxs)(s.li,{children:["Deletion: Use signed URLs when deleting from object stores ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2411",children:"#2411"})]}),"\n",(0,n.jsxs)(s.li,{children:["Recovery: Automatic recovery of suspicious files that have more than one replica ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/403",children:"#403"})]}),"\n",(0,n.jsxs)(s.li,{children:["Release management: Alembic script for comments column in subscription_history table needed ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2238",children:"#2238"})]}),"\n",(0,n.jsxs)(s.li,{children:["Release management: Security vulnerability with Jinja2 CVE-2019-10906 ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2493",children:"#2493"})]}),"\n",(0,n.jsxs)(s.li,{children:["Release management: Security vulnerability with SQLAlchemy CVE-2019-7164 ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2494",children:"#2494"})]}),"\n",(0,n.jsxs)(s.li,{children:["Transfers: Throttler mechanic to release transfers based on a strategy (FIFO) ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2220",children:"#2220"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Core & Internals: ReplicaState.SOURCE is not used and should be removed ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1874",children:"#1874"})]}),"\n",(0,n.jsxs)(s.li,{children:["Core & Internals: Upgrade of CHECK_CONSTRAINT of replicas table missing in alembic revision b96a1c7e1cc4 ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2166",children:"#2166"})]}),"\n",(0,n.jsxs)(s.li,{children:["Dataset deletion: Pause dids in the undertaker which raise nowait errors ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2355",children:"#2355"})]}),"\n",(0,n.jsxs)(s.li,{children:["Probes & Alarms: Migrate Nagios probes to a separate repository ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1638",children:"#1638"})]}),"\n",(0,n.jsxs)(s.li,{children:["Recovery: Optimize the update of the final states in the necromancer ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2601",children:"#2601"})]}),"\n",(0,n.jsxs)(s.li,{children:["Release management: Adress security in pycrpyto ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1475",children:"#1475"})]}),"\n",(0,n.jsxs)(s.li,{children:["Release management: Dependency upgrade for 1.20.0 ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2460",children:"#2460"})]}),"\n",(0,n.jsxs)(s.li,{children:["Release management: Security vulnerability with urllib3 CVE-2019-11324 ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2501",children:"#2501"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Infrastructure: wrong configuration docker dev ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2576",children:"#2576"})]}),"\n",(0,n.jsxs)(s.li,{children:["Infrastructure: double requirement definition ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2579",children:"#2579"})]}),"\n",(0,n.jsxs)(s.li,{children:["Rebalancing: File size not returned in decomission mode ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2591",children:"#2591"})]}),"\n",(0,n.jsxs)(s.li,{children:["Testing: Test error with python3.6.3 ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2154",children:"#2154"})]}),"\n",(0,n.jsxs)(s.li,{children:["Testing: Fix Python 3.6 syntax test ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2496",children:"#2496"})]}),"\n",(0,n.jsxs)(s.li,{children:["Testing: wrong python version in python3 travis test ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2541",children:"#2541"})]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,n.jsx)(s.h3,{id:"features-1",children:"Features"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Clients: Implement pcaches into clients. ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2039",children:"#2039"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Clients: Client: expose replicalocks to client ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2112",children:"#2112"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Clients: Compiling issues with Python 3 (3.6.8) and hash sum calculation ",(0,n.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2480",children:"#2480"})]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>l});var n=i(96540);const r={},t=n.createContext(r);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);