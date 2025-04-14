"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46302],{28453:(e,s,i)=>{i.d(s,{R:()=>l,x:()=>c});var n=i(96540);const t={},r=n.createContext(t);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),n.createElement(r.Provider,{value:s},e.children)}},84784:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"release-notes/1.20.2","title":"1.20.2","description":"General","source":"@site/../docs/release-notes/1.20.2.md","sourceDirName":"release-notes","slug":"/release-notes/1.20.2","permalink":"/documentation/release-notes/1.20.2","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.2.md","tags":[],"version":"current","frontMatter":{"title":"1.20.2"}}');var t=i(74848),r=i(28453);const l={title:"1.20.2"},c=void 0,o={},u=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}];function h(e){const s={a:"a",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Deletion: Reaper 2.0 inner loop: Storage interaction ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2445",children:"#2445"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Core & Internals: update rse export format ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2237",children:"#2237"})]}),"\n",(0,t.jsxs)(s.li,{children:["Life time model: Supporting deleting the replicas instead of secondarising them ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2701",children:"#2701"})]}),"\n",(0,t.jsxs)(s.li,{children:["Life time model: Allow spreading the effect of the Lifetime Model over a period ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2702",children:"#2702"})]}),"\n",(0,t.jsxs)(s.li,{children:["Rules: Allow updating the purge_replicas rule option ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2691",children:"#2691"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: Possibility to exclude acitivites in conveyor-submitter ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2640",children:"#2640"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: fts3 transfer tool reads wrong config ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2681",children:"#2681"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: Deadlock in token expiration ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2720",children:"#2720"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Add chunking for delete_replicas dst_replica_condition ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2266",children:"#2266"})]}),"\n",(0,t.jsxs)(s.li,{children:["Deletion: Reaper crashes when it tries to delete a DIDs that is a constituent of an archive ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2707",children:"#2707"})]}),"\n",(0,t.jsxs)(s.li,{children:["Testing: travis oracle container times out quite often ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2588",children:"#2588"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: Conveyor breaks if no scheme is specified ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2402",children:"#2402"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsx)(s.h3,{id:"features-1",children:"Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: Downloadclient: adding possibility to manipulate external trace objects ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2600",children:"#2600"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: RUCIO_ACCOUNT should override the Rucio configuration file ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2649",children:"#2649"})]}),"\n",(0,t.jsxs)(s.li,{children:["Clients: Help for cli list-dids is misleading ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2664",children:"#2664"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: Upload fails to register file if pfn provided and non-deterministic RSE ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2620",children:"#2620"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);