"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95680],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var s=i(96540);const o={},t=s.createContext(o);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(t.Provider,{value:n},e.children)}},46399:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/rucio-tasks-a9f11e37004c47a3ee27c6549b968aee.jpg"},49962:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/docker-ps-7e66472c5b3eaab849aed2e0fe06e354.jpg"},51037:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"developer/setting_up_vscode_dev_env","title":"Setting up a Rucio Developer environment using Visual Studio Code","description":"Local Setup vs Remote Setup","source":"@site/../docs/developer/setting_up_vscode_dev_env.md","sourceDirName":"developer","slug":"/developer/setting_up_vscode_dev_env","permalink":"/documentation/developer/setting_up_vscode_dev_env","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/setting_up_vscode_dev_env.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1744638991000,"frontMatter":{"id":"setting_up_vscode_dev_env","title":"Setting up a Rucio Developer environment using Visual Studio Code"},"sidebar":"docs","previous":{"title":"Setting up a Rucio Developer environment on Mac with Apple Silicon","permalink":"/documentation/developer/setting_up_mac_apple_silicon"},"next":{"title":"Sprint planning process in Rucio","permalink":"/documentation/developer/sprint_planning"}}');var o=i(74848),t=i(28453);const r={id:"setting_up_vscode_dev_env",title:"Setting up a Rucio Developer environment using Visual Studio Code"},c=void 0,d={},l=[{value:"Local Setup vs Remote Setup",id:"local-setup-vs-remote-setup",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"VSCode",id:"vscode",level:3},{value:"Remote Only: Additional Setup VSCode",id:"remote-only-additional-setup-vscode",level:3},{value:"VSCode Extensions",id:"vscode-extensions",level:3},{value:"Docker and Docker Compose",id:"docker-and-docker-compose",level:3},{value:"If you get a <code>docker-compose: command not found</code> error",id:"if-you-get-a-docker-compose-command-not-found-error",level:4},{value:"SSL Certificates",id:"ssl-certificates",level:3},{value:"Setting up Rucio and Configuring VSCode",id:"setting-up-rucio-and-configuring-vscode",level:2},{value:"VSCode Tasks",id:"vscode-tasks",level:2},{value:"Starting Rucio",id:"starting-rucio",level:3},{value:"Stopping Rucio",id:"stopping-rucio",level:3},{value:"Debugging Overview",id:"debugging-overview",level:2},{value:"Debugging Rucio Server",id:"debugging-rucio-server",level:3},{value:"Debugging Rucio WebUI",id:"debugging-rucio-webui",level:3},{value:"Debugging Rucio CLI Clients ( <code>rucio-admin</code> and <code>rucio</code>)",id:"debugging-rucio-cli-clients--rucio-admin-and-rucio",level:3},{value:"Debug rucio cli client",id:"debug-rucio-cli-client",level:4},{value:"Debug rucio-admin client",id:"debug-rucio-admin-client",level:4},{value:"Debugging Rucio Tests",id:"debugging-rucio-tests",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"local-setup-vs-remote-setup",children:"Local Setup vs Remote Setup"}),"\n",(0,o.jsx)(n.p,{children:"It is possible to run the containers for rucio development locally or on a remote VM."}),"\n",(0,o.jsxs)(n.p,{children:["For local development machines with limited resources ",(0,o.jsx)(n.code,{children:"(<16 GB RAM, < 4 Cores)"}),", it is recommended to run the containers on a remote VM. This will allow you to use your local machine for other tasks while the containers are running on the remote VM."]}),"\n",(0,o.jsxs)(n.p,{children:["Local development has been tested only on Linux hosts.\nRemote development has been tested on Linux(for the remote VM) and Linux/MacOS(for the local instance of vscode).\nThe additional steps required for setting up a remote development environment are described in the sections beginning with ",(0,o.jsx)(n.code,{children:"Remote Only: "}),". These sections can be ignored if you are setting up a local development environment."]}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.h3,{id:"vscode",children:"VSCode"}),"\n",(0,o.jsxs)(n.p,{children:["Install ",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/Download",children:"Visual Studio Code"})]}),"\n",(0,o.jsx)(n.h3,{id:"remote-only-additional-setup-vscode",children:"Remote Only: Additional Setup VSCode"}),"\n",(0,o.jsxs)(n.p,{children:["For development on a remote VM, you will need to install the ",(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack",children:"Remote Development Extension Pack"})]}),"\n",(0,o.jsxs)(n.p,{children:["You should setup SSH access to your remote VM. For more information, see ",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/remote/ssh",children:"Connecting to a remote host"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Remote-SSH: Open SSH Configuration File"}),"\n",(0,o.jsx)(n.img,{alt:"Open SSH Configuration File",src:i(67403).A+"",width:"609",height:"270"})]}),"\n",(0,o.jsxs)(n.p,{children:["You will be asked to create a new SSH configuration file or select an existing one. If you have an existing SSH configuration file, select it. If you do not have an existing SSH configuration file, select ",(0,o.jsx)(n.code,{children:"Create New File"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Update the SSH configuration file:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Host <fqdn of your remote VM>\n    HostName <hostname or ip address of your remote VM>\n    User <remote user>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, you can use the ",(0,o.jsx)(n.code,{children:"IdentityFile"})," option to specify the SSH key to use for authentication. For example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Host <fqdn of your remote VM>\n    HostName <hostname or ip address of your remote VM>\n    User <remote user>\n    IdentityFile ~/.ssh/<ssh key>\n"})}),"\n",(0,o.jsx)(n.p,{children:"If your remote VM is behind a firewall, you will need to setup a proxy. For example, at CERN, we can use lxplus as a ssh proxy to connect to the remote VMs, which are not accessible outside the CERN network. The following is an example of an SSH configuration file that uses lxplus as a proxy:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Host lxplus\n    HostName lxplus.cern.ch\n    User <cern_username>\n\nHost <fqdn of your remote VM>\n    HostName <hostname or ip address of your remote VM>\n    User <remote user>\n    ProxyCommand ssh -q -W %h:%p lxplus\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For more information, see ",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/remote/ssh",children:"Connecting to a remote host"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Test connection to Remote VM"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Remote-SSH: Connect to Host..."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Select the remote VM from the list of hosts"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Depending on your SSH Configuration, you may be prompted for the password/s in the following order:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"remote user on the proxy host"}),"\n",(0,o.jsx)(n.li,{children:"ssh key password or the password of the remote VMs user."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The bottom right corner of VS Code will show the status of the connection. If the connection is successful, you will see ",(0,o.jsx)(n.code,{children:"SSH: <fqdn of your remote VM>"})," in the bottom right corner:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Successful Connection",src:i(76587).A+"",width:"354",height:"108"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["For troubleshooting and Tips/Tricks, see ",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/remote/troubleshooting",children:"Troubleshooting"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"NOTE for remote development"}),": From hereon out, all the instructions should be run in the VSCode instance connected to your remote VM. ( i.e. the VSCode instance that shows ",(0,o.jsx)(n.code,{children:"SSH: <fqdn of your remote VM>"})," in the bottom right corner)\nYou can use the terminal in the VSCode instance to run commands on the remote VM directly. To do so, open the terminal in VSCode instance connected to your remote VM by clicking on ",(0,o.jsx)(n.code,{children:"Terminal"})," in the menu bar and then clicking on ",(0,o.jsx)(n.code,{children:"New Terminal"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"vscode-extensions",children:"VSCode Extensions"}),"\n",(0,o.jsx)(n.p,{children:"Install the following extensions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-python.python",children:"Python"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance",children:"Pylance"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker",children:"Docker"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",children:"Remote - Containers"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["VSCode comes with a plethora of extensions that can significantly improve your development experience. For more information, see ",(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/docs/editor/extension-gallery",children:"Extensions"})]}),"\n",(0,o.jsx)(n.h3,{id:"docker-and-docker-compose",children:"Docker and Docker Compose"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})]}),"\n",(0,o.jsxs)(n.li,{children:["Install ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"})]}),"\n"]}),"\n",(0,o.jsxs)(n.h4,{id:"if-you-get-a-docker-compose-command-not-found-error",children:["If you get a ",(0,o.jsx)(n.code,{children:"docker-compose: command not found"})," error"]}),"\n",(0,o.jsxs)(n.p,{children:["Docker has deprecated the ",(0,o.jsx)(n.code,{children:"docker-compose"})," command in favour of ",(0,o.jsx)(n.code,{children:"docker compose"}),".\nTo turn on ",(0,o.jsx)(n.code,{children:"docker compose"})," support in ",(0,o.jsx)(n.code,{children:"docker"})," command, please make sure you have installed the ",(0,o.jsx)(n.code,{children:"docker-compose-plugin"})," package from the ",(0,o.jsx)(n.code,{children:"docker-ce-stable"})," repository."]}),"\n",(0,o.jsxs)(n.p,{children:["The full command to install ",(0,o.jsx)(n.code,{children:"docker"})," and ",(0,o.jsx)(n.code,{children:"docker compose"})," on RPM-based installations is:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yum install docker-ce docker-compose-plugin\n"})}),"\n",(0,o.jsx)(n.h3,{id:"ssl-certificates",children:"SSL Certificates"}),"\n",(0,o.jsxs)(n.p,{children:["If you would like to debug the rucio webui and x509 authentication capabilities of the rucio server, you will need to obtain SSL certificates for your development environment. For remote VMs, you can request them from your IT department or you can use letsencrypt to generate a certificate. For local development machines, you can use ",(0,o.jsx)(n.a,{href:"https://github.com/FiloSottile/mkcert",children:"mkcert"})," to generate a certificate."]}),"\n",(0,o.jsxs)(n.p,{children:["Whatever route you go, you should have a ",(0,o.jsx)(n.code,{children:"hostcert.pem"})," and a ",(0,o.jsx)(n.code,{children:"hostkey.pem"})," file accessible for your development environment."]}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-rucio-and-configuring-vscode",children:"Setting up Rucio and Configuring VSCode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Clone the rucio repository"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gh repo clone rucio/rucio\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Clone the vscode configuration repository"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"gh repo clone rucio/rucio-vscode-dev-env\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Move the vscode repo inside the rucio repo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mv rucio-vscode-dev-env rucio/.vscode\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Copy the SSL certificates to the ",(0,o.jsx)(n.code,{children:"rucio/.vscode/certs"})," directory"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open VSCode. If you are using a remote VM, open the VSCode instance connected to your remote VM."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Go to ",(0,o.jsx)(n.code,{children:"File"})," -> ",(0,o.jsx)(n.code,{children:"Open Folder"})," and select the ",(0,o.jsx)(n.code,{children:"rucio"})," folder"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Edit the rucio/.vscode/docker-compose.yml and change the ",(0,o.jsx)(n.code,{children:"RUCIO_HOST"})," environment variable for the rucio-dev container to ",(0,o.jsx)(n.code,{children:"http://localhost"})," if you are using a local development environment or to the fqdn and port of your remote VM if you are using a remote development environment.\n",(0,o.jsx)(n.img,{alt:"RUCIO_HOST",src:i(75253).A+"",width:"1092",height:"520"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Add the default url for webui in ",(0,o.jsx)(n.code,{children:"rucio.cfg.template"}),", which is required to handle Cross Origin Requests (CORS) in the webui. Add the following line to the ",(0,o.jsx)(n.code,{children:"[webui]"})," section of ",(0,o.jsx)(n.code,{children:"rucio.cfg.template"}),":\n",(0,o.jsx)(n.code,{children:"     urls = <http://url-of-webui:port>   "})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If your server is running on a remote VM, but webui will be running locally, then the requests originating from webui to the server will have the origin ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If both the server and webui are running locally, then the requests originating from webui to the server will have the origin ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),". In this case, you can set the ",(0,o.jsx)(n.code,{children:"urls"})," to ",(0,o.jsx)(n.code,{children:"http://localhost:3000"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If both the server and webui are running on the same remote VM, then the requests originating from webui to the server will have the origin ",(0,o.jsx)(n.code,{children:"http://<fqdn-of-remote-vm>:3000"}),". In this case, you can set the ",(0,o.jsx)(n.code,{children:"urls"})," to ",(0,o.jsx)(n.code,{children:"http://<fqdn-of-remote-vm>:3000"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"vscode-tasks",children:"VSCode Tasks"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n",(0,o.jsxs)(n.li,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Tasks: Run Task"})]}),"\n",(0,o.jsx)(n.li,{children:"You should see a list of pre-configured tasks"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"tasks",src:i(46399).A+"",width:"599",height:"334"})}),"\n",(0,o.jsx)(n.p,{children:"These tasks are helpful utilities for your to quickly start/stop rucio containers and to setup different types of debuggers ( server, webui, pytest, clients, ...)."}),"\n",(0,o.jsx)(n.h3,{id:"starting-rucio",children:"Starting Rucio"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n",(0,o.jsxs)(n.li,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Tasks: Run Task"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.code,{children:"start-rucio"})]}),"\n",(0,o.jsx)(n.li,{children:"This will start and initialize the rucio development environment. The first time you run this task, it will take a while to fetch and build the docker images. Subsequent runs will be much faster."}),"\n"]}),"\n",(0,o.jsx)("video",{width:"100%",controls:!0,children:(0,o.jsx)("source",{src:"/documentation/img/vscode/start_rucio_task.mp4"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["After the command has finished, you can run ",(0,o.jsx)(n.code,{children:"docker ps -a"})," to check if all the containers are up and running. You should see something like this:\n",(0,o.jsx)(n.img,{alt:"docker ps -a",src:i(49962).A+"",width:"1515",height:"453"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"stopping-rucio",children:"Stopping Rucio"}),"\n",(0,o.jsxs)(n.p,{children:["To take down all the containers, run the ",(0,o.jsx)(n.code,{children:"stop-rucio"})," task. This is equivalent to a ",(0,o.jsx)(n.code,{children:"docker-compose down"})," command."]}),"\n",(0,o.jsx)(n.h2,{id:"debugging-overview",children:"Debugging Overview"}),"\n",(0,o.jsxs)(n.p,{children:["After you have run the ",(0,o.jsx)(n.code,{children:"start-rucio"})," task, you can start debugging the rucio server, webui, clients, etc."]}),"\n",(0,o.jsx)(n.p,{children:"The debugging process for Rucio in VSCode is broken down into 3 steps:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Start the process inside the ",(0,o.jsx)(n.code,{children:"rucio-dev"})," container that you want to debug"]}),"\n",(0,o.jsx)(n.li,{children:"Attach the debugger to the process"}),"\n",(0,o.jsx)(n.li,{children:"Insert breakpoints in the code and start debugging"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"After you are done debugging, you should remember to"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"detach the debugger from the process"}),"\n",(0,o.jsxs)(n.li,{children:["run the ",(0,o.jsx)(n.code,{children:"cleanup"})," task to remove all processes inside the container that were used for debugging."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"debugging-rucio-server",children:"Debugging Rucio Server"}),"\n",(0,o.jsxs)(n.p,{children:["After you have run the ",(0,o.jsx)(n.code,{children:"start-rucio"})," task, you can start debugging the rucio server."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Tasks: Run Task"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Select ",(0,o.jsx)(n.code,{children:"rucio-server:debug"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Attach the debugger to the rucio server by clicking on the ",(0,o.jsx)(n.code,{children:"Debug"})," icon in the left sidebar and selecting ",(0,o.jsx)(n.code,{children:"Server: Debug"})," from the dropdown menu."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"attach to rucio-server",src:i(80759).A+"",width:"393",height:"514"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Press ",(0,o.jsx)(n.code,{children:"F5"})," to start debugging the rucio server."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"You can now set breakpoints in the rucio server code and debug the server."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["After you have finished debugging, you can detach the debugger from the rucio server by clicking on the ",(0,o.jsx)(n.code,{children:"Stop"})," button in the debug toolbar."]}),"\n",(0,o.jsxs)(n.p,{children:["**NOTE: ** After detaching the debugger, run the ",(0,o.jsx)(n.code,{children:"cleanup"})," task to remove all processes inside the container that were used for debugging."]}),"\n",(0,o.jsx)("video",{width:"100%",controls:!0,children:(0,o.jsx)("source",{src:"/documentation/img/vscode/rucio-vscode-server-debug.mp4"})}),"\n",(0,o.jsx)(n.h3,{id:"debugging-rucio-webui",children:"Debugging Rucio WebUI"}),"\n",(0,o.jsxs)(n.p,{children:["After you have run the ",(0,o.jsx)(n.code,{children:"start-rucio"})," task, you can start debugging the rucio webui."]}),"\n",(0,o.jsx)(n.p,{children:"To debug the rucio webui, you will need to start the rucio server in non-debug mode and the rucio webui in debug mode."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n",(0,o.jsxs)(n.li,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Tasks: Run Task"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.code,{children:"rucio-server"})," to start a rucio-server in non-debug mode"]}),"\n",(0,o.jsx)(n.li,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n",(0,o.jsxs)(n.li,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Tasks: Run Task"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.code,{children:"rucio-ui:debug"})]}),"\n",(0,o.jsxs)(n.li,{children:["Attach the debugger to the rucio webui by clicking on the ",(0,o.jsx)(n.code,{children:"Debug"})," icon in the left sidebar and selecting ",(0,o.jsx)(n.code,{children:"UI: Debug"})," from the dropdown menu."]}),"\n",(0,o.jsxs)(n.li,{children:["Press ",(0,o.jsx)(n.code,{children:"F5"})," to start debugging the rucio webui."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"debugging-rucio-cli-clients--rucio-admin-and-rucio",children:["Debugging Rucio CLI Clients ( ",(0,o.jsx)(n.code,{children:"rucio-admin"})," and ",(0,o.jsx)(n.code,{children:"rucio"}),")"]}),"\n",(0,o.jsx)(n.h4,{id:"debug-rucio-cli-client",children:"Debug rucio cli client"}),"\n",(0,o.jsxs)(n.p,{children:["After you have run the ",(0,o.jsx)(n.code,{children:"start-rucio"})," task, you can start debugging the rucio cli clients."]}),"\n",(0,o.jsx)(n.p,{children:"To debug the rucio cli clients, you will need to start the rucio server in non-debug mode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n",(0,o.jsxs)(n.li,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Tasks: Run Task"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.code,{children:"rucio-server"})," to start a rucio-server in non-debug mode"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Then, you need to start the ",(0,o.jsx)(n.code,{children:"rucio-cli:pre-debug"})," task to inject the debug configuration into the rucio cli clients."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Tasks: Run Task"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Select ",(0,o.jsx)(n.code,{children:"rucio-cli:pre-debug"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Start the ",(0,o.jsx)(n.code,{children:"Rucio:CLI Debug"})," launch configuration by clicking on the ",(0,o.jsx)(n.code,{children:"Debug"})," icon in the left sidebar and selecting ",(0,o.jsx)(n.code,{children:"Rucio:CLI Debug"})," from the dropdown menu."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Press ",(0,o.jsx)(n.code,{children:"F5"})," to start debugging the rucio cli clients."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["After that, you should open a shell inside the ",(0,o.jsx)(n.code,{children:"rucio-dev"})," container"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"docker exec -it rucio-dev bash\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Insert breakpoints in the rucio cli clients code."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Run a rucio cli command to trigger the breakpoint."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"After you are finished debugging, you should remember to"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"detach the debugger from the debug process"}),"\n",(0,o.jsxs)(n.li,{children:["run the ",(0,o.jsx)(n.code,{children:"rucio-cli:post-debug"})," task to remove the debug configuration from the rucio cli clients."]}),"\n",(0,o.jsxs)(n.li,{children:["run the ",(0,o.jsx)(n.code,{children:"cleanup"})," task to remove all processes inside the container that were used for debugging."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"debug-rucio-admin-client",children:"Debug rucio-admin client"}),"\n",(0,o.jsxs)(n.p,{children:["The instructions are the same as for the ",(0,o.jsx)(n.code,{children:"rucio"})," client, except that you need to start the ",(0,o.jsx)(n.code,{children:"rucio-admin:pre-debug"})," task to inject the debug configuration into the rucio-admin client."]}),"\n",(0,o.jsxs)(n.p,{children:["After debugging, you should run the ",(0,o.jsx)(n.code,{children:"rucio-admin:post-debug"})," task to remove the debug configuration from the rucio-admin client."]}),"\n",(0,o.jsx)(n.h3,{id:"debugging-rucio-tests",children:"Debugging Rucio Tests"}),"\n",(0,o.jsxs)(n.p,{children:["After you have run the ",(0,o.jsx)(n.code,{children:"start-rucio"})," task, you can start debugging the rucio tests."]}),"\n",(0,o.jsx)(n.p,{children:"To debug the rucio tests, you will need to start the rucio server in non-debug mode"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Open the Command Palette (Ctrl+Shift+P)"}),"\n",(0,o.jsxs)(n.li,{children:["Run the command ",(0,o.jsx)(n.code,{children:"Tasks: Run Task"})]}),"\n",(0,o.jsxs)(n.li,{children:["Select ",(0,o.jsx)(n.code,{children:"rucio-server"})," to start a rucio-server in non-debug mode"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Then, you should open the file containing the test you want to debug in VSCode."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Insert breakpoints in the test code."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Start the ",(0,o.jsx)(n.code,{children:"rucio-pytest:debug"})," to start the test in debug mode"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Attach the debugger to the test by clicking on the ",(0,o.jsx)(n.code,{children:"Debug"})," icon in the left sidebar and selecting ",(0,o.jsx)(n.code,{children:"Pytest: Debug"})," from the dropdown menu."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Press ",(0,o.jsx)(n.code,{children:"F5"})," to start debugging the rucio tests."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"After you are finished debugging, you should remember to"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"detach the debugger from the debug process"}),"\n",(0,o.jsxs)(n.li,{children:["run the ",(0,o.jsx)(n.code,{children:"cleanup"})," task to remove all processes inside the container that were used for debugging."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},67403:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/remote_ssh-b59c7e945ebcc026fee6dd82cfebe0ab.jpg"},75253:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/docker-compose-rucio-host-465a74fa33e82533f549c7342c5942e2.jpg"},76587:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/jpeg;base64,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"},80759:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/rucio-server-debug-98c2ec8a56860d6718e4da5bf97bc709.jpeg"}}]);