"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27071],{28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>c});var i=n(96540);const t={},r=i.createContext(t);function l(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:s},e.children)}},63672:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"release-notes/1.28.4","title":"1.28.4","description":"General","source":"@site/../docs/release-notes/1.28.4.md","sourceDirName":"release-notes","slug":"/release-notes/1.28.4","permalink":"/documentation/release-notes/1.28.4","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.4.md","tags":[],"version":"current","frontMatter":{"title":"1.28.4"}}');var t=n(74848),r=n(28453);const l={title:"1.28.4"},c=void 0,o={},h=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}];function u(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(s.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Deletion: Re-factor/cleanup deletion workflow ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5442",children:"#5442"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Add ",(0,t.jsx)(s.code,{children:"session"})," object to API layer ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5439",children:"#5439"})]}),"\n",(0,t.jsxs)(s.li,{children:["Deletion: temporary tables should not be used on right side of joins ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5528",children:"#5528"})]}),"\n",(0,t.jsxs)(s.li,{children:["Deletion: investigate/fix oidc authentication in reaper ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5538",children:"#5538"})]}),"\n",(0,t.jsxs)(s.li,{children:["Life time model: CLI can\u2019t handle input files with more than 1000 datasets ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5479",children:"#5479"})]}),"\n",(0,t.jsxs)(s.li,{children:["Recovery: Fixes in bad_replicas workflow ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5477",children:"#5477"})]}),"\n",(0,t.jsxs)(s.li,{children:["Testing: Belle II : Add Belle II tests ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/4864",children:"#4864"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Deletion: Reaper can loop up to 1000 times when called on a single RSE ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5198",children:"#5198"})]}),"\n",(0,t.jsxs)(s.li,{children:["Deletion: reaper busy-looping over rses with greedyDeletion even if nothing to delete ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5549",children:"#5549"})]}),"\n",(0,t.jsxs)(s.li,{children:["Recovery: Many database queries caused by necromancer ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5545",children:"#5545"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: Preparer sleeping even if the backlog is not empty ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5502",children:"#5502"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsx)(s.h3,{id:"features-1",children:"Features"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: Option to change replica sort algorithm in download client ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5355",children:"#5355"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: Force scheme in protocols for delete operations in UploadClient ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5507",children:"#5507"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: rucio get doesn't show summary anymore ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/5250",children:"#5250"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"webui",children:"WebUI"}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-2",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["WebUI: Improvements in the Lifetime Model pages ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/1923",children:"#1923"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}}}]);