(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{342:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),p=n,h=b["".concat(o,".").concat(p)]||b[p]||m[p]||i;return r?a.a.createElement(h,c(c({ref:t},u),{},{components:r})):a.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(342)),o={title:"1.14.8",sidebar_label:"1.14.8"},c={unversionedId:"release-notes/1.14.8",id:"release-notes/1.14.8",isDocsHomePage:!1,title:"1.14.8",description:"General",source:"@site/../docs/release-notes/1.14.8.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.8",permalink:"/documentation/release-notes/1.14.8",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1619774119,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"1.14.8",frontMatter:{title:"1.14.8",sidebar_label:"1.14.8"}},s=[{value:"General",id:"general",children:[{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]},{value:"Clients",id:"clients",children:[{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}]},{value:"WebUI",id:"webui",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements-2",children:[]}]}],u={toc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h3",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: Move the methods calls in check_rse_attributes from the API to the core ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/519"},"#519")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: Remove \\<operation",">","_protocol entries in rse_settings ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/508"},"#508")),Object(i.b)("li",{parentName:"ul"},"RSE Manager: rsemanager add domain to all method signatures ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/62"},"#62")),Object(i.b)("li",{parentName:"ul"},"Rules: Possibility to give reason when denying a rule ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/487"},"#487")),Object(i.b)("li",{parentName:"ul"},"Transfers: Conveyor should only use schemes compatible to the destination scheme ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/73"},"#73"))),Object(i.b)("h3",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: set_metadata should update guid both in did and content table ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/413"},"#413")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Creating incomplete message for datasets does not work ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/464"},"#464")),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Postgres error in conveyor-finisher ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/480"},"#480")),Object(i.b)("li",{parentName:"ul"},"Probes & Alarms: Probe setting the naming convention is broken ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/522"},"#522")),Object(i.b)("li",{parentName:"ul"},"Recovery: Crash when declaring bad file replicas already declared bad on a non-deterministic RSE ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/457"},"#457")),Object(i.b)("li",{parentName:"ul"},"Traces: heartbeats do not work correctly for kronos dataset thread ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/510"},"#510")),Object(i.b)("li",{parentName:"ul"},"Transfers: Conveyor receiver does not consume messages ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/513"},"#513"))),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h3",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: update-rule --lifetime command does not work ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/496"},"#496"))),Object(i.b)("h3",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Force GSI authentication for root fix did not work ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/467"},"#467")),Object(i.b)("li",{parentName:"ul"},"Clients: Automatic protocol failover broken in rucio download ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/502"},"#502"))),Object(i.b)("h2",{id:"webui"},"WebUI"),Object(i.b)("h3",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: WebUI: Preview logfiles in browser #344 ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/344"},"#344")),Object(i.b)("li",{parentName:"ul"},"WebUI: Rucio UI Account admin view ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/81"},"#81"))),Object(i.b)("h3",{id:"enhancements-2"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"WebUI: Admin interface in Rucio UI ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/78"},"#78"))))}l.isMDXComponent=!0}}]);