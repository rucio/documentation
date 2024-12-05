"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63756],{82982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"started/concepts/file_dataset_container","title":"Files, Datasets, and Containers","description":"As data is physically stored in files, files are also the smallest operational","source":"@site/../docs/started/concepts/file_dataset_container.md","sourceDirName":"started/concepts","slug":"/started/concepts/file_dataset_container","permalink":"/documentation/started/concepts/file_dataset_container","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/file_dataset_container.md","tags":[],"version":"current","lastUpdatedBy":"Hugo Labrador","lastUpdatedAt":1733387634000,"frontMatter":{"title":"Files, Datasets, and Containers"},"sidebar":"docs","previous":{"title":"Rucio account","permalink":"/documentation/started/concepts/rucio_account"},"next":{"title":"Rucio Storage Element","permalink":"/documentation/started/concepts/rucio_storage_element"}}');var a=n(74848),i=n(28453);const o={title:"Files, Datasets, and Containers"},r=void 0,l={},c=[{value:"Data identifiers and scope",id:"data-identifiers-and-scope",level:2},{value:"File, dataset, and container status",id:"file-dataset-and-container-status",level:2},{value:"File status",id:"file-status",level:3},{value:"Dataset/Container status",id:"datasetcontainer-status",level:3},{value:"Footnotes",id:"footnotes",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"As data is physically stored in files, files are also the smallest operational\nunit of data in Rucio. Sub-file operations are currently not possible. Rucio\nenables users to identify and access on any arbitrary set of files."}),"\n",(0,a.jsx)(t.p,{children:"Files can be grouped into datasets (a named set of files) and datasets can be\ngrouped into containers (a named set of datasets or, recursively,\ncontainers). All three types of names refer to data so the term 'data\nidentifier' (DID) is used to represent any set of files, datasets or container\nidentifiers. A data identifier is just the name of a single file, dataset or\ncontainer."}),"\n",(0,a.jsx)(t.h2,{id:"data-identifiers-and-scope",children:"Data identifiers and scope"}),"\n",(0,a.jsx)(t.p,{children:"Files, datasets and containers follow an identical naming scheme which is\ncomposed of two strings: the scope and a name. The combination of both is called\na data identifier (DID). Thus for files, the Logical File Name (LFN), a term\ncommonly used in DataGrid terminology to identify files is equivalent to the DID\nin Rucio."}),"\n",(0,a.jsx)(t.p,{children:"The scope string partitions the namespace into several sub namespaces.  The\nprimary use case for this is to easily separate centrally created data from\nindividual user data."}),"\n",(0,a.jsx)(t.p,{children:"By default, accounts have read access to all scopes and write access only to\ntheir own scope. Privileged accounts have write access to multiple scopes, e.g.,\nthe Workload Management System is allowed to write into official data scopes."}),"\n",(0,a.jsx)(t.p,{children:"Files, datasets and containers are uniquely identified over all time.  This\nmeans that a data identifier, once used, can never be reused to refer to\nanything else at all, not even if the data it referred to has been deleted from\nthe system."}),"\n",(0,a.jsx)(t.h2,{id:"file-dataset-and-container-status",children:"File, dataset, and container status"}),"\n",(0,a.jsx)(t.h3,{id:"file-status",children:"File status"}),"\n",(0,a.jsx)(t.p,{children:"The following status attributes are supported for files:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"availability"}),": LOST/DELETED/AVAILABLE"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"A file is LOST if there are no known replicas of the file in Rucio, while at the\nsame time at least one account requested a replica; a file is DELETED if no\naccount requested a replica; otherwise the file is AVAILABLE. This is a derived\nattribute."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"suppressed"}),": True/False"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This is a user settable flag. It indicates that the owner of the scope no longer\nneeds the name to be present in the scope. Files that are suppressed (by\ndefault) do not show up in search and list operations on the scope. Note however\nthat this flag will be ignored when explicitly listing contents of\ndatasets/containers."}),"\n",(0,a.jsx)(t.h3,{id:"datasetcontainer-status",children:"Dataset/Container status"}),"\n",(0,a.jsx)(t.p,{children:"The dataset/container status is reflected by a set of attributes:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"is_open"}),": True/False"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["If a dataset/container is open, content can be added to it.  Datasets/containers\nare created open and once closed, they cannot be opened again",(0,a.jsx)(t.sup,{children:(0,a.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"monotonic"}),": True/False"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"If the monotonic attribute is set, content cannot be removed from an open\ndataset/container. Datasets/containers are, by default, created\nnon-monotonic. Once set to monotonic, this cannot be reversed."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"complete"}),": True/False"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"A dataset/container where all files have replicas available is complete.  Any\ndataset/container which contains files without replicas is incomplete. This is a\nderived attribute."}),"\n",(0,a.jsx)(t.h2,{id:"footnotes",children:"Footnotes"}),"\n","\n",(0,a.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,a.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,a.jsxs)(t.p,{children:["Datasets from which files have been lost can be repaired when replacement\nfiles are available, even if Open=False. The replacements need not be binary\nidentical to the lost files. ",(0,a.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);