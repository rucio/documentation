"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2611],{28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>l});var n=i(96540);const r={},t=n.createContext(r);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:s},e.children)}},76872:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"release-notes/1.26.0rc1","title":"1.26.0rc1","description":"Release Candidate","source":"@site/../docs/release-notes/1.26.0rc1.md","sourceDirName":"release-notes","slug":"/release-notes/1.26.0rc1","permalink":"/documentation/release-notes/1.26.0rc1","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.0rc1.md","tags":[],"version":"current","frontMatter":{"title":"1.26.0rc1"}}');var r=i(74848),t=i(28453);const c={title:"1.26.0rc1"},l=void 0,o={},d=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,r.jsx)(s.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,r.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,r.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,r.jsx)(s.a,{href:"https://rucio.cern.ch/documentation/database/",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,r.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,r.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Extending columns for filter and replication rules in ",(0,r.jsx)(s.code,{children:"subscriptions"}),". (Alembic revision ",(0,r.jsx)(s.code,{children:"e138c364ebd0"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Add index and adapt column colum length in ",(0,r.jsx)(s.code,{children:"messages"})," table. (Alembic revision `30fa38b6434e)"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Add index on ",(0,r.jsx)(s.code,{children:"replicas"})," table. (Alembic revision ",(0,r.jsx)(s.code,{children:"52153819589c"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Add column and index on ",(0,r.jsx)(s.code,{children:"did_meta"})," table. (Alembic revision ",(0,r.jsx)(s.code,{children:"ccdbcd48206e"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Remove PK in ",(0,r.jsx)(s.code,{children:"configs_history"})," table. (Alembic revision ",(0,r.jsx)(s.code,{children:"739064d31565"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["This release removed the deprecated ",(0,r.jsx)(s.code,{children:"RSEBlacklisted"})," exception and replaced it by ",(0,r.jsx)(s.code,{children:"RSEWriteBlocked"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"reaper2"})," daemon was renamed to ",(0,r.jsx)(s.code,{children:"reaper"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"This release drops the support of mysql version 5."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Develop a lightweight client for Rucio ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4097",children:"#4097"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Versioned (History) Tables should be defined explicitly ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2063",children:"#2063"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Core & Internal : Add did_type column + index on did_meta table ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4668",children:"#4668"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: Add new index on messages.services ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4647",children:"#4647"})]}),"\n",(0,r.jsxs)(s.li,{children:["Multi VO: Supporting longer VO names in multi-VO rucio? ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4548",children:"#4548"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: pyflakes, flake8, pylint, pycodestyle dependency upgrade ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4162",children:"#4162"})]}),"\n",(0,r.jsxs)(s.li,{children:["Replicas: replica sorting by GeoIP improvements ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4661",children:"#4661"})]}),"\n",(0,r.jsxs)(s.li,{children:["Rules: Possibility to inject rules delayed ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2639",children:"#2639"})]}),"\n",(0,r.jsxs)(s.li,{children:["Subscriptions: Subscriptions columns for filter and replication_rules need to be extended ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4298",children:"#4298"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Testing TPC transfers with Rucio  ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4190",children:"#4190"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Rework transfers workflow ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4499",children:"#4499"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Inconsistency in command-line options to specify RSEs ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1839",children:"#1839"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Further list_replicas changes ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4603",children:"#4603"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Follow-up for moving EXTRA_MODULES importing to util function ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4168",children:"#4168"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Replace FTSState ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4241",children:"#4241"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Remove further sensitive language ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4677",children:"#4677"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: Add an rse_id index for the replicas table ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4627",children:"#4627"})]}),"\n",(0,r.jsxs)(s.li,{children:["Deletion: Make the time before tombstone is set configurable ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4436",children:"#4436"})]}),"\n",(0,r.jsxs)(s.li,{children:["Deletion: Rename reaper2 to reaper ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4462",children:"#4462"})]}),"\n",(0,r.jsxs)(s.li,{children:["REST & API: Remove webpy endpoints and dependency ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4044",children:"#4044"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: setup.py and requirements.txt overhaul ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4456",children:"#4456"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Update PyYAML for tests due to CVE-2020-14343 ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4501",children:"#4501"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Python 3.9 support ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4670",children:"#4670"})]}),"\n",(0,r.jsxs)(s.li,{children:["Replicas: Allow specification of a default tombstone when registering replicas ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4491",children:"#4491"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Python 3.8(/3.9) in Testing ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4453",children:"#4453"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Multihop intermediate replica tombstone ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4188",children:"#4188"})]}),"\n",(0,r.jsxs)(s.li,{children:["WebUI: Error message for unregistered users in webui is ATLAS specific ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1109",children:"#1109"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Fix FTSCompleteState capitalisation ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4562",children:"#4562"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Upgrade urllib due to CVE-2021-33503 ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4680",children:"#4680"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: timeouts in integration_tests ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4674",children:"#4674"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);