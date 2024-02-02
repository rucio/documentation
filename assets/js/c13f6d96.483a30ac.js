"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6012],{95788:(e,n,r)=>{r.d(n,{Iu:()=>l,yg:()=>f});var t=r(11504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return r?t.createElement(f,a(a({ref:n},l),{},{components:r})):t.createElement(f,a({ref:n},l))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82820:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var t=r(45072),o=r(95656),i=(r(11504),r(95788)),a=["components"],c={title:"rucio-minos"},u=void 0,s={unversionedId:"bin/rucio-minos",id:"bin/rucio-minos",title:"rucio-minos",description:"",source:"@site/../docs/bin/rucio-minos.md",sourceDirName:"bin",slug:"/bin/rucio-minos",permalink:"/documentation/bin/rucio-minos",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-minos.md",tags:[],version:"current",frontMatter:{title:"rucio-minos"},sidebar:"docs",previous:{title:"rucio-minos-temporary-expiration",permalink:"/documentation/bin/rucio-minos-temporary-expiration"},next:{title:"rucio-necromancer",permalink:"/documentation/bin/rucio-necromancer"}},l={},p=[],m={toc:p},d="wrapper";function f(e){var n=e.components,r=(0,o.c)(e,a);return(0,i.yg)(d,(0,t.c)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-minos [-h] [--run-once] [--threads THREADS] [--bulk BULK]\n                   [--sleep-time SLEEP_TIME]\n\nThe role of the daemon is get as input the list of PFNs declared bad and to\nclassify them into 2 categories: the temporary available ones, and the ones\nthat have a real problem and that will need to be recovered by the\nnecromancer.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n")))}f.isMDXComponent=!0}}]);