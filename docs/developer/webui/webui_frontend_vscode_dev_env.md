---
id: webui_frontend_vscode_dev_env
title: Setting up a WebUI Developer Environment using Visual Studio Code
---

## Different Usecases

There are different usecases when developing for the WebUI, this leads to
varying requirements for the development environment. This guide will cover two
usecases:

1. UI development only (i.e. using Storybook).
2. Full WebUI development, requiring the connection to a Rucio server.

In both cases, the proposed development environment is run fully local. Visual
Studio Code is more than just an editor, and we attempt to make use of its "Dev
Container"-tooling as much as possible.

## UI Only

Remember that the WebUI frontend is composed of *Components*, which are
developed with the help of a tool called [Storybook](https://storybook.js.org/).
Storybook is, in its own words, a "frontend workshop for building UI components
and pages in isolation". To us, it is a viewer which allows us to inspect
individual components and interactively manipulate the inputs to these
components. An example would be viewing a clickable button and manipulating the
"disabled" attribute, noticing that the colour changes from blue to gray, etc.
Storybook is also very helpful when testing accessibility and design.

For a developer whose only intent is to add to or edit these components (found
under `webui/src/component-library`), it is helpful to run a docker container
with NPM and TypeScript.

Open the editor commands with `Ctrl`-`Shift`-`P` and run `Dev containers: reopen
in dev container`. Select `Node.js & Typescript` in the follow-up menu. Go with
the default values in the following menus.

You can close the remote connection via the editor commands. From now on, you
can reopen the same dev container by opening the folder locally and selecting
`reopen in dev container` from the editor commands. You can also directly open
the folder in the dev container, for example using `File` > `Open Recent` and
then selecting an element such as `~/foo/bar [Dev Container]`.

It makes sense to install some extensions for a better dev experience:
* Tailwind CSS Intellisense
* ESLint
* Jest

These extensions are specific to the project at hand. Of course, extensions such
as Github Copilot and GitLens are still helpful.

An further extension that is extremely important is *Run on Save* by
emeraldwalk. This will need to be configured: enter the settings with `Ctrl`-`,`
and search `Emeraldwalk: Runonsave`. Click on `Edit in settings.json`. Add the
following configuration:

```json
"emeraldwalk.runonsave": {
    "commands": [
        {
            "match": "\\.tsx$",
            "cmd": "npm run build-tailwind"
        }
    ]
}
```
to ensure that the `build-tailwind` command will be run each time you save a
`*.tsx` file.

You can now run Storybook using `npm run storybook`.

## Connecting to a Rucio instance

When testing the full WebUI stack, it will be necessary to connect to a Rucio
backend. This can be done by running a Rucio instance locally.

We begin by starting all the Docker containers required.
1. Start the dev container as described above.
2. Clone Rucio from the [Github Repository](https://github.com/rucio/rucio)
3. Open the folder in VS Code.
4. Open the editor commands and run `Docker Compose Up` and select
  `docker-compose-storage.yml`.

:::note

Starting the docker containers using `docker-compose-storage.yml` will also
create several RSEs, DIDs, etc. on the rucio instance which are quite helpful
when running tests.

:::

We must now connect the dev container to the rucio container network.
1. Figure out the docker name of the dev container. Run `docker ps` and search
  for name which does not contain the string `rucio`
2. Connect using `docker network connect dev_default <container name>`.
   `dev_default` is the name of the network shared by the docker containers spun
   up using `docker-compose-storage.yml` from earlier.

Finally, we must change the `RUCIO_AUTH_HOST` and `RUCIO_HOST` in the
`.env.development.local` file at the root level of the WebUI repository to point
to the rucio container. By default, this should be `https://dev-rucio-1:443`.

Test the setup by logging in using the credentials username `ddmlab`/ password
`secret`/ account `root` under the VO `Default`.