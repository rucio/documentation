"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2360],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>h});var i=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),l=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return i.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,h=p["".concat(u,".").concat(m)]||p[m]||g[m]||a;return r?i.createElement(h,o(o({ref:t},c),{},{components:r})):i.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=r(45072),n=r(95656),a=(r(11504),r(95788)),o=["components"],s={title:"1.27.4"},u=void 0,l={unversionedId:"release-notes/1.27.4",id:"release-notes/1.27.4",title:"1.27.4",description:"General",source:"@site/../docs/release-notes/1.27.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.4",permalink:"/documentation/release-notes/1.27.4",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.4.md",tags:[],version:"current",frontMatter:{title:"1.27.4"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],g={toc:p},m="wrapper";function h(e){var t=e.components,r=(0,n.c)(e,o);return(0,a.yg)(m,(0,i.c)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rules: Add \u2018split_rule\u2019 functionality in the core ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4660"},"#4660")),(0,a.yg)("li",{parentName:"ul"},"Testing: Integrate the ",(0,a.yg)("inlineCode",{parentName:"li"},"add_header")," script in the CI/CD ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4980"},"#4980"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Closed datasets with NULL bytes or events ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5111"},"#5111")),(0,a.yg)("li",{parentName:"ul"},"Deletion: Dark reaper improvements due to DB load ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5192"},"#5192")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Duplicated Contributing guide ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5176"},"#5176")),(0,a.yg)("li",{parentName:"ul"},"Monitoring & Logging: support prometheus metrics in daemons and servers ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3416"},"#3416")),(0,a.yg)("li",{parentName:"ul"},"Testing: Pre commit script ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4971"},"#4971")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Multihop monitoring ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3902"},"#3902"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: memory leak due to incorrect cache usage ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5152"},"#5152")),(0,a.yg)("li",{parentName:"ul"},"Replicas: Stabilize geoip based replica selection ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5133"},"#5133")),(0,a.yg)("li",{parentName:"ul"},'Testing: Job check actions fails with "fatal: Need to specify how to reconcile divergent branches." ',(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5188"},"#5188")),(0,a.yg)("li",{parentName:"ul"},"Testing: Add_header lint job checks out wrong commit ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5197"},"#5197")),(0,a.yg)("li",{parentName:"ul"},"Traces: NoneType errors during trace validation ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5156"},"#5156")),(0,a.yg)("li",{parentName:"ul"},"Traces: Download Schema validation errors ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5157"},"#5157")),(0,a.yg)("li",{parentName:"ul"},"Transfers: concurrent multihop submission on same did can flag request as NO_SOURCES ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5028"},"#5028")),(0,a.yg)("li",{parentName:"ul"},"Transfers: source replica expression not always correctly respected on multihops ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5170"},"#5170"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: Issue with stat/exists and lan/wan protocols ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4984"},"#4984")),(0,a.yg)("li",{parentName:"ul"},"Clients: bin/rucio download with --pfn option raises in AttributeError ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5178"},"#5178")),(0,a.yg)("li",{parentName:"ul"},"Clients: transfer-speed-timeout Warning message always printed for download --pfn ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5185"},"#5185"))))}h.isMDXComponent=!0}}]);