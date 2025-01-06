"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2815],{49626:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"started/concepts/replica_workflow","title":"Typical Replica Workflow","description":"This section gives an overview of what happens within Rucio, for a typical","source":"@site/../docs/started/concepts/replica_workflow.md","sourceDirName":"started/concepts","slug":"/started/concepts/replica_workflow","permalink":"/documentation/started/concepts/replica_workflow","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/replica_workflow.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1734615381000,"frontMatter":{"id":"replica_workflow","title":"Typical Replica Workflow"},"sidebar":"docs","previous":{"title":"Subscriptions","permalink":"/documentation/started/concepts/subscriptions"},"next":{"title":"Release Policy","permalink":"/documentation/started/releasepolicy"}}');var s=i(74848),a=i(28453);const r={id:"replica_workflow",title:"Typical Replica Workflow"},o=void 0,c={},d=[{value:"Replica paths on storage",id:"replica-paths-on-storage",level:2},{value:"Deterministic algorithm based on hashes",id:"deterministic-algorithm-based-on-hashes",level:2},{value:"Deterministic algorithm based on naming convention",id:"deterministic-algorithm-based-on-naming-convention",level:2},{value:"Non-Deterministic algorithm based on parent dataset",id:"non-deterministic-algorithm-based-on-parent-dataset",level:2},{value:"Replica is uploaded with the command line client",id:"replica-is-uploaded-with-the-command-line-client",level:2},{value:"Replica is created by a replication rule",id:"replica-is-created-by-a-replication-rule",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["This section gives an overview of what happens within Rucio, for a typical\nreplica workflow. Two workflows are described: When a replica is uploaded to\nRucio via a client and when a replica is created by a site to site transfer due\nto the creation of a ",(0,s.jsx)(t.a,{href:"/documentation/started/concepts/replica_management",children:"replication rule"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"replica-paths-on-storage",children:"Replica paths on storage"}),"\n",(0,s.jsxs)(t.p,{children:["Rucio has two basic paradigms in deciding the path for a replica on a specific\nstorage system. ",(0,s.jsx)(t.strong,{children:"Deterministic"})," and ",(0,s.jsx)(t.strong,{children:"Non-deterministic"})," paths. If we assume\na file whose data identifier is ",(0,s.jsx)(t.code,{children:"user.jdoe:test.file.1"}),", thus the scope is\n",(0,s.jsx)(t.code,{children:"user.jdoe"})," and the name is ",(0,s.jsx)(t.code,{children:"test.file.1"}),". In Rucio a deterministically created\npath is a path which can be generated solely knowing the scope and name of a\ndata identifier (Ignoring the static prefix of the storage endpoint). For a\nnon-deterministic path additional information describing the file is necessary,\nsuch as meta-data, the dataset the file belongs to, etc."]}),"\n",(0,s.jsx)(t.p,{children:"Rucio supports pluggable algorithms for both deterministic and non-deterministic\nalgorithms. This section explains a few of them."}),"\n",(0,s.jsx)(t.h2,{id:"deterministic-algorithm-based-on-hashes",children:"Deterministic algorithm based on hashes"}),"\n",(0,s.jsx)(t.p,{children:"The hash deterministic algorithm is an algorithm commonly used in Rucio. The\nadvantage of this algorithm is that, due to the characteristics of cryptographic\nhash functions, the files are evenly distributed to directories. This can be an\nimportant characteristic for storage systems whose access performance degrades\nbased on the number of files in a directory."}),"\n",(0,s.jsxs)(t.p,{children:["For a data identifier, e.g. ",(0,s.jsx)(t.code,{children:"user.jdoe:test.file.1"})," a md5-hashsum is calculated\n",(0,s.jsx)(t.code,{children:"077c8119053bebb168d125034bff64ac"}),". The generated path is then based on the\nfirst four characters of the hashsum. e.g. ",(0,s.jsx)(t.code,{children:"/user/jdoe/07/7c/test.file.1"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"deterministic-algorithm-based-on-naming-convention",children:"Deterministic algorithm based on naming convention"}),"\n",(0,s.jsx)(t.p,{children:"If a specific naming convention is enforced on the filenames, a possible\ndeterministic algorithm can be based on it."}),"\n",(0,s.jsxs)(t.p,{children:["For the data identifier ",(0,s.jsx)(t.code,{children:"user.jdoe:test.file.1"})," the first part of the filename\n(",(0,s.jsx)(t.code,{children:"test"}),") is extracted and used to generate the path: ",(0,s.jsx)(t.code,{children:"/test/user.jdoe/file.1"})]}),"\n",(0,s.jsx)(t.h2,{id:"non-deterministic-algorithm-based-on-parent-dataset",children:"Non-Deterministic algorithm based on parent dataset"}),"\n",(0,s.jsxs)(t.p,{children:["If the file is part of a dataset, e.g. ",(0,s.jsx)(t.code,{children:"data:dataset1234"})," the dataset can be\nused in the path of the filename. This is useful for e.g. tape storage systems,\nto keep the files belonging to the same dataset on the same tape."]}),"\n",(0,s.jsxs)(t.p,{children:["For the data identifier ",(0,s.jsx)(t.code,{children:"user.jdoe:test.file.1"})," which is part of the dataset\n",(0,s.jsx)(t.code,{children:"data:dataset1234"})," the generated path is:\n",(0,s.jsx)(t.code,{children:"/data/dataset1234/user.jdoe/test.file.1"})]}),"\n",(0,s.jsx)(t.h2,{id:"replica-is-uploaded-with-the-command-line-client",children:"Replica is uploaded with the command line client"}),"\n",(0,s.jsx)(t.p,{children:"This is a typical workflow when a user uploads multiple files, which are part of\na dataset, via the command line client."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The dataset ",(0,s.jsx)(t.code,{children:"test.dataset"})," is being registered at the server.  All files, or\ndatasets are associated to a ",(0,s.jsx)(t.a,{href:"/documentation/started/concepts/file_dataset_container",children:"scope"}),", if not\nspecifically mentioned the client will assume the default scope of the user,\nsuch as ",(0,s.jsx)(t.code,{children:"user.jdoe"}),". Thus the full data identifier for the dataset is\n",(0,s.jsx)(t.code,{children:"user.jdoe:test.dataset"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The client queries the RSE information from the server. This not only gives a\nlist of prioritized write protocols to use but also the information if the\nRSE is a deterministic or non-deterministic one."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The file replica is registered as ",(0,s.jsx)(t.code,{children:"COPYING"})," on the RSE."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Based on the identified naming algorithm of the RSE and the list of\nprioritized write protocols, the file URL is calculated.  e.g. using the hash\nalgorithm from above:\n",(0,s.jsx)(t.code,{children:"https://storageserver.organization.org/VO/data/user/jdoe/07/7c/test.file.1"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The file upload is done with the first prioritized protocol. If the upload\nfails, step 4 is repeated with the second prioritized protocol, etc."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Once the upload is successfully finished, the replica state is changed to\n",(0,s.jsx)(t.code,{children:"AVAILABLE"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Step 3-6 are repeated (done in parallel) with all other files part of the\nuploaded dataset."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"replica-is-created-by-a-replication-rule",children:"Replica is created by a replication rule"}),"\n",(0,s.jsx)(t.p,{children:"This is a typical workflow if a file already exists in Rucio but the user wants\nto replicate it to a different RSE."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["The user creates a replication rule for the dataset ",(0,s.jsx)(t.code,{children:"user.jdoe:test.dataset"}),"\nat the server."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The Rucio server creates internal requests for each single file in the\ndataset and puts them in a queue to be read by the data transfer service."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The data transfer submitter picks these requests up and queries the\ndestination RSE information for each file."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Based on the identified naming algorithm of the destination RSE it creates\nthe destination URLs and creates the file replicas in ",(0,s.jsx)(t.code,{children:"COPYING"})," state."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"The transfer service then submits the transfer job to the connected transfer\ntool (e.g. FTS)"}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Once the transfers are finished the transfer tool notifies Rucio about the\ntransfer success and the transfer services mark the replicas as ",(0,s.jsx)(t.code,{children:"AVAILABLE"}),"."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var n=i(96540);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);