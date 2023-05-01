"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4245],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},E=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(t),E=o,m=p["".concat(u,".").concat(E)]||p[E]||d[E]||i;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=E;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}E.displayName="MDXCreateElement"},87953:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),c=["components"],a={title:"rucio-reaper"},u=void 0,s={unversionedId:"bin/rucio-reaper",id:"bin/rucio-reaper",title:"rucio-reaper",description:"",source:"@site/../docs/bin/rucio-reaper.md",sourceDirName:"bin",slug:"/bin/rucio-reaper",permalink:"/documentation/bin/rucio-reaper",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-reaper.md",tags:[],version:"current",frontMatter:{title:"rucio-reaper"},sidebar:"docs",previous:{title:"rucio-oauth-manager",permalink:"/documentation/bin/rucio-oauth-manager"},next:{title:"rucio-replica-recoverer",permalink:"/documentation/bin/rucio-replica-recoverer"}},l={},p=[],d={toc:p},E="wrapper";function m(e){var r=e.components,t=(0,o.Z)(e,c);return(0,i.kt)(E,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"usage: rucio-reaper [-h] [--run-once] [--threads THREADS]\n                    [--chunk_size CHUNK_SIZE] [--sleep-time SLEEP_TIME]\n                    [--greedy] [--exclude-rses EXCLUDE_RSES]\n                    [--include-rses INCLUDE_RSES] [--rses RSES [RSES ...]]\n                    [--vos VOS [VOS ...]] [--delay-seconds DELAY_SECONDS]\n                    [--scheme SCHEME]\n                    [--auto_exclude_threshold AUTO_EXCLUDE_THRESHOLD]\n                    [--auto_exclude_timeout AUTO_EXCLUDE_TIMEOUT]\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --chunk_size CHUNK_SIZE, --chunk-size CHUNK_SIZE\n                        The size used for a bulk deletion on on RSE\n  --sleep-time SLEEP_TIME\n                        Minimum time between 2 consecutive cycles\n  --greedy              To enable greedy mode. Deprecated, kept for\n                        compatibility reasons. Recommended way is to use RSE\n                        attribute greedyDeletion=True\n  --exclude-rses EXCLUDE_RSES\n                        RSE expression to exclude\n  --include-rses INCLUDE_RSES\n                        RSE expression to include\n  --rses RSES [RSES ...]\n                        Explicit list of RSEs to include. If empty, it\n                        considers all RSEs\n  --vos VOS [VOS ...]   Optional list of VOs to consider. Only used in multi-\n                        VO mode.\n  --delay-seconds DELAY_SECONDS\n                        The delay (seconds) to query replicas in BEING_DELETED\n                        state.\n  --scheme SCHEME       Force the reaper to use a particular protocol/scheme,\n                        e.g., mock\n  --auto_exclude_threshold AUTO_EXCLUDE_THRESHOLD, --auto-exclude-threshhold AUTO_EXCLUDE_THRESHOLD\n                        Number of service unavailable exceptions after which\n                        the RSE gets temporarily excluded.\n  --auto_exclude_timeout AUTO_EXCLUDE_TIMEOUT, --auto-exclude-timeout AUTO_EXCLUDE_TIMEOUT\n                        Timeout for temporarily excluded RSEs.\n")))}m.isMDXComponent=!0}}]);