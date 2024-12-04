import dataclasses
import typing as t

import docspec
from pydoc_markdown.contrib.renderers.markdown import MarkdownRenderer
from pydoc_markdown.interfaces import Context, Renderer


def get_first_client_class(
    modules: t.List[docspec.Module],
) -> t.Optional[docspec.Class]:
    if not modules:
        return None

    for i in modules:
        if isinstance(i, docspec.Class) and getattr(i, "name", "").lower().endswith(
            "client"
        ):
            return i

        child = get_first_client_class(getattr(i, "members", []))
        if child:
            return child

    return None


def sanitize(s: str) -> str:
    character_map = {r"_": r"\_", r"<": r"\<", r">": r"\>", r"{": r"\{", r"}": r"\}"}

    for before, after in character_map.items():
        s = s.replace(before, after)
    return s


@dataclasses.dataclass
class RucioRenderer(Renderer):
    markdown: MarkdownRenderer = dataclasses.field(default_factory=MarkdownRenderer)

    def init(self, context: Context) -> None:
        self.markdown.init(context)

    def render_recursive(self, obj: docspec.ApiObject) -> None:
        if isinstance(obj, docspec.Function) and (
            not obj.name.startswith("_") or obj.name == "__init__"
        ):
            print(f"## {sanitize(obj.name)}\n")
            if obj.docstring:
                print('<span style={{"white-space": "pre"}}>\n')
                print(obj.docstring.content + "\n")
                print("</span>\n")

        for item in getattr(obj, "members", []):
            self.render_recursive(item)

    def render(self, modules: t.List[docspec.Module]) -> None:
        client_class = get_first_client_class(modules)
        assert (
            client_class
        ), f"Client Class should not be empty, error with {modules[0].name}"

        print("---")
        print(f"title: {client_class.name}")
        print("---")

        self.render_recursive(client_class)
