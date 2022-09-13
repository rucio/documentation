# Tools for the Documentation for Rucio

This folder contains tools to maintain the health and integrity of the
Documentation for Rucio project. It also contains code to auto-generate content.

## Requirements

The tools need some external packages to run. The following packages need to be
installed:

```text
docker
python3
mdl           # markdownlint, see https://github.com/markdownlint/markdownlint
yarn
npx           # part of npm
```

Also, the python dependencies should be installed. They are defined in
`requirements.txt`. You can install them via:

```bash
$ pip install -r requirements.txt
Defaulting to user installation because normal site-packages is not writeable
...
```

## Build Documentation

The `build-documentation.sh` script builds all necessary missing content files
for the deployment of the documentation, like the Rest and Python Client
api. All parts, which need a full running Rucio instance, run in docker
container. The generated files get copied to their final destination afterwards.

```mermaid
flowchart TD
    build-documentation.sh-->generate_dynamic_files.sh
    build-documentation.sh-->rest_api_docs[Add code examples to Rest Api Docs]
    build-documentation.sh-->generate_release_notes.py
    build-documentation.sh-->generate_release_notes_index.py

    generate_dynamic_files.sh-->generate_docs.sh

    subgraph "Run in docker"
    generate_docs.sh-->generate_rest_api_docs.sh
    generate_docs.sh-->generate_bin_help_docs.sh
    generate_docs.sh-->generate_client_api_docs.sh
    end

    generate_rest_api_docs.sh-. /auto_generated/rest_api_doc_spec.yaml .->rest_api_docs
    generate_release_notes.py-. /docs/release-notes .->generate_release_notes_index.py

	rest_api_docs-->rest_api_docs_html[Generate Rest Api Docs Html]
```

## Check Repository Health

The repository has several scripts to check the health of files. These include:

```text
.
├── check-docs.sh        # Check the markdown syntax
├── check-file-names.sh  # Check the file name convention
└── link-check.json      # Check for broken external links
```

All files can be run from anywhere, they use the relative path to the
repository.

The `link-check.json` configuration file checks for broken external links. It is
used in a weekly job, which runs in the GitHub Actions.
