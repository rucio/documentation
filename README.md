# Documentation for Rucio

Welcome!

There are 2 branches in this repository:

- main: Containing the build files for Docusaurus
- gh-pages: Hosting the website available at [https://rucio.cern.ch/documentation](https://rucio.cern.ch/documentation)

## Git Hooks

The `pre-commit` python package is configured for this repository. The
pre-commit hook checks the syntax and format of the files before commiting. This
saves time in the development process, since minor errors are noticed early.

To install the package and activate the hooks for the project:

```bash
pip install pre-commit
pre-commit install
```
