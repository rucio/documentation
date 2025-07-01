"""Generate the code reference pages and navigation."""

import os
import shutil
from pathlib import Path

import mkdocs_gen_files

src = Path("rucio/lib/rucio/client/")
doc_path = "/auto_generated/client_api"

for item in os.listdir(doc_path):
    full_path = os.path.join(doc_path, item)
    if os.path.isfile(full_path):
        os.remove(full_path)
    elif os.path.isdir(full_path):
        shutil.rmtree(full_path)

# Discover Python files (except __init__.py) in rucio-client
py_files = [f for f in src.rglob("*.py") if "__init__.py" not in f.name]

for path in py_files:
    module_name = path.stem
    try:
        full_doc_path = Path(f"{doc_path}/{module_name}.md")
        __import__(f"rucio.client.{module_name}")
        with mkdocs_gen_files.open(full_doc_path, "a") as fd:
            module_path = path.relative_to(src).with_suffix("")
            fd.write(f"::: rucio.client.{module_path}\n\n")
    except ImportError:
        print(f"Could not access client page for {module_name}")
        pass
