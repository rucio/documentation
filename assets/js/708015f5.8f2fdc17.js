"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[856],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,y=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},16568:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(45072),a=r(95656),i=(r(11504),r(95788)),o=["components"],s={title:"1.16.3"},l=void 0,u={unversionedId:"release-notes/1.16.3",id:"release-notes/1.16.3",title:"1.16.3",description:"General",source:"@site/../docs/release-notes/1.16.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.16.3",permalink:"/documentation/release-notes/1.16.3",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.16.3.md",tags:[],version:"current",frontMatter:{title:"1.16.3"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},g="wrapper";function y(e){var t=e.components,r=(0,a.c)(e,o);return(0,i.yg)(g,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Consistency checks: Auditor is not able to handle dumps on non-SRM endpoint ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/429"},"#429")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: dataset thread in kronos dies when RSE doesn't exist ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1184"},"#1184")),(0,i.yg)("li",{parentName:"ul"},"Infrastructure: Rework docker images for Kubernetes ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1086"},"#1086")),(0,i.yg)("li",{parentName:"ul"},"Infrastructure: server and daemons container builds are failing caused by pip install ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1190"},"#1190")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Fixes for replica selection in conveyor ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/667"},"#667"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: rucio set-metadata returns status code 0 for non-existing DID ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/493"},"#493")),(0,i.yg)("li",{parentName:"ul"},"Consistency checks: Auditor does not work with certain HTTPS dumps ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/367"},"#367")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: DB exception occur after detach and attach DID repeatedly ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1004"},"#1004")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Credentials config/file should be optional not mandatory ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1144"},"#1144")),(0,i.yg)("li",{parentName:"ul"},"Transfers: transfers: verify_checksum badly propagated ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1219"},"#1219"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Raise Meaningful Exception When Protocol Fails To Get Checksum ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1149"},"#1149")),(0,i.yg)("li",{parentName:"ul"},"Clients: clients: workaround url signature for rucio download until download-api is deployed ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1208"},"#1208"))),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: ",(0,i.yg)("inlineCode",{parentName:"li"},"rucio erase")," with wildcards ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/406"},"#406")),(0,i.yg)("li",{parentName:"ul"},"RSE Manager: RSE manager: remove .part from filename if adler32 is set and ignore_checksum is true ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1185"},"#1185"))))}y.isMDXComponent=!0}}]);