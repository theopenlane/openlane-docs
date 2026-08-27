#!/usr/bin/env bash

set -euo pipefail

SCRIPT_NAME="$(basename "$0")"

# Fixed identifiers the Openlane GCP SCC integration constructs the STS audience from
# Do not change these if possible; integration will work "seamlessly" if you use the names the integration expects
POOL_ID="openlane"
PROVIDER_ID="openlane"

PROJECT_ID="staging-apps-project"
OPENLANE_ORG_ID="01KZY5KE3GYD5J2TRK5YTKF4DS"
OPENLANE_ISSUER="https://api.theopenlane.io"
ORGANIZATION_ID=""
SERVICE_ACCOUNT_NAME="openlane-scc-reader"
SERVICE_ACCOUNT_DISPLAY_NAME="openlane-scc-reader"
SCC_ROLE="roles/securitycenter.viewer"
GRANT_LEVEL="project" # auto|project|organization

usage() {
  cat <<EOF
Usage:
  ${SCRIPT_NAME} --project-id <PROJECT_ID> --openlane-org-id <ORG_ID> [options]

Creates a workload identity pool and OIDC provider (both named "${POOL_ID}") that
trust Openlane as an identity provider, so Openlane can read Security Command
Center findings without a stored service account key.

Required:
  --project-id <id>                 GCP project ID that hosts the workload identity pool.
  --openlane-org-id <id>            Your Openlane organization ID. Openlane signs federation
                                    tokens with this value as the subject.

Optional:
  --openlane-issuer <uri>           Openlane OIDC issuer URI shown on the connection page.
                                    Default: ${OPENLANE_ISSUER}
  --organization-id <id>            GCP organization ID for org-level SCC access.
  --service-account-name <name>     When set, creates this service account and grants Openlane
                                    permission to impersonate it instead of granting SCC access
                                    to the federated identity directly.
  --service-account-display-name <name>
                                    Service account display name.
  --scc-role <role>                 IAM role granted for SCC read access.
                                    Default: ${SCC_ROLE}
  --grant-level <auto|project|organization>
                                    Where to bind --scc-role. Default: auto
  --help                            Show this help text.

Examples:
  ${SCRIPT_NAME} --project-id my-security-project --openlane-org-id 01HXAMPLEORGID
  ${SCRIPT_NAME} --project-id my-security-project --openlane-org-id 01HXAMPLEORGID \\
    --organization-id 1234567890 --service-account-name openlane-scc-reader

Note: deleted workload identity pools cannot be re-created under the same ID for
30 days. If you previously deleted the "${POOL_ID}" pool, undelete it instead:
  gcloud iam workload-identity-pools undelete ${POOL_ID} --location=global
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
    --openlane-org-id)
      OPENLANE_ORG_ID="${2:-}"
      shift 2
      ;;
    --openlane-issuer)
      OPENLANE_ISSUER="${2:-}"
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
[[ -n "${OPENLANE_ORG_ID}" ]] || error "--openlane-org-id is required"
[[ -n "${OPENLANE_ISSUER}" ]] || error "--openlane-issuer must not be empty"

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
  iamcredentials.googleapis.com \
  sts.googleapis.com \
  cloudresourcemanager.googleapis.com \
  --project "${PROJECT_ID}" >/dev/null

PROJECT_NUMBER="$(gcloud projects describe "${PROJECT_ID}" --format='value(projectNumber)')"
[[ -n "${PROJECT_NUMBER}" ]] || error "Could not resolve project number for ${PROJECT_ID}"

echo "Ensuring workload identity pool ${POOL_ID} exists..."
if ! gcloud iam workload-identity-pools describe "${POOL_ID}" \
  --location=global --project "${PROJECT_ID}" >/dev/null 2>&1; then
  gcloud iam workload-identity-pools create "${POOL_ID}" \
    --location=global \
    --display-name="Openlane" \
    --description="Federated access for the Openlane platform" \
    --project "${PROJECT_ID}" >/dev/null
fi

# Openlane signs federation tokens with:
#   sub = your Openlane organization ID
#   aud = //iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/providers/${PROVIDER_ID}
# The audience matches the provider's default allowed audience, so --allowed-audiences
# is not needed. The attribute condition restricts the pool to your organization's tokens.
ATTRIBUTE_MAPPING="google.subject=assertion.sub"
ATTRIBUTE_CONDITION="assertion.sub == '${OPENLANE_ORG_ID}'"

