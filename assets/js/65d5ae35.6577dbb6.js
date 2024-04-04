"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8775],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>m});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),g=r,m=u["".concat(p,".").concat(g)]||u[g]||c[g]||o;return t?i.createElement(m,a(a({ref:n},s),{},{components:t})):i.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var i=t(58168),r=t(98587),o=(t(96540),t(15680)),a=["components"],l={id:"setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate"},p=void 0,d={unversionedId:"developer/setting_up_intellij_dev_env",id:"developer/setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate",description:"This tutorial works on Linux, but it was confirmed, in the past, to not",source:"@site/../docs/developer/setting_up_intellij_dev_env.md",sourceDirName:"developer",slug:"/developer/setting_up_intellij_dev_env",permalink:"/documentation/developer/setting_up_intellij_dev_env",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/setting_up_intellij_dev_env.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1712227670,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{id:"setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate"},sidebar:"docs",previous:{title:"Setting up a Rucio Developer environment on Mac with Apple Silicon",permalink:"/documentation/developer/setting_up_mac_apple_silicon"},next:{title:"Setting up a Rucio Developer environment using Visual Studio Code",permalink:"/documentation/developer/setting_up_vscode_dev_env"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open the rucio project in IntelliJ",id:"open-the-rucio-project-in-intellij",level:2},{value:"Add docker-compose remote interpreters",id:"add-docker-compose-remote-interpreters",level:2},{value:"Mark the <code>bin</code> and <code>lib</code> folders as Source folders",id:"mark-the-bin-and-lib-folders-as-source-folders",level:2},{value:"Start and initialize the docker-compose env",id:"start-and-initialize-the-docker-compose-env",level:2},{value:"Debugging a daemon or core function",id:"debugging-a-daemon-or-core-function",level:2},{value:"Debugging the server",id:"debugging-the-server",level:2}],c={toc:u},g="wrapper";function m(e){var n=e.components,l=(0,r.A)(e,a);return(0,o.yg)(g,(0,i.A)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"This tutorial works on Linux, but it was confirmed, in the past, to ",(0,o.yg)("strong",{parentName:"p"},"not"),"\nwork on Windows. Windows support could have improved in later IntelliJ\nversions. If you manage to make it work, please tell us and update the\ndocumentation."),(0,o.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"An IntelliJ Ultimate licence is required. The ",(0,o.yg)("inlineCode",{parentName:"p"},"Free")," versions doesn't have the\nneeded features. Some people may qualify for a free licence.\nRefer to their website for more information.\nI assume it's easy to adapt the following tutorial for ",(0,o.yg)("inlineCode",{parentName:"p"},"PyCharm Professional"),",\nbut I don't have a licence to test it.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If not already done, install the official ",(0,o.yg)("inlineCode",{parentName:"p"},"Python")," plugin by following their\n",(0,o.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/plugin-overview.html#e6e8b3a2"},"official documentation"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Your local user running IntelliJ must be able to run docker commands\nwithout the need for becoming ",(0,o.yg)("inlineCode",{parentName:"p"},"root")," with sudo/su. Running the following\ncommand and re-logining should be enough:"),(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"  sudo gpasswd -a $USER docker\n")))),(0,o.yg)("h2",{id:"open-the-rucio-project-in-intellij"},"Open the rucio project in IntelliJ"),(0,o.yg)("p",null,"Open the existing rucio project in intellij. This should be trivial. However,\nif you need help with it, refer to the\n",(0,o.yg)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/import-project-or-module-wizard.html"},"official documentation")),(0,o.yg)("h2",{id:"add-docker-compose-remote-interpreters"},"Add docker-compose remote interpreters"),(0,o.yg)("p",null,"Once the ",(0,o.yg)("inlineCode",{parentName:"p"},"rucio")," project opened in IntelliJ, navigate to\n",(0,o.yg)("inlineCode",{parentName:"p"},"File/Project Structure")," and add a new python SDK as shown in the following\npicture:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Add new Python SDK",src:t(90528).A,width:"1025",height:"863"})),(0,o.yg)("p",null,"In the new window, as shown on the next picture:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"select ",(0,o.yg)("inlineCode",{parentName:"li"},"Docker Compose")," in the left menu."),(0,o.yg)("li",{parentName:"ul"},"in the ",(0,o.yg)("inlineCode",{parentName:"li"},"Configuration Files")," field, navigate to the\n",(0,o.yg)("inlineCode",{parentName:"li"},"./etc/docker/dev/docker-compose.yaml")," within the project"),(0,o.yg)("li",{parentName:"ul"},"in the ",(0,o.yg)("inlineCode",{parentName:"li"},"Service")," field select ",(0,o.yg)("inlineCode",{parentName:"li"},"rucio"))),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Remote interpreter for rucio service",src:t(75663).A,width:"1053",height:"569"})),(0,o.yg)("p",null,"Repeat the operation, but select ",(0,o.yg)("inlineCode",{parentName:"p"},"rucioclient")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Service")," field."),(0,o.yg)("p",null,"Now you should have two remote interpreters configured. IntelliJ will start\nindexing the projects (see progress bar in the bottom right corner). Wait\nfor indexing to finish."),(0,o.yg)("p",null,"It's important for the default interpreter to be the one with\nService = ",(0,o.yg)("inlineCode",{parentName:"p"},"rucioclient"),". This should be the case if you added them in the order\nmentioned previously."),(0,o.yg)("h2",{id:"mark-the-bin-and-lib-folders-as-source-folders"},"Mark the ",(0,o.yg)("inlineCode",{parentName:"h2"},"bin")," and ",(0,o.yg)("inlineCode",{parentName:"h2"},"lib")," folders as Source folders"),(0,o.yg)("p",null,"Open ",(0,o.yg)("inlineCode",{parentName:"p"},"File/Project Structure")," again and navigate to ",(0,o.yg)("inlineCode",{parentName:"p"},"Project Settings/Modules"),"\nin the left menu. Mark the ",(0,o.yg)("inlineCode",{parentName:"p"},"bin")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"lib")," folders as ",(0,o.yg)("inlineCode",{parentName:"p"},"Source")," folders. For\nthat, right click on them and select the folder type. As shown in the following\nscreenshot:"),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"Source folders",src:t(72882).A,width:"1019",height:"861"})),(0,o.yg)("h2",{id:"start-and-initialize-the-docker-compose-env"},"Start and initialize the docker-compose env"),(0,o.yg)("p",null,"Follow our ",(0,o.yg)("a",{parentName:"p",href:"/operator/setting_up_demo/#using-the-environment-including-storage"},"documentation"),"\nto manually start the docker-compose environment and initialize the database\nand storage."),(0,o.yg)("h2",{id:"debugging-a-daemon-or-core-function"},"Debugging a daemon or core function"),(0,o.yg)("p",null,"With the docker-compose env up in running, navigate to a test file. For example,\nopen the file ",(0,o.yg)("inlineCode",{parentName:"p"},"lib/tests/test_config.py")," and refer to the following video for\nan example how to debug a test:"),(0,o.yg)("video",{width:"100%",controls:!0},(0,o.yg)("source",{src:"/documentation/img/intellij/debugging.mp4"})),(0,o.yg)("h2",{id:"debugging-the-server"},"Debugging the server"),(0,o.yg)("p",null,"The procedure configured until now works very well for developing and testing\ndaemons and core code. However, it doesn't allow to debug the server code.\nFor that, one has to run the server separately."),(0,o.yg)("p",null,"Add a new ",(0,o.yg)("inlineCode",{parentName:"p"},"Flask server")," run configuration in the menu ",(0,o.yg)("inlineCode",{parentName:"p"},"Run/Edit Configurations")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Target type: ",(0,o.yg)("inlineCode",{parentName:"li"},"Module name")),(0,o.yg)("li",{parentName:"ul"},"Target: ",(0,o.yg)("inlineCode",{parentName:"li"},"rucio.web.rest.flaskapi.v1.main")),(0,o.yg)("li",{parentName:"ul"},"Additional options:\n",(0,o.yg)("inlineCode",{parentName:"li"},"--cert=/etc/grid-security/hostcert.pem --key=/etc/grid-security/hostkey.pem --host=0.0.0.0 --port=443")),(0,o.yg)("li",{parentName:"ul"},"Environment variables: ",(0,o.yg)("inlineCode",{parentName:"li"},"LC_ALL=en_US.utf-8")),(0,o.yg)("li",{parentName:"ul"},"Use specified interpreter: select the ",(0,o.yg)("inlineCode",{parentName:"li"},"rucio")," docker-compose remote\ninterpreter.")),(0,o.yg)("p",null,"This will allow to debug the code on server side."))}m.isMDXComponent=!0},90528:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/add_python_sdk-9284ea24ec30968f78eed64aa65bfb69.png"},75663:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/rucio_docker_compose-4f9064b7c7a1132b6087958c0fcb94ae.png"},72882:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/source_folders-113f37c31a4dd51f37f5ab57280323ef.png"}}]);