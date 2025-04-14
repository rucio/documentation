"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11646],{19176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"release-notes/1.24.2.post1","title":"1.24.2.post1","description":"Important notice","source":"@site/../docs/release-notes/1.24.2.post1.md","sourceDirName":"release-notes","slug":"/release-notes/1.24.2.post1","permalink":"/documentation/release-notes/1.24.2.post1","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.2.post1.md","tags":[],"version":"current","frontMatter":{"title":"1.24.2.post1"}}');var o=n(74848),r=n(28453);const i={title:"1.24.2.post1"},c=void 0,d={},a=[{value:"Important notice",id:"important-notice",level:2},{value:"General",id:"general",level:2},{value:"Bugs",id:"bugs",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"important-notice",children:"Important notice"}),"\n",(0,o.jsxs)(t.p,{children:["Due to a regression in the ",(0,o.jsx)(t.code,{children:"1.24"})," release, subscriptions with ",(0,o.jsx)(t.code,{children:"did_type"})," filters such as ",(0,o.jsx)(t.code,{children:"did_type = ['DATASET']"})," were not correctly processed by the subscription daemon (transmogrifier) and thus no rules were created.\nIf your Rucio instance had active subscriptions with ",(0,o.jsx)(t.code,{children:"did_type"})," filters, these rules need to be recreated by re-evaluating the subscriptions. You need to set the ",(0,o.jsx)(t.code,{children:"is_new"})," field in the ",(0,o.jsx)(t.code,{children:"dids"})," table to ",(0,o.jsx)(t.code,{children:"1"})," for all affected dids (e.g. dids created since running 1.24). For example: ",(0,o.jsx)(t.code,{children:"UPDATE dids SET is_new=1 WHERE (did_type='D' or did_type='C') and created_at \\> X;"})]}),"\n",(0,o.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,o.jsx)(t.h3,{id:"bugs",children:"Bugs"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Database: Recent sqlalchemy change broke subscription evaluation ",(0,o.jsx)(t.a,{href:"https://github.com/rucio/rucio/issues/4283",children:"#4283"})]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);