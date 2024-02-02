"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4184],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>g});var n=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=r(45072),i=r(95656),a=(r(11504),r(95788)),o=["components"],s={title:"1.17.1"},l=void 0,u={unversionedId:"release-notes/1.17.1",id:"release-notes/1.17.1",title:"1.17.1",description:"General",source:"@site/../docs/release-notes/1.17.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.1",permalink:"/documentation/release-notes/1.17.1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.17.1.md",tags:[],version:"current",frontMatter:{title:"1.17.1"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},d="wrapper";function g(e){var t=e.components,r=(0,i.c)(e,o);return(0,a.yg)(d,(0,n.c)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Transparent list-replicas support of zip contents ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1138"},"#1138"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Consistency checks: Auditor is looking for site dumps in invalid locations ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1268"},"#1268")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: closeness_sorter module seems to be dead code ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/320"},"#320")),(0,a.yg)("li",{parentName:"ul"},"Infrastructure: add kubernetes config to repo ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1226"},"#1226")),(0,a.yg)("li",{parentName:"ul"},"Infrastructure: docker builds fail with pip install error (pycurl/m2crypto) ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1269"},"#1269")),(0,a.yg)("li",{parentName:"ul"},"Rebalancing: Uniformize the rebalancing scripts for Nuclei and T2 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1283"},"#1283")),(0,a.yg)("li",{parentName:"ul"},"Release management: Relax the dependency versions the pip-requires ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1215"},"#1215"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: REST/Client : set-metadata should raise DataIdentifierNotFound when the DID doesn't exist ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1272"},"#1272")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Resurrect method doesn't remove expired_at for deleted_dids ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1276"},"#1276")),(0,a.yg)("li",{parentName:"ul"},"Life time model: End of life badly set for non-pledged endpoints ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1240"},"#1240"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: rucio download --archive_did should be renamed to --archive-did ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1282"},"#1282"))),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: findall with 2 arguments failing on SL6 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1288"},"#1288"))))}g.isMDXComponent=!0}}]);