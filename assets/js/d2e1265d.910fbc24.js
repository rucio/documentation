"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,y=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={id:"requirements",title:"Requirements",sidebar_label:"Requirements"},u=void 0,p={unversionedId:"requirements",id:"requirements",title:"Requirements",description:"Rucio relies on several dependencies, some of them being a hard requirement,",source:"@site/../docs/requirements.md",sourceDirName:".",slug:"/requirements",permalink:"/documentation/requirements",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/requirements.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1679578641,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"requirements",title:"Requirements",sidebar_label:"Requirements"},sidebar:"docs",previous:{title:"Additional Layers and Resources",permalink:"/documentation/additional_layers_and_resources"},next:{title:"Rucio account",permalink:"/documentation/rucio_account"}},s={},c=[{value:"Python",id:"python",level:2},{value:"Database",id:"database",level:2}],d={toc:c},m="wrapper";function y(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rucio relies on several dependencies, some of them being a hard requirement,\nothers being optional depending on the used Rucio functionality."),(0,o.kt)("p",null,"To install Rucio, we generally recommend a Kubernetes-based deployment based on\nour ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts"},"helm-charts"),". A direct deployment\nusing Rucio ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/rucio"},"docker containers"),", or Rucio\n",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/rucio/"},"pip")," packages is also possible."),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Rucio server, daemons and clients are written in Python and thus depend on an\ninstalled Python interpreter. Since the Rucio ",(0,o.kt)("a",{parentName:"p",href:"release-notes/1.24.0"},"1.24"),"\nrelease servers and daemons require ",(0,o.kt)("strong",{parentName:"p"},"Python 3.6")," or upwards. The clients still\nsupport ",(0,o.kt)("strong",{parentName:"p"},"Python 2.7"),", but will drop support with the Rucio 1.29 LTS release in\nJuly 2022."),(0,o.kt)("h2",{id:"database"},"Database"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Database"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported version"),(0,o.kt)("th",{parentName:"tr",align:null},"Note"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SQLite"),(0,o.kt)("td",{parentName:"tr",align:null},"3+"),(0,o.kt)("td",{parentName:"tr",align:null},"For testing only")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MySQL"),(0,o.kt)("td",{parentName:"tr",align:null},"8"),(0,o.kt)("td",{parentName:"tr",align:null},"No support for SSH public key authentication")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,o.kt)("td",{parentName:"tr",align:null},"12 and higher"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Oracle"),(0,o.kt)("td",{parentName:"tr",align:null},"19c"),(0,o.kt)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);