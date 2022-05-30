#!/usr/bin/env python3
import os
import pathlib
import re
from collections import defaultdict
from typing import Dict, List

import jinja2

MAJOR_VERSION = re.compile(r"(\d+)\.\d+\.\d+")
MINOR_VERSION = re.compile(r"\d+\.(\d+)\.\d+")
PATCH_VERSION = re.compile(r"\d+\.\d+\.(\d+)")
MAJOR_MINOR_VERSION = re.compile(r"(\d+\.\d+)\.\d+")


def map_post_version_sort_to_number(stem: str) -> int:
    """
    Maps the post version string (e.g. "post1" in "1.27.4.post1") to a
    number. This defines the sorting of the releases.
    """
    if re.match(".*rc\d+", stem):
        return 0
    if re.match(".*\.post\d+", stem):
        return 2
    return 1


def render_templates(templates_dir: str, output_path: pathlib.Path):
    def index_item(path: pathlib.Path):
        return {"stem": path.stem, "path": str(path.relative_to(output_path))}

    def index_func(path: str) -> Dict[str, List[Dict]]:
        path = output_path / path
        if not str(path).startswith(str(output_path)):
            raise ValueError("path may not escape the output path")
        if not path.exists():
            raise ValueError(f"cannot index: {path} does not exist")

        items = path.iterdir()

        mapped_items = defaultdict(list)
        for i in items:
            mapped_items[MAJOR_MINOR_VERSION.match(i.stem).group(1)].append(
                {
                    "major_version_number": int(MAJOR_VERSION.match(i.stem).group(1)),
                    "minor_version_number": int(MINOR_VERSION.match(i.stem).group(1)),
                    "patch_version_number": int(PATCH_VERSION.match(i.stem).group(1)),
                    "post_version_sort": map_post_version_sort_to_number(i.stem),
                    "stem": i.stem,
                    "path": str(i.relative_to(output_path))
                }
            )

        return mapped_items

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


if __name__ == "__main__":
    templates_dir: str = os.path.join(os.path.dirname(__file__), "templates")
    assert os.path.exists(templates_dir)
    render_templates(templates_dir, pathlib.Path(os.path.join(os.path.dirname(__file__), "../docs")).resolve())
