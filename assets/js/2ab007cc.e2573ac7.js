"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7684],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,y=p["".concat(c,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(58168),o=r(98587),i=(r(96540),r(15680)),a=["components"],l={title:"1.17.3"},c=void 0,s={unversionedId:"release-notes/1.17.3",id:"release-notes/1.17.3",title:"1.17.3",description:"Clients",source:"@site/../docs/release-notes/1.17.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.3",permalink:"/documentation/release-notes/1.17.3",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.17.3.md",tags:[],version:"current",frontMatter:{title:"1.17.3"}},u={},p=[{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs",level:3}],f={toc:p},m="wrapper";function y(e){var t=e.components,r=(0,o.A)(e,a);return(0,i.yg)(m,(0,n.A)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Python 2.6 incompatibility with python logger ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1323"},"#1323")),(0,i.yg)("li",{parentName:"ul"},"Clients: common/utils fails when loading dysfunctional paramiko version ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1324"},"#1324"))))}y.isMDXComponent=!0}}]);