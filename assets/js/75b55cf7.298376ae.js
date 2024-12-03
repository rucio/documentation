"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91045],{67015:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"release-notes/1.27.0","title":"1.27.0","description":"Upgrade Instructions","source":"@site/../docs/release-notes/1.27.0.md","sourceDirName":"release-notes","slug":"/release-notes/1.27.0","permalink":"/documentation/release-notes/1.27.0","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.0.md","tags":[],"version":"current","frontMatter":{"title":"1.27.0"}}');var r=i(74848),t=i(28453);const o={title:"1.27.0"},c=void 0,l={},u=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,r.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,r.jsx)(s.a,{href:"https://rucio.cern.ch/documentation/database/",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,r.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,r.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Introduction of the ",(0,r.jsx)(s.code,{children:"virtual_placements"})," table for optional virtual placement feature. (Alembic revision ",(0,r.jsx)(s.code,{children:"9a45bc4ea66d"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: rucio.cfg vs config table ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2630",children:"#2630"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Support DID metadata queries with inequality operators: ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3750",children:"#3750"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Support API to return dataset locks for a given container name ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4807",children:"#4807"})]}),"\n",(0,r.jsxs)(s.li,{children:["DAVS to SRM optional compatibility ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5056",children:"#5056"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Remove the ",(0,r.jsx)(s.code,{children:"sonar"})," daemon ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4957",children:"#4957"})]}),"\n",(0,r.jsxs)(s.li,{children:["Rules: Extend get_dataset_locks API to support requests in bulk ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3982",children:"#3982"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Certificate selection for Multi_VO conveyor daemons ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4731",children:"#4731"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Non optimal rule reevaluation when attach_dids_to_dids is used with ignore_duplicate option ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4178",children:"#4178"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Correct and Avoid redefining of built-in function ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4466",children:"#4466"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Naming restrictions should be enforced for LFN2PFN and SURL algorithms in policy packages ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4830",children:"#4830"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: New method to set metadata on a list of dids ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4973",children:"#4973"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: New procedure for accounting ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4983",children:"#4983"})]}),"\n",(0,r.jsxs)(s.li,{children:["Monitoring & Logging: Logging review ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4220",children:"#4220"})]}),"\n",(0,r.jsxs)(s.li,{children:["Monitoring & Logging: submitter logs too verbose ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5053",children:"#5053"})]}),"\n",(0,r.jsxs)(s.li,{children:["Recovery: Implement fair share for the Necromancer ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4893",children:"#4893"})]}),"\n",(0,r.jsxs)(s.li,{children:["Rules: request two extensions to move-rule ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4855",children:"#4855"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: increase verbosity of logger when running pytests ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5005",children:"#5005"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Writing to tape: Destination file exists and overwrite is not enable ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4447",children:"#4447"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Deprecate conveyor-poller-latest ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4762",children:"#4762"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Requests to unavailable RSEs ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4896",children:"#4896"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Conveyor-submitter optional partitioning on ",(0,r.jsx)(s.code,{children:"rule_id"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4915",children:"#4915"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Avoid increasing source ranking on submission failure  ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4916",children:"#4916"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: SRM to HTTPS optional compatibility ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4944",children:"#4944"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Authentication & Authorisation: Token cleanup issue ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5032",children:"#5032"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Datasetlocks not properly deleted when detaching datasets from containers ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1860",children:"#1860"})]}),"\n",(0,r.jsxs)(s.li,{children:["Deletion: Deletion timeout does not work on GridFTP ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4994",children:"#4994"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: source ranking never updated correctly for multihop ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4970",children:"#4970"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: regression in conveyor database partition variable name ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5043",children:"#5043"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Duplicated timeseries in CollectorRegistry error in submitter ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5055",children:"#5055"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"features-1",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Allow client to choose data access library ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4730",children:"#4730"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Use kebab-case for all command-line options ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4865",children:"#4865"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: list-file-repicas --all-states should show the states ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3431",children:"#3431"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Add dump of request URI and parameters to client in debug mode ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4784",children:"#4784"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Skip updating replica in uploadclient if register_after_upload is true ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4828",children:"#4828"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: RuntimeError being thrown on a client side when a config file missing. ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4868",children:"#4868"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Dirac interface: make an extract_scope default algorithm variable ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4886",children:"#4886"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: pass logger down to the Client ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4920",children:"#4920"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Add an option not to raise NoFilesDownloaded or NotAllFilesDownloaded in downloadclient ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4924",children:"#4924"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Rename command-line option --expiration-date ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4931",children:"#4931"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Add ",(0,r.jsx)(s.code,{children:"ignore_availability"})," option to the upload client ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4985",children:"#4985"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:['Clients: Incomplete download looks "complete" when restricting RSEs ',(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3824",children:"#3824"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: list-file-replicas rses and missing incompatibility ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5007",children:"#5007"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Rucio breaks DIRAC run ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5041",children:"#5041"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>o,x:()=>c});var n=i(96540);const r={},t=n.createContext(r);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);