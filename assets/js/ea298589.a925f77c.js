(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{312:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(342)),o={title:"1.17.5",sidebar_label:"1.17.5"},c={unversionedId:"release-notes/1.17.5",id:"release-notes/1.17.5",isDocsHomePage:!1,title:"1.17.5",description:"General",source:"@site/../docs/release-notes/1.17.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.5",permalink:"/documentation/release-notes/1.17.5",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1619771730,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"1.17.5",frontMatter:{title:"1.17.5",sidebar_label:"1.17.5"}},u=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs-1",children:[]}]}],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Documentation: rucio documentation fixes ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1310"},"#1310")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: cx_oracle version in containers should be fixed to 6.3.1 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1318"},"#1318")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: Docker image build of rucio demo fails ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1329"},"#1329")),Object(i.b)("li",{parentName:"ul"},"Infrastructure: Incorrect configuration of rucio demo? ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1334"},"#1334"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Rebalancing: Fix activity in BB8 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1361"},"#1361")),Object(i.b)("li",{parentName:"ul"},"Testing: Reset db tables script fails silently ",Object(i.b)("inlineCode",{parentName:"li"},"#1317 <https://github.com/rucio/rucio/issues/1317>"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"RSE Manager: Deleting left-overs of first attempt of upload by correct protocol ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1346"},"#1346")),Object(i.b)("li",{parentName:"ul"},"Release management: Downgrade to older setuptools version as 39.0.1 is not py2.6 compatible ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1355"},"#1355"))))}s.isMDXComponent=!0},342:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=s(r),m=n,f=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);