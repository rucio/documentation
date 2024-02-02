"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3848],{95788:(e,r,n)=>{n.d(r,{Iu:()=>l,yg:()=>m});var t=n(11504);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=p(n),f=o,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return n?t.createElement(m,c(c({ref:r},l),{},{components:n})):t.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=n[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76160:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>u,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var t=n(45072),o=n(95656),i=(n(11504),n(95788)),c=["components"],a={title:"rucio-judge-repairer"},u=void 0,p={unversionedId:"bin/rucio-judge-repairer",id:"bin/rucio-judge-repairer",title:"rucio-judge-repairer",description:"",source:"@site/../docs/bin/rucio-judge-repairer.md",sourceDirName:"bin",slug:"/bin/rucio-judge-repairer",permalink:"/documentation/bin/rucio-judge-repairer",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-judge-repairer.md",tags:[],version:"current",frontMatter:{title:"rucio-judge-repairer"},sidebar:"docs",previous:{title:"rucio-judge-injector",permalink:"/documentation/bin/rucio-judge-injector"},next:{title:"rucio-kronos",permalink:"/documentation/bin/rucio-kronos"}},l={},s=[],d={toc:s},f="wrapper";function m(e){var r=e.components,n=(0,o.c)(e,c);return(0,i.yg)(f,(0,t.c)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-judge-repairer [-h] [--run-once] [--threads THREADS]\n                            [--sleep-time SLEEP_TIME]\n\nThe Judge-Repairer daemon is responsible for the repair of stuck replication\nrules.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --threads THREADS     Concurrency control: total number of threads for this\n                        process\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n")))}m.isMDXComponent=!0}}]);