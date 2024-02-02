"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1623],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>h});var n=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),g=i,h=p["".concat(u,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},97240:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(45072),i=r(95656),a=(r(11504),r(95788)),s=["components"],o={title:"1.26.6"},u=void 0,l={unversionedId:"release-notes/1.26.6",id:"release-notes/1.26.6",title:"1.26.6",description:"General",source:"@site/../docs/release-notes/1.26.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.6",permalink:"/documentation/release-notes/1.26.6",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.6.md",tags:[],version:"current",frontMatter:{title:"1.26.6"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},g="wrapper";function h(e){var t=e.components,r=(0,i.c)(e,s);return(0,a.yg)(g,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Policies: LSST schema ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4913"},"#4913"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Deletion: Report deletion events when the destination does not exist ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4258"},"#4258")),(0,a.yg)("li",{parentName:"ul"},"Deletion: Deletion duration is not reported for unsuccesful attempts ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4867"},"#4867")),(0,a.yg)("li",{parentName:"ul"},"Deletion: Introduce configurable timeout for deletion ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4908"},"#4908")),(0,a.yg)("li",{parentName:"ul"},"Policies: LSST LFN2PFN algorithm ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4882"},"#4882")),(0,a.yg)("li",{parentName:"ul"},"Testing: Switch oracle database to 18.4 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4805"},"#4805")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Don't resubmit intermediate transfers ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4809"},"#4809")),(0,a.yg)("li",{parentName:"ul"},"Transfers: improve disk vs tape source prioritization ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4906"},"#4906"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Messaging: STOMP connections are not always cleanly closed ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2606"},"#2606")),(0,a.yg)("li",{parentName:"ul"},"Transfers: source URL not updated correctly for multi-source transfers ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4223"},"#4223")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Request priority ignored at initial job submission to transfertool  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4623"},"#4623")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Failed multihop doesn't play nice with source_replica_expression ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4872"},"#4872")),(0,a.yg)("li",{parentName:"ul"},"Transfers: LOST transfers incorrectly handled when FTS returns 404 status code ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4904"},"#4904"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: rucio update-rule --cancel-requests should using either --stuck or --suspend ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3838"},"#3838")),(0,a.yg)("li",{parentName:"ul"},"Clients: Update client to support default accounts ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4802"},"#4802")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: set_rse_usage doesn't allow to set number of files ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4861"},"#4861"))),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: set-tombstone fails for non-ATLAS DID names ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4831"},"#4831")),(0,a.yg)("li",{parentName:"ul"},"Clients: Traceback when requesting the global account usage with a specific RSE ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4870"},"#4870"))))}h.isMDXComponent=!0}}]);