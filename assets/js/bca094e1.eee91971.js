"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9784],{82543:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(74848),s=t(28453);const i={id:"transfers-preparer",title:"Transfers Preparer"},o="Source replica selection",a={id:"operator/transfers/transfers-preparer",title:"Transfers Preparer",description:"conveyor-preparer (transfer preparer) is the main entry point into the",source:"@site/../docs/operator/transfers/transfers_preparer.md",sourceDirName:"operator/transfers",slug:"/operator/transfers/transfers-preparer",permalink:"/documentation/operator/transfers/transfers-preparer",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/transfers/transfers_preparer.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1729244232e3,frontMatter:{id:"transfers-preparer",title:"Transfers Preparer"},sidebar:"docs",previous:{title:"Transfers Overview",permalink:"/documentation/operator/transfers/transfers-overview"},next:{title:"Transfers Throttler",permalink:"/documentation/operator/transfers/transfers-throttler"}},c={},l=[];function d(e){const r={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"conveyor-preparer"})," (transfer preparer) is the main entry point into the\ntransfer machinery. It leverages topological information to pick the best source\nreplica for the transfer. It also decides if the transfer has to be handled by\nthe throttler or not. For all new rucio installations, it is recommended to run\nthis daemon and activate it by setting the ",(0,n.jsx)(r.code,{children:"conveyor/use_preparer = True"}),"\nconfiguration option."]}),"\n",(0,n.jsx)(r.p,{children:"Preparer:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"finds all source RSEs which have a replica of the desired file"}),"\n",(0,n.jsx)(r.li,{children:"filters out the source RSEs which don't respect administrative constraints"}),"\n",(0,n.jsx)(r.li,{children:"ensures protocol compatibility between sources and destination"}),"\n",(0,n.jsx)(r.li,{children:"performs path computations to find the best sources"}),"\n",(0,n.jsxs)(r.li,{children:["transitions the transfer request either to a ",(0,n.jsx)(r.code,{children:"Waiting"})," or to a ",(0,n.jsx)(r.code,{children:"Queued"})," state"]}),"\n"]}),"\n",(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"source-replica-selection",children:"Source replica selection"})}),"\n",(0,n.jsx)(r.p,{children:"One of the main jobs done by the preparer is the selection of the replica\nto be used as a transfer sources. For that, it relies on multiple RSE\nattributes and on the configured protocols. This section provides a summary\nof what configuration parameters can influence the preparer at this stage."}),"\n",(0,n.jsxs)(r.p,{children:["We will use the notation ",(0,n.jsx)(r.code,{children:"section/option"})," to speak about a configuration\nvalue to be set in ",(0,n.jsx)(r.code,{children:"rucio.cfg"})," like this:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-text",children:"[section]\noption = value\n"})}),"\n",(0,n.jsx)(r.p,{children:"The preparer will start by retrieving all the possible sources from the\ndatabase."}),"\n",(0,n.jsxs)(r.p,{children:["In the following step, the preparer will skip all sources which don't\nrespect the administrative constraints. For example, it will ignore source\nRSEs with ",(0,n.jsx)(r.code,{children:"availability_read=False"})," (unless the preparer is run with\n",(0,n.jsx)(r.code,{children:"--ignore-availability"}),"). It also respects the ",(0,n.jsx)(r.code,{children:"restricted_read"})," and\n",(0,n.jsx)(r.code,{children:"restricted_write"})," RSE attributes for the source and the destination."]}),"\n",(0,n.jsxs)(r.p,{children:["Some request attributes will impact the source selection. For example, preparer\nwill skip source RSEs which don't match the ",(0,n.jsx)(r.code,{children:"source_replica_expression"})," or\n",(0,n.jsx)(r.code,{children:"allow_tape_source"})," conditions. It will also ignore requests witch require a\n",(0,n.jsx)(r.code,{children:"transfertool"})," that this preparer cannot use. The request attributes are\neither inherited from the rule, or set by another transfer daemon\n(for example: preparer)"]}),"\n",(0,n.jsxs)(r.p,{children:["The next step is to perform the path computation. At this stage, preparer\nuses the distance between RSEs to perform shortest-path computations. If\nmulti-hopping is enabled via ",(0,n.jsx)(r.code,{children:"transfers/use_multihop"}),", then the configuration\nvalue ",(0,n.jsx)(r.code,{children:"transfers/hop_penalty"})," + the RSE attributes ",(0,n.jsx)(r.code,{children:"available_for_multihop"}),"\nand ",(0,n.jsx)(r.code,{children:"hop_penalty"})," will influence the distances for multi-hop paths.\nEach hop, even for single-hop transfers, must respect the protocol\ncompatibility between the source of the hop and its destination. The\n",(0,n.jsx)(r.a,{href:"https://github.com/rucio/rucio/blob/1b8ca368523d13fd11bc0b32c14528f2fcec778b/lib/rucio/common/constants.py#L48",children:"SCHEME_MAP"}),"\nconstant defines the compatibility between protocols. Only protocols with\nnon-zero ",(0,n.jsx)(r.code,{children:"third_party_copy_read"})," will be considered for source RSEs, ordered\nby priority. Same for the destination: ",(0,n.jsx)(r.code,{children:"third_party_copy_write"})," is used."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Note"}),": distances between RSEs which are set by the administrator via"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",children:"rucio-admin rse add-distance --distance 1 RSE1 RSE2\n# Note: before rucio 1.30 (as a consequence: also in the current LTS release 1.29),\n# the --ranking option was used for the same purpose. The --distance option\n# could still be set and was mentioned in documentation alongside --ranking\n# but was completely ignored by rucio.\n# On 1.29, you'll have to use the following command:\nrucio-admin rse add-distance --ranking 1 RSE1 RSE2\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Once all valid paths are found, after all the filtering done previously,\nthe paths are ordered using the following simple\n",(0,n.jsx)(r.a,{href:"https://github.com/rucio/rucio/blob/608c9b1dc834f07396cc49dfcbc3daa613b61d56/lib/rucio/core/transfer.py#L905",children:"rules"}),"\n:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"the source ranking is compared first. Source ranking is an integer which is\ndecreased each time a particular source is found to have an issue to perform\nthis particular transfer. It is thus equal to 0 at first try, and decreased\nat transfer failure before re-trying the transfer. This ensures that\nproblematic sources are much less likely to be re-used."}),"\n",(0,n.jsx)(r.li,{children:"On equal source ranking, the RSE type is checked. Disk sources are preferred\nover tape."}),"\n",(0,n.jsx)(r.li,{children:"On equal source RSE type, the distance between the source RSE and the\ndestination RSE is compared."}),"\n",(0,n.jsx)(r.li,{children:"On equal distance, we prefer single-hop paths."}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);