"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2661],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>y});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,y=p["".concat(c,".").concat(m)]||p[m]||g[m]||i;return t?n.createElement(y,o(o({ref:r},u),{},{components:t})):n.createElement(y,o({ref:r},u))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46834:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(58168),a=t(98587),i=(t(96540),t(15680)),o=["components"],l={title:"1.31.1"},c=void 0,s={unversionedId:"release-notes/1.31.1",id:"release-notes/1.31.1",title:"1.31.1",description:"General",source:"@site/../docs/release-notes/1.31.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.31.1",permalink:"/documentation/release-notes/1.31.1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.31.1.md",tags:[],version:"current",frontMatter:{title:"1.31.1"}},u={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"WebUI",id:"webui",level:2},{value:"Bugs",id:"bugs-1",level:3}],g={toc:p},m="wrapper";function y(e){var r=e.components,t=(0,a.A)(e,o);return(0,i.yg)(m,(0,n.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Replicas: Make Virtual Placement return only complete dataset replicas ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6159"},"#6159")),(0,i.yg)("li",{parentName:"ul"},"Transfers: allow configuring intermediate hop RSE expression ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6163"},"#6163")),(0,i.yg)("li",{parentName:"ul"},"Transfers: get rid of 1.27 compatibility code in transfers ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6172"},"#6172"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Traces: bad activemq connection handling in kronos ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6177"},"#6177")),(0,i.yg)("li",{parentName:"ul"},"Transfers: incorrect availability filter direction in conveyor query ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6157"},"#6157")),(0,i.yg)("li",{parentName:"ul"},"Transfers: incorrect distance logged in conveyor logs ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6170"},"#6170"))),(0,i.yg)("h2",{id:"webui"},"WebUI"),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WebUI: Cannot access when having no token ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6099"},"#6099"))))}y.isMDXComponent=!0}}]);