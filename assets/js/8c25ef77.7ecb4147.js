(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{273:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(451)),o=["components"],l={title:"Replica management with replication rules"},c={unversionedId:"replica_management",id:"replica_management",isDocsHomePage:!1,title:"Replica management with replication rules",description:"Replica management is based on replication rules defined on data identifiers",source:"@site/../docs/replica_management.md",sourceDirName:".",slug:"/replica_management",permalink:"/documentation/replica_management",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/replica_management.md",version:"current",lastUpdatedBy:"Rizart Dona",lastUpdatedAt:1666799384,formattedLastUpdatedAt:"10/26/2022",frontMatter:{title:"Replica management with replication rules"},sidebar:"docs",previous:{title:"Permission model",permalink:"/documentation/permission_model"},next:{title:"Replication rule examples",permalink:"/documentation/replication_rules_examples"}},s=[{value:"Footnotes",id:"footnotes",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Replica management is based on replication rules defined on data identifiers\n(files, datasets, containers). A replication rule is owned by an account and\ndefines the minimum number of replicas to be available on a list of RSEs,\ndenoted by an ",Object(i.b)("a",{parentName:"p",href:"/documentation/rse_expressions"},"RSE Expression"),".  Accounts are allowed to set\nmultiple rules",Object(i.b)("sup",{parentName:"p",id:"fnref-1"},Object(i.b)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". Rules may optionally have a limited lifetime and can be\nadded, removed or modified at any time."),Object(i.b)("p",null,"An example listing of replication rules is given below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"prod: 1x replica @ CERN, no lifetime"),Object(i.b)("li",{parentName:"ul"},"barisits: 1x replica @ US-T2, until 2019-01-01"),Object(i.b)("li",{parentName:"ul"},"vgaronne: 2x replica @ T1, no lifetime")),Object(i.b)("p",null,"A rule engine validates the rules and creates transfer primitives to fulfil all\nrules, e.g. transfer a file from RSE A to RSE B. The rule engine is triggered\nwhen a new rule is defined on an existing data identifier, or when a file is\nadded to a dataset with existing rules.  The rule engine will only create the\nminimum set of necessary transfer primitives to satisfy all rules."),Object(i.b)("p",null,"Notifications can be provided for rules and their underlying transfer\nrequests. All transfer requests are transient."),Object(i.b)("p",null,"The deletion service supports two different modes: greedy and non-greedy. Greedy\nmeans that the service tries to immediately delete all replicas which are not\nprotected by a replication rule. Non-greedy deletion is triggered when storage\npolicy dictates that space must be freed. The deletion service will look for\nreplicas on that RSE which can be deleted without violating any replication\nrule. The deletion service will use a Least Recently Used (LRU) algorithm to\nselect replicas for deletion. The deletion service will also immediately delete\nall replicas of any file which is declared obsolete."),Object(i.b)("p",null,"Some examples of replication rules are listed\n",Object(i.b)("a",{parentName:"p",href:"/documentation/replication_rules_examples"},"here"),"."),Object(i.b)("h2",{id:"footnotes"},"Footnotes"),Object(i.b)("div",{className:"footnotes"},Object(i.b)("hr",{parentName:"div"}),Object(i.b)("ol",{parentName:"div"},Object(i.b)("li",{parentName:"ol",id:"fn-1"},"The system may reject rules if these violate other policies, e.g., only\nspecific accounts are allowed to request replication rules for tape systems.",Object(i.b)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},451:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?a.a.createElement(f,l(l({ref:t},s),{},{components:n})):a.a.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);