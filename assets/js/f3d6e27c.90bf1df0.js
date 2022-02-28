(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{356:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(376)),i=["components"],c={title:"1.24.3",sidebar_label:"1.24.3"},s={unversionedId:"release-notes/1.24.3",id:"release-notes/1.24.3",isDocsHomePage:!1,title:"1.24.3",description:"General",source:"@site/../docs/release-notes/1.24.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.24.3",permalink:"/documentation/release-notes/1.24.3",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.24.3.md",version:"current",lastUpdatedBy:"jdierkes",lastUpdatedAt:1646069951,formattedLastUpdatedAt:"2/28/2022",sidebar_label:"1.24.3",frontMatter:{title:"1.24.3",sidebar_label:"1.24.3"}},l=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Database: Oracle optimisation for abacus-collection-replicas ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4279"},"#4279")),Object(o.b)("li",{parentName:"ul"},"Policies: Too restrictive RSE Expression regular expressions for RSE names ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4277"},"#4277"))),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Consistency checks: Dark reaper mismatch between RSE ID and dictionary. ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4285"},"#4285")),Object(o.b)("li",{parentName:"ul"},"Deletion: The deletion of replicas with Epoch tombstone doesn't start if no space is needed ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4288"},"#4288")),Object(o.b)("li",{parentName:"ul"},"Messaging: Hermes2: Submission of deletion events in local time ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4287"},"#4287")),Object(o.b)("li",{parentName:"ul"},"Messaging: Hermes throwing exception on python3 ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4289"},"#4289"))))}p.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);