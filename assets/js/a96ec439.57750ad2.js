"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6731],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,a(a({ref:e},l),{},{components:n})):r.createElement(m,a({ref:e},l))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1230:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={id:"notifications",title:"Notifications",sidebar_label:"Notifications"},s=void 0,p={unversionedId:"notifications",id:"notifications",title:"Notifications",description:"External applications can require synchronisation on events relative to",source:"@site/../docs/notifications.md",sourceDirName:".",slug:"/notifications",permalink:"/documentation/notifications",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/notifications.md",tags:[],version:"current",lastUpdatedBy:"Eraldo Silva Junior",lastUpdatedAt:1675960174,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{id:"notifications",title:"Notifications",sidebar_label:"Notifications"},sidebar:"docs",previous:{title:"Accounting and quota",permalink:"/documentation/accounting_and_quota"},next:{title:"Subscriptions",permalink:"/documentation/subscriptions"}},l={},u=[],f={toc:u},d="wrapper";function m(t){var e=t.components,n=(0,o.Z)(t,a);return(0,i.kt)(d,(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"External applications can require synchronisation on events relative to\ndata availability and can subscribe to particular events, e.g., dataset\nstate changes, replication rule state changes, etc. Rucio publishes\nmessages via the ",(0,i.kt)("a",{parentName:"p",href:"https://stomp.github.io"},"STOMP")," protocol (to e.g.\n",(0,i.kt)("a",{parentName:"p",href:"https://activemq.apache.org"},"ActiveMQ"),") when these events happen."))}m.isMDXComponent=!0}}]);