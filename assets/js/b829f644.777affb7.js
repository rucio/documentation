"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15706],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(96540);const o={},c=i.createContext(o);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(c.Provider,{value:n},e.children)}},42565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"developer/setting_up_mac_apple_silicon","title":"Setting up a Rucio Developer environment on Mac with Apple Silicon","description":"Setting up a Rucio Developer environment on Mac with Apple Silicon","source":"@site/../docs/developer/setting_up_mac_apple_silicon.md","sourceDirName":"developer","slug":"/developer/setting_up_mac_apple_silicon","permalink":"/documentation/developer/setting_up_mac_apple_silicon","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/setting_up_mac_apple_silicon.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1743711841000,"frontMatter":{"id":"setting_up_mac_apple_silicon","title":"Setting up a Rucio Developer environment on Mac with Apple Silicon"},"sidebar":"docs","previous":{"title":"rucio","permalink":"/documentation/bin/rucio"},"next":{"title":"Setting up a Rucio Developer environment using IntelliJ Ultimate","permalink":"/documentation/developer/setting_up_intellij_dev_env"}}');var o=t(74848),c=t(28453);const l={id:"setting_up_mac_apple_silicon",title:"Setting up a Rucio Developer environment on Mac with Apple Silicon"},r=void 0,s={},a=[{value:"Setting up a Rucio Developer environment on Mac with Apple Silicon",id:"setting-up-a-rucio-developer-environment-on-mac-with-apple-silicon",level:2},{value:"Docker environment",id:"docker-environment",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"setting-up-a-rucio-developer-environment-on-mac-with-apple-silicon",children:"Setting up a Rucio Developer environment on Mac with Apple Silicon"}),"\n",(0,o.jsxs)(n.p,{children:["Currently Rucio packages and containers are only available for the ",(0,o.jsx)(n.code,{children:"x86_64"})," architecture."]}),"\n",(0,o.jsxs)(n.p,{children:["A Mac equipped with Apple Silicon can execute code compiled for the ",(0,o.jsx)(n.code,{children:"x86_64"})," instruction set via a translation mechanism known as ",(0,o.jsx)(n.a,{href:"https://support.apple.com/en-gb/guide/security/secebb113be1/web",children:"Rosetta 2"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"To install Rosetta 2 run:"}),"\n",(0,o.jsx)(n.p,{children:"/usr/sbin/softwareupdate --install-rosetta"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This will initiate the Rosetta installer, and you will need to consent to a license agreement."}),"\n",(0,o.jsxs)(n.p,{children:["Make sure that ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/desktop/install/mac-install/",children:"Docker Desktop"})," is installed and updated."]}),"\n",(0,o.jsx)(n.h2,{id:"docker-environment",children:"Docker environment"}),"\n",(0,o.jsxs)(n.p,{children:["In order to force Docker to run commands with platform ",(0,o.jsx)(n.code,{children:"linux/amd64"})," instead of ",(0,o.jsx)(n.code,{children:"linux/arm64"})," by default on macOS Apple Silicon, you have two options:"]}),"\n",(0,o.jsxs)(n.p,{children:["Set Docker default platform to ",(0,o.jsx)(n.code,{children:"linux/amd64"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"    export DOCKER_DEFAULT_PLATFORM=linux/amd64\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or run it as part of the command a single time:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"    DOCKER_DEFAULT_PLATFORM=linux/amd64 docker-compose -f <docker-compose-file.yml>\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}}}]);