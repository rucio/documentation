"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6913],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},42434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"started/concepts/deletion_overview","title":"Deletion Overview","description":"Deletion in Rucio can be performed in broadly two ways.","source":"@site/../docs/started/concepts/deletion_overview.md","sourceDirName":"started/concepts","slug":"/started/concepts/deletion_overview","permalink":"/documentation/started/concepts/deletion_overview","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/deletion_overview.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1743711841000,"frontMatter":{"id":"deletion_overview","title":"Deletion Overview"},"sidebar":"docs","previous":{"title":"Typical Replica Workflow","permalink":"/documentation/started/concepts/replica_workflow"},"next":{"title":"Release Policy","permalink":"/documentation/started/releasepolicy"}}');var i=t(74848),r=t(28453);const o={id:"deletion_overview",title:"Deletion Overview"},l=void 0,a={},d=[];function c(e){const n={code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Deletion in Rucio can be performed in broadly two ways."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Rule based deletion:"}),"\n",(0,i.jsxs)(n.p,{children:["Each rule has a corresponding lifetime associated with it (default is None). The attribute ",(0,i.jsx)(n.code,{children:"expires_at"})," of the rule is the time when the lifetime is set plus the lifetime associated with the rule.\nAdditionally each rule can be ",(0,i.jsx)(n.code,{children:"locked"})," for additional protection. If a rule is locked the rule is protected from expiration.\nThe ",(0,i.jsx)(n.code,{children:"Judge-cleaner"})," daemon is responsible for handling expired rules. If an expired rule is not locked it sets ",(0,i.jsx)(n.code,{children:"tombstones"})," on all replicas not covered by the rule anymore (or any other rule). These replicas then become eligible for deletion."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DID based deletion:"}),"\n",(0,i.jsxs)(n.p,{children:["Additionally, each DID also has a lifetime associated with it (default is None). The metadata ",(0,i.jsx)(n.code,{children:"expires_at"})," of the DID is calculated similarly to a rule.\nThe ",(0,i.jsx)(n.code,{children:"Undertaker"})," daemon is responsible for handling expired DIDs. The daemon checks if none of the associated rules to the DID are locked, if not it removes all rules of the DID (see section above). The DID itself is then removed from the catalog."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"The DID expiration overrules the rule expiration. But the locked rules are protected."})}),"\n",(0,i.jsxs)(n.p,{children:["After the tombstone is set for replicas, the actual data deletion is done by the ",(0,i.jsx)(n.code,{children:"Reaper"})," daemon. The reaper physically deletes the tombstoned replicas from storage.\nThe deletion service supports two different modes: greedy and non-greedy."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Greedy"}),"\n",(0,i.jsx)(n.p,{children:"The reaper daemon gets all the replicas with tombstone in the RSE and immediately deletes all replicas."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Non-greedy"}),"\n",(0,i.jsx)(n.p,{children:"The reaper daemon first checks if the free space is needed in the RSE. The needed free space is the difference of minimum free space (attribute set for RSE) and actual free space in RSE. Deletion only occurs once free space is needed.\nDeletions are processed by Least Recently Used (LRU) algorithm, thus oldest accessed (tombstoned) replicas are deleted first."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mermaid",children:'flowchart TB\n\n    A((Undertaker))--\x3e1[Get expired dids]\n\n    1--\x3e2[Get all rules for did]\n    2--\x3eD{Are Rules Locked?}\n\n    D--"yes"--\x3ef([Finished])\n    D--"no"--\x3e sub1[Remove Rules]\n\n    subgraph sg[ ]\n        sub1[Remove Rules] --\x3e sub2["`Set tombstones \n                        on replicas`"]\n        sub2 --\x3e sub3[Remove DID]\n        sub3 --\x3e sub4{"`Does the DID \n                        have children?`"}\n        sub4 --yes--\x3esub5["`Remove Child\n                             DID and Replicas`"]\n    end\n\n    sub4 --"no"--\x3e f\n    sub5--\x3e f\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mermaid",children:'    graph TD\n\n    R((Reaper)) --\x3e RSEs[Get all RSEs]\n    RSEs --\x3e D1{RSE.availability_delete}\n    D1--"False"--\x3e f([Finished])\n    D1--"True"--\x3e Greedy_RSE{Greedy RSE?}\n\n    %% Non-greedy RSE Logic\n    Greedy_RSE--"no"--\x3e MinFreeSpace{Min free space <= Actual Free Space}\n    MinFreeSpace--"no"--\x3e f\n    MinFreeSpace--"yes"--\x3e i[List replicas with tombstones] --\x3e id4[Apply LRU algorithm to replicas]\n    id4 --\x3e RemoveReplicas[Remove replicas]\n\n    %% Greedy RSE Logic\n    Greedy_RSE--"yes" --\x3e j[List replicas with tombstones] --\x3e RemoveReplicas --\x3e f\n\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}}}]);