"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3944],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},87432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(45072),o=r(95656),a=(r(11504),r(95788)),i=["components"],c={title:"1.31.5"},l=void 0,s={unversionedId:"release-notes/1.31.5",id:"release-notes/1.31.5",title:"1.31.5",description:"General",source:"@site/../docs/release-notes/1.31.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.31.5",permalink:"/documentation/release-notes/1.31.5",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.31.5.md",tags:[],version:"current",frontMatter:{title:"1.31.5"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3}],m={toc:p},f="wrapper";function y(e){var t=e.components,r=(0,o.c)(e,i);return(0,a.yg)(f,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Policy package supported version should support new version number format ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6209"},"#6209")),(0,a.yg)("li",{parentName:"ul"},"Life time model: Convert containers in Lifetime Model exceptions to datasets ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6147"},"#6147")),(0,a.yg)("li",{parentName:"ul"},"Monitoring & Logging: Make monitoring able to use prometheus push gateway ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6224"},"#6224"))))}y.isMDXComponent=!0}}]);