"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[538],{38805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>_});const r=JSON.parse('{"id":"bin/rucio-c3po","title":"rucio-c3po","description":"","source":"@site/../docs/bin/rucio-c3po.md","sourceDirName":"bin","slug":"/bin/rucio-c3po","permalink":"/documentation/bin/rucio-c3po","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-c3po.md","tags":[],"version":"current","frontMatter":{"title":"rucio-c3po"},"sidebar":"docs","previous":{"title":"rucio-bb8","permalink":"/documentation/bin/rucio-bb8"},"next":{"title":"rucio-cache-client","permalink":"/documentation/bin/rucio-cache-client"}}');var o=t(74848),i=t(28453);const a={title:"rucio-c3po"},s=void 0,c={},_=[];function l(e){const n={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"usage: rucio-c3po [-h] [--run-once] [--threads THREADS] [--only-workload]\n                  [--dry_run DRY_RUN] [--sampling] [--algorithms ALGORITHMS]\n                  [--datatypes DATATYPES] [--dest_rse_expr DEST_RSE_EXPR]\n                  [--max_bytes_hour MAX_BYTES_HOUR]\n                  [--max_files_hour MAX_FILES_HOUR]\n                  [--max_bytes_hour_rse MAX_BYTES_HOUR_RSE]\n                  [--max_files_hour_rse MAX_FILES_HOUR_RSE]\n                  [--min_popularity MIN_POPULARITY]\n                  [--min_recent_requests MIN_RECENT_REQUESTS]\n                  [--max_replicas MAX_REPLICAS]\n                  [--waiting-time-read-free-space WAITING_TIME_READ_FREE_SPACE]\n                  [--waiting-time-read-workload WAITING_TIME_READ_WORKLOAD]\n                  [--waiting-time-print-workload WAITING_TIME_PRINT_WORKLOAD]\n                  [--waiting-time-read-dids WAITING_TIME_READ_DIDS]\n                  [--waiting-time-place-replica WAITING_TIME_PLACE_REPLICA]\n                  [--sleep-time SLEEP_TIME]\n\nThe C3PO daemon is responsible for dynamic data placement.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: number of threads\n  --only-workload       Only run the workload collector\n  --dry_run DRY_RUN, --dry-run DRY_RUN\n                        Do not create any rules\n  --sampling            In the end flip a to decide to create a rule or not\n  --algorithms ALGORITHMS\n                        The placement algorithm or, if in dry_run, a comma\n                        separated list of algorithms\n  --datatypes DATATYPES\n                        Comma separated list of datatype that should trigger\n                        the placement\n  --dest_rse_expr DEST_RSE_EXPR, --dest-rse-expr DEST_RSE_EXPR\n                        RSE expression defining the allowed destination RSEs\n  --max_bytes_hour MAX_BYTES_HOUR, --max-bytes-hour MAX_BYTES_HOUR\n                        Max number of bytes that c3po is allow to replicate\n                        per hour\n  --max_files_hour MAX_FILES_HOUR, --max-files-hour MAX_FILES_HOUR\n                        Max number of files that c3po is allow to replicate\n                        per hour\n  --max_bytes_hour_rse MAX_BYTES_HOUR_RSE, --max-bytes-hour-rse MAX_BYTES_HOUR_RSE\n                        Max number of bytes that c3po is allow to replicate\n                        per hour per rse\n  --max_files_hour_rse MAX_FILES_HOUR_RSE, --max-files-hour-rse MAX_FILES_HOUR_RSE\n                        Max number of files that c3po is allow to replicate\n                        per hour prse_rse\n  --min_popularity MIN_POPULARITY, --min-popularity MIN_POPULARITY\n                        Min number of popularity accesses for a DID in the\n                        last 7 days to trigger\n  --min_recent_requests MIN_RECENT_REQUESTS, --min-recent-requests MIN_RECENT_REQUESTS\n                        Min number of times a DID has to be requested in the\n                        last hour to trigger\n  --max_replicas MAX_REPLICAS, --max-replicas MAX_REPLICAS\n                        Max number of replicas above which not to trigger\n                        anymore\n  --waiting-time-read-free-space WAITING_TIME_READ_FREE_SPACE\n                        Waiting time for reading free space\n  --waiting-time-read-workload WAITING_TIME_READ_WORKLOAD\n                        Waiting time for reading workload\n  --waiting-time-print-workload WAITING_TIME_PRINT_WORKLOAD\n                        Waiting time for printing workload\n  --waiting-time-read-dids WAITING_TIME_READ_DIDS\n                        Waiting time for reading dids\n  --waiting-time-place-replica WAITING_TIME_PLACE_REPLICA\n                        Waiting time for placing replicas\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n"})})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var r=t(96540);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);