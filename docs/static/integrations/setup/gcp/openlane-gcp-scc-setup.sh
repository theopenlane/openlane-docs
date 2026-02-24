#!/usr/bin/env bash

set -euo pipefail

SCRIPT_NAME="$(basename "$0")"

PROJECT_ID=""
ORGANIZATION_ID=""
SOURCE_ID=""
SERVICE_ACCOUNT_NAME="openlane-scc-reader"
SERVICE_ACCOUNT_DISPLAY_NAME="Openlane SCC Reader"
KEY_OUTPUT="./openlane-gcp-scc-key.json"
SCC_ROLE="roles/securitycenter.viewer"
GRANT_LEVEL="auto" # auto|project|organization
ENABLE_WIF=false
SKIP_KEY=false
WORKLOAD_POOL_ID="openlane-pool"
WORKLOAD_PROVIDER_ID="openlane-provider"
OIDC_ISSUER_URL=""
OIDC_ALLOWED_AUDIENCE="openlane"

usage() {
  cat <<EOF
Usage:
  ${SCRIPT_NAME} --project-id <PROJECT_ID> [options]

Required:
  --project-id <id>                 GCP project ID used for setup and API enablement.

Optional:
  --organization-id <id>            Organization ID for org-level SCC access.
  --source-id <resource_or_id>      SCC source resource name or source ID to prefill in Openlane.
  --service-account-name <name>     Service account short name. Default: ${SERVICE_ACCOUNT_NAME}
  --service-account-display-name <name>
                                    Service account display name.
  --key-output <path>               Output path for generated service account key JSON.
                                    Default: ${KEY_OUTPUT}
  --skip-key                        Do not generate a service account key (WIF-only setup).
  --scc-role <role>                 IAM role granted to the service account for SCC read access.
                                    Default: ${SCC_ROLE}
  --grant-level <auto|project|organization>
                                    Where to bind --scc-role. Default: auto
  --enable-wif                      Configure Workload Identity Federation resources.
  --workload-pool-id <id>           Workload Identity Pool ID. Default: ${WORKLOAD_POOL_ID}
  --workload-provider-id <id>       Workload Identity Provider ID. Default: ${WORKLOAD_PROVIDER_ID}
  --oidc-issuer-url <url>           OIDC issuer URL for WIF provider (required with --enable-wif).
  --oidc-allowed-audience <aud>     OIDC allowed audience for WIF provider.
                                    Default: ${OIDC_ALLOWED_AUDIENCE}
  --help                            Show this help text.

Examples:
  ${SCRIPT_NAME} --project-id my-security-project --organization-id 1234567890
  ${SCRIPT_NAME} --project-id my-security-project --enable-wif --skip-key \\
    --oidc-issuer-url https://issuer.example.com --oidc-allowed-audience openlane
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
    --source-id)
      SOURCE_ID="${2:-}"
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
    --skip-key)
      SKIP_KEY=true
      shift
      ;;
    --scc-role)
      SCC_ROLE="${2:-}"
      shift 2
      ;;
    --grant-level)
      GRANT_LEVEL="${2:-}"
      shift 2
      ;;
    --enable-wif)
      ENABLE_WIF=true
      shift
      ;;
    --workload-pool-id)
      WORKLOAD_POOL_ID="${2:-}"
      shift 2
      ;;
    --workload-provider-id)
      WORKLOAD_PROVIDER_ID="${2:-}"
      shift 2
      ;;
    --oidc-issuer-url)
      OIDC_ISSUER_URL="${2:-}"
      shift 2
      ;;
    --oidc-allowed-audience)
      OIDC_ALLOWED_AUDIENCE="${2:-}"
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

if [[ "${ENABLE_WIF}" == true && -z "${OIDC_ISSUER_URL}" ]]; then
  error "--oidc-issuer-url is required when --enable-wif is set"
fi

if [[ "${GRANT_LEVEL}" == "organization" && -z "${ORGANIZATION_ID}" ]]; then
  error "--organization-id is required when --grant-level organization is used"
fi

require_cmd gcloud

echo "Setting active project to ${PROJECT_ID}..."
gcloud config set project "${PROJECT_ID}" >/dev/null

