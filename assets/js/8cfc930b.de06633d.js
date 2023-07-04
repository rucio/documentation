"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9813],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7780:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"1.31.6"},c=void 0,s={unversionedId:"release-notes/1.31.6",id:"release-notes/1.31.6",title:"1.31.6",description:"General",source:"@site/../docs/release-notes/1.31.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.31.6",permalink:"/documentation/release-notes/1.31.6",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.31.6.md",tags:[],version:"current",frontMatter:{title:"1.31.6"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},f="wrapper";function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general"},"General"),(0,a.kt)("h3",{id:"enhancements"},"Enhancements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Documentation: Typos in docstrings for Python API of DIDClient ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6225"},"#6225"))),(0,a.kt)("h3",{id:"bugs"},"Bugs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core & Internals: Heartbeats endpoints don't work ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6180"},"#6180")),(0,a.kt)("li",{parentName:"ul"},"Documentation: Add parameters to daemons\u2019 stop() function ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6075"},"#6075")),(0,a.kt)("li",{parentName:"ul"},"Rules: Attaching a collection to a container does not trigger the re-evaluation of its rules ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6234"},"#6234"))))}d.isMDXComponent=!0}}]);