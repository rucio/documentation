"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[410],{86259:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var c=t(74848),o=t(28453);const a={title:"rucio-abacus-account"},u=void 0,r={id:"bin/rucio-abacus-account",title:"rucio-abacus-account",description:"",source:"@site/../docs/bin/rucio-abacus-account.md",sourceDirName:"bin",slug:"/bin/rucio-abacus-account",permalink:"/documentation/bin/rucio-abacus-account",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-abacus-account.md",tags:[],version:"current",frontMatter:{title:"rucio-abacus-account"},sidebar:"docs",previous:{title:"Notifications",permalink:"/documentation/operator/notifications"},next:{title:"rucio-abacus-collection-replica",permalink:"/documentation/bin/rucio-abacus-collection-replica"}},i={},s=[];function l(n){const e={code:"code",pre:"pre",...(0,o.R)(),...n.components};return(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"usage: rucio-abacus-account [-h] [--run-once] [--threads THREADS]\n                            [--enable-history] [--sleep-time SLEEP_TIME]\n\nThe Abacus-Account daemon is responsible for updating account usages. It checks if there are new entries in the UpdatedAccountCounter table and updates the account counters in the AccountCounter table by adding or substrating the amount and size of files and recalculating the quotas.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: total number of threads on this\n                        process\n  --enable-history      Record account usage into history table every hour.\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n\nUpload a file::\n\n  $ rucio upload --rse MOCK --scope mock filename.txt\n\nCheck account usage::\n\n  $ rucio list-account-usage username\n  +-------+---------+---------+--------------+\n  | RSE   | USAGE   | LIMIT   | QUOTA LEFT   |\n  |-------+---------+---------+--------------|\n  +-------+---------+---------+--------------+\n\nRun the daemon::\n\n  $ rucio-abacus-account --run-once\n\nCheck account usage again::\n\n  $ rucio list-account-usage username\n  +-------+------------+---------+--------------+\n  | RSE   | USAGE      | LIMIT   | QUOTA LEFT   |\n  |-------+------------+---------+--------------|\n  | MOCK  | 211.724 kB | 0.000 B | 0.000 B      |\n  +-------+------------+---------+--------------+\n\n    \n"})})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>u,x:()=>r});var c=t(96540);const o={},a=c.createContext(o);function u(n){const e=c.useContext(a);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:u(n.components),c.createElement(a.Provider,{value:e},n.children)}}}]);