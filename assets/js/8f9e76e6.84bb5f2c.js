"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31877],{35189:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"release-notes/35.0.0rc2","title":"35.0.0rc2","description":"Release Candidate","source":"@site/../docs/release-notes/35.0.0rc2.md","sourceDirName":"release-notes","slug":"/release-notes/35.0.0rc2","permalink":"/documentation/release-notes/35.0.0rc2","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/35.0.0rc2.md","tags":[],"version":"current","frontMatter":{"title":"35.0.0rc2"}}');var r=n(74848),t=n(28453);const c={title:"35.0.0rc2"},o=void 0,a={},l=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,r.jsx)(s.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,r.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,r.jsxs)(s.p,{children:["This major release requires a database schema upgrade. Please consult the ",(0,r.jsx)(s.a,{href:"https://rucio.cern.ch/documentation/operator/database/#upgrading-and-downgrading-the-database-schema",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,r.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,r.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Dropping and re-creation of the ",(0,r.jsx)(s.code,{children:"SUBSCRIPTIONS_HISTORY_PK"})," primary key in the  ",(0,r.jsx)(s.code,{children:"subscriptions_history"})," table (Alembic revision ",(0,r.jsx)(s.code,{children:"b5493606bbf5"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Creating ",(0,r.jsx)(s.code,{children:"deleted_did_meta"})," table (Alembic revision ",(0,r.jsx)(s.code,{children:"b0070f3695c8"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Document and cleanup discrepancies between surl and lfn2pfn algorithms ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5129",children:"#5129"})]}),"\n",(0,r.jsxs)(s.li,{children:["Metadata: MongoDB metadata implementation does not allow using authentication ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6605",children:"#6605"})]}),"\n",(0,r.jsxs)(s.li,{children:["Metadata: Alter schema in preparation for metadata deletion trigger ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6958",children:"#6958"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Database: Migrating core/replica.py to SQLAlchemy 2.0 ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6586",children:"#6586"})]}),"\n",(0,r.jsxs)(s.li,{children:["REST & API: Metrics API endpoint: allow option to return RSEs identified by RSE attribute ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6564",children:"#6564"})]}),"\n",(0,r.jsxs)(s.li,{children:["REST & API: Rename internal ",(0,r.jsx)(s.code,{children:"API"})," layer to ",(0,r.jsx)(s.code,{children:"gateway"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6644",children:"#6644"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Remove upper bound version constraints for rucio-clients ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6663",children:"#6663"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Refactor Python dependencies into multiple files depending on app ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6750",children:"#6750"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Rucio 35 dependency upgrade ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6890",children:"#6890"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Updates to overwrite configuration on tape ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6581",children:"#6581"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Transfers: add overwrite_when_only_on_disk FTS logic ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6903",children:"#6903"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Database: Inconsistencies in Model Registration and Unregistration Functions in ",(0,r.jsx)(s.code,{children:"models.py"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6677",children:"#6677"})]}),"\n",(0,r.jsxs)(s.li,{children:["Possible redundant util function ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6598",children:"#6598"})]}),"\n",(0,r.jsxs)(s.li,{children:["REST & API: Capital ",(0,r.jsx)(s.code,{children:"I"})," in ",(0,r.jsx)(s.code,{children:"Id"})," in REST API for Subscriptions ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6316",children:"#6316"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Mismatch between package names in ",(0,r.jsx)(s.code,{children:"setuputil"})," and requirements files ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6969",children:"#6969"})]}),"\n",(0,r.jsxs)(s.li,{children:["Subscriptions: SUBSCRIPTIONS_HISTORY integrity error ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6292",children:"#6292"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Race conditions in ",(0,r.jsx)(s.code,{children:"test_lifetime.py"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6911",children:"#6911"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Regression in ",(0,r.jsx)(s.code,{children:"rucio download --pfn"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6280",children:"#6280"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: x509 auth: client does not read from configuration file whe creds are passed ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6846",children:"#6846"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(96540);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);