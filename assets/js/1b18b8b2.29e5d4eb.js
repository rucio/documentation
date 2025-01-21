"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8939],{74255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"started/requirements","title":"Requirements","description":"Rucio relies on several dependencies, some of them being a hard requirement,","source":"@site/../docs/started/requirements.md","sourceDirName":"started","slug":"/started/requirements","permalink":"/documentation/started/requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/requirements.md","tags":[],"version":"current","lastUpdatedBy":"Martin Barisits","lastUpdatedAt":1737476714000,"frontMatter":{"id":"requirements","title":"Requirements","sidebar_label":"Requirements"},"sidebar":"docs","previous":{"title":"Additional Layers and Resources","permalink":"/documentation/started/additional_layers_and_resources"},"next":{"title":"Rucio account","permalink":"/documentation/started/concepts/rucio_account"}}');var s=n(74848),i=n(28453);const d={id:"requirements",title:"Requirements",sidebar_label:"Requirements"},o=void 0,c={},a=[{value:"Python",id:"python",level:2},{value:"Database",id:"database",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Rucio relies on several dependencies, some of them being a hard requirement,\nothers being optional depending on the used Rucio functionality."}),"\n",(0,s.jsxs)(t.p,{children:["To install Rucio, we generally recommend a Kubernetes-based deployment based on\nour ",(0,s.jsx)(t.a,{href:"https://github.com/rucio/helm-charts",children:"helm-charts"}),". A direct deployment\nusing Rucio ",(0,s.jsx)(t.a,{href:"https://hub.docker.com/u/rucio",children:"docker containers"}),", or Rucio\n",(0,s.jsx)(t.a,{href:"https://pypi.org/project/rucio/",children:"pip"})," packages is also possible."]}),"\n",(0,s.jsx)(t.h2,{id:"python",children:"Python"}),"\n",(0,s.jsx)(t.p,{children:"Rucio server, daemons and clients are written in Python and thus depend on an\ninstalled Python interpreter."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Rucio release"}),(0,s.jsx)(t.th,{children:"Supported python versions"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/release-notes/1.29.0",children:"1.29 LTS"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:">=3.6, <=3.9"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["from ",(0,s.jsx)(t.a,{href:"/release-notes/32.0.0",children:"32 LTS"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:">=3.9, <=3.10"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"database",children:"Database"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Database"}),(0,s.jsx)(t.th,{children:"Supported version"}),(0,s.jsx)(t.th,{children:"Note"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"SQLite"}),(0,s.jsx)(t.td,{children:"3+"}),(0,s.jsx)(t.td,{children:"For testing only"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"MySQL"}),(0,s.jsx)(t.td,{children:"8"}),(0,s.jsx)(t.td,{children:"No support for SSH public key authentication"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PostgreSQL"}),(0,s.jsx)(t.td,{children:"12 and higher"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Oracle"}),(0,s.jsx)(t.td,{children:"19c"}),(0,s.jsx)(t.td,{})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function d(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);