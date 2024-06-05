"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[406],{5284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(74848),i=t(28453);const o={id:"developing_with_rucio",title:"Developing with Rucio"},s=void 0,a={id:"user/developing_with_rucio",title:"Developing with Rucio",description:"Rucio Clients",source:"@site/../docs/user/developing_with_rucio.md",sourceDirName:"user",slug:"/user/developing_with_rucio",permalink:"/documentation/user/developing_with_rucio",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/user/developing_with_rucio.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1717593006e3,frontMatter:{id:"developing_with_rucio",title:"Developing with Rucio"},sidebar:"docs",previous:{title:"UploadClient",permalink:"/documentation/client_api/uploadclient"},next:{title:"Setting up a Rucio demo environment",permalink:"/documentation/operator/setting_up_demo"}},l={},c=[{value:"Rucio Clients",id:"rucio-clients",level:2},{value:"Errors and Exceptions",id:"errors-and-exceptions",level:3},{value:"RESTful APIs",id:"restful-apis",level:2},{value:"Date format",id:"date-format",level:3},{value:"SSL only",id:"ssl-only",level:3},{value:"Response formats",id:"response-formats",level:3},{value:"Error handling",id:"error-handling",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"rucio-clients",children:"Rucio Clients"}),"\n",(0,r.jsx)(n.p,{children:"Rucio includes a client class to remove some of the complexity of dealing with\nraw HTTP requests against the RESTful API."}),"\n",(0,r.jsx)(n.p,{children:"All client methods are accessible through the high-level class Client.  Below is\none example of using Rucio Client class:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from rucio.client import Client\nrucio_client = Client()\nrucio_client.ping()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The methods are separated per resource type. The API in full can be viewed\n",(0,r.jsx)(n.a,{href:"/client_api/accountclient",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"errors-and-exceptions",children:"Errors and Exceptions"}),"\n",(0,r.jsxs)(n.p,{children:["In the case of an error, Rucio returns a Python Exception with the appropriate\nTraceback, a detailed error string, and a unique error number. If the error\noccurred on the server side, it will be propagated to the client. The command\nline clients will exit back to the shell with the POSIX ",(0,r.jsx)(n.code,{children:"errno"})," of\nthe unique Rucio error number. The full and up to date list can be found in the\n",(0,r.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/lib/rucio/common/exception.py",children:"Exception\ndefinition"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"restful-apis",children:"RESTful APIs"}),"\n",(0,r.jsx)(n.p,{children:"Each resource can be accessed or modified using specially formed URLs and the\nstandard HTTP methods:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"GET to read\nPOST to create\nPUT to update\nDELETE to remove\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We require that all requests are done over SSL. The API supports JSON\nformats. Rucio uses ",(0,r.jsx)(n.a,{href:"http://oauth.net/",children:"OAuth"})," to authenticate all API\nrequests. The method is to get an authentication token, and use it for the rest\nof the requests. Descriptions of the actions you may perform on each resource\ncan be found in the REST API documentation."]}),"\n",(0,r.jsx)(n.h3,{id:"date-format",children:"Date format"}),"\n",(0,r.jsxs)(n.p,{children:["All dates returned are in UTC and are strings in the following format (RFC 1123,\nex RFC 822): ",(0,r.jsx)(n.code,{children:"Mon, 13 May 2013 10:23:03 UTC"})]}),"\n",(0,r.jsx)(n.p,{children:"In code format, which can be used in all programming languages that support\nstrftime or strptime:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"%a, %d %b %Y %H:%M:%S UTC\n"})}),"\n",(0,r.jsx)(n.h3,{id:"ssl-only",children:"SSL only"}),"\n",(0,r.jsx)(n.p,{children:"We require that all requests(except for the ping) are done over SSL."}),"\n",(0,r.jsx)(n.h3,{id:"response-formats",children:"Response formats"}),"\n",(0,r.jsxs)(n.p,{children:["The currently-available response format for all REST endpoints is the\nstring-based format JavaScript Object Notation (",(0,r.jsx)(n.a,{href:"http://www.json.org/",children:"JSON"}),").\nThe server answer can be one of the following content-type in the http Header:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"Content-type: application/json\nContent-Type: application/x-json-stream\n"})}),"\n",(0,r.jsx)(n.p,{children:"In the last case, it corresponds to JSON objects delimited by newlines(streaming\nJSON for large answer), e.g.:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "id": 1, "foo": "bar" }\n{ "id": 2, "foo": "baz" }\n...\n'})}),"\n",(0,r.jsx)(n.h3,{id:"error-handling",children:"Error handling"}),"\n",(0,r.jsx)(n.p,{children:"Errors are returned using standard HTTP error code syntax.  Additional info is\nincluded in the header or the body of the return call, JSON-formatted with the\nparameters:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"ExceptionClass\nExceptionMessage\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"ExceptionClass"})," refers to Rucio Exceptions."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);