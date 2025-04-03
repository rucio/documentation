"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16596],{25577:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"release-notes/36.0.0rc5","title":"36.0.0rc5","description":"Release Candidate","source":"@site/../docs/release-notes/36.0.0rc5.md","sourceDirName":"release-notes","slug":"/release-notes/36.0.0rc5","permalink":"/documentation/release-notes/36.0.0rc5","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/36.0.0rc5.md","tags":[],"version":"current","frontMatter":{"title":"36.0.0rc5"}}');var r=s(74848),t=s(28453);const o={title:"36.0.0rc5"},c=void 0,l={},a=[{value:"Release Candidate",id:"release-candidate",level:2},{value:"Important changes",id:"important-changes",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}];function h(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"release-candidate",children:"Release Candidate"}),"\n",(0,r.jsx)(i.p,{children:"This is a release candidate! Only to be used in testing environments!"}),"\n",(0,r.jsx)(i.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["For ",(0,r.jsx)(i.strong,{children:"policy package operators"}),": Rucio 36 includes a breaking change in the way the ",(0,r.jsx)(i.strong,{children:"supported Rucio version"})," is configured. With this change, the version with PEP-compliant version specifier; you can find the specification for the version specifiers here: ",(0,r.jsx)(i.a,{href:"https://peps.python.org/pep-0440/#version-specifiers",children:"https://peps.python.org/pep-0440/#version-specifiers"})," In order to migrate to the new format, you simply need to add a version specifier comparison operator to the ",(0,r.jsx)(i.code,{children:"SUPPORTED_VERSION"})," line in your policy package. For example, if you only want to support the entire Rucio ",(0,r.jsx)(i.code,{children:"36"})," release line (so 36.1.0, 36.2.0...) without yet supporting Rucio ",(0,r.jsx)(i.code,{children:"37"}),", you can use the ",(0,r.jsx)(i.a,{href:"https://peps.python.org/pep-0440/#compatible-release",children:"compatible release operator"})," ",(0,r.jsx)(i.code,{children:"~="}),", as seen below.\nBefore Rucio 36:\n",(0,r.jsx)(i.code,{children:"SUPPORTED_VERSION = '36'"}),"\nFrom Rucio 36 onwards:\n",(0,r.jsx)(i.code,{children:"SUPPORTED_VERSION = '~=36.0'"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"general",children:"General"}),"\n",(0,r.jsx)(i.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Policies: Prepare replacement of current policy import with policy packages ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/4798",children:"#4798"})]}),"\n",(0,r.jsxs)(i.li,{children:["Policies: Policy package version support: specifying each supported major version (current way of doing things) vs specifying a minimum valid version (proposal) ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7082",children:"#7082"})]}),"\n",(0,r.jsxs)(i.li,{children:["Testing: Move ATLAS VO test to use policy package ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6962",children:"#6962"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Policies: Allow permissions to optionally return a message ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6580",children:"#6580"})]}),"\n",(0,r.jsxs)(i.li,{children:['Policies: "diff"-based policies, instead of fully replicating the base policy package code ',(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6842",children:"#6842"})]}),"\n",(0,r.jsxs)(i.li,{children:["Policies: Refactor all ATLAS-related code into ATLAS policy package ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7027",children:"#7027"})]}),"\n",(0,r.jsxs)(i.li,{children:["Policies: Policy package version check: instead of parsing string manually, use ",(0,r.jsx)(i.code,{children:"packaging.version.Version"})," ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7083",children:"#7083"})]}),"\n",(0,r.jsxs)(i.li,{children:["Policies: Extraction of Belle II logic to policy package ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7157",children:"#7157"})]}),"\n",(0,r.jsxs)(i.li,{children:["Protocols: Use ",(0,r.jsx)(i.code,{children:"abstractmethod"})," decorator in place of ",(0,r.jsx)(i.code,{children:"NotImplementedError"})," in instances where we're using ",(0,r.jsx)(i.code,{children:"NotImplementedError"})," to mark an abstract method ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7031",children:"#7031"})]}),"\n",(0,r.jsxs)(i.li,{children:["Release management: Unneeded dev dependency ",(0,r.jsx)(i.code,{children:"virtualenv"})," ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7140",children:"#7140"})]}),"\n",(0,r.jsxs)(i.li,{children:["Testing: Introduce test coverage in PR reviews (and possibly in CI) ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6545",children:"#6545"})]}),"\n",(0,r.jsxs)(i.li,{children:["Testing: Better define unit tests and integ tests ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7007",children:"#7007"})]}),"\n",(0,r.jsxs)(i.li,{children:["Testing: Improve test coverage ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7008",children:"#7008"})]}),"\n",(0,r.jsxs)(i.li,{children:["Testing: Remove unnecessary ",(0,r.jsx)(i.code,{children:"test_download_states"})," ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7070",children:"#7070"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"bugs",children:"Bugs"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Authentication & Authorisation: Permissions: Unify the permissions for ",(0,r.jsx)(i.code,{children:"add_did"})," and ",(0,r.jsx)(i.code,{children:"add_dids"})," ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6973",children:"#6973"})]}),"\n",(0,r.jsxs)(i.li,{children:["Deletion: Reaper fails to delete files in S3 based RSEs ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6548",children:"#6548"})]}),"\n",(0,r.jsxs)(i.li,{children:["Documentation: Importing a schema from a policy package with a ",(0,r.jsx)(i.code,{children:"lfn2pfn"})," algorithm results in circular imports due to module-level logic ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7165",children:"#7165"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fix ",(0,r.jsx)(i.code,{children:"TripleDES"})," issue that's blocking ",(0,r.jsx)(i.code,{children:"cryptography"})," dependency update  ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7075",children:"#7075"})]}),"\n",(0,r.jsxs)(i.li,{children:["Protocols: RSEProtocol crashes if ",(0,r.jsx)(i.code,{children:"protocol_attr"})," doesn't have ",(0,r.jsx)(i.code,{children:"auth_token"})," ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7023",children:"#7023"})]}),"\n",(0,r.jsxs)(i.li,{children:["REST & API: Align recursive Parameter Handling and Documentation in Scope API Endpoint ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7175",children:"#7175"})]}),"\n",(0,r.jsxs)(i.li,{children:["Release management: Version block is outdated for minimum Python version ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7182",children:"#7182"})]}),"\n",(0,r.jsxs)(i.li,{children:["Testing: VO tests: Belle II test failing due to using deprecated policy package version syntax for ",(0,r.jsx)(i.code,{children:"SUPPORTED_VERSION"})," ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7186",children:"#7186"})]}),"\n",(0,r.jsxs)(i.li,{children:["Transfers: Automatix crash if one destination RSE is not available ",(0,r.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6925",children:"#6925"})]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>c});var n=s(96540);const r={},t=n.createContext(r);function o(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);