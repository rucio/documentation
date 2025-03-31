"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7400],{28453:(e,i,s)=>{s.d(i,{R:()=>n,x:()=>c});var t=s(96540);const a={},r=t.createContext(a);function n(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(r.Provider,{value:i},e.children)}},60968:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator/suspicious-replica-recoverer","title":"Suspicious Replica Recoverer","description":"Rucio has a daemon that is in charge of handling and recovering suspicious replicas, called the suspicious replica recoverer. A suspicious replica is a file where an attempt to access the file resulted in certain types of error messages. Whether the error was the result of an issue with the file itself or if the problem was caused by something else (e.g. there could have been a problem with the server on which the file is located), is unknown and needs to be taken into account by the suspicious replica recoverer.","source":"@site/../docs/operator/suspicious_replica_recoverer.md","sourceDirName":"operator","slug":"/operator/suspicious-replica-recoverer","permalink":"/documentation/operator/suspicious-replica-recoverer","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/suspicious_replica_recoverer.md","tags":[],"version":"current","lastUpdatedBy":"maany","lastUpdatedAt":1743424759000,"frontMatter":{"id":"suspicious-replica-recoverer","title":"Suspicious Replica Recoverer"},"sidebar":"docs","previous":{"title":"Notifications","permalink":"/documentation/operator/notifications"},"next":{"title":"Executables","permalink":"/documentation/category/executables"}}');var a=s(74848),r=s(28453);const n={id:"suspicious-replica-recoverer",title:"Suspicious Replica Recoverer"},c=void 0,o={},l=[{value:"Suspicious Replicas",id:"suspicious-replicas",level:2},{value:"Last remaining copy of a file",id:"last-remaining-copy-of-a-file",level:2},{value:"Replica policies",id:"replica-policies",level:2},{value:"<code>nattempts = 1</code>",id:"nattempts--1",level:2},{value:"Passive and active modes",id:"passive-and-active-modes",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Rucio has a daemon that is in charge of handling and recovering suspicious replicas, called the suspicious replica recoverer. A suspicious replica is a file where an attempt to access the file resulted in certain types of error messages. Whether the error was the result of an issue with the file itself or if the problem was caused by something else (e.g. there could have been a problem with the server on which the file is located), is unknown and needs to be taken into account by the suspicious replica recoverer."}),"\n",(0,a.jsxs)(i.p,{children:["An overview of the typical workflow for a replica before it reaches the suspicious replica recoverer can be seen ",(0,a.jsx)(i.a,{href:"https://rucio.cern.ch/documentation/started/concepts/replica_workflow/",children:"here"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"suspicious-replicas",children:"Suspicious Replicas"}),"\n",(0,a.jsxs)(i.p,{children:["Replicas can have various states, two of which are ",(0,a.jsx)(i.code,{children:"SUSPICIOUS"})," and ",(0,a.jsx)(i.code,{children:"BAD"}),". Files that are ",(0,a.jsx)(i.code,{children:"BAD"})," need to either be replaced or removed. The job of the suspicious replica recoverer is to decide how a suspicious replica should be handled."]}),"\n",(0,a.jsxs)(i.p,{children:["A replica can be declared suspicious multiple times: each time an attempt to access the replica results in an error message, the replica is declared suspicious. This allows the daemon to handle replicas differently depending on how many times it has been declared suspicious. As long as a file has been declared suspicious less than a certain number of times (referred to as ",(0,a.jsx)(i.code,{children:"nattempts"}),"), it's assumed that there is nothing wrong with the replica and that the errors can be ignored. Once there are more that ",(0,a.jsx)(i.code,{children:"nattempts"})," suspicious declarations, the replica is handled by the daemon."]}),"\n",(0,a.jsxs)(i.p,{children:["Before replicas are handled individually, the daemon checks how many suspicious replicas are on each Rucio storage element (RSE), which are the servers that host replicas. If an RSE has more than ",(0,a.jsx)(i.code,{children:"limit_suspicious_files_on_rse"})," suspicious replicas, then it is assumed that the problem lays with the RSE and not the replicas themselves. Under such a circumstance, the replicas on that RSE are set to the state ",(0,a.jsx)(i.code,{children:"TEMPORARILY UNAVAILABLE"})," for three days. A replica in this state can't be interacted with. The assumption is that after three days, problems with the RSE will have been fixed. If not, then the replicas on that RSE will end up being declared suspicious en masse, which will result in them being set as ",(0,a.jsx)(i.code,{children:"TEMPORARILY UNAVAILABLE"})," again. This cycle will be repeated until the underlying issue is solved."]}),"\n",(0,a.jsx)(i.h2,{id:"last-remaining-copy-of-a-file",children:"Last remaining copy of a file"}),"\n",(0,a.jsxs)(i.p,{children:["Before any handling of a replica is done, the daemon first checks to see if the replica is the last remaining copy of a file. Specifically, if there is another copy of the replica on a different RSE, then the suspicious replica can safely be declared ",(0,a.jsx)(i.code,{children:"BAD"}),". If, however, the replica is the last remaining copy, then steps are taken to decide whether or not the replica can be declared ",(0,a.jsx)(i.code,{children:"BAD"}),":\n-",(0,a.jsx)(i.strong,{children:"Auditor/checksum"}),": if the replica was declared ",(0,a.jsx)(i.code,{children:"SUSPICIOUS"})," by the auditor daemon or if the term ",(0,a.jsx)(i.code,{children:"checksum"})," appears in the error message that lead to the replica being declared ",(0,a.jsx)(i.code,{children:"SUSPICIOUS"}),", then the replica is declared ",(0,a.jsx)(i.code,{children:"BAD"}),".\n-",(0,a.jsx)(i.strong,{children:"User and log files"}),": if the replica is for a user or log file, then the replica is declared ",(0,a.jsx)(i.code,{children:"BAD"}),".\n-",(0,a.jsx)(i.strong,{children:"Policy"}),": if a replica survives the first two checks, then the handling of the replica is decided by its associated policy."]}),"\n",(0,a.jsx)(i.h2,{id:"replica-policies",children:"Replica policies"}),"\n",(0,a.jsx)(i.p,{children:"A policy defines how a replica is to be handled by the daemon based on the replica's datatype and scope. This approach allows for flexibility and specific handling. By default, all replicas are ignored, meaning that if there is no policy specified for the datatype/scope, then no actions are taken on the replica and it will remain untouched."}),"\n",(0,a.jsxs)(i.p,{children:["The current polices are:\n-",(0,a.jsx)(i.strong,{children:"ignore"}),": this is the default policy. Datatypes and scopes can be explicitly set to be ignored, which highlights that a decision has purposefully been made to not perform any actions on these replicas. This is done to prevent mistakes in the future.\n-",(0,a.jsx)(i.strong,{children:"declare bad"}),": this dictates that any associated datatypes or scopes will be declared ",(0,a.jsx)(i.code,{children:"BAD"})," by the daemon.\n-",(0,a.jsx)(i.strong,{children:"dry run"}),": this policy makes the daemon handle the replicas as if they were to be declared ",(0,a.jsx)(i.code,{children:"BAD"}),", but at the final step, no actions are taken. This results in log messages with which it becomes possible to see how many replicas of the given datatype/scope would be declared ",(0,a.jsx)(i.code,{children:"BAD"})," by the daemon."]}),"\n",(0,a.jsx)(i.p,{children:"The replica policies can easily be expanded in the future."}),"\n",(0,a.jsx)(i.p,{children:"The policies are stored in a JSON file, an example of which can be seen in he following:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{children:'[\n    {\n        "action": "declare bad",\n        "datatype": ["HITS"],\n        "scope": []\n    },\n    {\n        "action": "ignore",\n        "datatype": ["RAW"],\n        "scope": []\n    }\n    {\n        "action": "dry run",\n        "datatype": [],\n        "scope": ["mc.*"]\n    }\n]\n'})}),"\n",(0,a.jsx)(i.h2,{id:"nattempts--1",children:(0,a.jsx)(i.code,{children:"nattempts = 1"})}),"\n",(0,a.jsxs)(i.p,{children:["A very large number of suspicious replicas have ",(0,a.jsx)(i.code,{children:"nattempts = 1"}),". To clean up the database, replicas with ",(0,a.jsx)(i.code,{children:"nattempts = 1"}),' that also have a policy that would result in the replica being declared bad are given a "boost". This means that rules for those replicas are created. These rules only exist to create an attempt to interact with the replica. If there is in fact a problem with the replica (or the RSE), then each rule will result in an error and that replica will be declared ',(0,a.jsx)(i.code,{children:"SUSPICIOUS"})," once for each rule, which will bring the number of declarations over the ",(0,a.jsx)(i.code,{children:"nattempts"})," barrier. This results in the replica being handled normally by the daemon during the daemon's next cycle."]}),"\n",(0,a.jsx)(i.h2,{id:"passive-and-active-modes",children:"Passive and active modes"}),"\n",(0,a.jsx)(i.p,{children:"The suspicious replica recoverer has two modes of operation:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Passive (default)"}),": no actions are taken by the daemon, but log files are generated as if the actions were taken (like a dry-run mode). Useful for testing daemon runs without affecting data."]}),"\n",(0,a.jsxs)(i.li,{children:[(0,a.jsx)(i.strong,{children:"Active"}),": the daemon is allowed to take actions on the replicas. This option has to explicitly be set when the daemon is called."]}),"\n"]}),"\n",(0,a.jsx)(i.p,{children:"A simplified version of the finite state diagram of the daemon can be found below:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Suspicious replica recoverer diagram",src:s(84957).A+"",width:"1360",height:"703"})})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},84957:(e,i,s)=>{s.d(i,{A:()=>t});const t=s.p+"assets/images/suspicious_replica_recoverer_diagram-41419d0e06dbd18574b501dbf95c5305.png"}}]);