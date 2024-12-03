"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62097],{81654:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"release-notes/1.23.0","title":"1.23.0","description":"Long Term Support (LTS)","source":"@site/../docs/release-notes/1.23.0.md","sourceDirName":"release-notes","slug":"/release-notes/1.23.0","permalink":"/documentation/release-notes/1.23.0","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.0.md","tags":[],"version":"current","frontMatter":{"title":"1.23.0"}}');var t=n(74848),r=n(28453);const c={title:"1.23.0"},o=void 0,l={},a=[{value:"Long Term Support (LTS)",id:"long-term-support-lts",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"long-term-support-lts",children:"Long Term Support (LTS)"}),"\n",(0,t.jsxs)(s.p,{children:["This release marks the start of the 1.23 ",(0,t.jsx)(s.strong,{children:"Long Term Support (LTS)"})," release line. This release line will be supported with security and critical patches until at least ",(0,t.jsx)(s.strong,{children:"July 2022"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,t.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,t.jsx)(s.a,{href:"https://rucio.readthedocs.io/en/latest/database.html",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,t.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,t.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Adding column ",(0,t.jsx)(s.code,{children:"services"})," to ",(0,t.jsx)(s.code,{children:"messages"})," and ",(0,t.jsx)(s.code,{children:"messages_history"})," table (Alembic revision ",(0,t.jsx)(s.code,{children:"a193a275255c"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Preparation for QoS feature (Alembic revision ",(0,t.jsx)(s.code,{children:"c0937668555f"})," and ",(0,t.jsx)(s.code,{children:"50280c53117c"}),")"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Adding ",(0,t.jsx)(s.code,{children:"rse_qos_map"})," table"]}),"\n",(0,t.jsxs)(s.li,{children:["Adding ",(0,t.jsx)(s.code,{children:"qos_class"})," column to ",(0,t.jsx)(s.code,{children:"rses"})," table"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Due to the metadata unification feature (",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3096",children:"#3096"}),") added in this release, the APIs for ",(0,t.jsx)(s.code,{children:"add_did_meta"}),", ",(0,t.jsx)(s.code,{children:"get_did_meta"}),", and ",(0,t.jsx)(s.code,{children:"delete_did_meta"})," were removed. This data is now available through the plugin mechanism of the common ",(0,t.jsx)(s.code,{children:"get_metadata"})," API."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Core & Internals: MultiVO functionality for Rucio ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2635",children:"#2635"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Unification of metadata interfaces ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3096",children:"#3096"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: QoS: Core and interfaces ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3543",children:"#3543"})]}),"\n",(0,t.jsxs)(s.li,{children:["Messaging: Extending Hermes to submit to influxDB or Elastic ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3680",children:"#3680"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: OAuth2/OIDC: token exchange of JWTs not acquired via Rucio CLI (cases with offline_access scope) ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3778",children:"#3778"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Support bulk requests in the list_dataset_replicas CLI API ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2459",children:"#2459"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Introduce BelleII activities ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3771",children:"#3771"})]}),"\n",(0,t.jsxs)(s.li,{children:["RSE Manager: GlobusRSEProtocol Modifications: remove RSEDeterministicTranslation and call super of protocol base class ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3584",children:"#3584"})]}),"\n",(0,t.jsxs)(s.li,{children:["Testing: Reaper tests make no assertions or deletions ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3726",children:"#3726"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: Adding list and exists methods to GlobusRSEProtocol ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3346",children:"#3346"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: Introduce caching of a MultiHop path to optimize algorithm runtime ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3830",children:"#3830"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: OAuth2/OIDC: fix to py2/3 compatibility of common.utils  ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3743",children:"#3743"})]}),"\n",(0,t.jsxs)(s.li,{children:["Authentication & Authorisation: Token validation for credential signing request ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3823",children:"#3823"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Internal error during adding duplicate attribute to account ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3777",children:"#3777"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Fix extract_scope method for BelleII ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3797",children:"#3797"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: Conveyor submitter creates partitions wrongly ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3752",children:"#3752"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsx)(s.h3,{id:"features-1",children:"Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: Moving upload method from rsemgr to client ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3084",children:"#3084"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: Allow passing the dynamic parameter to get_did() ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3760",children:"#3760"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: Python 3 error with uploadclient json.dump ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3747",children:"#3747"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"webui",children:"WebUI"}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-2",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["WebUI: Harden security on the Web UI ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3757",children:"#3757"})]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(96540);const t={},r=i.createContext(t);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);