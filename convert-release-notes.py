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

import re
import pathlib


file_header_pattern = re.compile(r"=+\s*\n\s*([0-9.]+(rc[0-9]+|post[0-9]+)?)[ ]*-?[ ]*?([\w \-()\[\]\"]*)?\s*\n=+")


def new_file_header(m: re.Match):
    title = m[1] + ('' if not m[3] else ' ' + m[3])
    return f"---\ntitle: {title}\nsidebar_label: {title}\n---"


lvl2_header_pattern = re.compile(r"-+\s*\n\s*([^\n]+)\s*\n-+")
new_lvl2_header = r"## \1"

lvl3_header_pattern = re.compile(r"\*+\s*\n\s*([^\n]+)\s*\n\*+")
new_lvl3_header = r"### \1"

code_pattern = re.compile(r"``([^`]+)``")
new_code = r"`\1`"

link_pattern = re.compile(r"`([^`<]+) <(https?://[^>]*)>`_")
new_link = r"[\1](\2)"


subs = [
    (lvl2_header_pattern, new_lvl2_header),
    (lvl3_header_pattern, new_lvl3_header),
    (file_header_pattern, new_file_header),
    (code_pattern, new_code),
    (link_pattern, new_link),
]


def replace_all(text: str) -> str:
    result = text
    for sub_args in subs:
        result = re.sub(sub_args[0], sub_args[1], result)
    return result


def main():
    for path in pathlib.Path("docs/release-notes/").iterdir():
        if path.suffix.casefold() == ".rst".casefold():
            out_path = path.with_suffix(".md")
            out_path.write_text(replace_all(path.read_text()))


if __name__ == "__main__":
    main()
