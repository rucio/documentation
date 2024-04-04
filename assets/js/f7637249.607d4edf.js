"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8185],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18197:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=a(58168),r=a(98587),i=(a(96540),a(15680)),o=["components"],c={id:"sig_metadata",title:"SIG Metadata"},l=void 0,s={unversionedId:"sig_metadata",id:"sig_metadata",title:"SIG Metadata",description:"Objective",source:"@site/../docs/sig_metadata.md",sourceDirName:".",slug:"/sig_metadata",permalink:"/documentation/sig_metadata",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/sig_metadata.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1712227670,formattedLastUpdatedAt:"Apr 4, 2024",frontMatter:{id:"sig_metadata",title:"SIG Metadata"}},p={},d=[{value:"Objective",id:"objective",level:2},{value:"Expected End-Date",id:"expected-end-date",level:2},{value:"Means to achieve the objective",id:"means-to-achieve-the-objective",level:2},{value:"Convener",id:"convener",level:2}],u={toc:d},m="wrapper";function y(e){var t=e.components,a=(0,r.A)(e,o);return(0,i.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"objective"},"Objective"),(0,i.yg)("p",null,"The purpose of this SIG is to reach out to communities who are either already using\nRucio's metadata functionality or interested in using it, to ascertain if the\nfunctionality currently provided in this area is sufficient for their current and\nexpected future use cases. This information will be distilled into the form of a\nsmall report, where, if missing functionality is identified, the report will serve\nto aggregate any similar requests and prioritise them, with the goal of delivering\na tentative roadmap to guide development."),(0,i.yg)("h2",{id:"expected-end-date"},"Expected End-Date"),(0,i.yg)("p",null,"End of ",(0,i.yg)("del",{parentName:"p"},"2023")," 2024"),(0,i.yg)("h2",{id:"means-to-achieve-the-objective"},"Means to achieve the objective"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Mattermost channel: ",(0,i.yg)("a",{parentName:"li",href:"https://mattermost.web.cern.ch/rucio/channels/metadata"},"#metadata")),(0,i.yg)("li",{parentName:"ul"},"eMail list: ",(0,i.yg)("a",{parentName:"li",href:"mailto:rucio-sig-metadata@cern.ch"},"rucio-sig-metadata@cern.ch")),(0,i.yg)("li",{parentName:"ul"},"ad hoc meetings with interested communities either over Zoom or asynchronously\nover Mattermost.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://indico.cern.ch/event/1051395/"},"SIG Metadata Kickoff"),", Weekly Rucio Meeting, July 2021"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://indico.cern.ch/event/1068644/"},"Metadata tests in Belle II"),", Weekly Rucio Meeting, September 2021"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://indico.cern.ch/event/1037922/"},"Astronomy & Metadata Panel"),", 4th Rucio Community Workshop, September 2021"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://indico.cern.ch/event/1160579/"},"Recent metadata developments & SIG Metadata status"),", Weekly Rucio Meeting, June 2022"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://indico.cern.ch/event/1185600/contributions/5120129/"},"SIG Metadata Update"),", 5th Rucio Community Workshop, November 2022")))),(0,i.yg)("h2",{id:"convener"},"Convener"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/robbarnsley"},"Rob Barnsley")))}y.isMDXComponent=!0}}]);