from rucio.common.constants import RseAttr, RSEAttrObj

if __name__ == "__main__":
    mkd_file = ""

    all_attrs = [
        attr for attr in RseAttr.__dict__.values() if isinstance(attr, RSEAttrObj)
    ]
    for attr in all_attrs:
        doc = attr.doc.replace("\n", " ")
        mkd_file += (
            f"- **{attr.name}: {'Boolean' if attr.type_ is bool else 'String'}. {doc}"
        )
        mkd_file += "\n"

    print(mkd_file)
