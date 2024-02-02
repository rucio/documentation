"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2736],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=a,y=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8052:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(45072),a=r(95656),i=(r(11504),r(95788)),o=["components"],l={title:"1.27.3"},s=void 0,u={unversionedId:"release-notes/1.27.3",id:"release-notes/1.27.3",title:"1.27.3",description:"General",source:"@site/../docs/release-notes/1.27.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.3",permalink:"/documentation/release-notes/1.27.3",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.3.md",tags:[],version:"current",frontMatter:{title:"1.27.3"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},g="wrapper";function y(e){var t=e.components,r=(0,a.c)(e,o);return(0,i.yg)(g,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Database: Create a prototype workflow with temporary tables ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5130"},"#5130")),(0,i.yg)("li",{parentName:"ul"},"Verify the value of ",(0,i.yg)("inlineCode",{parentName:"li"},"expires_at")," for bad/temporary unavailable replicas ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5071"},"#5071"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Transfers: Revisit "rses" filter for request retrieval ',(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4405"},"#4405"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Monitoring & Logging: Incorrect variable type passed to request.core.get_next counter ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5025"},"#5025")),(0,i.yg)("li",{parentName:"ul"},"Multi VO: PolicyPackageNotFound: Module rucio.common.permission.generic_multi_vo not found ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4579"},"#4579")),(0,i.yg)("li",{parentName:"ul"},"Replicas: GEOIP Maxmindb daily download limit reached ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5077"},"#5077")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Default multihop tombstone is effectively None ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5110"},"#5110")),(0,i.yg)("li",{parentName:"ul"},"Transfers: ",(0,i.yg)("inlineCode",{parentName:"li"},"bring_online")," parameter is submitted as a string, instead of int, to FTS ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5146"},"#5146"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: option for expiry date instead of lifetime ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5069"},"#5069"))),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Download client does not filter out tape sources ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5122"},"#5122"))))}y.isMDXComponent=!0}}]);