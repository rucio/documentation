"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7915],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return a?i.createElement(f,o(o({ref:t},c),{},{components:a})):i.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70260:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"replica_workflow",title:"Typical Replica Workflow"},l=void 0,p={unversionedId:"replica_workflow",id:"replica_workflow",title:"Typical Replica Workflow",description:"This section gives an overview of what happens within Rucio, for a typical",source:"@site/../docs/replica_workflow.md",sourceDirName:".",slug:"/replica_workflow",permalink:"/documentation/replica_workflow",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/replica_workflow.md",tags:[],version:"current",lastUpdatedBy:"Radu Carpa",lastUpdatedAt:1679302004,formattedLastUpdatedAt:"Mar 20, 2023",frontMatter:{id:"replica_workflow",title:"Typical Replica Workflow"},sidebar:"docs",previous:{title:"Subscriptions",permalink:"/documentation/subscriptions"},next:{title:"Release Policy",permalink:"/documentation/releasepolicy"}},c={},d=[{value:"Replica paths on storage",id:"replica-paths-on-storage",level:2},{value:"Deterministic algorithm based on hashes",id:"deterministic-algorithm-based-on-hashes",level:2},{value:"Deterministic algorithm based on naming convention",id:"deterministic-algorithm-based-on-naming-convention",level:2},{value:"Non-Deterministic algorithm based on parent dataset",id:"non-deterministic-algorithm-based-on-parent-dataset",level:2},{value:"Replica is uploaded with the command line client",id:"replica-is-uploaded-with-the-command-line-client",level:2},{value:"Replica is created by a replication rule",id:"replica-is-created-by-a-replication-rule",level:2}],h={toc:d},m="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)(m,(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section gives an overview of what happens within Rucio, for a typical\nreplica workflow. Two workflows are described: When a replica is uploaded to\nRucio via a client and when a replica is created by a site to site transfer due\nto the creation of a ",(0,r.kt)("a",{parentName:"p",href:"/documentation/replica_management"},"replication rule"),"."),(0,r.kt)("h2",{id:"replica-paths-on-storage"},"Replica paths on storage"),(0,r.kt)("p",null,"Rucio has two basic paradigms in deciding the path for a replica on a specific\nstorage system. ",(0,r.kt)("strong",{parentName:"p"},"Deterministic")," and ",(0,r.kt)("strong",{parentName:"p"},"Non-deterministic")," paths. If we assume\na file whose data identifier is ",(0,r.kt)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1"),", thus the scope is\n",(0,r.kt)("inlineCode",{parentName:"p"},"user.jdoe")," and the name is ",(0,r.kt)("inlineCode",{parentName:"p"},"test.file.1"),". In Rucio a deterministically created\npath is a path which can be generated solely knowing the scope and name of a\ndata identifier (Ignoring the static prefix of the storage endpoint). For a\nnon-deterministic path additional information describing the file is necessary,\nsuch as meta-data, the dataset the file belongs to, etc."),(0,r.kt)("p",null,"Rucio supports pluggable algorithms for both deterministic and non-deterministic\nalgorithms. This section explains a few of them."),(0,r.kt)("h2",{id:"deterministic-algorithm-based-on-hashes"},"Deterministic algorithm based on hashes"),(0,r.kt)("p",null,"The hash deterministic algorithm is an algorithm commonly used in Rucio. The\nadvantage of this algorithm is that, due to the characteristics of cryptographic\nhash functions, the files are evenly distributed to directories. This can be an\nimportant characteristic for storage systems whose access performance degrades\nbased on the number of files in a directory."),(0,r.kt)("p",null,"For a data identifier, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," a md5-hashsum is calculated\n",(0,r.kt)("inlineCode",{parentName:"p"},"077c8119053bebb168d125034bff64ac"),". The generated path is then based on the\nfirst four characters of the hashsum. e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/07/7c/user.jdoe/test.file.1"),"."),(0,r.kt)("h2",{id:"deterministic-algorithm-based-on-naming-convention"},"Deterministic algorithm based on naming convention"),(0,r.kt)("p",null,"If a specific naming convention is enforced on the filenames, a possible\ndeterministic algorithm can be based on it."),(0,r.kt)("p",null,"For the data identifier ",(0,r.kt)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," the first part of the filename\n(",(0,r.kt)("inlineCode",{parentName:"p"},"test"),") is extracted and used to generate the path: ",(0,r.kt)("inlineCode",{parentName:"p"},"/test/user.jdoe/file.1")),(0,r.kt)("h2",{id:"non-deterministic-algorithm-based-on-parent-dataset"},"Non-Deterministic algorithm based on parent dataset"),(0,r.kt)("p",null,"If the file is part of a dataset, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"data:dataset1234")," the dataset can be\nused in the path of the filename. This is useful for e.g. tape storage systems,\nto keep the files belonging to the same dataset on the same tape."),(0,r.kt)("p",null,"For the data identifier ",(0,r.kt)("inlineCode",{parentName:"p"},"user.jdoe:test.file.1")," which is part of the dataset\n",(0,r.kt)("inlineCode",{parentName:"p"},"data:dataset1234")," the generated path is:\n",(0,r.kt)("inlineCode",{parentName:"p"},"/data/dataset1234/user.jdoe/test.file.1")),(0,r.kt)("h2",{id:"replica-is-uploaded-with-the-command-line-client"},"Replica is uploaded with the command line client"),(0,r.kt)("p",null,"This is a typical workflow when a user uploads multiple files, which are part of\na dataset, via the command line client."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"test.dataset")," is being registered at the server.  All files, or\ndatasets are associated to a ",(0,r.kt)("a",{parentName:"p",href:"/documentation/file_dataset_container"},"scope"),", if not\nspecifically mentioned the client will assume the default scope of the user,\nsuch as ",(0,r.kt)("inlineCode",{parentName:"p"},"user.jdoe"),". Thus the full data identifier for the dataset is\n",(0,r.kt)("inlineCode",{parentName:"p"},"user.jdoe:test.dataset"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The client queries the RSE information from the server. This not only gives a\nlist of prioritized write protocols to use but also the information if the\nRSE is a deterministic or non-deterministic one.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The file replica is registered as ",(0,r.kt)("inlineCode",{parentName:"p"},"COPYING")," on the RSE.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Based on the identified naming algorithm of the RSE and the list of\nprioritized write protocols, the file URL is calculated.  e.g. using the hash\nalgorithm from above:\n",(0,r.kt)("inlineCode",{parentName:"p"},"https://storageserver.organization.org/VO/data/07/7c/user.jdoe/test.file.1"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The file upload is done with the first prioritized protocol. If the upload\nfails, step 4 is repeated with the second prioritized protocol, etc.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the upload is successfully finished, the replica state is changed to\n",(0,r.kt)("inlineCode",{parentName:"p"},"AVAILABLE"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Step 3-6 are repeated (done in parallel) with all other files part of the\nuploaded dataset."))),(0,r.kt)("h2",{id:"replica-is-created-by-a-replication-rule"},"Replica is created by a replication rule"),(0,r.kt)("p",null,"This is a typical workflow if a file already exists in Rucio but the user wants\nto replicate it to a different RSE."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The user creates a replication rule for the dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"user.jdoe:test.dataset"),"\nat the server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Rucio server creates internal requests for each single file in the\ndataset and puts them in a queue to be read by the data transfer service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The data transfer submitter picks these requests up and queries the\ndestination RSE information for each file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Based on the identified naming algorithm of the destination RSE it creates\nthe destination URLs and creates the file replicas in ",(0,r.kt)("inlineCode",{parentName:"p"},"COPYING")," state.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The transfer service then submits the transfer job to the connected transfer\ntool (e.g. FTS)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the transfers are finished the transfer tool notifies Rucio about the\ntransfer success and the transfer services mark the replicas as ",(0,r.kt)("inlineCode",{parentName:"p"},"AVAILABLE"),"."))))}f.isMDXComponent=!0}}]);