"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7974],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,h=d["".concat(l,".").concat(g)]||d[g]||p[g]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},69699:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(58168),o=t(98587),r=(t(96540),t(15680)),i=["components"],s={id:"setting_up_demo",title:"Setting up a Rucio demo environment"},l=void 0,c={unversionedId:"operator/setting_up_demo",id:"operator/setting_up_demo",title:"Setting up a Rucio demo environment",description:"Prerequisites",source:"@site/../docs/operator/setting_up_demo.md",sourceDirName:"operator",slug:"/operator/setting_up_demo",permalink:"/documentation/operator/setting_up_demo",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/setting_up_demo.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1713517092,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{id:"setting_up_demo",title:"Setting up a Rucio demo environment"},sidebar:"docs",previous:{title:"Developing with Rucio",permalink:"/documentation/user/developing_with_rucio"},next:{title:"Setting up Rucio on Kubernetes",permalink:"/documentation/operator/kubernetes"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing the environment",id:"preparing-the-environment",level:2},{value:"Using the standard environment",id:"using-the-standard-environment",level:2},{value:"Using the environment including storage",id:"using-the-environment-including-storage",level:2},{value:"Using the environment including monitoring",id:"using-the-environment-including-monitoring",level:2},{value:"Development",id:"development",level:2},{value:"Development tricks",id:"development-tricks",level:2},{value:"Server changes",id:"server-changes",level:3},{value:"Database access",id:"database-access",level:3},{value:"Docker is eating my disk space",id:"docker-is-eating-my-disk-space",level:3},{value:"Where do I find the Dockerfile",id:"where-do-i-find-the-dockerfile",level:3},{value:"I need a Docker based on another branch! (not rucio/master)",id:"i-need-a-docker-based-on-another-branch-not-ruciomaster",level:3}],p={toc:d},g="wrapper";function h(e){var n=e.components,t=(0,o.A)(e,i);return(0,r.yg)(g,(0,a.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"We provide a containerised version of the Rucio development environment\nfor a quick start. Our containers are ready-made for Docker, which means\nyou need to have a working Docker installation. To install Docker for\nyour platform, please refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/install/"},(0,r.yg)("strong",{parentName:"a"},"Docker installation\nguide")),", for example, for CentOS\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/install/linux/docker-ce/centos/"},(0,r.yg)("strong",{parentName:"a"},"follow these instructions for the Docker Community\nEdition")),".\nPlease make sure that you install this recent Docker version especially\nif you are on CentOS, i.e. its default version is ancient and does not\nsupport some features we rely on."),(0,r.yg)("p",null,"Start the Docker daemon with ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo systemctl start docker"),".\nYou can confirm that Docker is running properly by executing (might need\n",(0,r.yg)("inlineCode",{parentName:"p"},"sudo"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker run hello-world\n")),(0,r.yg)("p",null,"If successful, this will print an informational message telling you that\nyou are ready to go. Now, also install the ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose"),"\nhelper tool with ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo yum install docker-compose")," (might\nneed ",(0,r.yg)("a",{parentName:"p",href:"https://fedoraproject.org/wiki/EPEL"},(0,r.yg)("strong",{parentName:"a"},"EPEL"))," enabled). You are now\nready to install the Rucio development environment."),(0,r.yg)("h2",{id:"preparing-the-environment"},"Preparing the environment"),(0,r.yg)("p",null,"The first step is to check if SELinux is running. SELinux will block\naccess to the directories mounted inside the container, and so depending\non you node might need to be put in permissive mode with ",(0,r.yg)("inlineCode",{parentName:"p"},"setenforce\npermissive"),"."),(0,r.yg)("p",null,"The second step is to fork the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio"},(0,r.yg)("strong",{parentName:"a"},"main Rucio repository on\nGitHub"))," by clicking the yellow Fork Star\nbutton, and then clone your private forked Rucio repository to your\n",(0,r.yg)("inlineCode",{parentName:"p"},"/dev/rucio"),". Afterwards add the main upstream repository\nas an additional remote to be able to submit pull requests later on:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~/dev\ngit clone git@github.com:<your_username>/rucio.git\ncd rucio\ngit remote add upstream git@github.com:rucio/rucio.git\ngit fetch --all\n")),(0,r.yg)("p",null,"Now, ensure that the ",(0,r.yg)("inlineCode",{parentName:"p"},".git/config")," is proper, i.e.,\nmentioning your full name and email address, and create the\n",(0,r.yg)("inlineCode",{parentName:"p"},".githubtoken")," file that contains a full access token from\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/settings/tokens"},(0,r.yg)("strong",{parentName:"a"},"Github Account Settings")),"."),(0,r.yg)("p",null,"Next, startup the Rucio development environment with docker-compose.\nThere are three different types: a standard one to just run the\nunittests and do basic development, which includes just Rucio without\nany transfer capabilities. One slightly larger one, which includes the\nFile Transfer Service (FTS) and three XrootD storage servers to develop\nupload/download and transfers capabilities. And a third large one, which\nadds the full monitoring stack with Logstash, Elasticsearch, Kibana and\nGrafana."),(0,r.yg)("h2",{id:"using-the-standard-environment"},"Using the standard environment"),(0,r.yg)("p",null,"Run the containers using docker-compose (again might need\n",(0,r.yg)("inlineCode",{parentName:"p"},"sudo"),"):"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose.yml up -d\n")),(0,r.yg)("p",null,"And verify that it is running properly:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,r.yg)("p",null,"This should show you a few running containers: the Rucio server, the\nPostgreSQL database and the Graphite monitoring."),(0,r.yg)("p",null,"Finally, you can jump into the container with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\n")),(0,r.yg)("p",null,"To verify that everything is in order, you can now either run the full\nunit tests or only set up the database. Running the full testing suite\ntakes ","~","10 minutes:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests.sh\n")),(0,r.yg)("p",null,"Alternatively, you can bootstrap the test environment once with the\n",(0,r.yg)("inlineCode",{parentName:"p"},"-i"),"option and then selectively or repeatedly run test case\nmodules, test case groups, or even single test cases, for example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests.sh -i\npytest -v --full-trace lib/rucio/tests/test_replica.py\npytest -v --full-trace lib/rucio/tests/test_replica.py:TestReplicaCore\npytest -v --full-trace lib/rucio/tests/test_replica.py:TestReplicaCore.test_delete_replicas_from_datasets\n")),(0,r.yg)("h2",{id:"using-the-environment-including-storage"},"Using the environment including storage"),(0,r.yg)("p",null,"Again run the containers using docker-compose:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose.yml --profile storage up -d\n")),(0,r.yg)("p",null,"This should show you a few more running containers: the Rucio server,\nthe PostgreSQL database, FTS and its associated MySQL database, the\nGraphite monitoring, and three XrootD storage servers."),(0,r.yg)("p",null,"With this container you can upload and download data to/from the storage\nand submit data transfers. To set this up, add the ",(0,r.yg)("inlineCode",{parentName:"p"},"-r"),"\noption to the setup."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests.sh -ir\n")),(0,r.yg)("p",null,"This creates a few random files and uploads them, creates a few datasets\nand containers, and requests a replication rule for the container, which\nstarts in state REPLICATING. To demonstrate the transfer capability, the\ndaemons can be run in single-execution mode in order:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info <rule-id>\n\nrucio-conveyor-submitter --run-once\nrucio-conveyor-poller --run-once  --older-than 0\nrucio-conveyor-finisher --run-once\n\nrucio rule-info <rule-id>\n")),(0,r.yg)("p",null,"On the second display of the rule, its state has cleared to OK."),(0,r.yg)("h2",{id:"using-the-environment-including-monitoring"},"Using the environment including monitoring"),(0,r.yg)("p",null,"Again run the containers using docker-compose:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker-compose --file etc/docker/dev/docker-compose.yml --profile storage --profile monitoring up -d\n")),(0,r.yg)("p",null,"Now you will have the same containers as before plus a full monitoring\nstack with Logstash, Elasticsearch, Kibana and Grafana."),(0,r.yg)("p",null,"To create some events and write them to Elasticsearch first run again\nthe tests as before:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests.sh -ir\n")),(0,r.yg)("p",null,"Then you will have to run the transfer daemons (conveyor-","*",") and\nmessaging daemon (hermes) to send the events to ActiveMQ. There a script\nfor that which repeats these daemons in single execution mode from the\nsection in a loop:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"run_daemons\n")),(0,r.yg)("p",null,"When all the daemons ran you will be able to find the events in Kibana.\nIf you run the docker environment on you local machine you can access\nKibana at ",(0,r.yg)("inlineCode",{parentName:"p"},"<http://localhost:5601>"),". The necessary index pattern will be\nadded automatically. There is also one dashboard available in Kibana. If\nit is running on remote machine you can SSH forward it:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"ssh -L 5601:127.0.0.1:5601 <hostname>\n")),(0,r.yg)("p",null,"Additionally, there is also a Grafana server running with one simple\ndashboard. You can access it at ",(0,r.yg)("inlineCode",{parentName:"p"},"<http://localhost:3000>"),'. The default\ncredentials are \\"admin/admin\\". Also ActiveMQ web console can be\naccessed at ',(0,r.yg)("inlineCode",{parentName:"p"},"<http://localhost:8161>"),"."),(0,r.yg)("p",null,"If you would like to continously create some transfers and events there\nare scripts available for that. Open two different shells and in one\nrun:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"create_monit_data\n")),(0,r.yg)("p",null,"And in the other run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"run_daemons\n")),(0,r.yg)("h2",{id:"development"},"Development"),(0,r.yg)("p",null,"The idea for containerised development is that you use your host machine\nto edit the files, and test the changes within the container\nenvironment. On your host machine, you should be able to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~/dev/rucio\nemacs <file>\n")),(0,r.yg)("p",null,"To see your changes in action the recommended way is to jump twice into\nthe container in parallel. One terminal to follow the output of the\nRucio server with a shortcut to tail the logfiles\n(",(0,r.yg)("inlineCode",{parentName:"p"},"logshow"),"), and one terminal to actually run interactive\ncommands:"),(0,r.yg)("p",null,'From your host, get a separate Terminal 1 (the Rucio \\"server log\nshow\\"):'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\nlogshow\n")),(0,r.yg)("p",null,'Terminal 1 can now be left open, and then from your host go into a new\nTerminal 2 (the \\"interactive\\" terminal):'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_rucio_1 /bin/bash\nrucio whoami\n")),(0,r.yg)("p",null,"The command will output in Terminal 2, and at the same time the server\ndebug output will be shown in Terminal 1."),(0,r.yg)("p",null,"The same ",(0,r.yg)("inlineCode",{parentName:"p"},"logshow")," is also available in the FTS container:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker exec -it dev_fts_1 /bin/bash\nlogshow\n")),(0,r.yg)("h2",{id:"development-tricks"},"Development tricks"),(0,r.yg)("h3",{id:"server-changes"},"Server changes"),(0,r.yg)("p",null,"If you edit server-side files, e.g. in ",(0,r.yg)("inlineCode",{parentName:"p"},"lib/rucio/web"),", and\nyour changes are not showing up then it is usually helpful to flush the\nmemcache and force the webserver to restart without having to restart\nthe container. Inside the container execute:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"echo 'flush_all' | nc localhost 11211 && httpd -k graceful**\n")),(0,r.yg)("h3",{id:"database-access"},"Database access"),(0,r.yg)("p",null,"The default database is PostgreSQL, and ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose")," is\nconfigured to open its port to the host machine. Using your favourite\nSQL navigator, e.g., ",(0,r.yg)("a",{parentName:"p",href:"https://dbeaver.io"},(0,r.yg)("strong",{parentName:"a"},"DBeaver")),", you can connect to\nthe database using the default access on ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost:5432")," to\ndatabase name ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio"),", schema name ",(0,r.yg)("inlineCode",{parentName:"p"},"dev"),", with\nusername ",(0,r.yg)("inlineCode",{parentName:"p"},"rucio")," and password ",(0,r.yg)("inlineCode",{parentName:"p"},"secret"),"."),(0,r.yg)("h3",{id:"docker-is-eating-my-disk-space"},"Docker is eating my disk space"),(0,r.yg)("p",null,"You can reclaim this with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker system prune -f --volumes\n")),(0,r.yg)("h3",{id:"where-do-i-find-the-dockerfile"},"Where do I find the Dockerfile"),(0,r.yg)("p",null,"This container can be found on Dockerhub as\n",(0,r.yg)("inlineCode",{parentName:"p"},"rucio/rucio-dev"),", and the corresponding\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rucio/containers/tree/master/dev"},(0,r.yg)("strong",{parentName:"a"},"Dockerfile"))," is\nalso available. It provides a Rucio environment which allows you to\nmount your local code in the containers ",(0,r.yg)("inlineCode",{parentName:"p"},"bin"),",\n",(0,r.yg)("inlineCode",{parentName:"p"},"lib"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"tools")," directory. The container is\nset up to run against a PostgreSQL database with fsync and most\ndurability features for the WAL disabled to improve testing IO\nthroughput. Tests and checks can be run against the development code\nwithout having to rebuild the container."),(0,r.yg)("h3",{id:"i-need-a-docker-based-on-another-branch-not-ruciomaster"},"I need a Docker based on another branch! (not rucio/master)"),(0,r.yg)("p",null,"In such cases, you can download the Rucio container files and e.g. choose\nto modify the dev container before build:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd /opt\nsudo git clone https://github.com/rucio/containers\ncd ../containers/dev\n")),(0,r.yg)("p",null,"Change anything you need, e.g. the code branch cloned to your docker\ncontainer:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# from\nRUN git clone https://github.com/rucio/rucio.git /tmp/rucio\n# to e.g.:\nRUN git clone --single-branch --branch next https://github.com/rucio/rucio.git /tmp/rucio\n#build your docker\nsudo docker build -t rucio/rucio-dev\n")),(0,r.yg)("p",null,"Compose as usual using docker-compose:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cd /opt/rucio\nsudo docker-compose --file etc/docker/dev/docker-compose.yml up -d\n")),(0,r.yg)("p",null,"Start the daemons"),(0,r.yg)("p",null,"Daemons are not running in the docker environment, but all daemons\nsupport single-execution mode with the ","-","-run-once argument. Reset the\nsystem first with:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tools/run_tests.sh -ir\n")),(0,r.yg)("p",null,"Some files are created. Let\\'s add them to a new dataset:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rucio add-dataset test:mynewdataset\nrucio attach test:mynewdataset test:file1 test:file2 test:file3 test:file4\n")),(0,r.yg)("p",null,"If you run the command below, the files are not in the RSE XRD3, but\nonly in XRD1 and 2.:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ **rucio list-file-replicas test:mynewdataset**\n+-------+-------+-----------+----------+-----------------------------------+\n| SCOPE | NAME  | FILESIZE  | ADLER32  | RSE: REPLICA                      |\n|-------|-------|-----------|----------|-----------------------------------|\n| test  | file1 | 10.486 MB | 141a641e | XRD1: root://xrd1:1094//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD1: root://xrd1:1094//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD2: root://xrd2:1095//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD2: root://xrd2:1095//rucio/... |\n+-------+-------+-----------+----------+-----------------------------------+\n")),(0,r.yg)("p",null,"So let\\'s add a new rule on our new dataset to oblige Rucio to create\nreplicas also on XRD3:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rucio add-rule test:mynewdataset 1 XRD3**\n1aadd685d891400dba050ad43e71fea9**\n")),(0,r.yg)("p",null,"Now we can check the status of the rule. We will see there are 4 files\nin ",(0,r.yg)("inlineCode",{parentName:"p"},"Replicating")," state:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info 1aadd685d891400dba050ad43e71fea9|grep Locks**\nLocks OK/REPLICATING/STUCK: 0/4/0**\n")),(0,r.yg)("p",null,"Now we can run the daemons. First the rule evaluation daemon\n(judge-evaluator) will pick up our rule. Then the transfer submitter\ndaemon (conveyor-submitter) will send the newly created transfers\nrequests to the FTS server. After that, the transfer state check daemon\n(conveyor-poller) will retrieve from FTS the transfer state information.\nFinally, the transfer sign-off daemon (conveyor-finisher) updates the\ninternal state of the Rucio catalogue to reflect the changes.:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rucio-judge-evaluator --run-once**\nrucio-conveyor-submitter --run-once**\nrucio-conveyor-poller --run-once**\nrucio-conveyor-finisher --run-once**\n")),(0,r.yg)("p",null,"If we see the state of the rule now, we see the locks are OK:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"rucio rule-info 1aadd685d891400dba050ad43e71fea9|grep Locks\nLocks OK/REPLICATING/STUCK: 4/0/0**\n")),(0,r.yg)("p",null,"And if we look at the replicas of the dataset, we see the there are\nreplicas of the files also in XRD3:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ rucio list-file-replicas test:mynewdataset\n+-------+-------+-----------+----------+-----------------------------------+\n| SCOPE | NAME  | FILESIZE  | ADLER32  | RSE: REPLICA                      |\n|-------|-------|-----------|----------|-----------------------------------|\n| test  | file1 | 10.486 MB | 141a641e | XRD3: root://xrd3:1096//rucio/... |\n| test  | file1 | 10.486 MB | 141a641e | XRD1: root://xrd1:1094//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD3: root://xrd3:1096//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD1: root://xrd1:1094//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD2: root://xrd2:1095//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD3: root://xrd3:1096//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD2: root://xrd2:1095//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD3: root://xrd3:1096//rucio/... |\n+-------+-------+-----------+----------+-----------------------------------+\n")))}h.isMDXComponent=!0}}]);