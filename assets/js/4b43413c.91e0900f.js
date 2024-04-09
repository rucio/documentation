"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7541],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,y=p["".concat(s,".").concat(g)]||p[g]||u[g]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},31777:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(58168),r=a(98587),i=(a(96540),a(15680)),o=["components"],l={id:"notifications",title:"Notifications"},s=void 0,d={unversionedId:"operator/notifications",id:"operator/notifications",title:"Notifications",description:"Notifications",source:"@site/../docs/operator/notifications.md",sourceDirName:"operator",slug:"/operator/notifications",permalink:"/documentation/operator/notifications",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/notifications.md",tags:[],version:"current",lastUpdatedBy:"Dimitrios Christidis",lastUpdatedAt:1712663262,formattedLastUpdatedAt:"Apr 9, 2024",frontMatter:{id:"notifications",title:"Notifications"},sidebar:"docs",previous:{title:"QoS RSE Configuration",permalink:"/documentation/operator/qos_rse_config"},next:{title:"rucio-abacus-account",permalink:"/documentation/bin/rucio-abacus-account"}},c={},p=[{value:"Notifications",id:"notifications",level:2},{value:"Rucio Notifications",id:"rucio-notifications",level:3}],u={toc:p},g="wrapper";function y(e){var t=e.components,a=(0,r.A)(e,o);return(0,i.yg)(g,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"notifications"},"Notifications"),(0,i.yg)("p",null,"Rucio generates several types of notifications, such as for rule state changes, transfer requests, etc.\nThese notifications are primarily useful to other systems for synchronisation purposes, e.g., notifying a workflow management system that a dataset has finished transferring or has been deleted."),(0,i.yg)("h3",{id:"rucio-notifications"},"Rucio Notifications"),(0,i.yg)("p",null,"The events generated by Rucio are categorized into different event types. Each event type has a different payload."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Context"),(0,i.yg)("th",{parentName:"tr",align:null},"Event Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Payload example"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"While adding a DID, if the DID type is a Container"),(0,i.yg)("td",{parentName:"tr",align:null},"CREATE_CNT"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'account': 'ruciouser', 'scope': 'data', 'name': 'this.is.a.dataset', 'expired_at': '2023-07-05 14:51:55.378549' or None}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"While adding a DID, if the DID type is a DataSet"),(0,i.yg)("td",{parentName:"tr",align:null},"CREATE_DTS"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'account': 'ruciouser', 'scope': 'data', 'name': 'this.is.a.dataset', 'expired_at': '2023-07-05 14:51:55.378549' or None}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Submit transfer requests on destination RSEs for data identifiers."),(0,i.yg)("td",{parentName:"tr",align:null},"transfer_status"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'request-id': '414ac0cd34844a03a184ce4b0f640dd1', 'request-type': 'transfer', 'scope': 'data', 'name': 'this.is.a.test.file', 'dst-rse-id': '207228dfe3b246ab9d8b199c8358e864', 'dst-rse': 'TESTRSE', 'state': 'QUEUED', 'retry-count': 2, 'rule-id': '8f06b8ede5024e9fb8c1aa4d761627f0', 'activity': 'User Subscription', 'file-size': 1000000, 'bytes': 1000000,'checksum-md5': '9e107d9d372bb6826bd81d3542a419d6', 'checksum-adler': '08880271', 'queued_at': '2023-07-05 14:51:55.378549'}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Schedule removal of the entry from the DIDs table"),(0,i.yg)("td",{parentName:"tr",align:null},"INCOMPLETE"),(0,i.yg)("td",{parentName:"tr",align:null},"-")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Delete empty DIDs where the DIDType is DATASET"),(0,i.yg)("td",{parentName:"tr",align:null},"ERASE"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'scope': 'data', 'name': 'this.is.a.dataset','account': 'root'}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"When the replication rule transitioning into OK_STATE for DIDs which are closed"),(0,i.yg)("td",{parentName:"tr",align:null},"RULE_OK"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'scope': 'data','name': 'this.is.a.dataset','rule_id': '18432d3c5aad43e3a4ed10ff61e5d1ce','progress': 30,'vo': 'testvo'}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"For replication replication rule, for each 10% of progress"),(0,i.yg)("td",{parentName:"tr",align:null},"RULE_PROGRESS"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'scope': 'data','name': 'this.is.a.dataset','rule_id': '18432d3c5aad43e3a4ed10ff61e5d1ce','progress': 30,'vo': 'testvo'}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"When the replication rule transitioning into OK_STATE for each DATASET covered by the rule"),(0,i.yg)("td",{parentName:"tr",align:null},"DATASETLOCK_OK"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'scope': 'data','name': 'this.is.a.dataset','rse': 'TESTRSE', 'rse_id': '3ddb29c028574f7288595711bc83f3e6''vo': 'testvo'}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"When a transfer has been completed"),(0,i.yg)("td",{parentName:"tr",align:null},"transfer-done"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'scope': 'data','name': 'this.is.a.dataset', 'src-rse': 'TESTRSE', 'dst-rse': 'TESTRSE', 'activity': 'User Subscription', 'request-id': None, 'transfer-id': None, 'created_at': '2023-07-05 14:51:55.378549', 'transferred_at': '2023-07-05 14:51:55.378549'}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"When a transfer has been fail"),(0,i.yg)("td",{parentName:"tr",align:null},"transfer-failed"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'scope': 'data','name': 'this.is.a.dataset', 'src-rse': 'TESTRSE', 'dst-rse': 'TESTRSE', 'activity': 'User Subscription', 'request-id': None, 'transfer-id': None, 'created_at': '2023-07-05 14:51:55.378549', 'transferred_at': '2023-07-05 14:51:55.378549'}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"When a deletion has been successful"),(0,i.yg)("td",{parentName:"tr",align:null},"deletion-done"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'scope': 'data','name': 'this.is.a.dataset', 'rse': 'TESTRSE','request-id': None, 'url': None,'bytes': 1000000, 'created_at': '2023-07-05 14:51:55.378549'}"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"When a deletion has been fail"),(0,i.yg)("td",{parentName:"tr",align:null},"deletion-failed"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"{'scope': 'data','name': 'this.is.a.dataset', 'rse': 'TESTRSE','request-id': None, 'url': None,'bytes': 1000000, 'created_at': '2023-07-05 14:51:55.378549'}"))))))}y.isMDXComponent=!0}}]);