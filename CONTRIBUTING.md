# Rucio Documentation contributing guide

Thank you for investing your time in contributing to our project!

In this guide you will get an overview of the contribution workflow from
creating a PR, reviewing, and merging the PR related to the rucio
documentation. If you want to contribute to the rucio project, check out
<https://www.github.com/rucio/rucio>.

## Getting started

To get an overview of the project, read the [README](README.md).

### Project Structure

There are 2 branches in this repository:

- main: Containing the build files for Docusaurus, every PR should use this
  branch as a base
- gh-pages: Hosting the website available at
  [https://rucio.cern.ch/documentation](https://rucio.cern.ch/documentation)

## Open an issue

If you find a bug or have an idea for a change, open an issue. The issue should
describe the change, as well as the intention of the change. Afterwards, the
issue gets reviewed by our team.

## Make Changes

Everyone is welcome to make changes!

The following represents the process of submitting changes to the repository:

### Upload changes

1. Fork the repository.

1. Clone the fork.

1. Create a working branch and start with your changes.

1. Commit the changes and push the branch to the fork. A commit should represent
   a coherent unit of change. There can be more than one commit per PR. Avoid
   commits with simple messages like `change` or `fix`.

1. Create a PR in the main repository from the branch. This will trigger the
   GitHub actions and run basic checks against the repository. Fix all changes
   till the Actions do not fail.

1. Follow the discussions on the PR and contribute with your own ideas, every
   idea is welcome! If there are changes required, go back to step 4.

### Git Hooks

The `pre-commit` python package is configured for this repository. The
pre-commit hook checks the syntax and format of the files before committing. This
saves time in the development process, since minor errors are noticed early.

To install the package and activate the hooks for the project run:

```bash
pip install pre-commit
pre-commit install
```
