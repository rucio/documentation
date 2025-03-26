"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[652],{28453:(e,n,d)=>{d.d(n,{R:()=>c,x:()=>t});var i=d(96540);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}},73489:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"developer/dependency_management","title":"Dependency management","description":"Requirements file structure","source":"@site/../docs/developer/dependency_management.md","sourceDirName":"developer","slug":"/developer/dependency_management","permalink":"/documentation/developer/dependency_management","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/dependency_management.md","tags":[],"version":"current","lastUpdatedBy":"Martin Barisits","lastUpdatedAt":1743004349000,"frontMatter":{"title":"Dependency management"},"sidebar":"docs","previous":{"title":"Contributing Guide","permalink":"/documentation/contributing"},"next":{"title":"Project Structure","permalink":"/documentation/developer/project_structure"}}');var r=d(74848),s=d(28453);const c={title:"Dependency management"},t=void 0,o={},l=[{value:"Requirements file structure",id:"requirements-file-structure",level:2},{value:"<code>.in</code> and <code>.txt</code> files",id:"in-and-txt-files",level:3},{value:"Updating dependencies",id:"updating-dependencies",level:2},{value:"<code>pip-compile</code> and compiling dependencies",id:"pip-compile-and-compiling-dependencies",level:3},{value:"I want to add/remove/upgrade a <code>server</code> dependency. What should I do?",id:"i-want-to-addremoveupgrade-a-server-dependency-what-should-i-do",level:3},{value:"I want to add/remove/upgrade a <code>dev</code> dependency. What should I do?",id:"i-want-to-addremoveupgrade-a-dev-dependency-what-should-i-do",level:3},{value:"I want to add/remove/upgrade a <code>client</code> dependency. What should I do?",id:"i-want-to-addremoveupgrade-a-client-dependency-what-should-i-do",level:3},{value:"Major dependency upgrades",id:"major-dependency-upgrades",level:2},{value:"Security updates",id:"security-updates",level:2},{value:"Why are <code>client</code> dependencies not pinned?",id:"why-are-client-dependencies-not-pinned",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"requirements-file-structure",children:"Requirements file structure"}),"\n",(0,r.jsxs)(n.p,{children:["The dependencies needed by Rucio are described in the ",(0,r.jsx)(n.a,{href:"https://github.com/rucio/rucio/tree/master/requirements",children:(0,r.jsx)(n.code,{children:"rucio/requirements/"})})," directory."]}),"\n",(0,r.jsx)(n.p,{children:"The requirements in this directory are divided based on the application:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"requirements.server*"}),": Dependencies needed to run the Rucio server and daemons"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"requirements.client*"}),": Dependencies needed to run the Rucio client"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"requirements.dev*"}),": Dependencies needed for testing and development"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"in-and-txt-files",children:[(0,r.jsx)(n.code,{children:".in"})," and ",(0,r.jsx)(n.code,{children:".txt"})," files"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".in"})," files represent input files to ",(0,r.jsx)(n.code,{children:"pip-compile"}),". These list the ",(0,r.jsx)(n.strong,{children:"primary"})," dependencies.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"client"}),", the ",(0,r.jsx)(n.code,{children:".in"})," file is not necessary, as we do not pin ",(0,r.jsx)(n.code,{children:"client"})," dependencies."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:".txt"})," files represent the actual requirements files used at installation time.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"server"})," and ",(0,r.jsx)(n.code,{children:"dev"}),", the ",(0,r.jsx)(n.code,{children:".txt"})," file is generated by ",(0,r.jsx)(n.code,{children:"pip-compile"}),",\npinning both ",(0,r.jsx)(n.strong,{children:"primary"})," and ",(0,r.jsx)(n.strong,{children:"secondary"})," dependencies."]}),"\n",(0,r.jsxs)(n.li,{children:["For ",(0,r.jsx)(n.code,{children:"client"}),", the ",(0,r.jsx)(n.code,{children:".txt"})," file is compiled manually,\nand only describes the ",(0,r.jsx)(n.strong,{children:"primary"})," dependencies."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"updating-dependencies",children:"Updating dependencies"}),"\n",(0,r.jsxs)(n.h3,{id:"pip-compile-and-compiling-dependencies",children:[(0,r.jsx)(n.code,{children:"pip-compile"})," and compiling dependencies"]}),"\n",(0,r.jsxs)(n.p,{children:["We use ",(0,r.jsx)(n.code,{children:"pip-compile"})," from ",(0,r.jsx)(n.a,{href:"https://github.com/jazzband/pip-tools",children:(0,r.jsx)(n.code,{children:"pip-tools"})})," for ",(0,r.jsx)(n.code,{children:"server"})," and ",(0,r.jsx)(n.code,{children:"dev"}),"\nin order to ensure we pin secondary dependencies to specific versions,\nto improve the stability of Rucio server, testing and development.\nSee ",(0,r.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6694",children:"this issue"})," for an example\nof a CI issue that was caused by an unpinned secondary dependency."]}),"\n",(0,r.jsxs)(n.h3,{id:"i-want-to-addremoveupgrade-a-server-dependency-what-should-i-do",children:["I want to add/remove/upgrade a ",(0,r.jsx)(n.code,{children:"server"})," dependency. What should I do?"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Make your changes in the ",(0,r.jsx)(n.code,{children:"requirements.server.in"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"pip-compile requirements.server.in"})]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"pip-compile requirements.dev.in"})]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["(",(0,r.jsx)(n.code,{children:"dev"})," dependencies include dependencies from ",(0,r.jsx)(n.code,{children:"requirements.server.txt"}),",\nso make sure to do these steps in order)"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"i-want-to-addremoveupgrade-a-dev-dependency-what-should-i-do",children:["I want to add/remove/upgrade a ",(0,r.jsx)(n.code,{children:"dev"})," dependency. What should I do?"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Make your changes in the ",(0,r.jsx)(n.code,{children:"requirements.dev.in"})," file"]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"pip-compile requirements.dev.in"})]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"i-want-to-addremoveupgrade-a-client-dependency-what-should-i-do",children:["I want to add/remove/upgrade a ",(0,r.jsx)(n.code,{children:"client"})," dependency. What should I do?"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Make your changes in the ",(0,r.jsx)(n.code,{children:"requirements.client.txt"})," file"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"major-dependency-upgrades",children:"Major dependency upgrades"}),"\n",(0,r.jsx)(n.p,{children:"Dependencies are generally upgraded to the latest possible version on every Rucio major release.\nThis work is performed approximately a month prior to the major release,\nin order to address possible breaking changes and monitor test outcomes and runtime behaviour for errors."}),"\n",(0,r.jsxs)(n.p,{children:["For secondary dependencies, ",(0,r.jsx)(n.code,{children:"pip-compile --upgrade"})," is used. This flag attempts to upgrade\nall secondary dependencies to their latest versions."]}),"\n",(0,r.jsx)(n.p,{children:"To perform this major dependency upgrade:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Manually update all primary dependencies (where possible; be mindful of breaking changes) in:","\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"requirements.server.in"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"requirements.dev.in"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"requirements.client.txt"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"pip-compile --upgrade requirements.server.in"})]}),"\n",(0,r.jsxs)(n.li,{children:["Run ",(0,r.jsx)(n.code,{children:"pip-compile --upgrade requirements.dev.in"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"security-updates",children:"Security updates"}),"\n",(0,r.jsxs)(n.p,{children:["For critical security updates, we rely on ",(0,r.jsx)(n.a,{href:"https://github.com/dependabot",children:"Dependabot"}),"\nto create alerts for dependencies listed in our requirements."]}),"\n",(0,r.jsxs)(n.p,{children:["Dependabot supports ",(0,r.jsx)(n.code,{children:"pip-compile"}),", and is able to automatically create PRs\nto upgrade both primary and secondary dependencies.\nWhen a primary dependency is upgraded in a ",(0,r.jsx)(n.code,{children:".in"})," file, Dependabot re-compiles\nthat file into the ",(0,r.jsx)(n.code,{children:".txt"})," file as well."]}),"\n",(0,r.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,r.jsxs)(n.h2,{id:"why-are-client-dependencies-not-pinned",children:["Why are ",(0,r.jsx)(n.code,{children:"client"})," dependencies not pinned?"]}),"\n",(0,r.jsxs)(n.p,{children:["In certain use cases, the Rucio client is used as a library in other applications\n(See ",(0,r.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/6663",children:"this issue"})," for an example).\nBecause of this, ",(0,r.jsx)(n.code,{children:"client"})," dependencies are left unpinned unless necessary."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);