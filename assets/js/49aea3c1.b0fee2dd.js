"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6880],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>f});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},33048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(58168),r=a(98587),o=(a(96540),a(15680)),i=["components"],s={id:"what_is_rucio",title:"What is Rucio?"},l=void 0,c={unversionedId:"started/what_is_rucio",id:"started/what_is_rucio",title:"What is Rucio?",description:"Rucio enables centralized management of large volumes of data backed by many",source:"@site/../docs/started/what_is_rucio.md",sourceDirName:"started",slug:"/started/what_is_rucio",permalink:"/documentation/started/what_is_rucio",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/what_is_rucio.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1712331467,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{id:"what_is_rucio",title:"What is Rucio?"},sidebar:"docs",previous:{title:"Before you get started",permalink:"/documentation/started/before_you_get_started"},next:{title:"Main Components",permalink:"/documentation/started/main_components"}},u={},d=[{value:"History",id:"history",level:2},{value:"What can Rucio do",id:"what-can-rucio-do",level:2},{value:"What Rucio doesn&#39;t do",id:"what-rucio-doesnt-do",level:2}],p={toc:d},m="wrapper";function f(e){var t=e.components,a=(0,r.A)(e,i);return(0,o.yg)(m,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Rucio enables centralized management of large volumes of data backed by many\nheterogeneous storage backends."),(0,o.yg)("p",null,"Data is physically distributed over a large number of storage servers, potentially\neach relying on different storage technologies (SSD/Disk/Tape/Object storage) and,\nfrequently, managed by different teams of system administrators."),(0,o.yg)("p",null,"Rucio builds on top of this heterogeneous infrastructure and provides an interface\nwhich allows users to interact with the storage backends in a unified way.\nThe smallest operational unit in Rucio is a file. Rucio enables users to upload,\ndownload, and declaratively manage groups of such files."),(0,o.yg)("p",null,'Declarative management is the power of Rucio, as it allows the user to define\nhigh-level rules such as "Keep 3 copies, on 2 different continents".\nIf one copy is lost, it will be automatically re-constructed on a different storage\nserver to enforce the configured rules.'),(0,o.yg)("h2",{id:"history"},"History"),(0,o.yg)("p",null,"Rucio was developed as a replacement for the Don Quijote (DQ2) data management\nsystem. Even if DQ2 has demonstrated very large scale data management capabilities,\nthe ",(0,o.yg)("strong",{parentName:"p"},"ATLAS Distributed Data Management System")," used for ",(0,o.yg)("strong",{parentName:"p"},"HEP\nexperiments at CERN")," had reached its limits in terms of scalability. The\nprimary concerns were"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"the requirement of a large number of support staff to operate."),(0,o.yg)("li",{parentName:"ul"},"difficulty in interfacing with new technologies")),(0,o.yg)("p",null,"To address these very scaling requirements for HEP experiments, ",(0,o.yg)("strong",{parentName:"p"},"Rucio")," as a\nDistributed Data Management System, was developed. Drawing benefits from\nadvances in Cloud & Big Data computations, it relies on a conceptual data model\nto ensure system stability. Dataflow autonomy and automation are the key design\nprinciples guiding the development of Rucio. To reduce the operational overheads\nof the support staff, it employs an automation framework and also accounts for\nnewer use cases & user requirements in high energy physics and beyond."),(0,o.yg)("h2",{id:"what-can-rucio-do"},"What can Rucio do"),(0,o.yg)("p",null,"The capabilities of Rucio are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Storage of detector data, simulator data, and user data"),(0,o.yg)("li",{parentName:"ul"},"Unified interfacing of heterogenous network & storage infrastructure"),(0,o.yg)("li",{parentName:"ul"},"Support for newer protocols in Storage & Network using plugins"),(0,o.yg)("li",{parentName:"ul"},"Data Recovery"),(0,o.yg)("li",{parentName:"ul"},"Adaptive Replication"),(0,o.yg)("li",{parentName:"ul"},"Quota management")),(0,o.yg)("h2",{id:"what-rucio-doesnt-do"},"What Rucio doesn't do"),(0,o.yg)("p",null,"Rucio doesn't automatically create the storage backends. The storage servers must\nbe created and configured, in advance, with one of the supported access protocols\n(webdav/s3/sftp/xrootd/...), then configured in Rucio."))}f.isMDXComponent=!0}}]);