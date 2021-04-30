(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(342)),o={title:"1.19.8",sidebar_label:"1.19.8"},c={unversionedId:"release-notes/1.19.8",id:"release-notes/1.19.8",isDocsHomePage:!1,title:"1.19.8",description:"General",source:"@site/../docs/release-notes/1.19.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.19.8",permalink:"/documentation/release-notes/1.19.8",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1619771730,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"1.19.8",frontMatter:{title:"1.19.8",sidebar_label:"1.19.8"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Virtual placement R&D prototype ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2528"},"#2528")),Object(i.b)("li",{parentName:"ul"},"Transfers: Conveyor-fts_throttler daemon ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2482"},"#2482"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Support site attributes for root proxies ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2511"},"#2511")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add an LFN2PFN algorithm for LIGO ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2519"},"#2519")),Object(i.b)("li",{parentName:"ul"},"Deletion: add protocol to deletion events ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2560"},"#2560")),Object(i.b)("li",{parentName:"ul"},"Rebalancing: bb8 should not use tape replicas ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2535"},"#2535")),Object(i.b)("li",{parentName:"ul"},"Rules: When rules with COPYING replicas are cancelled, they should be tombstoned ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2488"},"#2488"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Infrastructure: dev docker image is broken ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2548"},"#2548")),Object(i.b)("li",{parentName:"ul"},"Recovery: Necromancer doesn't handle properly exception ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1807"},"#1807")),Object(i.b)("li",{parentName:"ul"},"Testing: docker demo fails to build image due to errors(?) in Dockerfile ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2502"},"#2502"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Dataset Replicas panel is using obsolete RSE expression syntax ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2556"},"#2556"))))}s.isMDXComponent=!0},342:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);