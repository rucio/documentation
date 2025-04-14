"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43325],{28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var i=n(96540);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}},70363:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"release-notes/1.30.0rc3","title":"1.30.0rc3","description":"Release Candidate","source":"@site/../docs/release-notes/1.30.0rc3.md","sourceDirName":"release-notes","slug":"/release-notes/1.30.0rc3","permalink":"/documentation/release-notes/1.30.0rc3","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.30.0rc3.md","tags":[],"version":"current","frontMatter":{"title":"1.30.0rc3"}}');var r=n(74848),t=n(28453);const o={title:"1.30.0rc3"},c=void 0,l={},a=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,r.jsx)(s.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,r.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,r.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,r.jsx)(s.a,{href:"https://rucio.cern.ch/documentation/database/",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,r.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,r.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Correcting length of ",(0,r.jsx)(s.code,{children:"rse_expression"})," in rule history tables (Alembic revision ",(0,r.jsx)(s.code,{children:"83f991c63a93"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Conveyor throttler evolution (Alembic revision ",(0,r.jsx)(s.code,{children:"13d4f70c66a9"}),")"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Creation of ",(0,r.jsx)(s.code,{children:"transfer_limits"})," table"]}),"\n",(0,r.jsxs)(s.li,{children:["Drop and re-creation of ",(0,r.jsx)(s.code,{children:"rse_transfer_limits"})," table"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Dropping/Renaming of several columns in the ",(0,r.jsx)(s.code,{children:"distances"})," table (Alembic revision ",(0,r.jsx)(s.code,{children:"140fef722e91"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Most metric names were changed in this release. If you collect prometheus and/or statsd metrics, the monitoring dashboards and alerting rules will have to be updated."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Important Note (unrelated to this particular release)","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["The prometheus metrics are the main supported way of collecting metrics since ",(0,r.jsx)(s.code,{children:"1.28"}),"."]}),"\n",(0,r.jsx)(s.li,{children:"There are no plans to deprecate carbon metrics yet, but there is no active development in this field anymore."}),"\n",(0,r.jsxs)(s.li,{children:["This update may be a good opportunity to switch to native prometheus metrics. Especially if you use prometheus anyway and rely on the ",(0,r.jsx)(s.code,{children:"statsd exporter"})," to bridge the gap between statsd and prometheus."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Deactivation of automatic ",(0,r.jsx)(s.code,{children:"https-\\>davs"})," translation for transfers"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"This automatic translation was necessary in the past but should be largely deprecated due to more recent versions of storage software"}),"\n",(0,r.jsxs)(s.li,{children:["If you notice issues related to this, you can turn translation back on by setting the config option ",(0,r.jsx)(s.code,{children:"[transfers]rewrite_https_to_davs=True"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Support RFC format for X509 identities"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["There are two formats: an RFC-compliant (e.g.\xa0",(0,r.jsx)(s.code,{children:"CN=John Doe,OU=Users,DC=example,DC=com"}),") and a legacy (e.g.\xa0",(0,r.jsx)(s.code,{children:"/DC=com/DC=example/OU=Users/CN=John Doe"}),")"]}),"\n",(0,r.jsxs)(s.li,{children:["In Rucio ",(0,r.jsx)(s.code,{children:"1.29"})," and prior, X509 identities must be stored in the legacy format and the authentication server tries to silently convert them from the RFC to the legacy format, if necessary"]}),"\n",(0,r.jsxs)(s.li,{children:["In Rucio ",(0,r.jsx)(s.code,{children:"1.30"}),", this conversion has been removed","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Communities who would like to keep using the legacy format must ensure that\xa0",(0,r.jsx)(s.code,{children:"LegacyDNStringFormat"}),"\xa0in mod_ssl is enabled"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Almost all fields from the distances table are removed. The only important field preserved from ",(0,r.jsx)(s.code,{children:"1.29"})," to ",(0,r.jsx)(s.code,{children:"1.30"})," is ",(0,r.jsx)(s.code,{children:"ranking"})," (renamed to ",(0,r.jsx)(s.code,{children:"distance"}),"). Rucio ",(0,r.jsx)(s.code,{children:"1.30"})," is compatible both with the old ",(0,r.jsx)(s.code,{children:"1.29"})," table format and the ",(0,r.jsx)(s.code,{children:"1.30"})," table format. If you desire to run Rucio ",(0,r.jsx)(s.code,{children:"1.29"})," and ",(0,r.jsx)(s.code,{children:"1.30"}),' in parallel, database migrations associated with the "distances" table must be delayed until the full migration of all daemons and servers to ',(0,r.jsx)(s.code,{children:"1.30"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["The throttler rules format has changed in an incompatible way. The update of the database schema will result in removal of all existing throttling rules. Rules in the new format ",(0,r.jsx)(s.em,{children:"must"})," be created before running throttler again, otherwise all waiting requests will be transitioned to queued state and be submitted without throttling."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Authentication & Authorisation: Support RFC format for X509 identities ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5842",children:"#5842"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Introduce heartbeat handler to all daemons ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5443",children:"#5443"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Remove ",(0,r.jsx)(s.code,{children:"retrying"})," dependency ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5344",children:"#5344"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Proper versioning for policy packages ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5652",children:"#5652"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Enforce tokens by default in Flask ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5822",children:"#5822"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: switch to lazy-filling of account_usage counters ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5914",children:"#5914"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: fix type of 'session' function arguments  ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5947",children:"#5947"})]}),"\n",(0,r.jsxs)(s.li,{children:["Monitoring & Logging: rework prometheus/statsd metric names ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5804",children:"#5804"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: Remove ",(0,r.jsx)(s.code,{children:"pysftp"})," protocol ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5347",children:"#5347"})]}),"\n",(0,r.jsxs)(s.li,{children:["REST & API: remove traces endpoint from the default list in flask ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5958",children:"#5958"})]}),"\n",(0,r.jsxs)(s.li,{children:["Subscriptions: Introduce new exclude_site algorithm for chained subscriptions ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5935",children:"#5935"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Fix unit tests for non-ATLAS policies round 2/3 ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5839",children:"#5839"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Re-work/cleanup ",(0,r.jsx)(s.code,{children:"distance"})," table ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5454",children:"#5454"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: rework conveyor-throttler  ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5805",children:"#5805"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: remove https->davs translation on FTS submission ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5993",children:"#5993"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Database: Alembic context issue with  move_rse_artributes_to_rse_attributes migration ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5823",children:"#5823"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: incorrect rse_expression length in rule_history* migrations ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5846",children:"#5846"})]}),"\n",(0,r.jsxs)(s.li,{children:["globus RSE protocol silently ignores errors ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5987",children:"#5987"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: webdav.py Default.stat() module: Match error when finding size of current file ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5308",children:"#5308"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: WebDAV protocol XML parser doesn't handle XML namespaces correctly ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5700",children:"#5700"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: bad-str-strip-call errors in pylint ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/6002",children:"#6002"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Fix Potential for time zone confusion ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5781",children:"#5781"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"webui",children:"WebUI"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-2",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["WebUI: r2d2 list_rules link is broken, gives 404 ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5970",children:"#5970"})]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);