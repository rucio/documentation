"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3103],{51602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"started/concepts/rucio_storage_element","title":"Rucio Storage Element","description":"A Rucio Storage Element (RSE) is the logical abstraction of a storage system for","source":"@site/../docs/started/concepts/rucio_storage_element.md","sourceDirName":"started/concepts","slug":"/started/concepts/rucio_storage_element","permalink":"/documentation/started/concepts/rucio_storage_element","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/rucio_storage_element.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1734614641000,"frontMatter":{"title":"Rucio Storage Element"},"sidebar":"docs","previous":{"title":"Files, Datasets, and Containers","permalink":"/documentation/started/concepts/file_dataset_container"},"next":{"title":"Metadata attributes","permalink":"/documentation/started/concepts/metadata_attributes"}}');var a=n(74848),o=n(28453);const i={title:"Rucio Storage Element"},r=void 0,c={},l=[{value:"Rucio Cache RSE",id:"rucio-cache-rse",level:2},{value:"Distances between RSEs",id:"distances-between-rses",level:2}];function d(e){const t={a:"a",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"A Rucio Storage Element (RSE) is the logical abstraction of a storage system for\nphysical files. It is the smallest unit of storage space addressable within\nRucio. It has a unique identifier and a set of meta attributes describing\nproperties such as supported protocols (https, srm, s3, ...), host/port\naddress, quality of service, storage type (disk, tape, ...), physical space\nproperties (used-, available-, non-pledged space), and geographical zone."}),"\n",(0,a.jsxs)(t.p,{children:["Rucio Storage Elements can be grouped in many logical ways, e.g. the UK RSEs,\nthe Tier-1 RSEs, or the 'good' RSEs. One can reference groups of RSEs by\nmetadata attributes or by explicit enumeration of RSEs. See the section about\n",(0,a.jsx)(t.a,{href:"/documentation/started/concepts/rse_expressions",children:"RSE Expressions"})," for more information."]}),"\n",(0,a.jsx)(t.p,{children:"RSE tags are expanded at transfer time to enumerate target sites.  Post-facto\nchanges to the sites in an RSE tag list will not affect currently replicated\nfiles."}),"\n",(0,a.jsx)(t.h2,{id:"rucio-cache-rse",children:"Rucio Cache RSE"}),"\n",(0,a.jsxs)(t.p,{children:["A cache is storage service which keeps additional copies of files to reduce\nresponse time and bandwidth usage. In Rucio, a cache is an RSE, tagged as\nvolatile. The control of the cache content is usually handled by an external\nprocess or applications (e.g. the Workflow management systems) and not by\nRucio. Thus, as Rucio doesn't control all file movements on these RSEs, the\napplication populating the cache must register and unregister these file\nreplicas in Rucio. The information about replica location on volatile RSEs can\nhave a lifetime. Replicas registered on volatile RSEs are excluded from the\nRucio replica management system (replication rules, quota, replication locks)\ndescribed in the section ",(0,a.jsx)(t.a,{href:"/documentation/started/concepts/replica_management",children:"Replica management"}),". Explicit\ntransfer requests can be made to Rucio in order to populate the cache."]}),"\n",(0,a.jsx)(t.h2,{id:"distances-between-rses",children:"Distances between RSEs"}),"\n",(0,a.jsxs)(t.p,{children:["When configuring transfers between RSEs, distances must be defined for that link.\nDistances are unidirectional. To allow transfers in both directions, a distance\nhas to be defined separately in each direction. Refer to the section\n",(0,a.jsx)(t.a,{href:"/documentation/operator/transfers/transfers-overview",children:"Transfers Overview"})," for more details."]})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(96540);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);