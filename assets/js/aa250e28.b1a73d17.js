"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[768],{95788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>y});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,y=p["".concat(u,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(45072),o=r(95656),a=(r(11504),r(95788)),i=["components"],c={title:"1.26.7"},u=void 0,l={unversionedId:"release-notes/1.26.7",id:"release-notes/1.26.7",title:"1.26.7",description:"Bugs",source:"@site/../docs/release-notes/1.26.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.7",permalink:"/documentation/release-notes/1.26.7",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.7.md",tags:[],version:"current",frontMatter:{title:"1.26.7"}},s={},p=[{value:"Bugs",id:"bugs",level:3}],f={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,o.c)(e,i);return(0,a.yg)(m,(0,n.c)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: X509 auth in the WebUI fails multiple accounts ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4810"},"#4810")),(0,a.yg)("li",{parentName:"ul"},"WebUI: Privilege escalation issue in the Rucio WebUI ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4928"},"#4928"))))}y.isMDXComponent=!0}}]);