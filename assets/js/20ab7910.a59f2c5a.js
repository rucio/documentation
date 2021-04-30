(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{342:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(c,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(342)),c={title:"1.20.5",sidebar_label:"1.20.5"},o={unversionedId:"release-notes/1.20.5",id:"release-notes/1.20.5",isDocsHomePage:!1,title:"1.20.5",description:"General",source:"@site/../docs/release-notes/1.20.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.5",permalink:"/documentation/release-notes/1.20.5",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1619771730,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"1.20.5",frontMatter:{title:"1.20.5",sidebar_label:"1.20.5"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Enhancements",id:"enhancements-2",children:[]}]}],s={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: add user data import  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2730"},"#2730")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Minos-temporary-expiration does for update without nowait ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2763"},"#2763")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Request listing interface ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2878"},"#2878")),Object(i.b)("li",{parentName:"ul"},"Testing: Development docker updates + documentation fixes ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2777"},"#2777"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: Distance exporter fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2841"},"#2841")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: protocol_stat_retries in rsemanager is loaded as string instead of int ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2874"},"#2874")),Object(i.b)("li",{parentName:"ul"},"Rules: delete_rule for rule_deleters does not work ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2886"},"#2886"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Move rucio-admin replicas declare-bad to the new API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2277"},"#2277")),Object(i.b)("li",{parentName:"ul"},"Clients: CLI to declare replicas temporary unavailable ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2671"},"#2671")),Object(i.b)("li",{parentName:"ul"},"Deletion: Revert reaper executable autogeneration ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2772"},"#2772")),Object(i.b)("li",{parentName:"ul"},"Subscriptions: Mark --retroactive mode as NotImplemented ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2736"},"#2736"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Accounting & Dumps: RSE disk dumps and other output ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1173"},"#1173")),Object(i.b)("li",{parentName:"ul"},"WebUI: p12 client certificate bundle missing for dev webui ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2835"},"#2835"))))}l.isMDXComponent=!0}}]);