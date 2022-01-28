---
id: contributing
title: Contributing Guide
sidebar_label: Contributing Guide
---

* Thank you for participating!


* Please ensure that an [__issue__](https://github.com/rucio/rucio/issues/new) exists before submitting your contribution as a pull request.


* The issue should contain the motivation, modification and expected results (discussions usually happen there).


* No pull request will be merged without an associated issue (release notes are generated from issues).


* Ensure you add your name (and organisation) to our [__list of contributors__](about-our-contributors).


* If you have questions, you can reach the core development team on our [__Slack__](https://rucio.slack.com/) channel, or send an email to our development mailing list [__rucio-dev@cern.ch__](mailto:rucio-dev@cern.ch).

A contribution can be either be a **patch** or **feature**:

    
    * **Patches** include bugfixes and minor changes to the code and are included in patch releases usually made on a bi-weekly schedule.


    * **Features** include major developments or potentially disruptive changes and are included in feature releases made multiple times a year.


The [__repository__](https://github.com/rucio/rucio/)  consists of different branches:

    
    * the **master** branch includes the development for the next major version.


    * the **release-…** branches include the patch/minor development of the releases.


On release day both master and the related release branch are essentially the same. Release branches only exist for the currently maintained release versions. Hotfix branches are created on demand. Please communicate to the Rucio maintainers, if you wish to hotfix a previous release.

Generally all [__pull requests__](https://github.com/rucio/rucio/pulls) are to be created against the Rucio **master** branch. Features will end up in the upstream **master** only and patches are cherry-picked to the maintained releases if applicable. Release-specific changes are excluded from that rule and might be needed if e.g. cherry-picking to the last release was not successful.

The following figure might help you with an overview:

![Branching Strategy Graph](/img/branching_strategy.svg)


## Getting started

**Step 1**: Fork the [__repository__](https://github.com/rucio/rucio/) on Github.

**Step 2**: Clone the repository to your development machine and configure it:

```bash
$ git clone https://github.com/<YOUR_USER>/rucio/
$ cd rucio
$ git remote add upstream https://github.com/rucio/rucio.git
```

## Git Hooks

The `prepare-commit-msg` hook can be installed by executing the script:

```bash
./tools/configure_git.sh
```

Also, the [`pre-commit` python](https://pre-commit.com/) package is configured
for this repository. The `pre-commit` hook checks the syntax and format of the
files before commiting. This saves time in the development process, since minor
errors are noticed early.

To install the package and activate the hooks for the project:

```bash
pip install pre-commit
pre-commit install
```

## Contributing

**Step 1**: If not exist, create an [__issue__](https://github.com/rucio/rucio/issues/new) with the description of the contribution (motivation, modification and expected results). Every issue will get a **unique issue number**.

**Step 2**: Create a local branch that corresponds to the issue. To easily identify the purpose of branches different keywords must be used:


* Patch branches must be named **patch-[issue number]-[short description]**


* Feature branches must be named **feature-[issue number]-[short description]**


If you create these branches by hand please check the spelling because otherwise the test automation might misidentify your branch. There are utility scripts to fetch master and create these branches for you:

```bash
$ ./tools/create-patch-branch <unique issue number> '<short_change_message>'
$ ./tools/create-feature-branch <unique issue number> '<short_change_message>'
```

**Step 3**: Commit your change. The commit command must include a specific message format:

```bash
$ git commit -m "<component>: <change_message> #<issue number>"
```

Valid component names are listed in the [__label list__](https://github.com/rucio/rucio/labels) and are usually specified on the issue of the change.

If you use the default commit message template, make sure you edit it.

If you add a [__github-recognised keyword__](https://help.github.com/articles/closing-issues-using-keywords/) then the associated issue can be closed automatically once the pull request is merged, e.g.:

```bash
<component>: <change_message> Fix #<issue number>
```

**Step 4**: Push the commit to your forked repository and create the pull request.

While using the [__github interface__](https://help.github.com/articles/creating-a-pull-request/) is the default interface to create pull requests, you could also use GitHub’s command-line wrapper [__hub__](https://hub.github.com) or the [__GitHub CLI__](https://cli.github.com/).

The format of the pull request title must be:

```bash
<component>: <short_change_message> #<issue number>
```

**Step 5**: Watch the pull request for comments and reviews. For any pull requests update, please try to squash/amend your commits to avoid “in-between” commits.

## Automatic Testing

Every submitted pull request will automatically be run through automated testing through continuous integration. You should see the status of these tests on your pull request.

**Local automatic testing**

There is also a local shell script to run the same autotests: `tools/run_autotests.sh`. For manual local testing within containers, please see [__the docker README__](https://github.com/rucio/rucio/blob/master/etc/docker/dev/README.rst).

**WARNING:** Because of the nature of using the same scripts as continuous integration, some containers may be left running after a test run or when aborting the test run. This is especially the case for running this script without podman.

By default the tool uses 3 worker processes to run all tests that are defined in `etc/docker/test/matrix.yml`. Feel free to modify the matrix to your needs, but be sure to not unintentionally commit your changes to it. The tests run at most 6 hours - after that a TimeoutError will be raised, causing the script to fail. Running the autotests like this can be parameterized with environment variables as follows:


* `USE_PODMAN` 0/1 (default: depends on whether the docker command points to podman)

    Use podman and therefore pods to run the tests.


* `PARALLEL_AUTOTESTS` 0/1 (default: 1)

    1 enables multiple processes to run autotests and 0 disables it.
    When enabled, logs of the running autotests will be written to the `.autotest` directory created in the working directory. Otherwise the log output will be written to the console (stderr).

    *Note that when tests are not running in parallel mode, the test run will always fail fast.*


* `PARALLEL_AUTOTESTS_PROCNUM` (1,) (default: 3)

    Specifies the number of processes to run and therefor the concurrently run autotests. 3 will usually result in more than 8 GB RAM usage and a fair amount of load on the PC.


* `PARALLEL_AUTOTESTS_FAILFAST` 0/1 (default: 0)

    Will abort the parallel run of autotests as soon as possible after at least one autotest failed. Enabling this will leave containers running in case of a failure even on podman.


* `COPY_AUTOTEST_LOGS` 0/1 (default: 0)

    Copies `/var/log` from the rucio container into the `.autotest` directory after the test run. Each test case will have it’s specific naming as with the logs from the parallel run above.

## Human Review

Anyone is welcome to review merge requests and make comments!

The Rucio development team can approve, request changes, or close pull requests. Merging of approved pull requests is done by the Rucio development lead.

## Coding Style

We use flake8 and pylint to sanitize our code. Please do the same before submitting a pull request.
