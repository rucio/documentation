(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(412)),l=["components"],o={title:"1.20.2",sidebar_label:"1.20.2"},c={unversionedId:"release-notes/1.20.2",id:"release-notes/1.20.2",isDocsHomePage:!1,title:"1.20.2",description:"General",source:"@site/../docs/release-notes/1.20.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.20.2",permalink:"/documentation/release-notes/1.20.2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.20.2.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1653917388,formattedLastUpdatedAt:"5/30/2022",sidebar_label:"1.20.2",frontMatter:{title:"1.20.2",sidebar_label:"1.20.2"}},s=[{value:"General",id:"general",children:[]},{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]},{value:"Clients",id:"clients",children:[]},{value:"Features",id:"features-1",children:[]},{value:"Enhancements",id:"enhancements-1",children:[]},{value:"Bugs",id:"bugs-1",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"general"},"General"),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper 2.0 inner loop: Storage interaction #2445")),Object(i.b)("h2",{id:"enhancements"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Core & Internals: update rse export format #2237"),Object(i.b)("li",{parentName:"ul"},"Life time model: Supporting deleting the replicas instead of secondarising them #2701"),Object(i.b)("li",{parentName:"ul"},"Life time model: Allow spreading the effect of the Lifetime Model over a period #2702"),Object(i.b)("li",{parentName:"ul"},"Rules: Allow updating the purge_replicas rule option #2691"),Object(i.b)("li",{parentName:"ul"},"Transfers: Possibility to exclude acitivites in conveyor-submitter #2640"),Object(i.b)("li",{parentName:"ul"},"Transfers: fts3 transfer tool reads wrong config #2681")),Object(i.b)("h2",{id:"bugs"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Authentication & Authorisation: Deadlock in token expiration #2720"),Object(i.b)("li",{parentName:"ul"},"Core & Internals: Add chunking for delete_replicas dst_replica_condition #2266"),Object(i.b)("li",{parentName:"ul"},"Deletion: Reaper crashes when it tries to delete a DIDs that is a constituent of an archive #2707"),Object(i.b)("li",{parentName:"ul"},"Testing: travis oracle container times out quite often #2588"),Object(i.b)("li",{parentName:"ul"},"Transfers: Conveyor breaks if no scheme is specified #2402")),Object(i.b)("h2",{id:"clients"},"Clients"),Object(i.b)("h2",{id:"features-1"},"Features"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Downloadclient: adding possibility to manipulate external trace objects #2600")),Object(i.b)("h2",{id:"enhancements-1"},"Enhancements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: RUCIO_ACCOUNT should override the Rucio configuration file #2649"),Object(i.b)("li",{parentName:"ul"},"Clients: Help for cli list-dids is misleading #2664")),Object(i.b)("h2",{id:"bugs-1"},"Bugs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Clients: Upload fails to register file if pfn provided and non-deterministic RSE #2620")))}b.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,f=b["".concat(l,".").concat(p)]||b[p]||d[p]||i;return n?a.a.createElement(f,o(o({ref:t},s),{},{components:n})):a.a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);