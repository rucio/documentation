(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(3),r=n(7),i=(n(0),n(342)),a={id:"new-content-contribution-guide",title:"New Content Contribution Guide",sidebar_label:"New Content Contribution Guide"},c={unversionedId:"new-content-contribution-guide",id:"new-content-contribution-guide",isDocsHomePage:!1,title:"New Content Contribution Guide",description:"There are two types of documentation hosted on Rucio as detailed",source:"@site/../docs/New-content-contribution-guide.md",sourceDirName:".",slug:"/new-content-contribution-guide",permalink:"/documentation/new-content-contribution-guide",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1619774119,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"New Content Contribution Guide",frontMatter:{id:"new-content-contribution-guide",title:"New Content Contribution Guide",sidebar_label:"New Content Contribution Guide"},sidebar:"docs",previous:{title:"Contributing Improvements",permalink:"/documentation/contributing-improvements"},next:{title:"About Our Contributors",permalink:"/documentation/about-our-contributors"}},u=[{value:"API Documentation",id:"api-documentation",children:[]},{value:"Markdown documentation",id:"markdown-documentation",children:[]}],b={toc:u};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two types of documentation hosted on Rucio as detailed\nin the ",Object(i.b)("a",{parentName:"p",href:"/documentation/page-types"},"types of pages")," section. Should you wish to\nadd content to any of them, kindly follow the guidelines below\nper the section."),Object(i.b)("h2",{id:"api-documentation"},"API Documentation"),Object(i.b)("p",null,"The source for this section lives in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/rucio"))," GitHub\nrepository. Below are the two sub-categories that we maintain\ndocumentation for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/tree/master/lib/rucio/web/rest/flaskapi/v1"},Object(i.b)("strong",{parentName:"a"},"Rest API")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/rucio/tree/master/lib/rucio/client"},Object(i.b)("strong",{parentName:"a"},"Client API"))))),Object(i.b)("p",null,"Since the documentation is directly derived from the source by\nSphinx, ensure you're incorporating the relevant information into\nthe respective .",Object(i.b)("inlineCode",{parentName:"p"},".py")," files.\nExisting ",Object(i.b)("inlineCode",{parentName:"p"},".py")," files in the directories should give you an idea of\nhow this is done across the project.\nOnce the changes have been approved & pushed into the main branch,\nyou will need to submit a Pull Request to the ",Object(i.b)("strong",{parentName:"p"},"sphinx")," branch of the\n",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/documentation"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/documentation"))," repository so that the changes can be\nreflected on the website."),Object(i.b)("h2",{id:"markdown-documentation"},"Markdown documentation"),Object(i.b)("p",null,"The source for this section lives in the ",Object(i.b)("inlineCode",{parentName:"p"},"docs")," folder within the\n",Object(i.b)("strong",{parentName:"p"},"master")," branch of the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/rucio/documentation"},Object(i.b)("inlineCode",{parentName:"a"},"rucio/documentation"))," GitHub repository. Any\ncontent that needs to be added should be written in Markdown and\nadded to this folder. Should you wish to add it to the sidebar for\nease of navigation, you will also need to modify ",Object(i.b)("inlineCode",{parentName:"p"},"sidebars.json"),".\nOnce the changes are approved, GitHub actions will trigger the build\nprocess for merging your changes with the master branch."))}d.isMDXComponent=!0},342:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},l=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),s=d(n),l=o,m=s["".concat(a,".").concat(l)]||s[l]||p[l]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var b=2;b<i;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);