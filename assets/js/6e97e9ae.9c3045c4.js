"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5868],{19939:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=o(74848),i=o(28453);const r={id:"qos_rse_config",title:"QoS RSE Configuration"},s=void 0,a={id:"operator/qos_rse_config",title:"QoS RSE Configuration",description:"QoS RSE Configuration",source:"@site/../docs/operator/qos_rse_config.md",sourceDirName:"operator",slug:"/operator/qos_rse_config",permalink:"/documentation/operator/qos_rse_config",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/qos_rse_config.md",tags:[],version:"current",lastUpdatedBy:"garciagenrique",lastUpdatedAt:1721294164e3,frontMatter:{id:"qos_rse_config",title:"QoS RSE Configuration"},sidebar:"docs",previous:{title:"S3 Storage Configuration",permalink:"/documentation/operator/s3_rse_config"},next:{title:"Notifications",permalink:"/documentation/operator/notifications"}},c={},l=[{value:"QoS RSE Configuration",id:"qos-rse-configuration",level:2},{value:"How to Configure an RSE for QoS",id:"how-to-configure-an-rse-for-qos",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"qos-rse-configuration",children:"QoS RSE Configuration"}),"\n",(0,t.jsx)(n.p,{children:"The following steps show how to configure an RSE to use the Rucio storage-managed QoS feature (with two classes, disk-buffer and tape).  Rucio now supports a site's ability to set how long data lives on a tape or disk-buffer at the RSE level.  Data is pinned with a value (in seconds) at the time of injection/creation/buffering allowing data site operators to better tune data persistence and movement."}),"\n",(0,t.jsx)(n.h3,{id:"how-to-configure-an-rse-for-qos",children:"How to Configure an RSE for QoS"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set the following RSE attributes:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"staging_required: True\nmaximum_pin_lifetime: 345600 (in seconds)\nstaging_buffer: {{value}} # this value can be the name of the RSE.\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Upon executing ",(0,t.jsx)(n.code,{children:"rucio-admin rse info <RSE>"})," command one should see something like the following in settings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"                                .\n                                .\nAttributes:\n===========\n  maximum_pin_lifetime: 345600\n  staging_buffer: <RSE>\n  staging_required: True\n                                .\n                                .\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Either values of ",(0,t.jsx)(n.code,{children:"DISK"})," or ",(0,t.jsx)(n.code,{children:"TAPE"})," are supported for the RSE setting ",(0,t.jsx)(n.code,{children:"rse_type"}),".  However workflows using PanDA job brokerage require this value to be ",(0,t.jsx)(n.code,{children:"DISK"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Upon executing ",(0,t.jsx)(n.code,{children:"rucio-admin rse info <RSE>"})," command one should see something like the following in settings:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"                                .\n                                .\nSettings:\n=========\n  rse: <RSE>\n  rse_type: DISK\n                                .\n                                .\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);