"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3685],{15918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"developer/rest_api_doc","title":"REST API Documentation","description":"Rucio provides a Rest API interface for client-server communication. The code","source":"@site/../docs/developer/rest_api_doc.md","sourceDirName":"developer","slug":"/developer/rest_api_doc","permalink":"/documentation/developer/rest_api_doc","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/rest_api_doc.md","tags":[],"version":"current","lastUpdatedBy":"voetberg","lastUpdatedAt":1739887895000,"frontMatter":{"title":"REST API Documentation"},"sidebar":"docs","previous":{"title":"Project Structure","permalink":"/documentation/developer/project_structure"},"next":{"title":"Type Annotation Guide","permalink":"/documentation/developer/type_annotation_guide"}}');var i=t(74848),s=t(28453);const r={title:"REST API Documentation"},a=void 0,c={},d=[{value:"Tools",id:"tools",level:2},{value:"APISpec",id:"apispec",level:3},{value:"ReDoc",id:"redoc",level:3},{value:"@redocly/openapi-cli",id:"redoclyopenapi-cli",level:3},{value:"Tips",id:"tips",level:2},{value:"Build/verify often",id:"buildverify-often",level:3},{value:"Commit the doc and code changes together",id:"commit-the-doc-and-code-changes-together",level:3},{value:"Skim the OpenAPI definition",id:"skim-the-openapi-definition",level:3},{value:"OpenAPI Tools",id:"openapi-tools",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Rucio provides a Rest API interface for client-server communication. The code\nfor the server is located in the Rucio project under ",(0,i.jsx)(n.code,{children:"lib/rucio/rest/flask/v1"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The Rest API Documentation provides a sufficient documentation of all endpoints\nand should be descriptive enough so that it is not required to look at the code\nanymore."}),"\n",(0,i.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,i.jsxs)(n.p,{children:["The main framework for the Rest API Documentation is ",(0,i.jsx)(n.strong,{children:"OpenAPI"}),". APISpec\nextracts the OpenAPI specification conform method documentation strings from the\nFlask API and constructs the overall OpenAPI specification file. This\nspecification file contains all endpoints and their parameter and return value\ndocumentation."]}),"\n",(0,i.jsx)(n.h3,{id:"apispec",children:"APISpec"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"APISpec"})," is a python framework to extract Python doc comments and generate a\nvalid OpenAPI spec file from it. The documentation for each endpoint is a\nyaml-conform python method doc string starting after ",(0,i.jsx)(n.code,{children:"---"}),". The\n",(0,i.jsx)(n.code,{children:"apispec_webframeworks.flask"})," library connects the Python doc comments with the\nendpoints given by Flask."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tools/generate_rest_api_doc.py"})," generates the OpenAPI specification file with\nAPISpec."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The latest OpenAPI specification for the Rest API Documentation is available\n",(0,i.jsx)(n.a,{href:"pathname:///yaml/rest_api_doc_spec.yaml",children:"here"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"redoc",children:"ReDoc"}),"\n",(0,i.jsx)(n.p,{children:"ReDoc creates a static html front-end for a given specification file. ReDoc has\nseveral advantages over other front-end tools:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It is fast."}),"\n",(0,i.jsx)(n.li,{children:'The generated output is a static file, thus no "hosting" is needed.'}),"\n",(0,i.jsx)(n.li,{children:"The generated file is structured, easy to read, contains a search field, and\nthe possibility to display examples."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Front-end generators only need the spec file and some configuration to generate\na user friendly view of the documentation. Select a generator from the ",(0,i.jsx)(n.a,{href:"https://openapi.tools/#documentation",children:"OpenAPI\nTools"})," and generate your own front-end."]})}),"\n",(0,i.jsx)(n.p,{children:"To generate the ReDoc html file run"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g redoc-cli\nredoc-cli build rest_api_doc_spec_file.yaml --output rest_api_doc.html\n"})}),"\n",(0,i.jsx)(n.h3,{id:"redoclyopenapi-cli",children:"@redocly/openapi-cli"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"openapi-cli"})," verifies the integrity of the generated spec file. Common\nproblems, e.g. typos in keywords and duplicated path specifications, get\nfiltered and produces an error, if found."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"openapi-cli"})," is integrated in the Github Actions, they run in the ",(0,i.jsx)(n.code,{children:"syntax"})," test\nsuite. To manually check the generated spec file, run"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"rucio/tools/test/check_rest_api_documentation.sh FILE\n"})}),"\n",(0,i.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,i.jsx)(n.h3,{id:"buildverify-often",children:"Build/verify often"}),"\n",(0,i.jsx)(n.p,{children:"Syntax errors are not easy to spot and appear often. To efficiently add new\ndocumentation or edit multiple old ones, gradually apply your changes and\nbuild/verify the spec file (both steps take not more than a few seconds). This\nway any error gets caught in the development cycle, not at the end."}),"\n",(0,i.jsx)(n.h3,{id:"commit-the-doc-and-code-changes-together",children:"Commit the doc and code changes together"}),"\n",(0,i.jsx)(n.p,{children:"The doc changes are tightly coupled with the code. Making a lot of changes to\nthe code and then one commit with all the documentation changes leads to a\ndivergent history (What if the code commits get reverted?)."}),"\n",(0,i.jsxs)(n.h3,{id:"skim-the-openapi-definition",children:["Skim the ",(0,i.jsx)(n.a,{href:"https://swagger.io/specification/",children:"OpenAPI"})," definition"]}),"\n",(0,i.jsxs)(n.p,{children:["OpenAPI is feature rich and may have some easier/standardized way to express\nwhat you think. E.g. deprecated fields can be marked with ",(0,i.jsx)(n.code,{children:"deprecated: true"}),".\nKnowing the framework and library you're working with is always a good idea. ;-)"]}),"\n",(0,i.jsx)(n.h3,{id:"openapi-tools",children:(0,i.jsx)(n.a,{href:"https://openapi.tools/",children:"OpenAPI Tools"})}),"\n",(0,i.jsx)(n.p,{children:"The OpenAPI Tools are a collection of tools to support writing, verifying and\ndisplaying Rest API Documentations. They also provide some ideas on how to\nfurther integrate the documentation into other parts of your code base, e.g. for\ninput validation."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);