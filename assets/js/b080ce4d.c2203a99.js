"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7209],{15680:(e,n,i)=>{i.d(n,{xA:()=>p,yg:()=>h});var a=i(96540);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,a,t=function(e,n){if(null==e)return{};var i,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=a.createContext({}),c=function(e){var n=a.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var i=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(i),d=t,h=g["".concat(s,".").concat(d)]||g[d]||y[d]||o;return i?a.createElement(h,r(r({ref:n},p),{},{components:i})):a.createElement(h,r({ref:n},p))}));function h(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=i.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:t,r[1]=l;for(var c=2;c<o;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},67747:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var a=i(58168),t=i(98587),o=(i(96540),i(15680)),r=["components"],l={id:"policy_packages",title:"Policy Packages"},s=void 0,c={unversionedId:"operator/policy_packages",id:"operator/policy_packages",title:"Policy Packages",description:"Overview",source:"@site/../docs/operator/policy_packages.md",sourceDirName:"operator",slug:"/operator/policy_packages",permalink:"/documentation/operator/policy_packages",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/policy_packages.md",tags:[],version:"current",lastUpdatedBy:"Xenakis D.",lastUpdatedAt:1711918521,formattedLastUpdatedAt:"Mar 31, 2024",frontMatter:{id:"policy_packages",title:"Policy Packages"},sidebar:"docs",previous:{title:"DID Metadata",permalink:"/documentation/operator/did_meta"},next:{title:"S3 Storage Configuration",permalink:"/documentation/operator/s3_rse_config"}},p={},g=[{value:"Overview",id:"overview",level:2},{value:"Creating a policy package",id:"creating-a-policy-package",level:2},{value:"Adding a new algorithm class",id:"adding-a-new-algorithm-class",level:2},{value:"Deploying Policy Packages in containers",id:"deploying-policy-packages-in-containers",level:2},{value:"Installing the policy package",id:"installing-the-policy-package",level:3},{value:"Adding the policy package to the server&#39;s PYTHONPATH",id:"adding-the-policy-package-to-the-servers-pythonpath",level:3},{value:"Specifying the policy package in the configuration file",id:"specifying-the-policy-package-in-the-configuration-file",level:3}],y={toc:g},d="wrapper";function h(e){var n=e.components,i=(0,t.A)(e,r);return(0,o.yg)(d,(0,a.A)({},y,i,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"overview"},"Overview"),(0,o.yg)("p",null,"Policy packages are separate Python packages that can be used to add\nexperiment-specific customisations to Rucio. They typically customise\nRucio's handling of permissions and schema as well as optionally adding\ntheir own algorithms for various purposes, such as lfn to pfn conversion\nand surl construction."),(0,o.yg)("p",null,"Policy packages may be installed from a Python package repository such\nas ",(0,o.yg)("a",{parentName:"p",href:"https://pypi.python.org/"},"PyPi")," or they may simply be installed in a\nlocal directory. In the latter case this directory will need to be added\nto the Rucio server's ",(0,o.yg)("inlineCode",{parentName:"p"},"PYTHONPATH")," environment variable."),(0,o.yg)("p",null,"The name of the policy package in use is specified by the ",(0,o.yg)("inlineCode",{parentName:"p"},"package")," value\nin the ",(0,o.yg)("inlineCode",{parentName:"p"},"policy")," section of the Rucio configuration file. Alternatively,\nthe package can be specified by the ",(0,o.yg)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE")," environment\nvariable (if both are set, the environment variable takes priority). If\nno package is specified, a built in generic policy will be used. If a\npackage is specified but cannot be loaded, Rucio will exit with an error."),(0,o.yg)("p",null,"Multi-VO Rucio installations can load a different policy package for each\nVO. In this case, the configuration parameter or environment variable name\nis suffixed with the VO name (for example, ",(0,o.yg)("inlineCode",{parentName:"p"},"package-vo1")," or\n",(0,o.yg)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE_VO1"),")."),(0,o.yg)("h2",{id:"creating-a-policy-package"},"Creating a policy package"),(0,o.yg)("p",null,"The structure of a policy package is very simple. It contains the\nfollowing:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A ",(0,o.yg)("inlineCode",{parentName:"li"},"permission.py")," module implementing permission\ncustomisations."),(0,o.yg)("li",{parentName:"ul"},"A ",(0,o.yg)("inlineCode",{parentName:"li"},"schema.py")," module implementing schema customisations."),(0,o.yg)("li",{parentName:"ul"},"An ",(0,o.yg)("inlineCode",{parentName:"li"},"__init__.py")," file that can optionally return a dictionary of\nalgorithms provided by the package."),(0,o.yg)("li",{parentName:"ul"},"It should also contain a SUPPORTED_VERSION field.")),(0,o.yg)("p",null,"The easiest way to create the ",(0,o.yg)("inlineCode",{parentName:"p"},"permission.py")," and\n",(0,o.yg)("inlineCode",{parentName:"p"},"schema.py")," modules is to modify the generic versions from\nthe Rucio codebase. These can be found in\n",(0,o.yg)("inlineCode",{parentName:"p"},"lib/rucio/core/permission/generic.py")," and\n",(0,o.yg)("inlineCode",{parentName:"p"},"lib/rucio/common/schema/generic.py")," respectively."),(0,o.yg)("p",null,"In the ",(0,o.yg)("inlineCode",{parentName:"p"},"has_permission")," function you may wish to default to\nthe generic permission checks if your experiment does not need specific\nfunctionality for a particular action, or so that new actions added to\nRucio will work without your policy package having to be updated. This\nfallback can be implemented with code similar to the following:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"import rucio.core.permission.generic\nif action not in perm:\n    return rucio.core.permission.generic.has_permission(issuer, action, kwargs)\n")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"__init__.py")," should include a\n",(0,o.yg)("inlineCode",{parentName:"p"},"SUPPORTED_VERSION")," field indicating the major version(s) of Rucio\nthat your package supports. This is checked against the Rucio server\nversion to ensure compatibility when loading the policy package. This\nfield can be a string if the policy package only supports a single\nRucio version, or a list of strings if it supports multiple versions.\nExample:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'SUPPORTED_VERSION = [ "1.30", "1.31", "32" ]\n')),(0,o.yg)("p",null,"It can also contain an optional function called ",(0,o.yg)("inlineCode",{parentName:"p"},"get_algorithms"),' that\nreturns a dictionary of custom algorithms implemented within the package.\nIn fact, this structure should be a "dictionary of dictionaries" where\nthe outer dictionary contains algorithm types, and each inner\ndictionary contains all the algorithms provided by the package for that\ntype. Currently supported types are ',(0,o.yg)("inlineCode",{parentName:"p"},"surl")," for SURL algorithms,\n",(0,o.yg)("inlineCode",{parentName:"p"},"lfn2pfn")," for LFN2PFN algorithms, and ",(0,o.yg)("inlineCode",{parentName:"p"},"scope")," for scope extraction\nalgorithms."),(0,o.yg)("p",null,"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},"def get_algorithms():\n    return { 'surl':\n             { 'voname_surl': construct_surl_voname },\n         'lfn2pfn':\n         { 'voname_lfn2pfn': lfn2pfn_voname },\n         'scope':\n         { 'voname_extract_scope': extract_scope_voname } }\n")),(0,o.yg)("p",null,"In all cases the names used to register the functions must be prefixed\nwith the name of the virtual organisation that owns the policy package,\nto avoid naming conflicts on multi-VO Rucio installations."),(0,o.yg)("h2",{id:"adding-a-new-algorithm-class"},"Adding a new algorithm class"),(0,o.yg)("p",null,"The system for registering algorithms within policy packages is\nintended to be extensible so that new algorithm classes can be added\nrelatively easily. The basic workflow is as follows:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"get_algorithms")," function within the policy package (see above)\nshould return a dictionary of functions of the new class, indexed\nby name"),(0,o.yg)("li",{parentName:"ul"},"The core Rucio code should maintain a dictionary of functions of the\nnew class, ready to be called when required. The details of this\nwill differ depending on what the new class actually does and how it\nintegrates with the Rucio code, but typically the algorithm name to\nbe used will be selected by a value in the config file, as for the\ncurrent ",(0,o.yg)("inlineCode",{parentName:"li"},"lfn2pfn")," and ",(0,o.yg)("inlineCode",{parentName:"li"},"surl")," algorithm types."),(0,o.yg)("li",{parentName:"ul"},"Before the algorithm is called for the first time, the core Rucio\ncode should call ",(0,o.yg)("inlineCode",{parentName:"li"},"rucio.common.utils.register_policy_package_algorithms"),"\nto import the algorithms for this class from the policy package and\nstore them in its internal dictionary. This function takes care of\nthe complexities of interfacing with the policy package, such as\nimporting the package if necessary, and dealing with multiple\npackages in multi-VO Rucio installations.")),(0,o.yg)("h2",{id:"deploying-policy-packages-in-containers"},"Deploying Policy Packages in containers"),(0,o.yg)("p",null,"It is now common to deploy Rucio using containers managed by software\nsuch as Docker and Kubernetes. This section of the documentation is\nintended to give guidance on how policy packages can be deployed in\nthis type of environment."),(0,o.yg)("p",null,"Broadly speaking, three things must happen in order for a policy\npackage to be deployed successfully:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The policy package code must be available to the Rucio server\n(and possibly other components such as daemons)."),(0,o.yg)("li",{parentName:"ol"},"The directory containing the policy package must be in the server's\n",(0,o.yg)("inlineCode",{parentName:"li"},"PYTHONPATH"),"."),(0,o.yg)("li",{parentName:"ol"},"The policy package name must be set in the Rucio configuration file,\nor using the ",(0,o.yg)("inlineCode",{parentName:"li"},"RUCIO_POLICY_PACKAGE")," environment variable.")),(0,o.yg)("h3",{id:"installing-the-policy-package"},"Installing the policy package"),(0,o.yg)("p",null,"There are a few possible ways to get the policy package code into the\ncontainer where the server runs. One way is to build a custom\nexperiment-specific container image based on the generic Rucio server\nimage, and to install the policy package at build time in the\n",(0,o.yg)("inlineCode",{parentName:"p"},"Dockerfile"),", either by directly copying the files in, or by installing\nit from some sort of repository. For experiments that already customise\nthe container image, this is likely to be the easiest option."),(0,o.yg)("p",null,"Alternatively, the standard Rucio container can be used and a volume\ncontaining the policy package files can be mounted at run time (using\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"-v")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"--volume")," command line flag). When using Kubernetes, there\nis also a third possibility: use an\n",(0,o.yg)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"},"init container"),"\nto install the policy package onto a shared volume, which is then mounted\nby the server container when it starts up."),(0,o.yg)("h3",{id:"adding-the-policy-package-to-the-servers-pythonpath"},"Adding the policy package to the server's PYTHONPATH"),(0,o.yg)("p",null,"It is possible to set environment variables within the container when\nstarting it (using Docker's ",(0,o.yg)("inlineCode",{parentName:"p"},"-e")," command line flag). This can be used to\nset ",(0,o.yg)("inlineCode",{parentName:"p"},"PYTHONPATH"),", however this will replace the original value rather\nthan appending to it, so there is a risk of removing other important\nitems from the path. A safer option is to override Rucio's\n",(0,o.yg)("inlineCode",{parentName:"p"},"docker-entrypoint.sh")," script and instead use a script that appends the\npolicy package's directory to ",(0,o.yg)("inlineCode",{parentName:"p"},"PYTHONPATH")," before starting the HTTP server.\nThis can be done either at build time in the ",(0,o.yg)("inlineCode",{parentName:"p"},"Dockerfile"),", or at run time\nusing the ",(0,o.yg)("inlineCode",{parentName:"p"},"--entrypoint")," command line option."),(0,o.yg)("p",null,"When deploying using Kubernetes and Helm charts, it is possible to specify\nthe policy package directory in the ",(0,o.yg)("inlineCode",{parentName:"p"},"optional_config:")," section of\n",(0,o.yg)("inlineCode",{parentName:"p"},"values.yaml"),". This is then propagated to the container as an environment\nvariable, which can be added to ",(0,o.yg)("inlineCode",{parentName:"p"},"PYTHONPATH")," by the entry point script. For\nexample, include this in ",(0,o.yg)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"optional_config:\n  policy_pkg_path: /opt/rucio/policy\n")),(0,o.yg)("p",null,"This will appear in the container's environment as a variable called\n",(0,o.yg)("inlineCode",{parentName:"p"},"POLICY_PKG_PATH"),", which can be added to ",(0,o.yg)("inlineCode",{parentName:"p"},"PYTHONPATH")," by the entry point\nscript before starting the server:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'if [ ! -z "$POLICY_PKG_PATH" ]; then\n    export PYTHONPATH=${POLICY_PKG_PATH}:${PYTHONPATH:+:}${PYTHONPATH}\nfi\n')),(0,o.yg)("h3",{id:"specifying-the-policy-package-in-the-configuration-file"},"Specifying the policy package in the configuration file"),(0,o.yg)("p",null,"It is likely that most experiments are already customising the Rucio\nconfiguration file, in which case the policy package (",(0,o.yg)("inlineCode",{parentName:"p"},"package = name")," in\nthe ",(0,o.yg)("inlineCode",{parentName:"p"},"[policy]")," section) can simply be added to the existing customised file.\nAlternatively, the package name can be set in the ",(0,o.yg)("inlineCode",{parentName:"p"},"RUCIO_POLICY_PACKAGE"),"\nenvironment variable (see previous section for how to pass environment\nvariables into the server container)."),(0,o.yg)("p",null,"When deploying using Kubernetes and Helm charts, it is possible to specify\nconfiguration options in ",(0,o.yg)("inlineCode",{parentName:"p"},"values.yaml"),". Values included in the ",(0,o.yg)("inlineCode",{parentName:"p"},"config:"),"\nsection of this file are automatically merged into ",(0,o.yg)("inlineCode",{parentName:"p"},"rucio.cfg")," by the\n",(0,o.yg)("inlineCode",{parentName:"p"},"docker-entrypoint.sh")," script, so the policy package can be set as:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"config:\n  policy:\n    package: packagename\n")))}h.isMDXComponent=!0}}]);