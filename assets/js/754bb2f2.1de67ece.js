"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3729],{86164:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>x,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var t=d(74848),r=d(28453);const s={id:"releasepolicy",title:"Release Policy",sidebar_label:"Release Policy"},i=void 0,l={id:"started/releasepolicy",title:"Release Policy",description:"Rucio follows a release policy, based on semantic versioning,",source:"@site/../docs/started/releasepolicy.md",sourceDirName:"started",slug:"/started/releasepolicy",permalink:"/documentation/started/releasepolicy",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/releasepolicy.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1719784969e3,frontMatter:{id:"releasepolicy",title:"Release Policy",sidebar_label:"Release Policy"},sidebar:"docs",previous:{title:"Typical Replica Workflow",permalink:"/documentation/started/concepts/replica_workflow"},next:{title:"Release Notes",permalink:"/documentation/release-notes"}},c={},h=[{value:"Support period",id:"support-period",level:2},{value:"Client \u2194 Server compatibility",id:"client--server-compatibility",level:2}];function o(e){const n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Rucio follows a release policy, based on ",(0,t.jsx)(n.a,{href:"https://semver.org",children:"semantic versioning"}),",\nwith ",(0,t.jsx)(n.strong,{children:"major"})," (named) releases. Approximately\nevery 4 months we produce a major release with a version number like ",(0,t.jsx)(n.strong,{children:"x.0.0"}),"\n(with x > 0). A major release marks the start of a release line. This release\nline is maintained with minor/patch releases published every two weeks,\ncontaining bug fixes or minor enhancements,\nwith version numbers like ",(0,t.jsx)(n.strong,{children:"32.y.z"})," (with y \u2265 0, z \u2265 0). Versions within\none release line are always backwards compatible, thus they do not include\ndatabase schema changes, API modifications, or other backward-compatibility\nbreaking changes."]}),"\n",(0,t.jsx)(n.p,{children:"Previous to the 32 release line, Rucio used a different versioning theme."}),"\n",(0,t.jsx)(n.h2,{id:"support-period",children:"Support period"}),"\n",(0,t.jsxs)(n.p,{children:["A release line is only maintained with patch releases until the start of the\nnext release line, thus approximately 4 months. Typically once a year we will\ndesignate a release line a ",(0,t.jsx)(n.strong,{children:"Long-term Support"})," (LTS) release line. This\nrelease line will be supported with ",(0,t.jsx)(n.strong,{children:"security"})," and ",(0,t.jsx)(n.strong,{children:"critical"})," patches for\napproximately two years. It is foreseen to have an overlap of at least 12 months\nbetween two LTS release lines, to give communities a comfortable time window to\ndeploy the new LTS release."]}),"\n",(0,t.jsx)(n.h2,{id:"client--server-compatibility",children:"Client \u2194 Server compatibility"}),"\n",(0,t.jsx)(n.p,{children:"For differences between the versions of a Rucio client and a Rucio server we guarantee\ncompatibility of an older client up until the oldest supported LTS release line.\nFor example, with 1.29 LTS being the oldest supported release line, a 34 Rucio server\nguarantees support of clients of the 1.29, 1.30, 1.31, 32, 33 and 34 release line. Most likely\nolder clients will work, without problems, as well, however, the release policy does not\nguarantee it."}),"\n",(0,t.jsx)(n.p,{children:"Please be aware that we can not guarantee compatibility of a newer client with an older\nserver."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"Code name"}),(0,t.jsx)(n.th,{children:"Release date"}),(0,t.jsx)(n.th,{children:"Supported until"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"36"}),(0,t.jsx)(n.td,{children:"Donkey Unchained"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"2024-11"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"2025-03"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"35 LTS"}),(0,t.jsx)(n.td,{children:"Donkey and the Data Factory"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"2024-07"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"at least 2026-07"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"34"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Donkey Potter and the Data Cache"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2024-03"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"2024-07"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"33"}),(0,t.jsx)(n.td,{children:"Eternal Sunshine of the Donkey's Mind"}),(0,t.jsx)(n.td,{children:"2023-12"}),(0,t.jsx)(n.td,{children:"2024-03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"32 LTS"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"The Good, The Bad and the Donkey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2023-08"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"at least 2025-08"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.31"}),(0,t.jsx)(n.td,{children:"Donkeys of the Caribbean"}),(0,t.jsx)(n.td,{children:"2023-03"}),(0,t.jsx)(n.td,{children:"2023-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.30"}),(0,t.jsx)(n.td,{children:"The Donkeynator"}),(0,t.jsx)(n.td,{children:"2022-11"}),(0,t.jsx)(n.td,{children:"2023-03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"1.29 LTS"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Into the Donkeyverse"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2022-07"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2024-08"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.28"}),(0,t.jsx)(n.td,{children:"Teenage Mutant Ninja Donkeys"}),(0,t.jsx)(n.td,{children:"2022-03"}),(0,t.jsx)(n.td,{children:"2022-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.27"}),(0,t.jsx)(n.td,{children:"Batdonkey v Superdonkey"}),(0,t.jsx)(n.td,{children:"2021-11"}),(0,t.jsx)(n.td,{children:"2022-03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.26 LTS"}),(0,t.jsx)(n.td,{children:"Donkey League of La Mancha"}),(0,t.jsx)(n.td,{children:"2021-07"}),(0,t.jsx)(n.td,{children:"2023-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.25"}),(0,t.jsx)(n.td,{children:"Rat-Donkey"}),(0,t.jsx)(n.td,{children:"2021-02"}),(0,t.jsx)(n.td,{children:"2021-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.24"}),(0,t.jsx)(n.td,{children:"Aquadonkey"}),(0,t.jsx)(n.td,{children:"2020-11"}),(0,t.jsx)(n.td,{children:"2021-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.23 LTS"}),(0,t.jsx)(n.td,{children:"The incredible Donkey"}),(0,t.jsx)(n.td,{children:"2020-07"}),(0,t.jsx)(n.td,{children:"2022-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.22"}),(0,t.jsx)(n.td,{children:"Green Donkey"}),(0,t.jsx)(n.td,{children:"2020-02"}),(0,t.jsx)(n.td,{children:"2020-06"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.21"}),(0,t.jsx)(n.td,{children:"Donkeys of the Galaxy"}),(0,t.jsx)(n.td,{children:"2019-11"}),(0,t.jsx)(n.td,{children:"2020-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.20 LTS"}),(0,t.jsx)(n.td,{children:"Wonder Donkey"}),(0,t.jsx)(n.td,{children:"2019-06"}),(0,t.jsx)(n.td,{children:"2021-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.19"}),(0,t.jsx)(n.td,{children:"Fantastic Donkeys"}),(0,t.jsx)(n.td,{children:"2019-02"}),(0,t.jsx)(n.td,{children:"2019-06"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.18"}),(0,t.jsx)(n.td,{children:"Invisible Donkey"}),(0,t.jsx)(n.td,{children:"2018-09"}),(0,t.jsx)(n.td,{children:"2019-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.17"}),(0,t.jsx)(n.td,{children:"Donkey Surfer"}),(0,t.jsx)(n.td,{children:"2018-06"}),(0,t.jsx)(n.td,{children:"2018-09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.16"}),(0,t.jsx)(n.td,{children:"Doctor Donkey"}),(0,t.jsx)(n.td,{children:"2018-04"}),(0,t.jsx)(n.td,{children:"2018-06"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.15"}),(0,t.jsx)(n.td,{children:"Daredonkey"}),(0,t.jsx)(n.td,{children:"2018-02"}),(0,t.jsx)(n.td,{children:"2018-04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.14"}),(0,t.jsx)(n.td,{children:"Professor D"}),(0,t.jsx)(n.td,{children:"2017-11"}),(0,t.jsx)(n.td,{children:"2018-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.13"}),(0,t.jsx)(n.td,{children:"Donkerine"}),(0,t.jsx)(n.td,{children:"2017-09"}),(0,t.jsx)(n.td,{children:"2017-11"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.12"}),(0,t.jsx)(n.td,{children:"Captain Donkey"}),(0,t.jsx)(n.td,{children:"2017-07"}),(0,t.jsx)(n.td,{children:"2017-09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.11"}),(0,t.jsx)(n.td,{children:"Batdonkey"}),(0,t.jsx)(n.td,{children:"2017-05"}),(0,t.jsx)(n.td,{children:"2017-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.10"}),(0,t.jsx)(n.td,{children:"Irondonkey"}),(0,t.jsx)(n.td,{children:"2017-02"}),(0,t.jsx)(n.td,{children:"2017-05"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.9"}),(0,t.jsx)(n.td,{children:"Superdonkey"}),(0,t.jsx)(n.td,{children:"2016-10"}),(0,t.jsx)(n.td,{children:"2017-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.8"}),(0,t.jsx)(n.td,{children:"Spiderdonkey"}),(0,t.jsx)(n.td,{children:"2016-09"}),(0,t.jsx)(n.td,{children:"2016-10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.7"}),(0,t.jsx)(n.td,{children:"Donkey One"}),(0,t.jsx)(n.td,{children:"2016-08"}),(0,t.jsx)(n.td,{children:"2016-09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.6"}),(0,t.jsx)(n.td,{children:"The Donkey awakens"}),(0,t.jsx)(n.td,{children:"2016-05"}),(0,t.jsx)(n.td,{children:"2016-08"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.5"}),(0,t.jsx)(n.td,{children:"Return of the Donkey"}),(0,t.jsx)(n.td,{children:"2016-04"}),(0,t.jsx)(n.td,{children:"2016-05"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.4"}),(0,t.jsx)(n.td,{children:"The Donkey strikes back"}),(0,t.jsx)(n.td,{children:"2016-02"}),(0,t.jsx)(n.td,{children:"2016-04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.3"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2016-01"}),(0,t.jsx)(n.td,{children:"2016-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.2"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2015-10"}),(0,t.jsx)(n.td,{children:"2016-01"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.1"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2015-08"}),(0,t.jsx)(n.td,{children:"2016-10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.0"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2015-07"}),(0,t.jsx)(n.td,{children:"2015-08"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"(0.3)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2015-03"}),(0,t.jsx)(n.td,{children:"2015-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"(0.2)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2014-10"}),(0,t.jsx)(n.td,{children:"2015-03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"(0.1.7)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2014-01"}),(0,t.jsx)(n.td,{children:"2014-10"})]})]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>l});var t=d(96540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);