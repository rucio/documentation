"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47101],{31173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"developer/project_structure","title":"Project Structure","description":"The Rucio code structure is broken into multiple modules, to allow it to be grouped into packages without requiring code duplication.","source":"@site/../docs/developer/project_structure.md","sourceDirName":"developer","slug":"/developer/project_structure","permalink":"/documentation/developer/project_structure","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/project_structure.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1733324875000,"frontMatter":{"id":"project_structure","title":"Project Structure"},"sidebar":"docs","previous":{"title":"Dependency management","permalink":"/documentation/developer/dependency_management"},"next":{"title":"REST API Documentation","permalink":"/documentation/developer/rest_api_doc"}}');var i=n(74848),s=n(28453);const r={id:"project_structure",title:"Project Structure"},a=void 0,c={},l=[{value:"Core",id:"core",level:2},{value:"Common",id:"common",level:2},{value:"Client",id:"client",level:2},{value:"Daemons",id:"daemons",level:2},{value:"Gateway",id:"gateway",level:2},{value:"Web",id:"web",level:2},{value:"Other",id:"other",level:2},{value:"DB",id:"db",level:3},{value:"RSE",id:"rse",level:3},{value:"Tests",id:"tests",level:3},{value:"Transfertool",id:"transfertool",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Rucio code structure is broken into multiple modules, to allow it to be grouped into packages without requiring code duplication.\nBefore making a change, it is important to consider how your change will be used across different releases.\nThis will greatly impact the structure of your change."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"A simplified diagram of Rucio&#39;s code structure. It is broken into 3 boxes labeled &quot;Rucio&quot;, &quot;Rucio Web&quot; and &quot;Rucio Client&quot;. The &quot;Rucio&quot; box contains the web and client boxes.",src:n(17066).A+"",width:"2980",height:"1407"})}),"\n",(0,i.jsx)(t.h2,{id:"core",children:"Core"}),"\n",(0,i.jsx)(t.p,{children:"Core contains the main functionality of the project, it can be conceptualized as rucio's central logic.\nAny changes that need to impact all of rucio should be made in core.\nFor example: if a new feature introduces a new type of DID, the logic for this is included in the core, and then the ways for users and operators to use this logic is included in different parts of the code (namely, in client, gateway, and web)."}),"\n",(0,i.jsx)(t.h2,{id:"common",children:"Common"}),"\n",(0,i.jsx)(t.p,{children:"Common contains code used across client and server modules.\nCode in common is distributed with server and client releases, so if the functionality is required in both releases, it is included in common.\nThis includes things like configuration parsing, logging, and generalized utility/helper functions."}),"\n",(0,i.jsx)(t.h2,{id:"client",children:"Client"}),"\n",(0,i.jsx)(t.p,{children:"Client is a standalone module which sends requests to a server.\nIt can make calls to the Common module, but does not require direct knowledge of core's operation.\nIt contacts the Rest API hosted in web."}),"\n",(0,i.jsx)(t.p,{children:"bin/rucio and bin/rucio-admin utilize functionality hosted in client."}),"\n",(0,i.jsx)(t.p,{children:"If your change impacts how the user interacts with rucio, (the name of calls, arguments), this change should be made in client."}),"\n",(0,i.jsx)(t.h2,{id:"daemons",children:"Daemons"}),"\n",(0,i.jsx)(t.p,{children:"Daemons are auxiliary server side code to run asynchronous work without direct user interaction.\nThey do not need to be run, but are included with server releases.\nChanges impacting daemons are generally self-contained in the daemons."}),"\n",(0,i.jsx)(t.h2,{id:"gateway",children:"Gateway"}),"\n",(0,i.jsx)(t.p,{children:"Gateway is a series of recipes for basic operations using core functionality.\nIt allows for functionality of the core to be used with correct database sessions, authentication parameters.\nIt is an intermediate layer between the core and the Rest API - the Rest API utilizes the gateway to make calls to core."}),"\n",(0,i.jsx)(t.p,{children:"All public core methods should have a corresponding gateway method to handle sessions and authentication."}),"\n",(0,i.jsx)(t.h2,{id:"web",children:"Web"}),"\n",(0,i.jsxs)(t.p,{children:["Web contains the flask-based Rest API for the client to contact the server.\n(Found at ",(0,i.jsx)(t.code,{children:"/lib/rucio/web/rest/flaskapi/v1"}),").\nIt also contains the routing for a Web UI front end.\nWhen adding new functionality, or modifying the arguments of an existing function, it is imperative to update the Rest API."]}),"\n",(0,i.jsx)(t.h2,{id:"other",children:"Other"}),"\n",(0,i.jsx)(t.h3,{id:"db",children:"DB"}),"\n",(0,i.jsx)(t.p,{children:"As the name implies, DB contains database schema and connection utilities.\nIt is included in server releases of rucio.\nChanges in the database dramatically impact all other parts of the code, such as core's database queries.\nA migration instruction script must be included with DB changes to ensure data is not lost during upgrade or downgrades."}),"\n",(0,i.jsx)(t.h3,{id:"rse",children:"RSE"}),"\n",(0,i.jsx)(t.p,{children:"RSE provides different protocols to access RSEs (ex: ssh, srm.)\nIt is included client distributions, and all RSE protocols must be able to run without direct access to core."}),"\n",(0,i.jsx)(t.h3,{id:"tests",children:"Tests"}),"\n",(0,i.jsx)(t.p,{children:"Tests contains utilities for testing."}),"\n",(0,i.jsx)(t.h3,{id:"transfertool",children:"Transfertool"}),"\n",(0,i.jsx)(t.p,{children:"Similar to RSE, transfertool contains protocols for executing file transfers.\nIt can include calls to core, as transfer protocols sit server side."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},17066:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/code_structure-0ffa3c51952bfcec2e40267dc1343fb7.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var o=n(96540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);