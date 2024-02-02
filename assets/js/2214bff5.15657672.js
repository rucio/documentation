"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4660],{95788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>h});var i=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,h=p["".concat(l,".").concat(m)]||p[m]||g[m]||n;return r?i.createElement(h,s(s({ref:t},c),{},{components:r})):i.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,s=new Array(n);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<n;u++)s[u]=r[u];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var i=r(45072),a=r(95656),n=(r(11504),r(95788)),s=["components"],o={title:"1.27.0rc2"},l=void 0,u={unversionedId:"release-notes/1.27.0rc2",id:"release-notes/1.27.0rc2",title:"1.27.0rc2",description:"Release Candidate",source:"@site/../docs/release-notes/1.27.0rc2.md",sourceDirName:"release-notes",slug:"/release-notes/1.27.0rc2",permalink:"/documentation/release-notes/1.27.0rc2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.27.0rc2.md",tags:[],version:"current",frontMatter:{title:"1.27.0rc2"}},c={},p=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}],g={toc:p},m="wrapper";function h(e){var t=e.components,r=(0,a.c)(e,s);return(0,n.yg)(m,(0,i.c)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"release-candidate"},"Release Candidate"),(0,n.yg)("p",null,"This is a release candidate! Only to be used in testing environments!"),(0,n.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,n.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,n.yg)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),(0,n.yg)("p",null,"The following changes are necessary and are covered by the ",(0,n.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Introduction of the ",(0,n.yg)("inlineCode",{parentName:"li"},"virtual_placements")," table for optional virtual placement feature. (Alembic revision ",(0,n.yg)("inlineCode",{parentName:"li"},"9a45bc4ea66d"),")")),(0,n.yg)("h2",{id:"general"},"General"),(0,n.yg)("h3",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Core & Internals: rucio.cfg vs config table ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2630"},"#2630")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Support DID metadata queries with inequality operators: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3750"},"#3750")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Support API to return dataset locks for a given container name ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4807"},"#4807")),(0,n.yg)("li",{parentName:"ul"},"Release management: Remove the ",(0,n.yg)("inlineCode",{parentName:"li"},"sonar")," daemon ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4957"},"#4957")),(0,n.yg)("li",{parentName:"ul"},"Rules: Extend get_dataset_locks API to support requests in bulk ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3982"},"#3982")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Certificate selection for Multi_VO conveyor daemons ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4731"},"#4731"))),(0,n.yg)("h3",{id:"enhancements"},"Enhancements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Non optimal rule reevaluation when attach_dids_to_dids is used with ignore_duplicate option ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4178"},"#4178")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Correct and Avoid redefining of built-in function ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4466"},"#4466")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Naming restrictions should be enforced for LFN2PFN and SURL algorithms in policy packages ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4830"},"#4830")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: New method to set metadata on a list of dids ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4973"},"#4973")),(0,n.yg)("li",{parentName:"ul"},"Database: New procedure for accounting ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4983"},"#4983")),(0,n.yg)("li",{parentName:"ul"},"Monitoring & Logging: Logging review ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4220"},"#4220")),(0,n.yg)("li",{parentName:"ul"},"Recovery: Implement fair share for the Necromancer ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4893"},"#4893")),(0,n.yg)("li",{parentName:"ul"},"Rules: request two extensions to move-rule ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4855"},"#4855")),(0,n.yg)("li",{parentName:"ul"},"Testing: increase verbosity of logger when running pytests ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5005"},"#5005")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Writing to tape: Destination file exists and overwrite is not enable ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4447"},"#4447")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Deprecate conveyor-poller-latest ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4762"},"#4762")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Requests to unavailable RSEs ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4896"},"#4896")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Conveyor-submitter optional partitioning on ",(0,n.yg)("inlineCode",{parentName:"li"},"rule_id")," ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4915"},"#4915")),(0,n.yg)("li",{parentName:"ul"},"Transfers: Avoid increasing source ranking on submission failure  ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4916"},"#4916")),(0,n.yg)("li",{parentName:"ul"},"Transfers: SRM to HTTPS optional compatibility ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4944"},"#4944"))),(0,n.yg)("h3",{id:"bugs"},"Bugs"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Authentication & Authorisation: Token cleanup issue ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5032"},"#5032")),(0,n.yg)("li",{parentName:"ul"},"Core & Internals: Datasetlocks not properly deleted when detaching datasets from containers ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1860"},"#1860")),(0,n.yg)("li",{parentName:"ul"},"Deletion: Deletion timeout does not work on GridFTP ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4994"},"#4994")),(0,n.yg)("li",{parentName:"ul"},"Transfers: source ranking never updated correctly for multihop ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4970"},"#4970")),(0,n.yg)("li",{parentName:"ul"},"Transfers: regression in conveyor database partition variable name ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5043"},"#5043"))),(0,n.yg)("h2",{id:"clients"},"Clients"),(0,n.yg)("h3",{id:"features-1"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Clients: Allow client to choose data access library ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4730"},"#4730")),(0,n.yg)("li",{parentName:"ul"},"Clients: Use kebab-case for all command-line options ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4865"},"#4865"))),(0,n.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Clients: list-file-repicas --all-states should show the states ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3431"},"#3431")),(0,n.yg)("li",{parentName:"ul"},"Clients: Add dump of request URI and parameters to client in debug mode ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4784"},"#4784")),(0,n.yg)("li",{parentName:"ul"},"Clients: Skip updating replica in uploadclient if register_after_upload is true ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4828"},"#4828")),(0,n.yg)("li",{parentName:"ul"},"Clients: RuntimeError being thrown on a client side when a config file missing. ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4868"},"#4868")),(0,n.yg)("li",{parentName:"ul"},"Clients: Dirac interface: make an extract_scope default algorithm variable ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4886"},"#4886")),(0,n.yg)("li",{parentName:"ul"},"Clients: pass logger down to the Client ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4920"},"#4920")),(0,n.yg)("li",{parentName:"ul"},"Clients: Add an option not to raise NoFilesDownloaded or NotAllFilesDownloaded in downloadclient ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4924"},"#4924")),(0,n.yg)("li",{parentName:"ul"},"Clients: Rename command-line option --expiration-date ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4931"},"#4931")),(0,n.yg)("li",{parentName:"ul"},"Clients: Add ",(0,n.yg)("inlineCode",{parentName:"li"},"ignore_availability")," option to the upload client ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4985"},"#4985"))),(0,n.yg)("h3",{id:"bugs-1"},"Bugs"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Clients: Incomplete download looks "complete" when restricting RSEs ',(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3824"},"#3824")),(0,n.yg)("li",{parentName:"ul"},"Clients: list-file-replicas rses and missing incompatibility ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5007"},"#5007")),(0,n.yg)("li",{parentName:"ul"},"Clients: Rucio breaks DIRAC run ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5041"},"#5041"))))}h.isMDXComponent=!0}}]);