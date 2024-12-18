"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3347],{33562:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"release-notes/36.0.0.post2","title":"36.0.0.post2","description":"Important changes","source":"@site/../docs/release-notes/36.0.0.post2.md","sourceDirName":"release-notes","slug":"/release-notes/36.0.0.post2","permalink":"/documentation/release-notes/36.0.0.post2","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/36.0.0.post2.md","tags":[],"version":"current","frontMatter":{"title":"36.0.0.post2"}}');var t=s(74848),r=s(28453);const o={title:"36.0.0.post2"},c=void 0,l={},h=[{value:"Important changes",id:"important-changes",level:2},{value:"Technology Preview: Rich Client Output",id:"technology-preview-rich-client-output",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Features",id:"features-1",level:3},{value:"Enhancements",id:"enhancements-1",level:3},{value:"Bugs",id:"bugs-1",level:3}];function a(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"important-changes",children:"Important changes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For ",(0,t.jsx)(i.strong,{children:"policy package operators"}),": Rucio 36 includes a breaking change in the way the ",(0,t.jsx)(i.strong,{children:"supported Rucio version"})," is configured. With this change, the version with PEP-compliant version specifier; you can find the specification for the version specifiers here: ",(0,t.jsx)(i.a,{href:"https://peps.python.org/pep-0440/#version-specifiers",children:"https://peps.python.org/pep-0440/#version-specifiers"})," In order to migrate to the new format, you simply need to add a version specifier comparison operator to the ",(0,t.jsx)(i.code,{children:"SUPPORTED_VERSION"})," line in your policy package. For example, if you only want to support the entire Rucio ",(0,t.jsx)(i.code,{children:"36"})," release line (so 36.1.0, 36.2.0...) without yet supporting Rucio ",(0,t.jsx)(i.code,{children:"37"}),", you can use the ",(0,t.jsx)(i.a,{href:"https://peps.python.org/pep-0440/#compatible-release",children:"compatible release operator"})," ",(0,t.jsx)(i.code,{children:"~="}),", as seen below.\nBefore Rucio 36:\n",(0,t.jsx)(i.code,{children:"SUPPORTED_VERSION = '36'"}),"\nFrom Rucio 36 onwards:\n",(0,t.jsx)(i.code,{children:"SUPPORTED_VERSION = '~=36.0'"})]}),"\n",(0,t.jsxs)(i.li,{children:["This release offers a complete re-structuring of the Rucio Command Line Interface. Our objective was to offer a more consistent CLI experience, similar to other commonly used CLIs. This new structure should be considered as a ",(0,t.jsx)(i.strong,{children:"pre-release"})," state, thus some adjustments are still to be expected over the coming months. To report issues or suggestions please report them in issue ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7224",children:"#7224"}),". We will announce at a later time once the new CLI structure is considered fully stable."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"technology-preview-rich-client-output",children:"Technology Preview: Rich Client Output"}),"\n",(0,t.jsxs)(i.p,{children:["This release features an experimental use of the ",(0,t.jsx)(i.a,{href:"https://github.com/Textualize/rich",children:"Rich"})," library in the Rucio command-line client.\nRich offers an improved interface, with colour output, prettier tables, use of markup, a spinner for long operations, and more.\nIn addition, the output of a command is displayed through the use of a pager."]}),"\n",(0,t.jsxs)(i.p,{children:["The use of Rich has to be explicitly enabled by adding the following to the client\u2019s configuration file ",(0,t.jsx)(i.code,{children:"rucio.cfg"}),":"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ini",children:"[experimental]\ncli = rich\n"})}),"\n",(0,t.jsx)(i.p,{children:"At this time, we recommend that Rucio developers and power users enable the use of Rich and report issues. The plan is make Rich the default in the next Rucio major release and eventually eliminate the use of the tabulate library."}),"\n",(0,t.jsx)(i.h2,{id:"general",children:"General"}),"\n",(0,t.jsx)(i.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Policies: Prepare replacement of current policy import with policy packages ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/4798",children:"#4798"})]}),"\n",(0,t.jsxs)(i.li,{children:["Policies: Policy package version support: specifying each supported major version (current way of doing things) vs specifying a minimum valid version (proposal) ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7082",children:"#7082"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: Move ATLAS VO test to use policy package ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6962",children:"#6962"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Policies: Allow permissions to optionally return a message ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6580",children:"#6580"})]}),"\n",(0,t.jsxs)(i.li,{children:['Policies: "diff"-based policies, instead of fully replicating the base policy package code ',(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6842",children:"#6842"})]}),"\n",(0,t.jsxs)(i.li,{children:["Policies: Refactor all ATLAS-related code into ATLAS policy package ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7027",children:"#7027"})]}),"\n",(0,t.jsxs)(i.li,{children:["Policies: Policy package version check: instead of parsing string manually, use ",(0,t.jsx)(i.code,{children:"packaging.version.Version"})," ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7083",children:"#7083"})]}),"\n",(0,t.jsxs)(i.li,{children:["Policies: Extraction of Belle II logic to policy package ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7157",children:"#7157"})]}),"\n",(0,t.jsxs)(i.li,{children:["Protocols: Use ",(0,t.jsx)(i.code,{children:"abstractmethod"})," decorator in place of ",(0,t.jsx)(i.code,{children:"NotImplementedError"})," in instances where we're using ",(0,t.jsx)(i.code,{children:"NotImplementedError"})," to mark an abstract method ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7031",children:"#7031"})]}),"\n",(0,t.jsxs)(i.li,{children:["Release management: Unneeded dev dependency ",(0,t.jsx)(i.code,{children:"virtualenv"})," ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7140",children:"#7140"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: Introduce test coverage in PR reviews (and possibly in CI) ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6545",children:"#6545"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: Better define unit tests and integ tests ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7007",children:"#7007"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: Improve test coverage ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7008",children:"#7008"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: Release 36 type annotations ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7021",children:"#7021"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: Remove unnecessary ",(0,t.jsx)(i.code,{children:"test_download_states"})," ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7070",children:"#7070"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: Move ",(0,t.jsx)(i.code,{children:"test_rucio_server"})," back into tests folder ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7255",children:"#7255"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"bugs",children:"Bugs"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Authentication & Authorisation: Permissions: Unify the permissions for ",(0,t.jsx)(i.code,{children:"add_did"})," and ",(0,t.jsx)(i.code,{children:"add_dids"})," ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6973",children:"#6973"})]}),"\n",(0,t.jsxs)(i.li,{children:["Deletion: Reaper fails to delete files in S3 based RSEs ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6548",children:"#6548"})]}),"\n",(0,t.jsxs)(i.li,{children:["Documentation: Importing a schema from a policy package with a ",(0,t.jsx)(i.code,{children:"lfn2pfn"})," algorithm results in circular imports due to module-level logic ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7165",children:"#7165"})]}),"\n",(0,t.jsxs)(i.li,{children:["Fix ",(0,t.jsx)(i.code,{children:"TripleDES"})," issue that's blocking ",(0,t.jsx)(i.code,{children:"cryptography"})," dependency update  ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7075",children:"#7075"})]}),"\n",(0,t.jsxs)(i.li,{children:["Protocols: RSEProtocol crashes if ",(0,t.jsx)(i.code,{children:"protocol_attr"})," doesn't have ",(0,t.jsx)(i.code,{children:"auth_token"})," ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7023",children:"#7023"})]}),"\n",(0,t.jsxs)(i.li,{children:["REST & API: Align recursive Parameter Handling and Documentation in Scope API Endpoint ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7175",children:"#7175"})]}),"\n",(0,t.jsxs)(i.li,{children:["Release management: Version block is outdated for minimum Python version ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7182",children:"#7182"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: VO tests: Belle II test failing due to using deprecated policy package version syntax for ",(0,t.jsx)(i.code,{children:"SUPPORTED_VERSION"})," ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7186",children:"#7186"})]}),"\n",(0,t.jsxs)(i.li,{children:["Testing: End-to-end integ test failure due to client rename ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7257",children:"#7257"})]}),"\n",(0,t.jsxs)(i.li,{children:["Transfers: Automatix crash if one destination RSE is not available ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6925",children:"#6925"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"clients",children:"Clients"}),"\n",(0,t.jsx)(i.h3,{id:"features-1",children:"Features"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Clients: Re-write and standardization of client command structure ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6639",children:"#6639"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"enhancements-1",children:"Enhancements"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Clients: Use the rich library to enhance the command-line client commands ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/6987",children:"#6987"})]}),"\n",(0,t.jsxs)(i.li,{children:["Clients: ",(0,t.jsx)(i.code,{children:"--client_key"})," should have been named ",(0,t.jsx)(i.code,{children:"--client-key"})," ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7244",children:"#7244"})]}),"\n",(0,t.jsxs)(i.li,{children:["Clients: New CLI: ",(0,t.jsx)(i.code,{children:"--help"})," shows the old command structure ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7245",children:"#7245"})]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"bugs-1",children:"Bugs"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Clients: New CLI: The \u2018commands\u2019 directory is not included in the release ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7237",children:"#7237"})]}),"\n",(0,t.jsxs)(i.li,{children:["Clients: The \u2018typing_extensions\u2019 module is not included in the dependencies ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7238",children:"#7238"})]}),"\n",(0,t.jsxs)(i.li,{children:["Clients: New CLI: argparse.ArgumentError ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7239",children:"#7239"})]}),"\n",(0,t.jsxs)(i.li,{children:["Clients: New CLI: AttributeError for X.509 authentication ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7242",children:"#7242"})]}),"\n",(0,t.jsxs)(i.li,{children:["Clients: New CLI: The \u2018bin_legacy\u2019 directory is not included in the release ",(0,t.jsx)(i.a,{href:"https://github.com/rucio/rucio/issues/7270",children:"#7270"})]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,i,s)=>{s.d(i,{R:()=>o,x:()=>c});var n=s(96540);const t={},r=n.createContext(t);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);