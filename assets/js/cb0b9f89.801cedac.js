"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1730],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(96540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}},55818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"bin/rucio-transmogrifier","title":"rucio-transmogrifier","description":"","source":"@site/../docs/bin/rucio-transmogrifier.md","sourceDirName":"bin","slug":"/bin/rucio-transmogrifier","permalink":"/documentation/bin/rucio-transmogrifier","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-transmogrifier.md","tags":[],"version":"current","frontMatter":{"title":"rucio-transmogrifier"},"sidebar":"docs","previous":{"title":"rucio-storage-consistency-actions","permalink":"/documentation/bin/rucio-storage-consistency-actions"},"next":{"title":"rucio-undertaker","permalink":"/documentation/bin/rucio-undertaker"}}');var o=t(74848),i=t(28453);const s={title:"rucio-transmogrifier"},c=void 0,a={},u=[];function d(e){const n={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'usage: rucio-transmogrifier [-h] [--run-once] [--threads THREADS]\n                            [--bulk BULK] [--sleep-time SLEEP_TIME]\n\nThe Transmogrifier daemon is responsible for the creation of replication rules for DIDs matching a subscription.\n\noptions:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep between two cycles\n\nCreate a DID::\n\n  $ python\n  from rucio.core.did import add_did\n  from rucio.db.sqla.constants import DIDType\n  add_did(scope=\'mock\', name=\'test\', type=DIDType.DATASET, account=\'root\', meta={\'project\': \'test_project\'})\n\nCreate a subscription that matches the DID::\n\n  $ rucio-admin subscription add test \'{"scope": ["mock"], "project": ["test_project"]}\' \'[{"copies": 1, "rse_expression": "MOCK", "activity": "User Subscriptions"}]\' \'df\'\n\nCheck if there are rules for the DID::\n\n  $ rucio list-rules mock:test\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n\nRun the daemon::\n\n  $ rucio-transmogrifier --run-once\n\nCheck again if there are rules for the DID::\n\n  $ rucio list-rules mock:test\n  ID                                ACCOUNT    SCOPE:NAME    STATE[OK/REPL/STUCK]    RSE_EXPRESSION      COPIES  EXPIRES (UTC)    CREATED (UTC)\n  --------------------------------  ---------  ------------  ----------------------  ----------------  --------  ---------------  -------------------\n  e658f6f47f444326aad624dabef7b785  root       mock:test     OK[0/0/0]               MOCK                     1                   2018-12-03 14:01:19\n    \n'})})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);