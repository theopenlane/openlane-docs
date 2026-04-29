#!/usr/bin/env bash

set -euo pipefail

SCRIPT_NAME="$(basename "$0")"

PROJECT_ID=""
ORGANIZATION_ID=""
SERVICE_ACCOUNT_NAME="openlane-scc-reader"
SERVICE_ACCOUNT_DISPLAY_NAME="Openlane SCC Reader"
KEY_OUTPUT="./openlane-gcp-scc-key.json"
SCC_ROLE="roles/securitycenter.viewer"
GRANT_LEVEL="auto" # auto|project|organization

usage() {
  cat <<EOF
Usage:
  ${SCRIPT_NAME} --project-id <PROJECT_ID> [options]

Required:
  --project-id <id>                 GCP project ID used for setup and API enablement.

Optional:
  --organization-id <id>            Organization ID for org-level SCC access.
  --service-account-name <name>     Service account short name. Default: ${SERVICE_ACCOUNT_NAME}
  --service-account-display-name <name>
                                    Service account display name.
  --key-output <path>               Output path for the generated service account key JSON.
                                    Default: ${KEY_OUTPUT}
  --scc-role <role>                 IAM role granted to the service account for SCC read access.
                                    Default: ${SCC_ROLE}
  --grant-level <auto|project|organization>
                                    Where to bind --scc-role. Default: auto
  --help                            Show this help text.

Examples:
  ${SCRIPT_NAME} --project-id my-security-project
  ${SCRIPT_NAME} --project-id my-security-project --organization-id 1234567890
EOF
}

error() {
  echo "ERROR: $*" 1>&2
  exit 1
}

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || error "Missing required command: $1"
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --project-id)
      PROJECT_ID="${2:-}"
      shift 2
      ;;
    --organization-id)
      ORGANIZATION_ID="${2:-}"
      shift 2
      ;;
    --service-account-name)
      SERVICE_ACCOUNT_NAME="${2:-}"
      shift 2
      ;;
    --service-account-display-name)
      SERVICE_ACCOUNT_DISPLAY_NAME="${2:-}"
      shift 2
      ;;
    --key-output)
      KEY_OUTPUT="${2:-}"
      shift 2
      ;;
    --scc-role)
      SCC_ROLE="${2:-}"
      shift 2
      ;;
    --grant-level)
      GRANT_LEVEL="${2:-}"
      shift 2
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    *)
      error "Unknown argument: $1"
      ;;
  esac
done

[[ -n "${PROJECT_ID}" ]] || error "--project-id is required"

case "${GRANT_LEVEL}" in
  auto|project|organization) ;;
  *)
    error "--grant-level must be one of: auto, project, organization"
    ;;
esac

if [[ "${GRANT_LEVEL}" == "organization" && -z "${ORGANIZATION_ID}" ]]; then
  error "--organization-id is required when --grant-level organization is used"
fi

require_cmd gcloud

echo "Setting active project to ${PROJECT_ID}..."
gcloud config set project "${PROJECT_ID}" >/dev/null

echo "Enabling required APIs..."
gcloud services enable \
  securitycenter.googleapis.com \
  iam.googleapis.com \
  cloudresourcemanager.googleapis.com \
  --project "${PROJECT_ID}" >/dev/null

SERVICE_ACCOUNT_EMAIL="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

echo "Ensuring service account ${SERVICE_ACCOUNT_EMAIL} exists..."
if ! gcloud iam service-accounts describe "${SERVICE_ACCOUNT_EMAIL}" --project "${PROJECT_ID}" >/dev/null 2>&1; then
  gcloud iam service-accounts create "${SERVICE_ACCOUNT_NAME}" \
    --display-name "${SERVICE_ACCOUNT_DISPLAY_NAME}" \
    --project "${PROJECT_ID}" >/dev/null
fi

EFFECTIVE_GRANT_LEVEL="${GRANT_LEVEL}"
if [[ "${EFFECTIVE_GRANT_LEVEL}" == "auto" ]]; then
  if [[ -n "${ORGANIZATION_ID}" ]]; then
    EFFECTIVE_GRANT_LEVEL="organization"
  else
    EFFECTIVE_GRANT_LEVEL="project"
  fi
fi

echo "Granting ${SCC_ROLE} at ${EFFECTIVE_GRANT_LEVEL} level..."
if [[ "${EFFECTIVE_GRANT_LEVEL}" == "organization" ]]; then
  gcloud organizations add-iam-policy-binding "${ORGANIZATION_ID}" \
    --member "serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role "${SCC_ROLE}" \
    --quiet >/dev/null
else
  gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
    --member "serviceAccount:${SERVICE_ACCOUNT_EMAIL}" \
    --role "${SCC_ROLE}" \
    --quiet >/dev/null
fi

mkdir -p "$(dirname "${KEY_OUTPUT}")"
echo "Creating service account key at ${KEY_OUTPUT}..."
gcloud iam service-accounts keys create "${KEY_OUTPUT}" \
  --iam-account "${SERVICE_ACCOUNT_EMAIL}" \
  --project "${PROJECT_ID}" >/dev/null

cat <<EOF

Setup complete.

Paste the following values into the Openlane GCP SCC configure page:

  projectId:      ${PROJECT_ID}
  organizationId: ${ORGANIZATION_ID:-<not set — use projectId only>}

  serviceAccountKeyJson: paste the contents of ${KEY_OUTPUT}

EOF
