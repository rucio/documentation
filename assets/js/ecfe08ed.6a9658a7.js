(window.webpackJsonp=window.webpackJsonp||[]).push([[242],{315:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(342)),o={id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},s={unversionedId:"contributing",id:"contributing",isDocsHomePage:!1,title:"Contributing Guide",description:"* Thank you for participating!",source:"@site/../docs/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/documentation/contributing",version:"current",lastUpdatedBy:"Benedikt Ziemons",lastUpdatedAt:1619771730,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"Contributing Guide",frontMatter:{id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},sidebar:"docs",previous:{title:"Configure Rucio To Use Globus Online as a Transfer Tool",permalink:"/documentation/configure-rucio-globus"},next:{title:"Policy packages",permalink:"/documentation/policy-packages"}},c=[{value:"Getting started",id:"getting-started",children:[]},{value:"Git Hooks",id:"git-hooks",children:[]},{value:"Contributing",id:"contributing",children:[]},{value:"Automatic Testing",id:"automatic-testing",children:[]},{value:"Human Review",id:"human-review",children:[]},{value:"Coding Style",id:"coding-style",children:[]}],l={toc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Thank you for participating!")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Please ensure that an ",Object(i.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/new"},Object(i.b)("strong",{parentName:"a"},"issue"))," exists before submitting your contribution as a pull request.")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The issue should contain the motivation, modification and expected results (discussions usually happen there).")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"No pull request will be merged without an associated issue (release notes are generated from issues).")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Ensure you add your name (and organisation) to our ",Object(i.b)("a",{parentName:"li",href:"about-our-contributors"},Object(i.b)("strong",{parentName:"a"},"list of contributors")),".")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you have questions, you can reach the core development team on our ",Object(i.b)("a",{parentName:"li",href:"https://rucio.slack.com/"},Object(i.b)("strong",{parentName:"a"},"Slack"))," channel, or send an email to our development mailing list ",Object(i.b)("a",{parentName:"li",href:"mailto:rucio-dev@cern.ch"},Object(i.b)("strong",{parentName:"a"},"rucio-dev@cern.ch")),".")),Object(i.b)("p",null,"A contribution can be either be a ",Object(i.b)("strong",{parentName:"p"},"patch"),", ",Object(i.b)("strong",{parentName:"p"},"feature"),", or ",Object(i.b)("strong",{parentName:"p"},"hotfix"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* **Patches** include bugfixes and minor changes to the code and are included in patch releases usually made on a bi-weekly schedule.\n\n\n* **Features** include major developments or potentially disruptive changes and are included in feature releases made multiple times a year.\n\n\n* **Hotfix** are specific patch releases happening due to the necessity of important fixes.\n")),Object(i.b)("p",null,"The ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},Object(i.b)("strong",{parentName:"a"},"repository")),"  consists of different branches:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"* the **master** branch includes the development for the next major version.\n\n\n* the **release-\u2026** branches include the patch/minor development of the releases.\n\n\n* the **hotfix-\u2026** branches include the patches for hotfix releases.\n")),Object(i.b)("p",null,"On release day both master and the related release branch are essentially the same. Release branches only exist for the currently maintained release versions. Hotfix branches are created on demand. Please communicate to the Rucio maintainers, if you wish to hotfix a previous release."),Object(i.b)("p",null,"Generally all ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/pulls"},Object(i.b)("strong",{parentName:"a"},"pull requests"))," are to be created against the Rucio ",Object(i.b)("strong",{parentName:"p"},"master")," branch. Features will end up in the upstream ",Object(i.b)("strong",{parentName:"p"},"master")," only and patches are cherry-picked to the maintained releases if applicable. Release-specific changes are excluded from that rule and might be needed if e.g. cherry-picking to the last release was not successful."),Object(i.b)("p",null,"The following figure might help you with an overview:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Branching Strategy Graph",src:n(418).default})),Object(i.b)("h2",{id:"getting-started"},"Getting started"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1"),": Fork the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/"},Object(i.b)("strong",{parentName:"a"},"repository"))," on Github."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2"),": Clone the repository to your development machine and configure it:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/<YOUR_USER>/rucio/\n$ cd rucio\n$ git remote add upstream https://github.com/rucio/rucio.git\n")),Object(i.b)("h2",{id:"git-hooks"},"Git Hooks"),Object(i.b)("p",null,"Some git hooks (pre-commit, prepare-commit-msg) can be installed by executing the script:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ ./tools/configure_git.sh\n")),Object(i.b)("h2",{id:"contributing"},"Contributing"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 1"),": If not exist, create an ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/issues/new"},Object(i.b)("strong",{parentName:"a"},"issue"))," with the description of the contribution (motivation, modification and expected results). Every issue will get a ",Object(i.b)("strong",{parentName:"p"},"unique issue number"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 2"),": Create a local branch that corresponds to the issue. To easily identify the purpose of branches different keywords must be used:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Patch branches must be named ",Object(i.b)("strong",{parentName:"li"},"patch-","[issue number]","-","[short description]"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Feature branches must be named ",Object(i.b)("strong",{parentName:"li"},"feature-","[issue number]","-","[short description]"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hotfix branches must be named ",Object(i.b)("strong",{parentName:"li"},"hotfix-","[issue number]","-","[short description]"))),Object(i.b)("p",null,"If you create these branches by hand please check the spelling because otherwise the test automation might misidentify your branch. There are utility scripts to fetch master and create these branches for you:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ ./tools/create-patch-branch <unique issue number> '<short_change_message>'\n$ ./tools/create-feature-branch <unique issue number> '<short_change_message>'\n$ ./tools/create-hotfix-branch <release tag/release branch> <unique issue number> '<short_change_message>'\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 3"),": Commit your change. The commit command must include a specific message format:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},'$ git commit -m "<component>: <change_message> #<issue number>"\n')),Object(i.b)("p",null,"Valid component names are listed in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/labels"},Object(i.b)("strong",{parentName:"a"},"label list"))," and are usually specified on the issue of the change."),Object(i.b)("p",null,"If you use the default commit message template, make sure you edit it."),Object(i.b)("p",null,"If you add a ",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/articles/closing-issues-using-keywords/"},Object(i.b)("strong",{parentName:"a"},"github-recognised keyword"))," then the associated issue can be closed automatically once the pull request is merged, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"<component>: <change_message> Fix #<issue number>\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 4"),": Push the commit to your forked repository and create the pull request."),Object(i.b)("p",null,"While using the ",Object(i.b)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-pull-request/"},Object(i.b)("strong",{parentName:"a"},"github interface"))," is the default interface to create pull requests, you could also use GitHub\u2019s command-line wrapper ",Object(i.b)("a",{parentName:"p",href:"https://hub.github.com"},Object(i.b)("strong",{parentName:"a"},"hub"))," or the ",Object(i.b)("a",{parentName:"p",href:"https://cli.github.com/"},Object(i.b)("strong",{parentName:"a"},"GitHub CLI")),"."),Object(i.b)("p",null,"The format of the pull request title must be:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"<component>: <short_change_message> #<issue number>\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Step 5"),": Watch the pull request for comments and reviews. For any pull requests update, please try to squash/amend your commits to avoid \u201cin-between\u201d commits."),Object(i.b)("h2",{id:"automatic-testing"},"Automatic Testing"),Object(i.b)("p",null,"Every submitted pull request will automatically be run through automated testing through continuous integration. You should see the status of these tests on your pull request."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Local automatic testing")),Object(i.b)("p",null,"There is also a local shell script to run the same autotests: ",Object(i.b)("inlineCode",{parentName:"p"},"tools/run_autotests.sh"),". For manual local testing within containers, please see ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/etc/docker/dev/README.rst"},Object(i.b)("strong",{parentName:"a"},"the docker README")),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"WARNING:")," Because of the nature of using the same scripts as continuous integration, some containers may be left running after a test run or when aborting the test run. This is especially the case for running this script without podman."),Object(i.b)("p",null,"By default the tool uses 3 worker processes to run all tests that are defined in ",Object(i.b)("inlineCode",{parentName:"p"},"etc/docker/test/matrix.yml"),". Feel free to modify the matrix to your needs, but be sure to not unintentionally commit your changes to it. The tests run at most 6 hours - after that a TimeoutError will be raised, causing the script to fail. Running the autotests like this can be parameterized with environment variables as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"USE_PODMAN")," 0/1 (default: depends on whether the docker command points to podman)"),Object(i.b)("p",{parentName:"li"},"  Use podman and therefore pods to run the tests."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS")," 0/1 (default: 1)"),Object(i.b)("p",{parentName:"li"},"  1 enables multiple processes to run autotests and 0 disables it.\nWhen enabled, logs of the running autotests will be written to the ",Object(i.b)("inlineCode",{parentName:"p"},".autotest")," directory created in the working directory. Otherwise the log output will be written to the console (stderr)."),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("em",{parentName:"p"},"Note that when tests are not running in parallel mode, the test run will always fail fast.")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS_PROCNUM")," (1,) (default: 3)"),Object(i.b)("p",{parentName:"li"},"  Specifies the number of processes to run and therefor the concurrently run autotests. 3 will usually result in more than 8 GB RAM usage and a fair amount of load on the PC."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"PARALLEL_AUTOTESTS_FAILFAST")," 0/1 (default: 0)"),Object(i.b)("p",{parentName:"li"},"  Will abort the parallel run of autotests as soon as possible after at least one autotest failed. Enabling this will leave containers running in case of a failure even on podman."))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"COPY_AUTOTEST_LOGS")," 0/1 (default: 0)"),Object(i.b)("p",{parentName:"li"},"  Copies ",Object(i.b)("inlineCode",{parentName:"p"},"/var/log")," from the rucio container into the ",Object(i.b)("inlineCode",{parentName:"p"},".autotest")," directory after the test run. Each test case will have it\u2019s specific naming as with the logs from the parallel run above."))),Object(i.b)("h2",{id:"human-review"},"Human Review"),Object(i.b)("p",null,"Anyone is welcome to review merge requests and make comments!"),Object(i.b)("p",null,"The Rucio development team can approve, request changes, or close pull requests. Merging of approved pull requests is done by the Rucio development lead."),Object(i.b)("h2",{id:"coding-style"},"Coding Style"),Object(i.b)("p",null,"We use flake8 and pylint to sanitize our code. Please do the same before submitting a pull request."))}u.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,h=b["".concat(o,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},418:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/branching_strategy-45fbbc81b218298d5c1cf6b0128672b5.svg"}}]);