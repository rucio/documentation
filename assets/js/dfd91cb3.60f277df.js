"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[643],{95788:(e,r,t)=>{t.d(r,{Iu:()=>u,yg:()=>g});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,g=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},37164:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(45072),o=t(95656),a=(t(11504),t(95788)),i=["components"],l={title:"33.2.1"},c=void 0,s={unversionedId:"release-notes/33.2.1",id:"release-notes/33.2.1",title:"33.2.1",description:"General",source:"@site/../docs/release-notes/33.2.1.md",sourceDirName:"release-notes",slug:"/release-notes/33.2.1",permalink:"/documentation/release-notes/33.2.1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/33.2.1.md",tags:[],version:"current",frontMatter:{title:"33.2.1"}},u={},p=[{value:"General",id:"general",level:2},{value:"Bugs",id:"bugs",level:3}],m={toc:p},f="wrapper";function g(e){var r=e.components,t=(0,o.c)(e,i);return(0,a.yg)(f,(0,n.c)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Messaging: Hermes daemon error in if/else block for elastic refers to influx ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6435"},"#6435")),(0,a.yg)("li",{parentName:"ul"},"Protocols: gfal RSE protocol ignores the verify_checksum attribute ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6439"},"#6439")),(0,a.yg)("li",{parentName:"ul"},"Testing: prepare-commit-msg: ",(0,a.yg)("inlineCode",{parentName:"li"},"sed")," in-place errors out on BSD ",(0,a.yg)("inlineCode",{parentName:"li"},"sed")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6452"},"#6452")),(0,a.yg)("li",{parentName:"ul"},"Transfers: duplicate traces sent by receiver and poller ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/6424"},"#6424"))))}g.isMDXComponent=!0}}]);