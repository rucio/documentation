"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3729],{15680:(e,t,a)=>{a.d(t,{xA:()=>o,yg:()=>N});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var y=n.createContext({}),p=function(e){var t=n.useContext(y),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},o=function(e){var t=p(e.components);return n.createElement(y.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(a),u=r,N=d["".concat(y,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(N,g(g({ref:t},o),{},{components:a})):n.createElement(N,g({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=u;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[d]="string"==typeof e?e:r,g[1]=i;for(var p=2;p<l;p++)g[p]=a[p];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67145:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>y,default:()=>N,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(58168),r=a(98587),l=(a(96540),a(15680)),g=["components"],i={id:"releasepolicy",title:"Release Policy",sidebar_label:"Release Policy"},y=void 0,p={unversionedId:"started/releasepolicy",id:"started/releasepolicy",title:"Release Policy",description:"Rucio follows a release policy, based on semantic versioning,",source:"@site/../docs/started/releasepolicy.md",sourceDirName:"started",slug:"/started/releasepolicy",permalink:"/documentation/started/releasepolicy",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/releasepolicy.md",tags:[],version:"current",lastUpdatedBy:"Maximilian Linhoff",lastUpdatedAt:1711473391,formattedLastUpdatedAt:"Mar 26, 2024",frontMatter:{id:"releasepolicy",title:"Release Policy",sidebar_label:"Release Policy"},sidebar:"docs",previous:{title:"Typical Replica Workflow",permalink:"/documentation/started/concepts/replica_workflow"},next:{title:"Release Notes",permalink:"/documentation/release-notes"}},o={},d=[{value:"Support period",id:"support-period",level:2},{value:"Client \u2194 Server compatibility",id:"client--server-compatibility",level:2}],m={toc:d},u="wrapper";function N(e){var t=e.components,a=(0,r.A)(e,g);return(0,l.yg)(u,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Rucio follows a release policy, based on ",(0,l.yg)("a",{parentName:"p",href:"https://semver.org"},"semantic versioning"),",\nwith ",(0,l.yg)("strong",{parentName:"p"},"major")," (named) releases. Approximately\nevery 4 months we produce a major release with a version number like ",(0,l.yg)("strong",{parentName:"p"},"x.0.0"),"\n(with x > 0). A major release marks the start of a release line. This release\nline is maintained with bi-weekly minor/patch releases, containing bug fixes or minor\nenhancements, with version numbers like ",(0,l.yg)("strong",{parentName:"p"},"32.y.z")," (with y ","\u2265"," 0, z ","\u2265"," 0). Versions within\none release line are always backwards compatible, thus they do not include\ndatabase schema changes, API modifications, or other backward-compatibility\nbreaking changes."),(0,l.yg)("p",null,"Previous to the 32 release line, Rucio used a different versioning theme."),(0,l.yg)("h2",{id:"support-period"},"Support period"),(0,l.yg)("p",null,"A release line is only maintained with patch releases until the start of the\nnext release line, thus approximately 4 months. Typically once a year we will\ndesignate a release line a ",(0,l.yg)("strong",{parentName:"p"},"Long-term Support")," (LTS) release line. This\nrelease line will be supported with ",(0,l.yg)("strong",{parentName:"p"},"security")," and ",(0,l.yg)("strong",{parentName:"p"},"critical")," patches for\napproximately two years. It is foreseen to have an overlap of at least 12 months\nbetween two LTS release lines, to give communities a comfortable time window to\ndeploy the new LTS release."),(0,l.yg)("h2",{id:"client--server-compatibility"},"Client ","\u2194"," Server compatibility"),(0,l.yg)("p",null,"For differences between the versions of a Rucio client and a Rucio server we guarantee\ncompatibility of an older client up until the oldest supported LTS release line.\nFor example, with 1.29 LTS being the oldest supported release line, a 34 Rucio server\nguarantees support of clients of the 1.29, 1.30, 1.31, 32, 33 and 34 release line. Most likely\nolder clients will work, without problems, as well, however, the release policy does not\nguarantee it."),(0,l.yg)("p",null,"Please be aware that we can not guarantee compatibility of a newer client with an older\nserver."),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Version"),(0,l.yg)("th",{parentName:"tr",align:null},"Code name"),(0,l.yg)("th",{parentName:"tr",align:null},"Release date"),(0,l.yg)("th",{parentName:"tr",align:null},"Supported until"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"36"),(0,l.yg)("td",{parentName:"tr",align:null},"Donkey Unchained"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("em",{parentName:"td"},"2024-11")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("em",{parentName:"td"},"2025-03"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"35 LTS"),(0,l.yg)("td",{parentName:"tr",align:null},"Donkey and the Data Factory"),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("em",{parentName:"td"},"2024-07")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("em",{parentName:"td"},"at least 2026-07"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"34")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Donkey Potter and the Data Cache")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"2024-03")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("em",{parentName:"td"},"2024-07"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"33"),(0,l.yg)("td",{parentName:"tr",align:null},"Eternal Sunshine of the Donkey's Mind"),(0,l.yg)("td",{parentName:"tr",align:null},"2023-12"),(0,l.yg)("td",{parentName:"tr",align:null},"2024-03")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"32 LTS")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"The Good, The Bad and the Donkey")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"2023-08")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("em",{parentName:"td"},"at least 2025-08"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.31"),(0,l.yg)("td",{parentName:"tr",align:null},"Donkeys of the Caribbean"),(0,l.yg)("td",{parentName:"tr",align:null},"2023-03"),(0,l.yg)("td",{parentName:"tr",align:null},"2023-07")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.30"),(0,l.yg)("td",{parentName:"tr",align:null},"The Donkeynator"),(0,l.yg)("td",{parentName:"tr",align:null},"2022-11"),(0,l.yg)("td",{parentName:"tr",align:null},"2023-03")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"1.29 LTS")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"Into the Donkeyverse")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"2022-07")),(0,l.yg)("td",{parentName:"tr",align:null},(0,l.yg)("strong",{parentName:"td"},"2024-08"))),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.28"),(0,l.yg)("td",{parentName:"tr",align:null},"Teenage Mutant Ninja Donkeys"),(0,l.yg)("td",{parentName:"tr",align:null},"2022-03"),(0,l.yg)("td",{parentName:"tr",align:null},"2022-07")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.27"),(0,l.yg)("td",{parentName:"tr",align:null},"Batdonkey v Superdonkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2021-11"),(0,l.yg)("td",{parentName:"tr",align:null},"2022-03")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.26 LTS"),(0,l.yg)("td",{parentName:"tr",align:null},"Donkey League of La Mancha"),(0,l.yg)("td",{parentName:"tr",align:null},"2021-07"),(0,l.yg)("td",{parentName:"tr",align:null},"2023-07")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.25"),(0,l.yg)("td",{parentName:"tr",align:null},"Rat-Donkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2021-02"),(0,l.yg)("td",{parentName:"tr",align:null},"2021-07")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.24"),(0,l.yg)("td",{parentName:"tr",align:null},"Aquadonkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2020-11"),(0,l.yg)("td",{parentName:"tr",align:null},"2021-02")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.23 LTS"),(0,l.yg)("td",{parentName:"tr",align:null},"The incredible Donkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2020-07"),(0,l.yg)("td",{parentName:"tr",align:null},"2022-07")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.22"),(0,l.yg)("td",{parentName:"tr",align:null},"Green Donkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2020-02"),(0,l.yg)("td",{parentName:"tr",align:null},"2020-06")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.21"),(0,l.yg)("td",{parentName:"tr",align:null},"Donkeys of the Galaxy"),(0,l.yg)("td",{parentName:"tr",align:null},"2019-11"),(0,l.yg)("td",{parentName:"tr",align:null},"2020-02")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.20 LTS"),(0,l.yg)("td",{parentName:"tr",align:null},"Wonder Donkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2019-06"),(0,l.yg)("td",{parentName:"tr",align:null},"2021-07")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.19"),(0,l.yg)("td",{parentName:"tr",align:null},"Fantastic Donkeys"),(0,l.yg)("td",{parentName:"tr",align:null},"2019-02"),(0,l.yg)("td",{parentName:"tr",align:null},"2019-06")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.18"),(0,l.yg)("td",{parentName:"tr",align:null},"Invisible Donkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2018-09"),(0,l.yg)("td",{parentName:"tr",align:null},"2019-02")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.17"),(0,l.yg)("td",{parentName:"tr",align:null},"Donkey Surfer"),(0,l.yg)("td",{parentName:"tr",align:null},"2018-06"),(0,l.yg)("td",{parentName:"tr",align:null},"2018-09")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.16"),(0,l.yg)("td",{parentName:"tr",align:null},"Doctor Donkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2018-04"),(0,l.yg)("td",{parentName:"tr",align:null},"2018-06")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.15"),(0,l.yg)("td",{parentName:"tr",align:null},"Daredonkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2018-02"),(0,l.yg)("td",{parentName:"tr",align:null},"2018-04")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.14"),(0,l.yg)("td",{parentName:"tr",align:null},"Professor D"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11"),(0,l.yg)("td",{parentName:"tr",align:null},"2018-02")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.13"),(0,l.yg)("td",{parentName:"tr",align:null},"Donkerine"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-09"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-11")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.12"),(0,l.yg)("td",{parentName:"tr",align:null},"Captain Donkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-07"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-09")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.11"),(0,l.yg)("td",{parentName:"tr",align:null},"Batdonkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-05"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-07")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.10"),(0,l.yg)("td",{parentName:"tr",align:null},"Irondonkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-02"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-05")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.9"),(0,l.yg)("td",{parentName:"tr",align:null},"Superdonkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-10"),(0,l.yg)("td",{parentName:"tr",align:null},"2017-02")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.8"),(0,l.yg)("td",{parentName:"tr",align:null},"Spiderdonkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-09"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.7"),(0,l.yg)("td",{parentName:"tr",align:null},"Donkey One"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-08"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-09")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.6"),(0,l.yg)("td",{parentName:"tr",align:null},"The Donkey awakens"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-05"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-08")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.5"),(0,l.yg)("td",{parentName:"tr",align:null},"Return of the Donkey"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-04"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-05")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.4"),(0,l.yg)("td",{parentName:"tr",align:null},"The Donkey strikes back"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-02"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-04")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.3"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"2016-01"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-02")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.2"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"2015-10"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-01")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.1"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"2015-08"),(0,l.yg)("td",{parentName:"tr",align:null},"2016-10")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1.0"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"2015-07"),(0,l.yg)("td",{parentName:"tr",align:null},"2015-08")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"(0.3)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"2015-03"),(0,l.yg)("td",{parentName:"tr",align:null},"2015-07")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"(0.2)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"2014-10"),(0,l.yg)("td",{parentName:"tr",align:null},"2015-03")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"(0.1.7)"),(0,l.yg)("td",{parentName:"tr",align:null}),(0,l.yg)("td",{parentName:"tr",align:null},"2014-01"),(0,l.yg)("td",{parentName:"tr",align:null},"2014-10")))))}N.isMDXComponent=!0}}]);