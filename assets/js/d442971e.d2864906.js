"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21891],{30948:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"bin/rucio-storage-consistency-actions","title":"rucio-storage-consistency-actions","description":"","source":"@site/../docs/bin/rucio-storage-consistency-actions.md","sourceDirName":"bin","slug":"/bin/rucio-storage-consistency-actions","permalink":"/documentation/bin/rucio-storage-consistency-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-storage-consistency-actions.md","tags":[],"version":"current","frontMatter":{"title":"rucio-storage-consistency-actions"},"sidebar":"docs","previous":{"title":"rucio-rse-decommissioner","permalink":"/documentation/bin/rucio-rse-decommissioner"},"next":{"title":"rucio-transmogrifier","permalink":"/documentation/bin/rucio-transmogrifier"}}');var o=s(74848),r=s(28453);const c={title:"rucio-storage-consistency-actions"},i=void 0,a={},d=[];function u(e){const n={code:"code",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'usage: rucio-storage-consistency-actions [-h] [--run-once] [--scope SCOPE]\n                                         [--rses RSES [RSES ...]]\n                                         [--sleep-time SLEEP_TIME]\n                                         [--dark-min-age DARK_MIN_AGE]\n                                         [--dark-threshold-percent DARK_THRESHOLD_PERCENT]\n                                         [--miss-threshold-percent MISS_THRESHOLD_PERCENT]\n                                         [--scanner-files-path SCANNER_FILES_PATH]\n                                         [--threads THREADS] [-f]\n\nThe Consistency-Actions daemon is responsible for applying the corrective actions resulting from a consistency-check scan of an RSE.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --scope SCOPE         Scope of the input files produced by theiCC scanner -\n                        e.g.: "cms"\n  --rses RSES [RSES ...]\n                        RSEs to check, specified as a RSE expression. Defaults\n                        to check all RSEs.\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time (in seconds)\n                        after each chunk of work\n  --dark-min-age DARK_MIN_AGE\n                        Min. age (in days) of a file to be considered as DARK.\n  --dark-threshold-percent DARK_THRESHOLD_PERCENT\n                        Max. percentage of dark files at RSE, expressed as\n                        percents - e.g. 1.5 means 1.5%\n  --miss-threshold-percent MISS_THRESHOLD_PERCENT\n                        Max. percentage of missing files at RSE, expressed as\n                        percents - e.g. 1.5 means 1.5%\n  --scanner-files-path SCANNER_FILES_PATH\n                        The path where the CC scanner files are mounted.\n  --threads THREADS     Concurrency control: total number of threads on this\n                        process\n  -f, --force-proceed   Force CC actions, even if number of dark/missing files\n                        over thresholds\n\nRun the daemon::\n  $ rucio-storage-consistency-actions --run-once --scope cms --rses T2_US_Purdue T2_US_Nebraska --dark-threshold-percent 2.0 --miss-threshold-percent 1.5 --scanner-files-path /tmp/consistency-dump --sleep-time 10\n'})})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var t=s(96540);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);