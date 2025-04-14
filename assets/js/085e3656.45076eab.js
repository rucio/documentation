"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25303],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},39391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"release-notes/1.15.4","title":"1.15.4","description":"Upgrade instructions","source":"@site/../docs/release-notes/1.15.4.md","sourceDirName":"release-notes","slug":"/release-notes/1.15.4","permalink":"/documentation/release-notes/1.15.4","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.15.4.md","tags":[],"version":"current","frontMatter":{"title":"1.15.4"}}');var i=t(74848),r=t(28453);const o={title:"1.15.4"},c=void 0,l={},a=[{value:"Upgrade instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"upgrade-instructions",children:"Upgrade instructions"}),"\n",(0,i.jsxs)(n.p,{children:["The conveyor now uses the protocol operation attribute ",(0,i.jsx)(n.code,{children:"third_party_copy"})," to rank the source and destination protocol for a site to site transfer. Previously the attributes ",(0,i.jsx)(n.code,{children:"read"})," and ",(0,i.jsx)(n.code,{children:"write"})," were used for this. Please adapt this ranking attribute accordingly."]}),"\n",(0,i.jsx)(n.h2,{id:"general",children:"General"}),"\n",(0,i.jsx)(n.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Core & Internals: rucio-judge-cleaner traceback against postgres ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/722",children:"#722"})]}),"\n",(0,i.jsxs)(n.li,{children:["Core & Internals: Keyword parameters should always be used for instansiating datetime.timedelta ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/807",children:"#807"})]}),"\n",(0,i.jsxs)(n.li,{children:["Documentation: Add external link for ActiveMQ for people joining the project ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/1001",children:"#1001"})]}),"\n",(0,i.jsxs)(n.li,{children:["Documentation: Typographical Review of Documentation Files ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/985",children:"#985"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: Add python3 in the rucio dev docker image ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/973",children:"#973"})]}),"\n",(0,i.jsxs)(n.li,{children:["Transfers: Move conveyor transfers to third_party_copy_operation ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/535",children:"#535"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"clients",children:"Clients"}),"\n",(0,i.jsx)(n.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Clients: section policy/support/rucio_support missing in rucio.cfg template and tests ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/976",children:"#976"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"bugs",children:"Bugs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Clients: Error with python3: the JSON object must be str, not 'bytes' ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/964",children:"#964"})]}),"\n",(0,i.jsxs)(n.li,{children:["Clients: Client AttributeError when the server returns nothing ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/965",children:"#965"})]}),"\n",(0,i.jsxs)(n.li,{children:["Release management: setup_clients.py classifiers needs to be a list, not tuples ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/949",children:"#949"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);