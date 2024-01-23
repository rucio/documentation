"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7857],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},s),{},{components:n})):i.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate"},d=void 0,p={unversionedId:"developer/setting_up_intellij_dev_env",id:"developer/setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate",description:"This tutorial works on Linux, but it was confirmed, in the past, to not",source:"@site/../docs/developer/setting_up_intellij_dev_env.md",sourceDirName:"developer",slug:"/developer/setting_up_intellij_dev_env",permalink:"/documentation/developer/setting_up_intellij_dev_env",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/setting_up_intellij_dev_env.md",tags:[],version:"current",lastUpdatedBy:"Victor Azizi",lastUpdatedAt:1706000596,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{id:"setting_up_intellij_dev_env",title:"Setting up a Rucio Developer environment using IntelliJ Ultimate"},sidebar:"docs",previous:{title:"rucio",permalink:"/documentation/bin/rucio"},next:{title:"Setting up a Rucio Developer environment using Visual Studio Code",permalink:"/documentation/developer/setting_up_vscode_dev_env"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Open the rucio project in IntelliJ",id:"open-the-rucio-project-in-intellij",level:2},{value:"Add docker-compose remote interpreters",id:"add-docker-compose-remote-interpreters",level:2},{value:"Mark the <code>bin</code> and <code>lib</code> folders as Source folders",id:"mark-the-bin-and-lib-folders-as-source-folders",level:2},{value:"Start and initialize the docker-compose env",id:"start-and-initialize-the-docker-compose-env",level:2},{value:"Debugging a daemon or core function",id:"debugging-a-daemon-or-core-function",level:2},{value:"Debugging the server",id:"debugging-the-server",level:2}],c={toc:u},m="wrapper";function h(e){var t=e.components,l=(0,r.Z)(e,a);return(0,o.kt)(m,(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial works on Linux, but it was confirmed, in the past, to ",(0,o.kt)("strong",{parentName:"p"},"not"),"\nwork on Windows. Windows support could have improved in later IntelliJ\nversions. If you manage to make it work, please tell us and update the\ndocumentation."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An IntelliJ Ultimate licence is required. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Free")," versions doesn't have the\nneeded features. Some people may qualify for a free licence.\nRefer to their website for more information.\nI assume it's easy to adapt the following tutorial for ",(0,o.kt)("inlineCode",{parentName:"p"},"PyCharm Professional"),",\nbut I don't have a licence to test it.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If not already done, install the official ",(0,o.kt)("inlineCode",{parentName:"p"},"Python")," plugin by following their\n",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/plugin-overview.html#e6e8b3a2"},"official documentation"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Your local user running IntelliJ must be able to run docker commands\nwithout the need for becoming ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," with sudo/su. Running the following\ncommand and re-logining should be enough:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  sudo gpasswd -a $USER docker\n")))),(0,o.kt)("h2",{id:"open-the-rucio-project-in-intellij"},"Open the rucio project in IntelliJ"),(0,o.kt)("p",null,"Open the existing rucio project in intellij. This should be trivial. However,\nif you need help with it, refer to the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/import-project-or-module-wizard.html"},"official documentation")),(0,o.kt)("h2",{id:"add-docker-compose-remote-interpreters"},"Add docker-compose remote interpreters"),(0,o.kt)("p",null,"Once the ",(0,o.kt)("inlineCode",{parentName:"p"},"rucio")," project opened in IntelliJ, navigate to\n",(0,o.kt)("inlineCode",{parentName:"p"},"File/Project Structure")," and add a new python SDK as shown in the following\npicture:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add new Python SDK",src:n(76711).Z,width:"1025",height:"863"})),(0,o.kt)("p",null,"In the new window, as shown on the next picture:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"select ",(0,o.kt)("inlineCode",{parentName:"li"},"Docker Compose")," in the left menu."),(0,o.kt)("li",{parentName:"ul"},"in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Configuration Files")," field, navigate to the\n",(0,o.kt)("inlineCode",{parentName:"li"},"./etc/docker/dev/docker-compose.yaml")," within the project"),(0,o.kt)("li",{parentName:"ul"},"in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Service")," field select ",(0,o.kt)("inlineCode",{parentName:"li"},"rucio"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Remote interpreter for rucio service",src:n(46317).Z,width:"1053",height:"569"})),(0,o.kt)("p",null,"Repeat the operation, but select ",(0,o.kt)("inlineCode",{parentName:"p"},"rucioclient")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Service")," field."),(0,o.kt)("p",null,"Now you should have two remote interpreters configured. IntelliJ will start\nindexing the projects (see progress bar in the bottom right corner). Wait\nfor indexing to finish."),(0,o.kt)("p",null,"It's important for the default interpreter to be the one with\nService = ",(0,o.kt)("inlineCode",{parentName:"p"},"rucioclient"),". This should be the case if you added them in the order\nmentioned previously."),(0,o.kt)("h2",{id:"mark-the-bin-and-lib-folders-as-source-folders"},"Mark the ",(0,o.kt)("inlineCode",{parentName:"h2"},"bin")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"lib")," folders as Source folders"),(0,o.kt)("p",null,"Open ",(0,o.kt)("inlineCode",{parentName:"p"},"File/Project Structure")," again and navigate to ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Settings/Modules"),"\nin the left menu. Mark the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," folders as ",(0,o.kt)("inlineCode",{parentName:"p"},"Source")," folders. For\nthat, right click on them and select the folder type. As shown in the following\nscreenshot:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Source folders",src:n(82135).Z,width:"1019",height:"861"})),(0,o.kt)("h2",{id:"start-and-initialize-the-docker-compose-env"},"Start and initialize the docker-compose env"),(0,o.kt)("p",null,"Follow our ",(0,o.kt)("a",{parentName:"p",href:"/operator/setting_up_demo/#using-the-environment-including-storage"},"documentation"),"\nto manually start the docker-compose environment and initialize the database\nand storage."),(0,o.kt)("h2",{id:"debugging-a-daemon-or-core-function"},"Debugging a daemon or core function"),(0,o.kt)("p",null,"With the docker-compose env up in running, navigate to a test file. For example,\nopen the file ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/tests/test_config.py")," and refer to the following video for\nan example how to debug a test:"),(0,o.kt)("video",{width:"100%",controls:!0},(0,o.kt)("source",{src:"/documentation/img/intellij/debugging.mp4"})),(0,o.kt)("h2",{id:"debugging-the-server"},"Debugging the server"),(0,o.kt)("p",null,"The procedure configured until now works very well for developing and testing\ndaemons and core code. However, it doesn't allow to debug the server code.\nFor that, one has to run the server separately."),(0,o.kt)("p",null,"Add a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Flask server")," run configuration in the menu ",(0,o.kt)("inlineCode",{parentName:"p"},"Run/Edit Configurations")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Target type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Module name")),(0,o.kt)("li",{parentName:"ul"},"Target: ",(0,o.kt)("inlineCode",{parentName:"li"},"rucio.web.rest.flaskapi.v1.main")),(0,o.kt)("li",{parentName:"ul"},"Additional options:\n",(0,o.kt)("inlineCode",{parentName:"li"},"--cert=/etc/grid-security/hostcert.pem --key=/etc/grid-security/hostkey.pem --host=0.0.0.0 --port=443")),(0,o.kt)("li",{parentName:"ul"},"Environment variables: ",(0,o.kt)("inlineCode",{parentName:"li"},"LC_ALL=en_US.utf-8")),(0,o.kt)("li",{parentName:"ul"},"Use specified interpreter: select the ",(0,o.kt)("inlineCode",{parentName:"li"},"rucio")," docker-compose remote\ninterpreter.")),(0,o.kt)("p",null,"This will allow to debug the code on server side."))}h.isMDXComponent=!0},76711:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add_python_sdk-9284ea24ec30968f78eed64aa65bfb69.png"},46317:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/rucio_docker_compose-4f9064b7c7a1132b6087958c0fcb94ae.png"},82135:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/source_folders-113f37c31a4dd51f37f5ab57280323ef.png"}}]);