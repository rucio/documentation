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
Rucio uses a custom SQLAlchemy style. 
Each major clause or operation is given a new line, and a level of indentation is added for each operation within a part of a query.

When queries are executed, preferred output types are either scalars or single values, to avoid using an index to select an element out of a query. 

Shorter statements can be written on a single line. 

> **Note** - When using SQLAlchemy to make query data model, it is best practice to name the code executed (the `select` statement or similar) `statement` or `stmt`. The actual `query` is the result of the statement's execution. 

### Examples 
#### Simple Select 
```python 
statement = select(
  models.Table.ColumnA, 
  models.Table.ColumnB, 
)
query = session.execute(statement).scalars()
for column_a, column_b in query: 
  ...
```
#### Select with Join 
```python 
statement = select(
  models.Table1.ColumnA, 
  models.Table1.ColumnB, 
  models.Table2.Column2
).join(
  models.Table2, 
  (models.Table1.keyA == models.Table2.keyA) & (models.Table1.keyB == models.Table2.keyB) 
)
query = session.execute(statement).scalars()
for column_a, column_b, column_c in query: 
  ...
```

#### Multiple Conditions
```python 
statement = select(
  models.Table1.Column_a, 
  models.Table1.Column_b, 
  models.Table1.Column_c,
).where(
  and_(
    models.Table1.Condition1 == True,  
    models.Table1.Condition2 != None, 
    models.Table1.Condition2 < {Different Statement}
  )
)
query = session.execute(statement).scalars()
for column_a, column_b, column_c in query: 
  ...
```

#### Checking existence/Single Value
When using the query to ensure that the table has been populated, or only a single result is required, use either `session.execute().one()` or `session.execute().scalar_one()`. 

```python
statement = select(model.Table.Column).where(Condition)
try: 
  session.execute(statement).one() 
except NoResultFound as e: 
  ... # Handle the case where nothing exists 
```

```python 
statement = select(model.Table).where(Condition)
query = session.execute(statement).scalar_one()
foo(query.Column1, query.Column2)
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

