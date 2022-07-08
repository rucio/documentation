(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{383:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(433)),i=["components"],s={title:"Rucio Storage Element"},c={unversionedId:"rucio_storage_element",id:"rucio_storage_element",isDocsHomePage:!1,title:"Rucio Storage Element",description:"A Rucio Storage Element (RSE) is the logical abstraction of a storage system for",source:"@site/../docs/rucio_storage_element.md",sourceDirName:".",slug:"/rucio_storage_element",permalink:"/documentation/rucio_storage_element",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/rucio_storage_element.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1657301594,formattedLastUpdatedAt:"7/8/2022",frontMatter:{title:"Rucio Storage Element"},sidebar:"docs",previous:{title:"Files, Datasets, and Containers",permalink:"/documentation/file_dataset_container"},next:{title:"Metadata attributes",permalink:"/documentation/metadata_attributes"}},l=[{value:"Rucio Cache RSE",id:"rucio-cache-rse",children:[]},{value:"Distances between RSEs",id:"distances-between-rses",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A Rucio Storage Element (RSE) is the logical abstraction of a storage system for\nphysical files. It is the smallest unit of storage space addressable within\nRucio. It has a unique identifier and a set of meta attributes describing\nproperties such as supported protocols (https, srm, s3, ",".","..), host/port\naddress, quality of service, storage type (disk, tape, ",".","..), physical space\nproperties (used-, available-, non-pledged space), and geographical zone."),Object(o.b)("p",null,"Rucio Storage Elements can be grouped in many logical ways, e.g. the UK RSEs,\nthe Tier-1 RSEs, or the 'good' RSEs. One can reference groups of RSEs by\nmetadata attributes or by explicit enumeration of RSEs. See the section about\n",Object(o.b)("a",{parentName:"p",href:"/documentation/rse_expressions"},"RSE Expressions")," for more information."),Object(o.b)("p",null,"RSE tags are expanded at transfer time to enumerate target sites.  Post-facto\nchanges to the sites in an RSE tag list will not affect currently replicated\nfiles."),Object(o.b)("h2",{id:"rucio-cache-rse"},"Rucio Cache RSE"),Object(o.b)("p",null,"A cache is storage service which keeps additional copies of files to reduce\nresponse time and bandwidth usage. In Rucio, a cache is an RSE, tagged as\nvolatile. The control of the cache content is usually handled by an external\nprocess or applications (e.g. the Workflow management systems) and not by\nRucio. Thus, as Rucio doesn't control all file movements on these RSEs, the\napplication populating the cache must register and unregister these file\nreplicas in Rucio. The information about replica location on volatile RSEs can\nhave a lifetime. Replicas registered on volatile RSEs are excluded from the\nRucio replica management system (replication rules, quota, replication locks)\ndescribed in the section ",Object(o.b)("a",{parentName:"p",href:"/documentation/replica_management"},"Replica management"),". Explicit\ntransfer requests can be made to Rucio in order to populate the cache."),Object(o.b)("h2",{id:"distances-between-rses"},"Distances between RSEs"),Object(o.b)("p",null,"When configuring transfers between RSEs, bidirectional distances or rankings\nmust be defined for that link. When sorting by these distances in the selection\nof a transfer source, the following criterion are used:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Higher source_ranking first"),Object(o.b)("li",{parentName:"ul"},"On equal source_ranking, prefer DISK over TAPE"),Object(o.b)("li",{parentName:"ul"},"On equal type, prefer lower distance_ranking"),Object(o.b)("li",{parentName:"ul"},"On equal distance, prefer single hop")))}p.isMDXComponent=!0},433:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?a.a.createElement(f,s(s({ref:t},l),{},{components:n})):a.a.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);