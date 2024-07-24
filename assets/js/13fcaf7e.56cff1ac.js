"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8519],{66861:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=s(74848),r=s(28453);const t={title:"35.0.0rc1"},c=void 0,o={id:"release-notes/35.0.0rc1",title:"35.0.0rc1",description:"Release Candidate",source:"@site/../docs/release-notes/35.0.0rc1.md",sourceDirName:"release-notes",slug:"/release-notes/35.0.0rc1",permalink:"/documentation/release-notes/35.0.0rc1",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/35.0.0rc1.md",tags:[],version:"current",frontMatter:{title:"35.0.0rc1"}},a={},l=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,i.jsx)(n.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,i.jsx)(n.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,i.jsxs)(n.p,{children:["This major release requires a database schema upgrade. Please consult the ",(0,i.jsx)(n.a,{href:"https://rucio.cern.ch/documentation/operator/database/#upgrading-and-downgrading-the-database-schema",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,i.jsxs)(n.p,{children:["The following changes are necessary and are covered by the ",(0,i.jsx)(n.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Dropping and re-creation of the ",(0,i.jsx)(n.code,{children:"SUBSCRIPTIONS_HISTORY_PK"})," primary key in the  ",(0,i.jsx)(n.code,{children:"subscriptions_history"})," table (Alembic revision ",(0,i.jsx)(n.code,{children:"b5493606bbf5"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Creating ",(0,i.jsx)(n.code,{children:"deleted_did_meta"})," table (Alembic revision ",(0,i.jsx)(n.code,{children:"b0070f3695c8"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Core & Internals: Document and cleanup discrepancies between surl and lfn2pfn algorithms ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/5129",children:"#5129"})]}),"\n",(0,i.jsxs)(n.li,{children:["Metadata: MongoDB metadata implementation does not allow using authentication ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6605",children:"#6605"})]}),"\n",(0,i.jsxs)(n.li,{children:["Metadata: Alter schema in preparation for metadata deletion trigger ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6958",children:"#6958"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Database: Migrating core/replica.py to SQLAlchemy 2.0 ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6586",children:"#6586"})]}),"\n",(0,i.jsxs)(n.li,{children:["REST & API: Metrics API endpoint: allow option to return RSEs identified by RSE attribute ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6564",children:"#6564"})]}),"\n",(0,i.jsxs)(n.li,{children:["REST & API: Rename internal ",(0,i.jsx)(n.code,{children:"API"})," layer to ",(0,i.jsx)(n.code,{children:"gateway"})," ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6644",children:"#6644"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: Remove upper bound version constraints for rucio-clients ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6663",children:"#6663"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: Refactor Python dependencies into multiple files depending on app ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6750",children:"#6750"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: Rucio 35 dependency upgrade ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6890",children:"#6890"})]}),"\n",(0,i.jsxs)(n.li,{children:["Transfers: Updates to overwrite configuration on tape ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6581",children:"#6581"})]}),"\n",(0,i.jsxs)(n.li,{children:["Transfers: Transfers: add overwrite_when_only_on_disk FTS logic ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6903",children:"#6903"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bugs",children:"Bugs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Database: Inconsistencies in Model Registration and Unregistration Functions in ",(0,i.jsx)(n.code,{children:"models.py"})," ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6677",children:"#6677"})]}),"\n",(0,i.jsxs)(n.li,{children:["Possible redundant util function ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6598",children:"#6598"})]}),"\n",(0,i.jsxs)(n.li,{children:["REST & API: Capital ",(0,i.jsx)(n.code,{children:"I"})," in ",(0,i.jsx)(n.code,{children:"Id"})," in REST API for Subscriptions ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6316",children:"#6316"})]}),"\n",(0,i.jsxs)(n.li,{children:["Subscriptions: SUBSCRIPTIONS_HISTORY integrity error ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6292",children:"#6292"})]}),"\n",(0,i.jsxs)(n.li,{children:["Testing: Race conditions in ",(0,i.jsx)(n.code,{children:"test_lifetime.py"})," ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6911",children:"#6911"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"clients",children:"Clients"}),"\n",(0,i.jsx)(n.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Clients: Regression in ",(0,i.jsx)(n.code,{children:"rucio download --pfn"})," ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6280",children:"#6280"})]}),"\n",(0,i.jsxs)(n.li,{children:["Clients: x509 auth: client does not read from configuration file whe creds are passed ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6846",children:"#6846"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(96540);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);