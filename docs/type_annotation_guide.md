---
title: Type Annotation Guide
---

The purpose of this document is to collaboratively create the developer
guidelines for static type checking of rucio's codebase.

**TL;DR** New code has to be type annotated, old code should be migrated. Look
into [Best Practices](#Best-Practices) for specific instructions on how to use
it in our repository.

## Abstract

Python is a dynamically-typed programming language. Dynamic type checked
programming languages verify the type safety at runtime. Type-related bugs thus
occur at runtime. Tests are in place to check the types and prevent
bugs. However, tests do not always cover all possible combinations of types.

[PEP 484](https://peps.python.org/pep-0484/), which got adopted into the _Python
Language Reference_ of Python3.6 and is thus a part of Python itself, introduces
_type hints_ to Python. Type hints add more information to the source code and
allow us to automatically check the code for type missmatches. Type-related bugs
will thereby be checked at compile time (pre-runtime), rather than at
runtime. Type hints also increase the descriptiveness of our code and make it
easier to read.

Rucio does not has type hints at the moment. The plan is to introduce them
consistently to the entire project. Adding type hints to a big project is
challenging. Since the code-base is too large to introduce them with only one
PR, we will introduce the hints incrementally.

## Type Annotations

### General Information

- [**PEP 483 – The Theory of Type Hints**](https://peps.python.org/pep-0483/)
  This _PEP_ explains the theory behind type hints, as well as backgrounds to
  certain decisions.

### Syntax

There are comprehensive and descriptive documentations on the web on how to
annotate python code with type hints. E.g.:

- [**MyPy type hints cheat
  sheet**](https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html) The cheat
  sheet contains information on the syntax of type annotations and _which ones_
  to use _when_.

- [**PEP 484 – Type Hints**](https://peps.python.org/pep-0484/) Contains general
  information about type hints in Python. This includes the motivation, the
  definition, what to do with edge cases, and much more.

- [**PEP 589 – TypedDict: Type Hints for Dictionaries with a Fixed Set of
  Keys**](https://peps.python.org/pep-0589/) Explains how to use `TypedDict` and
  what to regard while using them.

## Why

Dynamically typed programming languages execute many common programming
behaviours, that static programming languages perform during compilation, at
runtime. While this is leads to quick prototyping, big projects could suffer
from some consequences. In particular:

- The code is harder to read: Parameters and return types are specified in typed
  languages, they give some hints on how to call a function and what to
  expect. Bugs and inconsistencies can be spotet easier (e.g. when a "get"
  function return a list), and some IDEs display these information for a more
  convenient coding experience. All of this is missing in dynamically typed
  programming languages.
- Type related bugs do not get noticed: Calling a function with a wrong type
  (e.g. `None`) gets spotet by typed checkers. In dynamically typed programming
  languages this needs to be veryfied on every call.

While we have strong arguments for type annotations, there are some drawbacks:

- It takes more time to write code: The type annotations need to be specified
  and added, which is tedious in a big code base.
- They add little value if dicts are used heavily: The keys of dicts are not
  type checked, only the potential values. Big dictionaries thus have a lot of
  different value types, while the check if a key exists still needs to be done.

## Type Annotations in Rucio

Adding type annotations is not always trivial. Some types might be to ambigous,
some might be to generic. A good reference point is existing type annotated
_Rucio_ code. It will give hints on what types may be used and how to properly
used them in the code.

:::warning
Don't just copy the types from existing code, think about them!

Ask yourself: Is this use-case the same? Could I be more specific than just
`Any`. Could I use a class instead of a `Dict`? Should I introduce a new type
instead of using an existing one? ...
:::

### What not to type annotate

Not all Python code needs type annotations. Type annotations in the `tests`, for
example, would just add clutter and add very little benefits.

The following modules will **not** be type annotated:

- `tools`
    - The tools folder contains some Python scripts. While type annotations
      would help fixing bugs, the code itself is not shipped and will not be run
      in a production environment.
    - We could add support later, however this is not our main concern atm.
- `bin`
    - The Rucio executables don't call the core or api call directly, but rather
      use the client. We could activate it once to Python2 support is dropped.
- `lib/rucio/tests`
    - The tests are volatile and should be easy to change. Type annotations
      would just add clutter and very little benefits.
- `lib/rucio/db`
    - The db module is used as a dependency of core. While we need the types, we
      use very little functions out of it. We might activate support later,
      however we want to focus on core right now.

### Dependencies

To properly use the benefits of type annotated code, we also have to look into
our dependencies. All of our frequently used dependencies provide type
annotations out of the box or via extensions:

- _Python standard library_
    - Typehints were added in 3.5.0
- `sqlalchemy`
    - Type hints were introduced in version 2.0
    - `sqlalchemy-stubs` provide types for versions < 2.0
- `alembic`
    - Type hints are provided. Not important at the moment, since we are not
      adding type hints for the db migration.
- `flask`
    - Type hints are provided
- `six`
    - The `types-six` package provides typehints.
    - `six` might be removed from the repository in the future.
- `requests`
    - The `types-requests` package provides typehints.

Some types from our dependencies, like the _sqlalchemy_ `orm.session.Session`,
can be used directly. It is not needed to create our own equivalent then, except
if they get translated to a rucio owned type.

### GitHub Actions

A GitHub actions job ensures that newly written code contains type hints:

The `Check Python Type Annotations` job in the autotests checks, if new code
contains type annotations. It does this by comparing the number of missing
python type annotations before the changes with the number of missing python
type annotations after the changes. If the number before is less then the number
after, new code, which is not typed, was added. The script then exits with a
non-zero exit code. If it is equals or bigger, type annotations have been added
to the repository.

As of now, only the number of _missing_ type annotations will be used. The job
does not check for wrong type hints or inconsistencies. This (specifically
`mypy`) will be enabled once enough python type hints are added. For this
purpose, we will always add type annotations to functions, even when the type
can be infered.

### Best Practices

To ensure a consistent usage of type hints, you should pay attention to the
following best practices:

**Use _Python 3.6_ style type hints**

 - There are multiple ways to specify type hints in Python. We agreed to use
  the Python 3.6 style, since it's easy to read and we don't need the
  backwards-compatibility.
  - E.g. favor `def add_rse(rse: str, vo: str = 'def', ...) -> str:` over `def
  add_rse(rse, vo='def', ...): # type: (str, str, ...) -> str`
  - Don't use Python 3.6 incompatible features, this includes:
    - The [`Union type expression "(int |
      None)"`](https://docs.python.org/3/library/stdtypes.html#types-union),
      this got introduces in Pyhton 3.10
    - [`typing.TypeAlias`](https://docs.python.org/3/library/typing.html#typing.TypeAlias),
      this got introduced in Python 3.10
    - [`typing.Final`](https://docs.python.org/3/library/typing.html#typing.Final),
      introduced in Python 3.8. (Sad, since it is quite handy to let the type
      checker check for constant re-assignments. :( )
    - Paramterized Python buildin types like `list`, `dict`, `set`, ...
        - Parameterized buildin types are recognized by type checkers since
          Python version 3.9. This follows after [PEP
          585](https://peps.python.org/pep-0585/). Use the `typing` module
          instead.
        - The `__future__` module provides a [backport for parameterized buildin
          types](https://docs.python.org/3/library/__future__.html) for
          Python3.7+. This is not suitable for Python3.6
        - [`Typed
          Dicts`](https://docs.python.org/3.8/library/typing.html#typing.TypedDict),
          introduced in Python3.8

**Use _bare_ type hints over [ones with
quotes](https://peps.python.org/pep-0484/#runtime-or-type-checking) and `if
tying.TYPE_CHECKING:`**

  - Quoted type hints enable "foreward references". This enables us to not
  execute expencive code while still having type checks.
  - As long as the performance is immesurable small and not a problem, this
should be avoided, since it > [name=Joel Dierkes] Dunno about this part. Should
we use `if typing.TYPE_CHECKING:` and quoted types or avoid them?

**Be as specific as possible**

  - If the types of the keys and values of a dict are known, specify
  them. (E.g. Use `Dict[str, str]` over `Dict`).
  - If the types of all items in a list are known, specify them
    (E.g. `List[int]` over `List`)
  - ...

**Avoid `Dicts`**

  - Strongly typed structures should be prefered, since they are more
  descriptive and easier to use in the future.
  - "Was the id key in the `Dict` named `_id` or `id`?" is a question that
    should not occur.

**Avoid the `Optional` type**

  - The `Optional` type highlights that a value _might_ be `None`. As a result
  the value _has_ to be checked for `None` on every usage (`if value: `).
  - While sometimes this cannot be avoided, the `Optional` type should be used
    spearly. Most of the times a propper initialization of the variable is
    enough to get rid of it. If it makes sense that a type can be
    "non-existent", it is appropriate to use the `Option` type.

**Avoid the `Union` type**

  - The `Union` type indicates, that one of multiple different types may be
  returned. This can be confusing and resolves in the need of testing, which
  type is returned.
  - Split the function or variable, which used the `Union` type, in multiple
    ones. This resolves in more readable code and is unambiguous. This also
    follows the `A function does one, and only one thing` rule.

**Use
[`typing.NoReturn`](https://docs.python.org/3/library/typing.html#typing.NoReturn)**

  - It is used to indicate a never terminating function (e.g. `while
  True:`). Use this annotation to indicate these kind of functions.

**Use
[`typing.Iterator`](https://docs.python.org/3/library/typing.html#typing.Iterator)
over
[`typing.Generator`](https://docs.python.org/3/library/typing.html#typing.Generator)**

  - `typing.Generator[YieldType, SendType, ReturnType]` takes three Type Vars:
  The Type that gets yielded, the type that gets send back to the yield, and the
  return type of the function. If a function does only yield values, but does
  not take back values from the yield and also does not return anything with the
  `return` keyword, the type is `typing.Generator[YieldType, None, None]`. This
  is equivalent to `typing.Iterator[YieldType]`. We favor the `Iterator`
  approach over the `Generator` one because it's more understandable and easier
  to read.

### Common Types

To ensure a consistent use of type annotations in Rucio, here is a list of
common variables with their corresponding type:

| Code section | Variable | Type | Description |
| ------------ | -------- | ------------------------------ | ----------------------- |
| * | session | sqlalchemy.orm.session.Session | The sqlalchemy session. |
| DID | scope | `str` | The scope of a DID.  |
| DID | name | `str` | The name of a DID.  |
| DID | account | `str` | The account name.  |
| DID | did_type | `str` | The DID type.  |
