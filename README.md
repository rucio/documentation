# Documentation for Rucio

[![Update
Documentation](https://github.com/rucio/documentation/actions/workflows/update_documentation.yml/badge.svg)](https://github.com/rucio/documentation/actions/workflows/update_documentation.yml)
[![Check external
links](https://github.com/rucio/documentation/actions/workflows/check_external_links.yaml/badge.svg)](https://github.com/rucio/documentation/actions/workflows/check_external_links.yaml)

This project contains the documentation for the **[Rucio](https://github.com/rucio/rucio)** data-management
software.


## Contribution

Every change or idea is welcome! For information on how to contribute to the
Rucio documentation, please refer and follow our [CONTRIBUTING](CONTRIBUTING.md)
guidelines.


## Installation (prerequisites on the *host*)

The following packages need to be installed to build the documentation:

* docker
* python3
* mdl ([markdownlint](https://github.com/markdownlint/markdownlint))
* yarn
* npx (part of npm)

The python dependencies need to be installed. They are defined in
`requirements.txt`. Install them via:

```bash
python3 -m pip install --requirement tools/requirements.txt
```

For running the Docusaurus development server, you also need the website
dependencies:

```bash
(cd website && yarn install)
```


## Usage – building the documentation

To build the assets, run the `build_documentation.sh` script in `tools`. The
assets need to be built in order for the server to run!

The script supports **two** workflows:

```
A) Default              → tools/build_documentation.sh
                          On first run, it clones rucio/rucio.
                          On later runs, it re-uses any existing Rucio source tree.

B) Use a local Rucio    → tools/build_documentation.sh `-r` / `--rucio-path` <dir>
                          The given directory is bind-mounted read-only into the Docker container.
                          Any changes there are persistent and picked up directly.
```

### Ignoring non-fatal error output

Some building tools may emit warnings on *stderr* even when the build succeeds.
As long as the script ends with exit-code 0 the build is considered **ok**.


## Running the local docs website

After a successful build:

```bash
(cd website && yarn start)
```

then open the printed URL (usually <http://localhost:3000>).


## Documentation Structure

There are two types of documentation hosted for Rucio. Should you wish to
contribute improvements to any of them, follow the guidelines below.

### Markdown documentation

The source for this section lives in the ``docs`` folder within the main branch
of this GitHub repository. Improvements may be suggested by submitting an
issue or pull request to the **main** branch of the repository.  Once the
changes are approved, GitHub Actions will trigger the build process and publish
on to GitHub pages.

### API Documentation

The source for this section lives in the
[``rucio/rucio``](https://github.com/rucio/rucio/) GitHub repository. There are
two subcategories that we document:

- [__Rest
  API__](https://github.com/rucio/rucio/tree/master/lib/rucio/web/rest/flaskapi/v1)
- [__Client API__](https://github.com/rucio/rucio/tree/master/lib/rucio/client)

Since the documentation is directly derived from the source, any change to the
documentation needs to be made in the source code.  Please submit an issue or
pull request to the [``rucio/rucio``](https://github.com/rucio/rucio/)
repository with your suggestions for contribution.  Once the changes have been
approved and pushed into the main branch, the changes will be available at
<https://rucio.cern.ch/documentation> on the next day.