echo "Ensuring OIDC provider ${PROVIDER_ID} exists..."
if gcloud iam workload-identity-pools providers describe "${PROVIDER_ID}" \
  --location=global --workload-identity-pool="${POOL_ID}" \
  --project "${PROJECT_ID}" >/dev/null 2>&1; then
  gcloud iam workload-identity-pools providers update-oidc "${PROVIDER_ID}" \
    --location=global \
    --workload-identity-pool="${POOL_ID}" \
    --issuer-uri="${OPENLANE_ISSUER}" \
    --attribute-mapping="${ATTRIBUTE_MAPPING}" \
    --attribute-condition="${ATTRIBUTE_CONDITION}" \
    --project "${PROJECT_ID}" >/dev/null
else
  gcloud iam workload-identity-pools providers create-oidc "${PROVIDER_ID}" \
    --location=global \
    --workload-identity-pool="${POOL_ID}" \
    --display-name="Openlane" \
    --issuer-uri="${OPENLANE_ISSUER}" \
    --attribute-mapping="${ATTRIBUTE_MAPPING}" \
    --attribute-condition="${ATTRIBUTE_CONDITION}" \
    --project "${PROJECT_ID}" >/dev/null
fi

FEDERATED_PRINCIPAL="principal://iam.googleapis.com/projects/${PROJECT_NUMBER}/locations/global/workloadIdentityPools/${POOL_ID}/subject/${OPENLANE_ORG_ID}"

EFFECTIVE_GRANT_LEVEL="${GRANT_LEVEL}"
if [[ "${EFFECTIVE_GRANT_LEVEL}" == "auto" ]]; then
  if [[ -n "${ORGANIZATION_ID}" ]]; then
    EFFECTIVE_GRANT_LEVEL="organization"
  else
    EFFECTIVE_GRANT_LEVEL="project"
  fi
fi

SERVICE_ACCOUNT_EMAIL=""
GRANT_MEMBER="${FEDERATED_PRINCIPAL}"

if [[ -n "${SERVICE_ACCOUNT_NAME}" ]]; then
  SERVICE_ACCOUNT_EMAIL="${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
  GRANT_MEMBER="serviceAccount:${SERVICE_ACCOUNT_EMAIL}"

  echo "Ensuring service account ${SERVICE_ACCOUNT_EMAIL} exists..."
  if ! gcloud iam service-accounts describe "${SERVICE_ACCOUNT_EMAIL}" --project "${PROJECT_ID}" >/dev/null 2>&1; then
    gcloud iam service-accounts create "${SERVICE_ACCOUNT_NAME}" \
      --display-name "${SERVICE_ACCOUNT_DISPLAY_NAME}" \
      --project "${PROJECT_ID}" >/dev/null
  fi

  echo "Allowing the Openlane federated identity to impersonate ${SERVICE_ACCOUNT_EMAIL}..."
  gcloud iam service-accounts add-iam-policy-binding "${SERVICE_ACCOUNT_EMAIL}" \
    --member "${FEDERATED_PRINCIPAL}" \
    --role "roles/iam.workloadIdentityUser" \
    --project "${PROJECT_ID}" \
    --quiet >/dev/null
fi

echo "Granting ${SCC_ROLE} at ${EFFECTIVE_GRANT_LEVEL} level..."
if [[ "${EFFECTIVE_GRANT_LEVEL}" == "organization" ]]; then
  gcloud organizations add-iam-policy-binding "${ORGANIZATION_ID}" \
    --member "${GRANT_MEMBER}" \
    --role "${SCC_ROLE}" \
    --quiet >/dev/null
else
  gcloud projects add-iam-policy-binding "${PROJECT_ID}" \
    --member "${GRANT_MEMBER}" \
    --role "${SCC_ROLE}" \
    --quiet >/dev/null
fi

cat <<EOF

Setup complete. No service account key was created or downloaded.

Paste the following values into the Openlane GCP Workload Identity Federation
configure page:

  projectNumber:  ${PROJECT_NUMBER}
  organizationId: ${ORGANIZATION_ID:-<not set — use projectId only>}
  projectId:      ${PROJECT_ID}
EOF

if [[ -n "${SERVICE_ACCOUNT_EMAIL}" ]]; then
  cat <<EOF
  serviceAccountEmail: ${SERVICE_ACCOUNT_EMAIL}
EOF
fi

cat <<EOF

Openlane federates as:

  ${FEDERATED_PRINCIPAL}

EOF
