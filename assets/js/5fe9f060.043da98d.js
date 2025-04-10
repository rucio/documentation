"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6796],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}},44480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"bin/rucio-kronos","title":"rucio-kronos","description":"","source":"@site/../docs/bin/rucio-kronos.md","sourceDirName":"bin","slug":"/bin/rucio-kronos","permalink":"/documentation/bin/rucio-kronos","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-kronos.md","tags":[],"version":"current","frontMatter":{"title":"rucio-kronos"},"sidebar":"docs","previous":{"title":"rucio-judge-repairer","permalink":"/documentation/bin/rucio-judge-repairer"},"next":{"title":"rucio-minos-temporary-expiration","permalink":"/documentation/bin/rucio-minos-temporary-expiration"}}');var r=t(74848),s=t(28453);const i={title:"rucio-kronos"},c=void 0,a={},u=[];function d(e){const n={code:"code",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"usage: rucio-kronos [-h] [--threads THREADS]\n                    [--sleep-time-files SLEEP_TIME_FILES]\n                    [--sleep-time-datasets SLEEP_TIME_DATASETS]\n\nKronos is a daemon that consume tracer massages and update the replica\naccessed time accordingly.\n\noptions:\n  -h, --help            show this help message and exit\n  --threads THREADS     Concurrency control: number of threads\n  --sleep-time-files SLEEP_TIME_FILES\n                        Seconds to sleep between two cycles for the file\n                        thread\n  --sleep-time-datasets SLEEP_TIME_DATASETS\n                        Seconds to sleep between two cycles for the dataset\n                        thread\n"})})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);