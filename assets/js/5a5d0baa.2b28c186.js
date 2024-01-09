"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,u=c["".concat(l,".").concat(m)]||c[m]||h[m]||i;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],r={id:"webui_frontend",title:"Developing the WebUI Frontend"},l=void 0,p={unversionedId:"developer/webui/webui_frontend",id:"developer/webui/webui_frontend",title:"Developing the WebUI Frontend",description:"Notes on external frameworks",source:"@site/../docs/developer/webui/webui_frontend.md",sourceDirName:"developer/webui",slug:"/developer/webui/webui_frontend",permalink:"/documentation/developer/webui/webui_frontend",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/developer/webui/webui_frontend.md",tags:[],version:"current",lastUpdatedBy:"Riccardo Di Maio",lastUpdatedAt:1704819076,formattedLastUpdatedAt:"Jan 9, 2024",frontMatter:{id:"webui_frontend",title:"Developing the WebUI Frontend"},sidebar:"docs",previous:{title:"Using the WebUI StreamedTable Component",permalink:"/documentation/developer/webui/streamedtables"},next:{title:"Project Organisation",permalink:"/documentation/project_organisation"}},d={},c=[{value:"Notes on external frameworks",id:"notes-on-external-frameworks",level:2},{value:"React",id:"react",level:3},{value:"Components",id:"components",level:4},{value:"Attributes",id:"attributes",level:4},{value:"className",id:"classname",level:5},{value:"PageProps",id:"pageprops",level:5},{value:"aria",id:"aria",level:5},{value:"Hooks",id:"hooks",level:4},{value:"useState",id:"usestate",level:5},{value:"useEffect",id:"useeffect",level:5},{value:"useComDOM",id:"usecomdom",level:5},{value:"useResponsiveHook",id:"useresponsivehook",level:5},{value:"Tailwind",id:"tailwind",level:3},{value:"Structuring Class Names, Overriding",id:"structuring-class-names-overriding",level:4},{value:"Responsive Design",id:"responsive-design",level:4},{value:"Compiling Tailwind",id:"compiling-tailwind",level:4},{value:"Storybook",id:"storybook",level:3},{value:"Fixtures",id:"fixtures",level:5},{value:"mockUseComDOM",id:"mockusecomdom",level:5}],h={toc:c},m="wrapper";function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"notes-on-external-frameworks"},"Notes on external frameworks"),(0,i.kt)("p",null,"The Rucio WebUI frontend uses two main frameworks: ",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/"},"TailwindCSS"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://react.dev/learn"},"React"),". Both have excellent documentations, which I will\nnot attempt to replace with these notes. Instead, I will extend them and concretise them\nwith the focus on the Rucio WebUI frontend and the design that it entails."),(0,i.kt)("p",null,"Nonetheless, I will do a quick rundown of the most important and most frequently used\naspects of both frameworks in order to save a new developer time. In the end, I will also\nintroduce ",(0,i.kt)("a",{parentName:"p",href:"https://storybook.js.org/"},"StorybookJS"),", which is our tool to visualise the\nindividual tools of our website."),(0,i.kt)("h3",{id:"react"},"React"),(0,i.kt)("p",null,"We use React as our frontend JavaScript framework. It is essentially a tool for building UI\ncomponents."),(0,i.kt)("h4",{id:"components"},"Components"),(0,i.kt)("p",null,"The building-blocks of our webpages are React Components. The webpages themselves are React\nComponents themselves. Individual components can be composed with each other to produce\nmore complex components, in the sense that a button component can be used to populate a\nwidget which is then used in a page."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Rucio WebUI is written in TypeScript. In these docs, JavaScript and TypeScript might\nbe used interchangeably.")),(0,i.kt)("p",null,"These components JavaScript functions which return HTML code. We use ",(0,i.kt)("inlineCode",{parentName:"p"},".tsx")," files, which mean\nthat HTML markup and TypeScript code can be used in the same file. This can take the following\nshape:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'export const H1: React.FC<JSX.IntrinsicElements["h1"]> = (\n    { ...props }\n) => {\n    const { children, className, ...otherprops } = props;\n    return (\n        <h1\n            className={\n                // handled later\n            }\n            {...otherprops}\n        >\n            {children}\n        </h1>\n    )\n}\n')),(0,i.kt)("p",null,"Several things are going on here. The overall structure, however, is that of an\narrow function ",(0,i.kt)("inlineCode",{parentName:"p"},"() => {}")," returning an HTML tag of the shape\n",(0,i.kt)("inlineCode",{parentName:"p"},"<h1>something</h1>")," is defined and assigned to ",(0,i.kt)("inlineCode",{parentName:"p"},"const H1"),". The arrow function\nis typed, this will be handled later."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In TSX, HTML markup is inserted into TypeScript after a ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement.\nTypeScript is inserted into HTML when wrapped in ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),". VS Code does proper\nsyntax highlighting, which will help out.")),(0,i.kt)("p",null,"This function can now be imported and called in the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<H1>Hello world!</H1>\n// more or less equal to\n<h1>Hello world!</h1>\n")),(0,i.kt)("p",null,"When using React components, take note of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom components must start with a capital letter."),(0,i.kt)("li",{parentName:"ul"},"You must return only one top-level HTML tag. You may nest other tags within this one."),(0,i.kt)("li",{parentName:"ul"},"React components can nest other react components. They must ultimately resolve to HTML, though.")),(0,i.kt)("p",null,"In our components, we usually make sure to typecast the functions as React Function Components.\nThese can in turn be cast to take the attributes of a specific HTML tag, which is chosen\nto be the top-level HTML tag returned."),(0,i.kt)("p",null,"In the following example, we define a type ",(0,i.kt)("inlineCode",{parentName:"p"},"TextInputProps")," which combines the\nattributes of the ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>"),"-tag (all of which are optional) with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"onEnterkey?")," attribute (the ",(0,i.kt)("inlineCode",{parentName:"p"},"?")," signifies that this is an optional attribute). The\nresulting component can take any of these attributes."),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"...props")," syntax simply means that any parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"<TextInput foo bar/>"),"\npassed to the component that are not ",(0,i.kt)("inlineCode",{parentName:"p"},"onEnterkey")," are swallowed by the ",(0,i.kt)("inlineCode",{parentName:"p"},"props")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'type TextInputProps = JSX.IntrinsicElements["input"] & {\n    onEnterkey?: (event: any) => void,\n}\n\nexport const TextInput: (\n    React.FC<TextInputProps>\n) = (\n    {\n        onEnterkey,\n        ...props\n    }\n) => {\n    // shown in next code example\n}\n')),(0,i.kt)("p",null,"Typing our components this way means that we can easily extend standard HTML tags, while keeping\nall of their original functionality (i.e. the way they deal with attributes passed to them) ",(0,i.kt)("em",{parentName:"p"},"without"),"\nthe need to implement each attribute ourselves."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"These attributes are referred to as ",(0,i.kt)("em",{parentName:"p"},"content attributes")," and it is a very good idea to get\nacquainted with the different attributes that can be assigned to the different HTML tags.\nWe will cover some examples in the next section. You can find more information here:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://html.spec.whatwg.org/"},"HTML Specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"},"MDN Web Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.w3schools.com/tags/ref_attributes.asp"},"W3Schools")))),(0,i.kt)("p",null,"Finally, you can pass these attributes into the component state (usually done\nwith components that render pages), or pass them into the sub-components that\nmake up the component. The latter is what happens in the following code block,\nwhich  is taken from ",(0,i.kt)("inlineCode",{parentName:"p"},"TextInput")," again:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'// unpack props props to be handled individually and otherprops\nconst { children, onKeyDown, ...otherprops } = props\nreturn (\n    <input\n        onKeyDown={(e) => {\n            if (e.key === "Enter") {\n                // `?.()`-syntax used because onEnterkey could be undefined\n                onEnterkey?.(e)\n            }\n            // could also be undefined\n            onKeyDown?.(e)\n        }}\n        {...otherprops} // unpack otherprops here\n    >\n        {\n            // pass the content between <input></input> in here\n            children\n        } \n    </input>\n)\n')),(0,i.kt)("p",null,"In the previous example, a native HTML tag has been enriched by the ",(0,i.kt)("inlineCode",{parentName:"p"},"onKeyDown")," function\nby a special ",(0,i.kt)("inlineCode",{parentName:"p"},"onEnterkey")," functionality. In all other ways, the new component is the same\nas the included, standard ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>")," tag."),(0,i.kt)("h4",{id:"attributes"},"Attributes"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"React will rename some of the component attributes. An example of this is the\n",(0,i.kt)("inlineCode",{parentName:"p"},"className"),"-attribute, which replaces the native HTML keyword ",(0,i.kt)("inlineCode",{parentName:"p"},"class"),". This is\ndone to prevent namespace clashes.")),(0,i.kt)("h5",{id:"classname"},"className"),(0,i.kt)("p",null,"A more detailed description of how we style our components will follow in the\nTailwind-section. The important concept is that we assign classes to each component,\nand these classes are then used as selectors to apply certain styles to the the component.\nClasses are assigned to the ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," attribute as space-separated strings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<p\n    className="text-xl font-serif"\n>\n    Hi\n</p>\n')),(0,i.kt)("p",null,"We often make use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"twMerge")," function. This function swallows all string arguments\nand returns a single class string. Importantly, classes added later may override those added\nbefore them, which is not the case when we do not use ",(0,i.kt)("inlineCode",{parentName:"p"},"twMerge"),". An example of this\nis seen in the followin code-block."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<div\n    className={twMerge(\n        "flex flex-col sm:flex-row",\n        "list-none font-bold",\n        "bg-white dark:bg-gray-900",\n        "border-0 dark:border-2 dark:rounded-md dark:bg-clip-content",\n        className ?? "", // optionally add classes to override what came before\n    )}\n>\n')),(0,i.kt)("p",null,"It is a good idea to use ",(0,i.kt)("inlineCode",{parentName:"p"},"twMerge")," wherever the class definition contains conditionals,\noverrides, or is so long that it would span multiple lines."),(0,i.kt)("h5",{id:"pageprops"},"PageProps"),(0,i.kt)("p",null,"The highest-level components produced in the frontend are the pages. Remember\nthat a component is a function that returns HTML. The input of these functions\ncan be quite complex, especially for the highest-level components, which combine\na lot of data from different sources."),(0,i.kt)("p",null,"In the following example, we define an interface for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ListDID")," page. Note\nthat input to the page is given in the form of a ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel")," (",(0,i.kt)("inlineCode",{parentName:"p"},"DIDViewModel"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"DIDMetaViewModel"),"), while the functions are for the page to communicate to\ndeeper-lying components."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface ListDIDPageProps {\n    comdom: UseComDOM<DIDViewModel>, // this ViewModel comes in a stream, more later.\n    didQuery: (query: string, type: DIDType) => void,\n    didMetaQuery: (scope: string, name: string) => void,\n    didMetaQueryResponse: DIDMetaViewModel,\n}\n\nexport const ListDID = (\n    props: ListDIDPageProps\n) => {\n    // ...\n}\n")),(0,i.kt)("p",null,"We do not want the frontend to handle any fetches or streams itself, hence the\nfunctions ",(0,i.kt)("inlineCode",{parentName:"p"},"didQuery")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"didMetaQuery")," (which start a stream and query\nmetadata, respectively) are defined outside of the component and only passed to\nit. It also means that the page can be run even without a backend attached to\nit, we simply replace these functions with dummies (and the ViewModels with fake\ndata)."),(0,i.kt)("h5",{id:"aria"},"aria"),(0,i.kt)("p",null,"ARIA stands for ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/html-aria/"},"Accessible Rich Internet Applications"),"\nand defines the standard for how to make a web application accessible to users that\nare somehow impaired. One way of making the website more accessible is the conscious inclusion of\nARIA-attributes."),(0,i.kt)("p",null,"A simple but common example would be adding an ARIA-label to an element which would\notherwise only be described by an icon/glyph. Note that screen-readers give priority\nto semantic ",(0,i.kt)("inlineCode",{parentName:"p"},"<label>"),"-elements over ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label"),". In the following example, however,\nadding such an element would not be practical."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button\n    icon={<HiChevronDoubleLeft />}\n    aria-label="First Page"\n    // ...\n/>\n')),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Do not overuse the ARIA-attributes. By using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Semantics"},"semantic\nHTML"),", many of these attributes\nwill already be filled in correctly.")),(0,i.kt)("h4",{id:"hooks"},"Hooks"),(0,i.kt)("p",null,"Hooks are reusable functions. They all start with ",(0,i.kt)("inlineCode",{parentName:"p"},"use"),". "),(0,i.kt)("h5",{id:"usestate"},"useState"),(0,i.kt)("p",null,"Add a state variable to the component, i.e."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const [state, setState] = useState<TypeOfState>(initialState)\n")),(0,i.kt)("h5",{id:"useeffect"},"useEffect"),(0,i.kt)("p",null,"The signature of this hook is ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect(setup, dependencies?)"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"setup"),"\nis the function run when any value in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," list changes. The\nvalues in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," list can be thought of as ",(0,i.kt)("em",{parentName:"p"},"reactive"),", because if\nany one of them changes, the ",(0,i.kt)("inlineCode",{parentName:"p"},"setup")," function is called as a ",(0,i.kt)("em",{parentName:"p"},"reaction"),"."),(0,i.kt)("p",null,"Importantly, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies")," list is empty, the ",(0,i.kt)("inlineCode",{parentName:"p"},"setup")," function is only\nrun ",(0,i.kt)("em",{parentName:"p"},"once")," after the initial render. Since ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," is only run on the\nclient, this is a very useful way of running code (seemingly) on page load, but\nclient-side. An example of this would be fetching additional metadata. An\nexample of this can be seen here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"useEffect(() => {\n    didMetaQueryBase(params.scope, params.name).then(setDIDMeta)\n}, [])\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In this case, the function ",(0,i.kt)("inlineCode",{parentName:"p"},"didMetaQueryBase")," returns a value of type\n",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<DIDMetaViewModel>"),".  Learn about ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," in TypeScript, and how to\ndeal with it,\n",(0,i.kt)("a",{parentName:"p",href:"https://basarat.gitbook.io/typescript/future-javascript/promise"},"here")," ")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note that passing no dependency array at all will lead to the Effect running\nafter every single render of the component!")),(0,i.kt)("h5",{id:"usecomdom"},"useComDOM"),(0,i.kt)("p",null,"This is a custom hook returning a ",(0,i.kt)("inlineCode",{parentName:"p"},"UseComDOM<T>")," (Communication Document Object\nModel) object. It serves as a wrapper for streamed data, also providing\nfunctions to inspect and control the stream.  It is a generic which is bound to\ntype ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", which itself is usually a ViewModel.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"useComDOM"),"-hook is most\nstrongly associated with the StreamedTables, whose documentation can be found\n",(0,i.kt)("a",{parentName:"p",href:"/documentation/developer/webui/streamedtables"},"here"),"."),(0,i.kt)("h5",{id:"useresponsivehook"},"useResponsiveHook"),(0,i.kt)("p",null,"The website is designed to be responsive, this means that there are several\nbreakpoints at which the assigned styles can change during window resizing. In\nmost cases, this is by Tailwind, our CSS framework. In some cases, you want\naccess to the window width class (small, medium, etc.) from within your code in\norder to manipulate components programmatically. An example of this is the\nvisibility of columns in StreamedTables, which is defined in a ",(0,i.kt)("inlineCode",{parentName:"p"},"TableStyling"),"\nobject. "),(0,i.kt)("p",null,"This custom hook implements a window resize event listener and exposes the\nfollowing object:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"return {\n    sm: windowSize[0] > 640,\n    md: windowSize[0] > 768,\n    lg: windowSize[0] > 1024,\n    xl: windowSize[0] > 1280,\n    xxl: windowSize[0] > 1536,\n} as ResponsiveHook\n")),(0,i.kt)("p",null,"The width classes in pixels correspond to those defined by\n",(0,i.kt)("a",{parentName:"p",href:"#responsive-design"},"Tailwind"),"."),(0,i.kt)("h3",{id:"tailwind"},"Tailwind"),(0,i.kt)("p",null,"Tailwind is the CSS framework which we use to style our components. Instead of writing\nCSS directly, we assign classes to components via the ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," attribute. These\nclasses act as selectors for the stylesheet to selectively assign styles to specific components.\nThe main concept is that Tailwind consists of many utility classes which, by themselves, only\ncontribute a small amount of style information (e.g. the background colour, the display mode, etc.).\nMany Tailwind classes map directly to a CSS attribute. In adding multiple classes, we\ncan iteratively build complex styles from these basic building blocks."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The philosophy is to build all styles from these common basic building blocks,\nand to avoid creating a new custom styles grouping these basic classes into more complex ones.\nWhile it might seem smart to collect a frequently-reused set of classes into one larger one,\nthis is actually a Tailwind-antipattern in most cases.")),(0,i.kt)("p",null,"An example of this in action would be the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Button")," created for the WebUI project.\nIn the simplified version shown in the following code-block, the ",(0,i.kt)("inlineCode",{parentName:"p"},"twMerge"),"-function introduced\nin the section on the ",(0,i.kt)("inlineCode",{parentName:"p"},"className"),"-attribute was used to compile multiple strings into a\nsingle one that could be used by the component. Importantly, we can use code (such\nas the ternary operator) to specify branching logic that returns us the style. In this\ncase, branching logic is used to style the button depending on whether it is disabled or enabled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'<button\n    disabled={props.disabled}\n    className={twMerge(\n        "py-1 px-3 h-8 rounded", // style the button shape\n        "bg-blue-500 hover:bg-blue-600 text-white", // style button colours\n        props.disabled ? (\n            // show this style if disabled\n            "cursor-not-allowed bg-gray-500 hover:bg-gray-500 text-gray-200"\n            : "cursor-pointer" // show this style if enabled\n        ),\n        "font-bold", // style text\n        className ?? "" // optionally override all this\n    )}\n>\n')),(0,i.kt)("p",null,"We will cover how we conventionally structure the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"className")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"twMerge"),".\nWe will also discuss dark mode and responsive desgin as examples of metaclasses, but\nwe strongly encourage you to work through the Tailwind documentation, which is full of\nexamples and very helpful. In addition, it is a good idea to look at external resources\nto fully understand the flexbox and other display models in HTML."),(0,i.kt)("h4",{id:"structuring-class-names-overriding"},"Structuring Class Names, Overriding"),(0,i.kt)("p",null,"When adding Tailwind classes to a component, it is useful to ask the following questions in\norder:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"What are the dimensions of this component?"),(0,i.kt)("li",{parentName:"ol"},"What space do you want around the element's border (margin), and how much\nspace do you want between the element's border and its content (padding)?"),(0,i.kt)("li",{parentName:"ol"},"Considering the border of the component. Should it be rounded, should the\nborder be visible, how thick/which colour shall the border line have?"),(0,i.kt)("li",{parentName:"ol"},"What is the background colour of this component?"),(0,i.kt)("li",{parentName:"ol"},"If the component directly contains text, how shall this text be styled?"),(0,i.kt)("li",{parentName:"ol"},"If the component is a container for several child components, how shall these be arranged? (Consider reading up on ",(0,i.kt)("inlineCode",{parentName:"li"},"flex"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"grid"),", etc.)"),(0,i.kt)("li",{parentName:"ol"},"If the component is within a flexbox, how shall it respond to resizing? (grow, shrink, etc.)"),(0,i.kt)("li",{parentName:"ol"},"Which style of cursor should be displayed when the cursor enters the component?"),(0,i.kt)("li",{parentName:"ol"},"Do you need to override any of these styles depending on external props?\nRemember that you can use branching logic within the classname definitions and\nthat later classes override previous ones."),(0,i.kt)("li",{parentName:"ol"},"Consider dark mode and override previous classes with the ",(0,i.kt)("inlineCode",{parentName:"li"},"dark:"),"-prefix."),(0,i.kt)("li",{parentName:"ol"},"Consider different window sizes and create a responsive component by using\nthe size-prefixes ",(0,i.kt)("inlineCode",{parentName:"li"},"sm:"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"md:"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"lg:"),", etc."),(0,i.kt)("li",{parentName:"ol"},"Consider other necessary overrides with any of the other\nTailwind-pseudoclasses.")),(0,i.kt)("p",null,"In general, we attempt to structure the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"twMerge")," this way, but it\nmight make more sense for you to group your classnames in a different manner."),(0,i.kt)("p",null,"As touched on in the above listing, Tailwind has the concept of ",(0,i.kt)("em",{parentName:"p"},"pseudoclasses"),"\nto optionally only enable a certain selector when a precondition is given. A\nmetaclass will override the vanilla class (even without ",(0,i.kt)("inlineCode",{parentName:"p"},"twMerge"),"). For example,\na component with classes ",(0,i.kt)("inlineCode",{parentName:"p"},"bg-blue-500 hover:bg-blue-600")," will turn a darker\nshade of blue when the mouse cursor comes to hover over it."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Also look at the\n",(0,i.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference"},"reference"),"\nfor Tailwind-pseudoclasses.")),(0,i.kt)("h4",{id:"responsive-design"},"Responsive Design"),(0,i.kt)("p",null,'Most of the pseudoclasses are straightforward, nevertheless, we want to give a\nshort introduction to responsive design with Tailwind. The way Tailwind handles\nthe pseudoclasses responding to changes in page width might be unintuitive at\nfirst, since Tailwind is designed "mobile first". In essence, a prefix adds a\n',(0,i.kt)("em",{parentName:"p"},"minimum")," size, above which the style is applied. For example, the string\n",(0,i.kt)("inlineCode",{parentName:"p"},"w-full md:w-24")," will apply the ",(0,i.kt)("inlineCode",{parentName:"p"},"w-full"),"-class when the page width is below the\nthreshold for ",(0,i.kt)("inlineCode",{parentName:"p"},"md"),"."),(0,i.kt)("p",null,"The table below serves as a reference for the size thresholds used in Tailwind.\nThese sizings are also used throughout the whole project."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Prefix"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Minimum size ","[","px","]"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sm")),(0,i.kt)("td",{parentName:"tr",align:"right"},"640")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"md")),(0,i.kt)("td",{parentName:"tr",align:"right"},"768")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"lg")),(0,i.kt)("td",{parentName:"tr",align:"right"},"1024")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"useResponsiveHook")," to do conditional resizing (such as in\nStreamedTables, where Tailwind is difficult to use). It combines an\nEventListener and all these thresholds into a reusable hook.")),(0,i.kt)("h4",{id:"compiling-tailwind"},"Compiling Tailwind"),(0,i.kt)("p",null,"Tailwind compiles the minimal stylesheet required to use all the classes defined\nin the project.  The stylesheet is then automatically loaded by the relevant\nNextJS components and made available in every page of the WebUI. You can find\nthe compiled stylesheet under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/component-library/outputtailwind.css"),", where\nit lives at the top-level folder of the ",(0,i.kt)("inlineCode",{parentName:"p"},"component-library")," with the other\ncomponents. Tailwind can be configured via the\n",(0,i.kt)("inlineCode",{parentName:"p"},"src/component-library/tailwind.css")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file in the\nroot folder, see the Tailwind docs for more information on this."),(0,i.kt)("p",null,"When you want to recompile Tailwind, you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build-tailwind"),", which\ntakes ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.css")," and outputs ",(0,i.kt)("inlineCode",{parentName:"p"},"outputtailwind.css"),". If you followed the\ntutorial laid out ",(0,i.kt)("a",{parentName:"p",href:"/documentation/developer/webui/webui_frontend_vscode_dev_env#ui-only"},"here"),", you will\nhave configured VS Code to automatically recompile Tailwind each time you save a\nrelevant file. We strongly recommend this."),(0,i.kt)("p",null,"Any changes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"outputtailwind.css"),"-file will immediately become visible on\nthe StorybookJS-viewer or on a NextJS dev server. This allows for rapid\nprototyping and quick changes."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can define additional regex matchers for the Tailwind compiler to use to\nmatch classNames. These are defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," under\n",(0,i.kt)("inlineCode",{parentName:"p"},"module.exports.content.files.extract"),".")),(0,i.kt)("h3",{id:"storybook"},"Storybook"),(0,i.kt)("p",null,'StorybookJS is calls itself a "frontend workshop for building UI components and\npages in isolation".  Importantly, it allows us to view our React components,\ninteract with them and also play around with their inputs. This allows us to\nhave direct access from the smallest components (such as text, buttons, inputs)\nup to the most complex pages. A further usecase is for demonstrations, as well\nas testing dark mode and responsive design.'),(0,i.kt)("p",null,"Each component in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/component-library"),"-folder has an associated ",(0,i.kt)("em",{parentName:"p"},"story"),",\ni.e."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ls src/component-library/Pages/RSE\n> ListRSE.tsx\n> ListRSE.stories.tsx\n> PageRSE.tsx\n> PageRSE.stories.tsx\n")),(0,i.kt)("p",null,"Inside each of these stories lies code which returns the associated component\nwrapped within a Storybook Function. This function is irrelevant to us.\nImportantly, we can pass arguments to the component, essentially inserting mock\nor fake data. These inputs serve as defaults for Storybook, one can also\nmanipulate these inputs from within the Storybook web interface. We can also\npass in mock functions if this is required, these cannot be manipulated from the\nweb interface."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"create-component-story")," tool (found within the ",(0,i.kt)("inlineCode",{parentName:"p"},"tools"),"-folder) to\nrapidly create a new dummy component together with its story. You might need to\nchange the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," in the default export.")),(0,i.kt)("p",null,"An example of how arguments are passed into a storybook function can be seen in\nthe following code block.  Fixtures and the ",(0,i.kt)("inlineCode",{parentName:"p"},"mockUseComDOM"),"-function will be\nexplained below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'PageDID.args = {\n    didMeta: fixtureDIDMetaViewModel(),\n    fromDidList: "yosearch",\n    // Parent DIDs [FILE]\n    didParentsComDOM: mockUseComDOM(\n        // create array of length 100, populate with fake DIDViewModel objects\n        Array.from({length: 100}, (_, i) => fixtureDIDViewModel())\n    ),\n    //...\n}\n\n')),(0,i.kt)("h5",{id:"fixtures"},"Fixtures"),(0,i.kt)("p",null,"We make use of many kinds of fixtures to insert mock data into our stories. The\nfixtures can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"test/fixtures/table-fixtures.ts"),", where each ViewModel\nused in the frontend has a function that returns a mock version of it. A bunch\nof utility functions can be found in this file, which can help in creating the\nmock fixture."),(0,i.kt)("h5",{id:"mockusecomdom"},"mockUseComDOM"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"table-fixtures.ts"),"-file contains a fixture which deserves to be mentioned\nby itself: the ",(0,i.kt)("inlineCode",{parentName:"p"},"mockUseComDOM"),"-function, which takes a list of datapoints of\ntype ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," and then mocks the ",(0,i.kt)("inlineCode",{parentName:"p"},"UseComDOM<T>")," object. This ComDOM-object can then\nbe passed on to StreamedTables.  Since the relevant attributes and methods that\nthe StreamedTable accesses are all fully mocked, this function allows you to\nshow StreamedTables with mock data and interfacing even when no backend is\nconnected."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note that these random fixtures do not work well with the NextJS Dev Server,\nwhich will raise Hydration Errors. This is because the page rendered on the\nserver does not match the first render of the page on the client (because both\nuse random fixture generators). However, you can choose to ignore the Hydration\nErrors for the time being.")))}u.isMDXComponent=!0}}]);