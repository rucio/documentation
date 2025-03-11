"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1804],{28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var s=n(96540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}},77386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"started/additional_layers_and_resources","title":"Additional Layers and Resources","description":"In addition to the four main layers, we have the storage","source":"@site/../docs/started/additional_layers_and_resources.md","sourceDirName":"started","slug":"/started/additional_layers_and_resources","permalink":"/documentation/started/additional_layers_and_resources","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/additional_layers_and_resources.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1741706049000,"frontMatter":{"id":"additional_layers_and_resources","title":"Additional Layers and Resources"},"sidebar":"docs","previous":{"title":"Main Components","permalink":"/documentation/started/main_components"},"next":{"title":"Requirements","permalink":"/documentation/started/requirements"}}');var a=n(74848),r=n(28453);const o={id:"additional_layers_and_resources",title:"Additional Layers and Resources"},i=void 0,d={},l=[];function c(e){const t={a:"a",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In addition to the four ",(0,a.jsx)(t.a,{href:"/documentation/started/main_components",children:"main layers"}),", we have the storage\nresources & transfer tools, as well as the underlying persistent layers. These\nare represented in the architecture diagram by the different ",(0,a.jsx)(t.em,{children:"queuing systems"}),",\n",(0,a.jsx)(t.em,{children:"transactional"})," relational databases, & ",(0,a.jsx)(t.em,{children:"analytics"})," storage on non-relational\ndatabases."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Storage & Transfer Tools layer"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The Storage layer is responsible for the various interactions with different\ngrid middleware tools & storage systems. The transfer tool interface is a\nfeature of Rucio that enables the daemons to submit, query, and cancel transfers\ngenerically & independently from the actual transfer service being used."}),"\n",(0,a.jsx)(t.p,{children:"This layer is not a software that resides in a datacenter but is more\nrepresentative of the various abstractions in a storage system. It can be\nconfigured dynamically & centrally to suite requirements."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Persistence Layer"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["This is the layer responsible for keeping all the data & application states for\nall daemons. Also known as the ",(0,a.jsx)(t.strong,{children:"catalog"}),", it requires a transactional\ndatabase."]}),"\n",(0,a.jsx)(t.p,{children:"The persistence layer supports many different types of transactions relational\ndatabase management systems such as SQLite, MySQL, PostgreSQL, or Oracle. Both\nupgrading & downgrading of the database schema are supported."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);