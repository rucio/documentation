"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3756],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>y});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),f=i,y=u["".concat(l,".").concat(f)]||u[f]||p[f]||s;return a?n.createElement(y,r(r({ref:t},d),{},{components:a})):n.createElement(y,r({ref:t},d))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,r=new Array(s);r[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},58557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(58168),i=a(98587),s=(a(96540),a(15680)),r=["components"],o={title:"Files, Datasets, and Containers"},l=void 0,c={unversionedId:"started/concepts/file_dataset_container",id:"started/concepts/file_dataset_container",title:"Files, Datasets, and Containers",description:"As data is physically stored in files, files are also the smallest operational",source:"@site/../docs/started/concepts/file_dataset_container.md",sourceDirName:"started/concepts",slug:"/started/concepts/file_dataset_container",permalink:"/documentation/started/concepts/file_dataset_container",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/file_dataset_container.md",tags:[],version:"current",lastUpdatedBy:"Bouwe Andela",lastUpdatedAt:1712590195,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{title:"Files, Datasets, and Containers"},sidebar:"docs",previous:{title:"Rucio account",permalink:"/documentation/started/concepts/rucio_account"},next:{title:"Rucio Storage Element",permalink:"/documentation/started/concepts/rucio_storage_element"}},d={},u=[{value:"Data identifiers and scope",id:"data-identifiers-and-scope",level:2},{value:"File, dataset, and container status",id:"file-dataset-and-container-status",level:2},{value:"File status",id:"file-status",level:3},{value:"Dataset/Container status",id:"datasetcontainer-status",level:3},{value:"Footnotes",id:"footnotes",level:2}],p={toc:u},f="wrapper";function y(e){var t=e.components,a=(0,i.A)(e,r);return(0,s.yg)(f,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"As data is physically stored in files, files are also the smallest operational\nunit of data in Rucio. Sub-file operations are currently not possible. Rucio\nenables users to identify and access on any arbitrary set of files."),(0,s.yg)("p",null,"Files can be grouped into datasets (a named set of files) and datasets can be\ngrouped into containers (a named set of datasets or, recursively,\ncontainers). All three types of names refer to data so the term 'data\nidentifier' (DID) is used to represent any set of files, datasets or container\nidentifiers. A data identifier is just the name of a single file, dataset or\ncontainer."),(0,s.yg)("h2",{id:"data-identifiers-and-scope"},"Data identifiers and scope"),(0,s.yg)("p",null,"Files, datasets and containers follow an identical naming scheme which is\ncomposed of two strings: the scope and a name. The combination of both is called\na data identifier (DID). Thus for files, the Logical File Name (LFN), a term\ncommonly used in DataGrid terminology to identify files is equivalent to the DID\nin Rucio."),(0,s.yg)("p",null,"The scope string partitions the namespace into several sub namespaces.  The\nprimary use case for this is to easily separate centrally created data from\nindividual user data."),(0,s.yg)("p",null,"By default, accounts have read access to all scopes and write access only to\ntheir own scope. Privileged accounts have write access to multiple scopes, e.g.,\nthe Workload Management System is allowed to write into official data scopes."),(0,s.yg)("p",null,"Files, datasets and containers are uniquely identified over all time.  This\nmeans that a data identifier, once used, can never be reused to refer to\nanything else at all, not even if the data it referred to has been deleted from\nthe system."),(0,s.yg)("h2",{id:"file-dataset-and-container-status"},"File, dataset, and container status"),(0,s.yg)("h3",{id:"file-status"},"File status"),(0,s.yg)("p",null,"The following status attributes are supported for files:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"availability"),": LOST/DELETED/AVAILABLE")),(0,s.yg)("p",null,"A file is LOST if there are no known replicas of the file in Rucio, while at the\nsame time at least one account requested a replica; a file is DELETED if no\naccount requested a replica; otherwise the file is AVAILABLE. This is a derived\nattribute."),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"suppressed"),": True/False")),(0,s.yg)("p",null,"This is a user settable flag. It indicates that the owner of the scope no longer\nneeds the name to be present in the scope. Files that are suppressed (by\ndefault) do not show up in search and list operations on the scope. Note however\nthat this flag will be ignored when explicitly listing contents of\ndatasets/containers."),(0,s.yg)("h3",{id:"datasetcontainer-status"},"Dataset/Container status"),(0,s.yg)("p",null,"The dataset/container status is reflected by a set of attributes:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"open"),": True/False")),(0,s.yg)("p",null,"If a dataset/container is open, content can be added to it.  Datasets/containers\nare created open and once closed, they cannot be opened again",(0,s.yg)("sup",{parentName:"p",id:"fnref-1"},(0,s.yg)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"monotonic"),": True/False")),(0,s.yg)("p",null,"If the monotonic attribute is set, content cannot be removed from an open\ndataset/container. Datasets/containers are, by default, created\nnon-monotonic. Once set to monotonic, this cannot be reversed."),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("inlineCode",{parentName:"li"},"complete"),": True/False")),(0,s.yg)("p",null,"A dataset/container where all files have replicas available is complete.  Any\ndataset/container which contains files without replicas is incomplete. This is a\nderived attribute."),(0,s.yg)("h2",{id:"footnotes"},"Footnotes"),(0,s.yg)("div",{className:"footnotes"},(0,s.yg)("hr",{parentName:"div"}),(0,s.yg)("ol",{parentName:"div"},(0,s.yg)("li",{parentName:"ol",id:"fn-1"},"Datasets from which files have been lost can be repaired when replacement\nfiles are available, even if Open=False. The replacements need not be binary\nidentical to the lost files.",(0,s.yg)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}y.isMDXComponent=!0}}]);