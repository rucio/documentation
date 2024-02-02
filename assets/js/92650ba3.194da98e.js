"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1200],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,y=p["".concat(l,".").concat(g)]||p[g]||m[g]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},72212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=r(45072),a=r(95656),i=(r(11504),r(95788)),o=["components"],s={title:"1.23.11"},l=void 0,c={unversionedId:"release-notes/1.23.11",id:"release-notes/1.23.11",title:"1.23.11",description:"General",source:"@site/../docs/release-notes/1.23.11.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.11",permalink:"/documentation/release-notes/1.23.11",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.23.11.md",tags:[],version:"current",frontMatter:{title:"1.23.11"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],m={toc:p},g="wrapper";function y(e){var t=e.components,r=(0,a.c)(e,o);return(0,i.yg)(g,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Deletion: remove unnecessary log messages from reaper2 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4143"},"#4143")),(0,i.yg)("li",{parentName:"ul"},"Release management: Upgrade information in setup.py (1.23.0) ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4121"},"#4121")),(0,i.yg)("li",{parentName:"ul"},"Replicas: Make abacus collection replica more memory aware ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4149"},"#4149")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Possibility to force IPv4 transfers ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4141"},"#4141")),(0,i.yg)("li",{parentName:"ul"},"WebUI: Port web ui to Flask ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4041"},"#4041"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: RSE set-attribute fails if RSE does not exist ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4008"},"#4008")),(0,i.yg)("li",{parentName:"ul"},"DIRAC: Fix wrong grouping for the rules in dirac add_files ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4144"},"#4144")),(0,i.yg)("li",{parentName:"ul"},"Transfers: conveyor submitter crashes on python3 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4148"},"#4148"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Unconditionally reducing the log level omits important information even under '-v'  ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3912"},"#3912"))))}y.isMDXComponent=!0}}]);