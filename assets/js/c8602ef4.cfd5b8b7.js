(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{348:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(433)),i=["components"],c={id:"administration",title:"Rucio Administration Tricks",sidebar_label:"Administration Tricks"},l={unversionedId:"administration",id:"administration",isDocsHomePage:!1,title:"Rucio Administration Tricks",description:"Rucio container code hot-patching",source:"@site/../docs/administration.md",sourceDirName:".",slug:"/administration",permalink:"/documentation/administration",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/administration.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1657301594,formattedLastUpdatedAt:"7/8/2022",sidebar_label:"Administration Tricks",frontMatter:{id:"administration",title:"Rucio Administration Tricks",sidebar_label:"Administration Tricks"},sidebar:"docs",previous:{title:"Database Operations",permalink:"/documentation/database"},next:{title:"Configuration parameters",permalink:"/documentation/configuration_parameters"}},u=[{value:"Rucio container code hot-patching",id:"rucio-container-code-hot-patching",children:[{value:"Creating a patch from existing pull request",id:"creating-a-patch-from-existing-pull-request",children:[]},{value:"Mounting a patch in a kubernetes cluster",id:"mounting-a-patch-in-a-kubernetes-cluster",children:[]}]}],s={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"rucio-container-code-hot-patching"},"Rucio container code hot-patching"),Object(o.b)("p",null,"The rucio official containers provide a way to hotpatch the source code\nbefore running rucio. This behavior may be used to rapidly fix a production\ndeployment without having to wait for the change to be merged and released by\nthe rucio team."),Object(o.b)("p",null,"The behavior is very simple: any file found in the ",Object(o.b)("inlineCode",{parentName:"p"},"/patch/*")," directory inside\nthe containers will be fed to the ",Object(o.b)("inlineCode",{parentName:"p"},"patch")," command-line tool in the order\nreturned by this glob matching."),Object(o.b)("p",null,"The procedures described bellow are only intended for temporary fixes. If a\npermanent change is needed, we highly encourage you to open a pull request\nin rucio to spare you the toil related to maintaining your own local patch set."),Object(o.b)("h3",{id:"creating-a-patch-from-existing-pull-request"},"Creating a patch from existing pull request"),Object(o.b)("p",null,"Lets assume you run rucio ",Object(o.b)("inlineCode",{parentName:"p"},"1.27.3")," in production, and you realize there is\na bug in the ",Object(o.b)("inlineCode",{parentName:"p"},"conveyor-poller")," daemon. You contact the rucio team and are\ntold that a fix was already done in the pull request\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/pull/5246/commits"},"#5246"),"\nand will be released next week. Follow\nthe following steps to create a patch file from this pull request without\nhaving to wait for the next rucio release to fix your issue:"),Object(o.b)("p",null,"Clone the main rucio repository:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/rucio/rucio.git\ncd rucio\n# Create a new branch from the 1.27.3 release tag\ngit checkout 1.27.3 -b patch-0-hotfix_conveyor_poller_on_1.27.3\n")),Object(o.b)("p",null,"The #5246 pull request was submitted by the user ",Object(o.b)("inlineCode",{parentName:"p"},"rcarpa")," from his rucio\nfork ",Object(o.b)("a",{parentName:"p",href:"https://github.com/rcarpa/rucio"},"rcarpa/rucio"),". You'll have to add\nthis fork repository as a git remote:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git remote add rcarpa https://github.com/rcarpa/rucio.git\ngit fetch rcarpa\n# Cherry-pick the commit from the #5246 pull request.\n# Beware, some PR can have multiple commits\ngit cherry-pick 47d36345469ac9c1391cacd09487d4ec6ced627f\n")),Object(o.b)("p",null,"Now you can create the patch with the differences between the rucio 1.27.3\nrelease and the current state of the repository:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git diff 1.27.3 > hotfix_conveyor_poller.patch\n")),Object(o.b)("h3",{id:"mounting-a-patch-in-a-kubernetes-cluster"},"Mounting a patch in a kubernetes cluster"),Object(o.b)("p",null,"If you deploy rucio in a kubernetes cluster using the official rucio\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/rucio/helm-charts/"},"helm charts")," and want to hotfix\nrucio using a patch file created in the previous section, follow these steps:"),Object(o.b)("p",null,"Lets assume you have two helm releases: ",Object(o.b)("inlineCode",{parentName:"p"},"daemons")," and ",Object(o.b)("inlineCode",{parentName:"p"},"servers")," in the\nkubernetes namespace ",Object(o.b)("inlineCode",{parentName:"p"},"rucio"),". Create a kubernetes secret for each of your\nhelm releases:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"kubectl -n rucio create secret generic daemons-hotfix-conveyor-poller-patch --from-file=hotfix_conveyor_poller.patch\nkubectl -n rucio create secret generic servers-hotfix-conveyor-poller-patch --from-file=hotfix_conveyor_poller.patch\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note:")," if you have more than one cluster, don't forget to create the\nsecrets in each cluster to be patched."),Object(o.b)("p",null,"Now you'll have to update the helm ",Object(o.b)("inlineCode",{parentName:"p"},"values")," file for each helm release and\nadd the following"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},"    additionalSecrets:\n      hotfix-conveyor-poller-patch:\n        # the helm release (daemons-/servers-) must NOT prefix the name\n        secretName: hotfix-conveyor-poller-patch\n        mountPath: /patch/hotfix_conveyor_poller.patch\n        subPath: hotfix_conveyor_poller.patch\n")))}p.isMDXComponent=!0},433:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(i,".").concat(d)]||p[d]||h[d]||o;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);