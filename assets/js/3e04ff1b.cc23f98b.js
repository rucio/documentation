"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[586],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}},36361:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"started/concepts/replica_management","title":"Replica management with replication rules","description":"Replica management is based on replication rules defined on data identifiers","source":"@site/../docs/started/concepts/replica_management.md","sourceDirName":"started/concepts","slug":"/started/concepts/replica_management","permalink":"/documentation/started/concepts/replica_management","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/replica_management.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1743492804000,"frontMatter":{"title":"Replica management with replication rules"},"sidebar":"docs","previous":{"title":"Permission model","permalink":"/documentation/started/concepts/permission_model"},"next":{"title":"Replication rule examples","permalink":"/documentation/started/concepts/replication_rules_examples"}}');var s=t(74848),r=t(28453);const l={title:"Replica management with replication rules"},o=void 0,a={},d=[{value:"Rule grouping and replica storage",id:"rule-grouping-and-replica-storage",level:2},{value:"Footnotes",id:"footnotes",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Replica management is based on replication rules defined on data identifiers\n(files, datasets, containers). A replication rule is owned by an account and\ndefines the minimum number of replicas to be available on a list of RSEs,\ndenoted by an ",(0,s.jsx)(n.a,{href:"/documentation/started/concepts/rse_expressions",children:"RSE Expression"}),".  Accounts are allowed to set\nmultiple rules",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". Rules may optionally have a limited lifetime and can be\nadded, removed or modified at any time."]}),"\n",(0,s.jsx)(n.p,{children:"An example listing of replication rules is given below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"prod: 1x replica @ CERN, no lifetime"}),"\n",(0,s.jsx)(n.li,{children:"barisits: 1x replica @ US-T2, until 2019-01-01"}),"\n",(0,s.jsx)(n.li,{children:"vgaronne: 2x replica @ T1, no lifetime"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A rule engine validates the rules and creates transfer primitives to fulfil all\nrules, e.g. transfer a file from RSE A to RSE B. The rule engine is triggered\nwhen a new rule is defined on an existing data identifier, or when a file is\nadded to a dataset with existing rules.  The rule engine will only create the\nminimum set of necessary transfer primitives to satisfy all rules."}),"\n",(0,s.jsx)(n.p,{children:"Notifications can be provided for rules and their underlying transfer\nrequests. All transfer requests are transient."}),"\n",(0,s.jsx)(n.p,{children:"The deletion service supports two different modes: greedy and non-greedy. Greedy\nmeans that the service tries to immediately delete all replicas which are not\nprotected by a replication rule. Non-greedy deletion is triggered when storage\npolicy dictates that space must be freed. The deletion service will look for\nreplicas on that RSE which can be deleted without violating any replication\nrule. The deletion service will use a Least Recently Used (LRU) algorithm to\nselect replicas for deletion. The deletion service will also immediately delete\nall replicas of any file which is declared obsolete."}),"\n",(0,s.jsxs)(n.p,{children:["Some examples of replication rules are listed\n",(0,s.jsx)(n.a,{href:"/documentation/started/concepts/replication_rules_examples",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"rule-grouping-and-replica-storage",children:"Rule grouping and replica storage"}),"\n",(0,s.jsx)(n.p,{children:"The following two parameters determine the way the files to be replicated\nare assigned to suitable RSEs:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.strong,{children:"rule grouping"}),": ",(0,s.jsx)(n.code,{children:"ALL"}),", ",(0,s.jsx)(n.code,{children:"DATASET"}),", ",(0,s.jsx)(n.code,{children:"NONE"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/documentation/started/concepts/file_dataset_container",children:"DID type"}),": ",(0,s.jsx)(n.code,{children:"FILE"}),", ",(0,s.jsx)(n.code,{children:"DATASET"}),", ",(0,s.jsx)(n.code,{children:"CONTAINER"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The table below describes the resulting replication logic\ndepending on the combination of rule grouping (header row) and DID type (left column)."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"ALL"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"DATASET"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"NONE"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"FILE"})}),(0,s.jsx)(n.td,{children:"All files must be on the same RSE"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"No restrictions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"DATASET"})}),(0,s.jsx)(n.td,{children:"All files must be on the same RSE"}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsx)(n.td,{children:"No restrictions"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"CONTAINER"})}),(0,s.jsx)(n.td,{children:"All files must be on the same RSE"}),(0,s.jsx)(n.td,{children:"All files in a dataset must be on the same RSE, but different datasets can be on different RSEs"}),(0,s.jsx)(n.td,{children:"No restrictions"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"footnotes",children:"Footnotes"}),"\n","\n",(0,s.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(n.p,{children:["The system may reject rules if these violate other policies, e.g., only\nspecific accounts are allowed to request replication rules for tape systems. ",(0,s.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);