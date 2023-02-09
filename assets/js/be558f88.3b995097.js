"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9788],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"1.25.5"},s=void 0,u={unversionedId:"release-notes/1.25.5",id:"release-notes/1.25.5",title:"1.25.5",description:"General",source:"@site/../docs/release-notes/1.25.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.5",permalink:"/documentation/release-notes/1.25.5",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.25.5.md",tags:[],version:"current",frontMatter:{title:"1.25.5"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},f="wrapper";function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("h3",{id:"enhancements"},"Enhancements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Core & Internals: imp deprecation warning in favour of importlib ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4372"},"#4372"))),(0,o.kt)("h3",{id:"bugs"},"Bugs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Authentication & Authorisation: SSH public key padding ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3115"},"#3115")),(0,o.kt)("li",{parentName:"ul"},"Messaging: Hermes2: Add a protection against empty transferred_at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4618"},"#4618")),(0,o.kt)("li",{parentName:"ul"},"Recovery: Reason is not maintained for temporarily unavailable replicas ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4023"},"#4023"))),(0,o.kt)("h2",{id:"clients"},"Clients"),(0,o.kt)("h3",{id:"bugs-1"},"Bugs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Clients: Upload/Download CLI does not properly log INFO ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4629"},"#4629"))))}d.isMDXComponent=!0}}]);