set -e
trap "{ echo -e '\033[31mFAILED\033[0m'; }" ERR

[[ $1 == 'fast' ]] && CPUS='-j auto' || CPUS=''

docs_conf_dir="main/source"
out_dir="master/website/static/rucio"

# Cleanup pre-existing temporary generated files.
rm -rf "master/website/static/rucio"

# Cleanup previous output.
rm -rf "${out_dir}"

# Navigate to the checked out rucio repository & backup
cd /home/runner/work/documentation/documentation/rucio
mv source source_copy
cp -R "$docs_conf_dir" .

# Regenerate docs.
sphinx-build -B html . "${out_dir}" -W --keep-going $CPUS

echo
echo Index Page:
echo "file://${out_dir}/html/index.html"
echo
