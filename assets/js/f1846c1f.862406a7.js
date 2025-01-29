"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2132],{53911:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"started/concepts/replication_rules_examples","title":"Replication rule examples","description":"Replica management is based on replication rules defined on data identifiers. A","source":"@site/../docs/started/concepts/replication_rules_examples.md","sourceDirName":"started/concepts","slug":"/started/concepts/replication_rules_examples","permalink":"/documentation/started/concepts/replication_rules_examples","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/replication_rules_examples.md","tags":[],"version":"current","lastUpdatedBy":"Martin Barisits","lastUpdatedAt":1738156560000,"frontMatter":{"title":"Replication rule examples"},"sidebar":"docs","previous":{"title":"Replica management with replication rules","permalink":"/documentation/started/concepts/replica_management"},"next":{"title":"RSE Expressions","permalink":"/documentation/started/concepts/rse_expressions"}}');var a=t(74848),r=t(28453);const o={title:"Replication rule examples"},i=void 0,c={},l=[{value:"Examples",id:"examples",level:2},{value:"I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs",id:"i-want-to-have-2-replicas-of-first_dataset-and-second_dataset-on-tier-1-rses",level:3},{value:"I want to have 2 replicas on whatever T2 RSEs in the UK but not in Glasgow",id:"i-want-to-have-2-replicas-on-whatever-t2-rses-in-the-uk-but-not-in-glasgow",level:3}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"Replica management is based on replication rules defined on data identifiers. A\nreplication rule gets resolved and issues replica locks on the physical\nreplicas."}),"\n",(0,a.jsx)(s.p,{children:"A replication rule consists (besides other parameters) of a factor representing\nthe numbers of replicas wanted and a Rucio Storage Element Expression that\nallows to select a set of probable RSEs to store the replicas."}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.a,{href:"/documentation/started/concepts/rse_expressions",children:(0,a.jsx)(s.strong,{children:"RSE Expression"})})," gets resolved into a set of RSEs,\nwhich are possible destination RSEs for the number of replicas the user wants to\ncreate."]}),"\n",(0,a.jsxs)(s.p,{children:["Is possible to find detailed information and examples about how to write RSE\nExpressions ",(0,a.jsx)(s.a,{href:"/documentation/started/concepts/rse_expressions",children:(0,a.jsx)(s.strong,{children:"here"})}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(s.h3,{id:"i-want-to-have-2-replicas-of-first_dataset-and-second_dataset-on-tier-1-rses",children:"I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs"}),"\n",(0,a.jsxs)(s.p,{children:["The number 2 ",(0,a.jsx)(s.em,{children:"second_dataset"})," is the number of copies expected. At the end, the\nRSE Expression select all the Tier 1 RSEs as possible targets to store the\nreplicas.:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'tier=1'\n"})}),"\n",(0,a.jsxs)(s.p,{children:["To see all the possible targets, ",(0,a.jsx)(s.strong,{children:"rucio list-rses"})," command can be used:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"username@host:~$ rucio list-rses --rses 'tier=1'\n"})}),"\n",(0,a.jsx)(s.h3,{id:"i-want-to-have-2-replicas-on-whatever-t2-rses-in-the-uk-but-not-in-glasgow",children:"I want to have 2 replicas on whatever T2 RSEs in the UK but not in Glasgow"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'tier=2&country=uk\\site=GLASGOW'\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>i});var n=t(96540);const a={},r=n.createContext(a);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);