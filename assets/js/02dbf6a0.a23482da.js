"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30520],{28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>o});var n=i(96540);const r={},t=n.createContext(r);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:s},e.children)}},64751:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"release-notes/37.0.0rc2","title":"37.0.0rc2","description":"Release Candidate","source":"@site/../docs/release-notes/37.0.0rc2.md","sourceDirName":"release-notes","slug":"/release-notes/37.0.0rc2","permalink":"/documentation/release-notes/37.0.0rc2","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/37.0.0rc2.md","tags":[],"version":"current","frontMatter":{"title":"37.0.0rc2"}}');var r=i(74848),t=i(28453);const c={title:"37.0.0rc2"},o=void 0,l={},h=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,r.jsx)(s.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Messaging: factorize duplicate messaging code into a common module or class ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6423",children:"#6423"})]}),"\n",(0,r.jsxs)(s.li,{children:["Monitoring & Traces: Ability to submit traces in bulk ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7368",children:"#7368"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Remove C3PO daemon ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6872",children:"#6872"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Minor checksum improvements ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7488",children:"#7488"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: Create context managers for database session handling to replace current ",(0,r.jsx)(s.code,{children:"*_session"})," decorators ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7407",children:"#7407"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: SQLA 2.0: remove deprecated ",(0,r.jsx)(s.code,{children:"future=True"})," flags that were used during migration ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7433",children:"#7433"})]}),"\n",(0,r.jsxs)(s.li,{children:["Deletion: Reaper - Do not exit when no RSE are found ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7471",children:"#7471"})]}),"\n",(0,r.jsxs)(s.li,{children:["Deletion: Reaper - Remove deprecated aternative spelling for options ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7474",children:"#7474"})]}),"\n",(0,r.jsxs)(s.li,{children:["Life time model: ",(0,r.jsx)(s.code,{children:"add_lifetime_exception"})," summary: refactor dict keys into proper names ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7443",children:"#7443"})]}),"\n",(0,r.jsxs)(s.li,{children:["Messaging: Add services into messages_history table ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7181",children:"#7181"})]}),"\n",(0,r.jsxs)(s.li,{children:["Metadata: Elasticsearch metadata plugin ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6059",children:"#6059"})]}),"\n",(0,r.jsxs)(s.li,{children:["Metadata: Improve MongoDB connection parameter handling and validation ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7217",children:"#7217"})]}),"\n",(0,r.jsxs)(s.li,{children:["Policies: Remove LIGO and Xenon lfn2pfn algorithms from main code ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7187",children:"#7187"})]}),"\n",(0,r.jsxs)(s.li,{children:["Policies: Standardize permission policy check logic ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7206",children:"#7206"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: Remove ",(0,r.jsx)(s.code,{children:"gsiftp.py"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7347",children:"#7347"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Release 37 dependency upgrade ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7455",children:"#7455"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Remove ",(0,r.jsx)(s.code,{children:"match_define_requirements"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7463",children:"#7463"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Publish wheels ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7546",children:"#7546"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Allow only one concurrent GitHub Action per PR ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7401",children:"#7401"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Replace ",(0,r.jsx)(s.code,{children:"flake8"})," and ",(0,r.jsx)(s.code,{children:"pylint"})," in ",(0,r.jsx)(s.code,{children:"run_tests.sh"})," with ",(0,r.jsx)(s.code,{children:"ruff"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7467",children:"#7467"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Activity passing in Tape REST API during tape staging missing for  davs/https protocol missing ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7451",children:"#7451"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Authentication & Authorisation: Restricted (oidc) token size limiting group membership ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7136",children:"#7136"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: ",(0,r.jsx)(s.code,{children:"psycopg2-binary"})," should not be used in production - ",(0,r.jsx)(s.code,{children:"psycopg2"})," should be used instead ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6669",children:"#6669"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: Database migration scripts do not pass the Ruff check ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7295",children:"#7295"})]}),"\n",(0,r.jsxs)(s.li,{children:["Messaging: Unused older rows in the messages table prevents newer messages for other functional services from being delivered ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6684",children:"#6684"})]}),"\n",(0,r.jsxs)(s.li,{children:["Metadata: get_metadata_bulk does only look at JSON metadata ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6455",children:"#6455"})]}),"\n",(0,r.jsxs)(s.li,{children:["Multi VO: Script to convert a single-VO to multi-VO instance fails ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7390",children:"#7390"})]}),"\n",(0,r.jsxs)(s.li,{children:["Policies: ATLAS policy is set when no permission option is defined in cfg under policy ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7332",children:"#7332"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: Avoid GFAL error when ",(0,r.jsx)(s.code,{children:"exists(None)"})," is called. ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7398",children:"#7398"})]}),"\n",(0,r.jsxs)(s.li,{children:["REST & API: API identity put calls don't fail if email or identity key name are not passed, despite them being required by the SQLA model ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7448",children:"#7448"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Docker build failures due to missing ",(0,r.jsx)(s.code,{children:"setuptools"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7524",children:"#7524"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: TC006 Ruff errors in CI ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7491",children:"#7491"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: ",(0,r.jsx)(s.code,{children:"test-curl"})," tests fails in dev envoriments ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7507",children:"#7507"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: New CLI: retrieving the list of parent DIDs should be under the \u2018list\u2019 command ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7233",children:"#7233"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: New CLI: Replace argparse with Click ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7253",children:"#7253"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Client must specify the account when uploading data ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/7349",children:"#7349"})]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);