"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46431],{1583:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>c,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"release-notes/1.18.1","title":"1.18.1","description":"General","source":"@site/../docs/release-notes/1.18.1.md","sourceDirName":"release-notes","slug":"/release-notes/1.18.1","permalink":"/documentation/release-notes/1.18.1","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.1.md","tags":[],"version":"current","frontMatter":{"title":"1.18.1"}}');var t=n(74848),r=n(28453);const c={title:"1.18.1"},l=void 0,o={},h=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3},{value:"Bugs",id:"bugs-2",level:3}];function u(e){const s={a:"a",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Transfers: Don't send checksum to FTS if verify_checksum is disabled ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1522",children:"#1522"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Site attribute check for lan/wan selection needs to be optional ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1528",children:"#1528"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Wrong handling of RSE restriction which crashes judge-repairer ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1551",children:"#1551"})]}),"\n",(0,t.jsxs)(s.li,{children:["Life time model: Python exception when specifying an ID to list_exceptions() ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1561",children:"#1561"})]}),"\n",(0,t.jsxs)(s.li,{children:["Life time model: Cannot update the state of lifetime exceptions with multiple datasets ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1569",children:"#1569"})]}),"\n",(0,t.jsxs)(s.li,{children:["Testing: testcase for signatures broken with memcached ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1590",children:"#1590"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: New option for rucio list-rse-usage to list usage per account ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1218",children:"#1218"})]}),"\n",(0,t.jsxs)(s.li,{children:["Clients: Possibility to filter collection on empty state ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1273",children:"#1273"})]}),"\n",(0,t.jsxs)(s.li,{children:["Clients: Client should force xrdcp for zip content streaming ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1559",children:"#1559"})]}),"\n",(0,t.jsxs)(s.li,{children:["Clients: Resolve archives per default in clients ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1560",children:"#1560"})]}),"\n",(0,t.jsxs)(s.li,{children:["Clients: rucio list-dids -h should expose the list of available options ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/509",children:"#509"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: wrong error message in clients ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1223",children:"#1223"})]}),"\n",(0,t.jsxs)(s.li,{children:["Clients: Client fails if auth type is x509_proxy and X509_USER_PROXY is not set ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1579",children:"#1579"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"webui",children:"WebUI"}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-2",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["WebUI: Summary page for used quotas for users ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/50",children:"#50"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs-2",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["WebUI: Problems with accessing the REST API and the WebUI in the development docker container ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1516",children:"#1516"})]}),"\n",(0,t.jsxs)(s.li,{children:["WebUI: Wrong z-index affecting top-bar drop-down menu ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1555",children:"#1555"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var i=n(96540);const t={},r=i.createContext(t);function c(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);