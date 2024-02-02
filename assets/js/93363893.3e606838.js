"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[956],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>f});var n=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,f=p["".concat(s,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},11844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(45072),i=r(95656),a=(r(11504),r(95788)),o=["components"],l={title:"1.17.7"},s=void 0,u={unversionedId:"release-notes/1.17.7",id:"release-notes/1.17.7",title:"1.17.7",description:"General",source:"@site/../docs/release-notes/1.17.7.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.7",permalink:"/documentation/release-notes/1.17.7",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.17.7.md",tags:[],version:"current",frontMatter:{title:"1.17.7"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},g="wrapper";function f(e){var t=e.components,r=(0,i.c)(e,o);return(0,a.yg)(g,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Documentation: Mention upload with PFN should also be with no_register ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1464"},"#1464")),(0,a.yg)("li",{parentName:"ul"},"Infrastructure: set rucio.cfg values for docker containers with env variables ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1432"},"#1432")),(0,a.yg)("li",{parentName:"ul"},"Infrastructure: dev docker YAML file  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1457"},"#1457"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: No exceptions handled for list_rse_attributes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1155"},"#1155")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: postgres requires ::text conversion of uuid for md5 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1446"},"#1446")),(0,a.yg)("li",{parentName:"ul"},"Deletion: Reaper needs to remove archive_contents when removing an archive logically ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1433"},"#1433")),(0,a.yg)("li",{parentName:"ul"},"Transfers: find_matching_scheme function is not working properly ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1434"},"#1434"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: Add a --allow-tape option in rucio download ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1404"},"#1404"))),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: rucio upload --no-register --pfn fails ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1377"},"#1377"))))}f.isMDXComponent=!0}}]);