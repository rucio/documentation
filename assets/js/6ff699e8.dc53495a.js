"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6302],{77478:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var n=s(74848),t=s(28453);const r={title:"1.20.2"},l=void 0,c={id:"release-notes/1.20.2",title:"1.20.2",description:"General",source:"@site/../docs/release-notes/1.20.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.2",permalink:"/documentation/release-notes/1.20.2",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.2.md",tags:[],version:"current",frontMatter:{title:"1.20.2"}},o={},u=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}];function h(e){const i={a:"a",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"general",children:"General"}),"\n",(0,n.jsx)(i.h3,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Deletion: Reaper 2.0 inner loop: Storage interaction ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2445",children:"#2445"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Core & Internals: update rse export format ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2237",children:"#2237"})]}),"\n",(0,n.jsxs)(i.li,{children:["Life time model: Supporting deleting the replicas instead of secondarising them ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2701",children:"#2701"})]}),"\n",(0,n.jsxs)(i.li,{children:["Life time model: Allow spreading the effect of the Lifetime Model over a period ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2702",children:"#2702"})]}),"\n",(0,n.jsxs)(i.li,{children:["Rules: Allow updating the purge_replicas rule option ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2691",children:"#2691"})]}),"\n",(0,n.jsxs)(i.li,{children:["Transfers: Possibility to exclude acitivites in conveyor-submitter ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2640",children:"#2640"})]}),"\n",(0,n.jsxs)(i.li,{children:["Transfers: fts3 transfer tool reads wrong config ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2681",children:"#2681"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"bugs",children:"Bugs"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Authentication & Authorisation: Deadlock in token expiration ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2720",children:"#2720"})]}),"\n",(0,n.jsxs)(i.li,{children:["Core & Internals: Add chunking for delete_replicas dst_replica_condition ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2266",children:"#2266"})]}),"\n",(0,n.jsxs)(i.li,{children:["Deletion: Reaper crashes when it tries to delete a DIDs that is a constituent of an archive ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2707",children:"#2707"})]}),"\n",(0,n.jsxs)(i.li,{children:["Testing: travis oracle container times out quite often ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2588",children:"#2588"})]}),"\n",(0,n.jsxs)(i.li,{children:["Transfers: Conveyor breaks if no scheme is specified ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2402",children:"#2402"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"clients",children:"Clients"}),"\n",(0,n.jsx)(i.h3,{id:"features-1",children:"Features"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Clients: Downloadclient: adding possibility to manipulate external trace objects ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2600",children:"#2600"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Clients: RUCIO_ACCOUNT should override the Rucio configuration file ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2649",children:"#2649"})]}),"\n",(0,n.jsxs)(i.li,{children:["Clients: Help for cli list-dids is misleading ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2664",children:"#2664"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Clients: Upload fails to register file if pfn provided and non-deterministic RSE ",(0,n.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/2620",children:"#2620"})]}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>l,x:()=>c});var n=s(96540);const t={},r=n.createContext(t);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);