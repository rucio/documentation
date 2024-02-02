"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8584],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>d});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,d=c["".concat(u,".").concat(g)]||c[g]||m[g]||i;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},59820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(45072),r=n(95656),i=(n(11504),n(95788)),l=["components"],o={title:"1.22.0"},u=void 0,s={unversionedId:"release-notes/1.22.0",id:"release-notes/1.22.0",title:"1.22.0",description:"Upgrade Instructions",source:"@site/../docs/release-notes/1.22.0.md",sourceDirName:"release-notes",slug:"/release-notes/1.22.0",permalink:"/documentation/release-notes/1.22.0",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.22.0.md",tags:[],version:"current",frontMatter:{title:"1.22.0"}},p={},c=[{value:"Upgrade Instructions",id:"upgrade-instructions",level:2},{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:c},g="wrapper";function d(e){var t=e.components,n=(0,r.c)(e,l);return(0,i.yg)(g,(0,a.c)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),(0,i.yg)("p",null,"This feature release requires a database schema upgrade. Please consult the ",(0,i.yg)("a",{parentName:"p",href:"https://rucio.readthedocs.io/en/latest/database.html"},"documentation")," about upgrading your database schema."),(0,i.yg)("p",null,"The following changes are necessary and are covered by the ",(0,i.yg)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"OAuth2.0 and JWT feature support (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"li"},"d1189a09c6e0"),")")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Update ",(0,i.yg)("inlineCode",{parentName:"li"},"IDENTITIES_TYPE_CHK")," constraint in ",(0,i.yg)("inlineCode",{parentName:"li"},"identities")," table"),(0,i.yg)("li",{parentName:"ul"},"Update ",(0,i.yg)("inlineCode",{parentName:"li"},"ACCOUNT_MAP_ID_TYPE_CHK")," constraint in ",(0,i.yg)("inlineCode",{parentName:"li"},"account_map")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"oidc_scope")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"audience")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"refresh_token")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"refresh")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"TOKENS_REFRESH_CHK")," constraint to ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"refresh_start")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"refresh_expired_at")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"refresh_lifetime")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"oauth_requests")," table"),(0,i.yg)("li",{parentName:"ul"},"Change size of ",(0,i.yg)("inlineCode",{parentName:"li"},"token")," column in ",(0,i.yg)("inlineCode",{parentName:"li"},"tokens")," table")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Changes for Multi-VO functionality (Alembic revision ",(0,i.yg)("inlineCode",{parentName:"li"},"a118956323f8"),")")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Added ",(0,i.yg)("inlineCode",{parentName:"li"},"vos")," table"),(0,i.yg)("li",{parentName:"ul"},"Insert default row to ",(0,i.yg)("inlineCode",{parentName:"li"},"vos")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"vo")," column to ",(0,i.yg)("inlineCode",{parentName:"li"},"rses")," table"),(0,i.yg)("li",{parentName:"ul"},"Add ",(0,i.yg)("inlineCode",{parentName:"li"},"RSES_VOS_FK")," foreign key constraint to ",(0,i.yg)("inlineCode",{parentName:"li"},"rses")," table"),(0,i.yg)("li",{parentName:"ul"},"Update ",(0,i.yg)("inlineCode",{parentName:"li"},"RSES_RSE_UQ")," unique contraint in ",(0,i.yg)("inlineCode",{parentName:"li"},"rses")," table")),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authentication & Authorisation: Rucio user authentication via OIDC protocol (XDC IAM), getting user info and JWT tokens ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2612"},"#2612")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Need VO table and VO column in RSE table ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2727"},"#2727")),(0,i.yg)("li",{parentName:"ul"},"Deletion: Reaper 2.0 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2412"},"#2412")),(0,i.yg)("li",{parentName:"ul"},"Monitoring & Logging: Add support for prometheus in core.monitor ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3124"},"#3124")),(0,i.yg)("li",{parentName:"ul"},"Release management: Add oidc auth templates to setup.py ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3348"},"#3348")),(0,i.yg)("li",{parentName:"ul"},"Release management: Dependency upgrade for 1.22 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3360"},"#3360")),(0,i.yg)("li",{parentName:"ul"},"Release management: Better way to deal with configuration / permissions / policy ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/533"},"#533"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Deletion: Protection of sources too strict in the reaper ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1637"},"#1637"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Authentication & Authorisation: Fixes to OIDC AuthN/Z after first deployment on a testbed ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3337"},"#3337")),(0,i.yg)("li",{parentName:"ul"},"Deletion: only_delete_obsolete is not working properly ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/3399"},"#3399"))))}d.isMDXComponent=!0}}]);