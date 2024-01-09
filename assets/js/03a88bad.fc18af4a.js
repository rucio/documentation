"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6568],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,h=d["".concat(u,".").concat(p)]||d[p]||m[p]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},87989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"index",title:"Welcome to Rucio's documentation",sidebar_label:"Welcome",slug:"/"},u=void 0,s={unversionedId:"index",id:"index",title:"Welcome to Rucio's documentation",description:"Rucio is a project that provides services and associated libraries for allowing",source:"@site/../docs/index.md",sourceDirName:".",slug:"/",permalink:"/documentation/",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/index.md",tags:[],version:"current",lastUpdatedBy:"Erling Mathias Staff",lastUpdatedAt:1704796004,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{id:"index",title:"Welcome to Rucio's documentation",sidebar_label:"Welcome",slug:"/"},sidebar:"docs",next:{title:"Before you get started",permalink:"/documentation/started/before_you_get_started"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Client",id:"client",level:2},{value:"Administration",id:"administration",level:2},{value:"Developer Documentation",id:"developer-documentation",level:2},{value:"Contributing to the Documentation",id:"contributing-to-the-documentation",level:2},{value:"About Us",id:"about-us",level:2}],m={toc:d},p="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)(p,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rucio is a project that provides services and associated libraries for allowing\nscientific collaborations to manage large volumes of data spread across\nfacilities at multiple institutions and organisations. Rucio was originally\ndeveloped to meet the requirements of the high-energy physics experiment\n",(0,i.kt)("a",{parentName:"p",href:"https://atlas.cern/"},"ATLAS"),", and now is continuously extended to support the\nLHC experiments and other diverse scientific communities."),(0,i.kt)("p",null,"Rucio offers advanced features, is highly scalable, and modular. It is a data\nmanagement solution that covers the needs of different communities in the\nscientific domain (e.g., HEP, astronomy, biology)."),(0,i.kt)("p",null,"Below are some resources to help you get you started on your journey."),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"What exactly is Rucio? What were the motivations behind developing such a\nsystem? Who uses it? What powers these systems? Answers to all these questions\nand more can be found by browsing through the sub-sections of this topic."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/started/what_is_rucio"},"What is Rucio")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/started/main_components"},"Main Components")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/started/additional_layers_and_resources"},"Additional Layers and Resources"))),(0,i.kt)("h2",{id:"client"},"Client"),(0,i.kt)("p",null,"The rucio client enables users to interact with the system and access the\ndistributed data. The client can upload, download, manage and delete everything\nfrom single files up to Petabyte sized datasets."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/user/setting_up_the_rucio_client"},"Setting Up the Rucio Client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/user/using_the_client"},"Using the Client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/user/using_the_admin_client"},"Using the Admin Client"))),(0,i.kt)("h2",{id:"administration"},"Administration"),(0,i.kt)("p",null,"This section of the documentation deals with some of the material that an\noperator or administrator of a Rucio environment would require. For example, how\nto install a server or some quick tips for working with the administrative\nCLI. Take a deep dive, but not before you ensure you've read through the\npre-requisites section under each of the topics!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/operator/setting_up_demo"},"Setting up a Rucio demo environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/operator/installing_server"},"Installing Rucio Server")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/operator/installing_daemons"},"Installing Rucio Daemons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/operator/monitoring"},"Monitoring")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"operator/database"},"Database")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/operator/configuration_parameters"},"Configuration parameters"))),(0,i.kt)("h2",{id:"developer-documentation"},"Developer Documentation"),(0,i.kt)("p",null,"Whether you want to develop with Rucio or contribute to the project, the\nDeveloper documentation will help you get started. Peruse some common REST API &\nClient API references that are directly derived from Rucio's python\nlibraries. We also have a contribution guide for those who wish to pitch in."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"client_api/accountclient"},"Client API Documentation")),(0,i.kt)("li",{parentName:"ul"},"REST API Documentation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"contributing"},"Contributing guide"))),(0,i.kt)("h2",{id:"contributing-to-the-documentation"},"Contributing to the Documentation"),(0,i.kt)("p",null,"Documentation is always a work in progress and we welcome both, qualitative and\ntechnical contributions, from the community. Make sure you look into the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rucio/documentation"},"documentations GitHub repository")," and\nunderstand the pre-requisites before you submit your first PR!"),(0,i.kt)("h2",{id:"about-us"},"About Us"),(0,i.kt)("p",null,"Learn more about the brilliant minds pioneering the development and maintenance\nof Rucio in this section. Should you wish to get in touch with us, we've also\nincluded several ways of doing so in the ",(0,i.kt)("strong",{parentName:"p"},"Contact Us")," section."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/project_organisation"},"Project Organisation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/about_our_contributors"},"About Our Contributors")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/documentation/contact_us"},"Contact Us"))))}h.isMDXComponent=!0}}]);