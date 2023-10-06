"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59873:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=["components"],i={id:"additional_layers_and_resources",title:"Additional Layers and Resources"},l=void 0,d={unversionedId:"started/additional_layers_and_resources",id:"started/additional_layers_and_resources",title:"Additional Layers and Resources",description:"In addition to the four main layers, we have the storage",source:"@site/../docs/started/additional_layers_and_resources.md",sourceDirName:"started",slug:"/started/additional_layers_and_resources",permalink:"/documentation/started/additional_layers_and_resources",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/additional_layers_and_resources.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1696512978,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{id:"additional_layers_and_resources",title:"Additional Layers and Resources"},sidebar:"docs",previous:{title:"Main Components",permalink:"/documentation/started/main_components"},next:{title:"Requirements",permalink:"/documentation/started/requirements"}},c={},u=[],p={toc:u},m="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to the four ",(0,o.kt)("a",{parentName:"p",href:"/documentation/started/main_components"},"main layers"),", we have the storage\nresources & transfer tools, as well as the underlying persistent layers. These\nare represented in the architecture diagram by the different ",(0,o.kt)("em",{parentName:"p"},"queuing systems"),",\n",(0,o.kt)("em",{parentName:"p"},"transactional")," relational databases, & ",(0,o.kt)("em",{parentName:"p"},"analytics")," storage on non-relational\ndatabases."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storage & Transfer Tools layer")),(0,o.kt)("p",null,"The Storage layer is responsible for the various interactions with different\ngrid middleware tools & storage systems. The transfer tool interface is a\nfeature of Rucio that enables the daemons to submit, query, and cancel transfers\ngenerically & independently from the actual transfer service being used."),(0,o.kt)("p",null,"This layer is not a software that resides in a datacenter but is more\nrepresentative of the various abstractions in a storage system. It can be\nconfigured dynamically & centrally to suite requirements."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Persistence Layer")),(0,o.kt)("p",null,"This is the layer responsible for keeping all the data & application states for\nall daemons. Also known as the ",(0,o.kt)("strong",{parentName:"p"},"catalog"),", it requires a transactional\ndatabase."),(0,o.kt)("p",null,"The persistence layer supports many different types of transactions relational\ndatabase management systems such as SQLite, MySQL, PostgreSQL, or Oracle. Both\nupgrading & downgrading of the database schema are supported."))}f.isMDXComponent=!0}}]);