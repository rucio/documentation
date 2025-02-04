"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2384],{80395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"operator/transfers/transfers-throttler","title":"Transfers Throttler","description":"As the name suggests, conveyor-throttler (transfer throttler) is used to","source":"@site/../docs/operator/transfers/transfers_throttler.md","sourceDirName":"operator/transfers","slug":"/operator/transfers/transfers-throttler","permalink":"/documentation/operator/transfers/transfers-throttler","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/transfers_throttler.md","tags":[],"version":"current","lastUpdatedBy":"Martin Barisits","lastUpdatedAt":1738683408000,"frontMatter":{"id":"transfers-throttler","title":"Transfers Throttler"},"sidebar":"docs","previous":{"title":"Transfers Preparer","permalink":"/documentation/operator/transfers/transfers-preparer"},"next":{"title":"Transfers Submitter","permalink":"/documentation/operator/transfers/transfers-submitter"}}');var s=r(74848),o=r(28453);const i={id:"transfers-throttler",title:"Transfers Throttler"},a=void 0,l={},c=[];function d(e){const t={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["As the name suggests, ",(0,s.jsx)(t.code,{children:"conveyor-throttler"})," (transfer throttler) is used to\nprotect the transfertools from overload by limiting the number of submitter\ntransfers at any particular moment of time."]}),"\n",(0,s.jsx)(t.p,{children:"Preparer is required to be able to run throttler. See the preparer documentation\non how to activate it."}),"\n",(0,s.jsx)(t.p,{children:"The rucio administrator must manually configure throttling rules.  As of time\nof writing, there is no CLI option in rucio-admin to do it. Rules have to be\nadded using the rucio core functions directly from a rucio node."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Warning"}),": only set transfer limits if throttler is running. Otherwise,\npreparer will transition transfers to the ",(0,s.jsx)(t.code,{children:"waiting"})," state, but nobody will\nconsume the queue of waiting transfers. Leading to these transfers never\nbeing executed."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from rucio.core.request import set_transfer_limit, list_transfer_limits\n\nlist(list_transfer_limits())\nset_transfer_limit("RSE1", max_transfers=100)\n'})}),"\n",(0,s.jsx)(t.p,{children:"The previous code snippet will create (or update) the 'destination' throttling\nrule for transfers towards RSE1. A maximum of 100 transfers will be allowed\nat a time towards RSE1. Note that \"RSE1\" here is an RSE expression, not\na name, complex RSE expressions can be used in rules. If more than one rule\napplies to a specific RSE, the more restrictive condition applies."}),"\n",(0,s.jsx)(t.p,{children:"Throttler supports some advanced throttler techniques. Some of them are:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"source throttling"}),"\n",(0,s.jsx)(t.li,{children:"grouping of files from the same dataset together (grouped_fifo strategy)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These techniques can be costly on the database and were not extensively tested.\nThe only technique we use in production is destination throttling."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>a});var n=r(96540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);