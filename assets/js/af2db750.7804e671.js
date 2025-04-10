"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1714],{28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var o=n(96540);const c={},a=o.createContext(c);function s(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:s(t.components),o.createElement(a.Provider,{value:e},t.children)}},55672:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"started/concepts/accounting_and_quota","title":"Accounting and quota","description":"Accounting is the measure of how much resource, e.g. storage, an account","source":"@site/../docs/started/concepts/accounting_and_quota.md","sourceDirName":"started/concepts","slug":"/started/concepts/accounting_and_quota","permalink":"/documentation/started/concepts/accounting_and_quota","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/accounting_and_quota.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1744318612000,"frontMatter":{"title":"Accounting and quota"},"sidebar":"docs","previous":{"title":"Additional Layers and Resources","permalink":"/documentation/started/additional_layers_and_resources"},"next":{"title":"Deletion Overview","permalink":"/documentation/started/concepts/deletion_overview"}}');var c=n(74848),a=n(28453);const s={title:"Accounting and quota"},i=void 0,r={},u=[];function d(t){const e={p:"p",...(0,a.R)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.p,{children:"Accounting is the measure of how much resource, e.g. storage, an account\nhas used as a consequence of its actions. Quota is a policy limit which\nthe system applies to an account."}),"\n",(0,c.jsx)(e.p,{children:"Rucio accounts are only accounted for the files they set replication\nrules on. The accounting is based on the replicas an account requested,\nnot on the actual amount of physical replicas in the system. Thus if two\ndifferent users set a replication rule for the same file on the same RSE\nboth users are accounted for this file, although there is only one\nphysical copy of it."})]})}function l(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(d,{...t})}):d(t)}}}]);