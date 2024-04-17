"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2132],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>f});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35844:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(58168),a=r(98587),s=(r(96540),r(15680)),o=["components"],i={title:"Replication rule examples"},l=void 0,c={unversionedId:"started/concepts/replication_rules_examples",id:"started/concepts/replication_rules_examples",title:"Replication rule examples",description:"Replica management is based on replication rules defined on data identifiers. A",source:"@site/../docs/started/concepts/replication_rules_examples.md",sourceDirName:"started/concepts",slug:"/started/concepts/replication_rules_examples",permalink:"/documentation/started/concepts/replication_rules_examples",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/replication_rules_examples.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1713382454,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{title:"Replication rule examples"},sidebar:"docs",previous:{title:"Replica management with replication rules",permalink:"/documentation/started/concepts/replica_management"},next:{title:"RSE Expressions",permalink:"/documentation/started/concepts/rse_expressions"}},p={},d=[{value:"Examples",id:"examples",level:2},{value:"I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs",id:"i-want-to-have-2-replicas-of-first_dataset-and-second_dataset-on-tier-1-rses",level:3},{value:"I want to have 2 replicas on whatever T2 RSEs in the UK but not in Glasgow",id:"i-want-to-have-2-replicas-on-whatever-t2-rses-in-the-uk-but-not-in-glasgow",level:3}],u={toc:d},m="wrapper";function f(e){var t=e.components,r=(0,a.A)(e,o);return(0,s.yg)(m,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Replica management is based on replication rules defined on data identifiers. A\nreplication rule gets resolved and issues replica locks on the physical\nreplicas."),(0,s.yg)("p",null,"A replication rule consists (besides other parameters) of a factor representing\nthe numbers of replicas wanted and a Rucio Storage Element Expression that\nallows to select a set of probable RSEs to store the replicas."),(0,s.yg)("p",null,"The ",(0,s.yg)("a",{parentName:"p",href:"/documentation/started/concepts/rse_expressions"},(0,s.yg)("strong",{parentName:"a"},"RSE Expression"))," gets resolved into a set of RSEs,\nwhich are possible destination RSEs for the number of replicas the user wants to\ncreate."),(0,s.yg)("p",null,"Is possible to find detailed information and examples about how to write RSE\nExpressions ",(0,s.yg)("a",{parentName:"p",href:"/documentation/started/concepts/rse_expressions"},(0,s.yg)("strong",{parentName:"a"},"here")),"."),(0,s.yg)("h2",{id:"examples"},"Examples"),(0,s.yg)("h3",{id:"i-want-to-have-2-replicas-of-first_dataset-and-second_dataset-on-tier-1-rses"},"I want to have 2 replicas of first_dataset and second_dataset on Tier 1 RSEs"),(0,s.yg)("p",null,"The number 2 ",(0,s.yg)("em",{parentName:"p"},"second_dataset")," is the number of copies expected. At the end, the\nRSE Expression select all the Tier 1 RSEs as possible targets to store the\nreplicas.:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'tier=1'\n")),(0,s.yg)("p",null,"To see all the possible targets, ",(0,s.yg)("strong",{parentName:"p"},"rucio list-rses")," command can be used:"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio list-rses --rses 'tier=1'\n")),(0,s.yg)("h3",{id:"i-want-to-have-2-replicas-on-whatever-t2-rses-in-the-uk-but-not-in-glasgow"},"I want to have 2 replicas on whatever T2 RSEs in the UK but not in Glasgow"),(0,s.yg)("pre",null,(0,s.yg)("code",{parentName:"pre",className:"language-bash"},"username@host:~$ rucio add-rule scope:first_dataset scope:second_dataset 2 'tier=2&country=uk\\site=GLASGOW'\n")))}f.isMDXComponent=!0}}]);