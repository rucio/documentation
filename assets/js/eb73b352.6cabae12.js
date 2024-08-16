"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[188],{82207:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var t=n(74848),r=n(28453);const o={title:"RSE Expressions"},i=void 0,l={id:"started/concepts/rse_expressions",title:"RSE Expressions",description:"An RSE Expression allows to select a set of RSEs, for example to",source:"@site/../docs/started/concepts/rse_expressions.md",sourceDirName:"started/concepts",slug:"/started/concepts/rse_expressions",permalink:"/documentation/started/concepts/rse_expressions",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/started/concepts/rse_expressions.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1723817264e3,frontMatter:{title:"RSE Expressions"},sidebar:"docs",previous:{title:"Replication rule examples",permalink:"/documentation/started/concepts/replication_rules_examples"},next:{title:"Accounting and quota",permalink:"/documentation/started/concepts/accounting_and_quota"}},c={},a=[{value:"Simple RSE Expressions",id:"simple-rse-expressions",level:2},{value:"Operators",id:"operators",level:2},{value:"Composing RSE Expressions",id:"composing-rse-expressions",level:2}];function d(e){const s={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"An RSE Expression allows to select a set of RSEs, for example to\ncreate replication rules. The RSE Expression consists of one or more\nterms. A term can be a single RSE name or a condition over the RSE\nattributes. The RSE Expression Parser resolves each term to a set of\nRSEs. Terms can be connected by operators to form more complex\nexpressions. For example, users can write RSE expressions to address all\nTier 2 RSEs, all the RSEs in certain cloud, all Tier 2 RSEs not in\ncertain clouds, etc."}),"\n",(0,t.jsx)(s.h2,{id:"simple-rse-expressions",children:"Simple RSE Expressions"}),"\n",(0,t.jsx)(s.p,{children:"Rucio allows to test RSE Expressions, using the command list-rses.\nThe most simple RSE Expression is the one containing the name of a\nparticular RSE."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"The following expression returns all RSEs:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0058:~$ rucio list-rses --rses '*'\n\nIFIC-LCG2_LOCALGROUPDISK\nIFAE_PRODDISK\nPIC_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nCERN-PROD_TZDISK\nBNL-OSG2_MCTAPE\nBNL-OSG2_DATADISK\nIN2P3-CC_MCTAPE\nCERN-PROD_DERIVED\nCERN-PROD_DATADISK\nEELA-UNLP_DATADISK\nUAM-LCG2_SCRATCHDISK\nIFIC-LCG2_DATADISK LIP-COIMBRA_LOCALGROUPDISK\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Whereas the next expression only returns a set containing a single\nRSE:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0058:~$ rucio list-rses --rses\n\nEELA-UNLP_SCRATCHDISK\nELA-UNLP_SCRATCHDISK\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"Another simple RSE Expression allows to list the set of all the RSEs\nin a particular site:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0058:~$ rucio list-rses --rses site=EELA-UNLP\n\nEELA-UNLP_PRODDISK\nEELA-UNLP_DATADISK\nEELA-UNLP_SCRATCHDISK\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["Or all the RSEs who's type is ",(0,t.jsx)(s.code,{children:"SCRATCHDISK"}),":"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0058:~$ rucio list-rses --rses type=SCRATCHDISK\n\nUNI-SIEGEN-HEP_SCRATCHDISK\nNCG-INGRID-PT_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nINFN-T1_SCRATCHDISK\nFMPHI-UNIBA_SCRATCHDISK\nINFN-FRASCATI_SCRATCHDISK\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsx)(s.li,{children:"Or all the Spanish sites:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0058:~$ rucio list-rses --rses SPAINSITES\n\nIFIC-LCG2_LOCALGROUPDISK\nIFAE_PRODDISK\nPIC_SCRATCHDISK\nEELA-UNLP_SCRATCHDISK\nEELA-UNLP_DATADISK\nUAM-LCG2_SCRATCHDISK\nIFIC-LCG2_DATADISK\nLIP-COIMBRA_LOCALGROUPDISK\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsxs)(s.li,{children:["Also numerical comparisons with ",(0,t.jsx)(s.code,{children:"<"})," and ",(0,t.jsx)(s.code,{children:">"})," are possible:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'jbogadog@lxplus0058:~$ rucio list-rses --rses "freespace>3000"\n\nCERN-PROD_TZDISK\nBNL-OSG2_MCTAPE\nBNL-OSG2_DATADISK\nIN2P3-CC_MCTAPE\nCERN-PROD_DERIVED\nCERN-PROD_DATADISK\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Note that if the RSE Expression returns an empty set, Rucio returns an error as\nan RSE Expression must resolve to ",(0,t.jsx)(s.strong,{children:"at least one"})," RSE. Thus, an error does not\nnecessarily mean that the syntax of the expression is wrong, it might just\nresult into an empty list."]}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.code,{children:"3."})," and ",(0,t.jsx)(s.code,{children:"4."}),", the RSE Expression refers to an attribute in the RSE that must\nbe equal to a given value to match the expression. While in ",(0,t.jsx)(s.code,{children:"2."})," and ",(0,t.jsx)(s.code,{children:"5."}),", the\nexpression matches an RSE if the attribute is True. In ",(0,t.jsx)(s.code,{children:"6."})," a numerical term is\nused to resolve all RSEs with more than 3000 TB free space. It is possible to\nsee the list of attributes for a particular RSE with Rucio:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0100:~$ rucio list-rse-attributes EELA-UNLP_SCRATCHDISK\n\nftstesting: https://fts3-pilot.cern.ch:8446\n\nALL: True\nESTIER2S: True\nphysgroup: None\nspacetoken: ATLASSCRATCHDISK\n\nfts: https://fts3.cern.ch:8446,https://lcgfts3.gridpp.rl.ac.uk:8446,https://fts.usatlas.bnl.gov:8446\n\nsite: EELA-UNLP\nEELA-UNLP_SCRATCHDISK: True\ndatapolicyt0disk: False\ncloud: ES\nSPAINSITES: True\ndatapolicyt0taskoutput: False\n\nfts_testing: https://fts3-pilot.cern.ch:8446\ntier: 3\ndatapolicyt0tape: False\ntype: SCRATCHDISK\nistape: False\n"})}),"\n",(0,t.jsx)(s.p,{children:"Most of the RSEs share the same set of attributes, and is possible to create RSE\nExpressions based on all of them."}),"\n",(0,t.jsx)(s.h2,{id:"operators",children:"Operators"}),"\n",(0,t.jsx)(s.p,{children:"Operators are used to connect terms in order to get more complex RSE\nExpressions/terms. The syntactic functionality of the Rucio RSE Expressions\nParser allows the basic operations defined in mathematical set theory, Union,\nIntersection and Complement. Using an operator on two sets of RSEs will\nconstruct a new set based on the given sets."}),"\n",(0,t.jsx)(s.p,{children:"The symbols A and B in this table stand for a term."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Operator"}),(0,t.jsx)(s.th,{children:"Meaning"}),(0,t.jsx)(s.th,{children:"Interpretation"}),(0,t.jsx)(s.th,{children:"Example"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"A|B"}),(0,t.jsx)(s.td,{children:"UNION"}),(0,t.jsx)(s.td,{children:"A union B"}),(0,t.jsx)(s.td,{children:"tier=1|tier=2"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"A&B"}),(0,t.jsx)(s.td,{children:"INTERSECT"}),(0,t.jsx)(s.td,{children:"A intersect B"}),(0,t.jsx)(s.td,{children:"tier=1&country=us"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"A\\B"}),(0,t.jsx)(s.td,{children:"COMPLEMENT"}),(0,t.jsx)(s.td,{children:"A complement B"}),(0,t.jsx)(s.td,{children:"cloud=ES\\type=SCRATCHDISK"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"composing-rse-expressions",children:"Composing RSE Expressions"}),"\n",(0,t.jsx)(s.p,{children:"Using the operators described above, it's possible to create expressions to\nselect whatever RSE you need to put your data in. Use the following list of\nexamples to build your own RSE Expressions."}),"\n",(0,t.jsx)(s.p,{children:"All Tier 2 sites in DE cloud:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0100:~$ rucio list-rses --rses 'tier=2&cloud=DE'\nPRAGUELCG2_PPSLOCALGROUPDISK\nFMPHI-UNIBA_LOCALGROUPDISK\n...\nUNI-FREIBURG_DATADISK\nDESY-HH_PRODDISK\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Note the use of the single quotes. Single quotes are needed to avoid the shell\ninterpret the ",(0,t.jsx)(s.code,{children:"&"}),", the ",(0,t.jsx)(s.code,{children:"\\|"})," or the ",(0,t.jsx)(s.code,{children:"\\\\"})," as commands."]}),"\n",(0,t.jsx)(s.p,{children:"All tier 1 but not the ones in country=us:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0100:~$ rucio list-rses --rses 'tier=1\\country=us'\n\nINFN-T1_MCTAPE\nBNL-OSG2_DATATAPE\nBNL-OSG2_DDMTEST\nNIKHEF-ELPROD_PHYS-SUSY\n"})}),"\n",(0,t.jsx)(s.p,{children:"However, take care of the subtle differences. While the first expression exclude\nUnited States' sites, the second doesn't:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0100:~$ rucio list-rses --rses 'tier=1\\country=us'|wc -l\n115\n\njbogadog@lxplus0100:~$ rucio list-rses --rses 'tier=1\\country=US'|wc -l\n117\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The filters are processed from left to right. Is possible to use parenthesis to\nforce the order of operation. See the following example to get all the\n",(0,t.jsx)(s.code,{children:"SCRATCHDISK"}),"s in IT or FR clouds:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jbogadog@lxplus0100:~$ rucio list-rses --rses \\\n  'cloud=IT|cloud=FR&type=SCRATCHDISK' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --rses \\\n  '(cloud=IT|cloud=FR)&type=SCRATCHDISK' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --rses \\\n  'type=SCRATCHDISK&(cloud=IT|cloud=FR)' | wc -l\n30\n\njbogadog@lxplus0100:~$ rucio list-rses --rses \\\n  'type=SCRATCHDISK&cloud=IT|cloud=FR' | wc -l\n92\n"})}),"\n",(0,t.jsxs)(s.p,{children:["While the first three operations are equivalent, the last return sites in cloud\n",(0,t.jsx)(s.code,{children:"FR"})," but not only the ",(0,t.jsx)(s.code,{children:"SCRATCHDISK"}),"s but the ",(0,t.jsx)(s.code,{children:"GROUPDISK"}),"s and ",(0,t.jsx)(s.code,{children:"DATADISK"}),"s too,\namong other types."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(96540);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);