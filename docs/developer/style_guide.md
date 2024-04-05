---
id: dev_style_guide
title: Style Guide 
---

**TL;DR**  - Install the provided pre-commits, follow their recommendations

# General Style 
Rucio follows [flake8](https://flake8.pycqa.org/en/latest/user/index.html) style, ([with exclusions listed here](https://github.com/rucio/rucio/blob/master/.flake8)). 
To use them to lint your code, run: 
```
python{version} -m pip install flake8 
flake8 --extend-ignore {codes to ignore} /your/code/path
```

## Imports
* Never import using `from x import *`
* Order alphabetically, then seperated into sections for internal and external dependencies. Group internal imports at the end of the block, and group imports from the same external package.
* Order modules such that `import {packageA}` is before `from {packageB} import {Module}`
* Do not import whole packages when single modules would suffice. 
* Unused imports must be removed. 
* When a large number of individual imports form a single package/module is required, group them together with `()` and separate them on their own lines. 
* When importing a module specifically for type checking (e.g. a core module that may not be included in every distribution of rucio, a type from SQLAlchemy), contain them in a block using 
```python
from typing import TYPE_CHECKING
if TYPE_CHECKING: 
    from {package} import {module}
```

[`ruff's isort` implementation](https://docs.astral.sh/ruff/faq/#how-does-ruffs-import-sorting-compare-to-isort) handles import sorting in the rucio `pre-commit`s. 

#### Examples: 
```python 
 # Wrong
import rucio  
from datetime import * 
import os 

 # Right
import os 
from datetime import datetime, timedelta

from rucio.core.did import add_did
```

```python 
 # Wrong
from packageA import moduleA, moduleB, moduleC, moduleD, moduleE, moduleF, moduleG, ...

 # Right
from packageA import ( 
  moduleA, 
  moduleB, 
  moduleC, 
  moduleD, 
  moduleE,
  moduleF, 
  moduleG, 
  ...
)
```

# SQLAlchemy Query Guide 

The Rucio project has adopted a particular coding style for its interaction with the database.
It can be split into two parts: constructing the SQL statement, and executing it and handling its results.

## Query construction

### Rationale

Statements involving the use of SQLAlchemy are not exactly Python code; they are SQL masquerading as Python code.
Hence, there are benefits to adopting a style that can be considered somewhat un-Pythonic:

 1. It is visually distinct from regular Python code.
    Thus, it stands out and assists the developer in entering an ‘SQL context’.
 2. It is closer to how one would format actual long SQL statements.

Of course, there are some downsides to this approach.
The use of a code formatter is rendered almost impossible, thus requiring manual effort during development.
However, code is written once but read many times.
As such, we believe that the benefits outweigh the downsides.

### Variable Assignment

SQL statements should be assigned to a variable, then executed separately.
The name `stmt` is a common choice.

```python
# Wrong
rses = session.execute(select(models.RSE)).scalars().all()

# Right
stmt = select(
    models.RSE
)
rses = session.execute(stmt).scalars().all()
```

### SQLAlchemy Syntax

All new code should use the more recent SQLAlchemy 2.0 syntax.
Existing code using the older 1.4 syntax should be migrated to the 2.0 syntax.

```python
# Wrong
rses = (session.query(models.RSE)
               .all())

# Right
stmt = select(
    models.RSE
)
rses = session.execute(stmt).scalars().all()
```

### Whitespace

The functions that return basic SQL constructs (e.g. `select()`, `update()`, and `delete()`) should have a newline after the opening parenthesis and before the closing parenthesis.
Same applies to all methods of those constructs (e.g. `distinct()`, `join()`, and `where()`).
The latter should be ordered in a way that matches the syntax of SQL, when permittable.
Inside the parentheses, each argument should be indented and put on a separate line.

```python
# Wrong
stmt = (
    select(models.RSEAttrAssociation.value)
    .where(models.RSEAttrAssociation.key == 'fts')
    .distinct()
)

# Right
stmt = select(
    models.RSEAttrAssociation.value
).distinct(
).where(
    models.RSEAttrAssociation.key == 'fts'
)
```

### Discouraged Logical Operators

The functions `and_()` and `or_()` should be used instead of Python’s bitwise operators `&` and `|`.

```python
# Wrong
stmt = select(
    models.Request,
    models.DataIdentifier
).join(
    models.DataIdentifier,
    (models.Request.scope == models.DataIdentifier.scope) & (models.Request.name == models.DataIdentifier.name)
)

# Right
stmt = select(
    models.Request,
    models.DataIdentifier
).join(
    models.DataIdentifier,
    and_(models.DataIdentifier.scope == models.DataIdentifier.scope,
         models.DataIdentifier.name == models.DataIdentifier.name)
)
```

### Python Keywords

The functions `true()`, `false()`, and `null()` should be used instead of Python’s own keywords.

```python
# Wrong
stmt = select(
    models.RSE
).where(
    models.RSE.deleted == False
)

# Right
stmt = select(
    models.RSE
).where(
    models.RSE.deleted == false()
)
```

### UPDATE statements

The `values()` method should be used with a dictionary as its sole argument.
The keys should be entities from the models.
The opening and closing braces of the dictionary should be paired with the parentheses of `values()`.

```python
# Wrong
stmt = update(
    models.Account
).where(
    models.Account == InternalAccount('user')
).values(
    status=AccountStatus.DELETED,
    deleted_at=datetime.now()
)

# Wrong
stmt = update(
    models.Account
).where(
    models.Account == InternalAccount('user')
).values(
    {
        'status': AccountStatus.DELETED,
        'deleted_at': datetime.now()
    }
)

# Right
stmt = update(
    models.Account
).where(
    models.Account == InternalAccount('user')
).values({
    models.Account.status: AccountStatus.DELETED,
    models.Account.deleted_at: datetime.now()
})
```

# Pre-commits 
Rucio uses the [`flake8`](https://github.com/PyCQA/flake8) precommit as a linter, [`ruff`](https://github.com/astral-sh/ruff-pre-commit) as a formatter, 
a custom whitespace remover, and a script to verify a uniform file-header format. 
Please use these before submitting a pull request. 

The Rucio repo provides a `pre-commit` that does this automatically. 
Install it with the below commands. 

```shell
pip install pre-commit
pre-commit install
```

# GitHub Actions 
Code style is checked during a pull request with a GitHub action. 
The action checks the header and type annotations (including a count and veracity). 
More information about type annotations can be found [here](./type_annotation_guide.md). 
These checks can also be run locally using

```shell 
tools/count_missing_type_annotations_utils.sh 
tools/run_pyright.sh generate {report_output_path.json}
```
The first action will raise an error if your commits introduce more un-annotated types than it solves, 
and the second ensures the added types are consistent with the rest of the codebase. 

