(window.webpackJsonp=window.webpackJsonp||[]).push([[331],{404:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(412)),o=["components"],c={title:"1.19.5",sidebar_label:"1.19.5"},s={unversionedId:"release-notes/1.19.5",id:"release-notes/1.19.5",isDocsHomePage:!1,title:"1.19.5",description:"General",source:"@site/../docs/release-notes/1.19.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.19.5",permalink:"/documentation/release-notes/1.19.5",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.19.5.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1653917388,formattedLastUpdatedAt:"5/30/2022",sidebar_label:"1.19.5",frontMatter:{title:"1.19.5",sidebar_label:"1.19.5"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"features"},"Features"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: Symlink as a new storm protocol ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2160"},"#2160"))),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Documentation: Fix grammatical and formatting errors ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2375"},"#2375")),Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: Update probe for changes in AGIS ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2298"},"#2298")),Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: Storage Resource Reporting ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/806"},"#806")),Object(a.b)("li",{parentName:"ul"},"Subscriptions: Keep the history of the susbcriptions ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1810"},"#1810")),Object(a.b)("li",{parentName:"ul"},"Testing: Proxy support for building demo. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2359"},"#2359")),Object(a.b)("li",{parentName:"ul"},"Testing: upgrading pip version inside demo docker build ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2367"},"#2367")),Object(a.b)("li",{parentName:"ul"},"Testing: ipaddress installation in demo. ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2370"},"#2370")),Object(a.b)("li",{parentName:"ul"},"Testing: Using subprocess instead of commands module in submit-pull-request ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2378"},"#2378"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: rucio-admin config set silently fails ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2261"},"#2261")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: List_replicas needs to resolve parent dids recursively for containers ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2217"},"#2217")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: config cache prevents updating a value before expiration ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2390"},"#2390")),Object(a.b)("li",{parentName:"ul"},"Core & Internals: Client raising the wrong error ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2398"},"#2398")),Object(a.b)("li",{parentName:"ul"},"Documentation: New check_accept_header_wrapper block auto-documentation of REST endpoints ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2344"},"#2344")),Object(a.b)("li",{parentName:"ul"},"Probes & Alarms: 'unavailable' counter not updated if there are no replicas ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2265"},"#2265")),Object(a.b)("li",{parentName:"ul"},"Transfers: Implement protection against double submission ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1953"},"#1953")),Object(a.b)("li",{parentName:"ul"},"Transfers: Submitter continues to submit transfers jobs even for sites blacklisted for write ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2352"},"#2352"))),Object(a.b)("h2",{id:"clients"},"Clients"),Object(a.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: Download client should report suspicious files properly ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1593"},"#1593")),Object(a.b)("li",{parentName:"ul"},"Clients: Remove file:// prefix when doing the forced xrdcp -z download for zips ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2314"},"#2314")),Object(a.b)("li",{parentName:"ul"},"Clients: removing token from logs ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2379"},"#2379"))),Object(a.b)("h3",{id:"bugs-1"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Clients: transfer_timeout and other options not propagated to download functions ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2076"},"#2076")),Object(a.b)("li",{parentName:"ul"},"Clients: Format error with ",Object(a.b)("inlineCode",{parentName:"li"},"rucio download")," ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2362"},"#2362")),Object(a.b)("li",{parentName:"ul"},"Clients: propagate correct ignore_checksum for archive download ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2413"},"#2413"))))}b.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(h,c(c({ref:t},u),{},{components:r})):i.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);