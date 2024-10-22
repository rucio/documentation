"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6362],{95456:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=i(74848),s=i(28453);const o={id:"sig_qualityofservice",title:"SIG Quality of Service"},r=void 0,c={id:"sig_qualityofservice",title:"SIG Quality of Service",description:"Objective",source:"@site/../docs/sig_qualityofservice.md",sourceDirName:".",slug:"/sig_qualityofservice",permalink:"/documentation/sig_qualityofservice",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/sig_qualityofservice.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1729601659e3,frontMatter:{id:"sig_qualityofservice",title:"SIG Quality of Service"}},a={},l=[{value:"Objective",id:"objective",level:2},{value:"End-Date",id:"end-date",level:2},{value:"Means to achieve the objective",id:"means-to-achieve-the-objective",level:2},{value:"Convener",id:"convener",level:2}];function h(e){const t={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"objective",children:"Objective"}),"\n",(0,n.jsx)(t.p,{children:"The purpose of this SIG is to allow a RSE handle in an automatic manner storage\nwith two different qualitiy of services based on access latency. Initial work in\nthis area differentiates between disk and tape within the same RSE. New data files\nare initially pinned on disk either for the lifetime of the rule or up to the\nmaximum set by the storage site. After the pin expires the local storage system is\nfree to stage the file to tape for further access. When Rucio needs to access such\nfiles again, the bring on line command is given to the RSE and the file is\ntransferred from tape to disk if needed. Currently this is being tested with dCache.\nIn the future, it can be extended to other storage systems where appropriate.\nAt the end of this SIG a report will be written documenting the outcome/benefit of this\nactivity."}),"\n",(0,n.jsx)(t.h2,{id:"end-date",children:"End-Date"}),"\n",(0,n.jsx)(t.p,{children:"End of 2023"}),"\n",(0,n.jsx)(t.h2,{id:"means-to-achieve-the-objective",children:"Means to achieve the objective"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Mattermost channel: ",(0,n.jsx)(t.a,{href:"https://mattermost.web.cern.ch/rucio/channels/QoS",children:"#QoS"})]}),"\n",(0,n.jsxs)(t.li,{children:["eMail list: ",(0,n.jsx)(t.a,{href:"mailto:rucio-sig-qos@cern.ch",children:"rucio-sig-qos@cern.ch"})]}),"\n",(0,n.jsxs)(t.li,{children:["biweekly meetings with interested communities either over Zoom or asynchronously\nover Mattermost.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://indico.cern.ch/category/14213/",children:"Meeting series in Indico"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://codimd.web.cern.ch/MfDv9yRMQmOrwGEwhlGXpQ#",children:"Meeting notes"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"convener",children:"Convener"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"mailto:douglas.benjamin@cern.ch",children:"Doug Benjamin"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>c});var n=i(96540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);