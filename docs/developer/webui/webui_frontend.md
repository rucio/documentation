---
id: webui_frontend
title: Developing the WebUI Frontend
---

## Notes on external frameworks
The Rucio WebUI frontend uses two main frameworks: [TailwindCSS](https://tailwindcss.com/)
and [React](https://react.dev/learn). Both have excellent documentations, which I will
not attempt to replace with these notes. Instead, I will extend them and concretise them
with the focus on the Rucio WebUI frontend and the design that it entails.

Nonetheless, I will do a quick rundown of the most important and most frequently used
aspects of both frameworks in order to save a new developer time. In the end, I will also
introduce [StorybookJS](https://storybook.js.org/), which is our tool to visualise the
individual tools of our website.

### React

We use React as our frontend JavaScript framework. It is essentially a tool for building UI
components.

#### Components

The building-blocks of our webpages are React Components. The webpages themselves are React
Components themselves. Individual components can be composed with each other to produce
more complex components, in the sense that a button component can be used to populate a
widget which is then used in a page.

:::note

The Rucio WebUI is written in TypeScript. In these docs, JavaScript and TypeScript might
be used interchangeably.

:::

These components JavaScript functions which return HTML code. We use `.tsx` files, which mean
that HTML markup and TypeScript code can be used in the same file. This can take the following
shape:


```tsx
export const H1: React.FC<JSX.IntrinsicElements["h1"]> = (
    { ...props }
) => {
    const { children, className, ...otherprops } = props;
    return (
        <h1
            className={
                // handled later
            }
            {...otherprops}
        >
            {children}
        </h1>
    )
}
```

Several things are going on here. The overall structure, however, is that of an
arrow function `() => {}` returning an HTML tag of the shape
`<h1>something</h1>` is defined and assigned to `const H1`. The arrow function
is typed, this will be handled later.

:::tip

In TSX, HTML markup is inserted into TypeScript after a `return` statement.
TypeScript is inserted into HTML when wrapped in `{}`. VS Code does proper
syntax highlighting, which will help out.

:::

This function can now be imported and called in the following way:

```tsx
<H1>Hello world!</H1>
// more or less equal to
<h1>Hello world!</h1>
```

When using React components, take note of the following:
- Custom components must start with a capital letter.
- You must return only one top-level HTML tag. You may nest other tags within this one.
- React components can nest other react components. They must ultimately resolve to HTML, though.

In our components, we usually make sure to typecast the functions as React Function Components.
These can in turn be cast to take the attributes of a specific HTML tag, which is chosen
to be the top-level HTML tag returned.

In the following example, we define a type `TextInputProps` which combines the
attributes of the `<input>`-tag (all of which are optional) with the
`onEnterkey?` attribute (the `?` signifies that this is an optional attribute). The
resulting component can take any of these attributes.

Note that the `...props` syntax simply means that any parameters `<TextInput foo bar/>`
passed to the component that are not `onEnterkey` are swallowed by the `props` object.


```tsx
type TextInputProps = JSX.IntrinsicElements["input"] & {
    onEnterkey?: (event: any) => void,
}

export const TextInput: (
    React.FC<TextInputProps>
) = (
    {
        onEnterkey,
        ...props
    }
) => {
    // shown in next code example
}
```

Typing our components this way means that we can easily extend standard HTML tags, while keeping
all of their original functionality (i.e. the way they deal with attributes passed to them) *without*
the need to implement each attribute ourselves.

:::info

These attributes are referred to as *content attributes* and it is a very good idea to get
acquainted with the different attributes that can be assigned to the different HTML tags.
We will cover some examples in the next section. You can find more information here:

- [HTML Specification](https://html.spec.whatwg.org/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
- [W3Schools](https://www.w3schools.com/tags/ref_attributes.asp)

:::

Finally, you can pass these attributes into the component state (usually done
with components that render pages), or pass them into the sub-components that
make up the component. The latter is what happens in the following code block,
which  is taken from `TextInput` again:

```tsx
// unpack props props to be handled individually and otherprops
const { children, onKeyDown, ...otherprops } = props
return (
    <input
        onKeyDown={(e) => {
            if (e.key === "Enter") {
                // `?.()`-syntax used because onEnterkey could be undefined
                onEnterkey?.(e)
            }
            // could also be undefined
            onKeyDown?.(e)
        }}
        {...otherprops} // unpack otherprops here
    >
        {
            // pass the content between <input></input> in here
            children
        }
    </input>
)
```

In the previous example, a native HTML tag has been enriched by the `onKeyDown` function
by a special `onEnterkey` functionality. In all other ways, the new component is the same
as the included, standard `<input>` tag.



#### Attributes

:::tip

React will rename some of the component attributes. An example of this is the
`className`-attribute, which replaces the native HTML keyword `class`. This is
done to prevent namespace clashes.

:::

##### className

A more detailed description of how we style our components will follow in the
Tailwind-section. The important concept is that we assign classes to each component,
and these classes are then used as selectors to apply certain styles to the the component.
Classes are assigned to the `className` attribute as space-separated strings.

```tsx
<p
    className="text-xl font-serif"
>
    Hi
</p>
```

We often make use of the `twMerge` function. This function swallows all string arguments
and returns a single class string. Importantly, classes added later may override those added
before them, which is not the case when we do not use `twMerge`. An example of this
is seen in the following code-block.

```tsx
<div
    className={twMerge(
        "flex flex-col sm:flex-row",
        "list-none font-bold",
        "bg-white dark:bg-gray-900",
        "border-0 dark:border-2 dark:rounded-md dark:bg-clip-content",
        className ?? "", // optionally add classes to override what came before
    )}
>
```

It is a good idea to use `twMerge` wherever the class definition contains conditionals,
overrides, or is so long that it would span multiple lines.

##### PageProps

The highest-level components produced in the frontend are the pages. Remember
that a component is a function that returns HTML. The input of these functions
can be quite complex, especially for the highest-level components, which combine
a lot of data from different sources.

In the following example, we define an interface for the `ListDID` page. Note
that input to the page is given in the form of a `ViewModel` (`DIDViewModel`,
`DIDMetaViewModel`), while the functions are for the page to communicate to
deeper-lying components.

```tsx
export interface ListDIDPageProps {
    comdom: UseComDOM<DIDViewModel>, // this ViewModel comes in a stream, more later.
    didQuery: (query: string, type: DIDType) => void,
    didMetaQuery: (scope: string, name: string) => void,
    didMetaQueryResponse: DIDMetaViewModel,
}

export const ListDID = (
    props: ListDIDPageProps
) => {
    // ...
}
```

We do not want the frontend to handle any fetches or streams itself, hence the
functions `didQuery` and `didMetaQuery` (which start a stream and query
metadata, respectively) are defined outside of the component and only passed to
it. It also means that the page can be run even without a backend attached to
it, we simply replace these functions with dummies (and the ViewModels with fake
data).

##### aria

ARIA stands for [Accessible Rich Internet Applications](https://www.w3.org/TR/html-aria/)
and defines the standard for how to make a web application accessible to users that
are somehow impaired. One way of making the website more accessible is the conscious inclusion of
ARIA-attributes.

A simple but common example would be adding an ARIA-label to an element which would
otherwise only be described by an icon/glyph. Note that screen-readers give priority
to semantic `<label>`-elements over `aria-label`. In the following example, however,
adding such an element would not be practical.

```tsx
<Button
    icon={<HiChevronDoubleLeft />}
    aria-label="First Page"
    // ...
/>
```

:::caution

Do not overuse the ARIA-attributes. By using [semantic
HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics), many of these attributes
will already be filled in correctly.

:::


#### Hooks
Hooks are reusable functions. They all start with `use`.

##### useState
Add a state variable to the component, i.e.
```tsx
const [state, setState] = useState<TypeOfState>(initialState)
```

##### useEffect
The signature of this hook is `useEffect(setup, dependencies?)`, where `setup`
is the function run when any value in the `dependencies` list changes. The
values in the `dependencies` list can be thought of as *reactive*, because if
any one of them changes, the `setup` function is called as a *reaction*.

Importantly, when the `dependencies` list is empty, the `setup` function is only
run *once* after the initial render. Since `useEffect` is only run on the
client, this is a very useful way of running code (seemingly) on page load, but
client-side. An example of this would be fetching additional metadata. An
example of this can be seen here:

```tsx
useEffect(() => {
    didMetaQueryBase(params.scope, params.name).then(setDIDMeta)
}, [])
```

:::info

In this case, the function `didMetaQueryBase` returns a value of type
`Promise<DIDMetaViewModel>`.  Learn about `Promise` in TypeScript, and how to
deal with it,
[here](https://basarat.gitbook.io/typescript/future-javascript/promise)

:::

:::caution

Note that passing no dependency array at all will lead to the Effect running
after every single render of the component!

:::

##### useComDOM

This is a custom hook returning a `UseComDOM<T>` (Communication Document Object
Model) object. It serves as a wrapper for streamed data, also providing
functions to inspect and control the stream.  It is a generic which is bound to
type `T`, which itself is usually a ViewModel.  The `useComDOM`-hook is most
strongly associated with the StreamedTables, whose documentation can be found
[here](./streamedtables.md).

##### useResponsiveHook

The website is designed to be responsive, this means that there are several
breakpoints at which the assigned styles can change during window resizing. In
most cases, this is by Tailwind, our CSS framework. In some cases, you want
access to the window width class (small, medium, etc.) from within your code in
order to manipulate components programmatically. An example of this is the
visibility of columns in StreamedTables, which is defined in a `TableStyling`
object.

This custom hook implements a window resize event listener and exposes the
following object:

```tsx
return {
    sm: windowSize[0] > 640,
    md: windowSize[0] > 768,
    lg: windowSize[0] > 1024,
    xl: windowSize[0] > 1280,
    xxl: windowSize[0] > 1536,
} as ResponsiveHook
```

The width classes in pixels correspond to those defined by
[Tailwind](#responsive-design).





### Tailwind
Tailwind is the CSS framework which we use to style our components. Instead of writing
CSS directly, we assign classes to components via the `className` attribute. These
classes act as selectors for the stylesheet to selectively assign styles to specific components.
The main concept is that Tailwind consists of many utility classes which, by themselves, only
contribute a small amount of style information (e.g. the background colour, the display mode, etc.).
Many Tailwind classes map directly to a CSS attribute. In adding multiple classes, we
can iteratively build complex styles from these basic building blocks.

:::caution

The philosophy is to build all styles from these common basic building blocks,
and to avoid creating a new custom styles grouping these basic classes into more complex ones.
While it might seem smart to collect a frequently-reused set of classes into one larger one,
this is actually a Tailwind-antipattern in most cases.

:::

An example of this in action would be the custom `Button` created for the WebUI project.
In the simplified version shown in the following code-block, the `twMerge`-function introduced
in the section on the `className`-attribute was used to compile multiple strings into a
single one that could be used by the component. Importantly, we can use code (such
as the ternary operator) to specify branching logic that returns us the style. In this
case, branching logic is used to style the button depending on whether it is disabled or enabled.

```tsx
<button
    disabled={props.disabled}
    className={twMerge(
        "py-1 px-3 h-8 rounded", // style the button shape
        "bg-blue-500 hover:bg-blue-600 text-white", // style button colours
        props.disabled ? (
            // show this style if disabled
            "cursor-not-allowed bg-gray-500 hover:bg-gray-500 text-gray-200"
            : "cursor-pointer" // show this style if enabled
        ),
        "font-bold", // style text
        className ?? "" // optionally override all this
    )}
>
```

We will cover how we conventionally structure the contents of `className` and `twMerge`.
We will also discuss dark mode and responsive design as examples of metaclasses, but
we strongly encourage you to work through the Tailwind documentation, which is full of
examples and very helpful. In addition, it is a good idea to look at external resources
to fully understand the flexbox and other display models in HTML.

#### Structuring Class Names, Overriding

When adding Tailwind classes to a component, it is useful to ask the following questions in
order:

1. What are the dimensions of this component?
1. What space do you want around the element's border (margin), and how much
space do you want between the element's border and its content (padding)?
1. Considering the border of the component. Should it be rounded, should the
border be visible, how thick/which colour shall the border line have?
1. What is the background colour of this component?
1. If the component directly contains text, how shall this text be styled?
1. If the component is a container for several child components, how shall these be arranged? (Consider reading up on `flex`, `grid`, etc.)
1. If the component is within a flexbox, how shall it respond to resizing? (grow, shrink, etc.)
1. Which style of cursor should be displayed when the cursor enters the component?
1. Do you need to override any of these styles depending on external props?
Remember that you can use branching logic within the classname definitions and
that later classes override previous ones.
1. Consider dark mode and override previous classes with the `dark:`-prefix.
1. Consider different window sizes and create a responsive component by using
the size-prefixes `sm:`, `md:`, `lg:`, etc.
1. Consider other necessary overrides with any of the other
Tailwind-pseudoclasses.

In general, we attempt to structure the contents of `twMerge` this way, but it
might make more sense for you to group your classnames in a different manner.

As touched on in the above listing, Tailwind has the concept of *pseudoclasses*
to optionally only enable a certain selector when a precondition is given. A
metaclass will override the vanilla class (even without `twMerge`). For example,
a component with classes `bg-blue-500 hover:bg-blue-600` will turn a darker
shade of blue when the mouse cursor comes to hover over it.

:::tip

Also look at the
[reference](https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference)
for Tailwind-pseudoclasses.

:::

#### Responsive Design

Most of the pseudoclasses are straightforward, nevertheless, we want to give a
short introduction to responsive design with Tailwind. The way Tailwind handles
the pseudoclasses responding to changes in page width might be unintuitive at
first, since Tailwind is designed "mobile first". In essence, a prefix adds a
*minimum* size, above which the style is applied. For example, the string
`w-full md:w-24` will apply the `w-full`-class when the page width is below the
threshold for `md`.

The table below serves as a reference for the size thresholds used in Tailwind.
These sizings are also used throughout the whole project.

| Prefix | Minimum size \[px\] |
| :----- | ------------------: |
| `sm` | 640 |
| `md` | 768 |
| `lg` | 1024 |

:::tip

Use the `useResponsiveHook` to do conditional resizing (such as in
StreamedTables, where Tailwind is difficult to use). It combines an
EventListener and all these thresholds into a reusable hook.

:::

#### Compiling Tailwind

Tailwind compiles the minimal stylesheet required to use all the classes defined
in the project.  The stylesheet is then automatically loaded by the relevant
NextJS components and made available in every page of the WebUI. You can find
the compiled stylesheet under `src/component-library/outputtailwind.css`, where
it lives at the top-level folder of the `component-library` with the other
components. Tailwind can be configured via the
`src/component-library/tailwind.css` and the `tailwind.config.js` file in the
root folder, see the Tailwind docs for more information on this.

When you want to recompile Tailwind, you can run `npm run build-tailwind`, which
takes `tailwind.css` and outputs `outputtailwind.css`. If you followed the
tutorial laid out [here](./webui_frontend_vscode_dev_env.md#ui-only), you will
have configured VS Code to automatically recompile Tailwind each time you save a
relevant file. We strongly recommend this.

Any changes to the `outputtailwind.css`-file will immediately become visible on
the StorybookJS-viewer or on a NextJS dev server. This allows for rapid
prototyping and quick changes.

:::info

You can define additional regex matchers for the Tailwind compiler to use to
match classNames. These are defined in `tailwind.config.js` under
`module.exports.content.files.extract`.

:::

### Storybook

StorybookJS is calls itself a "frontend workshop for building UI components and
pages in isolation".  Importantly, it allows us to view our React components,
interact with them and also play around with their inputs. This allows us to
have direct access from the smallest components (such as text, buttons, inputs)
up to the most complex pages. A further usecase is for demonstrations, as well
as testing dark mode and responsive design.

Each component in the `src/component-library`-folder has an associated *story*,
i.e.

```
$ ls src/component-library/Pages/RSE
> ListRSE.tsx
> ListRSE.stories.tsx
> PageRSE.tsx
> PageRSE.stories.tsx
```

Inside each of these stories lies code which returns the associated component
wrapped within a Storybook Function. This function is irrelevant to us.
Importantly, we can pass arguments to the component, essentially inserting mock
or fake data. These inputs serve as defaults for Storybook, one can also
manipulate these inputs from within the Storybook web interface. We can also
pass in mock functions if this is required, these cannot be manipulated from the
web interface.

:::tip

Use the `create-component-story` tool (found within the `tools`-folder) to
rapidly create a new dummy component together with its story. You might need to
change the value of `title` in the default export.

:::

An example of how arguments are passed into a storybook function can be seen in
the following code block.  Fixtures and the `mockUseComDOM`-function will be
explained below.

```tsx
PageDID.args = {
    didMeta: fixtureDIDMetaViewModel(),
    fromDidList: "yosearch",
    // Parent DIDs [FILE]
    didParentsComDOM: mockUseComDOM(
        // create array of length 100, populate with fake DIDViewModel objects
        Array.from({length: 100}, (_, i) => fixtureDIDViewModel())
    ),
    //...
}

```

##### Fixtures

We make use of many kinds of fixtures to insert mock data into our stories. The
fixtures can be found in `test/fixtures/table-fixtures.ts`, where each ViewModel
used in the frontend has a function that returns a mock version of it. A bunch
of utility functions can be found in this file, which can help in creating the
mock fixture.

##### mockUseComDOM

The `table-fixtures.ts`-file contains a fixture which deserves to be mentioned
by itself: the `mockUseComDOM`-function, which takes a list of datapoints of
type `T` and then mocks the `UseComDOM<T>` object. This ComDOM-object can then
be passed on to StreamedTables.  Since the relevant attributes and methods that
the StreamedTable accesses are all fully mocked, this function allows you to
show StreamedTables with mock data and interfacing even when no backend is
connected.

:::caution

Note that these random fixtures do not work well with the NextJS Dev Server,
which will raise Hydration Errors. This is because the page rendered on the
server does not match the first render of the page on the client (because both
use random fixture generators). However, you can choose to ignore the Hydration
Errors for the time being.

:::

<!-- ## Design decisions

## Components

## Folder structure -->
