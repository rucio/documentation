(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{276:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(359)),o=["components"],c={title:"1.26.1",sidebar_label:"1.26.1"},s={unversionedId:"release-notes/1.26.1",id:"release-notes/1.26.1",isDocsHomePage:!1,title:"1.26.1",description:"General",source:"@site/../docs/release-notes/1.26.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.1",permalink:"/documentation/release-notes/1.26.1",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.1.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1633431020,formattedLastUpdatedAt:"10/5/2021",sidebar_label:"1.26.1",frontMatter:{title:"1.26.1",sidebar_label:"1.26.1"}},u=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]}]}],l={toc:u};function b(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Policies: Registering lfn2pfn algorithm in policy package causes import loop ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4624"},"#4624")),Object(i.b)("li",{parentName:"ul"},"Transfers: Configurable archive-timeout override in submitter ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4641"},"#4641"))),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Database: Core : Insert did in deleted_did table when deleted_did is called ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4229"},"#4229")),Object(i.b)("li",{parentName:"ul"},"Database: Database optimizations ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4744"},"#4744")),Object(i.b)("li",{parentName:"ul"},"Dataset deletion: Add an option to force the deletion of files when they are detached from a dataset ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4636"},"#4636")),Object(i.b)("li",{parentName:"ul"},"Deletion: The Reaper should not have a hard dependency on any RSE limits ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4705"},"#4705")),Object(i.b)("li",{parentName:"ul"},"Testing: Use new GH container registry for autotest images ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4154"},"#4154"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Database: tools/reset_database.py should remove postgres types ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4212"},"#4212")),Object(i.b)("li",{parentName:"ul"},"Documentation: Incorrect documentation on passing the dynamic parameter to /dids/(scope)/(name) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3761"},"#3761")),Object(i.b)("li",{parentName:"ul"},"Transfers: The Poller doesn\u2019t correctly process multi-hop transfers where the first leg has failed ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4633"},"#4633"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"features-1"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Allow to disable checksum for download ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4719"},"#4719"))),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Logged exceptions could contain much more useful information ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3911"},"#3911")),Object(i.b)("li",{parentName:"ul"},"Clients: No timeout for calls to rucio auth server ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4012"},"#4012")),Object(i.b)("li",{parentName:"ul"},"Clients: Expose the RSE limits through rucio-admin ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4073"},"#4073"))))}b.isMDXComponent=!0},359:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);