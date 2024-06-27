"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8610],{17407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(74848),s=n(28453);const o={id:"transfers-overview",title:"Transfers Overview"},i=void 0,a={id:"operator/transfers/transfers-overview",title:"Transfers Overview",description:"Rucio has a set of daemons in charge of transfers between rucio storage elements",source:"@site/../docs/operator/transfers/transfers_overview.md",sourceDirName:"operator/transfers",slug:"/operator/transfers/transfers-overview",permalink:"/documentation/operator/transfers/transfers-overview",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/transfers_overview.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:17194779e5,frontMatter:{id:"transfers-overview",title:"Transfers Overview"},sidebar:"docs",previous:{title:"Configuration parameters",permalink:"/documentation/operator/configuration_parameters"},next:{title:"Transfers Preparer",permalink:"/documentation/operator/transfers/transfers-preparer"}},l={},c=[{value:"Daemon overview",id:"daemon-overview",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Rucio has a set of daemons in charge of transfers between rucio storage elements\n(RSE). Historically, these daemons were grouped under the name of ",(0,r.jsx)(t.code,{children:"conveyor"}),",\nso a big part of the documentation and source code still uses this naming\nwhen referring to the transfer machinery."]}),"\n",(0,r.jsxs)(t.p,{children:["Rucio doesn't execute the actual physical data movement between storage\nelements. It relies on external tools for this scope. Currently, rucio supports\n",(0,r.jsx)(t.a,{href:"https://fts3-docs.web.cern.ch/fts3-docs/docs/overview.html",children:"fts3"})," and\n",(0,r.jsx)(t.a,{href:"https://www.globus.org/data-transfer",children:"globus"}),'. Rucio builds on top of these\n"TransferTools" and provides additional services like recovery from a transfer\nfailure by using another copy from another storage element, multi-hopping\nusing multiple transfertools (or multiple instances of the same transfertool\ntype) and others.']}),"\n",(0,r.jsx)(t.h2,{id:"daemon-overview",children:"Daemon overview"}),"\n",(0,r.jsx)(t.p,{children:"The following transfer-related daemons exist in rucio, presented in the order\nthey intervene in a transfer lifecycle:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"preparer"}),": a strongly recommended optional daemon which is required for\nmany advanced usages, like multiple transfertools together.\nIt is also required to be able to use throttler. If active, performs part\nof the source selection and path computation work instead of the submitter.\nFor all new rucio installation, it is recommended to run this daemon and\nactivate it by setting the ",(0,r.jsx)(t.code,{children:"conveyor/use_preparer = True"})," configuration\noption."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"throttler"}),": an optional daemon which can throttle request submissions\nto/from an RSE"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"submitter"}),", ",(0,r.jsx)(t.strong,{children:"stager"}),": perform the actual submission of transfers to the\nexternal transfertool. If used without preparer, also perform path computation\nand source replica selection. Stager is a specialized submitter for issuing\nstagein operations to tape archives."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"receiver"}),": optional daemons which listens for events published into a\nqueueing system (activemq) by the external transfertool and reacts to those\nevents to mark transfers as successful or failed."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"poller"}),": regularly polls the external transfertool for the status of\npending transfers and marks them as successful/failed"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"finisher"}),": acts on successful or failed transfers. For example, by\nre-scheduling a new attempt."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The minimal list of daemons needed for transfer execution is:\n",(0,r.jsx)(t.code,{children:"submitter"}),", ",(0,r.jsx)(t.code,{children:"poller"})," and ",(0,r.jsx)(t.code,{children:"finisher"}),"."]}),"\n",(0,r.jsx)(t.h1,{id:"lifecycle-of-transfer-requests",children:"Lifecycle of transfer requests"}),"\n",(0,r.jsx)(t.p,{children:"There is no user-facing way to schedule a transfer. All transfer requests are\ncreated internally by rucio as result of rule evaluations. The lifetime of a\nrucio transfer is thus strongly bound to the rule which created it.\nHereafter is a simple example which gives the intuition of how rucio proceeds\nwith a replication/transfer of a file as part of a rule."}),"\n",(0,r.jsx)(t.p,{children:"In the rest of this example we'll assume the following 4 rucio storage\nelements:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510   5    \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502      \u2502\n\u2502 RSE1 \u2502        \u2502 RSE2 \u2502\n\u2502      \u2502    \u250c\u2500\u2500\u25ba\u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518    \u2502   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n   \u25b2        \u2502\n   \u2502100     \u25023\n   \u25bc        \u2502\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510    \u2502   \u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2518   \u2502      \u2502\n\u2502 RSE3 \u2502        \u2502 RSE4 \u2502\n\u2502      \u2502\u25c4\u2500\u2500\u2500\u2500\u2500\u2500\u25ba\u2502      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518   2    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(t.p,{children:"The numbers on the arrows represent the administrative cost which is set\nby the rucio administrator. Cost is unidirectional, but, in this example,\nwe assume that the cost was configured identical in both directions.\nFor example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"rucio-admin rse add-distance --distance 5 RSE1 RSE2\nrucio-admin rse add-distance --distance 5 RSE2 RSE1\n# Note: before rucio 1.30 (as a consequence: also in the current LTS release 1.29),\n# the --ranking option was used for the same purpose. The --distance option\n# could still be set and was mentioned in documentation alongside --ranking\n# but was completely ignored by rucio.\n# On 1.29, you'll have to use the following command:\nrucio-admin rse add-distance --ranking 5 RSE1 RSE2\nrucio-admin rse add-distance --ranking 5 RSE2 RSE1\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Assume a certain dataset ",(0,r.jsx)(t.code,{children:"someScope:dsName"}),", which has two files\n",(0,r.jsx)(t.code,{children:"someScope:file1"})," and ",(0,r.jsx)(t.code,{children:"someScope:file2"}),", and both files are located on ",(0,r.jsx)(t.code,{children:"RSE1"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"The destination of the transfer will be decided on the rule evaluation phase,\nFor example the user adds a rule to ensure that rucio maintains two copies\nfor each of the files on any of the RSEs."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"rucio add-rule someScope:dsName 2 '*'\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The rule evaluation mechanism detects that a copy is already available\non RSE1, but one additional copy is needed to respect the rule requirements of\n2 copies. It will thus create a transfer request to one of the other 3 rses.\nAs of time of writing, the selection of the destination is random as\nlong as it respects the RSE expression. Here, ",(0,r.jsx)(t.code,{children:"*"})," matches any RSE.\nFor the seek of the example, lets assume that RSE4 was selected."]}),"\n",(0,r.jsxs)(t.p,{children:["The rule evaluation mechanism will then create two transfer requests, which\nwill be picked by the transfer machinery. Depending on the configuration value\n",(0,r.jsx)(t.code,{children:"conveyor/use_preparer"}),", the transfer will be either handled by the ",(0,r.jsx)(t.code,{children:"preparer"}),"\nor by the ",(0,r.jsx)(t.code,{children:"submitter"})," directly."]}),"\n",(0,r.jsxs)(t.p,{children:["At this stage, the transfer machinery finds all the possible sources. It\nfilters out the ones which don't match different rule criterias (for example:\nsource RSE expression) and administrative constraints (for example:\nskip blocklisted RSEs). It then computes the paths. In the previous example,\nthe path ",(0,r.jsx)(t.code,{children:"RSE1 -> RSE2 -> RSE3 -> RSE4"})," will be picked due to cost constraints.\nNote that it's possible to make rucio prefer shorter parts by setting the RSE\nattribute ",(0,r.jsx)(t.code,{children:"hop_penalty"}),", or the global configuration value with the same name.\nFor more details about how a source is selected, refer to the ",(0,r.jsx)(t.a,{href:"/documentation/operator/transfers/transfers-preparer",children:"Preparer"}),"\ndocumentation."]}),"\n",(0,r.jsx)(t.p,{children:"The path will be then submitted to the transfertool either in its integrity,\nif transfertool supports multi-hopping, or in multiple iterations."}),"\n",(0,r.jsxs)(t.p,{children:["The final steps are for the ",(0,r.jsx)(t.code,{children:"reciver"})," or ",(0,r.jsx)(t.code,{children:"poller"})," to monitor the transfer's\ncompletion in transfertool and ",(0,r.jsx)(t.code,{children:"finisher"})," to mark the transfers as completed.\nWe only described here a simple case, when the transfer is successful on the\nfirst try. In case of errors, multiple transitions are possible between\ndifferent daemons. Check the following request state transition diagram\nfor a more detailed view:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Request State Transition Chart",src:n(77756).A+"",width:"3131",height:"7564"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},77756:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/request_state_transition_chart-ac293c9924265950b36ebc9d9ddf8895.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const s={},o=r.createContext(s);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);