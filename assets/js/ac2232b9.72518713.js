"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6399],{47560:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"release-notes/1.14.6","title":"1.14.6","description":"Rucio","source":"@site/../docs/release-notes/1.14.6.md","sourceDirName":"release-notes","slug":"/release-notes/1.14.6","permalink":"/documentation/release-notes/1.14.6","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.6.md","tags":[],"version":"current","frontMatter":{"title":"1.14.6"}}');var t=i(74848),r=i(28453);const c={title:"1.14.6"},o=void 0,l={},u=[{value:"Rucio",id:"rucio",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"rucio",children:"Rucio"}),"\n",(0,t.jsx)(s.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: RSE distance APIs not exposed ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/330",children:"#330"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: support for multiple permission and schema policy ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/356",children:"#356"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: add # in cms regexp name ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/394",children:"#394"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Configurable name length ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/399",children:"#399"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Client: Check URL escaping code for handling of / ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/411",children:"#411"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Include the network domain (wan, lan) in list_replicas ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/64",children:"#64"})]}),"\n",(0,t.jsxs)(s.li,{children:["Documentation: space-usage: Add documentation. ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/329",children:"#329"})]}),"\n",(0,t.jsxs)(s.li,{children:["Documentation: Contributing guide Improvement  ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/331",children:"#331"})]}),"\n",(0,t.jsxs)(s.li,{children:["Infrastructure: Provide dev container that mounts code ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/322",children:"#322"})]}),"\n",(0,t.jsxs)(s.li,{children:["Release management: AUTHORS update ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/380",children:"#380"})]}),"\n",(0,t.jsxs)(s.li,{children:["Testing: propagate the rigth postgresql file in travis ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/359",children:"#359"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"bugs",children:"Bugs"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Core & Internals: get_submitted_at_rucio should return an array of submitted_at time stamps ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/232",children:"#232"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: redirect: wrong link follow format to metalink ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/348",children:"#348"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: PostgreSQL not working, 1 test failing ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/388",children:"#388"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: ",(0,t.jsx)(s.code,{children:"import rucio.core.rule"})," fails with missing section ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/407",children:"#407"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: Move rule permission check is not working ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/426",children:"#426"})]}),"\n",(0,t.jsxs)(s.li,{children:["Core & Internals: database: bootstrap mismatch between SSH and GSS ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/439",children:"#439"})]}),"\n",(0,t.jsxs)(s.li,{children:["Infrastructure: Fix missing cx_Oracle dependency in DockerFile ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/317",children:"#317"})]}),"\n",(0,t.jsxs)(s.li,{children:["Life time model: Atropos doesn't properly take into account computed eol_at ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/412",children:"#412"})]}),"\n",(0,t.jsxs)(s.li,{children:["Subscriptions: Change the set_new_dids method to set NULL value instead of 0 ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/447",children:"#447"})]}),"\n",(0,t.jsxs)(s.li,{children:["Testing: Database tests are not executed ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/383",children:"#383"})]}),"\n",(0,t.jsxs)(s.li,{children:["Transfers: Link_ranking based sorting in case of multipe tape replicas is done wrong ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/351",children:"#351"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Clients: Avoid session reuse when new token is needed ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/433",children:"#433"})]}),"\n",(0,t.jsxs)(s.li,{children:["Clients: Client-side escaping of generated URLs ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/436",children:"#436"})]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"webui",children:"WebUI"}),"\n",(0,t.jsx)(s.h3,{id:"enhancements-2",children:"Enhancements"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["WebUI: add suspicious files dump description to WebUI ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/363",children:"#363"})]}),"\n",(0,t.jsxs)(s.li,{children:["WebUI: Copyright statement of WebUI footer needs to be updated to include 2018 ",(0,t.jsx)(s.a,{href:"https://github.com/rucio/rucio/issues/430",children:"#430"})]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>c,x:()=>o});var n=i(96540);const t={},r=n.createContext(t);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);