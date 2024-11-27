"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7209],{89942:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"operator/policy_packages","title":"Policy Packages","description":"Overview","source":"@site/../docs/operator/policy_packages.md","sourceDirName":"operator","slug":"/operator/policy_packages","permalink":"/documentation/operator/policy_packages","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/operator/policy_packages.md","tags":[],"version":"current","lastUpdatedBy":"rdimaio","lastUpdatedAt":1732724146000,"frontMatter":{"id":"policy_packages","title":"Policy Packages"},"sidebar":"docs","previous":{"title":"DID Metadata","permalink":"/documentation/operator/did_meta"},"next":{"title":"S3 Storage Configuration","permalink":"/documentation/operator/s3_rse_config"}}');var o=i(74848),a=i(28453);const s={id:"policy_packages",title:"Policy Packages"},c=void 0,r={},l=[{value:"Overview",id:"overview",level:2},{value:"Creating a policy package",id:"creating-a-policy-package",level:2},{value:"lfn2pfn vs. non_deterministic_pfn algorithms",id:"lfn2pfn-vs-non_deterministic_pfn-algorithms",level:3},{value:"Adding a new algorithm class",id:"adding-a-new-algorithm-class",level:2},{value:"Deploying Policy Packages in containers",id:"deploying-policy-packages-in-containers",level:2},{value:"Installing the policy package",id:"installing-the-policy-package",level:3},{value:"Adding the policy package to the server&#39;s PYTHONPATH",id:"adding-the-policy-package-to-the-servers-pythonpath",level:3},{value:"Specifying the policy package in the configuration file",id:"specifying-the-policy-package-in-the-configuration-file",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.p,{children:"Policy packages are separate Python packages that can be used to add\nexperiment-specific customisations to Rucio. They typically customise\nRucio's handling of permissions and schema as well as optionally adding\ntheir own algorithms for various purposes, such as lfn to pfn conversion\nand surl construction."}),"\n",(0,o.jsxs)(n.p,{children:["Policy packages may be installed from a Python package repository such\nas ",(0,o.jsx)(n.a,{href:"https://pypi.python.org/",children:"PyPi"})," or they may simply be installed in a\nlocal directory. In the latter case this directory will need to be added\nto the Rucio server's ",(0,o.jsx)(n.code,{children:"PYTHONPATH"})," environment variable."]}),"\n",(0,o.jsxs)(n.p,{children:["The name of the policy package in use is specified by the ",(0,o.jsx)(n.code,{children:"package"})," value\nin the ",(0,o.jsx)(n.code,{children:"policy"})," section of the Rucio configuration file. Alternatively,\nthe package can be specified by the ",(0,o.jsx)(n.code,{children:"RUCIO_POLICY_PACKAGE"})," environment\nvariable (if both are set, the environment variable takes priority). If\nno package is specified, a built in generic policy will be used. If a\npackage is specified but cannot be loaded, Rucio will exit with an error."]}),"\n",(0,o.jsxs)(n.p,{children:["Multi-VO Rucio installations can load a different policy package for each\nVO. In this case, the configuration parameter or environment variable name\nis suffixed with the VO name (for example, ",(0,o.jsx)(n.code,{children:"package-vo1"})," or\n",(0,o.jsx)(n.code,{children:"RUCIO_POLICY_PACKAGE_VO1"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-policy-package",children:"Creating a policy package"}),"\n",(0,o.jsx)(n.p,{children:"The structure of a policy package is very simple. It contains the\nfollowing:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.code,{children:"permission.py"})," module implementing permission\ncustomisations."]}),"\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.code,{children:"schema.py"})," module implementing schema customisations."]}),"\n",(0,o.jsxs)(n.li,{children:["An ",(0,o.jsx)(n.code,{children:"__init__.py"})," file that can optionally return a dictionary of\nalgorithms provided by the package."]}),"\n",(0,o.jsx)(n.li,{children:"It should also contain a SUPPORTED_VERSION field."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The easiest way to create the ",(0,o.jsx)(n.code,{children:"permission.py"})," and\n",(0,o.jsx)(n.code,{children:"schema.py"})," modules is to modify the generic versions from\nthe Rucio codebase. These can be found in\n",(0,o.jsx)(n.code,{children:"lib/rucio/core/permission/generic.py"})," and\n",(0,o.jsx)(n.code,{children:"lib/rucio/common/schema/generic.py"})," respectively."]}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"has_permission"})," function you may wish to default to\nthe generic permission checks if your experiment does not need specific\nfunctionality for a particular action, or so that new actions added to\nRucio will work without your policy package having to be updated. This\nfallback can be implemented with code similar to the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"import rucio.core.permission.generic\nif action not in perm:\n    return rucio.core.permission.generic.has_permission(issuer, action, kwargs)\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"__init__.py"})," should include a\n",(0,o.jsx)(n.code,{children:"SUPPORTED_VERSION"})," field indicating the major version(s) of Rucio\nthat your package supports. This is checked against the Rucio server\nversion to ensure compatibility when loading the policy package. This\nfield can be a string if the policy package only supports a single\nRucio version, or a list of strings if it supports multiple versions.\nExample:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'SUPPORTED_VERSION = [ "1.30", "1.31", "32" ]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["It can also contain an optional function called ",(0,o.jsx)(n.code,{children:"get_algorithms"}),' that\nreturns a dictionary of custom algorithms implemented within the package.\nIn fact, this structure should be a "dictionary of dictionaries" where\nthe outer dictionary contains algorithm types, and each inner\ndictionary contains all the algorithms provided by the package for that\ntype. Currently supported types are ',(0,o.jsx)(n.code,{children:"lfn2pfn"})," for generating PFNs for\ndeterministic storage, ",(0,o.jsx)(n.code,{children:"non_deterministic_pfn"})," for generating PFNs for\nnon-deterministic storage, and ",(0,o.jsx)(n.code,{children:"scope"})," for scope extraction algorithms.\n(For backwards compatibility, ",(0,o.jsx)(n.code,{children:"surl"})," can be used in place of\n",(0,o.jsx)(n.code,{children:"non_deterministic_pfn"}),", however this is not recommended for new policy\npackages)."]}),"\n",(0,o.jsxs)(n.p,{children:["Some base algorithm classes depend on ",(0,o.jsx)(n.code,{children:"schema"})," being loaded.\nTo avoid circular import issues, import the algorithm classes\nas part of the ",(0,o.jsx)(n.code,{children:"get_algorithms"})," function, to ensure that ",(0,o.jsx)(n.code,{children:"schema"})," is loaded first."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"def get_algorithms():\n    from vo_policy_package.non_deterministic_pfn import VONonDeterministicPFNAlgorithm\n    from vo_policy_package.lfn2pfn import VORSEDeterministicTranslation\n    from vo_policy_package.scope import VOScopeExtractionAlgorithm\n    return { \n      'non_deterministic_pfn': { \n        'voname_non_deterministic_pfn': VONonDeterministicPFNAlgorithm.construct_non_deterministic_pfn_voname \n        },\n      'lfn2pfn': { \n        'voname_lfn2pfn': VORSEDeterministicTranslation.lfn2pfn_voname \n        },\n      'scope': { \n        'voname_extract_scope': VOScopeExtractionAlgorithm.extract_scope_voname \n        } \n      }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["In all cases the names used to register the functions (e.g. ",(0,o.jsx)(n.code,{children:"voname_extract_scope"}),") must be prefixed\nwith the name of the virtual organisation that owns the policy package,\nto avoid naming conflicts on multi-VO Rucio installations."]}),"\n",(0,o.jsx)(n.h3,{id:"lfn2pfn-vs-non_deterministic_pfn-algorithms",children:"lfn2pfn vs. non_deterministic_pfn algorithms"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"lfn2pfn"})," algorithms and ",(0,o.jsx)(n.code,{children:"non_deterministic_pfn"})," algorithms are\nconceptually similar, but there are important differences between\nthem. Both produce a physical filename for use on an RSE, however\n",(0,o.jsx)(n.code,{children:"lfn2pfn"})," algorithms can only be used on deterministic RSEs - for\nexample, disk systems where the appropriate physical filename can be\nderived from the file's scope and name alone (as well as\nprotocol-specific information for the RSE in question).\n",(0,o.jsx)(n.code,{children:"non_deterministic_pfn"})," algorithms are used on non-deterministic\nRSEs (most often tape systems), and may use additional information\nabout the file (such as its metadata, any datasets that it is a part\nof, etc.) to construct the physical filename. Because files cannot\nbe uploaded directly to non-deterministic storage,\n",(0,o.jsx)(n.code,{children:"non_deterministic_pfn"})," algorithms are only ever called for\nreplications, but ",(0,o.jsx)(n.code,{children:"lfn2pfn"})," algorithms can also be called for\ninitial uploads."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"lfn2pfn"})," algorithm to be used is determined by the\n",(0,o.jsx)(n.code,{children:"lfn2pfn_algorithm"})," attribute of the relevant RSE. If this is not set,\nthe ",(0,o.jsx)(n.code,{children:"lfn2pfn_algorithm_default"})," value from the ",(0,o.jsx)(n.code,{children:"[policy]"})," section of\nthe config file is used instead. The ",(0,o.jsx)(n.code,{children:"non_deterministic_pfn"})," algorithm\nto be used is determined by the ",(0,o.jsx)(n.code,{children:"naming_convention"})," attribute of the\nrelevant RSE."]}),"\n",(0,o.jsx)(n.h2,{id:"adding-a-new-algorithm-class",children:"Adding a new algorithm class"}),"\n",(0,o.jsx)(n.p,{children:"The system for registering algorithms within policy packages is\nintended to be extensible so that new algorithm classes can be added\nrelatively easily. The basic workflow is as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"get_algorithms"})," function within the policy package (see above)\nshould return a dictionary of functions of the new class, indexed\nby name"]}),"\n",(0,o.jsxs)(n.li,{children:["The core Rucio code should maintain a dictionary of functions of the\nnew class, ready to be called when required. The details of this\nwill differ depending on what the new class actually does and how it\nintegrates with the Rucio code, but typically the algorithm name to\nbe used will be selected by a value in the config file, as for the\ncurrent ",(0,o.jsx)(n.code,{children:"lfn2pfn"})," and ",(0,o.jsx)(n.code,{children:"non_deterministic_pfn"})," algorithm types."]}),"\n",(0,o.jsxs)(n.li,{children:["Before the algorithm is called for the first time, the core Rucio\ncode should call ",(0,o.jsx)(n.code,{children:"rucio.common.utils.register_policy_package_algorithms"}),"\nto import the algorithms for this class from the policy package and\nstore them in its internal dictionary. This function takes care of\nthe complexities of interfacing with the policy package, such as\nimporting the package if necessary, and dealing with multiple\npackages in multi-VO Rucio installations."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"deploying-policy-packages-in-containers",children:"Deploying Policy Packages in containers"}),"\n",(0,o.jsx)(n.p,{children:"It is now common to deploy Rucio using containers managed by software\nsuch as Docker and Kubernetes. This section of the documentation is\nintended to give guidance on how policy packages can be deployed in\nthis type of environment."}),"\n",(0,o.jsx)(n.p,{children:"Broadly speaking, three things must happen in order for a policy\npackage to be deployed successfully:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The policy package code must be available to the Rucio server\n(and possibly other components such as daemons)."}),"\n",(0,o.jsxs)(n.li,{children:["The directory containing the policy package must be in the server's\n",(0,o.jsx)(n.code,{children:"PYTHONPATH"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["The policy package name must be set in the Rucio configuration file,\nor using the ",(0,o.jsx)(n.code,{children:"RUCIO_POLICY_PACKAGE"})," environment variable."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"installing-the-policy-package",children:"Installing the policy package"}),"\n",(0,o.jsxs)(n.p,{children:["There are a few possible ways to get the policy package code into the\ncontainer where the server runs. One way is to build a custom\nexperiment-specific container image based on the generic Rucio server\nimage, and to install the policy package at build time in the\n",(0,o.jsx)(n.code,{children:"Dockerfile"}),", either by directly copying the files in, or by installing\nit from some sort of repository. For experiments that already customise\nthe container image, this is likely to be the easiest option."]}),"\n",(0,o.jsxs)(n.p,{children:["Alternatively, the standard Rucio container can be used and a volume\ncontaining the policy package files can be mounted at run time (using\nthe ",(0,o.jsx)(n.code,{children:"-v"})," or ",(0,o.jsx)(n.code,{children:"--volume"})," command line flag). When using Kubernetes, there\nis also a third possibility: use an\n",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/workloads/pods/init-containers/",children:"init container"}),"\nto install the policy package onto a shared volume, which is then mounted\nby the server container when it starts up."]}),"\n",(0,o.jsx)(n.h3,{id:"adding-the-policy-package-to-the-servers-pythonpath",children:"Adding the policy package to the server's PYTHONPATH"}),"\n",(0,o.jsxs)(n.p,{children:["It is possible to set environment variables within the container when\nstarting it (using Docker's ",(0,o.jsx)(n.code,{children:"-e"})," command line flag). This can be used to\nset ",(0,o.jsx)(n.code,{children:"PYTHONPATH"}),", however this will replace the original value rather\nthan appending to it, so there is a risk of removing other important\nitems from the path. A safer option is to override Rucio's\n",(0,o.jsx)(n.code,{children:"docker-entrypoint.sh"})," script and instead use a script that appends the\npolicy package's directory to ",(0,o.jsx)(n.code,{children:"PYTHONPATH"})," before starting the HTTP server.\nThis can be done either at build time in the ",(0,o.jsx)(n.code,{children:"Dockerfile"}),", or at run time\nusing the ",(0,o.jsx)(n.code,{children:"--entrypoint"})," command line option."]}),"\n",(0,o.jsxs)(n.p,{children:["When deploying using Kubernetes and Helm charts, it is possible to specify\nthe policy package directory in the ",(0,o.jsx)(n.code,{children:"optional_config:"})," section of\n",(0,o.jsx)(n.code,{children:"values.yaml"}),". This is then propagated to the container as an environment\nvariable, which can be added to ",(0,o.jsx)(n.code,{children:"PYTHONPATH"})," by the entry point script. For\nexample, include this in ",(0,o.jsx)(n.code,{children:"values.yaml"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"optional_config:\n  policy_pkg_path: /opt/rucio/policy\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This will appear in the container's environment as a variable called\n",(0,o.jsx)(n.code,{children:"POLICY_PKG_PATH"}),", which can be added to ",(0,o.jsx)(n.code,{children:"PYTHONPATH"})," by the entry point\nscript before starting the server:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'if [ ! -z "$POLICY_PKG_PATH" ]; then\n    export PYTHONPATH=${POLICY_PKG_PATH}:${PYTHONPATH:+:}${PYTHONPATH}\nfi\n'})}),"\n",(0,o.jsx)(n.h3,{id:"specifying-the-policy-package-in-the-configuration-file",children:"Specifying the policy package in the configuration file"}),"\n",(0,o.jsxs)(n.p,{children:["It is likely that most experiments are already customising the Rucio\nconfiguration file, in which case the policy package (",(0,o.jsx)(n.code,{children:"package = name"})," in\nthe ",(0,o.jsx)(n.code,{children:"[policy]"})," section) can simply be added to the existing customised file.\nAlternatively, the package name can be set in the ",(0,o.jsx)(n.code,{children:"RUCIO_POLICY_PACKAGE"}),"\nenvironment variable (see previous section for how to pass environment\nvariables into the server container)."]}),"\n",(0,o.jsxs)(n.p,{children:["When deploying using Kubernetes and Helm charts, it is possible to specify\nconfiguration options in ",(0,o.jsx)(n.code,{children:"values.yaml"}),". Values included in the ",(0,o.jsx)(n.code,{children:"config:"}),"\nsection of this file are automatically merged into ",(0,o.jsx)(n.code,{children:"rucio.cfg"})," by the\n",(0,o.jsx)(n.code,{children:"docker-entrypoint.sh"})," script, so the policy package can be set as:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"config:\n  policy:\n    package: packagename\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(96540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);