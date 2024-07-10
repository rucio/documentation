"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8775],{84010:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=i(74848),o=i(28453);const r={id:"setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate"},s=void 0,d={id:"developer/setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate",description:"This tutorial works on Linux, but it was confirmed, in the past, to not",source:"@site/../docs/developer/setting_up_intellij_dev_env.md",sourceDirName:"developer",slug:"/developer/setting_up_intellij_dev_env",permalink:"/documentation/developer/setting_up_intellij_dev_env",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/setting_up_intellij_dev_env.md",tags:[],version:"current",lastUpdatedBy:"rdimaio",lastUpdatedAt:172060357e4,frontMatter:{id:"setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate"},sidebar:"docs",previous:{title:"Setting up a Rucio Developer environment on Mac with Apple Silicon",permalink:"/documentation/developer/setting_up_mac_apple_silicon"},next:{title:"Setting up a Rucio Developer environment using Visual Studio Code",permalink:"/documentation/developer/setting_up_vscode_dev_env"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open the rucio project in IntelliJ",id:"open-the-rucio-project-in-intellij",level:2},{value:"Add docker-compose remote interpreters",id:"add-docker-compose-remote-interpreters",level:2},{value:"Mark the <code>bin</code> and <code>lib</code> folders as Source folders",id:"mark-the-bin-and-lib-folders-as-source-folders",level:2},{value:"Start and initialize the docker-compose env",id:"start-and-initialize-the-docker-compose-env",level:2},{value:"Debugging a daemon or core function",id:"debugging-a-daemon-or-core-function",level:2},{value:"Debugging the server",id:"debugging-the-server",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This tutorial works on Linux, but it was confirmed, in the past, to ",(0,t.jsx)(n.strong,{children:"not"}),"\nwork on Windows. Windows support could have improved in later IntelliJ\nversions. If you manage to make it work, please tell us and update the\ndocumentation."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An IntelliJ Ultimate licence is required. The ",(0,t.jsx)(n.code,{children:"Free"})," versions doesn't have the\nneeded features. Some people may qualify for a free licence.\nRefer to their website for more information.\nI assume it's easy to adapt the following tutorial for ",(0,t.jsx)(n.code,{children:"PyCharm Professional"}),",\nbut I don't have a licence to test it."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["If not already done, install the official ",(0,t.jsx)(n.code,{children:"Python"})," plugin by following their\n",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/plugin-overview.html#e6e8b3a2",children:"official documentation"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Your local user running IntelliJ must be able to run docker commands\nwithout the need for becoming ",(0,t.jsx)(n.code,{children:"root"})," with sudo/su. Running the following\ncommand and re-logining should be enough:"]}),"\n",(0,t.jsx)(n.p,{children:"sudo gpasswd -a $USER docker"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"open-the-rucio-project-in-intellij",children:"Open the rucio project in IntelliJ"}),"\n",(0,t.jsxs)(n.p,{children:["Open the existing rucio project in intellij. This should be trivial. However,\nif you need help with it, refer to the\n",(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/help/idea/import-project-or-module-wizard.html",children:"official documentation"})]}),"\n",(0,t.jsx)(n.h2,{id:"add-docker-compose-remote-interpreters",children:"Add docker-compose remote interpreters"}),"\n",(0,t.jsxs)(n.p,{children:["Once the ",(0,t.jsx)(n.code,{children:"rucio"})," project opened in IntelliJ, navigate to\n",(0,t.jsx)(n.code,{children:"File/Project Structure"})," and add a new python SDK as shown in the following\npicture:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add new Python SDK",src:i(90528).A+"",width:"1025",height:"863"})}),"\n",(0,t.jsx)(n.p,{children:"In the new window, as shown on the next picture:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["select ",(0,t.jsx)(n.code,{children:"Docker Compose"})," in the left menu."]}),"\n",(0,t.jsxs)(n.li,{children:["in the ",(0,t.jsx)(n.code,{children:"Configuration Files"})," field, navigate to the\n",(0,t.jsx)(n.code,{children:"./etc/docker/dev/docker-compose.yaml"})," within the project"]}),"\n",(0,t.jsxs)(n.li,{children:["in the ",(0,t.jsx)(n.code,{children:"Service"})," field select ",(0,t.jsx)(n.code,{children:"rucio"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Remote interpreter for rucio service",src:i(75663).A+"",width:"1053",height:"569"})}),"\n",(0,t.jsxs)(n.p,{children:["Repeat the operation, but select ",(0,t.jsx)(n.code,{children:"rucioclient"})," in the ",(0,t.jsx)(n.code,{children:"Service"})," field."]}),"\n",(0,t.jsx)(n.p,{children:"Now you should have two remote interpreters configured. IntelliJ will start\nindexing the projects (see progress bar in the bottom right corner). Wait\nfor indexing to finish."}),"\n",(0,t.jsxs)(n.p,{children:["It's important for the default interpreter to be the one with\nService = ",(0,t.jsx)(n.code,{children:"rucioclient"}),". This should be the case if you added them in the order\nmentioned previously."]}),"\n",(0,t.jsxs)(n.h2,{id:"mark-the-bin-and-lib-folders-as-source-folders",children:["Mark the ",(0,t.jsx)(n.code,{children:"bin"})," and ",(0,t.jsx)(n.code,{children:"lib"})," folders as Source folders"]}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"File/Project Structure"})," again and navigate to ",(0,t.jsx)(n.code,{children:"Project Settings/Modules"}),"\nin the left menu. Mark the ",(0,t.jsx)(n.code,{children:"bin"})," and ",(0,t.jsx)(n.code,{children:"lib"})," folders as ",(0,t.jsx)(n.code,{children:"Source"})," folders. For\nthat, right click on them and select the folder type. As shown in the following\nscreenshot:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Source folders",src:i(72882).A+"",width:"1019",height:"861"})}),"\n",(0,t.jsx)(n.h2,{id:"start-and-initialize-the-docker-compose-env",children:"Start and initialize the docker-compose env"}),"\n",(0,t.jsxs)(n.p,{children:["Follow our ",(0,t.jsx)(n.a,{href:"/operator/setting_up_demo/#using-the-environment-including-storage",children:"documentation"}),"\nto manually start the docker-compose environment and initialize the database\nand storage."]}),"\n",(0,t.jsx)(n.h2,{id:"debugging-a-daemon-or-core-function",children:"Debugging a daemon or core function"}),"\n",(0,t.jsxs)(n.p,{children:["With the docker-compose env up in running, navigate to a test file. For example,\nopen the file ",(0,t.jsx)(n.code,{children:"lib/tests/test_config.py"})," and refer to the following video for\nan example how to debug a test:"]}),"\n",(0,t.jsx)("video",{width:"100%",controls:!0,children:(0,t.jsx)("source",{src:"/documentation/img/intellij/debugging.mp4"})}),"\n",(0,t.jsx)(n.h2,{id:"debugging-the-server",children:"Debugging the server"}),"\n",(0,t.jsx)(n.p,{children:"The procedure configured until now works very well for developing and testing\ndaemons and core code. However, it doesn't allow to debug the server code.\nFor that, one has to run the server separately."}),"\n",(0,t.jsxs)(n.p,{children:["Add a new ",(0,t.jsx)(n.code,{children:"Flask server"})," run configuration in the menu ",(0,t.jsx)(n.code,{children:"Run/Edit Configurations"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Target type: ",(0,t.jsx)(n.code,{children:"Module name"})]}),"\n",(0,t.jsxs)(n.li,{children:["Target: ",(0,t.jsx)(n.code,{children:"rucio.web.rest.flaskapi.v1.main"})]}),"\n",(0,t.jsxs)(n.li,{children:["Additional options:\n",(0,t.jsx)(n.code,{children:"--cert=/etc/grid-security/hostcert.pem --key=/etc/grid-security/hostkey.pem --host=0.0.0.0 --port=443"})]}),"\n",(0,t.jsxs)(n.li,{children:["Environment variables: ",(0,t.jsx)(n.code,{children:"LC_ALL=en_US.utf-8"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use specified interpreter: select the ",(0,t.jsx)(n.code,{children:"rucio"})," docker-compose remote\ninterpreter."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This will allow to debug the code on server side."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},90528:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/add_python_sdk-9284ea24ec30968f78eed64aa65bfb69.png"},75663:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/rucio_docker_compose-4f9064b7c7a1132b6087958c0fcb94ae.png"},72882:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/source_folders-113f37c31a4dd51f37f5ab57280323ef.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var t=i(96540);const o={},r=t.createContext(o);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);