#!/usr/bin/env python3
# Copyright 2021 CERN
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Authors:
# - Benedikt Ziemons <benedikt.ziemons@cern.ch>, 2021

import os
import shutil
import sys
from collections import namedtuple
from typing import List

import sh
from sh import git

RenderParams = namedtuple("RenderParams", ["title", "fh", "in_path", "out_file"])


def render_done(par: RenderParams):
    def inner(cmd, success, exit_code):
        if success:
            print(par.title, "doc was generated to", par.out_file)
        else:
            print("Error running", cmd, "\n  exit code:", exit_code)

    return inner


def print_line(par: RenderParams):
    def inner(line):
        print(line, end="", file=par.fh)

    return inner


def render(params: List[RenderParams]):
    python = sys.executable
    if not python:
        python = "python3"

    python = sh.Command(python)
    procs = []
    for par in params:
        print("Adding header for", par.title)
        print("---", file=par.fh)
        print("title:", par.title, file=par.fh)
        print("---", file=par.fh)
        print(file=par.fh)
        print("Rendering", par.title)
        procs.append(
            python(
                "-m",
                "pydoc_markdown.main",
                "-I",
                par.in_path,
                "--render-toc",
                _out=print_line(par),
                _bg=True,
                _done=render_done(par),
            )
        )

    for handle in procs:
        handle.wait(timeout=60)


def prepare_target():
    target_directory = os.environ.get("RUCIO_TARGET", default="./rucio")
    clone = True
    if os.path.exists(target_directory):
        target_override = os.environ.get("RUCIO_TARGET_OVERRIDE", default="False")
        if target_override.casefold() == str(True).casefold():
            print("Auto-removing", target_directory)
            shutil.rmtree(target_directory)
        elif target_override.casefold() != str(False).casefold():
            clone = False
        else:
            inp = input(f"Remove target directory {target_directory}? [y|N] ")
            if not inp:
                inp = "n"

            if inp.casefold()[:1] != "y".casefold():
                clone = False
            else:
                print("Removing", target_directory)
                shutil.rmtree(target_directory)

    if clone:
        rucio_repo = os.environ.get(
            "RUCIO_REPO", default="https://github.com/rucio/rucio.git"
        )
        print("Cloning", rucio_repo)
        git.clone(rucio_repo, target_directory)
    return target_directory


def main():
    target_directory = prepare_target()

    client_api_path = os.path.join(target_directory, "lib/rucio/client/")
    client_api_output_file = os.environ.get(
        "RUCIO_CLIENT_API_OUTPUT", default="docs/rucio_client_api.md"
    )
    rest_api_path = os.path.join(target_directory, "lib/rucio/web/rest/flaskapi/v1/")
    rest_api_output_file = os.environ.get(
        "RUCIO_REST_API_OUTPUT", default="docs/rucio_rest_api.md"
    )

    with open(client_api_output_file, "w") as client_api_fh, \
            open(rest_api_output_file, "w") as rest_api_fh:
        render(
            [
                RenderParams(
                    title="Rucio client API",
                    fh=client_api_fh,
                    in_path=client_api_path,
                    out_file=client_api_output_file,
                ),
                RenderParams(
                    title="Rucio REST API",
                    fh=rest_api_fh,
                    in_path=rest_api_path,
                    out_file=rest_api_output_file,
                ),
            ]
        )


if __name__ == "__main__":
    main()
