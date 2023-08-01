# -*- coding: utf-8 -*-
# Copyright (c) 2019 Niklas Rosenstein
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to
# deal in the Software without restriction, including without limitation the
# rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
# sell copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
# IN THE SOFTWARE.

import dataclasses
import logging
import typing as t

import docspec
import docstring_parser
from pydoc_markdown.interfaces import Processor, Resolver

logger = logging.getLogger(__name__)


def sanitize(s: t.Optional[str]) -> str:
    if not s:
        return ""

    character_map = {
        r"<": r"\<",
        r">": r"\>",
    }

    for (before, after) in character_map.items():
        s = s.replace(before, after)
    return s


@dataclasses.dataclass
class _ParamLine:
    """
    Helper data class for holding details of Sphinx arguments.
    """

    name: str
    docs: str
    type: t.Optional[str] = None


def generate_sections_markdown(sections):
    ret = []

    ret.append("<table style={{border: 'none'}}><tbody>\n")
    for key, section in sections.items():
        if section:
            ret.append("\n<tr style={{border: 'none'}}>\n")

            ret.append(
                "\n<td style={{border: 'none', backgroundColor: 'var(--ifm-background-color)', 'verticalAlign': 'top'}}>\n"  # noqa: E501
            )
            ret.append(f"**{key}**:")
            ret.append("\n</td>\n")

            ret.append(
                "\n<td style={{border: 'none', backgroundColor: 'var(--ifm-background-color)', 'verticalAlign': 'top'}}>\n"  # noqa: E501
            )
            ret.extend(section)
            ret.append("\n</td>\n")

            ret.append("\n</tr>\n")
    ret.append("\n</tbody></table>\n")

    return ret


@dataclasses.dataclass
class RucioProcessor(Processor):

    _KEYWORDS = {
        "Arguments": [
            "arg",
            "argument",
            "param",
            "parameter",
            "type",
        ],
        "Returns": [
            "return",
            "returns",
            "rtype",
        ],
        "Raises": [
            "raises",
            "raise",
        ],
    }

    def check_docstring_format(self, docstring: str) -> bool:
        return any(
            f":{k}" in docstring for _, value in self._KEYWORDS.items() for k in value
        )

    def process(
        self, modules: t.List[docspec.Module], resolver: t.Optional[Resolver]
    ) -> None:
        docspec.visit(modules, self._process)

    def _convert_raises(
        self, raises: t.List[docstring_parser.common.DocstringRaises]
    ) -> list:
        """Convert a list of DocstringRaises from docstring_parser to markdown lines

        :return: A list of markdown formatted lines
        """
        converted_lines = []
        for entry in raises:
            converted_lines.append(
                "`{}`: {}\n".format(
                    sanitize(entry.type_name), sanitize(entry.description)
                )
            )
        return converted_lines

    def _convert_params(
        self, params: t.List[docstring_parser.common.DocstringParam]
    ) -> list:
        """Convert a list of DocstringParam to markdown lines.

        :return: A list of markdown formatted lines
        """
        converted = []
        for param in params:
            if param.type_name is None:
                converted.append(
                    "`{name}`: {description}\n".format(
                        name=sanitize(param.arg_name),
                        description=sanitize(param.description),
                    )
                )
            else:
                converted.append(
                    "`{name}` (`{type}`): {description}\n".format(
                        name=sanitize(param.arg_name),
                        type=param.type_name,
                        description=sanitize(param.description),
                    )
                )
        return converted

    def _convert_returns(
        self, returns: t.Optional[docstring_parser.common.DocstringReturns]
    ) -> str:
        """Convert a DocstringReturns object to a markdown string.

        :return: A markdown formatted string
        """
        if not returns:
            return ""
        if returns.type_name:
            type_data = "`{}`: ".format(returns.type_name)
        else:
            type_data = ""
        return "  " + type_data + (sanitize(returns.description) or "") + "\n"

    def _process(self, node: docspec.ApiObject) -> None:
        if not node.docstring:
            return

        lines = []
        components: t.Dict[str, t.List[str]] = {}

        parsed_docstring = docstring_parser.parse(
            node.docstring.content, docstring_parser.DocstringStyle.REST
        )
        components["Arguments"] = self._convert_params(parsed_docstring.params)
        components["Raises"] = self._convert_raises(parsed_docstring.raises)
        return_doc = self._convert_returns(parsed_docstring.returns)
        if return_doc:
            components["Returns"] = [return_doc]

        if parsed_docstring.short_description:
            lines.append(sanitize(parsed_docstring.short_description))
            lines.append("")
        if parsed_docstring.long_description:
            lines.append(sanitize(parsed_docstring.long_description))
            lines.append("")

        lines.extend(generate_sections_markdown(components))
        node.docstring.content = "\n".join(lines)
