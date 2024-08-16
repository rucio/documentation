"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2400],{97362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=t(74848),o=t(28453);const i={id:"dev_style_guide",title:"Style Guide"},r="General Style",l={id:"developer/dev_style_guide",title:"Style Guide",description:"TL;DR  - Install the provided pre-commits, follow their recommendations",source:"@site/../docs/developer/style_guide.md",sourceDirName:"developer",slug:"/developer/dev_style_guide",permalink:"/documentation/developer/dev_style_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/style_guide.md",tags:[],version:"current",lastUpdatedBy:"voetberg",lastUpdatedAt:1723817264e3,frontMatter:{id:"dev_style_guide",title:"Style Guide"},sidebar:"docs",previous:{title:"Type Annotation Guide",permalink:"/documentation/developer/type_annotation_guide"},next:{title:"Setting up a WebUI Developer Environment using Visual Studio Code",permalink:"/documentation/developer/webui/webui_frontend_vscode_dev_env"}},d={},a=[{value:"Imports",id:"imports",level:2},{value:"Examples:",id:"examples",level:4},{value:"Query construction",id:"query-construction",level:2},{value:"Rationale",id:"rationale",level:3},{value:"Variable Assignment",id:"variable-assignment",level:3},{value:"SQLAlchemy Syntax",id:"sqlalchemy-syntax",level:3},{value:"Whitespace",id:"whitespace",level:3},{value:"Discouraged Logical Operators",id:"discouraged-logical-operators",level:3},{value:"Python Keywords",id:"python-keywords",level:3},{value:"UPDATE statements",id:"update-statements",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TL;DR"}),"  - Install the provided pre-commits, follow their recommendations"]}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"general-style",children:"General Style"})}),"\n",(0,s.jsxs)(n.p,{children:["Rucio follows ",(0,s.jsx)(n.a,{href:"https://flake8.pycqa.org/en/latest/user/index.html",children:"flake8"})," style, (",(0,s.jsx)(n.a,{href:"https://github.com/rucio/rucio/blob/master/.flake8",children:"with exclusions listed here"}),").\nTo use them to lint your code, run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"python{version} -m pip install flake8\nflake8 --extend-ignore {codes to ignore} /your/code/path\n"})}),"\n",(0,s.jsx)(n.h2,{id:"imports",children:"Imports"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Never import using ",(0,s.jsx)(n.code,{children:"from x import *"})]}),"\n",(0,s.jsx)(n.li,{children:"Order alphabetically, then seperated into sections for internal and external dependencies. Group internal imports at the end of the block, and group imports from the same external package."}),"\n",(0,s.jsxs)(n.li,{children:["Order modules such that ",(0,s.jsx)(n.code,{children:"import {packageA}"})," is before ",(0,s.jsx)(n.code,{children:"from {packageB} import {Module}"})]}),"\n",(0,s.jsx)(n.li,{children:"Do not import whole packages when single modules would suffice."}),"\n",(0,s.jsx)(n.li,{children:"Unused imports must be removed."}),"\n",(0,s.jsxs)(n.li,{children:["When a large number of individual imports form a single package/module is required, group them together with ",(0,s.jsx)(n.code,{children:"()"})," and separate them on their own lines."]}),"\n",(0,s.jsx)(n.li,{children:"When importing a module specifically for type checking (e.g. a core module that may not be included in every distribution of rucio, a type from SQLAlchemy), contain them in a block using"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from typing import TYPE_CHECKING\nif TYPE_CHECKING:\n    from {package} import {module}\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.a,{href:"https://docs.astral.sh/ruff/faq/#how-does-ruffs-import-sorting-compare-to-isort",children:[(0,s.jsx)(n.code,{children:"ruff's isort"})," implementation"]})," handles import sorting in the rucio ",(0,s.jsx)(n.code,{children:"pre-commit"}),"s."]}),"\n",(0,s.jsx)(n.h4,{id:"examples",children:"Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Wrong\nimport rucio\nfrom datetime import *\nimport os\n\n# Right\nimport os\nfrom datetime import datetime, timedelta\n\nfrom rucio.core.did import add_did\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Wrong\nfrom packageA import moduleA, moduleB, moduleC, moduleD, moduleE, moduleF, moduleG, ...\n\n# Right\nfrom packageA import (\n    moduleA,\n    moduleB,\n    moduleC,\n    moduleD,\n    moduleE,\n    moduleF,\n    moduleG,\n    ...\n)\n"})}),"\n",(0,s.jsx)(n.h1,{id:"sqlalchemy-query-guide",children:"SQLAlchemy Query Guide"}),"\n",(0,s.jsx)(n.p,{children:"The Rucio project has adopted a particular coding style for its interaction with the database.\nIt can be split into two parts: constructing the SQL statement, and executing it and handling its results."}),"\n",(0,s.jsx)(n.h2,{id:"query-construction",children:"Query construction"}),"\n",(0,s.jsx)(n.h3,{id:"rationale",children:"Rationale"}),"\n",(0,s.jsx)(n.p,{children:"Statements involving the use of SQLAlchemy are not exactly Python code; they are SQL masquerading as Python code.\nHence, there are benefits to adopting a style that can be considered somewhat un-Pythonic:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"It is visually distinct from regular Python code.\nThus, it stands out and assists the developer in entering an \u2018SQL context\u2019."}),"\n",(0,s.jsx)(n.li,{children:"It is closer to how one would format actual long SQL statements."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Of course, there are some downsides to this approach.\nThe use of a code formatter is rendered almost impossible, thus requiring manual effort during development.\nHowever, code is written once but read many times.\nAs such, we believe that the benefits outweigh the downsides."}),"\n",(0,s.jsx)(n.h3,{id:"variable-assignment",children:"Variable Assignment"}),"\n",(0,s.jsxs)(n.p,{children:["SQL statements should be assigned to a variable, then executed separately.\nThe name ",(0,s.jsx)(n.code,{children:"stmt"})," is a common choice."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Wrong\nrses = session.execute(select(models.RSE)).scalars().all()\n\n# Right\nstmt = select(\n    models.RSE\n)\nrses = session.execute(stmt).scalars().all()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"sqlalchemy-syntax",children:"SQLAlchemy Syntax"}),"\n",(0,s.jsx)(n.p,{children:"All new code should use the more recent SQLAlchemy 2.0 syntax.\nExisting code using the older 1.4 syntax should be migrated to the 2.0 syntax."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Wrong\nrses = (session.query(models.RSE)\n               .all())\n\n# Right\nstmt = select(\n    models.RSE\n)\nrses = session.execute(stmt).scalars().all()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"whitespace",children:"Whitespace"}),"\n",(0,s.jsxs)(n.p,{children:["The functions that return basic SQL constructs (e.g. ",(0,s.jsx)(n.code,{children:"select()"}),", ",(0,s.jsx)(n.code,{children:"update()"}),", and ",(0,s.jsx)(n.code,{children:"delete()"}),") should have a newline after the opening parenthesis and before the closing parenthesis.\nSame applies to all methods of those constructs (e.g. ",(0,s.jsx)(n.code,{children:"distinct()"}),", ",(0,s.jsx)(n.code,{children:"join()"}),", and ",(0,s.jsx)(n.code,{children:"where()"}),").\nThe latter should be ordered in a way that matches the syntax of SQL, when permittable.\nInside the parentheses, each argument should be indented and put on a separate line."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Wrong\nstmt = (\n    select(models.RSEAttrAssociation.value)\n    .where(models.RSEAttrAssociation.key == 'fts')\n    .distinct()\n)\n\n# Right\nstmt = select(\n    models.RSEAttrAssociation.value\n).distinct(\n).where(\n    models.RSEAttrAssociation.key == 'fts'\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"discouraged-logical-operators",children:"Discouraged Logical Operators"}),"\n",(0,s.jsxs)(n.p,{children:["The functions ",(0,s.jsx)(n.code,{children:"and_()"})," and ",(0,s.jsx)(n.code,{children:"or_()"})," should be used instead of Python\u2019s bitwise operators ",(0,s.jsx)(n.code,{children:"&"})," and ",(0,s.jsx)(n.code,{children:"|"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Wrong\nstmt = select(\n    models.Request,\n    models.DataIdentifier\n).join(\n    models.DataIdentifier,\n    (models.Request.scope == models.DataIdentifier.scope) & (models.Request.name == models.DataIdentifier.name)\n)\n\n# Right\nstmt = select(\n    models.Request,\n    models.DataIdentifier\n).join(\n    models.DataIdentifier,\n    and_(models.DataIdentifier.scope == models.DataIdentifier.scope,\n         models.DataIdentifier.name == models.DataIdentifier.name)\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"python-keywords",children:"Python Keywords"}),"\n",(0,s.jsxs)(n.p,{children:["The functions ",(0,s.jsx)(n.code,{children:"true()"}),", ",(0,s.jsx)(n.code,{children:"false()"}),", and ",(0,s.jsx)(n.code,{children:"null()"})," should be used instead of Python\u2019s own keywords."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Wrong\nstmt = select(\n    models.RSE\n).where(\n    models.RSE.deleted == False\n)\n\n# Right\nstmt = select(\n    models.RSE\n).where(\n    models.RSE.deleted == false()\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-statements",children:"UPDATE statements"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"values()"})," method should be used with a dictionary as its sole argument.\nThe keys should be entities from the models.\nThe opening and closing braces of the dictionary should be paired with the parentheses of ",(0,s.jsx)(n.code,{children:"values()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# Wrong\nstmt = update(\n    models.Account\n).where(\n    models.Account == InternalAccount('user')\n).values(\n    status=AccountStatus.DELETED,\n    deleted_at=datetime.now()\n)\n\n# Wrong\nstmt = update(\n    models.Account\n).where(\n    models.Account == InternalAccount('user')\n).values(\n    {\n        'status': AccountStatus.DELETED,\n        'deleted_at': datetime.now()\n    }\n)\n\n# Right\nstmt = update(\n    models.Account\n).where(\n    models.Account == InternalAccount('user')\n).values({\n    models.Account.status: AccountStatus.DELETED,\n    models.Account.deleted_at: datetime.now()\n})\n"})}),"\n",(0,s.jsx)(n.h1,{id:"pre-commits",children:"Pre-commits"}),"\n",(0,s.jsxs)(n.p,{children:["Rucio uses the ",(0,s.jsx)(n.a,{href:"https://github.com/PyCQA/flake8",children:(0,s.jsx)(n.code,{children:"flake8"})})," precommit as a linter, ",(0,s.jsx)(n.a,{href:"https://github.com/astral-sh/ruff-pre-commit",children:(0,s.jsx)(n.code,{children:"ruff"})})," as a formatter,\na custom whitespace remover, and a script to verify a uniform file-header format.\nPlease use these before submitting a pull request."]}),"\n",(0,s.jsxs)(n.p,{children:["The Rucio repo provides a ",(0,s.jsx)(n.code,{children:"pre-commit"})," that does this automatically.\nInstall it with the below commands."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"pip install pre-commit\npre-commit install\n"})}),"\n",(0,s.jsx)(n.h1,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,s.jsxs)(n.p,{children:["Code style is checked during a pull request with a GitHub action.\nThe action checks the header and type annotations (including a count and veracity).\nMore information about type annotations can be found ",(0,s.jsx)(n.a,{href:"/documentation/developer/type_annotation_guide",children:"here"}),".\nThese checks can also be run locally using"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"tools/count_missing_type_annotations_utils.sh\ntools/run_pyright.sh generate {report_output_path.json}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first action will raise an error if your commits introduce more un-annotated types than it solves,\nand the second ensures the added types are consistent with the rest of the codebase."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);