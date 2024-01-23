"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:i,r[1]=p;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],p={title:"REST API Documentation"},l=void 0,c={unversionedId:"developer/rest_api_doc",id:"developer/rest_api_doc",title:"REST API Documentation",description:"Rucio provides a Rest Api interface for client-server communication. The code",source:"@site/../docs/developer/rest_api_doc.md",sourceDirName:"developer",slug:"/developer/rest_api_doc",permalink:"/documentation/developer/rest_api_doc",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/rest_api_doc.md",tags:[],version:"current",lastUpdatedBy:"Victor Azizi",lastUpdatedAt:1706000596,formattedLastUpdatedAt:"Jan 23, 2024",frontMatter:{title:"REST API Documentation"},sidebar:"docs",previous:{title:"Contributing Guide",permalink:"/documentation/contributing"},next:{title:"Type Annotation Guide",permalink:"/documentation/developer/type_annotation_guide"}},s={},d=[{value:"Tools",id:"tools",level:2},{value:"ApiSpec",id:"apispec",level:3},{value:"ReDoc",id:"redoc",level:3},{value:"@redocly/openapi-cli",id:"redoclyopenapi-cli",level:3},{value:"Tips",id:"tips",level:2},{value:"Build/verify often",id:"buildverify-often",level:3},{value:"Commit the doc and code changes together",id:"commit-the-doc-and-code-changes-together",level:3},{value:"Skim the OpenApi definition",id:"skim-the-openapi-definition",level:3},{value:"OpenApi Tools",id:"openapi-tools",level:3}],u={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rucio provides a Rest Api interface for client-server communication. The code\nfor the server is located in the Rucio project under ",(0,a.kt)("inlineCode",{parentName:"p"},"lib/rucio/rest/flask/v1"),"."),(0,a.kt)("p",null,"The Rest Api Documentation provides a sufficient documentation of all endpoints\nand should be descriptive enough so that it is not required to look at the code\nanymore."),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("p",null,"The main framework for the Rest Api Documentation is ",(0,a.kt)("strong",{parentName:"p"},"OpenApi"),". ApiSpec\nextracts the OpenApi specification conform method documentation strings from the\nFlask Api and constructs the overall OpenApi specification file. This\nspecification file contains all endpoints and their parameter and return value\ndocumentation."),(0,a.kt)("h3",{id:"apispec"},"ApiSpec"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ApiSpec")," is a python framework to extract Python doc comments and generate a\nvalid OpenApi spec file from it. The documentation for each endpoint is a\nyaml-conform python method doc string starting after ",(0,a.kt)("inlineCode",{parentName:"p"},"---"),". The\n",(0,a.kt)("inlineCode",{parentName:"p"},"apispec_webframeworks.flask")," library connects the Python doc comments with the\nendpoints given by Flask."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tools/generate_rest_api_doc.py")," generates the OpenApi specification file with\nApiSpec."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The latest OpenApi specification for the Rest Api Documentation is available\n",(0,a.kt)("a",{parentName:"p",href:"pathname:///yaml/rest_api_doc_spec.yaml"},"here"),".")),(0,a.kt)("h3",{id:"redoc"},"ReDoc"),(0,a.kt)("p",null,"ReDoc creates a static html front-end for a given specification file. ReDoc has\nseveral advantages over other front-end tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is fast."),(0,a.kt)("li",{parentName:"ul"},'The generated output is a static file, thus no "hosting" is needed.'),(0,a.kt)("li",{parentName:"ul"},"The generated file is structured, easy to read, contains a search field, and\nthe possibility to display examples.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Front-end generators only need the spec file and some configuration to generate\na user friendly view of the documentation. Select a generator from the ",(0,a.kt)("a",{parentName:"p",href:"https://openapi.tools/#documentation"},"OpenApi\nTools")," and generate your own front-end.")),(0,a.kt)("p",null,"To generate the ReDoc html file run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g redoc-cli\nredoc-cli build rest_api_doc_spec_file.yaml --output rest_api_doc.html\n")),(0,a.kt)("h3",{id:"redoclyopenapi-cli"},"@redocly/openapi-cli"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"openapi-cli")," verifies the integrity of the generated spec file. Common\nproblems, e.g. typos in keywords and duplicated path specifications, get\nfiltered and produces an error, if found."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"openapi-cli")," is integrated in the Github Actions, they run in the ",(0,a.kt)("inlineCode",{parentName:"p"},"syntax")," test\nsuite. To manually check the generated spec file, run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rucio/tools/test/check_rest_api_documentation.sh FILE\n")),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("h3",{id:"buildverify-often"},"Build/verify often"),(0,a.kt)("p",null,"Syntax errors are not easy to spot and appear often. To efficiently add new\ndocumentation or edit multiple old ones, gradually apply your changes and\nbuild/verify the spec file (both steps take not more than a few seconds). This\nway any error gets caught in the development cycle, not at the end."),(0,a.kt)("h3",{id:"commit-the-doc-and-code-changes-together"},"Commit the doc and code changes together"),(0,a.kt)("p",null,"The doc changes are tightly coupled with the code. Making a lot of changes to\nthe code and then one commit with all the documentation changes leads to a\ndivergent history (What if the code commits get reverted?)."),(0,a.kt)("h3",{id:"skim-the-openapi-definition"},"Skim the ",(0,a.kt)("a",{parentName:"h3",href:"https://swagger.io/specification/"},"OpenApi")," definition"),(0,a.kt)("p",null,"OpenApi is feature rich and may have some easier/standardized way to express\nwhat you think. E.g. deprecated fields can be marked with ",(0,a.kt)("inlineCode",{parentName:"p"},"deprecated: true"),".\nKnowing the framework and library you're working with is always a good idea. ;-)"),(0,a.kt)("h3",{id:"openapi-tools"},(0,a.kt)("a",{parentName:"h3",href:"https://openapi.tools/"},"OpenApi Tools")),(0,a.kt)("p",null,"The OpenApi Tools are a collection of tools to support writing, verifying and\ndisplaying Rest Api Documentations. They also provide some ideas on how to\nfurther integrate the documentation into other parts of your code base, e.g. for\ninput validation."))}h.isMDXComponent=!0}}]);