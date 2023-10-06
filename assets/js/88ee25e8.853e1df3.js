"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),s=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,v=c["".concat(o,".").concat(m)]||c[m]||d[m]||a;return n?i.createElement(v,l(l({ref:t},u),{},{components:n})):i.createElement(v,l({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:r,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>v,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],p={title:"Setting Up the Rucio Client"},o=void 0,s={unversionedId:"user/setting_up_the_rucio_client",id:"user/setting_up_the_rucio_client",title:"Setting Up the Rucio Client",description:"Install via pip",source:"@site/../docs/user/setting_up_the_rucio_client.md",sourceDirName:"user",slug:"/user/setting_up_the_rucio_client",permalink:"/documentation/user/setting_up_the_rucio_client",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/setting_up_the_rucio_client.md",tags:[],version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1696512978,formattedLastUpdatedAt:"Oct 5, 2023",frontMatter:{title:"Setting Up the Rucio Client"},sidebar:"docs",previous:{title:"Release Notes",permalink:"/documentation/release-notes"},next:{title:"Using the Client",permalink:"/documentation/user/using_the_client"}},u={},c=[{value:"Install via pip",id:"install-via-pip",level:2},{value:"Upgrade via pip",id:"upgrade-via-pip",level:2},{value:"Install via pip and virtualenv",id:"install-via-pip-and-virtualenv",level:2},{value:"Installing using setup.py",id:"installing-using-setuppy",level:2}],d={toc:c},m="wrapper";function v(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)(m,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-via-pip"},"Install via pip"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," is available, the distribution can be downloaded from the\nRucio PyPI server and installed in one step:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install rucio-clients\n")),(0,a.kt)("p",null,"This command will download the latest version of Rucio and install it to your\nsystem. The dependencies are listed in the file\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/requirements.txt"},(0,a.kt)("inlineCode",{parentName:"a"},"requirements.txt")),"\nand will be pulled in as necessary."),(0,a.kt)("h2",{id:"upgrade-via-pip"},"Upgrade via pip"),(0,a.kt)("p",null,"To upgrade via pip:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade rucio-clients\n")),(0,a.kt)("h2",{id:"install-via-pip-and-virtualenv"},"Install via pip and virtualenv"),(0,a.kt)("p",null,"To install the Rucio clients in an isolated ",(0,a.kt)("inlineCode",{parentName:"p"},"virtualenv")," environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"wget --no-check-certificate https://raw.github.com/pypa/virtualenv/master/virtualenv.py\npython virtualenv.py rucio\nsource rucio/bin/activate.csh\npip install rucio-clients\nexport RUCIO_HOME=`pwd`/rucio/\n")),(0,a.kt)("h2",{id:"installing-using-setuppy"},"Installing using setup.py"),(0,a.kt)("p",null,"Otherwise, you can install from the distribution using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setup.py"),"\nscript:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python setup.py install\n")))}v.isMDXComponent=!0}}]);