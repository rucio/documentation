#!/bin/bash

set -e

# ---------------------------------------------------------------------------
# Parse arguments for using a local Rucio path
# ---------------------------------------------------------------------------
RUCIO_PATH=""       # A local Rucio in case users provide it
MOUNT_RUCIO_PATH="" # container-mount target (gets set if users want to use a local Rucio)

usage() {
  echo "Usage: $0 [options]"
  echo ""
  echo "Options:"
  echo "  -r, --rucio-path <path>   Use local Rucio from <path> (mounts it in the container)."
  echo "  -h, --help                Show this help message."
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    -r|--rucio-path)
      RUCIO_PATH="$2"
      shift 2
      ;;
    -h|--help)
      usage
      ;;
    *)
      echo "Unknown option: $1"
      usage
      ;;
  esac
done

# ---------------------------------------------------------------------------
# Script paths
# ---------------------------------------------------------------------------
SCRIPT_DIR="$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
AUTO_GENERATED="${SCRIPT_DIR}/auto_generated"
DOCS="${SCRIPT_DIR}/../docs"
RUCIO_IN_DOCKER="${SCRIPT_DIR}/run_in_docker/rucio"

# ---------------------------------------------------------------------------
# Helper: make sure git is available
# ---------------------------------------------------------------------------
ensure_git() {
  if ! command -v git >/dev/null 2>&1; then
    echo "[WARN] 'git' command not found."

    if command -v yum >/dev/null 2>&1; then
      echo "[INFO] Attempting 'yum install -y git' ..."
      sudo yum install -y git
    elif command -v apt-get >/dev/null 2>&1; then
      echo "[INFO] Attempting 'apt-get install -y git' ..."
      sudo apt-get update -qq
      sudo apt-get install -y git
    else
      echo "[ERROR] 'git' is required for this operation. Please install git and rerun." >&2
      exit 1
    fi

    # Verify again after possible automatic installation
    if ! command -v git >/dev/null 2>&1; then
      echo "[ERROR] Automatic installation of git failed. Aborting." >&2
      exit 1
    fi
  fi
}

# ---------------------------------------------------------------------------
# Handle the Rucio directory logic
# ---------------------------------------------------------------------------
prepare_rucio_folder() {
  if [[ -n "$RUCIO_PATH" ]]; then
    #---------------------------------------------------------------
    # CASE A: Local Rucio path provided
    #---------------------------------------------------------------
    echo "[INFO] Local Rucio path provided: '$RUCIO_PATH'"
    # Validate the local directory
    if [[ ! -d "$RUCIO_PATH" ]]; then
      echo "[ERROR] '$RUCIO_PATH' is not a directory or doesn't exist."
      exit 1
    fi

    # Remove any existing 'run_in_docker/rucio'
    if [[ -e "$RUCIO_IN_DOCKER" ]]; then
      echo "[WARNING] Removing existing '$RUCIO_IN_DOCKER' (file/dir/symlink)."
      rm -rf "$RUCIO_IN_DOCKER"
    fi

    # Canonical absolute path for Docker bind-mount
    MOUNT_RUCIO_PATH="$(cd "$RUCIO_PATH" && pwd -P)"

  else
    #---------------------------------------------------------------
    # CASE B: Clone (or reuse existing clone)
    #---------------------------------------------------------------
    echo "[INFO] No local Rucio path given. Using clone mode."

    # If it's a directory, assume it's a valid Rucio copy and do nothing
    if [[ -d "$RUCIO_IN_DOCKER" && ! -L "$RUCIO_IN_DOCKER" ]]; then
      echo "[INFO] '$RUCIO_IN_DOCKER' directory already exists. Skipping clone."
    else
      # If it's anything else, remove it to make a fresh clone
      if [[ -e "$RUCIO_IN_DOCKER" ]]; then
        echo "[WARNING] '$RUCIO_IN_DOCKER' is not a directory (symlink/file). Removing it."
        rm -rf "$RUCIO_IN_DOCKER"
      fi

      ensure_git

      echo "[INFO] Cloning Rucio into '$RUCIO_IN_DOCKER'..."
      git clone --depth=1 https://github.com/rucio/rucio.git "$RUCIO_IN_DOCKER"
      echo "[INFO] Rucio successfully cloned."
    fi

    # No extra mount needed in clone mode (added here to override in case of edge cases)
    MOUNT_RUCIO_PATH=""
  fi

  export MOUNT_RUCIO_PATH
}

prepare_rucio_folder

# ---------------------------------------------------------------------------
# Call the generate_dynamic_files.sh (which runs Docker)
# ---------------------------------------------------------------------------
echo "[INFO] Running generate_dynamic_files.sh..."
"${SCRIPT_DIR}/generate_dynamic_files.sh"

# ---------------------------------------------------------------------------
# Adjust ownership of auto-generated docs, if needed
# ---------------------------------------------------------------------------
# Dynamically determine the primary group of the current user
USER_GROUP=$(id -gn)

# We have to change the ownership of the auto generated files here. Docker
# creates everything with it's own (or root) user account. This is a problem,
# since the current user does not own the files.
echo "[INFO] Fixing ownership of auto_generated/ to $USER:$USER_GROUP"
sudo chown -R "$USER":"$USER_GROUP" "$AUTO_GENERATED"

# ---------------------------------------------------------------------------
# Proceed with the doc building steps
# ---------------------------------------------------------------------------
echo "[INFO] Adding code examples to REST API Spec file..."
(
    cd "${SCRIPT_DIR}/openapi_examples"
    yarn install
)
node "${SCRIPT_DIR}/openapi_examples/generate_api_examples.js" \
     "${AUTO_GENERATED}/rest_api_doc_spec.yaml" \
     > "${AUTO_GENERATED}/rest_api_doc_spec_tmp.yaml"

cp "${AUTO_GENERATED}/rest_api_doc_spec_tmp.yaml" "${AUTO_GENERATED}/rest_api_doc_spec.yaml"
rm "${AUTO_GENERATED}/rest_api_doc_spec_tmp.yaml"

echo "[INFO] Generating Rest Api Docs from Spec File..."
npx --yes @redocly/cli build-docs "${AUTO_GENERATED}/rest_api_doc_spec.yaml" \
    --template "${SCRIPT_DIR}/templates/rest_api_html_template.hbs" \
    --output "${AUTO_GENERATED}/rest_api_doc.html"

mkdir -p "${SCRIPT_DIR}/../website/static/yaml/"
mkdir -p "${SCRIPT_DIR}/../website/static/html/"

echo "Moving auto generated files to docs folder..."

cp -r "$AUTO_GENERATED"/rest_api_doc_spec.yaml "$SCRIPT_DIR"/../website/static/yaml/
cp -r "$AUTO_GENERATED"/rest_api_doc.html "$SCRIPT_DIR"/../website/static/html/

for dir in rse_policies did_meta_plugins transfer_protocols transfer_tools client_api; do
    cp -r "${AUTO_GENERATED}/${dir}" "${SCRIPT_DIR}/../website/static/html/"
done

cp -r "$AUTO_GENERATED"/bin "$DOCS"
cp -r "$AUTO_GENERATED"/_rucio_config_defaults.mdx "$DOCS"/operator/

echo "[INFO] Generating Release Notes..."
"${SCRIPT_DIR}/generate_release_notes.py"
echo "[INFO] Generating Release Notes Index..."
"${SCRIPT_DIR}/generate_release_notes_index.py"

echo "[INFO] build_documentation.sh complete."
