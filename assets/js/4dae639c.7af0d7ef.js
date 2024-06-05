"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8236],{15680:(e,t,o)=>{o.d(t,{xA:()=>l,yg:()=>f});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(f,a(a({ref:t},l),{},{components:o})):n.createElement(f,a({ref:t},l))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},92654:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=o(58168),r=o(98587),i=(o(96540),o(15680)),a=["components"],s={id:"project_organisation",title:"Project Organisation"},c=void 0,p={unversionedId:"project_organisation",id:"project_organisation",title:"Project Organisation",description:"Rucio is organised as a community-driven, open-source, project.",source:"@site/../docs/project_organisation.md",sourceDirName:".",slug:"/project_organisation",permalink:"/documentation/project_organisation",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/project_organisation.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1717586588,formattedLastUpdatedAt:"Jun 5, 2024",frontMatter:{id:"project_organisation",title:"Project Organisation"},sidebar:"docs",previous:{title:"Developing the WebUI Frontend",permalink:"/documentation/developer/webui/webui_frontend"},next:{title:"Rucio Advisory Board",permalink:"/documentation/rucio_advisory_board"}},l={},d=[{value:"Project leader",id:"project-leader",level:2},{value:"Component leads",id:"component-leads",level:2},{value:"Rucio Advisory Board",id:"rucio-advisory-board",level:2},{value:"Special Interest Groups",id:"special-interest-groups",level:2},{value:"Contributors / Developers",id:"contributors--developers",level:2}],u={toc:d},m="wrapper";function f(e){var t=e.components,s=(0,r.A)(e,a);return(0,i.yg)(m,(0,n.A)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Rucio is organised as a community-driven, open-source, project.\nAn open development team, comprised of technical experts rooted in the scientific\ncommunity, drives the development based on expertise, technical best-practices and\ninput from their respective communities. This openness is core to the identity and\nthe success of the project."),(0,i.yg)("p",null,"To organise the daily development work as well as the long-term strategic objectives\nof the software, the project consists of several entities described on this page."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Project organisation",src:o(72676).A,width:"936",height:"487"})),(0,i.yg)("p",null,'A list of members of the current "Core Team" can be seen ',(0,i.yg)("a",{parentName:"p",href:"https://rucio.cern.ch/team.html"},"here"),"."),(0,i.yg)("h2",{id:"project-leader"},"Project leader"),(0,i.yg)("p",null,"The project leader has the overall responsibility of steering the project. This\nincludes coordinating, planning, and assessing the development activity of the\nRucio developers."),(0,i.yg)("h2",{id:"component-leads"},"Component leads"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"/documentation/component_leads"},"component leads")," take formal responsibility in planning\nand developing contributions for their respective components. They are the\ncore experts and the point-of-contact in case of issues as well as to guide new\ndevelopments within their components."),(0,i.yg)("h2",{id:"rucio-advisory-board"},"Rucio Advisory Board"),(0,i.yg)("p",null,"The primary function of the Rucio advisory board (RAB) is to provide expertise from\nrepresentatives of Rucio communities and to advise the Rucio project leader.\nLong-term priorities and plans of communities should be discussed by the RAB in order\nto advise on the alignment of Rucio project objectives and plans. This should also\nlead to the identification of common objectives to form common development efforts.\nThe resource and person-power situation within the Rucio project, the discussion and\nidentification of funding streams and collaboration on funded projects are also\nwithin the scope of the RAB. The Rucio project lead communicates the advice given by\nthe advisory board to the development team."),(0,i.yg)("p",null,"Detailed mandate and responsibility of the board can be found ",(0,i.yg)("a",{parentName:"p",href:"/documentation/rucio_advisory_board"},"here"),"."),(0,i.yg)("h2",{id:"special-interest-groups"},"Special Interest Groups"),(0,i.yg)("p",null,"Rucio Special Interest Groups (SIG) serve the purpose to offer a forum for interested users,\noperators, and developers to discuss and plan the evolution of a specific part of Rucio.\nThe topic of a SIG needs to be well-defined and the community interest on the topic\nneeds to be above a threshold to justify the creation of a SIG, instead of covering the\ntopic just within the weekly Rucio meeting. A SIG topic can involve one or multiple\nRucio components, or even the entire system. SIGs are open to any interrested community\nmember."),(0,i.yg)("p",null,"Detailed information for Rucio SIGs can be found ",(0,i.yg)("a",{parentName:"p",href:"/documentation/special_interest_groups"},"here"),"."),(0,i.yg)("h2",{id:"contributors--developers"},"Contributors / Developers"),(0,i.yg)("p",null,"Rucio could not exist without the numerous contributors who spent their valuable time\nto improve the software. A list of contributors can be seen ",(0,i.yg)("a",{parentName:"p",href:"about_our_contributors"},"here"),"."))}f.isMDXComponent=!0},72676:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/project_organisation-e1e34c3152608271d4777679460a9f48.svg"}}]);