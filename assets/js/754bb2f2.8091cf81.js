"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[942],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),o=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(d.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=o(a),N=r,g=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},26489:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>p,metadata:()=>o,toc:()=>k});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"releasepolicy",title:"Release Policy",sidebar_label:"Release Policy"},d=void 0,o={unversionedId:"started/releasepolicy",id:"started/releasepolicy",title:"Release Policy",description:"Rucio follows a release policy, based on semantic versioning,",source:"@site/../docs/started/releasepolicy.md",sourceDirName:"started",slug:"/started/releasepolicy",permalink:"/documentation/started/releasepolicy",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/releasepolicy.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1687957172,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{id:"releasepolicy",title:"Release Policy",sidebar_label:"Release Policy"},sidebar:"docs",previous:{title:"Typical Replica Workflow",permalink:"/documentation/started/concepts/replica_workflow"},next:{title:"Release Notes",permalink:"/documentation/release-notes"}},m={},k=[{value:"Support period",id:"support-period",level:2}],u={toc:k},N="wrapper";function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)(N,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rucio follows a release policy, based on ",(0,l.kt)("a",{parentName:"p",href:"https://semver.org"},"semantic versioning"),",\nwith ",(0,l.kt)("strong",{parentName:"p"},"major")," (named) releases. Approximately\nevery 4 months we produce a major release with a version number like ",(0,l.kt)("strong",{parentName:"p"},"x.0.0"),"\n(with x > 0). A major release marks the start of a release line. This release\nline is maintained with bi-weekly minor/patch releases, containing bug fixes or minor\nenhancements, with version numbers like ",(0,l.kt)("strong",{parentName:"p"},"22.y.z")," (with y ","\u2265"," 0, z ","\u2265"," 0). Versions within\none release line are always backwards compatible, thus they do not include\ndatabase schema changes, API modifications, or other backward-compatibility\nbreaking changes."),(0,l.kt)("p",null,"Previous to the 32 release line, Rucio used a different versioning theme."),(0,l.kt)("h2",{id:"support-period"},"Support period"),(0,l.kt)("p",null,"A release line is only maintained with patch releases until the start of the\nnext release line, thus approximately 4 months. Typically once a year we will\ndesignate a release line a ",(0,l.kt)("strong",{parentName:"p"},"Long-term Support")," (LTS) release line. This\nrelease line will be supported with ",(0,l.kt)("strong",{parentName:"p"},"security")," and ",(0,l.kt)("strong",{parentName:"p"},"critical")," patches for\napproximately two years. It is foreseen to have an overlap of at least 12 months\nbetween two LTS release lines, to give communities a comfortable time window to\ndeploy the new LTS release."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Code name"),(0,l.kt)("th",{parentName:"tr",align:null},"Release date"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported until"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"33"),(0,l.kt)("td",{parentName:"tr",align:null},"Eternal Sunshine of the Donkey's Mind"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"2023-11")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"2024-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32 LTS"),(0,l.kt)("td",{parentName:"tr",align:null},"The Good, The Bad and the Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"2023-07")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"at least 2025-07"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"1.31")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Donkeys of the Caribbean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"2023-03")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"2023-07"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.30"),(0,l.kt)("td",{parentName:"tr",align:null},"The Donkeynator"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-11"),(0,l.kt)("td",{parentName:"tr",align:null},"2023-03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"1.29 LTS")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Into the Donkeyverse")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"2022-07")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"at least 2024-07"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.28"),(0,l.kt)("td",{parentName:"tr",align:null},"Teenage Mutant Ninja Donkeys"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.27"),(0,l.kt)("td",{parentName:"tr",align:null},"Batdonkey v Superdonkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-11"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"1.26 LTS")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Donkey League of La Mancha")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"2021-07")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"2023-07"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.25"),(0,l.kt)("td",{parentName:"tr",align:null},"Rat-Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.24"),(0,l.kt)("td",{parentName:"tr",align:null},"Aquadonkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-11"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.23 LTS"),(0,l.kt)("td",{parentName:"tr",align:null},"The incredible Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-07"),(0,l.kt)("td",{parentName:"tr",align:null},"2022-07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.22"),(0,l.kt)("td",{parentName:"tr",align:null},"Green Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-02"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.21"),(0,l.kt)("td",{parentName:"tr",align:null},"Donkeys of the Galaxy"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-11"),(0,l.kt)("td",{parentName:"tr",align:null},"2020-02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.20 LTS"),(0,l.kt)("td",{parentName:"tr",align:null},"Wonder Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-06"),(0,l.kt)("td",{parentName:"tr",align:null},"2021-07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.19"),(0,l.kt)("td",{parentName:"tr",align:null},"Fantastic Donkeys"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-02"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.18"),(0,l.kt)("td",{parentName:"tr",align:null},"Invisible Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-09"),(0,l.kt)("td",{parentName:"tr",align:null},"2019-02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.17"),(0,l.kt)("td",{parentName:"tr",align:null},"Donkey Surfer"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-06"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.16"),(0,l.kt)("td",{parentName:"tr",align:null},"Doctor Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-04"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-06")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.15"),(0,l.kt)("td",{parentName:"tr",align:null},"Daredonkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-02"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.14"),(0,l.kt)("td",{parentName:"tr",align:null},"Professor D"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-11"),(0,l.kt)("td",{parentName:"tr",align:null},"2018-02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.13"),(0,l.kt)("td",{parentName:"tr",align:null},"Donkerine"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-09"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.12"),(0,l.kt)("td",{parentName:"tr",align:null},"Captain Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-07"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.11"),(0,l.kt)("td",{parentName:"tr",align:null},"Batdonkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-05"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.10"),(0,l.kt)("td",{parentName:"tr",align:null},"Irondonkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-02"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.9"),(0,l.kt)("td",{parentName:"tr",align:null},"Superdonkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-10"),(0,l.kt)("td",{parentName:"tr",align:null},"2017-02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.8"),(0,l.kt)("td",{parentName:"tr",align:null},"Spiderdonkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-09"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.7"),(0,l.kt)("td",{parentName:"tr",align:null},"Donkey One"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-08"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.6"),(0,l.kt)("td",{parentName:"tr",align:null},"The Donkey awakens"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-08")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.5"),(0,l.kt)("td",{parentName:"tr",align:null},"Return of the Donkey"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-04"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-05")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.4"),(0,l.kt)("td",{parentName:"tr",align:null},"The Donkey strikes back"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-02"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-04")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2016-01"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-02")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2015-10"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-01")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2015-08"),(0,l.kt)("td",{parentName:"tr",align:null},"2016-10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2015-07"),(0,l.kt)("td",{parentName:"tr",align:null},"2015-08")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(0.3)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2015-03"),(0,l.kt)("td",{parentName:"tr",align:null},"2015-07")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(0.2)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2014-10"),(0,l.kt)("td",{parentName:"tr",align:null},"2015-03")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"(0.1.7)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"2014-01"),(0,l.kt)("td",{parentName:"tr",align:null},"2014-10")))))}g.isMDXComponent=!0}}]);