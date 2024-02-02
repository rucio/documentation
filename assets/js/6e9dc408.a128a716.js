"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2452],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,d=p["".concat(s,".").concat(g)]||p[g]||m[g]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},97336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(45072),i=n(95656),a=(n(11504),n(95788)),o=["components"],l={title:"1.23.9"},s=void 0,u={unversionedId:"release-notes/1.23.9",id:"release-notes/1.23.9",title:"1.23.9",description:"General",source:"@site/../docs/release-notes/1.23.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.9",permalink:"/documentation/release-notes/1.23.9",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.9.md",tags:[],version:"current",frontMatter:{title:"1.23.9"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}],m={toc:p},g="wrapper";function d(e){var t=e.components,n=(0,i.c)(e,o);return(0,a.yg)(g,(0,r.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Transfers: Support checking of tape staging status ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1797"},"#1797"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: BelleII: Fix permissions ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3891"},"#3891")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Add documentation to dirac endpoint ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3971"},"#3971"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: 'rucio-admin rse info' should print protocol domain data as valid JSON ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4027"},"#4027")),(0,a.yg)("li",{parentName:"ul"},"Clients: Unhelpful error message for certificates with incorrect permissions ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4071"},"#4071"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: rucio-admin update_rse does not work with booleans ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4048"},"#4048")),(0,a.yg)("li",{parentName:"ul"},"Clients: Misleading documentation for list_dids() ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4078"},"#4078"))),(0,a.yg)("h2",{id:"webui"},"WebUI"),(0,a.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: make certificate error message in webui configurable ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4068"},"#4068"))))}d.isMDXComponent=!0}}]);