"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[596],{95788:(e,r,n)=>{n.d(r,{Iu:()=>u,yg:()=>f});var t=n(11504);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),s=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(p.Provider,{value:r},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),y=o,f=l["".concat(p,".").concat(y)]||l[y]||m[y]||i;return n?t.createElement(f,a(a({ref:r},u),{},{components:n})):t.createElement(f,a({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},60060:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var t=n(45072),o=n(95656),i=(n(11504),n(95788)),a=["components"],c={title:"rucio-minos-temporary-expiration"},p=void 0,s={unversionedId:"bin/rucio-minos-temporary-expiration",id:"bin/rucio-minos-temporary-expiration",title:"rucio-minos-temporary-expiration",description:"",source:"@site/../docs/bin/rucio-minos-temporary-expiration.md",sourceDirName:"bin",slug:"/bin/rucio-minos-temporary-expiration",permalink:"/documentation/bin/rucio-minos-temporary-expiration",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-minos-temporary-expiration.md",tags:[],version:"current",frontMatter:{title:"rucio-minos-temporary-expiration"},sidebar:"docs",previous:{title:"rucio-kronos",permalink:"/documentation/bin/rucio-kronos"},next:{title:"rucio-minos",permalink:"/documentation/bin/rucio-minos"}},u={},l=[],m={toc:l},y="wrapper";function f(e){var r=e.components,n=(0,o.c)(e,a);return(0,i.yg)(y,(0,t.c)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-minos-temporary-expiration [-h] [--run-once] [--threads THREADS]\n                                        [--bulk BULK]\n                                        [--sleep-time SLEEP_TIME]\n\nThis special type of minos daemon lists the expired TEMPORARY_UNAVAILABLE\nreplicas and puts them back into AVAILABLE state.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --threads THREADS     Concurrency control: number of threads\n  --bulk BULK           Bulk control: number of requests per cycle\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n")))}f.isMDXComponent=!0}}]);