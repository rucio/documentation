# Tools for the Documentation for Rucio

This folder contains tools to maintain the health and integrity of the
Documentation for Rucio project. It also contains code to auto-generate content.

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

Following this, a Github Action calls `yarn build`, which runs docusaurus (the
tool which takes the markdown files and converts them into HTML)

### Building the Docs for the Client API
The pipeline for the creation of the rucio-docs for the client API is as
follows:

* begin process using `build_documentation.sh`
* `generate_dynamic_files.sh` spins up a docker container
* inside of the docker container, `generate_docs.sh` is called
* which in turn calls `generate_client_api_docs.sh`
* `generate_client_api_docs.sh` parses the files in `lib/rucio/client`
  and converts them using `pydoc-markdown`.
* `pydoc-markdown` uses `rucio_processor.py` and `rucio_renderer.py`
  (both in `tools/run_in_docker`, which is mounted into the docker
  container).
* "auto_generated" output markdown files' ownerships are changed
* compiling this markdown into html -> completed using docusaurus as
  part of the github action

The final stage adds styling (i.e. CSS) to the compiled markdown files.
This means that in general, a dark mode can be applied. However, some
components in the client api are formatted in pre-styled HTML tables
(within the markdown!), these styles are never overridden.

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
