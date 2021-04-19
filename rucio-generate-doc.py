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

import json
import os
import pathlib
import shutil
import sys

import jinja2
import sh
from sh import git, docker


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
        rucio_branch = os.environ.get("RUCIO_BRANCH", default="")
        if rucio_branch:
            rucio_branch = ("--branch", rucio_branch)
        else:
            rucio_branch = ()

        print("Cloning", *rucio_branch, rucio_repo)
        git.clone(
            *rucio_branch,
            rucio_repo,
            target_directory,
            _in=sys.stdin,
            _out=sys.stdout,
            _err=sys.stderr,
        )
    return target_directory


def render_templates(templates_dir: str, output_path: pathlib.Path):
    def index_item(path: pathlib.Path):
        return {"stem": path.stem, "path": str(path.relative_to(output_path))}

    def index_func(path: str):
        path = output_path / path
        if not str(path).startswith(str(output_path)):
            raise ValueError("path may not escape the output path")
        if not path.exists():
            raise ValueError(f"cannot index: {path} does not exist")
        yield from map(index_item, path.iterdir())

    jinja_env = jinja2.Environment(
        loader=jinja2.FileSystemLoader(templates_dir)
    )
    jinja_env.globals["index"] = index_func
    for tpl in pathlib.Path(templates_dir).iterdir():
        # render all templates with .md as the first suffix and only non-hidden files
        if tpl.suffixes[0] == ".md" and not tpl.name.startswith("."):
            jinja_template = jinja_env.get_template(str(tpl.relative_to(templates_dir)))
            tpl_out_path = output_path / tpl.name[:tpl.name.find(".md")+3]
            tpl_out_path.write_text(jinja_template.render())


def main():
    target_directory = prepare_target()
    output_path = pathlib.Path('./docs').resolve()
    test_matrix = [
        {
            "DIST": "centos7",
            "PYTHON": "3.6",
            "IMAGE_IDENTIFIER": "autotest",
            "SUITE": "docs",
            "RUN_HTTPD": False,
        }
    ]
    build_images = sh.Command(f"{target_directory}/tools/test/build_images.py")
    build_out = build_images(
        "-o",
        "list",
        f"etc/docker/test",
        _cwd=target_directory,
        _in=json.dumps(test_matrix),
        _err=sys.stderr,
    )
    image_list = json.loads(build_out.stdout)
    assert len(image_list) == 1, "should have returned exactly one image"
    docker.run(
        "--volume",
        f"{output_path}:/opt/rucio/docs:Z",
        "--env",
        "SUITE=docs",
        "--env",
        "RUCIO_HOME=/usr/local/src/rucio",
        image_list[0],
        "sh",
        "-c",
        "tools/test/install_script.sh && tools/generate_doc.py",
        _in=sys.stdin,
        _out=sys.stdout,
        _err=sys.stderr,
    )

    # assert generated doc
    assert os.path.exists("docs/rucio_client_api.md")
    assert os.path.exists("docs/rucio_rest_api.md")
    assert os.path.exists("docs/bin/")

    # render templates
    templates_dir: str = os.path.join(os.path.dirname(__file__), "templates")
    assert os.path.exists(templates_dir)
    render_templates(templates_dir, output_path)


if __name__ == "__main__":
    main()
