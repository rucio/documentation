(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{213:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(367)),o=["components"],c={title:"1.18.3",sidebar_label:"1.18.3"},u={unversionedId:"release-notes/1.18.3",id:"release-notes/1.18.3",isDocsHomePage:!1,title:"1.18.3",description:"General",source:"@site/../docs/release-notes/1.18.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.18.3",permalink:"/documentation/release-notes/1.18.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.18.3.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1637754454,formattedLastUpdatedAt:"11/24/2021",sidebar_label:"1.18.3",frontMatter:{title:"1.18.3",sidebar_label:"1.18.3"}},s=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Bugs",id:"bugs-2",children:[]}]}],l={toc:s};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Transfers: Change conveyors to heartbeat ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/58"},"#58"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Propagate the size of the file when declaring bad file ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1610"},"#1610")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Expose the number of files on an RSE ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1651"},"#1651")),Object(a.b)("li",{parentName:"ul"},"Documentation: Add comments to transmogrifier code ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1527"},"#1527")),Object(a.b)("li",{parentName:"ul"},"Documentation: Document AllowEncodedSlashes ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1601"},"#1601")),Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: ATLAS: Dynamically change the list of SCRATCHDISK endpoints used for 2nd replication ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1625"},"#1625"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Typo in oracle version check ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1639"},"#1639")),Object(a.b)("li",{parentName:"ul"},"Functional tests: automatix broken due to new rsemgr.upload function ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1582"},"#1582")),Object(a.b)("li",{parentName:"ul"},"Transfers: Timeout exceptions from FTS not properly handled ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1411"},"#1411")),Object(a.b)("li",{parentName:"ul"},"Transfers: group-policy option is not propagated properly to the conveyor ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1624"},"#1624")),Object(a.b)("li",{parentName:"ul"},"Transfers: Unhandled exception in conveyor submitter ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/961"},"#961"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: rucio list-dids --recursive does not work ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/65"},"#65")),Object(a.b)("li",{parentName:"ul"},"Clients: Undefined name 'result' in def info_rule ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/997"},"#997"))),Object(a.b)("h2",{id:"webui"},"WebUI"),Object(a.b)("h3",{id:"bugs-2"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"WebUI: add protocol button on WebUI does not work ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1600"},"#1600")),Object(a.b)("li",{parentName:"ul"},'WebUI: Searching for a DID shows "Could not find the DID" but did was found ',Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1619"},"#1619"))))}b.isMDXComponent=!0},367:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(d,c(c({ref:t},s),{},{components:r})):i.a.createElement(d,c({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);