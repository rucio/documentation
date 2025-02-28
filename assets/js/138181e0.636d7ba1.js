"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5152],{28453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>c});var o=n(96540);const i={},s=o.createContext(i);function a(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),o.createElement(s.Provider,{value:e},t.children)}},68455:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"started/concepts/notifications","title":"Notifications","description":"External applications can require synchronisation on events relative to","source":"@site/../docs/started/concepts/notifications.md","sourceDirName":"started/concepts","slug":"/started/concepts/notifications","permalink":"/documentation/started/concepts/notifications","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/notifications.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1740748906000,"frontMatter":{"id":"notifications","title":"Notifications","sidebar_label":"Notifications"},"sidebar":"docs","previous":{"title":"Accounting and quota","permalink":"/documentation/started/concepts/accounting_and_quota"},"next":{"title":"Subscriptions","permalink":"/documentation/started/concepts/subscriptions"}}');var i=n(74848),s=n(28453);const a={id:"notifications",title:"Notifications",sidebar_label:"Notifications"},c=void 0,r={},d=[];function p(t){const e={a:"a",p:"p",...(0,s.R)(),...t.components};return(0,i.jsxs)(e.p,{children:["External applications can require synchronisation on events relative to\ndata availability and can subscribe to particular events, e.g., dataset\nstate changes, replication rule state changes, etc. Rucio publishes\nmessages via the ",(0,i.jsx)(e.a,{href:"https://stomp.github.io",children:"STOMP"})," protocol (to e.g.\n",(0,i.jsx)(e.a,{href:"https://activemq.apache.org",children:"ActiveMQ"}),") when these events happen."]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(p,{...t})}):p(t)}}}]);