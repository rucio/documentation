"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1526],{10087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"developer/webui/webui_frontend","title":"Developing the WebUI Frontend","description":"Notes on external frameworks","source":"@site/../docs/developer/webui/webui_frontend.md","sourceDirName":"developer/webui","slug":"/developer/webui/webui_frontend","permalink":"/documentation/developer/webui/webui_frontend","draft":false,"unlisted":false,"editUrl":"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/webui/webui_frontend.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1734529643000,"frontMatter":{"id":"webui_frontend","title":"Developing the WebUI Frontend"},"sidebar":"docs","previous":{"title":"Using the WebUI StreamedTable Component","permalink":"/documentation/developer/webui/streamedtables"},"next":{"title":"Project Organisation","permalink":"/documentation/project_organisation"}}');var i=t(74848),o=t(28453);const a={id:"webui_frontend",title:"Developing the WebUI Frontend"},r=void 0,l={},d=[{value:"Notes on external frameworks",id:"notes-on-external-frameworks",level:2},{value:"React",id:"react",level:3},{value:"Components",id:"components",level:4},{value:"Attributes",id:"attributes",level:4},{value:"className",id:"classname",level:5},{value:"PageProps",id:"pageprops",level:5},{value:"aria",id:"aria",level:5},{value:"Hooks",id:"hooks",level:4},{value:"useState",id:"usestate",level:5},{value:"useEffect",id:"useeffect",level:5},{value:"useComDOM",id:"usecomdom",level:5},{value:"useResponsiveHook",id:"useresponsivehook",level:5},{value:"Tailwind",id:"tailwind",level:3},{value:"Structuring Class Names, Overriding",id:"structuring-class-names-overriding",level:4},{value:"Responsive Design",id:"responsive-design",level:4},{value:"Compiling Tailwind",id:"compiling-tailwind",level:4},{value:"Storybook",id:"storybook",level:3},{value:"Fixtures",id:"fixtures",level:5},{value:"mockUseComDOM",id:"mockusecomdom",level:5}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"notes-on-external-frameworks",children:"Notes on external frameworks"}),"\n",(0,i.jsxs)(n.p,{children:["The Rucio WebUI frontend uses two main frameworks: ",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/",children:"TailwindCSS"}),"\nand ",(0,i.jsx)(n.a,{href:"https://react.dev/learn",children:"React"}),". Both have excellent documentations, which I will\nnot attempt to replace with these notes. Instead, I will extend them and concretise them\nwith the focus on the Rucio WebUI frontend and the design that it entails."]}),"\n",(0,i.jsxs)(n.p,{children:["Nonetheless, I will do a quick rundown of the most important and most frequently used\naspects of both frameworks in order to save a new developer time. In the end, I will also\nintroduce ",(0,i.jsx)(n.a,{href:"https://storybook.js.org/",children:"StorybookJS"}),", which is our tool to visualise the\nindividual tools of our website."]}),"\n",(0,i.jsx)(n.h3,{id:"react",children:"React"}),"\n",(0,i.jsx)(n.p,{children:"We use React as our frontend JavaScript framework. It is essentially a tool for building UI\ncomponents."}),"\n",(0,i.jsx)(n.h4,{id:"components",children:"Components"}),"\n",(0,i.jsx)(n.p,{children:"The building-blocks of our webpages are React Components. The webpages themselves are React\nComponents themselves. Individual components can be composed with each other to produce\nmore complex components, in the sense that a button component can be used to populate a\nwidget which is then used in a page."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The Rucio WebUI is written in TypeScript. In these docs, JavaScript and TypeScript might\nbe used interchangeably."})}),"\n",(0,i.jsxs)(n.p,{children:["These components JavaScript functions which return HTML code. We use ",(0,i.jsx)(n.code,{children:".tsx"})," files, which mean\nthat HTML markup and TypeScript code can be used in the same file. This can take the following\nshape:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'export const H1: React.FC<JSX.IntrinsicElements["h1"]> = (\n    { ...props }\n) => {\n    const { children, className, ...otherprops } = props;\n    return (\n        <h1\n            className={\n                // handled later\n            }\n            {...otherprops}\n        >\n            {children}\n        </h1>\n    )\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Several things are going on here. The overall structure, however, is that of an\narrow function ",(0,i.jsx)(n.code,{children:"() => {}"})," returning an HTML tag of the shape\n",(0,i.jsx)(n.code,{children:"<h1>something</h1>"})," is defined and assigned to ",(0,i.jsx)(n.code,{children:"const H1"}),". The arrow function\nis typed, this will be handled later."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["In TSX, HTML markup is inserted into TypeScript after a ",(0,i.jsx)(n.code,{children:"return"})," statement.\nTypeScript is inserted into HTML when wrapped in ",(0,i.jsx)(n.code,{children:"{}"}),". VS Code does proper\nsyntax highlighting, which will help out."]})}),"\n",(0,i.jsx)(n.p,{children:"This function can now be imported and called in the following way:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"<H1>Hello world!</H1>\n// more or less equal to\n<h1>Hello world!</h1>\n"})}),"\n",(0,i.jsx)(n.p,{children:"When using React components, take note of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Custom components must start with a capital letter."}),"\n",(0,i.jsx)(n.li,{children:"You must return only one top-level HTML tag. You may nest other tags within this one."}),"\n",(0,i.jsx)(n.li,{children:"React components can nest other react components. They must ultimately resolve to HTML, though."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In our components, we usually make sure to typecast the functions as React Function Components.\nThese can in turn be cast to take the attributes of a specific HTML tag, which is chosen\nto be the top-level HTML tag returned."}),"\n",(0,i.jsxs)(n.p,{children:["In the following example, we define a type ",(0,i.jsx)(n.code,{children:"TextInputProps"})," which combines the\nattributes of the ",(0,i.jsx)(n.code,{children:"<input>"}),"-tag (all of which are optional) with the\n",(0,i.jsx)(n.code,{children:"onEnterkey?"})," attribute (the ",(0,i.jsx)(n.code,{children:"?"})," signifies that this is an optional attribute). The\nresulting component can take any of these attributes."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that the ",(0,i.jsx)(n.code,{children:"...props"})," syntax simply means that any parameters ",(0,i.jsx)(n.code,{children:"<TextInput foo bar/>"}),"\npassed to the component that are not ",(0,i.jsx)(n.code,{children:"onEnterkey"})," are swallowed by the ",(0,i.jsx)(n.code,{children:"props"})," object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'type TextInputProps = JSX.IntrinsicElements["input"] & {\n    onEnterkey?: (event: any) => void,\n}\n\nexport const TextInput: (\n    React.FC<TextInputProps>\n) = (\n    {\n        onEnterkey,\n        ...props\n    }\n) => {\n    // shown in next code example\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Typing our components this way means that we can easily extend standard HTML tags, while keeping\nall of their original functionality (i.e. the way they deal with attributes passed to them) ",(0,i.jsx)(n.em,{children:"without"}),"\nthe need to implement each attribute ourselves."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["These attributes are referred to as ",(0,i.jsx)(n.em,{children:"content attributes"})," and it is a very good idea to get\nacquainted with the different attributes that can be assigned to the different HTML tags.\nWe will cover some examples in the next section. You can find more information here:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://html.spec.whatwg.org/",children:"HTML Specification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes",children:"MDN Web Docs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.w3schools.com/tags/ref_attributes.asp",children:"W3Schools"})}),"\n"]})]}),"\n",(0,i.jsxs)(n.p,{children:["Finally, you can pass these attributes into the component state (usually done\nwith components that render pages), or pass them into the sub-components that\nmake up the component. The latter is what happens in the following code block,\nwhich  is taken from ",(0,i.jsx)(n.code,{children:"TextInput"})," again:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'// unpack props props to be handled individually and otherprops\nconst { children, onKeyDown, ...otherprops } = props\nreturn (\n    <input\n        onKeyDown={(e) => {\n            if (e.key === "Enter") {\n                // `?.()`-syntax used because onEnterkey could be undefined\n                onEnterkey?.(e)\n            }\n            // could also be undefined\n            onKeyDown?.(e)\n        }}\n        {...otherprops} // unpack otherprops here\n    >\n        {\n            // pass the content between <input></input> in here\n            children\n        }\n    </input>\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In the previous example, a native HTML tag has been enriched by the ",(0,i.jsx)(n.code,{children:"onKeyDown"})," function\nby a special ",(0,i.jsx)(n.code,{children:"onEnterkey"})," functionality. In all other ways, the new component is the same\nas the included, standard ",(0,i.jsx)(n.code,{children:"<input>"})," tag."]}),"\n",(0,i.jsx)(n.h4,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["React will rename some of the component attributes. An example of this is the\n",(0,i.jsx)(n.code,{children:"className"}),"-attribute, which replaces the native HTML keyword ",(0,i.jsx)(n.code,{children:"class"}),". This is\ndone to prevent namespace clashes."]})}),"\n",(0,i.jsx)(n.h5,{id:"classname",children:"className"}),"\n",(0,i.jsxs)(n.p,{children:["A more detailed description of how we style our components will follow in the\nTailwind-section. The important concept is that we assign classes to each component,\nand these classes are then used as selectors to apply certain styles to the the component.\nClasses are assigned to the ",(0,i.jsx)(n.code,{children:"className"})," attribute as space-separated strings."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<p\n    className="text-xl font-serif"\n>\n    Hi\n</p>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We often make use of the ",(0,i.jsx)(n.code,{children:"twMerge"})," function. This function swallows all string arguments\nand returns a single class string. Importantly, classes added later may override those added\nbefore them, which is not the case when we do not use ",(0,i.jsx)(n.code,{children:"twMerge"}),". An example of this\nis seen in the followin code-block."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<div\n    className={twMerge(\n        "flex flex-col sm:flex-row",\n        "list-none font-bold",\n        "bg-white dark:bg-gray-900",\n        "border-0 dark:border-2 dark:rounded-md dark:bg-clip-content",\n        className ?? "", // optionally add classes to override what came before\n    )}\n>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["It is a good idea to use ",(0,i.jsx)(n.code,{children:"twMerge"})," wherever the class definition contains conditionals,\noverrides, or is so long that it would span multiple lines."]}),"\n",(0,i.jsx)(n.h5,{id:"pageprops",children:"PageProps"}),"\n",(0,i.jsx)(n.p,{children:"The highest-level components produced in the frontend are the pages. Remember\nthat a component is a function that returns HTML. The input of these functions\ncan be quite complex, especially for the highest-level components, which combine\na lot of data from different sources."}),"\n",(0,i.jsxs)(n.p,{children:["In the following example, we define an interface for the ",(0,i.jsx)(n.code,{children:"ListDID"})," page. Note\nthat input to the page is given in the form of a ",(0,i.jsx)(n.code,{children:"ViewModel"})," (",(0,i.jsx)(n.code,{children:"DIDViewModel"}),",\n",(0,i.jsx)(n.code,{children:"DIDMetaViewModel"}),"), while the functions are for the page to communicate to\ndeeper-lying components."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"export interface ListDIDPageProps {\n    comdom: UseComDOM<DIDViewModel>, // this ViewModel comes in a stream, more later.\n    didQuery: (query: string, type: DIDType) => void,\n    didMetaQuery: (scope: string, name: string) => void,\n    didMetaQueryResponse: DIDMetaViewModel,\n}\n\nexport const ListDID = (\n    props: ListDIDPageProps\n) => {\n    // ...\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We do not want the frontend to handle any fetches or streams itself, hence the\nfunctions ",(0,i.jsx)(n.code,{children:"didQuery"})," and ",(0,i.jsx)(n.code,{children:"didMetaQuery"})," (which start a stream and query\nmetadata, respectively) are defined outside of the component and only passed to\nit. It also means that the page can be run even without a backend attached to\nit, we simply replace these functions with dummies (and the ViewModels with fake\ndata)."]}),"\n",(0,i.jsx)(n.h5,{id:"aria",children:"aria"}),"\n",(0,i.jsxs)(n.p,{children:["ARIA stands for ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/html-aria/",children:"Accessible Rich Internet Applications"}),"\nand defines the standard for how to make a web application accessible to users that\nare somehow impaired. One way of making the website more accessible is the conscious inclusion of\nARIA-attributes."]}),"\n",(0,i.jsxs)(n.p,{children:["A simple but common example would be adding an ARIA-label to an element which would\notherwise only be described by an icon/glyph. Note that screen-readers give priority\nto semantic ",(0,i.jsx)(n.code,{children:"<label>"}),"-elements over ",(0,i.jsx)(n.code,{children:"aria-label"}),". In the following example, however,\nadding such an element would not be practical."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<Button\n    icon={<HiChevronDoubleLeft />}\n    aria-label="First Page"\n    // ...\n/>\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Do not overuse the ARIA-attributes. By using ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Semantics",children:"semantic\nHTML"}),", many of these attributes\nwill already be filled in correctly."]})}),"\n",(0,i.jsx)(n.h4,{id:"hooks",children:"Hooks"}),"\n",(0,i.jsxs)(n.p,{children:["Hooks are reusable functions. They all start with ",(0,i.jsx)(n.code,{children:"use"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"usestate",children:"useState"}),"\n",(0,i.jsx)(n.p,{children:"Add a state variable to the component, i.e."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"const [state, setState] = useState<TypeOfState>(initialState)\n"})}),"\n",(0,i.jsx)(n.h5,{id:"useeffect",children:"useEffect"}),"\n",(0,i.jsxs)(n.p,{children:["The signature of this hook is ",(0,i.jsx)(n.code,{children:"useEffect(setup, dependencies?)"}),", where ",(0,i.jsx)(n.code,{children:"setup"}),"\nis the function run when any value in the ",(0,i.jsx)(n.code,{children:"dependencies"})," list changes. The\nvalues in the ",(0,i.jsx)(n.code,{children:"dependencies"})," list can be thought of as ",(0,i.jsx)(n.em,{children:"reactive"}),", because if\nany one of them changes, the ",(0,i.jsx)(n.code,{children:"setup"})," function is called as a ",(0,i.jsx)(n.em,{children:"reaction"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Importantly, when the ",(0,i.jsx)(n.code,{children:"dependencies"})," list is empty, the ",(0,i.jsx)(n.code,{children:"setup"})," function is only\nrun ",(0,i.jsx)(n.em,{children:"once"})," after the initial render. Since ",(0,i.jsx)(n.code,{children:"useEffect"})," is only run on the\nclient, this is a very useful way of running code (seemingly) on page load, but\nclient-side. An example of this would be fetching additional metadata. An\nexample of this can be seen here:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"useEffect(() => {\n    didMetaQueryBase(params.scope, params.name).then(setDIDMeta)\n}, [])\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["In this case, the function ",(0,i.jsx)(n.code,{children:"didMetaQueryBase"})," returns a value of type\n",(0,i.jsx)(n.code,{children:"Promise<DIDMetaViewModel>"}),".  Learn about ",(0,i.jsx)(n.code,{children:"Promise"})," in TypeScript, and how to\ndeal with it,\n",(0,i.jsx)(n.a,{href:"https://basarat.gitbook.io/typescript/future-javascript/promise",children:"here"})]})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Note that passing no dependency array at all will lead to the Effect running\nafter every single render of the component!"})}),"\n",(0,i.jsx)(n.h5,{id:"usecomdom",children:"useComDOM"}),"\n",(0,i.jsxs)(n.p,{children:["This is a custom hook returning a ",(0,i.jsx)(n.code,{children:"UseComDOM<T>"})," (Communication Document Object\nModel) object. It serves as a wrapper for streamed data, also providing\nfunctions to inspect and control the stream.  It is a generic which is bound to\ntype ",(0,i.jsx)(n.code,{children:"T"}),", which itself is usually a ViewModel.  The ",(0,i.jsx)(n.code,{children:"useComDOM"}),"-hook is most\nstrongly associated with the StreamedTables, whose documentation can be found\n",(0,i.jsx)(n.a,{href:"/documentation/developer/webui/streamedtables",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"useresponsivehook",children:"useResponsiveHook"}),"\n",(0,i.jsxs)(n.p,{children:["The website is designed to be responsive, this means that there are several\nbreakpoints at which the assigned styles can change during window resizing. In\nmost cases, this is by Tailwind, our CSS framework. In some cases, you want\naccess to the window width class (small, medium, etc.) from within your code in\norder to manipulate components programmatically. An example of this is the\nvisibility of columns in StreamedTables, which is defined in a ",(0,i.jsx)(n.code,{children:"TableStyling"}),"\nobject."]}),"\n",(0,i.jsx)(n.p,{children:"This custom hook implements a window resize event listener and exposes the\nfollowing object:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"return {\n    sm: windowSize[0] > 640,\n    md: windowSize[0] > 768,\n    lg: windowSize[0] > 1024,\n    xl: windowSize[0] > 1280,\n    xxl: windowSize[0] > 1536,\n} as ResponsiveHook\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The width classes in pixels correspond to those defined by\n",(0,i.jsx)(n.a,{href:"#responsive-design",children:"Tailwind"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"tailwind",children:"Tailwind"}),"\n",(0,i.jsxs)(n.p,{children:["Tailwind is the CSS framework which we use to style our components. Instead of writing\nCSS directly, we assign classes to components via the ",(0,i.jsx)(n.code,{children:"className"})," attribute. These\nclasses act as selectors for the stylesheet to selectively assign styles to specific components.\nThe main concept is that Tailwind consists of many utility classes which, by themselves, only\ncontribute a small amount of style information (e.g. the background colour, the display mode, etc.).\nMany Tailwind classes map directly to a CSS attribute. In adding multiple classes, we\ncan iteratively build complex styles from these basic building blocks."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"The philosophy is to build all styles from these common basic building blocks,\nand to avoid creating a new custom styles grouping these basic classes into more complex ones.\nWhile it might seem smart to collect a frequently-reused set of classes into one larger one,\nthis is actually a Tailwind-antipattern in most cases."})}),"\n",(0,i.jsxs)(n.p,{children:["An example of this in action would be the custom ",(0,i.jsx)(n.code,{children:"Button"})," created for the WebUI project.\nIn the simplified version shown in the following code-block, the ",(0,i.jsx)(n.code,{children:"twMerge"}),"-function introduced\nin the section on the ",(0,i.jsx)(n.code,{children:"className"}),"-attribute was used to compile multiple strings into a\nsingle one that could be used by the component. Importantly, we can use code (such\nas the ternary operator) to specify branching logic that returns us the style. In this\ncase, branching logic is used to style the button depending on whether it is disabled or enabled."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'<button\n    disabled={props.disabled}\n    className={twMerge(\n        "py-1 px-3 h-8 rounded", // style the button shape\n        "bg-blue-500 hover:bg-blue-600 text-white", // style button colours\n        props.disabled ? (\n            // show this style if disabled\n            "cursor-not-allowed bg-gray-500 hover:bg-gray-500 text-gray-200"\n            : "cursor-pointer" // show this style if enabled\n        ),\n        "font-bold", // style text\n        className ?? "" // optionally override all this\n    )}\n>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We will cover how we conventionally structure the contents of ",(0,i.jsx)(n.code,{children:"className"})," and ",(0,i.jsx)(n.code,{children:"twMerge"}),".\nWe will also discuss dark mode and responsive desgin as examples of metaclasses, but\nwe strongly encourage you to work through the Tailwind documentation, which is full of\nexamples and very helpful. In addition, it is a good idea to look at external resources\nto fully understand the flexbox and other display models in HTML."]}),"\n",(0,i.jsx)(n.h4,{id:"structuring-class-names-overriding",children:"Structuring Class Names, Overriding"}),"\n",(0,i.jsx)(n.p,{children:"When adding Tailwind classes to a component, it is useful to ask the following questions in\norder:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"What are the dimensions of this component?"}),"\n",(0,i.jsx)(n.li,{children:"What space do you want around the element's border (margin), and how much\nspace do you want between the element's border and its content (padding)?"}),"\n",(0,i.jsx)(n.li,{children:"Considering the border of the component. Should it be rounded, should the\nborder be visible, how thick/which colour shall the border line have?"}),"\n",(0,i.jsx)(n.li,{children:"What is the background colour of this component?"}),"\n",(0,i.jsx)(n.li,{children:"If the component directly contains text, how shall this text be styled?"}),"\n",(0,i.jsxs)(n.li,{children:["If the component is a container for several child components, how shall these be arranged? (Consider reading up on ",(0,i.jsx)(n.code,{children:"flex"}),", ",(0,i.jsx)(n.code,{children:"grid"}),", etc.)"]}),"\n",(0,i.jsx)(n.li,{children:"If the component is within a flexbox, how shall it respond to resizing? (grow, shrink, etc.)"}),"\n",(0,i.jsx)(n.li,{children:"Which style of cursor should be displayed when the cursor enters the component?"}),"\n",(0,i.jsx)(n.li,{children:"Do you need to override any of these styles depending on external props?\nRemember that you can use branching logic within the classname definitions and\nthat later classes override previous ones."}),"\n",(0,i.jsxs)(n.li,{children:["Consider dark mode and override previous classes with the ",(0,i.jsx)(n.code,{children:"dark:"}),"-prefix."]}),"\n",(0,i.jsxs)(n.li,{children:["Consider different window sizes and create a responsive component by using\nthe size-prefixes ",(0,i.jsx)(n.code,{children:"sm:"}),", ",(0,i.jsx)(n.code,{children:"md:"}),", ",(0,i.jsx)(n.code,{children:"lg:"}),", etc."]}),"\n",(0,i.jsx)(n.li,{children:"Consider other necessary overrides with any of the other\nTailwind-pseudoclasses."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In general, we attempt to structure the contents of ",(0,i.jsx)(n.code,{children:"twMerge"})," this way, but it\nmight make more sense for you to group your classnames in a different manner."]}),"\n",(0,i.jsxs)(n.p,{children:["As touched on in the above listing, Tailwind has the concept of ",(0,i.jsx)(n.em,{children:"pseudoclasses"}),"\nto optionally only enable a certain selector when a precondition is given. A\nmetaclass will override the vanilla class (even without ",(0,i.jsx)(n.code,{children:"twMerge"}),"). For example,\na component with classes ",(0,i.jsx)(n.code,{children:"bg-blue-500 hover:bg-blue-600"})," will turn a darker\nshade of blue when the mouse cursor comes to hover over it."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Also look at the\n",(0,i.jsx)(n.a,{href:"https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference",children:"reference"}),"\nfor Tailwind-pseudoclasses."]})}),"\n",(0,i.jsx)(n.h4,{id:"responsive-design",children:"Responsive Design"}),"\n",(0,i.jsxs)(n.p,{children:['Most of the pseudoclasses are straightforward, nevertheless, we want to give a\nshort introduction to responsive design with Tailwind. The way Tailwind handles\nthe pseudoclasses responding to changes in page width might be unintuitive at\nfirst, since Tailwind is designed "mobile first". In essence, a prefix adds a\n',(0,i.jsx)(n.em,{children:"minimum"})," size, above which the style is applied. For example, the string\n",(0,i.jsx)(n.code,{children:"w-full md:w-24"})," will apply the ",(0,i.jsx)(n.code,{children:"w-full"}),"-class when the page width is below the\nthreshold for ",(0,i.jsx)(n.code,{children:"md"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The table below serves as a reference for the size thresholds used in Tailwind.\nThese sizings are also used throughout the whole project."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Prefix"}),(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Minimum size [px]"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"sm"})}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"640"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"md"})}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"768"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.code,{children:"lg"})}),(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1024"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"useResponsiveHook"})," to do conditional resizing (such as in\nStreamedTables, where Tailwind is difficult to use). It combines an\nEventListener and all these thresholds into a reusable hook."]})}),"\n",(0,i.jsx)(n.h4,{id:"compiling-tailwind",children:"Compiling Tailwind"}),"\n",(0,i.jsxs)(n.p,{children:["Tailwind compiles the minimal stylesheet required to use all the classes defined\nin the project.  The stylesheet is then automatically loaded by the relevant\nNextJS components and made available in every page of the WebUI. You can find\nthe compiled stylesheet under ",(0,i.jsx)(n.code,{children:"src/component-library/outputtailwind.css"}),", where\nit lives at the top-level folder of the ",(0,i.jsx)(n.code,{children:"component-library"})," with the other\ncomponents. Tailwind can be configured via the\n",(0,i.jsx)(n.code,{children:"src/component-library/tailwind.css"})," and the ",(0,i.jsx)(n.code,{children:"tailwind.config.js"})," file in the\nroot folder, see the Tailwind docs for more information on this."]}),"\n",(0,i.jsxs)(n.p,{children:["When you want to recompile Tailwind, you can run ",(0,i.jsx)(n.code,{children:"npm run build-tailwind"}),", which\ntakes ",(0,i.jsx)(n.code,{children:"tailwind.css"})," and outputs ",(0,i.jsx)(n.code,{children:"outputtailwind.css"}),". If you followed the\ntutorial laid out ",(0,i.jsx)(n.a,{href:"/documentation/developer/webui/webui_frontend_vscode_dev_env#ui-only",children:"here"}),", you will\nhave configured VS Code to automatically recompile Tailwind each time you save a\nrelevant file. We strongly recommend this."]}),"\n",(0,i.jsxs)(n.p,{children:["Any changes to the ",(0,i.jsx)(n.code,{children:"outputtailwind.css"}),"-file will immediately become visible on\nthe StorybookJS-viewer or on a NextJS dev server. This allows for rapid\nprototyping and quick changes."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["You can define additional regex matchers for the Tailwind compiler to use to\nmatch classNames. These are defined in ",(0,i.jsx)(n.code,{children:"tailwind.config.js"})," under\n",(0,i.jsx)(n.code,{children:"module.exports.content.files.extract"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"storybook",children:"Storybook"}),"\n",(0,i.jsx)(n.p,{children:'StorybookJS is calls itself a "frontend workshop for building UI components and\npages in isolation".  Importantly, it allows us to view our React components,\ninteract with them and also play around with their inputs. This allows us to\nhave direct access from the smallest components (such as text, buttons, inputs)\nup to the most complex pages. A further usecase is for demonstrations, as well\nas testing dark mode and responsive design.'}),"\n",(0,i.jsxs)(n.p,{children:["Each component in the ",(0,i.jsx)(n.code,{children:"src/component-library"}),"-folder has an associated ",(0,i.jsx)(n.em,{children:"story"}),",\ni.e."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ls src/component-library/Pages/RSE\n> ListRSE.tsx\n> ListRSE.stories.tsx\n> PageRSE.tsx\n> PageRSE.stories.tsx\n"})}),"\n",(0,i.jsx)(n.p,{children:"Inside each of these stories lies code which returns the associated component\nwrapped within a Storybook Function. This function is irrelevant to us.\nImportantly, we can pass arguments to the component, essentially inserting mock\nor fake data. These inputs serve as defaults for Storybook, one can also\nmanipulate these inputs from within the Storybook web interface. We can also\npass in mock functions if this is required, these cannot be manipulated from the\nweb interface."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["Use the ",(0,i.jsx)(n.code,{children:"create-component-story"})," tool (found within the ",(0,i.jsx)(n.code,{children:"tools"}),"-folder) to\nrapidly create a new dummy component together with its story. You might need to\nchange the value of ",(0,i.jsx)(n.code,{children:"title"})," in the default export."]})}),"\n",(0,i.jsxs)(n.p,{children:["An example of how arguments are passed into a storybook function can be seen in\nthe following code block.  Fixtures and the ",(0,i.jsx)(n.code,{children:"mockUseComDOM"}),"-function will be\nexplained below."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'PageDID.args = {\n    didMeta: fixtureDIDMetaViewModel(),\n    fromDidList: "yosearch",\n    // Parent DIDs [FILE]\n    didParentsComDOM: mockUseComDOM(\n        // create array of length 100, populate with fake DIDViewModel objects\n        Array.from({length: 100}, (_, i) => fixtureDIDViewModel())\n    ),\n    //...\n}\n\n'})}),"\n",(0,i.jsx)(n.h5,{id:"fixtures",children:"Fixtures"}),"\n",(0,i.jsxs)(n.p,{children:["We make use of many kinds of fixtures to insert mock data into our stories. The\nfixtures can be found in ",(0,i.jsx)(n.code,{children:"test/fixtures/table-fixtures.ts"}),", where each ViewModel\nused in the frontend has a function that returns a mock version of it. A bunch\nof utility functions can be found in this file, which can help in creating the\nmock fixture."]}),"\n",(0,i.jsx)(n.h5,{id:"mockusecomdom",children:"mockUseComDOM"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"table-fixtures.ts"}),"-file contains a fixture which deserves to be mentioned\nby itself: the ",(0,i.jsx)(n.code,{children:"mockUseComDOM"}),"-function, which takes a list of datapoints of\ntype ",(0,i.jsx)(n.code,{children:"T"})," and then mocks the ",(0,i.jsx)(n.code,{children:"UseComDOM<T>"})," object. This ComDOM-object can then\nbe passed on to StreamedTables.  Since the relevant attributes and methods that\nthe StreamedTable accesses are all fully mocked, this function allows you to\nshow StreamedTables with mock data and interfacing even when no backend is\nconnected."]}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Note that these random fixtures do not work well with the NextJS Dev Server,\nwhich will raise Hydration Errors. This is because the page rendered on the\nserver does not match the first render of the page on the client (because both\nuse random fixture generators). However, you can choose to ignore the Hydration\nErrors for the time being."})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(96540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);