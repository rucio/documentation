"""Generate the code reference pages and navigation."""

import os
from pathlib import Path

import mkdocs_gen_files


def clean_dir(doc_path):
    try:
        files = os.listdir(doc_path)
        for file in files:
            try:
                os.remove(f"{doc_path}/{file}")
            except IsADirectoryError:
                pass  # TODO Better handling
    except FileNotFoundError:
        os.mkdir(doc_path)


def write_files(py_files, doc_path, import_prefix, dir_source):
    for path in py_files:
        module_name = path.name.split(".py")[0]

        try:
            print(f"{import_prefix}.{module_name}")
            print(f"{doc_path}/{module_name}.md")
            full_doc_path = Path(f"{doc_path}/{module_name}.md")
            __import__(f"{import_prefix}.{module_name}")
            with mkdocs_gen_files.open(full_doc_path, "a") as fd:
                module_path = path.relative_to(dir_source).with_suffix("")
                fd.write(f"::: {import_prefix}.{module_path}")
                fd.write("\n\n")

        except ImportError:
            print(f"Could not access page for {import_prefix}.{module_name}")


# RSE Policies (w/ abstract base)
policy_src = Path("rucio/lib/rucio/rse")
root = policy_src.parent
doc_path = "/auto_generated/rse_policies"
clean_dir(doc_path)

py_files = [f for f in list(policy_src.glob("*.py")) if "__init__.py" not in f.name]
write_files(py_files, doc_path, "rucio.rse", policy_src)

# RSE Transfer Protocols
protocol_src = Path("rucio/lib/rucio/rse/protocols")
root = protocol_src.parent
doc_path = "/auto_generated/transfer_protocols"
clean_dir(doc_path)

py_files = [f for f in list(protocol_src.glob("*.py")) if "__init__.py" not in f.name]
write_files(py_files, doc_path, "rucio.rse.protocols", protocol_src)

# Transfer Tools
tools_src = Path(
    "rucio/lib/rucio/transfertool/"
)  # All the transfer tool policies included
root = tools_src.parent
doc_path = "/auto_generated/transfer_tools"
clean_dir(doc_path)

py_files = [
    Path(f"{tools_src}/{tool}.py") for tool in ["globus", "fts3"]
]  # TODO Verify these are the only supported tools
write_files(py_files, doc_path, "rucio.transfertool", tools_src)

# Meta Plugins
did_meta = Path("rucio/lib/rucio/core/did_meta_plugins/")
root = did_meta.parent
doc_path = "/auto_generated/did_meta_plugins"
clean_dir(doc_path)

py_files = [
    f for f in list(did_meta.glob("*_meta.py")) if "__init__.py" not in f.name
]  # TODO Better docstrings for these files
write_files(py_files, doc_path, "rucio.core.did_meta_plugins", did_meta)
