---
id: contributing-improvements
title: Contributing Improvements
sidebar_label: Contributing Improvements
---

There are two types of documentation hosted on Rucio as detailed
in the [__Types of Pages__](page-types) section. Should you wish to
contribute improvements to any of them, kindly follow the
guidelines below per the section.

## API Documentation

The source for this section lives in the
[``rucio/rucio``](https://github.com/rucio/rucio/) GitHub repository. Below are
the two sub-categories that we maintain documentation for:

- [__Rest API__](https://github.com/rucio/rucio/tree/master/lib/rucio/web/rest/flaskapi/v1)
- [__Client API__](https://github.com/rucio/rucio/tree/master/lib/rucio/client)

Since the documentation is directly derived from the source, any change to the
documentation needs to be made in the Source code.  Please submit an issue or
pull request to the [``rucio/rucio``](https://github.com/rucio/rucio/)
repository with your suggestions for contribution.  Once the changes have been
approved & pushed into the main branch, the changes will be available at
<https://rucio.cern.ch/documentation> on the next day.

## Markdown documentation

The source for this section lives in the ``docs`` folder within the main branch
of the [``rucio/documentation``](https://github.com/rucio/documentation) GitHub
repository. Improvements may be suggested by submitting an issue or pull request
to the **main** branch of the repository.  Once the changes are approved, GitHub
Actions will trigger the build process and publish on to GitHub pages.
