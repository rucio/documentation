(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(3),i=r(7),n=(r(0),r(367)),c=["components"],o={title:"1.26.0rc2",sidebar_label:"1.26.0rc2"},s={unversionedId:"release-notes/1.26.0rc2",id:"release-notes/1.26.0rc2",isDocsHomePage:!1,title:"1.26.0rc2",description:"Release Candidate",source:"@site/../docs/release-notes/1.26.0rc2.md",sourceDirName:"release-notes",slug:"/release-notes/1.26.0rc2",permalink:"/documentation/release-notes/1.26.0rc2",editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.26.0rc2.md",version:"current",lastUpdatedBy:"Martin Barisits",lastUpdatedAt:1637754454,formattedLastUpdatedAt:"11/24/2021",sidebar_label:"1.26.0rc2",frontMatter:{title:"1.26.0rc2",sidebar_label:"1.26.0rc2"}},l=[{value:"Release Candidate",id:"release-candidate",children:[]},{value:"Upgrade Instructions",id:"upgrade-instructions",children:[]},{value:"Important changes",id:"important-changes",children:[]},{value:"General",id:"general",children:[{value:"Features",id:"features",children:[]},{value:"Enhancements",id:"enhancements",children:[]},{value:"Bugs",id:"bugs",children:[]}]}],b={toc:l};function u(e){var t=e.components,r=Object(i.a)(e,c);return Object(n.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"release-candidate"},"Release Candidate"),Object(n.b)("p",null,"This is a release candidate! Only to be used in testing environments!"),Object(n.b)("h2",{id:"upgrade-instructions"},"Upgrade Instructions"),Object(n.b)("p",null,"This feature release requires a database schema upgrade. Please consult the ",Object(n.b)("a",{parentName:"p",href:"https://rucio.cern.ch/documentation/database/"},"documentation")," about upgrading your database schema."),Object(n.b)("p",null,"The following changes are necessary and are covered by the ",Object(n.b)("inlineCode",{parentName:"p"},"alembic upgrade head")," command:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Extending columns for filter and replication rules in ",Object(n.b)("inlineCode",{parentName:"p"},"subscriptions"),". (Alembic revision ",Object(n.b)("inlineCode",{parentName:"p"},"e138c364ebd0"),")")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add index and adapt column colum length in ",Object(n.b)("inlineCode",{parentName:"p"},"messages")," table. (Alembic revision `30fa38b6434e)")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add index on ",Object(n.b)("inlineCode",{parentName:"p"},"replicas")," table. (Alembic revision ",Object(n.b)("inlineCode",{parentName:"p"},"52153819589c"),")")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Add column and index on ",Object(n.b)("inlineCode",{parentName:"p"},"did_meta")," table. (Alembic revision ",Object(n.b)("inlineCode",{parentName:"p"},"ccdbcd48206e"),")")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Remove PK in ",Object(n.b)("inlineCode",{parentName:"p"},"configs_history")," table. (Alembic revision ",Object(n.b)("inlineCode",{parentName:"p"},"739064d31565"),")"))),Object(n.b)("h2",{id:"important-changes"},"Important changes"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"This release removed the deprecated ",Object(n.b)("inlineCode",{parentName:"p"},"RSEBlacklisted")," exception and replaced it by ",Object(n.b)("inlineCode",{parentName:"p"},"RSEWriteBlocked"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"The ",Object(n.b)("inlineCode",{parentName:"p"},"reaper2")," daemon was renamed to ",Object(n.b)("inlineCode",{parentName:"p"},"reaper"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"This release drops the support of mysql version 5."))),Object(n.b)("h2",{id:"general"},"General"),Object(n.b)("h3",{id:"features"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clients: Develop a lightweight client for Rucio ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4097"},"#4097")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Versioned (History) Tables should be defined explicitly ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2063"},"#2063")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Core & Internal : Add did_type column + index on did_meta table ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4668"},"#4668")),Object(n.b)("li",{parentName:"ul"},"Database: Add new index on messages.services ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4647"},"#4647")),Object(n.b)("li",{parentName:"ul"},"Multi VO: Supporting longer VO names in multi-VO rucio? ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4548"},"#4548")),Object(n.b)("li",{parentName:"ul"},"Release management: pyflakes, flake8, pylint, pycodestyle dependency upgrade ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4162"},"#4162")),Object(n.b)("li",{parentName:"ul"},"Replicas: replica sorting by GeoIP improvements ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4661"},"#4661")),Object(n.b)("li",{parentName:"ul"},"Rules: Possibility to inject rules delayed ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2639"},"#2639")),Object(n.b)("li",{parentName:"ul"},"Subscriptions: Subscriptions columns for filter and replication_rules need to be extended ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4298"},"#4298")),Object(n.b)("li",{parentName:"ul"},"Testing: Testing TPC transfers with Rucio  ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4190"},"#4190")),Object(n.b)("li",{parentName:"ul"},"Transfers: Rework transfers workflow ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4499"},"#4499"))),Object(n.b)("h3",{id:"enhancements"},"Enhancements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clients: Inconsistency in command-line options to specify RSEs ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1839"},"#1839")),Object(n.b)("li",{parentName:"ul"},"Clients: Further list_replicas changes ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4603"},"#4603")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Follow-up for moving EXTRA_MODULES importing to util function ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4168"},"#4168")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Replace FTSState ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4241"},"#4241")),Object(n.b)("li",{parentName:"ul"},"Core & Internals: Remove further sensitive language ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4677"},"#4677")),Object(n.b)("li",{parentName:"ul"},"Database: Add an rse_id index for the replicas table ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4627"},"#4627")),Object(n.b)("li",{parentName:"ul"},"Deletion: Make the time before tombstone is set configurable ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4436"},"#4436")),Object(n.b)("li",{parentName:"ul"},"Deletion: Rename reaper2 to reaper ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4462"},"#4462")),Object(n.b)("li",{parentName:"ul"},"REST & API: Remove webpy endpoints and dependency ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4044"},"#4044")),Object(n.b)("li",{parentName:"ul"},"Release management: setup.py and requirements.txt overhaul ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4456"},"#4456")),Object(n.b)("li",{parentName:"ul"},"Release management: Update PyYAML for tests due to CVE-2020-14343 ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4501"},"#4501")),Object(n.b)("li",{parentName:"ul"},"Release management: Python 3.9 support ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4670"},"#4670")),Object(n.b)("li",{parentName:"ul"},"Replicas: Allow specification of a default tombstone when registering replicas ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4491"},"#4491")),Object(n.b)("li",{parentName:"ul"},"Testing: Python 3.8(/3.9) in Testing ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4453"},"#4453")),Object(n.b)("li",{parentName:"ul"},"Transfers: Multihop intermediate replica tombstone ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4188"},"#4188")),Object(n.b)("li",{parentName:"ul"},"WebUI: Error message for unregistered users in webui is ATLAS specific ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1109"},"#1109"))),Object(n.b)("h3",{id:"bugs"},"Bugs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Core & Internals: Fix FTSCompleteState capitalisation ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4562"},"#4562")),Object(n.b)("li",{parentName:"ul"},"Release management: Upgrade urllib due to CVE-2021-33503 ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4680"},"#4680")),Object(n.b)("li",{parentName:"ul"},"Testing: timeouts in integration_tests ",Object(n.b)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4674"},"#4674"))))}u.isMDXComponent=!0},367:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(r),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||n;return r?i.a.createElement(d,o(o({ref:t},l),{},{components:r})):i.a.createElement(d,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,c=new Array(n);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<n;l++)c[l]=r[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);