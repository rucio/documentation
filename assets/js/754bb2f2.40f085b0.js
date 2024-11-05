"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3729],{10948:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"started/releasepolicy","title":"Release Policy","description":"Rucio follows a release policy, based on semantic versioning,","source":"@site/../docs/started/releasepolicy.md","sourceDirName":"started","slug":"/started/releasepolicy","permalink":"/documentation/started/releasepolicy","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/started/releasepolicy.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1729601659000,"frontMatter":{"id":"releasepolicy","title":"Release Policy","sidebar_label":"Release Policy"},"sidebar":"docs","previous":{"title":"Typical Replica Workflow","permalink":"/documentation/started/concepts/replica_workflow"},"next":{"title":"Release Notes","permalink":"/documentation/release-notes"}}');var t=r(74848),i=r(28453);const d={id:"releasepolicy",title:"Release Policy",sidebar_label:"Release Policy"},l=void 0,c={},h=[{value:"Support period",id:"support-period",level:2},{value:"Client \u2194 Server compatibility",id:"client--server-compatibility",level:2},{value:"Secondary Rucio Software Policy",id:"secondary-rucio-software-policy",level:2},{value:"WebUI",id:"webui",level:3},{value:"JupyterLab extension",id:"jupyterlab-extension",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Rucio follows a release policy, based on ",(0,t.jsx)(n.a,{href:"https://semver.org",children:"semantic versioning"}),",\nwith ",(0,t.jsx)(n.strong,{children:"major"})," (named) releases. Approximately\nevery 4 months we produce a major release with a version number like ",(0,t.jsx)(n.strong,{children:"x.0.0"}),"\n(with x > 0). A major release marks the start of a release line. This release\nline is maintained with minor/patch releases published every two weeks,\ncontaining bug fixes or minor enhancements,\nwith version numbers like ",(0,t.jsx)(n.strong,{children:"35.y.z"})," (with y \u2265 0, z \u2265 0). Versions within\none release line are always backwards compatible, thus they do not include\ndatabase schema changes, API modifications, or other backward-compatibility\nbreaking changes."]}),"\n",(0,t.jsx)(n.p,{children:"Previous to the 32 release line, Rucio used a different versioning theme."}),"\n",(0,t.jsx)(n.h2,{id:"support-period",children:"Support period"}),"\n",(0,t.jsxs)(n.p,{children:["A release line is only maintained with patch releases until the start of the\nnext release line, thus approximately 4 months. Typically once a year we will\ndesignate a release line a ",(0,t.jsx)(n.strong,{children:"Long-term Support"})," (LTS) release line. This\nrelease line will be supported with ",(0,t.jsx)(n.strong,{children:"security"})," and ",(0,t.jsx)(n.strong,{children:"critical"})," patches for\napproximately two years. It is foreseen to have an overlap of at least 12 months\nbetween two LTS release lines, to give communities a comfortable time window to\ndeploy the new LTS release."]}),"\n",(0,t.jsx)(n.h2,{id:"client--server-compatibility",children:"Client \u2194 Server compatibility"}),"\n",(0,t.jsx)(n.p,{children:"For differences between the versions of a Rucio client and a Rucio server we guarantee\ncompatibility between a server and an older client up until the second LTS release line\npreceeding the server."}),"\n",(0,t.jsx)(n.p,{children:"For example, a 35 Rucio server guarantees client support until the second LTS release line\npreceeding its version, thus the 1.29 LTS release line. Therefore it guarantees support\nof clients of the 1.29, 1.30, 1.31, 32, 33, 34, and 35 release lines."}),"\n",(0,t.jsx)(n.p,{children:"A 33 Rucio server guarantees client support of the 1.29, 1.30, 1.31, 32, and 33 release\nlines, while a 32 server guarantees support of the 1.26, 1.27, 1.28, 1.29, 1.30, 1.31, and\n32 release lines."}),"\n",(0,t.jsx)(n.p,{children:"Older clients will most likely work without problems as well; however, the release policy does not\nguarantee it."}),"\n",(0,t.jsx)(n.p,{children:"Please be aware that we can not guarantee compatibility of a newer client with an older\nserver."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Version"}),(0,t.jsx)(n.th,{children:"Code name"}),(0,t.jsx)(n.th,{children:"Release date"}),(0,t.jsx)(n.th,{children:"Supported until"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"36"}),(0,t.jsx)(n.td,{children:"Donkey Unchained"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"2024-11"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"2025-03"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"35 LTS"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Donkey and the Data Factory"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2024-07"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.em,{children:"at least 2026-07"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"34"}),(0,t.jsx)(n.td,{children:"Donkey Potter and the Data Cache"}),(0,t.jsx)(n.td,{children:"2024-03"}),(0,t.jsx)(n.td,{children:"2024-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"33"}),(0,t.jsx)(n.td,{children:"Eternal Sunshine of the Donkey's Mind"}),(0,t.jsx)(n.td,{children:"2023-12"}),(0,t.jsx)(n.td,{children:"2024-03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"32 LTS"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"The Good, The Bad and the Donkey"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2023-08"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"2025-08"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.31"}),(0,t.jsx)(n.td,{children:"Donkeys of the Caribbean"}),(0,t.jsx)(n.td,{children:"2023-03"}),(0,t.jsx)(n.td,{children:"2023-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.30"}),(0,t.jsx)(n.td,{children:"The Donkeynator"}),(0,t.jsx)(n.td,{children:"2022-11"}),(0,t.jsx)(n.td,{children:"2023-03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.29 LTS"}),(0,t.jsx)(n.td,{children:"Into the Donkeyverse"}),(0,t.jsx)(n.td,{children:"2022-07"}),(0,t.jsx)(n.td,{children:"2024-08"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.28"}),(0,t.jsx)(n.td,{children:"Teenage Mutant Ninja Donkeys"}),(0,t.jsx)(n.td,{children:"2022-03"}),(0,t.jsx)(n.td,{children:"2022-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.27"}),(0,t.jsx)(n.td,{children:"Batdonkey v Superdonkey"}),(0,t.jsx)(n.td,{children:"2021-11"}),(0,t.jsx)(n.td,{children:"2022-03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.26 LTS"}),(0,t.jsx)(n.td,{children:"Donkey League of La Mancha"}),(0,t.jsx)(n.td,{children:"2021-07"}),(0,t.jsx)(n.td,{children:"2023-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.25"}),(0,t.jsx)(n.td,{children:"Rat-Donkey"}),(0,t.jsx)(n.td,{children:"2021-02"}),(0,t.jsx)(n.td,{children:"2021-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.24"}),(0,t.jsx)(n.td,{children:"Aquadonkey"}),(0,t.jsx)(n.td,{children:"2020-11"}),(0,t.jsx)(n.td,{children:"2021-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.23 LTS"}),(0,t.jsx)(n.td,{children:"The incredible Donkey"}),(0,t.jsx)(n.td,{children:"2020-07"}),(0,t.jsx)(n.td,{children:"2022-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.22"}),(0,t.jsx)(n.td,{children:"Green Donkey"}),(0,t.jsx)(n.td,{children:"2020-02"}),(0,t.jsx)(n.td,{children:"2020-06"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.21"}),(0,t.jsx)(n.td,{children:"Donkeys of the Galaxy"}),(0,t.jsx)(n.td,{children:"2019-11"}),(0,t.jsx)(n.td,{children:"2020-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.20 LTS"}),(0,t.jsx)(n.td,{children:"Wonder Donkey"}),(0,t.jsx)(n.td,{children:"2019-06"}),(0,t.jsx)(n.td,{children:"2021-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.19"}),(0,t.jsx)(n.td,{children:"Fantastic Donkeys"}),(0,t.jsx)(n.td,{children:"2019-02"}),(0,t.jsx)(n.td,{children:"2019-06"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.18"}),(0,t.jsx)(n.td,{children:"Invisible Donkey"}),(0,t.jsx)(n.td,{children:"2018-09"}),(0,t.jsx)(n.td,{children:"2019-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.17"}),(0,t.jsx)(n.td,{children:"Donkey Surfer"}),(0,t.jsx)(n.td,{children:"2018-06"}),(0,t.jsx)(n.td,{children:"2018-09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.16"}),(0,t.jsx)(n.td,{children:"Doctor Donkey"}),(0,t.jsx)(n.td,{children:"2018-04"}),(0,t.jsx)(n.td,{children:"2018-06"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.15"}),(0,t.jsx)(n.td,{children:"Daredonkey"}),(0,t.jsx)(n.td,{children:"2018-02"}),(0,t.jsx)(n.td,{children:"2018-04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.14"}),(0,t.jsx)(n.td,{children:"Professor D"}),(0,t.jsx)(n.td,{children:"2017-11"}),(0,t.jsx)(n.td,{children:"2018-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.13"}),(0,t.jsx)(n.td,{children:"Donkerine"}),(0,t.jsx)(n.td,{children:"2017-09"}),(0,t.jsx)(n.td,{children:"2017-11"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.12"}),(0,t.jsx)(n.td,{children:"Captain Donkey"}),(0,t.jsx)(n.td,{children:"2017-07"}),(0,t.jsx)(n.td,{children:"2017-09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.11"}),(0,t.jsx)(n.td,{children:"Batdonkey"}),(0,t.jsx)(n.td,{children:"2017-05"}),(0,t.jsx)(n.td,{children:"2017-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.10"}),(0,t.jsx)(n.td,{children:"Irondonkey"}),(0,t.jsx)(n.td,{children:"2017-02"}),(0,t.jsx)(n.td,{children:"2017-05"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.9"}),(0,t.jsx)(n.td,{children:"Superdonkey"}),(0,t.jsx)(n.td,{children:"2016-10"}),(0,t.jsx)(n.td,{children:"2017-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.8"}),(0,t.jsx)(n.td,{children:"Spiderdonkey"}),(0,t.jsx)(n.td,{children:"2016-09"}),(0,t.jsx)(n.td,{children:"2016-10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.7"}),(0,t.jsx)(n.td,{children:"Donkey One"}),(0,t.jsx)(n.td,{children:"2016-08"}),(0,t.jsx)(n.td,{children:"2016-09"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.6"}),(0,t.jsx)(n.td,{children:"The Donkey awakens"}),(0,t.jsx)(n.td,{children:"2016-05"}),(0,t.jsx)(n.td,{children:"2016-08"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.5"}),(0,t.jsx)(n.td,{children:"Return of the Donkey"}),(0,t.jsx)(n.td,{children:"2016-04"}),(0,t.jsx)(n.td,{children:"2016-05"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.4"}),(0,t.jsx)(n.td,{children:"The Donkey strikes back"}),(0,t.jsx)(n.td,{children:"2016-02"}),(0,t.jsx)(n.td,{children:"2016-04"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.3"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2016-01"}),(0,t.jsx)(n.td,{children:"2016-02"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.2"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2015-10"}),(0,t.jsx)(n.td,{children:"2016-01"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.1"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2015-08"}),(0,t.jsx)(n.td,{children:"2016-10"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1.0"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2015-07"}),(0,t.jsx)(n.td,{children:"2015-08"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"(0.3)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2015-03"}),(0,t.jsx)(n.td,{children:"2015-07"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"(0.2)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2014-10"}),(0,t.jsx)(n.td,{children:"2015-03"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"(0.1.7)"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"2014-01"}),(0,t.jsx)(n.td,{children:"2014-10"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"secondary-rucio-software-policy",children:"Secondary Rucio Software Policy"}),"\n",(0,t.jsx)(n.h3,{id:"webui",children:"WebUI"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://rucio.github.io/documentation/developer/webui/webui_frontend",children:"Rucio WebUI"})," is an\ninitiative to modernize the Rucio user interface by leveraging the latest web\ntechnologies, built with Next.js, TailwindCSS, and React.js."]}),"\n",(0,t.jsx)(n.p,{children:"The versioning of the Rucio WebUI is closely aligned with the Rucio Server's\nrelease versioning. Both follow semantic versioning principles, ensuring\nconsistency and compatibility."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Major Version"}),": The major version number of the WebUI matches that of the\nRucio server it is compatible with. For example, Rucio Server version\n",(0,t.jsx)(n.strong,{children:"35.x.x"})," is compatible with Rucio WebUI version ",(0,t.jsx)(n.strong,{children:"35.x.x"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Minor and Patch Versions"}),": These versions follow semantic versioning:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Minor Version"}),": Incremented for new features and improvements that are\nbackward-compatible."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Patch Version"}),": Incremented for backward-compatible bug fixes."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"jupyterlab-extension",children:"JupyterLab extension"}),"\n",(0,t.jsx)(n.p,{children:"The Rucio Jupyterlab extension follows it's own release policy described below."}),"\n",(0,t.jsx)(n.p,{children:"The plugin's main dependencies are the Rucio REST API, the JupyterLab environment\nand JavaScript (Node.js and React.js). Up to date, the extension has been\ntested with several combinations of Rucio major versions (v1.30 onwards) and\nJupyterLab (v\u22653) environments, with the latter indicating the\nextension version to install (which follows the semantic versioning schema)."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"JupyterLab v4.x"}),", use v\u22651.0.0."]}),"\n",(0,t.jsxs)(n.li,{children:["For ",(0,t.jsx)(n.code,{children:"JupyterLab v3.x"})," use the latest supported version (v0.10.0)."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Please refer to the Rucio JupyterLab extension ",(0,t.jsx)(n.a,{href:"https://github.com/rucio/jupyterlab-extension",children:"project"})," for more details on\ninstallation, requirements and release policy."]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(96540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);