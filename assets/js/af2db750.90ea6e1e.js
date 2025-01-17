"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1714],{55672:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"started/concepts/accounting_and_quota","title":"Accounting and quota","description":"Accounting is the measure of how much resource, e.g. storage, an account","source":"@site/../docs/started/concepts/accounting_and_quota.md","sourceDirName":"started/concepts","slug":"/started/concepts/accounting_and_quota","permalink":"/documentation/started/concepts/accounting_and_quota","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/accounting_and_quota.md","tags":[],"version":"current","lastUpdatedBy":"Luis Antonio Obis Aparicio","lastUpdatedAt":1737101861000,"frontMatter":{"title":"Accounting and quota"},"sidebar":"docs","previous":{"title":"RSE Expressions","permalink":"/documentation/started/concepts/rse_expressions"},"next":{"title":"Notifications","permalink":"/documentation/started/concepts/notifications"}}');var c=n(74848),s=n(28453);const a={title:"Accounting and quota"},i=void 0,r={},u=[];function d(t){const e={p:"p",...(0,s.R)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:"Accounting is the measure of how much resource, e.g. storage, an account\nhas used as a consequence of its actions. Quota is a policy limit which\nthe system applies to an account."}),"\n",(0,c.jsx)(e.p,{children:"Rucio accounts are only accounted for the files they set replication\nrules on. The accounting is based on the replicas an account requested,\nnot on the actual amount of physical replicas in the system. Thus if two\ndifferent users set a replication rule for the same file on the same RSE\nboth users are accounted for this file, although there is only one\nphysical copy of it."})]})}function p(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>i});var o=n(96540);const c={},s=o.createContext(c);function a(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:a(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);