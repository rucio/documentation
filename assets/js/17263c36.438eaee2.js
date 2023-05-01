"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>y});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),d=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},k=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,y=s["".concat(p,".").concat(c)]||s[c]||u[c]||o;return n?l.createElement(y,a(a({ref:t},k),{},{components:n})):l.createElement(y,a({ref:t},k))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,a[1]=i;for(var d=2;d<o;d++)a[d]=n[d];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var l=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],i={title:"MetaClient"},p=void 0,d={unversionedId:"client_api/metaclient",id:"client_api/metaclient",title:"MetaClient",description:"add\\_key",source:"@site/../docs/client_api/metaclient.md",sourceDirName:"client_api",slug:"/client_api/metaclient",permalink:"/documentation/client_api/metaclient",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/client_api/metaclient.md",tags:[],version:"current",frontMatter:{title:"MetaClient"},sidebar:"docs",previous:{title:"LockClient",permalink:"/documentation/client_api/lockclient"},next:{title:"PingClient",permalink:"/documentation/client_api/pingclient"}},k={},s=[{value:"add_key",id:"add_key",level:2},{value:"list_keys",id:"list_keys",level:2},{value:"list_values",id:"list_values",level:2},{value:"add_value",id:"add_value",level:2},{value:"del_value",id:"del_value",level:2},{value:"del_key",id:"del_key",level:2},{value:"update_key",id:"update_key",level:2}],u={toc:s},c="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)(c,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add_key"},"add","_","key"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Sends the request to add a new key."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key"),": the name for the new key."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key_type"),": the type of the key: all(container, dataset, file), collection(dataset or container), file, derived(compute from file for collection)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"value_type"),": the type of the value, if defined."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"value_regexp"),": the regular expression that values should match, if defined."))),(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Raises"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate"),": if key already exists."))),(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,"  True if key was created successfully.")))))),(0,o.kt)("h2",{id:"list_keys"},"list","_","keys"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Sends the request to list all keys."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,"  a list containing the names of all keys.")))))),(0,o.kt)("h2",{id:"list_values"},"list","_","values"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Sends the request to list all values for a key."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,"  a list containing the names of all values for a key.")))))),(0,o.kt)("h2",{id:"add_value"},"add","_","value"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Sends the request to add a value to a key."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key"),": the name for key."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"value"),": the value."))),(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Raises"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Duplicate"),": if valid already exists."))),(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,"  True if value was created successfully.")))))),(0,o.kt)("h2",{id:"del_value"},"del","_","value"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Delete a value for a key."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key"),": the name for key."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"value"),": the value.")))))),(0,o.kt)("h2",{id:"del_key"},"del","_","key"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Delete an allowed key."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key"),": the name for key.")))))),(0,o.kt)("h2",{id:"update_key"},"update","_","key"),(0,o.kt)("span",{style:{"white-space":"pre"}},(0,o.kt)("p",null,"Update a key."),(0,o.kt)("table",{style:{border:"none"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",{style:{border:"none"}},(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":")),(0,o.kt)("td",{style:{border:"none",backgroundColor:"white",verticalAlign:"top"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"key"),": the name for key."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"type_"),": the type of the value, if defined."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"regexp"),": the regular expression that values should match, if defined.")))))))}y.isMDXComponent=!0}}]);