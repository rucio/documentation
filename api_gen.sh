#! /bin/bash

cd lib/rucio/api/
pydoc-markdown -I . --render-toc > ../../../api.md -v

cd ../web/rest
pydoc-markdown -I . --render-toc > ../../../../rest.md -v
