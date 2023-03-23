"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},l=void 0,u={unversionedId:"contributing",id:"contributing",title:"Contributing Guide",description:"Thank you for participating",source:"@site/../docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/documentation/contributing",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/contributing.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1679578641,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},sidebar:"docs",previous:{title:"Setting up a Rucio Developer environment using IntelliJ Ultimate",permalink:"/documentation/setting_up_intellij_dev_env"},next:{title:"Rest Api Documentation",permalink:"/documentation/rest_api_doc"}},p={},c=[{value:"Thank you for participating",id:"thank-you-for-participating",level:2},{value:"What should I know before I get started",id:"what-should-i-know-before-i-get-started",level:2},{value:"How can I Contribute",id:"how-can-i-contribute",level:2},{value:"1. Prerequisite",id:"1-prerequisite",level:3},{value:"2. Create an Issue",id:"2-create-an-issue",level:3},{value:"3. Create a local working branch",id:"3-create-a-local-working-branch",level:3},{value:"4. Commit your changes",id:"4-commit-your-changes",level:3},{value:"5. Push changes and create a Pull Request",id:"5-push-changes-and-create-a-pull-request",level:3},{value:"6. Watch the Pull Request for reviews",id:"6-watch-the-pull-request-for-reviews",level:3},{value:"Automatic Testing",id:"automatic-testing",level:2},{value:"Local automatic testing",id:"local-automatic-testing",level:3},{value:"Human Review",id:"human-review",level:2},{value:"Coding Style",id:"coding-style",level:2}],m={toc:c},h="wrapper";function d(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)(h,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"thank-you-for-participating"},"Thank you for participating"),(0,i.kt)("p",null,"The following is a set of rules for contributing to ",(0,i.kt)("strong",{parentName:"p"},"Rucio")," and its\npackages. Use your best judgment, and feel free to propose changes to this\ndocument."),(0,i.kt)("p",null,"If you have questions, you can reach the core development team on our\n",(0,i.kt)("a",{parentName:"p",href:"https://rucio.slack.com/"},(0,i.kt)("strong",{parentName:"a"},"Slack"))," channel, or send an email to our\ndevelopment mailing list ",(0,i.kt)("a",{parentName:"p",href:"mailto:rucio-dev@cern.ch"},(0,i.kt)("strong",{parentName:"a"},"rucio-dev@cern.ch")),"."),(0,i.kt)("h2",{id:"what-should-i-know-before-i-get-started"},"What should I know before I get started"),(0,i.kt)("p",null,"A contribution can be either be a ",(0,i.kt)("strong",{parentName:"p"},"patch")," or ",(0,i.kt)("strong",{parentName:"p"},"feature"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Patches")," include bugfixes and minor changes to the code and are included in\npatch releases usually made on a bi-weekly schedule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Features")," include major developments or potentially disruptive changes and\nare included in feature releases made multiple times a year.")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},(0,i.kt)("strong",{parentName:"a"},"repository"))," consists of different\nbranches:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"master")," branch includes the development for the next major version."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("strong",{parentName:"li"},"release-\u2026")," branches include the patch/minor development of the\nreleases.")),(0,i.kt)("p",null,"Release branches only exist for the currently maintained release\nversions. Hotfix branches are created on demand. Please communicate to the Rucio\nmaintainers, if you wish to hotfix a previous release."),(0,i.kt)("p",null,"Generally all ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/pulls"},(0,i.kt)("strong",{parentName:"a"},"pull requests"))," are to\nbe created against the Rucio ",(0,i.kt)("strong",{parentName:"p"},"master")," branch. Features will end up in the\nupstream ",(0,i.kt)("strong",{parentName:"p"},"master")," only and patches are cherry-picked to the maintained\nreleases if applicable. Release-specific changes are excluded from that rule and\nmight be needed if e.g. cherry-picking to the last release was not successful."),(0,i.kt)("p",null,"The following figure might help you with an overview:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Branching Strategy Graph",src:n(92254).Z,width:"855",height:"519"})),(0,i.kt)("h2",{id:"how-can-i-contribute"},"How can I Contribute"),(0,i.kt)("h3",{id:"1-prerequisite"},"1. Prerequisite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ensure you add your name (and organisation) to our ",(0,i.kt)("a",{parentName:"p",href:"/documentation/about_our_contributors"},(0,i.kt)("strong",{parentName:"a"},"list of\ncontributors")),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fork the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},(0,i.kt)("strong",{parentName:"a"},"repository"))," on\nGithub.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Clone the repository to your development machine and configure it:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/<YOUR_USER>/rucio/\ncd rucio\ngit remote add upstream https://github.com/rucio/rucio.git\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional: Install Git Hooks")),(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare-commit-msg")," hook can be installed by executing the script:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./tools/configure_git.sh\n")),(0,i.kt)("p",{parentName:"li"},"Also, the ",(0,i.kt)("a",{parentName:"p",href:"https://pre-commit.com/"},(0,i.kt)("inlineCode",{parentName:"a"},"pre-commit")," python")," package is configured\nfor this repository. The ",(0,i.kt)("inlineCode",{parentName:"p"},"pre-commit")," hook checks the syntax and format of the\nfiles before commiting. This saves time in the development process, since\nminor errors are noticed before submission."),(0,i.kt)("p",{parentName:"li"},"To install the package and activate the hooks for the project:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pre-commit\npre-commit install\n")),(0,i.kt)("p",{parentName:"li"},"If you only want to run the hooks on a push, run:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pre-commit install --hook-type pre-push\n")),(0,i.kt)("p",{parentName:"li"},"More information:\n",(0,i.kt)("a",{parentName:"p",href:"https://pre-commit.com/#confining-hooks-to-run-at-certain-stages"},"https://pre-commit.com/#confining-hooks-to-run-at-certain-stages")))),(0,i.kt)("h3",{id:"2-create-an-issue"},"2. Create an Issue"),(0,i.kt)("p",null,"Please ensure that an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/issues/new"},(0,i.kt)("strong",{parentName:"a"},"issue")),"\nexists before submitting your contribution as a pull request. The issue should\ncontain the motivation, modification and expected results (discussions usually\nhappen there). No pull request will be merged without an associated issue\n(release notes are generated from issues). Each issue gets a ",(0,i.kt)("strong",{parentName:"p"},"unique issue\nnumber"),"."),(0,i.kt)("h3",{id:"3-create-a-local-working-branch"},"3. Create a local working branch"),(0,i.kt)("p",null,"Create a local branch that corresponds to the issue. To easily\nidentify the purpose of branches different keywords must be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Patch branches must be named ",(0,i.kt)("strong",{parentName:"li"},"patch-","[issue number]","-","[short description]")),(0,i.kt)("li",{parentName:"ul"},"Feature branches must be named ",(0,i.kt)("strong",{parentName:"li"},"feature-","[issue number]","-","[short description]"))),(0,i.kt)("p",null,"If you create these branches by hand please check the spelling because otherwise\nthe test automation might misidentify your branch. There are utility scripts to\nfetch master and create these branches for you:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./tools/create-patch-branch <unique issue number> '<short_change_message>'\n./tools/create-feature-branch <unique issue number> '<short_change_message>'\n")),(0,i.kt)("h3",{id:"4-commit-your-changes"},"4. Commit your changes"),(0,i.kt)("p",null,"Commit your change. The commit command must include a specific message format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "<component>: <change_message> #<issue number>"\n')),(0,i.kt)("p",null,"Valid component names are listed in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/labels"},(0,i.kt)("strong",{parentName:"a"},"label\nlist"))," and are usually specified on the\nissue of the change."),(0,i.kt)("p",null,"Add additional explanations to the body of the commit, such as motivation for\ncertain decisions and background information. Here are some general rules:\n",(0,i.kt)("a",{parentName:"p",href:"https://cbea.ms/git-commit/"},"https://cbea.ms/git-commit/"),"."),(0,i.kt)("p",null,"If you add a ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/articles/closing-issues-using-keywords/"},(0,i.kt)("strong",{parentName:"a"},"github-recognised\nkeyword"))," then\nthe associated issue can be closed automatically once the pull request is\nmerged, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<component>: <change_message> Fix #<issue number>\n")),(0,i.kt)("p",null,"Using multiple commits is allowed as long as they achieve an independent,\nwell-defined, change and are well-described. Otherwise multiple commits should\nbe squashed."),(0,i.kt)("h3",{id:"5-push-changes-and-create-a-pull-request"},"5. Push changes and create a Pull Request"),(0,i.kt)("p",null,"Push the commit to your forked repository and create the pull request. Try to\nkeep the Pull Request simple, it should achieve the single objective described\nin the issue. Multiple enhancements/fixes should be split into multiple Pull\nRequests."),(0,i.kt)("p",null,"While using the ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request/"},(0,i.kt)("strong",{parentName:"a"},"github\ninterface"))," is the\ndefault interface to create pull requests, you could also use GitHub\u2019s\ncommand-line wrapper ",(0,i.kt)("a",{parentName:"p",href:"https://hub.github.com"},(0,i.kt)("strong",{parentName:"a"},"hub"))," or the ",(0,i.kt)("a",{parentName:"p",href:"https://cli.github.com/"},(0,i.kt)("strong",{parentName:"a"},"GitHub\nCLI")),"."),(0,i.kt)("p",null,"The format of the pull request title must be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"<component>: <short_change_message> #<issue number>\n")),(0,i.kt)("h3",{id:"6-watch-the-pull-request-for-reviews"},"6. Watch the Pull Request for reviews"),(0,i.kt)("p",null,"Watch the pull request for comments and reviews. For any pull requests update,\nplease try to squash/amend your commits to avoid \u201cin-between\u201d commits."),(0,i.kt)("h2",{id:"automatic-testing"},"Automatic Testing"),(0,i.kt)("p",null,"Every submitted pull request will automatically be run through automated testing\nthrough continuous integration. You should see the status of these tests on your\npull request."),(0,i.kt)("h3",{id:"local-automatic-testing"},"Local automatic testing"),(0,i.kt)("p",null,"There is also a local shell script to run the same autotests:\n",(0,i.kt)("inlineCode",{parentName:"p"},"tools/run_autotests.sh"),". For manual local testing within containers, please see\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/etc/docker/dev/README.rst"},(0,i.kt)("strong",{parentName:"a"},"the docker\nREADME")),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WARNING:")," Because of the nature of using the same scripts as continuous\nintegration, some containers may be left running after a test run or when\naborting the test run. This is especially the case for running this script\nwithout podman."),(0,i.kt)("p",null,"By default the tool uses 3 worker processes to run all tests that are defined in\n",(0,i.kt)("inlineCode",{parentName:"p"},"etc/docker/test/matrix.yml"),". Feel free to modify the matrix to your needs, but\nbe sure to not unintentionally commit your changes to it. The tests run at most\n6 hours - after that a TimeoutError will be raised, causing the script to\nfail. Running the autotests like this can be parameterized with environment\nvariables as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"USE_PODMAN")," 0/1 (default: depends on whether the docker command points to\npodman)"),(0,i.kt)("p",{parentName:"li"},"  Use podman and therefore pods to run the tests.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS")," 0/1 (default: 1)"),(0,i.kt)("p",{parentName:"li"},"  1 enables multiple processes to run autotests and 0 disables it.  When\nenabled, logs of the running autotests will be written to the ",(0,i.kt)("inlineCode",{parentName:"p"},".autotest"),"\ndirectory created in the working directory. Otherwise the log output will be\nwritten to the console (stderr)."),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("em",{parentName:"p"},"Note that when tests are not running in parallel mode, the test run will\nalways fail fast."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS_PROCNUM")," (1,) (default: 3)"),(0,i.kt)("p",{parentName:"li"},"  Specifies the number of processes to run and therefor the concurrently run\nautotests. 3 will usually result in more than 8 GB RAM usage and a fair\namount of load on the PC.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS_FAILFAST")," 0/1 (default: 0)"),(0,i.kt)("p",{parentName:"li"},"  Will abort the parallel run of autotests as soon as possible after at least\none autotest failed. Enabling this will leave containers running in case of\na failure even on podman.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"COPY_AUTOTEST_LOGS")," 0/1 (default: 0)"),(0,i.kt)("p",{parentName:"li"},"  Copies ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/log")," from the rucio container into the ",(0,i.kt)("inlineCode",{parentName:"p"},".autotest")," directory\nafter the test run. Each test case will have it\u2019s specific naming as with\nthe logs from the parallel run above."))),(0,i.kt)("h2",{id:"human-review"},"Human Review"),(0,i.kt)("p",null,"Anyone is welcome to review merge requests and make comments!"),(0,i.kt)("p",null,"The Rucio development team can approve, request changes, or close pull\nrequests. Merging of approved pull requests is done by the Rucio development\nlead."),(0,i.kt)("h2",{id:"coding-style"},"Coding Style"),(0,i.kt)("p",null,"We use flake8 and pylint to sanitize our code. Please do the same before\nsubmitting a pull request."))}d.isMDXComponent=!0},92254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/branching_strategy-45fbbc81b218298d5c1cf6b0128672b5.svg"}}]);