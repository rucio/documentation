"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6880],{66302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"started/what_is_rucio","title":"What is Rucio?","description":"Rucio enables centralized management of large volumes of data backed by many","source":"@site/../docs/started/what_is_rucio.md","sourceDirName":"started","slug":"/started/what_is_rucio","permalink":"/documentation/started/what_is_rucio","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/what_is_rucio.md","tags":[],"version":"current","lastUpdatedBy":"Luis Antonio Obis Aparicio","lastUpdatedAt":1737101861000,"frontMatter":{"id":"what_is_rucio","title":"What is Rucio?"},"sidebar":"docs","previous":{"title":"Before you get started","permalink":"/documentation/started/before_you_get_started"},"next":{"title":"Main Components","permalink":"/documentation/started/main_components"}}');var o=n(74848),i=n(28453);const s={id:"what_is_rucio",title:"What is Rucio?"},r=void 0,c={},d=[{value:"History",id:"history",level:2},{value:"What can Rucio do",id:"what-can-rucio-do",level:2},{value:"What Rucio doesn&#39;t do",id:"what-rucio-doesnt-do",level:2}];function l(e){const t={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Rucio enables centralized management of large volumes of data backed by many\nheterogeneous storage backends."}),"\n",(0,o.jsx)(t.p,{children:"Data is physically distributed over a large number of storage servers, potentially\neach relying on different storage technologies (SSD/Disk/Tape/Object storage) and,\nfrequently, managed by different teams of system administrators."}),"\n",(0,o.jsx)(t.p,{children:"Rucio builds on top of this heterogeneous infrastructure and provides an interface\nwhich allows users to interact with the storage backends in a unified way.\nThe smallest operational unit in Rucio is a file. Rucio enables users to upload,\ndownload, and declaratively manage groups of such files."}),"\n",(0,o.jsx)(t.p,{children:'Declarative management is the power of Rucio, as it allows the user to define\nhigh-level rules such as "Keep 3 copies, on 2 different continents".\nIf one copy is lost, it will be automatically re-constructed on a different storage\nserver to enforce the configured rules.'}),"\n",(0,o.jsx)(t.h2,{id:"history",children:"History"}),"\n",(0,o.jsxs)(t.p,{children:["Rucio was developed as a replacement for the Don Quijote (DQ2) data management\nsystem. Even if DQ2 has demonstrated very large scale data management capabilities,\nthe ",(0,o.jsx)(t.strong,{children:"ATLAS Distributed Data Management System"})," used for ",(0,o.jsx)(t.strong,{children:"HEP\nexperiments at CERN"})," had reached its limits in terms of scalability. The\nprimary concerns were"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"the requirement of a large number of support staff to operate."}),"\n",(0,o.jsx)(t.li,{children:"difficulty in interfacing with new technologies"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To address these very scaling requirements for HEP experiments, ",(0,o.jsx)(t.strong,{children:"Rucio"})," as a\nDistributed Data Management System, was developed. Drawing benefits from\nadvances in Cloud & Big Data computations, it relies on a conceptual data model\nto ensure system stability. Dataflow autonomy and automation are the key design\nprinciples guiding the development of Rucio. To reduce the operational overheads\nof the support staff, it employs an automation framework and also accounts for\nnewer use cases & user requirements in high energy physics and beyond."]}),"\n",(0,o.jsx)(t.h2,{id:"what-can-rucio-do",children:"What can Rucio do"}),"\n",(0,o.jsx)(t.p,{children:"The capabilities of Rucio are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Storage of detector data, simulator data, and user data"}),"\n",(0,o.jsx)(t.li,{children:"Unified interfacing of heterogenous network & storage infrastructure"}),"\n",(0,o.jsx)(t.li,{children:"Support for newer protocols in Storage & Network using plugins"}),"\n",(0,o.jsx)(t.li,{children:"Data Recovery"}),"\n",(0,o.jsx)(t.li,{children:"Adaptive Replication"}),"\n",(0,o.jsx)(t.li,{children:"Quota management"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"what-rucio-doesnt-do",children:"What Rucio doesn't do"}),"\n",(0,o.jsx)(t.p,{children:"Rucio doesn't automatically create the storage backends. The storage servers must\nbe created and configured, in advance, with one of the supported access protocols\n(webdav/s3/sftp/xrootd/...), then configured in Rucio."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(96540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);