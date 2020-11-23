set -e
trap "{ echo -e '\033[31mFAILED\033[0m'; }" ERR

[[ $1 == 'fast' ]] && CPUS='-j auto' || CPUS=''

docs_conf_dir="/home/runner/work/documentation/documentation/sphinx/source"
out_dir="/home/runner/work/documentation/documentation/master/website/static/rucio"

# Cleanup pre-existing temporary generated files.
rm -rf "/home/runner/work/documentation/documentation/master/website/static/rucio"

# Cleanup previous output.
rm -rf "${out_dir}"

# Navigate to the checked out rucio repository & backup
cd /home/runner/work/documentation/documentation/rucio/doc/
mv source source_copy
cp -R "$docs_conf_dir" .

# Regenerate docs.
cd source
sphinx-build -b html . "${out_dir}"
