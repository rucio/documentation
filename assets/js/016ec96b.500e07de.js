"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9085],{91524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"bin/rucio-undertaker","title":"rucio-undertaker","description":"","source":"@site/../docs/bin/rucio-undertaker.md","sourceDirName":"bin","slug":"/bin/rucio-undertaker","permalink":"/documentation/bin/rucio-undertaker","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-undertaker.md","tags":[],"version":"current","frontMatter":{"title":"rucio-undertaker"},"sidebar":"docs","previous":{"title":"rucio-transmogrifier","permalink":"/documentation/bin/rucio-transmogrifier"},"next":{"title":"rucio","permalink":"/documentation/bin/rucio"}}');var i=t(74848),o=t(28453);const c={title:"rucio-undertaker"},s=void 0,a={},u=[];function d(e){const n={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"usage: rucio-undertaker [-h] [--run-once] [--total-workers TOTAL_WORKERS]\n                        [--chunk-size CHUNK_SIZE] [--sleep-time SLEEP_TIME]\n\nThe Undertaker daemon is responsible for managing expired DIDs. It deletes DIDs, but not replicas by checking if there are DIDs where the 'expired_at' date property is older than the current timestamp.\n\noptions:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-workers TOTAL_WORKERS\n                        Total number of workers\n  --chunk-size CHUNK_SIZE\n                        Chunk size\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n\nCreate a DID that is already expired by setting its lifetime to -1::\n\n  $ python\n  from rucio.db.sqla.constants import DIDType\n  from rucio.client.didclient import DIDClient\n  client = DIDClient()\n  client.add_did(scope='mock', name='test', type=DIDType.DATASET, lifetime=-1)\n\nCheck if the DID exists::\n\n  $ rucio list-dids mock:test\n  +--------------+--------------+\n  | SCOPE:NAME   | [DID TYPE]   |\n  |--------------+--------------|\n  | mock:test    | DATASET      |\n  +--------------+--------------+\n\nRun the daemon::\n\n  $ rucio-undertaker --run-once\n\nCheck if the DID exists::\n\n  $ rucio list-dids mock:test\n  +--------------+--------------+\n  | SCOPE:NAME   | [DID TYPE]   |\n  |--------------+--------------|\n  +--------------+--------------+\n"})})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>s});var r=t(96540);const i={},o=r.createContext(i);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);