PROJECT_NUMBER="$(gcloud projects describe "${PROJECT_ID}" --format='value(projectNumber)')"
[[ -n "${PROJECT_NUMBER}" ]] || error "Unable to determine project number for ${PROJECT_ID}"

echo "Enabling required APIs..."
gcloud services enable \
  securitycenter.googleapis.com \
  iam.googleapis.com \
  iamcredentials.googleapis.com \
  cloudresourcemanager.googleapis.com \
  sts.googleapis.com \
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

if [[ "${SKIP_KEY}" == false ]]; then
  mkdir -p "$(dirname "${KEY_OUTPUT}")"
  echo "Creating service account key at ${KEY_OUTPUT}..."
  gcloud iam service-accounts keys create "${KEY_OUTPUT}" \
    --iam-account "${SERVICE_ACCOUNT_EMAIL}" \
    --project "${PROJECT_ID}" >/dev/null
fi

WIF_PROVIDER_RESOURCE=""
WIF_AUDIENCE=""

if [[ "${ENABLE_WIF}" == true ]]; then
  echo "Ensuring Workload Identity Pool ${WORKLOAD_POOL_ID} exists..."
  if ! gcloud iam workload-identity-pools describe "${WORKLOAD_POOL_ID}" \
    --location="global" \
    --project="${PROJECT_ID}" >/dev/null 2>&1; then
    gcloud iam workload-identity-pools create "${WORKLOAD_POOL_ID}" \
      --location="global" \
      --project="${PROJECT_ID}" \
      --display-name="Openlane Pool" >/dev/null
  fi

  echo "Ensuring Workload Identity Provider ${WORKLOAD_PROVIDER_ID} exists..."
  if ! gcloud iam workload-identity-pools providers describe "${WORKLOAD_PROVIDER_ID}" \
    --workload-identity-pool="${WORKLOAD_POOL_ID}" \
    --location="global" \
    --project="${PROJECT_ID}" >/dev/null 2>&1; then
    gcloud iam workload-identity-pools providers create-oidc "${WORKLOAD_PROVIDER_ID}" \
      --workload-identity-pool="${WORKLOAD_POOL_ID}" \
      --location="global" \
      --project="${PROJECT_ID}" \
      --issuer-uri="${OIDC_ISSUER_URL}" \
      --allowed-audiences="${OIDC_ALLOWED_AUDIENCE}" \
      --attribute-mapping="google.subject=assertion.sub" >/dev/null
  fi

  WIF_PROVIDER_RESOURCE="projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${WORKLOAD_POOL_ID}/providers/${WORKLOAD_PROVIDER_ID}"
  WIF_AUDIENCE="//iam.googleapis.com/${WIF_PROVIDER_RESOURCE}"
  WIF_MEMBER="principalSet://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${WORKLOAD_POOL_ID}/*"

  echo "Granting roles/iam.workloadIdentityUser on ${SERVICE_ACCOUNT_EMAIL} to workload pool principals..."
  gcloud iam service-accounts add-iam-policy-binding "${SERVICE_ACCOUNT_EMAIL}" \
    --project="${PROJECT_ID}" \
    --member="${WIF_MEMBER}" \
    --role="roles/iam.workloadIdentityUser" \
    --quiet >/dev/null
fi

cat <<EOF

Setup complete.

Openlane field mapping:

projectId: ${PROJECT_ID}
organizationId: ${ORGANIZATION_ID}
serviceAccountEmail: ${SERVICE_ACCOUNT_EMAIL}
sourceId: ${SOURCE_ID}

$(if [[ "${SKIP_KEY}" == false ]]; then
  echo "serviceAccountKey: ${KEY_OUTPUT}"
else
  echo "serviceAccountKey: <not generated>"
fi)

$(if [[ "${ENABLE_WIF}" == true ]]; then
  cat <<WIF
workloadIdentityProvider: ${WIF_PROVIDER_RESOURCE}
audience: ${WIF_AUDIENCE}
subjectToken: <supply an OIDC/JWT subject token from your identity provider>
WIF
else
  echo "workloadIdentityProvider: <not configured>"
fi)

If you did not pass --source-id, you can identify valid SCC sources with:
$(if [[ -n "${ORGANIZATION_ID}" ]]; then
  echo "  gcloud scc sources list --organization=${ORGANIZATION_ID}"
fi)
  gcloud scc sources list --project=${PROJECT_ID}
EOF
