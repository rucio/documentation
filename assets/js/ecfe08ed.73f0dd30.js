"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1987],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}},50004:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/branching_strategy-45fbbc81b218298d5c1cf6b0128672b5.svg"},98649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"contributing","title":"Contributing Guide","description":"Thank you for participating","source":"@site/../docs/contributing.md","sourceDirName":".","slug":"/contributing","permalink":"/documentation/contributing","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/contributing.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1742285529000,"frontMatter":{"id":"contributing","title":"Contributing Guide","sidebar_label":"Contributing Guide"},"sidebar":"docs","previous":{"title":"Setting up a Rucio Developer environment using Visual Studio Code","permalink":"/documentation/developer/setting_up_vscode_dev_env"},"next":{"title":"Dependency management","permalink":"/documentation/developer/dependency_management"}}');var i=t(74848),r=t(28453);const o={id:"contributing",title:"Contributing Guide",sidebar_label:"Contributing Guide"},a=void 0,l={},c=[{value:"Thank you for participating",id:"thank-you-for-participating",level:2},{value:"What should I know before I get started",id:"what-should-i-know-before-i-get-started",level:2},{value:"How can I Contribute",id:"how-can-i-contribute",level:2},{value:"1. Prerequisite",id:"1-prerequisite",level:3},{value:"2. Create an Issue",id:"2-create-an-issue",level:3},{value:"3. Create a local working branch",id:"3-create-a-local-working-branch",level:3},{value:"4. Commit your changes",id:"4-commit-your-changes",level:3},{value:"5. Push changes and create a Pull Request",id:"5-push-changes-and-create-a-pull-request",level:3},{value:"6. Watch the Pull Request for reviews",id:"6-watch-the-pull-request-for-reviews",level:3},{value:"Automatic Testing",id:"automatic-testing",level:2},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Local automatic testing",id:"local-automatic-testing",level:3},{value:"Human Review",id:"human-review",level:2},{value:"Coding Style",id:"coding-style",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"thank-you-for-participating",children:"Thank you for participating"}),"\n",(0,i.jsxs)(n.p,{children:["The following is a set of rules for contributing to ",(0,i.jsx)(n.strong,{children:"Rucio"})," and its\npackages. Use your best judgment, and feel free to propose changes to this\ndocument."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have questions, you can reach the core development team on our\n",(0,i.jsx)(n.a,{href:"/documentation/join_rucio_mattermost",children:(0,i.jsx)(n.strong,{children:"Mattermost"})})," channel, or send an email to our\ndevelopment mailing list ",(0,i.jsx)(n.a,{href:"mailto:rucio-dev@cern.ch",children:(0,i.jsx)(n.strong,{children:"rucio-dev@cern.ch"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"what-should-i-know-before-i-get-started",children:"What should I know before I get started"}),"\n",(0,i.jsxs)(n.p,{children:["A contribution can be either be a ",(0,i.jsx)(n.strong,{children:"patch"})," or ",(0,i.jsx)(n.strong,{children:"feature"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Patches"})," include bugfixes and minor changes to the code and are included in\npatches that are usually released every two weeks."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Features"})," include major developments or potentially disruptive changes and\nare included in feature releases made multiple times a year."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/",children:(0,i.jsx)(n.strong,{children:"repository"})})," consists of different\nbranches:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.strong,{children:"master"})," branch includes the development for the next major version."]}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.strong,{children:"release-\u2026"})," branches include the patch/minor development of the\nreleases."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Release branches only exist for the currently maintained release\nversions. Hotfix branches are created on demand. Please communicate to the Rucio\nmaintainers, if you wish to hotfix a previous release."}),"\n",(0,i.jsxs)(n.p,{children:["Generally all ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/pulls",children:(0,i.jsx)(n.strong,{children:"pull requests"})})," are to\nbe created against the Rucio ",(0,i.jsx)(n.strong,{children:"master"})," branch. Features will end up in the\nupstream ",(0,i.jsx)(n.strong,{children:"master"})," only and patches are cherry-picked to the maintained\nreleases if applicable. Release-specific changes are excluded from that rule and\nmight be needed if e.g. cherry-picking to the last release was not successful."]}),"\n",(0,i.jsx)(n.p,{children:"The following figure might help you with an overview:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Branching Strategy Graph",src:t(50004).A+"",width:"855",height:"519"})}),"\n",(0,i.jsx)(n.h2,{id:"how-can-i-contribute",children:"How can I Contribute"}),"\n",(0,i.jsx)(n.h3,{id:"1-prerequisite",children:"1. Prerequisite"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Ensure you add your name (and organisation) to our list of ",(0,i.jsx)(n.a,{href:"/documentation/about_our_contributors",children:(0,i.jsx)(n.strong,{children:"contributors"})}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fork the ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/",children:(0,i.jsx)(n.strong,{children:"repository"})})," on\nGithub."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Clone the repository to your development machine and configure it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/<YOUR_USER>/rucio/\ncd rucio\ngit remote add upstream https://github.com/rucio/rucio.git\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Optional: Install Git Hooks"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"prepare-commit-msg"})," hook can be installed by executing the script:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./tools/configure_git.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Also, the ",(0,i.jsxs)(n.a,{href:"https://pre-commit.com/",children:[(0,i.jsx)(n.code,{children:"pre-commit"})," python"]})," package is configured\nfor this repository. The ",(0,i.jsx)(n.code,{children:"pre-commit"})," hook checks the syntax and format of the\nfiles before committing. This saves time in the development process, since\nminor errors are noticed before submission."]}),"\n",(0,i.jsx)(n.p,{children:"To install the package and activate the hooks for the project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install pre-commit\npre-commit install\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you only want to run the hooks on a push, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pre-commit install --hook-type pre-push\n"})}),"\n",(0,i.jsxs)(n.p,{children:["More information ",(0,i.jsx)(n.a,{href:"https://pre-commit.com/#confining-hooks-to-run-at-certain-stages",children:"please view the pre-commit documentation"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"2-create-an-issue",children:"2. Create an Issue"}),"\n",(0,i.jsxs)(n.p,{children:["Please ensure that an ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/issues/new",children:(0,i.jsx)(n.strong,{children:"issue"})}),"\nexists before submitting your contribution as a pull request. The issue should\ncontain the motivation, modification and expected results (discussions usually\nhappen there). No pull request will be merged without an associated issue\n(release notes are generated from issues). Each issue gets a ",(0,i.jsx)(n.strong,{children:"unique issue\nnumber"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"3-create-a-local-working-branch",children:"3. Create a local working branch"}),"\n",(0,i.jsx)(n.p,{children:"Create a local branch that corresponds to the issue. To easily\nidentify the purpose of branches different keywords must be used:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Patch branches must be named ",(0,i.jsx)(n.strong,{children:"patch-[issue number]-[short description]"})]}),"\n",(0,i.jsxs)(n.li,{children:["Feature branches must be named ",(0,i.jsx)(n.strong,{children:"feature-[issue number]-[short description]"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If you create these branches by hand please check the spelling because otherwise\nthe test automation might misidentify your branch. There are utility scripts to\nfetch master and create these branches for you:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./tools/create-patch-branch <unique issue number> '<short_change_message>'\n./tools/create-feature-branch <unique issue number> '<short_change_message>'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"4-commit-your-changes",children:"4. Commit your changes"}),"\n",(0,i.jsx)(n.p,{children:"Commit your change. The commit command must include a specific message format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git commit -m "<component>: <change_message> #<issue number>"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Valid component names are listed in the ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/labels",children:(0,i.jsx)(n.strong,{children:"label\nlist"})})," and are usually specified on the\nissue of the change."]}),"\n",(0,i.jsxs)(n.p,{children:["Add additional explanations to the body of the commit, such as motivation for\ncertain decisions and background information. ",(0,i.jsx)(n.a,{href:"https://cbea.ms/git-commit/",children:"Here are some general rules."}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you add a ",(0,i.jsx)(n.a,{href:"https://help.github.com/articles/closing-issues-using-keywords/",children:(0,i.jsx)(n.strong,{children:"github-recognised\nkeyword"})})," then\nthe associated issue can be closed automatically once the pull request is\nmerged, e.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"<component>: <change_message> Fix #<issue number>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Using multiple commits is allowed as long as they achieve an independent,\nwell-defined, change and are well-described. Otherwise multiple commits should\nbe squashed."}),"\n",(0,i.jsx)(n.h3,{id:"5-push-changes-and-create-a-pull-request",children:"5. Push changes and create a Pull Request"}),"\n",(0,i.jsx)(n.p,{children:"Push the commit to your forked repository and create the pull request. Try to\nkeep the Pull Request simple, it should achieve the single objective described\nin the issue. Multiple enhancements/fixes should be split into multiple Pull\nRequests."}),"\n",(0,i.jsxs)(n.p,{children:["While using the ",(0,i.jsx)(n.a,{href:"https://help.github.com/articles/creating-a-pull-request/",children:(0,i.jsx)(n.strong,{children:"github\ninterface"})})," is the\ndefault interface to create pull requests, you could also use GitHub\u2019s\ncommand-line wrapper ",(0,i.jsx)(n.a,{href:"https://hub.github.com",children:(0,i.jsx)(n.strong,{children:"hub"})})," or the ",(0,i.jsx)(n.a,{href:"https://cli.github.com/",children:(0,i.jsx)(n.strong,{children:"GitHub\nCLI"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The format of the pull request title must be:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"<component>: <short_change_message> #<issue number>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"6-watch-the-pull-request-for-reviews",children:"6. Watch the Pull Request for reviews"}),"\n",(0,i.jsx)(n.p,{children:"Watch the pull request for comments and reviews. For any pull requests update,\nplease try to squash/amend your commits to avoid \u201cin-between\u201d commits."}),"\n",(0,i.jsx)(n.h2,{id:"automatic-testing",children:"Automatic Testing"}),"\n",(0,i.jsxs)(n.p,{children:["Every submitted pull request will automatically be run through automated testing\nthrough continuous integration.\nThis testing includes multiple ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/tree/master/.github/workflows",children:"suites of testing"}),",\nall of which are required to pass.\nPlease enable testing on your fork of the main repository to see the status of your tests as you develop."]}),"\n",(0,i.jsx)(n.h3,{id:"writing-tests",children:"Writing Tests"}),"\n",(0,i.jsx)(n.p,{children:"For every feature added, there should be a set of corresponding tests that verify\nits functionality and integration with the rest of the codebase."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use fixtures (found in the tests/conftest.py) or temporary object factories\n(tests/temp_factories.py) instead of making bare instances of rucio objects."}),"\n",(0,i.jsxs)(n.li,{children:["Only write tests deterministically.\nRandomness produces ",(0,i.jsx)(n.a,{href:"https://docs.pytest.org/en/7.1.x/explanation/flaky.html",children:"flaky tests"}),"."]}),"\n",(0,i.jsx)(n.li,{children:'Only write tests that are "stand alone" -\ntests should be entirely self-contained besides for the before-mentioned fixtures and factories.'}),"\n",(0,i.jsxs)(n.li,{children:["If a test requires a configuration file changed,\n",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/tests/conftest.py#L510",children:"use a fixture to modify a mock-configuration file."})]}),"\n",(0,i.jsxs)(n.li,{children:["If a test can interfere with another test\n(use the same database table, interact with a queue), mark it as ",(0,i.jsx)(n.code,{children:"noparallel"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["If a test is specific to a VO, mark it as such using a ",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/lib/rucio/tests/common.py",children:(0,i.jsx)(n.code,{children:"skip_non_{vo}"})})," fixture,\nor mark it as ",(0,i.jsx)(n.code,{children:"skip_multivo"})," if the test only is intended to work in single-vo settings."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"local-automatic-testing",children:"Local automatic testing"}),"\n",(0,i.jsxs)(n.p,{children:["There is also a local shell script to run the same autotests:\n",(0,i.jsx)(n.code,{children:"tools/run_autotests.sh"}),". For manual local testing within containers, please see\n",(0,i.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/etc/docker/dev/README.rst",children:(0,i.jsx)(n.strong,{children:"the docker\nREADME"})}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WARNING:"})," Because of the nature of using the same scripts as continuous\nintegration, some containers may be left running after a test run or when\naborting the test run. This is especially the case for running this script\nwithout podman."]}),"\n",(0,i.jsxs)(n.p,{children:["By default the tool uses 3 worker processes to run all tests that are defined in\n",(0,i.jsx)(n.code,{children:"etc/docker/test/matrix.yml"}),". Feel free to modify the matrix to your needs, but\nbe sure to not unintentionally commit your changes to it. The tests run at most\n6 hours - after that a TimeoutError will be raised, causing the script to\nfail. Running the autotests like this can be parameterized with environment\nvariables as follows:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"USE_PODMAN"})," 0/1 (default: depends on whether the docker command points to\npodman)"]}),"\n",(0,i.jsx)(n.p,{children:"Use podman and therefore pods to run the tests."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PARALLEL_AUTOTESTS"})," 0/1 (default: 1)"]}),"\n",(0,i.jsxs)(n.p,{children:["1 enables multiple processes to run autotests and 0 disables it.  When\nenabled, logs of the running autotests will be written to the ",(0,i.jsx)(n.code,{children:".autotest"}),"\ndirectory created in the working directory. Otherwise the log output will be\nwritten to the console (stderr)."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note that when tests are not running in parallel mode, the test run will\nalways fail fast."})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PARALLEL_AUTOTESTS_PROCNUM"})," (1,) (default: 3)"]}),"\n",(0,i.jsx)(n.p,{children:"Specifies the number of processes to run and therefore the concurrently run\nautotests. 3 will usually result in more than 8 GB RAM usage and a fair\namount of load on the PC."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"PARALLEL_AUTOTESTS_FAILFAST"})," 0/1 (default: 0)"]}),"\n",(0,i.jsx)(n.p,{children:"Will abort the parallel run of autotests as soon as possible after at least\none autotest failed. Enabling this will leave containers running in case of\na failure even on podman."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"COPY_AUTOTEST_LOGS"})," 0/1 (default: 0)"]}),"\n",(0,i.jsxs)(n.p,{children:["Copies ",(0,i.jsx)(n.code,{children:"/var/log"})," from the rucio container into the ",(0,i.jsx)(n.code,{children:".autotest"})," directory\nafter the test run. Each test case will have it\u2019s specific naming as with\nthe logs from the parallel run above."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"human-review",children:"Human Review"}),"\n",(0,i.jsx)(n.p,{children:"Anyone is welcome to review merge requests and make comments!"}),"\n",(0,i.jsx)(n.p,{children:"The Rucio development team can approve, request changes, or close pull\nrequests. Merging of approved pull requests is done by the Rucio development\nlead."}),"\n",(0,i.jsx)(n.h2,{id:"coding-style",children:"Coding Style"}),"\n",(0,i.jsx)(n.p,{children:"We use flake8 and pylint to sanitize our code. Please do the same before\nsubmitting a pull request."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/documentation/developer/dev_style_guide",children:"A more indepth set of coding style guidelines can be found here."})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);