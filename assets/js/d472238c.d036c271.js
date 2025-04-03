"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36362],{6987:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"sig_qualityofservice","title":"SIG Quality of Service","description":"Objective","source":"@site/../docs/sig_qualityofservice.md","sourceDirName":".","slug":"/sig_qualityofservice","permalink":"/documentation/sig_qualityofservice","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/sig_qualityofservice.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1743711841000,"frontMatter":{"id":"sig_qualityofservice","title":"SIG Quality of Service"}}');var s=i(74848),o=i(28453);const r={id:"sig_qualityofservice",title:"SIG Quality of Service"},c=void 0,a={},l=[{value:"Objective",id:"objective",level:2},{value:"End-Date",id:"end-date",level:2},{value:"Means to achieve the objective",id:"means-to-achieve-the-objective",level:2},{value:"Convener",id:"convener",level:2}];function h(e){const t={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"objective",children:"Objective"}),"\n",(0,s.jsx)(t.p,{children:"The purpose of this SIG is to allow a RSE handle in an automatic manner storage\nwith two different qualitiy of services based on access latency. Initial work in\nthis area differentiates between disk and tape within the same RSE. New data files\nare initially pinned on disk either for the lifetime of the rule or up to the\nmaximum set by the storage site. After the pin expires the local storage system is\nfree to stage the file to tape for further access. When Rucio needs to access such\nfiles again, the bring on line command is given to the RSE and the file is\ntransferred from tape to disk if needed. Currently this is being tested with dCache.\nIn the future, it can be extended to other storage systems where appropriate.\nAt the end of this SIG a report will be written documenting the outcome/benefit of this\nactivity."}),"\n",(0,s.jsx)(t.h2,{id:"end-date",children:"End-Date"}),"\n",(0,s.jsx)(t.p,{children:"End of 2023"}),"\n",(0,s.jsx)(t.h2,{id:"means-to-achieve-the-objective",children:"Means to achieve the objective"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Mattermost channel: ",(0,s.jsx)(t.a,{href:"https://mattermost.web.cern.ch/rucio/channels/QoS",children:"#QoS"})]}),"\n",(0,s.jsxs)(t.li,{children:["eMail list: ",(0,s.jsx)(t.a,{href:"mailto:rucio-sig-qos@cern.ch",children:"rucio-sig-qos@cern.ch"})]}),"\n",(0,s.jsxs)(t.li,{children:["biweekly meetings with interested communities either over Zoom or asynchronously\nover Mattermost.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://indico.cern.ch/category/14213/",children:"Meeting series in Indico"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://codimd.web.cern.ch/MfDv9yRMQmOrwGEwhlGXpQ#",children:"Meeting notes"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"convener",children:"Convener"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"mailto:douglas.benjamin@cern.ch",children:"Doug Benjamin"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);