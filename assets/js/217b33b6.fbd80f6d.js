(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(7),a=(n(0),n(412)),l=["components"],c={title:"Setting Up the Rucio Client"},o={unversionedId:"setting_up_the_rucio_client",id:"setting_up_the_rucio_client",isDocsHomePage:!1,title:"Setting Up the Rucio Client",description:"Prerequisites",source:"@site/../docs/setting_up_the_rucio_client.md",sourceDirName:".",slug:"/setting_up_the_rucio_client",permalink:"/documentation/setting_up_the_rucio_client",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/setting_up_the_rucio_client.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1653917388,formattedLastUpdatedAt:"5/30/2022",frontMatter:{title:"Setting Up the Rucio Client"},sidebar:"docs",previous:{title:"Release Notes",permalink:"/documentation/release-notes"},next:{title:"Using the Client",permalink:"/documentation/using_the_client"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install via pip",id:"install-via-pip",children:[]},{value:"Upgrade via pip",id:"upgrade-via-pip",children:[]},{value:"Install via pip and virtualenv",id:"install-via-pip-and-virtualenv",children:[]},{value:"Installing using setup.py",id:"installing-using-setuppy",children:[]}],u={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,l);return Object(a.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"Rucio clients run on Python 2.7, 3.6, 3.7 and 3.8 on any Unix-like\nplatform."),Object(a.b)("h2",{id:"install-via-pip"},"Install via pip"),Object(a.b)("p",null,"When ",Object(a.b)("inlineCode",{parentName:"p"},"pip")," is available, the distribution can be downloaded from the\nRucio PyPI server and installed in one step:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"pip install rucio-clients\n")),Object(a.b)("p",null,"This command will download the latest version of Rucio and install it to your\nsystem. The dependencies are listed in the file\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/requirements.txt"},Object(a.b)("inlineCode",{parentName:"a"},"requirements.txt")),"\nand will be pulled in as necessary."),Object(a.b)("h2",{id:"upgrade-via-pip"},"Upgrade via pip"),Object(a.b)("p",null,"To upgrade via pip:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade rucio-clients\n")),Object(a.b)("h2",{id:"install-via-pip-and-virtualenv"},"Install via pip and virtualenv"),Object(a.b)("p",null,"To install the Rucio clients in an isolated ",Object(a.b)("inlineCode",{parentName:"p"},"virtualenv")," environment:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"wget --no-check-certificate https://raw.github.com/pypa/virtualenv/master/virtualenv.py\npython virtualenv.py rucio\nsource rucio/bin/activate.csh\npip install rucio-clients\nexport RUCIO_HOME=`pwd`/rucio/\n")),Object(a.b)("h2",{id:"installing-using-setuppy"},"Installing using setup.py"),Object(a.b)("p",null,"Otherwise, you can install from the distribution using the ",Object(a.b)("inlineCode",{parentName:"p"},"setup.py"),"\nscript:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"python setup.py install\n")))}s.isMDXComponent=!0},412:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),b=i,m=s["".concat(l,".").concat(b)]||s[b]||d[b]||a;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);