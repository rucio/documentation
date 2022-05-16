#!/usr/bin/env python3
import jinja2
import pathlib
import os

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


if __name__ == "__main__":
    templates_dir: str = os.path.join(os.path.dirname(__file__), "templates")
    assert os.path.exists(templates_dir)
    render_templates(templates_dir, pathlib.Path(os.path.join(os.path.dirname(__file__), "../docs")).resolve())
