"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[325],{58732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"operator/transfers/transfers-submitter","title":"Transfers Submitter","description":"The conveyor-submitter (transfer submitter) is the rucio daemon in charge","source":"@site/../docs/operator/transfers/transfers_submitter.md","sourceDirName":"operator/transfers","slug":"/operator/transfers/transfers-submitter","permalink":"/documentation/operator/transfers/transfers-submitter","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/transfers_submitter.md","tags":[],"version":"current","lastUpdatedBy":"Dimitris Xenakis","lastUpdatedAt":1738833652000,"frontMatter":{"id":"transfers-submitter","title":"Transfers Submitter"},"sidebar":"docs","previous":{"title":"Transfers Throttler","permalink":"/documentation/operator/transfers/transfers-throttler"},"next":{"title":"Configure Rucio To Use Globus Online as a Transfer Tool","permalink":"/documentation/operator/transfers/configure-rucio-globus"}}');var s=r(74848),o=r(28453);const i={id:"transfers-submitter",title:"Transfers Submitter"},a=void 0,c={},l=[];function u(e){const t={code:"code",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"conveyor-submitter"})," (transfer submitter) is the rucio daemon in charge\nof submitting transfers for execution by an external third-party-copy\ntrasfertool. As input, it gets the transfer requests in ",(0,s.jsx)(t.code,{children:"queued"})," state and\nperforms multiple tasks on them with the end goal of submitting the actual\ntransfer to one or more transfertools."]}),"\n",(0,s.jsx)(t.p,{children:"Historically, submitter was the main entry point into the transfer machinery\ninstead of the preparer. Because of that, many old rucio installations don't\nrun the preparer daemon. To allow running in such configuration, submitter\nautomatically detects if preparer is running and, if it's not running, will\nperform the \"Source replica selection\". See the preparer documentation for more\ndetails."}),"\n",(0,s.jsx)(t.p,{children:"The Submitter:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"(if preparer is not running) selects the source replica"}),"\n",(0,s.jsx)(t.li,{children:"computes the path for the selected replica"}),"\n",(0,s.jsx)(t.li,{children:"checks transfertool-specific RSE attributes"}),"\n",(0,s.jsx)(t.li,{children:"creates intermediate hops for multi-hop transfers"}),"\n",(0,s.jsx)(t.li,{children:"generates the full URIs to be used by the transfertool"}),"\n",(0,s.jsx)(t.li,{children:"performs the actual submission of the transfer"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If the configuration value ",(0,s.jsx)(t.code,{children:"conveyor/filter_transfertool"})," is set, submitter\nwill only work on transfers having the ",(0,s.jsx)(t.code,{children:"transfertool"})," attribute set to the\ncorrect value. This database field is filled by the preparer, so preparer is\nrequired for multi-transfertool deployments."]}),"\n",(0,s.jsxs)(t.p,{children:["To verify if a path cen be submitted by any of the transfertools configured\nin ",(0,s.jsx)(t.code,{children:"conveyor/transfertool"}),", transfertool-specific RSE attributes are used. For\nexample, the fts3 transfertool requires an ",(0,s.jsx)(t.code,{children:"fts"})," RSE attribute with a list of\nfts servers; while the globus transfertool requires the ",(0,s.jsx)(t.code,{children:"globus_endpoint_id"}),"\nattribute on both source and destination RSE."]}),"\n",(0,s.jsx)(t.p,{children:"If a path can be submitted, all missing hops are created into the database,\nand submitter goes to the submission step, which is straightforward and\nconsists of calling the transfertool with the correct arguments."})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);