"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15658],{35430:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"release-notes/1.28.0rc1","title":"1.28.0rc1","description":"Release Candidate","source":"@site/../docs/release-notes/1.28.0rc1.md","sourceDirName":"release-notes","slug":"/release-notes/1.28.0rc1","permalink":"/documentation/release-notes/1.28.0rc1","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.0rc1.md","tags":[],"version":"current","frontMatter":{"title":"1.28.0rc1"}}');var r=n(74848),t=n(28453);const c={title:"1.28.0rc1"},o=void 0,l={},a=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,r.jsx)(s.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,r.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,r.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,r.jsx)(s.a,{href:"https://rucio.cern.ch/documentation/database/",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,r.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,r.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Introduction of the ",(0,r.jsx)(s.code,{children:"transfer_hops"})," table for the transfer system. (Alembic revision ",(0,r.jsx)(s.code,{children:"0f1adb7a599a"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"third_party_copy_read"})," and ",(0,r.jsx)(s.code,{children:"third_party_copy_write"})," replace the ",(0,r.jsx)(s.code,{children:"third_party_copy"})," priority for protocols (",(0,r.jsx)(s.code,{children:"rse_protocols"})," table) (Alembic revision ",(0,r.jsx)(s.code,{children:"fe1a65b176c9"}),")"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Introduction of default values for  ",(0,r.jsx)(s.code,{children:"third_party_copy_read"})," and ",(0,r.jsx)(s.code,{children:"third_party_copy_write"})," (",(0,r.jsx)(s.code,{children:"rse_protocols"})," table)"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Migrate script copies ",(0,r.jsx)(s.code,{children:"third_party_copy"})," values to the ",(0,r.jsx)(s.code,{children:"third_party_copy_read"})," and ",(0,r.jsx)(s.code,{children:"third_party_copy_write"})," column"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"third_party_copy"})," column will be removed from the table at a later release"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["This release drops the ",(0,r.jsx)(s.code,{children:"gfalv2"})," protocol implementation which is replaced by the ",(0,r.jsx)(s.code,{children:"gfal.NoRename"})," protocol."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["In case you run multiple releases (e.g. ",(0,r.jsx)(s.code,{children:"1.28.0rc1"})," for integration, ",(0,r.jsx)(s.code,{children:"1.27.X"})," in production) in your Rucio deployment, please be aware that this release is in general incompatible with older releases, due to the changes in the transfer machinery. Such a mixed production/integration deployment will only be possible with the Rucio ",(0,r.jsx)(s.code,{children:"1.27.10"})," release."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Consistency checks: Create CMS-style consistency checking daemon ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5113",children:"#5113"})]}),"\n",(0,r.jsxs)(s.li,{children:["Metadata: Add MongoDB metadata plugin ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5143",children:"#5143"})]}),"\n",(0,r.jsxs)(s.li,{children:["Remove deprecated CLI arguments ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5078",children:"#5078"})]}),"\n",(0,r.jsxs)(s.li,{children:["REST & API: decorate some APIs function with session handler and pass session ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5002",children:"#5002"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: REST interfaces for request_history ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4949",children:"#4949"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Consistency checks: Remove/change ",(0,r.jsx)(s.code,{children:"bz2file"})," dependency ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5348",children:"#5348"})]}),"\n",(0,r.jsxs)(s.li,{children:["Monitoring & Logging: Upgrade ",(0,r.jsx)(s.code,{children:"prometheus_client"})," to newer version ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5345",children:"#5345"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: Remove gfalv2 implementation ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5227",children:"#5227"})]}),"\n",(0,r.jsxs)(s.li,{children:["Rebalancing: BB8 rewrite ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4706",children:"#4706"})]}),"\n",(0,r.jsxs)(s.li,{children:["Recovery: Necromancer update-history procedure is wasteful when there\u2019s a backlog ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5268",children:"#5268"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Remove forecast extension and numpy as a dependency ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5172",children:"#5172"})]}),"\n",(0,r.jsxs)(s.li,{children:["Rules: Allow overriding all possible options in move_rule ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4995",children:"#4995"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Enabling tests for different policy package ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3878",children:"#3878"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: add pymongo to requirements & mongodb container to CI pipeline ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5260",children:"#5260"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Remove py37 and py38 test workflows from autotests ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5349",children:"#5349"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Switch protocol selection to third_party_copy read/write ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3254",children:"#3254"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Protection to prevent getting files from GCS ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3510",children:"#3510"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Disentangle fts3 specific code from conveyor poller and receiver  ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4873",children:"#4873"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: delete conveyor-fts-throttler executable ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5203",children:"#5203"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Load policy packages in client ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4918",children:"#4918"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(96540);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);