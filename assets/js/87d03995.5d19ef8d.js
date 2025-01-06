"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6498],{31813:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"release-notes/1.18.3","title":"1.18.3","description":"General","source":"@site/../docs/release-notes/1.18.3.md","sourceDirName":"release-notes","slug":"/release-notes/1.18.3","permalink":"/documentation/release-notes/1.18.3","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.3.md","tags":[],"version":"current","frontMatter":{"title":"1.18.3"}}');var r=n(74848),t=n(28453);const o={title:"1.18.3"},c=void 0,l={},u=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Bugs",id:"bugs-2",level:3}];function h(e){const s={a:"a",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Transfers: Change conveyors to heartbeat ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/58",children:"#58"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Propagate the size of the file when declaring bad file ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1610",children:"#1610"})]}),"\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Expose the number of files on an RSE ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1651",children:"#1651"})]}),"\n",(0,r.jsxs)(s.li,{children:["Documentation: Add comments to transmogrifier code ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1527",children:"#1527"})]}),"\n",(0,r.jsxs)(s.li,{children:["Documentation: Document AllowEncodedSlashes ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1601",children:"#1601"})]}),"\n",(0,r.jsxs)(s.li,{children:["Probes & Alarms: ATLAS: Dynamically change the list of SCRATCHDISK endpoints used for 2nd replication ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1625",children:"#1625"})]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Core & Internals: Typo in oracle version check ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1639",children:"#1639"})]}),"\n",(0,r.jsxs)(s.li,{children:["Functional tests: automatix broken due to new rsemgr.upload function ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1582",children:"#1582"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Timeout exceptions from FTS not properly handled ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1411",children:"#1411"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: group-policy option is not propagated properly to the conveyor ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1624",children:"#1624"})]}),"\n",(0,r.jsxs)(s.li,{children:["Transfers: Unhandled exception in conveyor submitter ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/961",children:"#961"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,r.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Clients: rucio list-dids --recursive does not work ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/65",children:"#65"})]}),"\n",(0,r.jsxs)(s.li,{children:["Clients: Undefined name 'result' in def info_rule ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/997",children:"#997"})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"webui",children:"WebUI"}),"\n",(0,r.jsx)(s.h3,{id:"bugs-2",children:"Bugs"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["WebUI: add protocol button on WebUI does not work ",(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1600",children:"#1600"})]}),"\n",(0,r.jsxs)(s.li,{children:['WebUI: Searching for a DID shows "Could not find the DID" but did was found ',(0,r.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1619",children:"#1619"})]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var i=n(96540);const r={},t=i.createContext(r);function o(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);