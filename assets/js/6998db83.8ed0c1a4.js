"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4326],{71795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=t(74848),s=t(28453);const o={title:"Type Annotation Guide"},r=void 0,d={id:"developer/type_annotation_guide",title:"Type Annotation Guide",description:"The purpose of this document is to collaboratively create the developer",source:"@site/../docs/developer/type_annotation_guide.md",sourceDirName:"developer",slug:"/developer/type_annotation_guide",permalink:"/documentation/developer/type_annotation_guide",draft:!1,unlisted:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/type_annotation_guide.md",tags:[],version:"current",lastUpdatedBy:"rdimaio",lastUpdatedAt:1718375314e3,frontMatter:{title:"Type Annotation Guide"},sidebar:"docs",previous:{title:"REST API Documentation",permalink:"/documentation/developer/rest_api_doc"},next:{title:"Style Guide",permalink:"/documentation/developer/dev_style_guide"}},c={},l=[{value:"Abstract",id:"abstract",level:2},{value:"Type Annotations",id:"type-annotations",level:2},{value:"General Information",id:"general-information",level:3},{value:"Syntax",id:"syntax",level:3},{value:"Why",id:"why",level:2},{value:"Type Annotations in Rucio",id:"type-annotations-in-rucio",level:2},{value:"What not to type annotate",id:"what-not-to-type-annotate",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"GitHub Actions",id:"github-actions",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"Common Types",id:"common-types",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The purpose of this document is to collaboratively create the developer\nguidelines for static type checking of rucio's codebase."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TL;DR"})," New code has to be type annotated, old code should be migrated. Look\ninto ",(0,i.jsx)(n.a,{href:"#Best-Practices",children:"Best Practices"})," for specific instructions on how to use\nit in our repository."]}),"\n",(0,i.jsx)(n.h2,{id:"abstract",children:"Abstract"}),"\n",(0,i.jsx)(n.p,{children:"Python is a dynamically-typed programming language. Dynamic type checked\nprogramming languages verify the type safety at runtime. Type-related bugs thus\noccur at runtime. Tests are in place to check the types and prevent\nbugs. However, tests do not always cover all possible combinations of types."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://peps.python.org/pep-0484/",children:"PEP 484"}),", which got adopted into the ",(0,i.jsx)(n.em,{children:"Python\nLanguage Reference"})," of Python3.6 and is thus a part of Python itself, introduces\n",(0,i.jsx)(n.em,{children:"type hints"})," to Python. Type hints add more information to the source code and\nallow us to automatically check the code for type mismatches. Type-related bugs\nwill thereby be checked at compile time (pre-runtime), rather than at\nruntime. Type hints also increase the descriptiveness of our code and make it\neasier to read."]}),"\n",(0,i.jsx)(n.p,{children:"Rucio does not have type hints at the moment. The plan is to introduce them\nconsistently to the entire project. Adding type hints to a big project is\nchallenging. Since the code-base is too large to introduce them with only one\nPR, we will introduce the hints incrementally."}),"\n",(0,i.jsx)(n.h2,{id:"type-annotations",children:"Type Annotations"}),"\n",(0,i.jsx)(n.h3,{id:"general-information",children:"General Information"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://peps.python.org/pep-0483/",children:(0,i.jsx)(n.strong,{children:"PEP 483 \u2013 The Theory of Type Hints"})}),"\nThis ",(0,i.jsx)(n.em,{children:"PEP"})," explains the theory behind type hints, as well as backgrounds to\ncertain decisions."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:"There are comprehensive and descriptive documentations on the web on how to\nannotate python code with type hints. E.g.:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html",children:(0,i.jsx)(n.strong,{children:"MyPy type hints cheat\nsheet"})})," The cheat\nsheet contains information on the syntax of type annotations and ",(0,i.jsx)(n.em,{children:"which ones"}),"\nto use ",(0,i.jsx)(n.em,{children:"when"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://peps.python.org/pep-0484/",children:(0,i.jsx)(n.strong,{children:"PEP 484 \u2013 Type Hints"})})," Contains general\ninformation about type hints in Python. This includes the motivation, the\ndefinition, what to do with edge cases, and much more."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://peps.python.org/pep-0589/",children:(0,i.jsx)(n.strong,{children:"PEP 589 \u2013 TypedDict: Type Hints for Dictionaries with a Fixed Set of\nKeys"})})," Explains how to use ",(0,i.jsx)(n.code,{children:"TypedDict"})," and\nwhat to regard while using them."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why",children:"Why"}),"\n",(0,i.jsx)(n.p,{children:"Dynamically typed programming languages execute many common programming\nbehaviours, that static programming languages perform during compilation, at\nruntime. While this leads to quick prototyping, big projects could suffer\nfrom some consequences. In particular:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The code is harder to read: Parameters and return types are specified in typed\nlanguages, they give some hints on how to call a function and what to\nexpect. Bugs and inconsistencies can be easier to spot (e.g. when a "get"\nfunction return a list), and some IDEs display these information for a more\nconvenient coding experience. All of this is missing in dynamically typed\nprogramming languages.'}),"\n",(0,i.jsxs)(n.li,{children:["Type related bugs do not get noticed: Calling a function with a wrong type\n(e.g. ",(0,i.jsx)(n.code,{children:"None"}),") gets spotet by typed checkers. In dynamically typed programming\nlanguages this needs to be veryfied on every call."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"While we have strong arguments for type annotations, there are some drawbacks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"It takes more time to write code: The type annotations need to be specified\nand added, which is tedious in a big code base."}),"\n",(0,i.jsx)(n.li,{children:"They add little value if dicts are used heavily: The keys of dicts are not\ntype checked, only the potential values. Big dictionaries thus have a lot of\ndifferent value types, while the check if a key exists still needs to be done."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"type-annotations-in-rucio",children:"Type Annotations in Rucio"}),"\n",(0,i.jsxs)(n.p,{children:["Adding type annotations is not always trivial. Some types might be to ambiguous,\nsome might be too generic. A good reference point is existing type annotated\n",(0,i.jsx)(n.em,{children:"Rucio"})," code. It will give hints on what types may be used and how to properly\nuse them in the code."]}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"Don't just copy the types from existing code, think about them!"}),(0,i.jsxs)(n.p,{children:["Ask yourself: Is this use-case the same? Could I be more specific than just\n",(0,i.jsx)(n.code,{children:"Any"}),". Could I use a class instead of a ",(0,i.jsx)(n.code,{children:"Dict"}),"? Should I introduce a new type\ninstead of using an existing one? ..."]})]}),"\n",(0,i.jsx)(n.h3,{id:"what-not-to-type-annotate",children:"What not to type annotate"}),"\n",(0,i.jsxs)(n.p,{children:["Not all Python code needs type annotations. Type annotations in the ",(0,i.jsx)(n.code,{children:"tests"}),", for\nexample, would just add clutter and add very little benefits."]}),"\n",(0,i.jsxs)(n.p,{children:["The following modules will ",(0,i.jsx)(n.strong,{children:"not"})," be type annotated:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"tools"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The tools folder contains some Python scripts. While type annotations\nwould help fixing bugs, the code itself is not shipped and will not be run\nin a production environment."}),"\n",(0,i.jsx)(n.li,{children:"We could add support later, however this is not our main concern atm."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Rucio executables don't call the core or api call directly, but rather\nuse the client. We could activate it once to Python2 support is dropped."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib/rucio/tests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The tests are volatile and should be easy to change. Type annotations\nwould just add clutter and very little benefits."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib/rucio/db"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The db module is used as a dependency of core. While we need the types, we\nuse very little functions out of it. We might activate support later,\nhowever we want to focus on core right now."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lib/rucio/core/oidc.py"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pyjwkest"})," is no longer maintained and needs to be replaced,\nand some functions are planned to be removed in the future.\nIt is best to skip this file for now."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"To properly use the benefits of type annotated code, we also have to look into\nour dependencies. All of our frequently used dependencies provide type\nannotations out of the box or via extensions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.em,{children:"Python standard library"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Typehints were added in 3.5.0"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sqlalchemy"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type hints were introduced in version 2.0"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"sqlalchemy-stubs"})," provide types for versions < 2.0"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"alembic"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type hints are provided. Not important at the moment, since we are not\nadding type hints for the db migration."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"flask"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Type hints are provided"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"six"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"types-six"})," package provides typehints."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"six"})," might be removed from the repository in the future."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"requests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"types-requests"})," package provides typehints."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Some types from our dependencies, like the ",(0,i.jsx)(n.em,{children:"sqlalchemy"})," ",(0,i.jsx)(n.code,{children:"orm.session.Session"}),",\ncan be used directly. It is not needed to create our own equivalent then, except\nif they get translated to a rucio owned type."]}),"\n",(0,i.jsx)(n.h3,{id:"github-actions",children:"GitHub Actions"}),"\n",(0,i.jsx)(n.p,{children:"A GitHub actions job ensures that newly written code contains type hints:"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Check Python Type Annotations"})," job in the autotests checks, if new code\ncontains type annotations. It does this by comparing the number of missing\npython type annotations before the changes with the number of missing python\ntype annotations after the changes. If the number before is less than the number\nafter, new code, which is not typed, was added. The script then exits with a\nnon-zero exit code. If it is equals or bigger, type annotations have been added\nto the repository."]}),"\n",(0,i.jsxs)(n.p,{children:["As of now, only the number of ",(0,i.jsx)(n.em,{children:"missing"})," type annotations will be used. The job\ndoes not check for wrong type hints or inconsistencies. This (specifically\n",(0,i.jsx)(n.code,{children:"mypy"}),") will be enabled once enough python type hints are added. For this\npurpose, we will always add type annotations to functions, even when the type\ncan be infered."]}),"\n",(0,i.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,i.jsx)(n.p,{children:"To ensure a consistent usage of type hints, you should pay attention to the\nfollowing best practices:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Use ",(0,i.jsx)(n.em,{children:"Python 3.6"})," style type hints"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There are multiple ways to specify type hints in Python. We agreed to use\nthe Python 3.6 style, since it's easy to read and we don't need the\nbackwards-compatibility."}),"\n",(0,i.jsxs)(n.li,{children:["E.g. favor ",(0,i.jsx)(n.code,{children:"def add_rse(rse: str, vo: str = 'def', ...) -> str:"})," over ",(0,i.jsx)(n.code,{children:"def   add_rse(rse, vo='def', ...): # type: (str, str, ...) -> str"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Use ",(0,i.jsx)(n.em,{children:"bare"})," type hints over ",(0,i.jsx)(n.a,{href:"https://peps.python.org/pep-0484/#runtime-or-type-checking",children:"ones with\nquotes"})," and ",(0,i.jsx)(n.code,{children:"if tying.TYPE_CHECKING:"})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Quoted type hints enable "forward references". This enables us to not\nexecute expensive code while still having type checks.'}),"\n",(0,i.jsxs)(n.li,{children:["As long as the performance is immesurable small and not a problem, this\nshould be avoided, since it > [name=Joel Dierkes] Dunno about this part. Should\nwe use ",(0,i.jsx)(n.code,{children:"if typing.TYPE_CHECKING:"})," and quoted types or avoid them?"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Be as specific as possible"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the types of the keys and values of a dict are known, specify\nthem. (E.g. Use ",(0,i.jsx)(n.code,{children:"Dict[str, str]"})," over ",(0,i.jsx)(n.code,{children:"Dict"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["If the types of all items in a list are known, specify them\n(E.g. ",(0,i.jsx)(n.code,{children:"List[int]"})," over ",(0,i.jsx)(n.code,{children:"List"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"..."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Avoid ",(0,i.jsx)(n.code,{children:"Dicts"})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Strongly typed structures should be preferred, since they are more\ndescriptive and easier to use in the future."}),"\n",(0,i.jsxs)(n.li,{children:['"Was the id key in the ',(0,i.jsx)(n.code,{children:"Dict"})," named ",(0,i.jsx)(n.code,{children:"_id"})," or ",(0,i.jsx)(n.code,{children:"id"}),'?" is a question that\nshould not occur.']}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Avoid the ",(0,i.jsx)(n.code,{children:"Optional"})," type"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"Optional"})," type highlights that a value ",(0,i.jsx)(n.em,{children:"might"})," be ",(0,i.jsx)(n.code,{children:"None"}),". As a result\nthe value ",(0,i.jsx)(n.em,{children:"has"})," to be checked for ",(0,i.jsx)(n.code,{children:"None"})," on every usage (",(0,i.jsx)(n.code,{children:"if value: "}),")."]}),"\n",(0,i.jsxs)(n.li,{children:["While sometimes this cannot be avoided, the ",(0,i.jsx)(n.code,{children:"Optional"}),' type should be used\nsparely. Most of the times a proper initialization of the variable is\nenough to get rid of it. If it makes sense that a type can be\n"non-existent", it is appropriate to use the ',(0,i.jsx)(n.code,{children:"Option"})," type."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Avoid the ",(0,i.jsx)(n.code,{children:"Union"})," type"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"Union"})," type indicates, that one of multiple different types may be\nreturned. This can be confusing and resolves in the need of testing, which\ntype is returned."]}),"\n",(0,i.jsxs)(n.li,{children:["Split the function or variable, which used the ",(0,i.jsx)(n.code,{children:"Union"})," type, in multiple\nones. This resolves in more readable code and is unambiguous. This also\nfollows the ",(0,i.jsx)(n.code,{children:"A function does one, and only one thing"})," rule."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Use\n",(0,i.jsx)(n.a,{href:"https://docs.python.org/3/library/typing.html#typing.NoReturn",children:(0,i.jsx)(n.code,{children:"typing.NoReturn"})})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["It is used to indicate a never terminating function (e.g. ",(0,i.jsx)(n.code,{children:"while   True:"}),"). Use this annotation to indicate these kind of functions."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Use\n",(0,i.jsx)(n.a,{href:"https://docs.python.org/3/library/collections.abc.html#collections.abc.Iterator",children:(0,i.jsx)(n.code,{children:"collections.abc.Iterator"})}),"\nover\n",(0,i.jsx)(n.a,{href:"https://docs.python.org/3/library/collections.abc.html#collections.abc.Generator",children:(0,i.jsx)(n.code,{children:"collections.abc.Generator"})})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"collections.abc.Generator[YieldType, SendType, ReturnType]"})," takes three Type Vars:\nThe Type that gets yielded, the type that gets send back to the yield, and the\nreturn type of the function. If a function does only yield values, but does\nnot take back values from the yield and also does not return anything with the\n",(0,i.jsx)(n.code,{children:"return"})," keyword, the type is ",(0,i.jsx)(n.code,{children:"collections.abc.Generator[YieldType, None, None]"}),". This\nis equivalent to ",(0,i.jsx)(n.code,{children:"collections.abc.Iterator[YieldType]"}),". We favor the ",(0,i.jsx)(n.code,{children:"Iterator"}),"\napproach over the ",(0,i.jsx)(n.code,{children:"Generator"})," one because it's more understandable and easier\nto read."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"common-types",children:"Common Types"}),"\n",(0,i.jsx)(n.p,{children:"To ensure a consistent use of type annotations in Rucio, here is a list of\ncommon variables with their corresponding type:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Code section"}),(0,i.jsx)(n.th,{children:"Variable"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"session"}),(0,i.jsx)(n.td,{children:"sqlalchemy.orm.session.Session"}),(0,i.jsx)(n.td,{children:"The sqlalchemy session."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DID"}),(0,i.jsx)(n.td,{children:"scope"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str"})}),(0,i.jsx)(n.td,{children:"The scope of a DID."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DID"}),(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str"})}),(0,i.jsx)(n.td,{children:"The name of a DID."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DID"}),(0,i.jsx)(n.td,{children:"account"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str"})}),(0,i.jsx)(n.td,{children:"The account name."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"DID"}),(0,i.jsx)(n.td,{children:"did_type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"str"})}),(0,i.jsx)(n.td,{children:"The DID type."})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var i=t(96540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);