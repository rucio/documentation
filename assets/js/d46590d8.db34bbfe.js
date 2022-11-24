(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{384:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(451)),o=["components"],c={title:"1.28.3"},s={unversionedId:"release-notes/1.28.3",id:"release-notes/1.28.3",isDocsHomePage:!1,title:"1.28.3",description:"General",source:"@site/../docs/release-notes/1.28.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.3",permalink:"/documentation/release-notes/1.28.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.3.md",version:"current",frontMatter:{title:"1.28.3"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],l={toc:u};function p(e){var t=e.components,r=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"general"},"General"),Object(a.b)("h3",{id:"enhancements"},"Enhancements"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Deletion: re-evaluate the greedy = 1TB constant ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5358"},"#5358")),Object(a.b)("li",{parentName:"ul"},"Monitoring & Logging: reduce gfal2 log verbosity  ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5492"},"#5492")),Object(a.b)("li",{parentName:"ul"},"Policies: Belle II: Modify permission for add_rules ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4293"},"#4293")),Object(a.b)("li",{parentName:"ul"},"Policies: Update permission module for ESCAPE ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5513"},"#5513")),Object(a.b)("li",{parentName:"ul"},"Recovery: Changing log messages in suspicious_replica_recoverer, fixing sleep_time issue and adding passive mode ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5300"},"#5300"))),Object(a.b)("h3",{id:"bugs"},"Bugs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Core & Internals: get_pfn_to_rse() doesn\u2019t properly handle protocols with different ports ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5180"},"#5180")),Object(a.b)("li",{parentName:"ul"},"Release management: Deprecation message in Paramiko ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5500"},"#5500")),Object(a.b)("li",{parentName:"ul"},"Testing: Intermittent integration test failure of test_list_did_meta (TestDidMetaMongo) ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5472"},"#5472")),Object(a.b)("li",{parentName:"ul"},"Transfers: impossibility to assign a transfertool crashes the submitter ",Object(a.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5458"},"#5458"))))}p.isMDXComponent=!0},451:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||a;return r?i.a.createElement(f,c(c({ref:t},u),{},{components:r})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);