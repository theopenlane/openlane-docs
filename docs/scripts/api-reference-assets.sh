#!/usr/bin/env bash
# Prepares the assets for the Scalar API reference at /api-reference so the
# page has no runtime dependencies outside docs.theopenlane.io:
#
# 1. Downloads the OpenAPI spec to static/openapi.json (the API rejects
#    cross-origin requests from non-allowlisted origins, so the page fetches
#    it same-origin; a build-time copy also matches the spec freshness of the
#    rest of the site). If the fetch fails, the existing committed copy is
#    kept; Buildkite refreshes and commits it via `task generate`.
# 2. Copies the Scalar standalone renderer from node_modules to static/scalar/
#    so it is served from this site at the version pinned in bun.lock instead
#    of an unpinned jsDelivr URL (the @scalar/docusaurus default).
set -euo pipefail
cd "$(dirname "$0")/.."

spec_url="https://api.theopenlane.io/api-docs"
spec_out="static/openapi.json"

# curl -f only catches HTTP error statuses; the node parse rejects a 200 with
# a non-JSON body (node is always present here, the build runs on it)
if curl -fsSL "$spec_url" -o "$spec_out.tmp" &&
  node -e 'JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"))' "$spec_out.tmp" 2>/dev/null; then
  mv "$spec_out.tmp" "$spec_out"
  echo "api-reference-assets: wrote $spec_out"
else
  rm -f "$spec_out.tmp"
  if [ -f "$spec_out" ]; then
    echo "api-reference-assets: spec fetch failed, keeping existing $spec_out" >&2
  else
    echo "api-reference-assets: spec fetch failed and no existing $spec_out" >&2
    exit 1
  fi
fi

rm -rf static/scalar
cp -R node_modules/@scalar/api-reference/dist/browser static/scalar
echo "api-reference-assets: copied Scalar renderer to static/scalar"
