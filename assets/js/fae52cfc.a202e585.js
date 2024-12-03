"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27858],{38360:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"release-notes/1.29.0rc2","title":"1.29.0rc2","description":"Release Candidate","source":"@site/../docs/release-notes/1.29.0rc2.md","sourceDirName":"release-notes","slug":"/release-notes/1.29.0rc2","permalink":"/documentation/release-notes/1.29.0rc2","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.29.0rc2.md","tags":[],"version":"current","frontMatter":{"title":"1.29.0rc2"}}');var r=i(74848),c=i(28453);const t={title:"1.29.0rc2"},l=void 0,o={},a=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-1",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,r.jsx)(s.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,r.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,r.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,r.jsx)(s.a,{href:"https://rucio.cern.ch/documentation/database/",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,r.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,r.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Introduction of the ",(0,r.jsx)(s.code,{children:"availability_read"}),", ",(0,r.jsx)(s.code,{children:"availability_write"})," and ",(0,r.jsx)(s.code,{children:"availability_delete"})," columns in ",(0,r.jsx)(s.code,{children:"rses"})," table. This will replace the ",(0,r.jsx)(s.code,{children:"availability"})," column in a later release. (Alembic revision ",(0,r.jsx)(s.code,{children:"1677d4d803c8"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Extend ",(0,r.jsx)(s.code,{children:"refresh_token"})," column in ",(0,r.jsx)(s.code,{children:"tokens"})," table. (Alembic revision ",(0,r.jsx)(s.code,{children:"fa7a7d78b602"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Drop ",(0,r.jsx)(s.code,{children:"third_party_copy"})," column in ",(0,r.jsx)(s.code,{children:"rse_protocols"})," table. (Alembic revision ",(0,r.jsx)(s.code,{children:"d6e2c3b2cf26"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Creation of several global temporary tables on Oracle. (Alembic revision ",(0,r.jsx)(s.code,{children:"f41ffe206f37"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Migration of RSE Settings (",(0,r.jsx)(s.code,{children:"city"}),", ",(0,r.jsx)(s.code,{children:"region_code"}),", ",(0,r.jsx)(s.code,{children:"country_name"}),", ",(0,r.jsx)(s.code,{children:"continent"}),", ",(0,r.jsx)(s.code,{children:"time_zone"}),", ",(0,r.jsx)(s.code,{children:"ISP"}),") from ",(0,r.jsx)(s.code,{children:"rses"})," table to ",(0,r.jsx)(s.code,{children:"rse_attr_map"}),"; These columns will be dropped from ",(0,r.jsx)(s.code,{children:"rses"})," in a future release. (Alembic revision ",(0,r.jsx)(s.code,{children:"2190e703eb6e"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"This release drops the, long deprecated, DQ2 compatibility clients."}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Full removal of Python 2.7 compatibility. If you require Python 2.7 compatibility on the clients side, please consider the Rucio 1.26 LTS release line which will still be supported until mid-2023."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Passing scope to construct_surl() ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4836",children:"#4836"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: Further integration of temporary tables to other major workflows ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5441",children:"#5441"})]}),"\n",(0,r.jsxs)(s.li,{children:["Documentation: Fix client API documentation page ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5444",children:"#5444"})]}),"\n",(0,r.jsxs)(s.li,{children:["Messaging: Hermes 2 evolution ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4610",children:"#4610"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Removal of Python 2.7 dependencies from the code ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5435",children:"#5435"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Authentication & Authorisation: Replace deprecated ",(0,r.jsx)(s.code,{children:"oauth2client"})," dependency ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5343",children:"#5343"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Replace dependency ",(0,r.jsx)(s.code,{children:"python-memcached"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5341",children:"#5341"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Calculation of container ",(0,r.jsx)(s.code,{children:"length"})," and ",(0,r.jsx)(s.code,{children:"events"})," ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5422",children:"#5422"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Cannot update ",(0,r.jsx)(s.code,{children:"continent"})," attribute of RSE ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5464",children:"#5464"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: rucio-admin rse update shows no error for unsupported options ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5491",children:"#5491"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: Add poolclass configuration options for database engine ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5391",children:"#5391"})]}),"\n",(0,r.jsxs)(s.li,{children:["Database: Add additional operators in metadata filter engine for Oracle ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5503",children:"#5503"})]}),"\n",(0,r.jsxs)(s.li,{children:["Documentation: Further OIDC and SSO optimization and documentation ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5437",children:"#5437"})]}),"\n",(0,r.jsxs)(s.li,{children:["Metadata: Using plugin ALL or JSON returns DataIdentifierNotFound if json metadata is not set ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4512",children:"#4512"})]}),"\n",(0,r.jsxs)(s.li,{children:["Remove third_party_copy column ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5634",children:"#5634"})]}),"\n",(0,r.jsxs)(s.li,{children:["Introduce a heartbeat handler to kronos ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5685",children:"#5685"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: Remove legacy S3 protocols and libraries ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5346",children:"#5346"})]}),"\n",(0,r.jsxs)(s.li,{children:["Protocols: Check before deleting with GFAL ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5622",children:"#5622"})]}),"\n",(0,r.jsxs)(s.li,{children:["Recovery: Heartbeat handler for bad_replicas daemons ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5562",children:"#5562"})]}),"\n",(0,r.jsxs)(s.li,{children:["Recovery: Create rules for suspicious replicas with only one declaration ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5591",children:"#5591"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: mypy static code analysis ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4455",children:"#4455"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Cache detection code results in wrong logging level  ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5697",children:"#5697"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Logic error in FTS3 transfertool checksum validation strategy ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5670",children:"#5670"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"features-1",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Remove DQ2 Client ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5584",children:"#5584"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: Config not found RuntimeError in version 1.29.0rc1 ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5704",children:"#5704"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"webui",children:"WebUI"}),"\n",(0,r.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["WebUI: Make subscriptions page real-time ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5583",children:"#5583"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>t,x:()=>l});var n=i(96540);const r={},c=n.createContext(r);function t(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);