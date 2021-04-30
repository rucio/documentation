(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(342)),i={title:"1.23.1",sidebar_label:"1.23.1"},c={unversionedId:"release-notes/1.23.1",id:"release-notes/1.23.1",isDocsHomePage:!1,title:"1.23.1",description:"General",source:"@site/../docs/release-notes/1.23.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.1",permalink:"/documentation/release-notes/1.23.1",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1619774119,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"1.23.1",frontMatter:{title:"1.23.1",sidebar_label:"1.23.1"}},l=[{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Bugs",id:"bugs",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"general"},"General"),Object(o.b)("h3",{id:"features"},"Features"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Release management: New code management model ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3417"},"#3417"))),Object(o.b)("h3",{id:"enhancements"},"Enhancements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Core & Internals: BelleII : Change in the extract_scope algorithm ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3857"},"#3857"))),Object(o.b)("h2",{id:"clients"},"Clients"),Object(o.b)("h3",{id:"bugs"},"Bugs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Clients: Add option to skip stats in the upload client ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3842"},"#3842")),Object(o.b)("li",{parentName:"ul"},"Clients: Uploadclient: upload method needs to propagate pfn correctly ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3844"},"#3844")),Object(o.b)("li",{parentName:"ul"},"Clients: Uploadclient: needs to pass RSE name to get_signed_url ",Object(o.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3850"},"#3850"))))}u.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);