(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{351:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(412)),o=["components"],c={title:"1.28.3",sidebar_label:"1.28.3"},s={unversionedId:"release-notes/1.28.3",id:"release-notes/1.28.3",isDocsHomePage:!1,title:"1.28.3",description:"General",source:"@site/../docs/release-notes/1.28.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.3",permalink:"/documentation/release-notes/1.28.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.3.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1653917388,formattedLastUpdatedAt:"5/30/2022",sidebar_label:"1.28.3",frontMatter:{title:"1.28.3",sidebar_label:"1.28.3"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function p(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deletion: re-evaluate the greedy = 1TB constant ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5358"},"#5358")),Object(i.b)("li",{parentName:"ul"},"Monitoring & Logging: reduce gfal2 log verbosity  ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5492"},"#5492")),Object(i.b)("li",{parentName:"ul"},"Policies: Belle II: Modify permission for add_rules ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4293"},"#4293")),Object(i.b)("li",{parentName:"ul"},"Policies: Update permission module for ESCAPE ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5513"},"#5513")),Object(i.b)("li",{parentName:"ul"},"Recovery: Changing log messages in suspicious_replica_recoverer, fixing sleep_time issue and adding passive mode ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5300"},"#5300"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: get_pfn_to_rse() doesn\u2019t properly handle protocols with different ports ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5180"},"#5180")),Object(i.b)("li",{parentName:"ul"},"Release management: Deprecation message in Paramiko ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5500"},"#5500")),Object(i.b)("li",{parentName:"ul"},"Testing: Intermittent integration test failure of test_list_did_meta (TestDidMetaMongo) ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5472"},"#5472")),Object(i.b)("li",{parentName:"ul"},"Transfers: impossibility to assign a transfertool crashes the submitter ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5458"},"#5458"))))}p.isMDXComponent=!0},412:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);