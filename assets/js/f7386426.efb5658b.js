"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63941],{28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>s});var r=n(96540);const t={},c=r.createContext(t);function i(e){const o=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:o},e.children)}},39465:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"bin/rucio-conveyor-receiver","title":"rucio-conveyor-receiver","description":"","source":"@site/../docs/bin/rucio-conveyor-receiver.md","sourceDirName":"bin","slug":"/bin/rucio-conveyor-receiver","permalink":"/documentation/bin/rucio-conveyor-receiver","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-receiver.md","tags":[],"version":"current","frontMatter":{"title":"rucio-conveyor-receiver"},"sidebar":"docs","previous":{"title":"rucio-conveyor-preparer","permalink":"/documentation/bin/rucio-conveyor-preparer"},"next":{"title":"rucio-conveyor-stager","permalink":"/documentation/bin/rucio-conveyor-stager"}}');var t=n(74848),c=n(28453);const i={title:"rucio-conveyor-receiver"},s=void 0,a={},u=[];function l(e){const o={code:"code",pre:"pre",...(0,c.R)(),...e.components};return(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"usage: rucio-conveyor-receiver [-h] [--run-once]\n                               [--total-threads TOTAL_THREADS]\n\nConveyor is a daemon to manage file transfers. The conveyor-receiver is\nsimilar to conveyor-poller, but instead of poll the transfer tool, conveyor-\nreceiver gets knowledge about the state of submitted transfers by listening to\nthe transfer tool messages.\n\noptions:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-threads TOTAL_THREADS\n                        Concurrency control: total number of threads per\n                        process\n"})})}function d(e={}){const{wrapper:o}={...(0,c.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);