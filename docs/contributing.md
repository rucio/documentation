---
id: contributing
title: Contributing Guide
sidebar_label: Contributing Guide
---

## Thank you for participating

The following is a set of rules for contributing to **Rucio** and its
packages. Use your best judgment, and feel free to propose changes to this
document.

If you have questions, you can reach the core development team on our
[__Mattermost__](mattermost.md) channel, or send an email to our
development mailing list [__rucio-dev@cern.ch__](mailto:rucio-dev@cern.ch).

## What should I know before I get started

A contribution can be either be a **patch** or **feature**:

* **Patches** include bugfixes and minor changes to the code and are included in
  patches that are usually released every two weeks.
* **Features** include major developments or potentially disruptive changes and
  are included in feature releases made multiple times a year.

The [__repository__](https://github.com/rucio/rucio/) consists of different
branches:

* the **master** branch includes the development for the next major version.
* the **release-…** branches include the patch/minor development of the
  releases.

Release branches only exist for the currently maintained release
versions. Hotfix branches are created on demand. Please communicate to the Rucio
maintainers, if you wish to hotfix a previous release.

Generally all [__pull requests__](https://github.com/rucio/rucio/pulls) are to
be created against the Rucio **master** branch. Features will end up in the
upstream **master** only and patches are cherry-picked to the maintained
releases if applicable. Release-specific changes are excluded from that rule and
might be needed if e.g. cherry-picking to the last release was not successful.

The following figure might help you with an overview:

![Branching Strategy Graph](/img/branching_strategy.svg)

## How can I Contribute

### 1. Prerequisite

* Ensure you add your name (and organisation) to our list of [__contributors__](about_our_contributors.md).

* Fork the [__repository__](https://github.com/rucio/rucio/) on
  Github.

* Clone the repository to your development machine and configure it:

  ```bash
  git clone https://github.com/<YOUR_USER>/rucio/
  cd rucio
  git remote add upstream https://github.com/rucio/rucio.git
  ```

* **Optional: Install Git Hooks**

  The `prepare-commit-msg` hook can be installed by executing the script:

  ```bash
  ./tools/configure_git.sh
  ```

  Also, the [`pre-commit` python](https://pre-commit.com/) package is configured
  for this repository. The `pre-commit` hook checks the syntax and format of the
  files before committing. This saves time in the development process, since
  minor errors are noticed before submission.

  To install the package and activate the hooks for the project:

  ```bash
  pip install pre-commit
  pre-commit install
  ```

  If you only want to run the hooks on a push, run:

  ```bash
  pre-commit install --hook-type pre-push
  ```

  More information [please view the pre-commit documentation](https://pre-commit.com/#confining-hooks-to-run-at-certain-stages)

### 2. Create an Issue

Please ensure that an [__issue__](https://github.com/rucio/rucio/issues/new)
exists before submitting your contribution as a pull request. The issue should
contain the motivation, modification and expected results (discussions usually
happen there). No pull request will be merged without an associated issue
(release notes are generated from issues). Each issue gets a **unique issue
number**.

### 3. Create a local working branch

Create a local branch that corresponds to the issue. To easily
identify the purpose of branches different keywords must be used:

* Patch branches must be named **patch-[issue number]-[short description]**
* Feature branches must be named **feature-[issue number]-[short description]**

If you create these branches by hand please check the spelling because otherwise
the test automation might misidentify your branch. There are utility scripts to
fetch master and create these branches for you:

```bash
./tools/create-patch-branch <unique issue number> '<short_change_message>'
./tools/create-feature-branch <unique issue number> '<short_change_message>'
```

### 4. Commit your changes

Commit your changes using the Conventional Commits format. All commits must follow the format described in the [Conventional Commits](#conventional-commits) section below and include proper git trailers for issue tracking.

**Basic commit format:**
```bash
git commit -m "<type>(<scope>): <description>" --trailer "Closes: #<issue_number>"
```

**Example:**
```bash
git commit -m "feat(Core): Add new rule evaluation engine" --trailer "Closes: #1234"
```

Add additional explanations to the body of the commit, such as motivation for
certain decisions and background information. [Here are some general rules.](https://cbea.ms/git-commit/).

Using multiple commits is allowed as long as they achieve an independent,
well-defined, change and are well-described. Otherwise multiple commits should
be squashed.

#### **Conventional Commits**

Rucio enforces the [Conventional Commits](https://www.conventionalcommits.org/) specification to ensure consistent and meaningful commit messages across the project. This is enforced through [commitlint](https://commitlint.js.org/) during CI checks and can be enabled locally via pre-commit hooks.

**Commit Message Format:**
```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

**Rules:**

1. **Type**: Must be one of the following allowed types:
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation only changes
   - `style`: Changes that do not affect the meaning of the code
   - `refactor`: Code change that neither fixes a bug nor adds a feature
   - `test`: Adding missing tests or correcting existing tests
   - `ci`: Changes to CI configuration files and scripts
   - `revert`: Reverts a previous commit

2. **Scope**: Must be one of the predefined Rucio components (PascalCase). The available scopes are:
   - `Auth`: Authentication & Authorisation
   - `Clients`: Client libraries and tools
   - `Consistency`: Consistency checks
   - `CI`: Continous Integration
   - `Core`: Core & Internals
   - `Database`: Database-related changes
   - `DatasetDeletion`: Dataset deletion functionality
   - `Deletion`: File deletion functionality
   - `DIRAC`: DIRAC integration
   - `Docker`: Docker related functionality
   - `Documentation`: Documentation updates
   - `Kubernetes`:  Kubernetes deployment related functionality
   - `Lifetime`: Life time model processing
   - `Messaging`: Messaging system
   - `Metadata`: Metadata workflows
   - `Monitoring`: Monitoring and observability
   - `MultiVO`: Multi-VO functionality
   - `Opendata`: Open data functionality
   - `Policies`: Policy management
   - `Probes`: Probes & Alarms
   - `Protocols`: Upload, Download, Deletion protocols
   - `Rebalancing`: Data rebalancing
   - `Recovery`: Data recovery
   - `Replicas`: Replica workflows
   - `REST`: REST & API
   - `Rules`: Replication rules and rule daemons
   - `Subscriptions`: Subscription daemon
   - `Testing`: Regression and Unit tests
   - `Traces`: Monitoring & Traces
   - `Transfers`: Transfer daemons
   - `WebUI`: Web user interface

   **Note**: Any changes to this list should also be applied to the [GitHub labels](https://github.com/rucio/rucio/issues/labels) and the [commitlint config](https://github.com/rucio/rucio/blob/master/commitlint.config.js)

3. **Description**: 
   - Should not end with a period
   - Should be concise but descriptive
   - Use imperative mood ("add feature" not "added feature")

4. **Line Length**: Header must not exceed 100 characters to prevent truncation in GitHub UI

**Examples:**
```bash
feat(Transfers): Group bulk transfers by authentication method
fix(Core): Fix exception when attaching nonexistent DID to container
docs(Documentation): Update API endpoint descriptions
style(Transfers): Touch up comments
refactor(Transfers): Simplify group key construction
```

**Choosing the Right Type:**

Sometimes it's unclear which type to use. Consider the **intent** and **impact** of your change:

| Ambiguity | Choose | When |
|-----------|--------|------|
| `style` vs `refactor` | `style` | Formatting, whitespace, comment tweaks |
| `style` vs `refactor` | `refactor` | Modernizing syntax, restructuring code |
| `fix` vs `refactor` | `fix` | Correcting incorrect behavior |
| `fix` vs `refactor` | `refactor` | Improving code without fixing a bug |
| `docs` vs `style` | `docs` | Updating documentation files or docstrings |
| `docs` vs `style` | `style` | Minor comment formatting within code |
| `test` vs `fix` | `fix` | Fixing flaky test due to race condition |
| `test` vs `fix` | `test` | Adding new test cases or correcting test logic |

**Examples:**

| Scenario | Preferred | Rationale |
|----------|-----------|-----------|
| Replacing `Union[X, None]` with `Optional[X]` across 60+ files | `refactor(Core): Remove deprecated constructs from the typing module` | Modernizes codebase to newer Python conventions |
| Adding type hints to function signatures | `style(Core): Add type hints to transfer functions` | Improves code documentation without changing behavior |
| Fixing a test that fails intermittently due to timing | `fix(Testing): Resolve judge evaluator test flakiness` | Corrects broken behavior in test suite |
| Adding new test cases for edge cases | `test(Testing): Add tests for attaching nonexistent DIDs` | Extends test coverage |
| Updating README with new installation steps | `docs(Documentation): Update installation instructions` | Documentation-only change |
| Fixing typos in code comments | `style(Core): Fix typos in transfer module comments` | Minor stylistic improvement |

#### **Breaking Changes**

Commits that introduce breaking API or behavioral changes must use `!` after the type/scope in the header and include a corresponding `BREAKING CHANGE` footer.

**Format:**
```
<type>(<scope>)!: <description>

[optional body]

BREAKING CHANGE: <description of the breaking change and its impact>
```

**Requirement:** A breaking change commit must include **both** the `!` marker in the header (e.g., `feat(Core)!: ...`) **and** a `BREAKING CHANGE` footer with a description explaining the impact.

**Example:**
```bash
refactor(Core)!: Make session a mandatory keyword-only argument

BREAKING CHANGE: The session argument is now mandatory and keyword-only
for all core functions. Callers must explicitly pass session=<session>
instead of relying on positional arguments or default values.

Closes: #5947
```

#### **Git Trailers**

All commits must reference a GitHub issue using git trailers. This ensures proper traceability and automatic issue closure.

**Supported Trailers:**
- `Closes: #<issue_number>` - Automatically closes the issue when PR is merged
- `Issue: #<issue_number>` - References an issue without closing it

**Adding Git Trailers:**

**Method 1: Using git commit command**
```bash
git commit -m "feat(Core): Add new rule evaluation engine" --trailer "Closes: #1234"
```

**Method 2: Adding to commit body**
```bash
git commit -m "feat(Core): Add new rule evaluation engine

This commit introduces a new rule evaluation engine that improves
performance and adds support for complex rule conditions.

Closes: #1234"
```

**Complete Example:**
```bash
feat(Core): Add new rule evaluation engine

This commit introduces a new rule evaluation engine that improves
performance and adds support for complex rule conditions.

Closes: #1234
```

### 5. Push changes and create a Pull Request

Push the commit to your forked repository and create the pull request. Try to
keep the Pull Request simple, it should achieve the single objective described
in the issue. Multiple enhancements/fixes should be split into multiple Pull
Requests.

While using the [__github
interface__](https://help.github.com/articles/creating-a-pull-request/) is the
default interface to create pull requests, you could also use GitHub’s
command-line wrapper [__hub__](https://hub.github.com) or the [__GitHub
CLI__](https://cli.github.com/).

The format of the pull request title must be:

```bash
<component>: <short_change_message> #<issue number>
```

### 6. Watch the Pull Request for reviews

Watch the pull request for comments and reviews. For any pull requests update,
please try to squash/amend your commits to avoid “in-between” commits.

## Automatic Testing

Every submitted pull request will automatically be run through automated testing
through continuous integration.
This testing includes multiple [suites of testing](https://github.com/rucio/rucio/tree/master/.github/workflows),
all of which are required to pass.
Please enable testing on your fork of the main repository to see the status of your tests as you develop.


###  Writing Tests
For every feature added, there should be a set of corresponding tests that verify
its functionality and integration with the rest of the codebase.

* Use fixtures (found in the tests/conftest.py) or temporary object factories
(tests/temp_factories.py) instead of making bare instances of rucio objects.
* Only write tests deterministically.
 Randomness produces [flaky tests](https://docs.pytest.org/en/7.1.x/explanation/flaky.html).
* Only write tests that are "stand alone" -
tests should be entirely self-contained besides for the before-mentioned fixtures and factories.
* If a test requires a configuration file changed,
[use a fixture to modify a mock-configuration file.](https://github.com/rucio/rucio/blob/master/tests/conftest.py#L510)
* If a test can interfere with another test
(use the same database table, interact with a queue), mark it as `noparallel`.
* If a test is specific to a VO, mark it as such using a [`skip_non_{vo}`](https://github.com/rucio/rucio/blob/master/lib/rucio/tests/common.py) fixture,
or mark it as `skip_multivo` if the test only is intended to work in single-vo settings.

### Local automatic testing

There is also a local shell script to run the same autotests:
`tools/run_autotests.sh`. For manual local testing within containers, please see
[__the docker
README__](https://github.com/rucio/rucio/blob/master/etc/docker/dev/README.rst).

**WARNING:** Because of the nature of using the same scripts as continuous
integration, some containers may be left running after a test run or when
aborting the test run. This is especially the case for running this script
without podman.

By default the tool uses 3 worker processes to run all tests that are defined in
`etc/docker/test/matrix.yml`. Feel free to modify the matrix to your needs, but
be sure to not unintentionally commit your changes to it. The tests run at most
6 hours - after that a TimeoutError will be raised, causing the script to
fail. Running the autotests like this can be parameterized with environment
variables as follows:

* `USE_PODMAN` 0/1 (default: depends on whether the docker command points to
  podman)

    Use podman and therefore pods to run the tests.

* `PARALLEL_AUTOTESTS` 0/1 (default: 1)

    1 enables multiple processes to run autotests and 0 disables it.  When
    enabled, logs of the running autotests will be written to the `.autotest`
    directory created in the working directory. Otherwise the log output will be
    written to the console (stderr).

    *Note that when tests are not running in parallel mode, the test run will
    always fail fast.*

* `PARALLEL_AUTOTESTS_PROCNUM` (1,) (default: 3)

    Specifies the number of processes to run and therefore the concurrently run
    autotests. 3 will usually result in more than 8 GB RAM usage and a fair
    amount of load on the PC.

* `PARALLEL_AUTOTESTS_FAILFAST` 0/1 (default: 0)

    Will abort the parallel run of autotests as soon as possible after at least
    one autotest failed. Enabling this will leave containers running in case of
    a failure even on podman.

* `COPY_AUTOTEST_LOGS` 0/1 (default: 0)

    Copies `/var/log` from the rucio container into the `.autotest` directory
    after the test run. Each test case will have it’s specific naming as with
    the logs from the parallel run above.

## Human Review

Anyone is welcome to review merge requests and make comments!

The Rucio development team can approve, request changes, or close pull
requests. Merging of approved pull requests is done by the Rucio development
lead.

## Coding Style

We use flake8 and pylint to sanitize our code. Please do the same before
submitting a pull request.

[A more indepth set of coding style guidelines can be found here.](./developer/style_guide.md)
