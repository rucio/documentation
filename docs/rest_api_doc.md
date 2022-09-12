---
title: Rest Api Documentation
---
Rucio provides a Rest Api interface for client-server communication. The code
for the server is located in the Rucio project under `lib/rucio/rest/flask/v1`.

The Rest Api Documentation provides a sufficient documentation of all endpoints
and should be descriptive enough so that it is not required to look at the code
anymore.

## Tools

The main framework for the Rest Api Documentation is **OpenApi**. ApiSpec
extracts the OpenApi specification conform method documentation strings from the
Flask Api and constructs the overall OpenApi specification file. This
specification file contains all endpoints and their parameter and return value
documentation.

### ApiSpec

`ApiSpec` is a python framework to extract Python doc comments and generate a
valid OpenApi spec file from it. The documentation for each endpoint is a
yaml-conform python method doc string starting after `---`. The
`apispec_webframeworks.flask` library connects the Python doc comments with the
endpoints given by Flask.

`tools/generate_rest_api_doc.py` generates the OpenApi specification file with
ApiSpec.

:::note

The latest OpenApi specification for the Rest Api Documentation is available
[here](pathname:///yaml/rest_api_doc_spec.yaml).

:::

### ReDoc

ReDoc creates a static html front-end for a given specification file. ReDoc has
several advantages over other front-end tools:

- It is fast.
- The generated output is a static file, thus no "hosting" is needed.
- The generated file is structured, easy to read, contains a search field, and
  the possibility to display examples.

:::note

Front-end generators only need the spec file and some configuration to generate
a user friendly view of the documentation. Select a generator from the [OpenApi
Tools](https://openapi.tools/#documentation) and generate your own front-end.

:::

To generate the ReDoc html file run

```bash
npm install -g redoc-cli
redoc-cli build rest_api_doc_spec_file.yaml --output rest_api_doc.html
```

### @redocly/openapi-cli

The `openapi-cli` verifies the integrity of the generated spec file. Common
problems, e.g. typos in keywords and duplicated path specifications, get
filtered and produces an error, if found.

`openapi-cli` is integrated in the Github Actions, they run in the `syntax` test
suite. To manually check the generated spec file, run

```bash
rucio/tools/test/check_rest_api_documentation.sh FILE
```

## Tips

### Build/verify often

Syntax errors are not easy to spot and appear often. To efficiently add new
documentation or edit multiple old ones, gradually apply your changes and
build/verify the spec file (both steps take not more than a few seconds). This
way any error gets caught in the development cycle, not at the end.

### Commit the doc and code changes together

The doc changes are tightly coupled with the code. Making a lot of changes to
the code and then one commit with all the documentation changes leads to a
divergent history (What if the code commits get reverted?).

### Skim the [OpenApi](https://swagger.io/specification/) definition

OpenApi is feature rich and may have some easier/standardized way to express
what you think. E.g. deprecated fields can be marked with `deprecated: true`.
Knowing the framework and library you're working with is always a good idea. ;-)

### [OpenApi Tools](https://openapi.tools/)

The OpenApi Tools are a collection of tools to support writing, verifying and
displaying Rest Api Documentations. They also provide some ideas on how to
further integrate the documentation into other parts of your code base, e.g. for
input validation.
