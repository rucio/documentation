"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4516],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>f});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(t),m=o,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||i;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},60024:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(45072),o=t(95656),i=(t(11504),t(95788)),c=["components"],a={title:"rucio-judge-injector"},u=void 0,l={unversionedId:"bin/rucio-judge-injector",id:"bin/rucio-judge-injector",title:"rucio-judge-injector",description:"",source:"@site/../docs/bin/rucio-judge-injector.md",sourceDirName:"bin",slug:"/bin/rucio-judge-injector",permalink:"/documentation/bin/rucio-judge-injector",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-judge-injector.md",tags:[],version:"current",frontMatter:{title:"rucio-judge-injector"},sidebar:"docs",previous:{title:"rucio-judge-evaluator",permalink:"/documentation/bin/rucio-judge-evaluator"},next:{title:"rucio-judge-repairer",permalink:"/documentation/bin/rucio-judge-repairer"}},p={},s=[],d={toc:s},m="wrapper";function f(e){var r=e.components,t=(0,o.c)(e,c);return(0,i.yg)(m,(0,n.c)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-judge-injector [-h] [--run-once] [--threads THREADS]\n                            [--sleep-time SLEEP_TIME]\n\nJudge-Injector is a daemon to asynchronously inject replication rules.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: total number of threads for this\n                        process\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n")))}f.isMDXComponent=!0}}]);