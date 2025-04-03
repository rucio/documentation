"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30978],{11702:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"release-notes/1.21.0","title":"1.21.0","description":"Upgrade Instructions","source":"@site/../docs/release-notes/1.21.0.md","sourceDirName":"release-notes","slug":"/release-notes/1.21.0","permalink":"/documentation/release-notes/1.21.0","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.0.md","tags":[],"version":"current","frontMatter":{"title":"1.21.0"}}');var r=i(74848),t=i(28453);const c={title:"1.21.0"},o=void 0,l={},d=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,r.jsxs)(s.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,r.jsx)(s.a,{href:"https://rucio.readthedocs.io/en/latest/database.html",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,r.jsxs)(s.p,{children:["The following changes are necessary and are covered by the ",(0,r.jsx)(s.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Adding columns ",(0,r.jsx)(s.code,{children:"created_at"})," and ",(0,r.jsx)(s.code,{children:"updated_at"})," to ",(0,r.jsx)(s.code,{children:"did_meta"})," table. This only needs to be executed if the columns are not existing (Alembic revision ",(0,r.jsx)(s.code,{children:"53b479c3cb0f"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Adding ",(0,r.jsx)(s.code,{children:"SAML"})," as authentication typ to ",(0,r.jsx)(s.code,{children:"identities"})," and ",(0,r.jsx)(s.code,{children:"account_map"})," tables (Alembic revision ",(0,r.jsx)(s.code,{children:"9a1b149a2044"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Adding ",(0,r.jsx)(s.code,{children:"staging_started_at"})," and ",(0,r.jsx)(s.code,{children:"staging_finished_at"})," to ",(0,r.jsx)(s.code,{children:"requests"})," and ",(0,r.jsx)(s.code,{children:"requests_history"})," tables (Alembic revision ",(0,r.jsx)(s.code,{children:"bc68e9946deb"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Adding ",(0,r.jsx)(s.code,{children:"third_party_copy_write"})," and ",(0,r.jsx)(s.code,{children:"third_party_copy_read"})," columns to ",(0,r.jsx)(s.code,{children:"rse_protocols"})," table (Alembic revision ",(0,r.jsx)(s.code,{children:"2b69addda658"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Added new ",(0,r.jsx)(s.code,{children:"account_glob_limits"})," table (Alembic revision ",(0,r.jsx)(s.code,{children:"a74275a1ad30"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Added new ",(0,r.jsx)(s.code,{children:"dids_followed"})," and ",(0,r.jsx)(s.code,{children:"dids_followed_events"})," tables (Alembic revision ",(0,r.jsx)(s.code,{children:"7541902bf173"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Added ",(0,r.jsx)(s.code,{children:"strategy"}),", ",(0,r.jsx)(s.code,{children:"direction"}),", and ",(0,r.jsx)(s.code,{children:"deadline"})," column to ",(0,r.jsx)(s.code,{children:"rse_transfer_limits"})," table (Alembic revision ",(0,r.jsx)(s.code,{children:"810a41685bc1"}),")"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Global account qutoas ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2315",children:"#2315"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Per-RSE checksum specification ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2498",children:"#2498"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Removal of fts3-rest-api dependency ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2518",children:"#2518"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Add Source rse mode to throttler ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2611",children:"#2611"})]}),"\n",(0,r.jsxs)(s.li,{children:["Deletion: Use signed URLs when deleting from object stores ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2411",children:"#2411"})]}),"\n",(0,r.jsxs)(s.li,{children:["Collection following mechanism ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2304",children:"#2304"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: Dependency upgrade for 1.21 ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3054",children:"#3054"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: flake8 and pycodestyles upgrade ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2156",children:"#2156"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: activate python3 client tests ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2943",children:"#2943"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Generic Multi-Hop transfers ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2632",children:"#2632"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Rucio support for Globus Online as a transfer tool ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2905",children:"#2905"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Add staging timestamps to request history ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3023",children:"#3023"})]}),"\n",(0,r.jsxs)(s.li,{children:["WebUI: Login to WebUI with SSO ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2306",children:"#2306"})]}),"\n",(0,r.jsxs)(s.li,{children:["WebUI: Create username/password authentication for Rucio WebUI ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2614",children:"#2614"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: S3 URL signing code should pass endpoint to boto3 ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2715",children:"#2715"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: S3 URL signing code should use RSE name to index credentials ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2717",children:"#2717"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: session() replaced by Session() in requests ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3011",children:"#3011"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Add a quota_approver similar to rule_approver ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3053",children:"#3053"})]}),"\n",(0,r.jsxs)(s.li,{children:["Infrastructure: Add objectstore to development Docker image ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2855",children:"#2855"})]}),"\n",(0,r.jsxs)(s.li,{children:["Infrastructure: Add a docker-compose that brings services up only listening on localhost ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2990",children:"#2990"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: fix setup problems in python3 travis tests ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2597",children:"#2597"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Activate grouped FIFO tests for mysql ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2802",children:"#2802"})]}),"\n",(0,r.jsxs)(s.li,{children:["Testing: Python 3.* tests for clients ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3032",children:"#3032"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Minor improvements to MultiHop algorithm ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3086",children:"#3086"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: problems upgrading to latest mysql/mariadb version ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2421",children:"#2421"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Missing created_at and updated_at columns in did_meta table ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2462",children:"#2462"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Integer attribute value '1' displayed as 'True' in the client.   ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2787",children:"#2787"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: missing dot in schema in alembic scripts ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2823",children:"#2823"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: check global quota in running RSESelector ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3070",children:"#3070"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: delete_replica query on archive_contents uses too many bind variables ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3089",children:"#3089"})]}),"\n",(0,r.jsxs)(s.li,{children:["Infrastructure: docker setup issues ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3038",children:"#3038"})]}),"\n",(0,r.jsxs)(s.li,{children:["Release management: alembic cli not working ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/2872",children:"#2872"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Failure with multihop in case an intermediate request already exists ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3078",children:"#3078"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Keyword argument error in conveyor ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3093",children:"#3093"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: rucio client fails if username not defined ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/3050",children:"#3050"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>o});var n=i(96540);const r={},t=n.createContext(r);function c(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);