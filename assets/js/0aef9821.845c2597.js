"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3103],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>f});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(58168),a=n(98587),o=(n(96540),n(15680)),s=["components"],i={title:"Rucio Storage Element"},c=void 0,l={unversionedId:"started/concepts/rucio_storage_element",id:"started/concepts/rucio_storage_element",title:"Rucio Storage Element",description:"A Rucio Storage Element (RSE) is the logical abstraction of a storage system for",source:"@site/../docs/started/concepts/rucio_storage_element.md",sourceDirName:"started/concepts",slug:"/started/concepts/rucio_storage_element",permalink:"/documentation/started/concepts/rucio_storage_element",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/rucio_storage_element.md",tags:[],version:"current",lastUpdatedBy:"Maximilian Linhoff",lastUpdatedAt:1711473391,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{title:"Rucio Storage Element"},sidebar:"docs",previous:{title:"Files, Datasets, and Containers",permalink:"/documentation/started/concepts/file_dataset_container"},next:{title:"Metadata attributes",permalink:"/documentation/started/concepts/metadata_attributes"}},p={},u=[{value:"Rucio Cache RSE",id:"rucio-cache-rse",level:2},{value:"Distances between RSEs",id:"distances-between-rses",level:2}],d={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,a.A)(e,s);return(0,o.yg)(m,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"A Rucio Storage Element (RSE) is the logical abstraction of a storage system for\nphysical files. It is the smallest unit of storage space addressable within\nRucio. It has a unique identifier and a set of meta attributes describing\nproperties such as supported protocols (https, srm, s3, ",".","..), host/port\naddress, quality of service, storage type (disk, tape, ",".","..), physical space\nproperties (used-, available-, non-pledged space), and geographical zone."),(0,o.yg)("p",null,"Rucio Storage Elements can be grouped in many logical ways, e.g. the UK RSEs,\nthe Tier-1 RSEs, or the 'good' RSEs. One can reference groups of RSEs by\nmetadata attributes or by explicit enumeration of RSEs. See the section about\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/started/concepts/rse_expressions"},"RSE Expressions")," for more information."),(0,o.yg)("p",null,"RSE tags are expanded at transfer time to enumerate target sites.  Post-facto\nchanges to the sites in an RSE tag list will not affect currently replicated\nfiles."),(0,o.yg)("h2",{id:"rucio-cache-rse"},"Rucio Cache RSE"),(0,o.yg)("p",null,"A cache is storage service which keeps additional copies of files to reduce\nresponse time and bandwidth usage. In Rucio, a cache is an RSE, tagged as\nvolatile. The control of the cache content is usually handled by an external\nprocess or applications (e.g. the Workflow management systems) and not by\nRucio. Thus, as Rucio doesn't control all file movements on these RSEs, the\napplication populating the cache must register and unregister these file\nreplicas in Rucio. The information about replica location on volatile RSEs can\nhave a lifetime. Replicas registered on volatile RSEs are excluded from the\nRucio replica management system (replication rules, quota, replication locks)\ndescribed in the section ",(0,o.yg)("a",{parentName:"p",href:"/documentation/started/concepts/replica_management"},"Replica management"),". Explicit\ntransfer requests can be made to Rucio in order to populate the cache."),(0,o.yg)("h2",{id:"distances-between-rses"},"Distances between RSEs"),(0,o.yg)("p",null,"When configuring transfers between RSEs, distances must be defined for that link.\nDistances are unidirectional. To allow transfers in both directions, a distance\nhas to be defined separately in each direction. Refer to the section\n",(0,o.yg)("a",{parentName:"p",href:"/documentation/operator/transfers/transfers-overview"},"Transfers Overview")," for more details."))}f.isMDXComponent=!0}}]);