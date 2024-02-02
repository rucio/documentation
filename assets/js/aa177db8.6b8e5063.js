"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9208],{95788:(e,r,n)=>{n.d(r,{Iu:()=>p,yg:()=>d});var t=n(11504);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(s,".").concat(m)]||u[m]||_[m]||i;return n?t.createElement(d,a(a({ref:r},p),{},{components:n})):t.createElement(d,a({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},90332:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=n(45072),o=n(95656),i=(n(11504),n(95788)),a=["components"],c={title:"rucio-c3po"},s=void 0,l={unversionedId:"bin/rucio-c3po",id:"bin/rucio-c3po",title:"rucio-c3po",description:"",source:"@site/../docs/bin/rucio-c3po.md",sourceDirName:"bin",slug:"/bin/rucio-c3po",permalink:"/documentation/bin/rucio-c3po",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-c3po.md",tags:[],version:"current",frontMatter:{title:"rucio-c3po"},sidebar:"docs",previous:{title:"rucio-bb8",permalink:"/documentation/bin/rucio-bb8"},next:{title:"rucio-cache-client",permalink:"/documentation/bin/rucio-cache-client"}},p={},u=[],_={toc:u},m="wrapper";function d(e){var r=e.components,n=(0,o.c)(e,a);return(0,i.yg)(m,(0,t.c)({},_,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-c3po [-h] [--run-once] [--threads THREADS] [--only-workload]\n                  [--dry_run DRY_RUN] [--sampling] [--algorithms ALGORITHMS]\n                  [--datatypes DATATYPES] [--dest_rse_expr DEST_RSE_EXPR]\n                  [--max_bytes_hour MAX_BYTES_HOUR]\n                  [--max_files_hour MAX_FILES_HOUR]\n                  [--max_bytes_hour_rse MAX_BYTES_HOUR_RSE]\n                  [--max_files_hour_rse MAX_FILES_HOUR_RSE]\n                  [--min_popularity MIN_POPULARITY]\n                  [--min_recent_requests MIN_RECENT_REQUESTS]\n                  [--max_replicas MAX_REPLICAS]\n                  [--waiting-time-read-free-space WAITING_TIME_READ_FREE_SPACE]\n                  [--waiting-time-read-workload WAITING_TIME_READ_WORKLOAD]\n                  [--waiting-time-print-workload WAITING_TIME_PRINT_WORKLOAD]\n                  [--waiting-time-read-dids WAITING_TIME_READ_DIDS]\n                  [--waiting-time-place-replica WAITING_TIME_PLACE_REPLICA]\n                  [--sleep-time SLEEP_TIME]\n\nThe C3PO daemon is responsible for dynamic data placement.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: number of threads\n  --only-workload       Only run the workload collector\n  --dry_run DRY_RUN, --dry-run DRY_RUN\n                        Do not create any rules\n  --sampling            In the end flip a to decide to create a rule or not\n  --algorithms ALGORITHMS\n                        The placement algorithm or, if in dry_run, a comma\n                        separated list of algorithms\n  --datatypes DATATYPES\n                        Comma separated list of datatype that should trigger\n                        the placement\n  --dest_rse_expr DEST_RSE_EXPR, --dest-rse-expr DEST_RSE_EXPR\n                        RSE expression defining the allowed destination RSEs\n  --max_bytes_hour MAX_BYTES_HOUR, --max-bytes-hour MAX_BYTES_HOUR\n                        Max number of bytes that c3po is allow to replicate\n                        per hour\n  --max_files_hour MAX_FILES_HOUR, --max-files-hour MAX_FILES_HOUR\n                        Max number of files that c3po is allow to replicate\n                        per hour\n  --max_bytes_hour_rse MAX_BYTES_HOUR_RSE, --max-bytes-hour-rse MAX_BYTES_HOUR_RSE\n                        Max number of bytes that c3po is allow to replicate\n                        per hour per rse\n  --max_files_hour_rse MAX_FILES_HOUR_RSE, --max-files-hour-rse MAX_FILES_HOUR_RSE\n                        Max number of files that c3po is allow to replicate\n                        per hour prse_rse\n  --min_popularity MIN_POPULARITY, --min-popularity MIN_POPULARITY\n                        Min number of popularity accesses for a DID in the\n                        last 7 days to trigger\n  --min_recent_requests MIN_RECENT_REQUESTS, --min-recent-requests MIN_RECENT_REQUESTS\n                        Min number of times a DID has to be requested in the\n                        last hour to trigger\n  --max_replicas MAX_REPLICAS, --max-replicas MAX_REPLICAS\n                        Max number of replicas above which not to trigger\n                        anymore\n  --waiting-time-read-free-space WAITING_TIME_READ_FREE_SPACE\n                        Waiting time for reading free space\n  --waiting-time-read-workload WAITING_TIME_READ_WORKLOAD\n                        Waiting time for reading workload\n  --waiting-time-print-workload WAITING_TIME_PRINT_WORKLOAD\n                        Waiting time for printing workload\n  --waiting-time-read-dids WAITING_TIME_READ_DIDS\n                        Waiting time for reading dids\n  --waiting-time-place-replica WAITING_TIME_PLACE_REPLICA\n                        Waiting time for placing replicas\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n")))}d.isMDXComponent=!0}}]);