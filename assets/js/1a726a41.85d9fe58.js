"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5464],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var r=n(11504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(45072),o=n(95656),a=(n(11504),n(95788)),i=["components"],s={id:"main_components",title:"Main Components"},c=void 0,l={unversionedId:"started/main_components",id:"started/main_components",title:"Main Components",description:"Rucio is based on a distributed system architecture & can be sectioned into four",source:"@site/../docs/started/main_components.md",sourceDirName:"started",slug:"/started/main_components",permalink:"/documentation/started/main_components",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/main_components.md",tags:[],version:"current",lastUpdatedBy:"Victor Azizi",lastUpdatedAt:1706000596,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"main_components",title:"Main Components"},sidebar:"docs",previous:{title:"What is Rucio?",permalink:"/documentation/started/what_is_rucio"},next:{title:"Additional Layers and Resources",permalink:"/documentation/started/additional_layers_and_resources"}},p={},u=[{value:"Clients",id:"clients",level:2},{value:"Server",id:"server",level:2},{value:"Core",id:"core",level:2},{value:"Daemons",id:"daemons",level:2}],d={toc:u},m="wrapper";function y(e){var t=e.components,s=(0,o.c)(e,i);return(0,a.yg)(m,(0,r.c)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Rucio is based on a distributed system architecture & can be sectioned into four\nmajor layers:"),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("p",null,"The clients layer consists of components such as the command line clients (CLI),\nPython clients, and the Javascript-based web user interface and configuration."),(0,a.yg)("h2",{id:"server"},"Server"),(0,a.yg)("p",null,"The server layer serves the purpose of authentication & provides a common API\nfor interaction with clients & other external application, as also the Web UI."),(0,a.yg)("h2",{id:"core"},"Core"),(0,a.yg)("p",null,"This layer consists of all the Rucio-level abstractions that are explained at\nlength in the Concepts section."),(0,a.yg)("h2",{id:"daemons"},"Daemons"),(0,a.yg)("p",null,"The daemons layer takes care of all the asynchronous & continuous workflows in\nthe background."),(0,a.yg)("p",null,"A diagrammatic representation of the 4 layers is as shown below"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image",src:n(6856).c,width:"513",height:"452"})),(0,a.yg)("p",null,"To learn more about each of these layers in detail, download our ",(0,a.yg)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s41781-019-0026-3"},"peer reviewed\nscientific paper"),"."))}y.isMDXComponent=!0},6856:(e,t,n)=>{n.d(t,{c:()=>r});const r=n.p+"assets/images/architecture-a407801cb690fc1a73a930e2691f761f.png"}}]);