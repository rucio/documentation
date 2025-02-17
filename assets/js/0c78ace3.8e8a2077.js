"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4885],{28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>c});var t=o(96540);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}},79662:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"developer/webui/webui_frontend_vscode_dev_env","title":"Setting up a WebUI Developer Environment using Visual Studio Code","description":"Different Usecases","source":"@site/../docs/developer/webui/webui_frontend_vscode_dev_env.md","sourceDirName":"developer/webui","slug":"/developer/webui/webui_frontend_vscode_dev_env","permalink":"/documentation/developer/webui/webui_frontend_vscode_dev_env","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/webui/webui_frontend_vscode_dev_env.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1739800590000,"frontMatter":{"id":"webui_frontend_vscode_dev_env","title":"Setting up a WebUI Developer Environment using Visual Studio Code"},"sidebar":"docs","previous":{"title":"Style Guide","permalink":"/documentation/developer/dev_style_guide"},"next":{"title":"Using the WebUI StreamedTable Component","permalink":"/documentation/developer/webui/streamedtables"}}');var i=o(74848),s=o(28453);const r={id:"webui_frontend_vscode_dev_env",title:"Setting up a WebUI Developer Environment using Visual Studio Code"},c=void 0,d={},l=[{value:"Different Usecases",id:"different-usecases",level:2},{value:"UI Only",id:"ui-only",level:2},{value:"Connecting to a Rucio instance",id:"connecting-to-a-rucio-instance",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"different-usecases",children:"Different Usecases"}),"\n",(0,i.jsx)(n.p,{children:"There are different usecases when developing for the WebUI, this leads to\nvarying requirements for the development environment. This guide will cover two\nusecases:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"UI development only (i.e. using Storybook)."}),"\n",(0,i.jsx)(n.li,{children:"Full WebUI development, requiring the connection to a Rucio server."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'In both cases, the proposed development environment is run fully local. Visual\nStudio Code is more than just an editor, and we attempt to make use of its "Dev\nContainer"-tooling as much as possible.'}),"\n",(0,i.jsx)(n.h2,{id:"ui-only",children:"UI Only"}),"\n",(0,i.jsxs)(n.p,{children:["Remember that the WebUI frontend is composed of ",(0,i.jsx)(n.em,{children:"Components"}),", which are\ndeveloped with the help of a tool called ",(0,i.jsx)(n.a,{href:"https://storybook.js.org/",children:"Storybook"}),'.\nStorybook is, in its own words, a "frontend workshop for building UI components\nand pages in isolation". To us, it is a viewer which allows us to inspect\nindividual components and interactively manipulate the inputs to these\ncomponents. An example would be viewing a clickable button and manipulating the\n"disabled" attribute, noticing that the colour changes from blue to gray, etc.\nStorybook is also very helpful when testing accessibility and design.']}),"\n",(0,i.jsxs)(n.p,{children:["For a developer whose only intent is to add to or edit these components (found\nunder ",(0,i.jsx)(n.code,{children:"webui/src/component-library"}),"), it is helpful to run a docker container\nwith NPM and TypeScript."]}),"\n",(0,i.jsxs)(n.p,{children:["Open the editor commands with ",(0,i.jsx)(n.code,{children:"Ctrl"}),"-",(0,i.jsx)(n.code,{children:"Shift"}),"-",(0,i.jsx)(n.code,{children:"P"})," and run ",(0,i.jsx)(n.code,{children:"Dev containers: reopen in dev container"}),". Select ",(0,i.jsx)(n.code,{children:"Node.js & Typescript"})," in the follow-up menu. Go with\nthe default values in the following menus."]}),"\n",(0,i.jsxs)(n.p,{children:["You can close the remote connection via the editor commands. From now on, you\ncan reopen the same dev container by opening the folder locally and selecting\n",(0,i.jsx)(n.code,{children:"reopen in dev container"})," from the editor commands. You can also directly open\nthe folder in the dev container, for example using ",(0,i.jsx)(n.code,{children:"File"})," > ",(0,i.jsx)(n.code,{children:"Open Recent"})," and\nthen selecting an element such as ",(0,i.jsx)(n.code,{children:"~/foo/bar [Dev Container]"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It makes sense to install some extensions for a better dev experience:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Tailwind CSS Intellisense"}),"\n",(0,i.jsx)(n.li,{children:"ESLint"}),"\n",(0,i.jsx)(n.li,{children:"Jest"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These extensions are specific to the project at hand. Of course, extensions such\nas Github Copilot and GitLens are still helpful."}),"\n",(0,i.jsxs)(n.p,{children:["An further extension that is extremely important is ",(0,i.jsx)(n.em,{children:"Run on Save"})," by\nemeraldwalk. This will need to be configured: enter the settings with ",(0,i.jsx)(n.code,{children:"Ctrl"}),"-",(0,i.jsx)(n.code,{children:","}),"\nand search ",(0,i.jsx)(n.code,{children:"Emeraldwalk: Runonsave"}),". Click on ",(0,i.jsx)(n.code,{children:"Edit in settings.json"}),". Add the\nfollowing configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"emeraldwalk.runonsave": {\n    "commands": [\n        {\n            "match": "\\\\.tsx$",\n            "cmd": "npm run build-tailwind"\n        }\n    ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["to ensure that the ",(0,i.jsx)(n.code,{children:"build-tailwind"})," command will be run each time you save a\n",(0,i.jsx)(n.code,{children:"*.tsx"})," file."]}),"\n",(0,i.jsxs)(n.p,{children:["You can now run Storybook using ",(0,i.jsx)(n.code,{children:"npm run storybook"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"connecting-to-a-rucio-instance",children:"Connecting to a Rucio instance"}),"\n",(0,i.jsx)(n.p,{children:"When testing the full WebUI stack, it will be necessary to connect to a Rucio\nbackend. This can be done by running a Rucio instance locally."}),"\n",(0,i.jsx)(n.p,{children:"We begin by starting all the Docker containers required."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Start the dev container as described above."}),"\n",(0,i.jsxs)(n.li,{children:["Clone Rucio from the ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio",children:"Github Repository"})]}),"\n",(0,i.jsx)(n.li,{children:"Open the folder in VS Code."}),"\n",(0,i.jsxs)(n.li,{children:["Open the editor commands and run ",(0,i.jsx)(n.code,{children:"Docker Compose Up"})," and select\n",(0,i.jsx)(n.code,{children:"docker-compose-storage.yml"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Starting the docker containers using ",(0,i.jsx)(n.code,{children:"docker-compose-storage.yml"})," will also\ncreate several RSEs, DIDs, etc. on the rucio instance which are quite helpful\nwhen running tests."]})}),"\n",(0,i.jsx)(n.p,{children:"We must now connect the dev container to the rucio container network."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Figure out the docker name of the dev container. Run ",(0,i.jsx)(n.code,{children:"docker ps"})," and search\nfor name which does not contain the string ",(0,i.jsx)(n.code,{children:"rucio"})]}),"\n",(0,i.jsxs)(n.li,{children:["Connect using ",(0,i.jsx)(n.code,{children:"docker network connect dev_default <container name>"}),".\n",(0,i.jsx)(n.code,{children:"dev_default"})," is the name of the network shared by the docker containers spun\nup using ",(0,i.jsx)(n.code,{children:"docker-compose-storage.yml"})," from earlier."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Finally, we must change the ",(0,i.jsx)(n.code,{children:"RUCIO_AUTH_HOST"})," and ",(0,i.jsx)(n.code,{children:"RUCIO_HOST"})," in the\n",(0,i.jsx)(n.code,{children:".env.development.local"})," file at the root level of the WebUI repository to point\nto the rucio container. By default, this should be ",(0,i.jsx)(n.code,{children:"https://dev-rucio-1:443"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Test the setup by logging in using the credentials username ",(0,i.jsx)(n.code,{children:"ddmlab"}),"/ password\n",(0,i.jsx)(n.code,{children:"secret"}),"/ account ",(0,i.jsx)(n.code,{children:"root"})," under the VO ",(0,i.jsx)(n.code,{children:"Default"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}}}]);