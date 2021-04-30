(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(342)),o={title:"1.23.3 (clients only)",sidebar_label:"1.23.3 (clients only)"},c={unversionedId:"release-notes/1.23.3",id:"release-notes/1.23.3",isDocsHomePage:!1,title:"1.23.3 (clients only)",description:"Clients",source:"@site/../docs/release-notes/1.23.3.md",sourceDirName:"release-notes",slug:"/release-notes/1.23.3",permalink:"/documentation/release-notes/1.23.3",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1619774119,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"1.23.3 (clients only)",frontMatter:{title:"1.23.3 (clients only)",sidebar_label:"1.23.3 (clients only)"}},l=[{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: ca_cert should not be mandatory ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3744"},"#3744")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: GFAL implementation with CLI instead of API ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3537"},"#3537"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: do not skip CA check on retry ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3702"},"#3702")),Object(i.b)("li",{parentName:"ul"},"Clients: Infinte loop in retries ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3923"},"#3923")),Object(i.b)("li",{parentName:"ul"},"Clients: Upload fails on some sites due to wrong Filesize mismatch ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3927"},"#3927")),Object(i.b)("li",{parentName:"ul"},"Clients: Upload fails on Google storage ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3928"},"#3928"))))}u.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||b[m]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);