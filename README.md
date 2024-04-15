# Documentation for Rucio

[![Update
Documentation](https://github.com/rucio/documentation/actions/workflows/update_documentation.yml/badge.svg)](https://github.com/rucio/documentation/actions/workflows/update_documentation.yml)
[![Check external
links](https://github.com/rucio/documentation/actions/workflows/check_external_links.yaml/badge.svg)](https://github.com/rucio/documentation/actions/workflows/check_external_links.yaml)

This project contains the documentation for the [rucio](https://github.com/rucio/rucio)
project.

## Contribution

Every change or idea is welcome! For information on how to contribute to the
Rucio documentation, please refer and follow our [CONTRIBUTING](CONTRIBUTING.md)
guidelines.

## Installation

The following packages need to be installed to build the documentation:

```text
docker
python3
mdl           # markdownlint, see https://github.com/markdownlint/markdownlint
yarn
npx           # part of npm
```

The python dependencies need to be installed. They are defined in
`requirements.txt`. Install them via:

```bash
python3 -m pip install -r tools/requirements.txt
```

To run the server locally, the dependencies of the server need to be installed:

```bash
(cd website && yarn install)
```

## Usage

To build the assets, run the `build_documentation.sh` script in `tools`. The
assets need to be built in order for the server to run!

```bash
tools/build_documentation.sh
```

The script might generate multiple error messages. These are forwarded from the
build of the different components and can be ignored, as long as the process
finishes with the exit code 0.

To start the development version of the server, run:

```bash
(cd website && yarn start)
```

## Documentation Structure

There are two types of documentation hosted for Rucio. Should you wish to
contribute improvements to any of them, follow the guidelines below.

### Markdown documentation

The source for this section lives in the ``docs`` folder within the main branch
of the this GitHub repository. Improvements may be suggested by submitting an
issue or pull request to the **main** branch of the repository.  Once the
changes are approved, GitHub Actions will trigger the build process and publish
on to GitHub pages.

### API Documentation

The source for this section lives in the
[``rucio/rucio``](https://github.com/rucio/rucio/) GitHub repository. There are
two sub-categories that we document:

- [__Rest
  API__](https://github.com/rucio/rucio/tree/master/lib/rucio/web/rest/flaskapi/v1)
- [__Client API__](https://github.com/rucio/rucio/tree/master/lib/rucio/client)

Since the documentation is directly derived from the source, any change to the
documentation needs to be made in the source code.  Please submit an issue or
pull request to the [``rucio/rucio``](https://github.com/rucio/rucio/)
repository with your suggestions for contribution.  Once the changes have been
approved & pushed into the main branch, the changes will be available at
<https://rucio.cern.ch/documentation> on the next day.
