"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4351],{96425:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"release-notes/1.29.4","title":"1.29.4","description":"General","source":"@site/../docs/release-notes/1.29.4.md","sourceDirName":"release-notes","slug":"/release-notes/1.29.4","permalink":"/documentation/release-notes/1.29.4","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.29.4.md","tags":[],"version":"current","frontMatter":{"title":"1.29.4"}}');var i=n(74848),r=n(28453);const o={title:"1.29.4"},c=void 0,l={},a=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}];function u(e){const s={a:"a",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Authentication & Authorisation: allow CORS headers for preflight requests ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5843",children:"#5843"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Core & Internals: Enforce tokens when requesting URL signatures ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5820",children:"#5820"})]}),"\n",(0,i.jsxs)(s.li,{children:["Functional tests: Use uploadclient in automatix ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5616",children:"#5616"})]}),"\n",(0,i.jsxs)(s.li,{children:["Functional tests: Heartbeat handler for automatix daemon ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5617",children:"#5617"})]}),"\n",(0,i.jsxs)(s.li,{children:["Testing: Enable static type checking ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5727",children:"#5727"})]}),"\n",(0,i.jsxs)(s.li,{children:["Transfers: Add logging and monitoring for repair/overwrite of existing files on tape ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5817",children:"#5817"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Deletion: Reaper not processing all Epoch tombstone replicas when no space is needed ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5816",children:"#5816"})]}),"\n",(0,i.jsxs)(s.li,{children:["Replicas: temp table list replicas doesn't filter correctly on rse_expression with >4 rses ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5831",children:"#5831"})]}),"\n",(0,i.jsxs)(s.li,{children:["Rules: Regression introduced with storaged-managed QoS feature ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5827",children:"#5827"})]}),"\n",(0,i.jsxs)(s.li,{children:["Subscriptions: DIDs are not evaluated if the transmogrifier fails to load the subscriptions ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5835",children:"#5835"})]}),"\n",(0,i.jsxs)(s.li,{children:["Traces: duplicate time series in server-traces  ",(0,i.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5771",children:"#5771"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);