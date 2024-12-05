"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74020],{16933:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"started/concepts/subscriptions","title":"Subscriptions","description":"Rucio Subscriptions exist for the purpose of making data placement","source":"@site/../docs/started/concepts/subscriptions.md","sourceDirName":"started/concepts","slug":"/started/concepts/subscriptions","permalink":"/documentation/started/concepts/subscriptions","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/subscriptions.md","tags":[],"version":"current","lastUpdatedBy":"Hugo Labrador","lastUpdatedAt":1733387634000,"frontMatter":{"title":"Subscriptions"},"sidebar":"docs","previous":{"title":"Notifications","permalink":"/documentation/started/concepts/notifications"},"next":{"title":"Typical Replica Workflow","permalink":"/documentation/started/concepts/replica_workflow"}}');var r=n(74848),i=n(28453);const c={title:"Subscriptions"},o=void 0,a={},d=[];function l(t){const e={p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Rucio Subscriptions exist for the purpose of making data placement\ndecisions before the actual data has been created. Subscriptions\ngenerate rules for new datasets based on matching metadata at\nregistration time. Subscriptions are owned by an account and can only\ngenerate rules for that account. Policies may have a lifetime, after\nwhich they will expire."}),"\n",(0,r.jsx)(e.p,{children:"An example of a subscription is given below:"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Attribute"}),(0,r.jsx)(e.th,{children:"Value"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Owner"}),(0,r.jsx)(e.td,{children:"tzero"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"match"}),(0,r.jsx)(e.td,{children:"project=data11 7TeV, dataType=RAW, stream=physics*"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"rule"}),(0,r.jsx)(e.td,{children:"1@CERNTAPE, 1@T1TAPE"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"lifetime"}),(0,r.jsx)(e.td,{children:"2012-01-01 00:00"})]})]})]})]})}function p(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>o});var s=n(96540);const r={},i=s.createContext(r);function c(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);