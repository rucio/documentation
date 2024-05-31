"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2400],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=o,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(58168),o=n(98587),r=(n(96540),n(15680)),i=["components"],l={id:"dev_style_guide",title:"Style Guide"},s=void 0,d={unversionedId:"developer/dev_style_guide",id:"developer/dev_style_guide",title:"Style Guide",description:"TL;DR  - Install the provided pre-commits, follow their recommendations",source:"@site/../docs/developer/style_guide.md",sourceDirName:"developer",slug:"/developer/dev_style_guide",permalink:"/documentation/developer/dev_style_guide",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/style_guide.md",tags:[],version:"current",lastUpdatedBy:"Fabio Luchetti",lastUpdatedAt:1716902708,formattedLastUpdatedAt:"May 28, 2024",frontMatter:{id:"dev_style_guide",title:"Style Guide"},sidebar:"docs",previous:{title:"Type Annotation Guide",permalink:"/documentation/developer/type_annotation_guide"},next:{title:"Setting up a WebUI Developer Environment using Visual Studio Code",permalink:"/documentation/developer/webui/webui_frontend_vscode_dev_env"}},p={},u=[{value:"Imports",id:"imports",level:2},{value:"Examples:",id:"examples",level:4},{value:"Query construction",id:"query-construction",level:2},{value:"Rationale",id:"rationale",level:3},{value:"Variable Assignment",id:"variable-assignment",level:3},{value:"SQLAlchemy Syntax",id:"sqlalchemy-syntax",level:3},{value:"Whitespace",id:"whitespace",level:3},{value:"Discouraged Logical Operators",id:"discouraged-logical-operators",level:3},{value:"Python Keywords",id:"python-keywords",level:3},{value:"UPDATE statements",id:"update-statements",level:3}],m={toc:u},c="wrapper";function g(e){var t=e.components,n=(0,o.A)(e,i);return(0,r.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"TL;DR"),"  - Install the provided pre-commits, follow their recommendations"),(0,r.yg)("h1",{id:"general-style"},"General Style"),(0,r.yg)("p",null,"Rucio follows ",(0,r.yg)("a",{parentName:"p",href:"https://flake8.pycqa.org/en/latest/user/index.html"},"flake8")," style, (",(0,r.yg)("a",{parentName:"p",href:"https://github.com/rucio/rucio/blob/master/.flake8"},"with exclusions listed here"),").\nTo use them to lint your code, run:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"python{version} -m pip install flake8\nflake8 --extend-ignore {codes to ignore} /your/code/path\n")),(0,r.yg)("h2",{id:"imports"},"Imports"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Never import using ",(0,r.yg)("inlineCode",{parentName:"li"},"from x import *")),(0,r.yg)("li",{parentName:"ul"},"Order alphabetically, then seperated into sections for internal and external dependencies. Group internal imports at the end of the block, and group imports from the same external package."),(0,r.yg)("li",{parentName:"ul"},"Order modules such that ",(0,r.yg)("inlineCode",{parentName:"li"},"import {packageA}")," is before ",(0,r.yg)("inlineCode",{parentName:"li"},"from {packageB} import {Module}")),(0,r.yg)("li",{parentName:"ul"},"Do not import whole packages when single modules would suffice."),(0,r.yg)("li",{parentName:"ul"},"Unused imports must be removed."),(0,r.yg)("li",{parentName:"ul"},"When a large number of individual imports form a single package/module is required, group them together with ",(0,r.yg)("inlineCode",{parentName:"li"},"()")," and separate them on their own lines."),(0,r.yg)("li",{parentName:"ul"},"When importing a module specifically for type checking (e.g. a core module that may not be included in every distribution of rucio, a type from SQLAlchemy), contain them in a block using")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from typing import TYPE_CHECKING\nif TYPE_CHECKING:\n    from {package} import {module}\n")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://docs.astral.sh/ruff/faq/#how-does-ruffs-import-sorting-compare-to-isort"},(0,r.yg)("inlineCode",{parentName:"a"},"ruff's isort")," implementation")," handles import sorting in the rucio ",(0,r.yg)("inlineCode",{parentName:"p"},"pre-commit"),"s."),(0,r.yg)("h4",{id:"examples"},"Examples:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# Wrong\nimport rucio\nfrom datetime import *\nimport os\n\n# Right\nimport os\nfrom datetime import datetime, timedelta\n\nfrom rucio.core.did import add_did\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# Wrong\nfrom packageA import moduleA, moduleB, moduleC, moduleD, moduleE, moduleF, moduleG, ...\n\n# Right\nfrom packageA import (\n    moduleA,\n    moduleB,\n    moduleC,\n    moduleD,\n    moduleE,\n    moduleF,\n    moduleG,\n    ...\n)\n")),(0,r.yg)("h1",{id:"sqlalchemy-query-guide"},"SQLAlchemy Query Guide"),(0,r.yg)("p",null,"The Rucio project has adopted a particular coding style for its interaction with the database.\nIt can be split into two parts: constructing the SQL statement, and executing it and handling its results."),(0,r.yg)("h2",{id:"query-construction"},"Query construction"),(0,r.yg)("h3",{id:"rationale"},"Rationale"),(0,r.yg)("p",null,"Statements involving the use of SQLAlchemy are not exactly Python code; they are SQL masquerading as Python code.\nHence, there are benefits to adopting a style that can be considered somewhat un-Pythonic:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"It is visually distinct from regular Python code.\nThus, it stands out and assists the developer in entering an \u2018SQL context\u2019."),(0,r.yg)("li",{parentName:"ol"},"It is closer to how one would format actual long SQL statements.")),(0,r.yg)("p",null,"Of course, there are some downsides to this approach.\nThe use of a code formatter is rendered almost impossible, thus requiring manual effort during development.\nHowever, code is written once but read many times.\nAs such, we believe that the benefits outweigh the downsides."),(0,r.yg)("h3",{id:"variable-assignment"},"Variable Assignment"),(0,r.yg)("p",null,"SQL statements should be assigned to a variable, then executed separately.\nThe name ",(0,r.yg)("inlineCode",{parentName:"p"},"stmt")," is a common choice."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# Wrong\nrses = session.execute(select(models.RSE)).scalars().all()\n\n# Right\nstmt = select(\n    models.RSE\n)\nrses = session.execute(stmt).scalars().all()\n")),(0,r.yg)("h3",{id:"sqlalchemy-syntax"},"SQLAlchemy Syntax"),(0,r.yg)("p",null,"All new code should use the more recent SQLAlchemy 2.0 syntax.\nExisting code using the older 1.4 syntax should be migrated to the 2.0 syntax."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# Wrong\nrses = (session.query(models.RSE)\n               .all())\n\n# Right\nstmt = select(\n    models.RSE\n)\nrses = session.execute(stmt).scalars().all()\n")),(0,r.yg)("h3",{id:"whitespace"},"Whitespace"),(0,r.yg)("p",null,"The functions that return basic SQL constructs (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"select()"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"update()"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"delete()"),") should have a newline after the opening parenthesis and before the closing parenthesis.\nSame applies to all methods of those constructs (e.g. ",(0,r.yg)("inlineCode",{parentName:"p"},"distinct()"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"join()"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"where()"),").\nThe latter should be ordered in a way that matches the syntax of SQL, when permittable.\nInside the parentheses, each argument should be indented and put on a separate line."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# Wrong\nstmt = (\n    select(models.RSEAttrAssociation.value)\n    .where(models.RSEAttrAssociation.key == 'fts')\n    .distinct()\n)\n\n# Right\nstmt = select(\n    models.RSEAttrAssociation.value\n).distinct(\n).where(\n    models.RSEAttrAssociation.key == 'fts'\n)\n")),(0,r.yg)("h3",{id:"discouraged-logical-operators"},"Discouraged Logical Operators"),(0,r.yg)("p",null,"The functions ",(0,r.yg)("inlineCode",{parentName:"p"},"and_()")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"or_()")," should be used instead of Python\u2019s bitwise operators ",(0,r.yg)("inlineCode",{parentName:"p"},"&")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"|"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# Wrong\nstmt = select(\n    models.Request,\n    models.DataIdentifier\n).join(\n    models.DataIdentifier,\n    (models.Request.scope == models.DataIdentifier.scope) & (models.Request.name == models.DataIdentifier.name)\n)\n\n# Right\nstmt = select(\n    models.Request,\n    models.DataIdentifier\n).join(\n    models.DataIdentifier,\n    and_(models.DataIdentifier.scope == models.DataIdentifier.scope,\n         models.DataIdentifier.name == models.DataIdentifier.name)\n)\n")),(0,r.yg)("h3",{id:"python-keywords"},"Python Keywords"),(0,r.yg)("p",null,"The functions ",(0,r.yg)("inlineCode",{parentName:"p"},"true()"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"false()"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"null()")," should be used instead of Python\u2019s own keywords."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# Wrong\nstmt = select(\n    models.RSE\n).where(\n    models.RSE.deleted == False\n)\n\n# Right\nstmt = select(\n    models.RSE\n).where(\n    models.RSE.deleted == false()\n)\n")),(0,r.yg)("h3",{id:"update-statements"},"UPDATE statements"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"values()")," method should be used with a dictionary as its sole argument.\nThe keys should be entities from the models.\nThe opening and closing braces of the dictionary should be paired with the parentheses of ",(0,r.yg)("inlineCode",{parentName:"p"},"values()"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"# Wrong\nstmt = update(\n    models.Account\n).where(\n    models.Account == InternalAccount('user')\n).values(\n    status=AccountStatus.DELETED,\n    deleted_at=datetime.now()\n)\n\n# Wrong\nstmt = update(\n    models.Account\n).where(\n    models.Account == InternalAccount('user')\n).values(\n    {\n        'status': AccountStatus.DELETED,\n        'deleted_at': datetime.now()\n    }\n)\n\n# Right\nstmt = update(\n    models.Account\n).where(\n    models.Account == InternalAccount('user')\n).values({\n    models.Account.status: AccountStatus.DELETED,\n    models.Account.deleted_at: datetime.now()\n})\n")),(0,r.yg)("h1",{id:"pre-commits"},"Pre-commits"),(0,r.yg)("p",null,"Rucio uses the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/PyCQA/flake8"},(0,r.yg)("inlineCode",{parentName:"a"},"flake8"))," precommit as a linter, ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/astral-sh/ruff-pre-commit"},(0,r.yg)("inlineCode",{parentName:"a"},"ruff"))," as a formatter,\na custom whitespace remover, and a script to verify a uniform file-header format.\nPlease use these before submitting a pull request."),(0,r.yg)("p",null,"The Rucio repo provides a ",(0,r.yg)("inlineCode",{parentName:"p"},"pre-commit")," that does this automatically.\nInstall it with the below commands."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"pip install pre-commit\npre-commit install\n")),(0,r.yg)("h1",{id:"github-actions"},"GitHub Actions"),(0,r.yg)("p",null,"Code style is checked during a pull request with a GitHub action.\nThe action checks the header and type annotations (including a count and veracity).\nMore information about type annotations can be found ",(0,r.yg)("a",{parentName:"p",href:"/documentation/developer/type_annotation_guide"},"here"),".\nThese checks can also be run locally using"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"tools/count_missing_type_annotations_utils.sh\ntools/run_pyright.sh generate {report_output_path.json}\n")),(0,r.yg)("p",null,"The first action will raise an error if your commits introduce more un-annotated types than it solves,\nand the second ensures the added types are consistent with the rest of the codebase."))}g.isMDXComponent=!0}}]);