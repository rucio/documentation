"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5125],{7980:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"release-notes/33.0.0rc1","title":"33.0.0rc1","description":"Release Candidate","source":"@site/../docs/release-notes/33.0.0rc1.md","sourceDirName":"release-notes","slug":"/release-notes/33.0.0rc1","permalink":"/documentation/release-notes/33.0.0rc1","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/33.0.0rc1.md","tags":[],"version":"current","frontMatter":{"title":"33.0.0rc1"}}');var t=n(74848),r=n(28453);const c={title:"33.0.0rc1"},o=void 0,a={},l=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,t.jsx)(s.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,t.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,t.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,t.jsx)(s.a,{href:"https://rucio.cern.ch/documentation/database/",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,t.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,t.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Dropping ",(0,t.jsx)(s.code,{children:"tmp_dids"})," table (Alembic revision ",(0,t.jsx)(s.code,{children:"4df2c5ddabc0"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Creating ",(0,t.jsx)(s.code,{children:"transfer_stats"})," table (Alembic revision ",(0,t.jsx)(s.code,{children:"a08fa8de1545"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: Design and implement a token cache module ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6183",children:"#6183"})]}),"\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: Design and implement a token request module ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6187",children:"#6187"})]}),"\n",(0,t.jsxs)(s.li,{children:["Deletion: Use new token request procedure for deletions ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6390",children:"#6390"})]}),"\n",(0,t.jsxs)(s.li,{children:["update dependencies for the 33.0.0 release  ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6378",children:"#6378"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: Transfer status visual representation  ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6189",children:"#6189"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Plugin module for Auto Approval ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6203",children:"#6203"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: drop support for the 1.29 distances table format ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6367",children:"#6367"})]}),"\n",(0,t.jsxs)(s.li,{children:["Deletion: Review state of temporary dids (and thus Light Reaper) ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6317",children:"#6317"})]}),"\n",(0,t.jsxs)(s.li,{children:["allow exposing /ping on a separate rest endpoint ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6394",children:"#6394"})]}),"\n",(0,t.jsxs)(s.li,{children:["Testing: Simplify the test pipeline ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6212",children:"#6212"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: revisit submitter source selection strategy ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5776",children:"#5776"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: implement the configuration option for source selection strategy ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6342",children:"#6342"})]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(96540);const t={},r=i.createContext(t);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);