"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7541],{73635:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"operator/notifications","title":"Notifications","description":"Notifications","source":"@site/../docs/operator/notifications.md","sourceDirName":"operator","slug":"/operator/notifications","permalink":"/documentation/operator/notifications","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/notifications.md","tags":[],"version":"current","lastUpdatedBy":"Luis Antonio Obis Aparicio","lastUpdatedAt":1737101861000,"frontMatter":{"id":"notifications","title":"Notifications"},"sidebar":"docs","previous":{"title":"QoS RSE Configuration","permalink":"/documentation/operator/qos_rse_config"},"next":{"title":"rucio-abacus-account","permalink":"/documentation/bin/rucio-abacus-account"}}');var n=s(74848),r=s(28453);const d={id:"notifications",title:"Notifications"},a=void 0,o={},c=[{value:"Notifications",id:"notifications",level:2},{value:"Rucio Notifications",id:"rucio-notifications",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"notifications",children:"Notifications"}),"\n",(0,n.jsx)(t.p,{children:"Rucio generates several types of notifications, such as for rule state changes, transfer requests, etc.\nThese notifications are primarily useful to other systems for synchronisation purposes, e.g., notifying a workflow management system that a dataset has finished transferring or has been deleted."}),"\n",(0,n.jsx)(t.h3,{id:"rucio-notifications",children:"Rucio Notifications"}),"\n",(0,n.jsx)(t.p,{children:"The events generated by Rucio are categorized into different event types. Each event type has a different payload."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Context"}),(0,n.jsx)(t.th,{children:"Event Type"}),(0,n.jsx)(t.th,{children:"Payload example"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"While adding a DID, if the DID type is a Container"}),(0,n.jsx)(t.td,{children:"CREATE_CNT"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'account': 'ruciouser', 'scope': 'data', 'name': 'this.is.a.dataset', 'expired_at': '2023-07-05 14:51:55.378549' or None}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"While adding a DID, if the DID type is a DataSet"}),(0,n.jsx)(t.td,{children:"CREATE_DTS"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'account': 'ruciouser', 'scope': 'data', 'name': 'this.is.a.dataset', 'expired_at': '2023-07-05 14:51:55.378549' or None}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Submit transfer requests on destination RSEs for data identifiers."}),(0,n.jsx)(t.td,{children:"transfer_status"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'request-id': '414ac0cd34844a03a184ce4b0f640dd1', 'request-type': 'transfer', 'scope': 'data', 'name': 'this.is.a.test.file', 'dst-rse-id': '207228dfe3b246ab9d8b199c8358e864', 'dst-rse': 'TESTRSE', 'state': 'QUEUED', 'retry-count': 2, 'rule-id': '8f06b8ede5024e9fb8c1aa4d761627f0', 'activity': 'User Subscription', 'file-size': 1000000, 'bytes': 1000000,'checksum-md5': '9e107d9d372bb6826bd81d3542a419d6', 'checksum-adler': '08880271', 'queued_at': '2023-07-05 14:51:55.378549'}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Schedule removal of the entry from the DIDs table"}),(0,n.jsx)(t.td,{children:"INCOMPLETE"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Delete empty DIDs where the DIDType is DATASET"}),(0,n.jsx)(t.td,{children:"ERASE"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'scope': 'data', 'name': 'this.is.a.dataset','account': 'root'}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"When the replication rule transitioning into OK_STATE for DIDs which are closed"}),(0,n.jsx)(t.td,{children:"RULE_OK"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'scope': 'data','name': 'this.is.a.dataset','rule_id': '18432d3c5aad43e3a4ed10ff61e5d1ce','progress': 30,'vo': 'testvo'}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"For replication replication rule, for each 10% of progress"}),(0,n.jsx)(t.td,{children:"RULE_PROGRESS"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'scope': 'data','name': 'this.is.a.dataset','rule_id': '18432d3c5aad43e3a4ed10ff61e5d1ce','progress': 30,'vo': 'testvo'}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"When the replication rule transitioning into OK_STATE for each DATASET covered by the rule"}),(0,n.jsx)(t.td,{children:"DATASETLOCK_OK"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'scope': 'data','name': 'this.is.a.dataset','rse': 'TESTRSE', 'rse_id': '3ddb29c028574f7288595711bc83f3e6''vo': 'testvo'}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"When a transfer has been completed"}),(0,n.jsx)(t.td,{children:"transfer-done"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'scope': 'data','name': 'this.is.a.dataset', 'src-rse': 'TESTRSE', 'dst-rse': 'TESTRSE', 'activity': 'User Subscription', 'request-id': None, 'transfer-id': None, 'created_at': '2023-07-05 14:51:55.378549', 'transferred_at': '2023-07-05 14:51:55.378549'}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"When a transfer has been fail"}),(0,n.jsx)(t.td,{children:"transfer-failed"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'scope': 'data','name': 'this.is.a.dataset', 'src-rse': 'TESTRSE', 'dst-rse': 'TESTRSE', 'activity': 'User Subscription', 'request-id': None, 'transfer-id': None, 'created_at': '2023-07-05 14:51:55.378549', 'transferred_at': '2023-07-05 14:51:55.378549'}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"When a deletion has been successful"}),(0,n.jsx)(t.td,{children:"deletion-done"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'scope': 'data','name': 'this.is.a.dataset', 'rse': 'TESTRSE','request-id': None, 'url': None,'bytes': 1000000, 'created_at': '2023-07-05 14:51:55.378549'}"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"When a deletion has been fail"}),(0,n.jsx)(t.td,{children:"deletion-failed"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"{'scope': 'data','name': 'this.is.a.dataset', 'rse': 'TESTRSE','request-id': None, 'url': None,'bytes': 1000000, 'created_at': '2023-07-05 14:51:55.378549'}"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>a});var i=s(96540);const n={},r=i.createContext(n);function d(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);