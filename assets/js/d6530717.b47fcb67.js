"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1572],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(r),m=o,y=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},18104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(45072),o=r(95656),a=(r(11504),r(95788)),c=["components"],l={title:"1.21.0.post2"},s=void 0,i={unversionedId:"release-notes/1.21.0.post2",id:"release-notes/1.21.0.post2",title:"1.21.0.post2",description:"General",source:"@site/../docs/release-notes/1.21.0.post2.md",sourceDirName:"release-notes",slug:"/release-notes/1.21.0.post2",permalink:"/documentation/release-notes/1.21.0.post2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.21.0.post2.md",tags:[],version:"current",frontMatter:{title:"1.21.0.post2"}},u={},p=[{value:"General",id:"general",level:2},{value:"Bugs",id:"bugs",level:3}],f={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,o.c)(e,c);return(0,a.yg)(m,(0,n.c)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Transfers: Default checksum algorithms not triggered ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3138"},"#3138"))))}y.isMDXComponent=!0}}]);