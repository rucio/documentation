"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[152],{33174:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(74848),t=s(28453);const r={title:"1.22.0"},c=void 0,o={id:"release-notes/1.22.0",title:"1.22.0",description:"Upgrade Instructions",source:"@site/../docs/release-notes/1.22.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.0",permalink:"/documentation/release-notes/1.22.0",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.0.md",tags:[],version:"current",frontMatter:{title:"1.22.0"}},l={},d=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,i.jsxs)(n.p,{children:["This feature release requires a database schema upgrade. Please consult the ",(0,i.jsx)(n.a,{href:"https://rucio.readthedocs.io/en/latest/database.html",children:"documentation"})," about upgrading your database schema."]}),"\n",(0,i.jsxs)(n.p,{children:["The following changes are necessary and are covered by the ",(0,i.jsx)(n.code,{children:"alembic upgrade head"})," command:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["OAuth2.0 and JWT feature support (Alembic revision ",(0,i.jsx)(n.code,{children:"d1189a09c6e0"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"IDENTITIES_TYPE_CHK"})," constraint in ",(0,i.jsx)(n.code,{children:"identities"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"ACCOUNT_MAP_ID_TYPE_CHK"})," constraint in ",(0,i.jsx)(n.code,{children:"account_map"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"oidc_scope"})," column to ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"audience"})," column to ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"refresh_token"})," column to ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"refresh"})," column to ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"TOKENS_REFRESH_CHK"})," constraint to ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"refresh_start"})," column to ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"refresh_expired_at"})," column to ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"refresh_lifetime"})," column to ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"oauth_requests"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Change size of ",(0,i.jsx)(n.code,{children:"token"})," column in ",(0,i.jsx)(n.code,{children:"tokens"})," table"]}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsxs)(n.li,{children:["Changes for Multi-VO functionality (Alembic revision ",(0,i.jsx)(n.code,{children:"a118956323f8"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Added ",(0,i.jsx)(n.code,{children:"vos"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Insert default row to ",(0,i.jsx)(n.code,{children:"vos"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"vo"})," column to ",(0,i.jsx)(n.code,{children:"rses"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"RSES_VOS_FK"})," foreign key constraint to ",(0,i.jsx)(n.code,{children:"rses"})," table"]}),"\n",(0,i.jsxs)(n.li,{children:["Update ",(0,i.jsx)(n.code,{children:"RSES_RSE_UQ"})," unique contraint in ",(0,i.jsx)(n.code,{children:"rses"})," table"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Authentication & Authorisation: Rucio user authentication via OIDC protocol (XDC IAM), getting user info and JWT tokens ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/2612",children:"#2612"})]}),"\n",(0,i.jsxs)(n.li,{children:["Core & Internals: Need VO table and VO column in RSE table ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/2727",children:"#2727"})]}),"\n",(0,i.jsxs)(n.li,{children:["Deletion: Reaper 2.0 ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/2412",children:"#2412"})]}),"\n",(0,i.jsxs)(n.li,{children:["Monitoring & Logging: Add support for prometheus in core.monitor ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/3124",children:"#3124"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: Add oidc auth templates to setup.py ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/3348",children:"#3348"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: Dependency upgrade for 1.22 ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/3360",children:"#3360"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: Better way to deal with configuration / permissions / policy ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/533",children:"#533"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Deletion: Protection of sources too strict in the reaper ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/1637",children:"#1637"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bugs",children:"Bugs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Authentication & Authorisation: Fixes to OIDC AuthN/Z after first deployment on a testbed ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/3337",children:"#3337"})]}),"\n",(0,i.jsxs)(n.li,{children:["Deletion: only_delete_obsolete is not working properly ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/3399",children:"#3399"})]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);