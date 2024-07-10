"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7974],{42240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(74848),r=t(28453);const s={id:"setting_up_demo",title:"Setting up a Rucio demo environment"},i=void 0,a={id:"operator/setting_up_demo",title:"Setting up a Rucio demo environment",description:"Prerequisites",source:"@site/../docs/operator/setting_up_demo.md",sourceDirName:"operator",slug:"/operator/setting_up_demo",permalink:"/documentation/operator/setting_up_demo",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/setting_up_demo.md",tags:[],version:"current",lastUpdatedBy:"Riccardo Di Maio",lastUpdatedAt:172061287e4,frontMatter:{id:"setting_up_demo",title:"Setting up a Rucio demo environment"},sidebar:"docs",previous:{title:"Developing with Rucio",permalink:"/documentation/user/developing_with_rucio"},next:{title:"Setting up Rucio on Kubernetes",permalink:"/documentation/operator/kubernetes"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Preparing the environment",id:"preparing-the-environment",level:2},{value:"Using the standard environment",id:"using-the-standard-environment",level:2},{value:"Using the environment including storage",id:"using-the-environment-including-storage",level:2},{value:"Using the environment including monitoring",id:"using-the-environment-including-monitoring",level:2},{value:"Development",id:"development",level:2},{value:"Development tricks",id:"development-tricks",level:2},{value:"Server changes",id:"server-changes",level:3},{value:"Database access",id:"database-access",level:3},{value:"Docker is eating my disk space",id:"docker-is-eating-my-disk-space",level:3},{value:"Where do I find the Dockerfile",id:"where-do-i-find-the-dockerfile",level:3},{value:"I need a Docker based on another branch! (not rucio/master)",id:"i-need-a-docker-based-on-another-branch-not-ruciomaster",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsxs)(n.p,{children:["We provide a containerised version of the Rucio development environment\nfor a quick start. Our containers are ready-made for Docker, which means\nyou need to have a working Docker installation. To install Docker for\nyour platform, please refer to the ",(0,o.jsx)(n.a,{href:"https://docs.docker.com/install/",children:(0,o.jsx)(n.strong,{children:"Docker installation\nguide"})}),", for example, for CentOS\n",(0,o.jsx)(n.a,{href:"https://docs.docker.com/install/linux/docker-ce/centos/",children:(0,o.jsx)(n.strong,{children:"follow these instructions for the Docker Community\nEdition"})}),".\nPlease make sure that you install this recent Docker version especially\nif you are on CentOS, i.e. its default version is ancient and does not\nsupport some features we rely on."]}),"\n",(0,o.jsxs)(n.p,{children:["Start the Docker daemon with ",(0,o.jsx)(n.code,{children:"sudo systemctl start docker"}),".\nYou can confirm that Docker is running properly by executing (might need\n",(0,o.jsx)(n.code,{children:"sudo"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run hello-world\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If successful, this will print an informational message telling you that\nyou are ready to go. Now, also install the ",(0,o.jsx)(n.code,{children:"docker-compose"}),"\nhelper tool with ",(0,o.jsx)(n.code,{children:"sudo yum install docker-compose"})," (might\nneed ",(0,o.jsx)(n.a,{href:"https://fedoraproject.org/wiki/EPEL",children:(0,o.jsx)(n.strong,{children:"EPEL"})})," enabled). You are now\nready to install the Rucio development environment."]}),"\n",(0,o.jsx)(n.h2,{id:"preparing-the-environment",children:"Preparing the environment"}),"\n",(0,o.jsxs)(n.p,{children:["The first step is to check if SELinux is running. SELinux will block\naccess to the directories mounted inside the container, and so depending\non you node might need to be put in permissive mode with ",(0,o.jsx)(n.code,{children:"setenforce permissive"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The second step is to fork the ",(0,o.jsx)(n.a,{href:"https://github.com/rucio/rucio",children:(0,o.jsx)(n.strong,{children:"main Rucio repository on\nGitHub"})})," by clicking the yellow Fork Star\nbutton, and then clone your private forked Rucio repository to your\n",(0,o.jsx)(n.code,{children:"/dev/rucio"}),". Afterwards add the main upstream repository\nas an additional remote to be able to submit pull requests later on:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd ~/dev\ngit clone git@github.com:<your_username>/rucio.git\ncd rucio\ngit remote add upstream git@github.com:rucio/rucio.git\ngit fetch --all\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, ensure that the ",(0,o.jsx)(n.code,{children:".git/config"})," is proper, i.e.,\nmentioning your full name and email address, and create the\n",(0,o.jsx)(n.code,{children:".githubtoken"})," file that contains a full access token from\n",(0,o.jsx)(n.a,{href:"https://github.com/settings/tokens",children:(0,o.jsx)(n.strong,{children:"Github Account Settings"})}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Next, startup the Rucio development environment with docker-compose.\nThere are three different types: a standard one to just run the\nunittests and do basic development, which includes just Rucio without\nany transfer capabilities. One slightly larger one, which includes the\nFile Transfer Service (FTS) and three XrootD storage servers to develop\nupload/download and transfers capabilities. And a third large one, which\nadds the full monitoring stack with Logstash, Elasticsearch, Kibana and\nGrafana."}),"\n",(0,o.jsx)(n.h2,{id:"using-the-standard-environment",children:"Using the standard environment"}),"\n",(0,o.jsxs)(n.p,{children:["Run the containers using docker-compose (again might need\n",(0,o.jsx)(n.code,{children:"sudo"}),"):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose --file etc/docker/dev/docker-compose.yml up -d\n"})}),"\n",(0,o.jsx)(n.p,{children:"And verify that it is running properly:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker ps\n"})}),"\n",(0,o.jsx)(n.p,{children:"This should show you a few running containers: the Rucio server, the\nPostgreSQL database and the Graphite monitoring."}),"\n",(0,o.jsx)(n.p,{children:"Finally, you can jump into the container with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker exec -it dev_rucio_1 /bin/bash\n"})}),"\n",(0,o.jsx)(n.p,{children:"To verify that everything is in order, you can now either run the full\nunit tests or only set up the database. Running the full testing suite\ntakes ~10 minutes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tools/run_tests.sh\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, you can bootstrap the test environment once with the\n",(0,o.jsx)(n.code,{children:"-i"}),"option and then selectively or repeatedly run test case\nmodules, test case groups, or even single test cases, for example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tools/run_tests.sh -i\npytest -v --full-trace lib/rucio/tests/test_replica.py\npytest -v --full-trace lib/rucio/tests/test_replica.py:TestReplicaCore\npytest -v --full-trace lib/rucio/tests/test_replica.py:TestReplicaCore.test_delete_replicas_from_datasets\n"})}),"\n",(0,o.jsx)(n.h2,{id:"using-the-environment-including-storage",children:"Using the environment including storage"}),"\n",(0,o.jsx)(n.p,{children:"Again run the containers using docker-compose:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose --file etc/docker/dev/docker-compose.yml --profile storage up -d\n"})}),"\n",(0,o.jsx)(n.p,{children:"This should show you a few more running containers: the Rucio server,\nthe PostgreSQL database, FTS and its associated MySQL database, the\nGraphite monitoring, and three XrootD storage servers."}),"\n",(0,o.jsxs)(n.p,{children:["With this container you can upload and download data to/from the storage\nand submit data transfers. To set this up, add the ",(0,o.jsx)(n.code,{children:"-r"}),"\noption to the setup."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tools/run_tests.sh -ir\n"})}),"\n",(0,o.jsx)(n.p,{children:"This creates a few random files and uploads them, creates a few datasets\nand containers, and requests a replication rule for the container, which\nstarts in state REPLICATING. To demonstrate the transfer capability, the\ndaemons can be run in single-execution mode in order:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rucio rule-info <rule-id>\n\nrucio-conveyor-submitter --run-once\nrucio-conveyor-poller --run-once  --older-than 0\nrucio-conveyor-finisher --run-once\n\nrucio rule-info <rule-id>\n"})}),"\n",(0,o.jsx)(n.p,{children:"On the second display of the rule, its state has cleared to OK."}),"\n",(0,o.jsx)(n.h2,{id:"using-the-environment-including-monitoring",children:"Using the environment including monitoring"}),"\n",(0,o.jsx)(n.p,{children:"Again run the containers using docker-compose:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose --file etc/docker/dev/docker-compose.yml --profile storage --profile monitoring up -d\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now you will have the same containers as before plus a full monitoring\nstack with Logstash, Elasticsearch, Kibana and Grafana."}),"\n",(0,o.jsx)(n.p,{children:"To create some events and write them to Elasticsearch first run again\nthe tests as before:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tools/run_tests.sh -ir\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then you will have to run the transfer daemons (conveyor-*) and\nmessaging daemon (hermes) to send the events to ActiveMQ. There a script\nfor that which repeats these daemons in single execution mode from the\nsection in a loop:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"run_daemons\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When all the daemons ran you will be able to find the events in Kibana.\nIf you run the docker environment on you local machine you can access\nKibana at ",(0,o.jsx)(n.code,{children:"<http://localhost:5601>"}),". The necessary index pattern will be\nadded automatically. There is also one dashboard available in Kibana. If\nit is running on remote machine you can SSH forward it:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"ssh -L 5601:127.0.0.1:5601 <hostname>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Additionally, there is also a Grafana server running with one simple\ndashboard. You can access it at ",(0,o.jsx)(n.code,{children:"<http://localhost:3000>"}),'. The default\ncredentials are "admin/admin". Also ActiveMQ web console can be\naccessed at ',(0,o.jsx)(n.code,{children:"<http://localhost:8161>"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If you would like to continously create some transfers and events there\nare scripts available for that. Open two different shells and in one\nrun:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"create_monit_data\n"})}),"\n",(0,o.jsx)(n.p,{children:"And in the other run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"run_daemons\n"})}),"\n",(0,o.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,o.jsx)(n.p,{children:"The idea for containerised development is that you use your host machine\nto edit the files, and test the changes within the container\nenvironment. On your host machine, you should be able to:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd ~/dev/rucio\nemacs <file>\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To see your changes in action the recommended way is to jump twice into\nthe container in parallel. One terminal to follow the output of the\nRucio server with a shortcut to tail the logfiles\n(",(0,o.jsx)(n.code,{children:"logshow"}),"), and one terminal to actually run interactive\ncommands:"]}),"\n",(0,o.jsx)(n.p,{children:'From your host, get a separate Terminal 1 (the Rucio "server log\nshow"):'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker exec -it dev_rucio_1 /bin/bash\nlogshow\n"})}),"\n",(0,o.jsx)(n.p,{children:'Terminal 1 can now be left open, and then from your host go into a new\nTerminal 2 (the "interactive" terminal):'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker exec -it dev_rucio_1 /bin/bash\nrucio whoami\n"})}),"\n",(0,o.jsx)(n.p,{children:"The command will output in Terminal 2, and at the same time the server\ndebug output will be shown in Terminal 1."}),"\n",(0,o.jsxs)(n.p,{children:["The same ",(0,o.jsx)(n.code,{children:"logshow"})," is also available in the FTS container:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker exec -it dev_fts_1 /bin/bash\nlogshow\n"})}),"\n",(0,o.jsx)(n.h2,{id:"development-tricks",children:"Development tricks"}),"\n",(0,o.jsx)(n.h3,{id:"server-changes",children:"Server changes"}),"\n",(0,o.jsxs)(n.p,{children:["If you edit server-side files, e.g. in ",(0,o.jsx)(n.code,{children:"lib/rucio/web"}),", and\nyour changes are not showing up then it is usually helpful to flush the\nmemcache and force the webserver to restart without having to restart\nthe container. Inside the container execute:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"echo 'flush_all' | nc localhost 11211 && httpd -k graceful**\n"})}),"\n",(0,o.jsx)(n.h3,{id:"database-access",children:"Database access"}),"\n",(0,o.jsxs)(n.p,{children:["The default database is PostgreSQL, and ",(0,o.jsx)(n.code,{children:"docker-compose"})," is\nconfigured to open its port to the host machine. Using your favourite\nSQL navigator, e.g., ",(0,o.jsx)(n.a,{href:"https://dbeaver.io",children:(0,o.jsx)(n.strong,{children:"DBeaver"})}),", you can connect to\nthe database using the default access on ",(0,o.jsx)(n.code,{children:"localhost:5432"})," to\ndatabase name ",(0,o.jsx)(n.code,{children:"rucio"}),", schema name ",(0,o.jsx)(n.code,{children:"dev"}),", with\nusername ",(0,o.jsx)(n.code,{children:"rucio"})," and password ",(0,o.jsx)(n.code,{children:"secret"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"docker-is-eating-my-disk-space",children:"Docker is eating my disk space"}),"\n",(0,o.jsx)(n.p,{children:"You can reclaim this with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker system prune -f --volumes\n"})}),"\n",(0,o.jsx)(n.h3,{id:"where-do-i-find-the-dockerfile",children:"Where do I find the Dockerfile"}),"\n",(0,o.jsxs)(n.p,{children:["This container can be found on Dockerhub as\n",(0,o.jsx)(n.code,{children:"rucio/rucio-dev"}),", and the corresponding\n",(0,o.jsx)(n.a,{href:"https://github.com/rucio/containers/tree/master/dev",children:(0,o.jsx)(n.strong,{children:"Dockerfile"})})," is\nalso available. It provides a Rucio environment which allows you to\nmount your local code in the containers ",(0,o.jsx)(n.code,{children:"bin"}),",\n",(0,o.jsx)(n.code,{children:"lib"}),", and ",(0,o.jsx)(n.code,{children:"tools"})," directory. The container is\nset up to run against a PostgreSQL database with fsync and most\ndurability features for the WAL disabled to improve testing IO\nthroughput. Tests and checks can be run against the development code\nwithout having to rebuild the container."]}),"\n",(0,o.jsx)(n.h3,{id:"i-need-a-docker-based-on-another-branch-not-ruciomaster",children:"I need a Docker based on another branch! (not rucio/master)"}),"\n",(0,o.jsx)(n.p,{children:"In such cases, you can download the Rucio container files and e.g. choose\nto modify the dev container before build:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd /opt\nsudo git clone https://github.com/rucio/containers\ncd ../containers/dev\n"})}),"\n",(0,o.jsx)(n.p,{children:"Change anything you need, e.g. the code branch cloned to your docker\ncontainer:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# from\nRUN git clone https://github.com/rucio/rucio.git /tmp/rucio\n# to e.g.:\nRUN git clone --single-branch --branch next https://github.com/rucio/rucio.git /tmp/rucio\n#build your docker\nsudo docker build -t rucio/rucio-dev\n"})}),"\n",(0,o.jsx)(n.p,{children:"Compose as usual using docker-compose:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd /opt/rucio\nsudo docker-compose --file etc/docker/dev/docker-compose.yml up -d\n"})}),"\n",(0,o.jsx)(n.p,{children:"Start the daemons"}),"\n",(0,o.jsx)(n.p,{children:"Daemons are not running in the docker environment, but all daemons\nsupport single-execution mode with the --run-once argument. Reset the\nsystem first with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"tools/run_tests.sh -ir\n"})}),"\n",(0,o.jsx)(n.p,{children:"Some files are created. Let's add them to a new dataset:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rucio add-dataset test:mynewdataset\nrucio attach test:mynewdataset test:file1 test:file2 test:file3 test:file4\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you run the command below, the files are not in the RSE XRD3, but\nonly in XRD1 and 2.:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ **rucio list-file-replicas test:mynewdataset**\n+-------+-------+-----------+----------+-----------------------------------+\n| SCOPE | NAME  | FILESIZE  | ADLER32  | RSE: REPLICA                      |\n|-------|-------|-----------|----------|-----------------------------------|\n| test  | file1 | 10.486 MB | 141a641e | XRD1: root://xrd1:1094//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD1: root://xrd1:1094//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD2: root://xrd2:1095//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD2: root://xrd2:1095//rucio/... |\n+-------+-------+-----------+----------+-----------------------------------+\n"})}),"\n",(0,o.jsx)(n.p,{children:"So let's add a new rule on our new dataset to oblige Rucio to create\nreplicas also on XRD3:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rucio add-rule test:mynewdataset 1 XRD3**\n1aadd685d891400dba050ad43e71fea9**\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now we can check the status of the rule. We will see there are 4 files\nin ",(0,o.jsx)(n.code,{children:"Replicating"})," state:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rucio rule-info 1aadd685d891400dba050ad43e71fea9|grep Locks**\nLocks OK/REPLICATING/STUCK: 0/4/0**\n"})}),"\n",(0,o.jsx)(n.p,{children:"Now we can run the daemons. First the rule evaluation daemon\n(judge-evaluator) will pick up our rule. Then the transfer submitter\ndaemon (conveyor-submitter) will send the newly created transfers\nrequests to the FTS server. After that, the transfer state check daemon\n(conveyor-poller) will retrieve from FTS the transfer state information.\nFinally, the transfer sign-off daemon (conveyor-finisher) updates the\ninternal state of the Rucio catalogue to reflect the changes.:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rucio-judge-evaluator --run-once**\nrucio-conveyor-submitter --run-once**\nrucio-conveyor-poller --run-once**\nrucio-conveyor-finisher --run-once**\n"})}),"\n",(0,o.jsx)(n.p,{children:"If we see the state of the rule now, we see the locks are OK:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"rucio rule-info 1aadd685d891400dba050ad43e71fea9|grep Locks\nLocks OK/REPLICATING/STUCK: 4/0/0**\n"})}),"\n",(0,o.jsx)(n.p,{children:"And if we look at the replicas of the dataset, we see the there are\nreplicas of the files also in XRD3:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"$ rucio list-file-replicas test:mynewdataset\n+-------+-------+-----------+----------+-----------------------------------+\n| SCOPE | NAME  | FILESIZE  | ADLER32  | RSE: REPLICA                      |\n|-------|-------|-----------|----------|-----------------------------------|\n| test  | file1 | 10.486 MB | 141a641e | XRD3: root://xrd3:1096//rucio/... |\n| test  | file1 | 10.486 MB | 141a641e | XRD1: root://xrd1:1094//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD3: root://xrd3:1096//rucio/... |\n| test  | file2 | 10.486 MB | fdfa7eea | XRD1: root://xrd1:1094//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD2: root://xrd2:1095//rucio/... |\n| test  | file3 | 10.486 MB | c669167d | XRD3: root://xrd3:1096//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD2: root://xrd2:1095//rucio/... |\n| test  | file4 | 10.486 MB | 65786e49 | XRD3: root://xrd3:1096//rucio/... |\n+-------+-------+-----------+----------+-----------------------------------+\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var o=t(96540);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);