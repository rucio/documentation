"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7040],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,y=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(45072),a=r(95656),o=(r(11504),r(95788)),i=["components"],l={title:"1.17.2"},c=void 0,s={unversionedId:"release-notes/1.17.2",id:"release-notes/1.17.2",title:"1.17.2",description:"General",source:"@site/../docs/release-notes/1.17.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.2",permalink:"/documentation/release-notes/1.17.2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.17.2.md",tags:[],version:"current",frontMatter:{title:"1.17.2"}},u={},p=[{value:"General",id:"general",level:2},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements",level:3}],m={toc:p},f="wrapper";function y(e){var t=e.components,r=(0,a.c)(e,i);return(0,o.yg)(f,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"general"},"General"),(0,o.yg)("h3",{id:"bugs"},"Bugs"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Core & Internals: core: archive replicas have wrong RSE ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1305"},"#1305"))),(0,o.yg)("h2",{id:"clients"},"Clients"),(0,o.yg)("h3",{id:"enhancements"},"Enhancements"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Clients: core+client: switch to enable archive listing ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1306"},"#1306")),(0,o.yg)("li",{parentName:"ul"},"RSE Manager: Handle RSEChecksumUnavailable for protocols without renaming ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1299"},"#1299"))))}y.isMDXComponent=!0}}]);