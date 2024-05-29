"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8939],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73172:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(58168),a=r(98587),o=(r(96540),r(15680)),l=["components"],i={id:"requirements",title:"Requirements",sidebar_label:"Requirements"},p=void 0,u={unversionedId:"started/requirements",id:"started/requirements",title:"Requirements",description:"Rucio relies on several dependencies, some of them being a hard requirement,",source:"@site/../docs/started/requirements.md",sourceDirName:"started",slug:"/started/requirements",permalink:"/documentation/started/requirements",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/requirements.md",tags:[],version:"current",lastUpdatedBy:"Fabio Luchetti",lastUpdatedAt:1716902708,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"requirements",title:"Requirements",sidebar_label:"Requirements"},sidebar:"docs",previous:{title:"Additional Layers and Resources",permalink:"/documentation/started/additional_layers_and_resources"},next:{title:"Rucio account",permalink:"/documentation/started/concepts/rucio_account"}},s={},d=[{value:"Python",id:"python",level:2},{value:"Database",id:"database",level:2}],c={toc:d},m="wrapper";function y(e){var t=e.components,r=(0,a.A)(e,l);return(0,o.yg)(m,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Rucio relies on several dependencies, some of them being a hard requirement,\nothers being optional depending on the used Rucio functionality."),(0,o.yg)("p",null,"To install Rucio, we generally recommend a Kubernetes-based deployment based on\nour ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts"},"helm-charts"),". A direct deployment\nusing Rucio ",(0,o.yg)("a",{parentName:"p",href:"https://hub.docker.com/u/rucio"},"docker containers"),", or Rucio\n",(0,o.yg)("a",{parentName:"p",href:"https://pypi.org/project/rucio/"},"pip")," packages is also possible."),(0,o.yg)("h2",{id:"python"},"Python"),(0,o.yg)("p",null,"Rucio server, daemons and clients are written in Python and thus depend on an\ninstalled Python interpreter."),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Rucio release"),(0,o.yg)("th",{parentName:"tr",align:null},"Supported python versions"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("a",{parentName:"td",href:"/release-notes/1.29.0"},"1.29 LTS")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},">=3.6, <=3.9"))),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"from ",(0,o.yg)("a",{parentName:"td",href:"/release-notes/32.0.0"},"32 LTS")),(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},">=3.9, <=3.10"))))),(0,o.yg)("h2",{id:"database"},"Database"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Database"),(0,o.yg)("th",{parentName:"tr",align:null},"Supported version"),(0,o.yg)("th",{parentName:"tr",align:null},"Note"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"SQLite"),(0,o.yg)("td",{parentName:"tr",align:null},"3+"),(0,o.yg)("td",{parentName:"tr",align:null},"For testing only")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"MySQL"),(0,o.yg)("td",{parentName:"tr",align:null},"8"),(0,o.yg)("td",{parentName:"tr",align:null},"No support for SSH public key authentication")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,o.yg)("td",{parentName:"tr",align:null},"12 and higher"),(0,o.yg)("td",{parentName:"tr",align:null})),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},"Oracle"),(0,o.yg)("td",{parentName:"tr",align:null},"19c"),(0,o.yg)("td",{parentName:"tr",align:null})))))}y.isMDXComponent=!0}}]);