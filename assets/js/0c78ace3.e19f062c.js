"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4885],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return t?o.createElement(g,a(a({ref:n},p),{},{components:t})):o.createElement(g,a({ref:n},p))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<r;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=t(58168),i=t(98587),r=(t(96540),t(15680)),a=["components"],l={id:"webui_frontend_vscode_dev_env",title:"Setting up a WebUI Developer Environment using Visual Studio Code"},s=void 0,d={unversionedId:"developer/webui/webui_frontend_vscode_dev_env",id:"developer/webui/webui_frontend_vscode_dev_env",title:"Setting up a WebUI Developer Environment using Visual Studio Code",description:"Different Usecases",source:"@site/../docs/developer/webui/webui_frontend_vscode_dev_env.md",sourceDirName:"developer/webui",slug:"/developer/webui/webui_frontend_vscode_dev_env",permalink:"/documentation/developer/webui/webui_frontend_vscode_dev_env",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/webui/webui_frontend_vscode_dev_env.md",tags:[],version:"current",lastUpdatedBy:"Thomas Beermann",lastUpdatedAt:1713513694,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{id:"webui_frontend_vscode_dev_env",title:"Setting up a WebUI Developer Environment using Visual Studio Code"},sidebar:"docs",previous:{title:"Style Guide",permalink:"/documentation/developer/dev_style_guide"},next:{title:"Using the WebUI StreamedTable Component",permalink:"/documentation/developer/webui/streamedtables"}},p={},c=[{value:"Different Usecases",id:"different-usecases",level:2},{value:"UI Only",id:"ui-only",level:2},{value:"Connecting to a Rucio instance",id:"connecting-to-a-rucio-instance",level:2}],u={toc:c},m="wrapper";function g(e){var n=e.components,t=(0,i.A)(e,a);return(0,r.yg)(m,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"different-usecases"},"Different Usecases"),(0,r.yg)("p",null,"There are different usecases when developing for the WebUI, this leads to\nvarying requirements for the development environment. This guide will cover two\nusecases:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"UI development only (i.e. using Storybook)."),(0,r.yg)("li",{parentName:"ol"},"Full WebUI development, requiring the connection to a Rucio server.")),(0,r.yg)("p",null,'In both cases, the proposed development environment is run fully local. Visual\nStudio Code is more than just an editor, and we attempt to make use of its "Dev\nContainer"-tooling as much as possible.'),(0,r.yg)("h2",{id:"ui-only"},"UI Only"),(0,r.yg)("p",null,"Remember that the WebUI frontend is composed of ",(0,r.yg)("em",{parentName:"p"},"Components"),", which are\ndeveloped with the help of a tool called ",(0,r.yg)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook"),'.\nStorybook is, in its own words, a "frontend workshop for building UI components\nand pages in isolation". To us, it is a viewer which allows us to inspect\nindividual components and interactively manipulate the inputs to these\ncomponents. An example would be viewing a clickable button and manipulating the\n"disabled" attribute, noticing that the colour changes from blue to gray, etc.\nStorybook is also very helpful when testing accessibility and design.'),(0,r.yg)("p",null,"For a developer whose only intent is to add to or edit these components (found\nunder ",(0,r.yg)("inlineCode",{parentName:"p"},"webui/src/component-library"),"), it is helpful to run a docker container\nwith NPM and TypeScript."),(0,r.yg)("p",null,"Open the editor commands with ",(0,r.yg)("inlineCode",{parentName:"p"},"Ctrl"),"-",(0,r.yg)("inlineCode",{parentName:"p"},"Shift"),"-",(0,r.yg)("inlineCode",{parentName:"p"},"P")," and run ",(0,r.yg)("inlineCode",{parentName:"p"},"Dev containers: reopen\nin dev container"),". Select ",(0,r.yg)("inlineCode",{parentName:"p"},"Node.js & Typescript")," in the follow-up menu. Go with\nthe default values in the following menus."),(0,r.yg)("p",null,"You can close the remote connection via the editor commands. From now on, you\ncan reopen the same dev container by opening the folder locally and selecting\n",(0,r.yg)("inlineCode",{parentName:"p"},"reopen in dev container")," from the editor commands. You can also directly open\nthe folder in the dev container, for example using ",(0,r.yg)("inlineCode",{parentName:"p"},"File")," > ",(0,r.yg)("inlineCode",{parentName:"p"},"Open Recent")," and\nthen selecting an element such as ",(0,r.yg)("inlineCode",{parentName:"p"},"~/foo/bar [Dev Container]"),"."),(0,r.yg)("p",null,"It makes sense to install some extensions for a better dev experience:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Tailwind CSS Intellisense"),(0,r.yg)("li",{parentName:"ul"},"ESLint"),(0,r.yg)("li",{parentName:"ul"},"Jest")),(0,r.yg)("p",null,"These extensions are specific to the project at hand. Of course, extensions such\nas Github Copilot and GitLens are still helpful."),(0,r.yg)("p",null,"An further extension that is extremely important is ",(0,r.yg)("em",{parentName:"p"},"Run on Save")," by\nemeraldwalk. This will need to be configured: enter the settings with ",(0,r.yg)("inlineCode",{parentName:"p"},"Ctrl"),"-",(0,r.yg)("inlineCode",{parentName:"p"},","),"\nand search ",(0,r.yg)("inlineCode",{parentName:"p"},"Emeraldwalk: Runonsave"),". Click on ",(0,r.yg)("inlineCode",{parentName:"p"},"Edit in settings.json"),". Add the\nfollowing configuration:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'"emeraldwalk.runonsave": {\n    "commands": [\n        {\n            "match": "\\\\.tsx$",\n            "cmd": "npm run build-tailwind"\n        }\n    ]\n}\n')),(0,r.yg)("p",null,"to ensure that the ",(0,r.yg)("inlineCode",{parentName:"p"},"build-tailwind")," command will be run each time you save a\n",(0,r.yg)("inlineCode",{parentName:"p"},"*.tsx")," file."),(0,r.yg)("p",null,"You can now run Storybook using ",(0,r.yg)("inlineCode",{parentName:"p"},"npm run storybook"),"."),(0,r.yg)("h2",{id:"connecting-to-a-rucio-instance"},"Connecting to a Rucio instance"),(0,r.yg)("p",null,"When testing the full WebUI stack, it will be necessary to connect to a Rucio\nbackend. This can be done by running a Rucio instance locally."),(0,r.yg)("p",null,"We begin by starting all the Docker containers required."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Start the dev container as described above."),(0,r.yg)("li",{parentName:"ol"},"Clone Rucio from the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio"},"Github Repository")),(0,r.yg)("li",{parentName:"ol"},"Open the folder in VS Code."),(0,r.yg)("li",{parentName:"ol"},"Open the editor commands and run ",(0,r.yg)("inlineCode",{parentName:"li"},"Docker Compose Up")," and select\n",(0,r.yg)("inlineCode",{parentName:"li"},"docker-compose-storage.yml"),".")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Starting the docker containers using ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose-storage.yml")," will also\ncreate several RSEs, DIDs, etc. on the rucio instance which are quite helpful\nwhen running tests.")),(0,r.yg)("p",null,"We must now connect the dev container to the rucio container network."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Figure out the docker name of the dev container. Run ",(0,r.yg)("inlineCode",{parentName:"li"},"docker ps")," and search\nfor name which does not contain the string ",(0,r.yg)("inlineCode",{parentName:"li"},"rucio")),(0,r.yg)("li",{parentName:"ol"},"Connect using ",(0,r.yg)("inlineCode",{parentName:"li"},"docker network connect dev_default <container name>"),".\n",(0,r.yg)("inlineCode",{parentName:"li"},"dev_default")," is the name of the network shared by the docker containers spun\nup using ",(0,r.yg)("inlineCode",{parentName:"li"},"docker-compose-storage.yml")," from earlier.")),(0,r.yg)("p",null,"Finally, we must change the ",(0,r.yg)("inlineCode",{parentName:"p"},"RUCIO_AUTH_HOST")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"RUCIO_HOST")," in the\n",(0,r.yg)("inlineCode",{parentName:"p"},".env.development.local")," file at the root level of the WebUI repository to point\nto the rucio container. By default, this should be ",(0,r.yg)("inlineCode",{parentName:"p"},"https://dev-rucio-1:443"),"."),(0,r.yg)("p",null,"Test the setup by logging in using the credentials username ",(0,r.yg)("inlineCode",{parentName:"p"},"ddmlab"),"/ password\n",(0,r.yg)("inlineCode",{parentName:"p"},"secret"),"/ account ",(0,r.yg)("inlineCode",{parentName:"p"},"root")," under the VO ",(0,r.yg)("inlineCode",{parentName:"p"},"Default"),"."))}g.isMDXComponent=!0}}]);