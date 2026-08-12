// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: "Openlane",
  tagline: "Simplify your compliance journey",
  // the docs are served at docs.theopenlane.io — this drives canonicals,
  // the sitemap, and structured-data URLs
  url: "https://docs.theopenlane.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  markdown: {
    format: "detect",
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
  headTags: [
    // Preconnects for performance
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://docs.theopenlane.io',
      },
    },

    // Openlane organization structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Openlane',
        url: 'https://www.theopenlane.io',
        logo: 'https://www.theopenlane.io/img/openlane-logo.png',
        sameAs: [
          'https://github.com/theopenlane',
          'https://www.linkedin.com/company/theopenlane',
          'https://openlane.fyi',
        ],
      }),
    },

    // Website metadata (improves rich results & LLM indexing)
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Openlane Documentation',
        url: 'https://docs.theopenlane.io',
      }),
    },

    // Optional: LLM indexing hints
    {
      tagName: 'meta',
      attributes: {
        name: 'llm:content-type',
        content: 'documentation',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'llm:domain',
        content: 'security-compliance',
      },
    },
  ],
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      mermaid: {
        theme: { light: 'neutral', dark: 'dark' },
        options: {
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 14,
          // render at natural size instead of stretching to container width;
          // CSS in custom.css scales oversized diagrams back down
          flowchart: {
            useMaxWidth: false,
            nodeSpacing: 35,
            rankSpacing: 40,
            padding: 8,
          },
          sequence: {
            useMaxWidth: false,
          },
        },
      },
      metadata: [
        { name: 'keywords', content: 'soc2, cyber security, risk management, compliance, audit, openlane, nist, iso27001, fedramp, continuous, grc' },

        // HTML
        { name: 'description', content: 'The Openlane Documentation has everything you need to build and automate your compliance needs.' },
        // Open Graph
        { property: 'og:url', content: 'https://docs.theopenlane.io' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Openlane Documentation' },
        { property: 'og:description', content: 'The Openlane Documentation has everything you need to build and automate your compliance needs.' },
        { property: 'og:image', content: 'https://docs.theopenlane.io/img/openlane_docs.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:domain', content: 'docs.theopenlane.io' },
        { name: 'twitter:url', content: 'https://docs.theopenlane.io' },
        { name: 'twitter:title', content: 'Openlane Documentation' },
        { name: 'twitter:description', content: 'The Openlane Documentation has everything you need to build and automate your compliance needs.' },
        { name: 'twitter:image', content: 'https://docs.theopenlane.io/img/openlane_docs.png' },
      ],
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        hideOnScroll: false,
        title: "",
        logo: {
          alt: "Openlane Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            position: "left",
            label: "Platform",
            items: [
              { label: 'Overview', to: 'docs/platform/overview' },
              { label: 'Automation', to: 'docs/platform/automation/overview' },
              { label: 'Compliance Management', to: 'docs/platform/compliance-management/overview' },
              { label: 'Exposure', to: 'docs/platform/exposure/overview' },
              { label: 'Frameworks & Standards', to: 'docs/platform/standards/overview' },
              { label: 'GRC Fundamentals', to: 'docs/platform/grc-fundamentals/overview' },
              { label: 'Integrations', to: 'docs/platform/integrations/overview' },
              { label: 'Registry', to: 'docs/platform/registry/overview' },
              { label: 'Trust Center', to: 'docs/platform/trust-center/overview' },
              { label: 'Settings', to: 'docs/platform/settings/overview' },
              { label: 'Glossary', to: 'docs/platform/glossary' },
            ],
          },
          {
            type: "dropdown",
            docId: "developers/overview",
            position: "left",
            label: "Developers",
            items: [
              { label: 'Overview', to: 'docs/developers/overview' },
              { label: 'Getting Started', to: 'docs/developers/getting-started/overview' },
              { label: 'Schema & Codegen', to: 'docs/developers/schema-and-codegen/graphql-and-codegen' },
              { label: 'Architecture', to: 'docs/developers/architecture/overview' },
              { label: 'Integrations', to: 'docs/developers/integrations/overview' },
              { label: 'GraphQL Examples', to: 'docs/developers/graphql-examples/overview' },
              { label: 'Security', to: 'docs/developers/security/overview' },
              { label: 'Operations', to: 'docs/developers/operations/overview' },
              { label: 'Contributing', to: 'docs/developers/contributing/overview' },

            ],
          },
          {
            type: 'dropdown',
            label: 'API Specifications',
            position: 'left',
            items: [
              { label: 'GraphQL', to: '/docs/api/graph-api', activeBasePath: '/docs/api/graph-api' },
              { label: 'OpenAPI Spec', to: '/api-reference' },
              { label: 'GraphQL Explorer', to: '/graphql' },
              { label: 'Go Client', href: 'https://github.com/theopenlane/go-client' },
              { label: 'CLI Client', href: 'https://github.com/theopenlane/core/releases' },
            ],
          },
          {
            type: 'dropdown',
            label: 'Support',
            position: 'right',
            items: [
              { label: 'Support Portal', href: 'https://support.devrev.ai/openlane' },
              { label: 'Contact', href: 'https://www.theopenlane.io/company/contact' },
            ],
          },
        ],
      },

      footer: {},

      prism: {
        defaultLanguage: "bash",
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
      },
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // pages removed or moved on feat-docsupdate
          { from: "/docs/platform/compliance-management/evidence/dashboard", to: "/docs/platform/compliance-management/evidence/overview" },
          { from: "/docs/platform/compliance-management/programs/create", to: "/docs/platform/compliance-management/programs/overview" },
          { from: "/docs/platform/integrations/buildkite", to: "/docs/platform/integrations/overview" },
          { from: "/docs/platform/integrations/vercel", to: "/docs/platform/integrations/overview" },
          { from: "/docs/platform/integrations/oidc_generic", to: "/docs/platform/settings/authentication/sso" },
          { from: "/docs/platform/standards/soc2/framework-subject-matter", to: "/docs/platform/standards/soc2/overview" },
          { from: "/docs/platform/standards/soc2/requireddocumentation", to: "/docs/platform/standards/soc2/example-evidence" },
          { from: "/docs/platform/standards/soc2/security-management-procedures", to: "/docs/platform/standards/soc2/overview" },
          // REST API endpoint and schema pages removed in the regenerated spec
          { from: ["/docs/api/rest-api/acme-solver", "/docs/api/rest-api/agent-node-registration", "/docs/api/rest-api/csrf", "/docs/api/rest-api/end-impersonation", "/docs/api/rest-api/example-csv", "/docs/api/rest-api/favicon", "/docs/api/rest-api/file-download"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/git-hub-callback", "/docs/api/rest-api/git-hub-login", "/docs/api/rest-api/google-callback", "/docs/api/rest-api/google-login", "/docs/api/rest-api/graph-ql-query", "/docs/api/rest-api/graph-ql-query-history", "/docs/api/rest-api/jwks", "/docs/api/rest-api/livez"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/o-auth-register", "/docs/api/rest-api/ready", "/docs/api/rest-api/robots", "/docs/api/rest-api/schemas/accountaccessreply", "/docs/api/rest-api/schemas/accountaccessrequest", "/docs/api/rest-api/schemas/accountfeaturesreply"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/schemas/accountrolesorganizationreply", "/docs/api/rest-api/schemas/accountrolesreply", "/docs/api/rest-api/schemas/accountrolesrequest", "/docs/api/rest-api/schemas/createtrustcenteranonymousjwtresponse", "/docs/api/rest-api/schemas/endimpersonationreply", "/docs/api/rest-api/schemas/endimpersonationrequest", "/docs/api/rest-api/schemas/errorresponse", "/docs/api/rest-api/schemas/filedownload"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/schemas/forgotpasswordreply", "/docs/api/rest-api/schemas/forgotpasswordrequest", "/docs/api/rest-api/schemas/getquestionnaireresponse", "/docs/api/rest-api/schemas/group", "/docs/api/rest-api/schemas/invitereply", "/docs/api/rest-api/schemas/itemsperpage", "/docs/api/rest-api/schemas/jobrunnerregistrationreply", "/docs/api/rest-api/schemas/jobrunnerregistrationrequest"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/schemas/listresponseschemas", "/docs/api/rest-api/schemas/loginreply", "/docs/api/rest-api/schemas/loginrequest", "/docs/api/rest-api/schemas/oauthtokenrequest", "/docs/api/rest-api/schemas/patchrequest", "/docs/api/rest-api/schemas/productcatalogreply", "/docs/api/rest-api/schemas/refreshreply", "/docs/api/rest-api/schemas/refreshrequest"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/schemas/registerreply", "/docs/api/rest-api/schemas/registerrequest", "/docs/api/rest-api/schemas/reply", "/docs/api/rest-api/schemas/resendquestionnairerequest", "/docs/api/rest-api/schemas/resendreply", "/docs/api/rest-api/schemas/resendrequest", "/docs/api/rest-api/schemas/resetpasswordreply", "/docs/api/rest-api/schemas/resetpasswordrequest"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/schemas/resourcemetadata", "/docs/api/rest-api/schemas/resourcetype", "/docs/api/rest-api/schemas/schemaattribute", "/docs/api/rest-api/schemas/schemadefinition", "/docs/api/rest-api/schemas/serviceproviderconfig", "/docs/api/rest-api/schemas/ssostatusreply", "/docs/api/rest-api/schemas/ssotokenauthorizereply", "/docs/api/rest-api/schemas/startimpersonationreply"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/schemas/startimpersonationrequest", "/docs/api/rest-api/schemas/startindex", "/docs/api/rest-api/schemas/submitquestionnaireresponse", "/docs/api/rest-api/schemas/switchorganizationreply", "/docs/api/rest-api/schemas/switchorganizationrequest", "/docs/api/rest-api/schemas/tfareply", "/docs/api/rest-api/schemas/tfarequest", "/docs/api/rest-api/schemas/totalresults"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/schemas/user", "/docs/api/rest-api/schemas/verifyreply", "/docs/api/rest-api/schemas/verifysubscribereply", "/docs/api/rest-api/schemas/webauthnbeginloginresponse", "/docs/api/rest-api/schemas/webauthnbeginregistrationresponse", "/docs/api/rest-api/schemas/webauthnloginfinishrequest", "/docs/api/rest-api/schemas/webauthnloginrequest", "/docs/api/rest-api/schemas/webauthnloginresponse"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/schemas/webauthnregistrationfinishrequest", "/docs/api/rest-api/schemas/webauthnregistrationrequest", "/docs/api/rest-api/schemas/webauthnregistrationresponse", "/docs/api/rest-api/security-txt", "/docs/api/rest-api/sso-callback", "/docs/api/rest-api/sso-login", "/docs/api/rest-api/sso-token-authorize", "/docs/api/rest-api/sso-token-callback"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/start-impersonation", "/docs/api/rest-api/tfa-validation", "/docs/api/rest-api/trust-center-anonymous-jwt", "/docs/api/rest-api/web-authn-well-known", "/docs/api/rest-api/webauthn-authentication", "/docs/api/rest-api/webauthn-authentication-verification", "/docs/api/rest-api/webauthn-registration", "/docs/api/rest-api/webauthn-registration-verification"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/webfinger"], to: "/api-reference" },
          // generated per-endpoint pages replaced by the Scalar reference at /api-reference
          { from: "/docs/api", to: "/api-reference" },
          { from: ["/docs/api/rest-api/account-access", "/docs/api/rest-api/account-features", "/docs/api/rest-api/account-features-by-id", "/docs/api/rest-api/account-roles", "/docs/api/rest-api/account-roles-me", "/docs/api/rest-api/account-roles-organization", "/docs/api/rest-api/account-roles-organization-by-id", "/docs/api/rest-api/api-docs"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/assign-organization-roles", "/docs/api/rest-api/configure-integration-provider", "/docs/api/rest-api/create-group", "/docs/api/rest-api/create-user", "/docs/api/rest-api/delete-group", "/docs/api/rest-api/delete-organization-roles", "/docs/api/rest-api/delete-user", "/docs/api/rest-api/disconnect-integration"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/forgot-password", "/docs/api/rest-api/get-group-by-id", "/docs/api/rest-api/get-questionnaire", "/docs/api/rest-api/get-resource-type-by-name", "/docs/api/rest-api/get-resource-types", "/docs/api/rest-api/get-schema-by-uri", "/docs/api/rest-api/get-schemas", "/docs/api/rest-api/get-service-provider-config"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/get-user-by-id", "/docs/api/rest-api/list-groups", "/docs/api/rest-api/list-integration-providers", "/docs/api/rest-api/list-users", "/docs/api/rest-api/login-handler", "/docs/api/rest-api/logout-handler", "/docs/api/rest-api/organization-invite-accept", "/docs/api/rest-api/organization-roles"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/patch-group", "/docs/api/rest-api/patch-user", "/docs/api/rest-api/product-catalog", "/docs/api/rest-api/refresh-handler", "/docs/api/rest-api/register", "/docs/api/rest-api/replace-group", "/docs/api/rest-api/replace-user", "/docs/api/rest-api/resend-email"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/resend-questionnaire-email", "/docs/api/rest-api/reset-password", "/docs/api/rest-api/roles", "/docs/api/rest-api/run-integration-operation", "/docs/api/rest-api/scopes", "/docs/api/rest-api/sso-initiate", "/docs/api/rest-api/submit-questionnaire", "/docs/api/rest-api/switch"], to: "/api-reference" },
          { from: ["/docs/api/rest-api/unsubscribe", "/docs/api/rest-api/user-info", "/docs/api/rest-api/verify-email", "/docs/api/rest-api/verify-subscription"], to: "/api-reference" },
          // generated-index category pages replaced by doc-linked overviews
          { from: "/docs/category/automation", to: "/docs/platform/automation/overview" },
          { from: ["/docs/category/basic-concepts", "/docs/platform/basics/overview"], to: "/docs/platform/settings/overview" },
          { from: ["/docs/category/groups", "/docs/platform/basics/groups/overview"], to: "/docs/platform/settings/groups/overview" },
          { from: "/docs/platform/basics/groups/permissions", to: "/docs/platform/settings/groups/permissions" },
          { from: "/docs/platform/basics/groups/system-managed", to: "/docs/platform/settings/groups/system-managed" },
          { from: "/docs/platform/basics/organizations/overview", to: "/docs/platform/settings/organizations/overview" },
          { from: ["/docs/category/tasks", "/docs/platform/basics/tasks/overview", "/docs/platform/basics/tasks/create"], to: "/docs/platform/automation/tasks" },
          { from: "/docs/category/compliance-management", to: "/docs/platform/compliance-management/overview" },
          { from: "/docs/category/controls", to: "/docs/platform/compliance-management/controls/overview" },
          { from: "/docs/category/evidence", to: "/docs/platform/compliance-management/evidence/overview" },
          { from: ["/docs/category/onboarding", "/docs/platform/compliance-management/onboarding/overview"], to: "/docs/platform/quickstartguide" },
          { from: "/docs/category/programs", to: "/docs/platform/compliance-management/programs/overview" },
          { from: "/docs/category/risks", to: "/docs/platform/exposure/risks/overview" },
          { from: "/docs/category/exposure", to: "/docs/platform/exposure/overview" },
          { from: "/docs/category/integrations", to: "/docs/platform/integrations/overview" },
          { from: "/docs/category/registry", to: "/docs/platform/registry/overview" },
          { from: "/docs/category/security", to: "/docs/platform/settings/overview" },
          { from: "/docs/category/security-1", to: "/docs/developers/security/overview" },
          { from: "/docs/category/authentication", to: "/docs/platform/settings/authentication/overview" },
          { from: "/docs/category/permissions", to: "/docs/platform/settings/authorization/overview" },
          { from: ["/docs/category/compliance-standards", "/docs/category/frameworks--standards"], to: "/docs/platform/standards/overview" },
          { from: "/docs/category/soc-2", to: "/docs/platform/standards/soc2/overview" },
          { from: "/docs/category/iso27001", to: "/docs/platform/standards/iso27001/overview" },
          { from: "/docs/category/nist", to: "/docs/platform/standards/overview" },
          { from: "/docs/category/trust-center", to: "/docs/platform/trust-center/overview" },
          { from: "/docs/category/getting-started", to: "/docs/developers/getting-started/overview" },
          { from: "/docs/category/core-development", to: "/docs/developers/architecture/overview" },
          { from: "/docs/category/integration-providers", to: "/docs/developers/integrations/development/architecture" },
          { from: "/docs/category/operations", to: "/docs/developers/operations/overview" },
          { from: "/docs/category/contributing", to: "/docs/developers/contributing/overview" },
          // flattened single-page standards
          { from: ["/docs/platform/standards/ccm", "/docs/category/ccm-v4"], to: "/docs/platform/standards/ccm/overview" },
          { from: ["/docs/category/cis-benchmarks", "/docs/platform/standards/cis"], to: "/docs/platform/standards/cis/overview" },
          { from: ["/docs/platform/standards/cmmc", "/docs/category/cmmc"], to: "/docs/platform/standards/cmmc/overview" },
          { from: ["/docs/category/gdpr", "/docs/platform/standards/gdpr"], to: "/docs/platform/standards/gdpr/overview" },
          { from: ["/docs/category/hipaa", "/docs/platform/standards/hipaa"], to: "/docs/platform/standards/hipaa/overview" },
          { from: ["/docs/category/pci-dss", "/docs/platform/standards/pcidss"], to: "/docs/platform/standards/pcidss/overview" },
          { from: ["/docs/platform/standards/samm", "/docs/category/samm"], to: "/docs/platform/standards/samm/overview" },
          { from: ["/docs/platform/standards/sox", "/docs/category/sox"], to: "/docs/platform/standards/sox/overview" },
          { from: "/docs/platform/standards/dora", to: "/docs/platform/standards/dora/overview" },
          { from: "/docs/platform/standards/hitrust", to: "/docs/platform/standards/hitrust/overview" },
          // fedramp split into its own directory to host per-control pages
          { from: "/docs/platform/standards/fedramp", to: "/docs/platform/standards/fedramp-rev5-moderate/overview" },
          // NIST consolidation
          { from: "/docs/platform/standards/nist/nist", to: "/docs/platform/standards/overview" },
          { from: ["/docs/platform/standards/nist/80053/overview", "/docs/platform/standards/nist/80053/revision5", "/docs/category/800-53", "/docs/platform/standards/nist-800-53"], to: "/docs/platform/standards/nist-800-53/overview" },
          { from: ["/docs/platform/standards/nist/csf/overview", "/docs/category/csf", "/docs/platform/standards/nist-csf"], to: "/docs/platform/standards/nist-csf/overview" },
          { from: ["/docs/platform/standards/nist/ssdf/overview", "/docs/platform/standards/nist/ssdf/selfattestation", "/docs/category/ssdf", "/docs/platform/standards/nist-ssdf"], to: "/docs/platform/standards/nist-ssdf/overview" },
          // ISO 27001 principles rename
          { from: "/docs/platform/standards/iso27001/iso27001", to: "/docs/platform/standards/iso27001/principles" },
          { from: "/docs/platform/automation/workflows", to: "/docs/platform/automation/workflows/overview" },
          { from: "/docs/platform/automation/workflow-definitions", to: "/docs/platform/automation/workflows/workflow-definitions" },
          { from: "/docs/platform/settings/organizations", to: "/docs/platform/settings/organizations/overview" },
          { from: ["/docs/api/graph-api/queries", "/docs/api/graph-api/mutations", "/docs/api/graph-api/objects", "/docs/api/graph-api/interfaces", "/docs/api/graph-api/enums", "/docs/api/graph-api/inputObjects", "/docs/api/graph-api/scalars"], to: "/docs/api/graph-api/" },
          { from: "/docs/platform/registry/personnel", to: "/docs/platform/registry/personnel/overview" },
          { from: "/docs/platform/registry/directory-sync", to: "/docs/platform/registry/personnel/directory-sync" },
          { from: "/docs/platform/exposure/vulnerabilities", to: "/docs/platform/exposure/vulnerabilities/overview" },
          { from: "/docs/platform/exposure/vulnerability-scanning", to: "/docs/platform/exposure/vulnerabilities/scanning-guidance" },
          // questionnaires category-of-one flattened
          { from: ["/docs/platform/compliance-management/questionnaires/overview", "/docs/category/questionnaires", "/docs/platform/compliance-management/questionnaires"], to: "/docs/platform/automation/assessments" },
          // audit risk analysis merged into a single page
          { from: ["/docs/platform/compliance-management/audit/riskanalysis/overview", "/docs/platform/compliance-management/audit/riskanalysis/riskassessment", "/docs/platform/compliance-management/audit/riskanalysis/riskmitigation", "/docs/category/risk-assessments"], to: "/docs/platform/exposure/risks/risk-management-guide" },
          // custom data merged into a single page
          { from: ["/docs/platform/basics/customdata/customenums", "/docs/platform/basics/customdata/customtags", "/docs/category/custom-data", "/docs/platform/basics/custom-data"], to: "/docs/platform/settings/custom-data" },
          // graphql example pages relocated to the developers section
          { from: "/docs/platform/basics/organizations/graphql", to: "/docs/developers/graphql-examples/organizations" },
          { from: "/docs/platform/basics/groups/graphql", to: "/docs/developers/graphql-examples/groups" },
          { from: "/docs/platform/basics/tasks/graphql", to: "/docs/developers/graphql-examples/tasks" },
          { from: "/docs/platform/compliance-management/controls/graphql", to: "/docs/developers/graphql-examples/controls" },
          { from: "/docs/platform/compliance-management/evidence/graphql", to: "/docs/developers/graphql-examples/evidence" },
          { from: "/docs/platform/compliance-management/programs/graphql", to: "/docs/developers/graphql-examples/programs" },
          { from: "/docs/platform/compliance-management/risk-management/overview-graphql", to: "/docs/developers/graphql-examples/risks" },
          { from: "/docs/platform/security/authorization/graphql", to: "/docs/developers/graphql-examples/permissions" },
          // NIST sub-frameworks pulled up to top-level standards
          { from: "/docs/platform/standards/nist/800-53", to: "/docs/platform/standards/nist-800-53/overview" },
          { from: "/docs/platform/standards/nist/csf", to: "/docs/platform/standards/nist-csf/overview" },
          { from: "/docs/platform/standards/nist/ssdf", to: "/docs/platform/standards/nist-ssdf/overview" },
          { from: "/docs/platform/standards/nist/overview", to: "/docs/platform/standards/overview" },
          // phase C merges: questionnaires into assessments, onboarding dissolved, risks into exposure, guidance under policies
          { from: "/docs/platform/compliance-management/onboarding/controls", to: "/docs/platform/compliance-management/controls/import" },
          { from: "/docs/platform/compliance-management/onboarding/policies", to: "/docs/platform/compliance-management/policy-and-procedure-management/import" },
          { from: ["/docs/platform/compliance-management/risk-management/overview", "/docs/platform/exposure/risks"], to: "/docs/platform/exposure/risks/overview" },
          { from: "/docs/platform/compliance-management/risk-management/risk-management-guide", to: "/docs/platform/exposure/risks/risk-management-guide" },
          { from: "/docs/platform/compliance-management/risk-management/riskmanagement", to: "/docs/platform/exposure/risks/riskmanagement" },
          { from: ["/docs/platform/compliance-management/best-practices", "/docs/platform/compliance-management/best-practices/overview"], to: "/docs/platform/compliance-management/policy-and-procedure-management/policies" },
          { from: "/docs/platform/compliance-management/best-practices/disaster-recovery", to: "/docs/platform/compliance-management/policy-and-procedure-management/disaster-recovery" },
          { from: "/docs/platform/compliance-management/best-practices/business-continuity", to: "/docs/platform/compliance-management/policy-and-procedure-management/business-continuity" },
          // audit prep and generic audit guidance moved to GRC Fundamentals
          { from: "/docs/platform/compliance-management/audit", to: "/docs/platform/grc-fundamentals/audit" },
          { from: "/docs/platform/compliance-management/audit/firms", to: "/docs/platform/grc-fundamentals/audit/firms" },
          { from: "/docs/platform/compliance-management/audit/gapanalysis", to: "/docs/platform/grc-fundamentals/audit/gapanalysis" },
          { from: ["/docs/platform/compliance-management/audit/risk-assessments", "/docs/platform/grc-fundamentals/audit/risk-assessments"], to: "/docs/platform/exposure/risks/risk-management-guide" },
          { from: ["/docs/platform/standards/soc2/planningandprep", "/docs/platform/grc-fundamentals/planningandprep"], to: "/docs/platform/grc-fundamentals/audit" },
          { from: ["/docs/platform/standards/soc2/auditprinciples", "/docs/platform/grc-fundamentals/auditprinciples"], to: "/docs/platform/glossary" },
          { from: "/docs/platform/standards/soc2/auditprocedures", to: "/docs/platform/grc-fundamentals/auditprocedures" },
          { from: "/docs/platform/standards/soc2/conducting-a-soc-2-audit", to: "/docs/platform/grc-fundamentals/audit" },
          // organization-settings renamed to settings; platform security absorbed into it
          { from: "/docs/platform/organization-settings/overview", to: "/docs/platform/settings/overview" },
          { from: "/docs/platform/organization-settings/organizations", to: "/docs/platform/settings/organizations/overview" },
          { from: "/docs/platform/organization-settings/custom-data", to: "/docs/platform/settings/custom-data" },
          { from: "/docs/platform/security/overview", to: "/docs/platform/settings/overview" },
          { from: "/docs/platform/security/authentication/overview", to: "/docs/platform/settings/authentication/overview" },
          { from: "/docs/platform/security/authentication/programmatic", to: "/docs/platform/settings/authentication/programmatic" },
          { from: "/docs/platform/security/authentication/sso", to: "/docs/platform/settings/authentication/sso" },
          { from: "/docs/platform/security/authorization/overview", to: "/docs/platform/settings/authorization/overview" },
          { from: "/docs/platform/security/groups/overview", to: "/docs/platform/settings/groups/overview" },
          { from: "/docs/platform/security/groups/permissions", to: "/docs/platform/settings/groups/permissions" },
          { from: "/docs/platform/security/groups/system-managed", to: "/docs/platform/settings/groups/system-managed" },
          // PAT page merged into the combined token doc
          { from: "/docs/developers/security/personal-access-tokens", to: "/docs/developers/security/api-tokens-and-pats" },
          // CI script inventory page removed
          { from: "/docs/developers/operations/ci-cd-and-buildkite", to: "/docs/developers/operations/overview" },
          // policy tips page absorbed into the policies guide
          { from: "/docs/platform/compliance-management/policy-and-procedure-management/tips", to: "/docs/platform/compliance-management/policy-and-procedure-management/policies" },
          // redundant architecture map and directory-narration pages removed
          { from: ["/docs/developers/core-development/architecture-map", "/docs/developers/core-development/repo-structure", "/docs/developers/core-development/overview"], to: "/docs/developers/architecture/overview" },
          // core-development regrouped: schema/codegen material into a subsection, tenancy into security
          { from: ["/docs/developers/core-development/graphql-and-codegen", "/docs/developers/core-development/schema-and-codegen/graphql-and-codegen"], to: "/docs/developers/schema-and-codegen/graphql-and-codegen" },
          { from: ["/docs/developers/core-development/multi-module-structure", "/docs/developers/core-development/schema-and-codegen/multi-module-structure"], to: "/docs/developers/schema-and-codegen/multi-module-structure" },
          { from: ["/docs/developers/core-development/migrations-and-db", "/docs/developers/core-development/schema-and-codegen/migrations-and-db"], to: "/docs/developers/schema-and-codegen/migrations-and-db" },
          { from: ["/docs/developers/core-development/hooks-and-interceptors", "/docs/developers/core-development/schema-and-codegen/hooks-and-interceptors"], to: "/docs/developers/schema-and-codegen/hooks-and-interceptors" },
          { from: "/docs/developers/core-development/gotchas", to: "/docs/developers/schema-and-codegen/gotchas" },
          { from: "/docs/developers/core-development/request-lifecycle", to: "/docs/developers/architecture/request-lifecycle" },
          { from: "/docs/developers/core-development/workflows-engine", to: "/docs/developers/architecture/workflows-engine" },
          { from: ["/docs/developers/core-development/compliance-objects-reference", "/docs/developers/architecture/compliance-objects-reference"], to: "/docs/developers/graphql-examples/overview" },
          { from: "/docs/developers/core-development/repo-helpers", to: "/docs/developers/architecture/repo-helpers" },
          { from: ["/docs/developers/core-development/tenancy-and-permissions", "/docs/developers/security/tenancy-and-permissions"], to: "/docs/platform/settings/organizations/overview" },
          // SSO operator config moved from integrations to security; product/flow duplication cut
          { from: "/docs/developers/integrations/sso-oidc-providers", to: "/docs/developers/security/sso-configuration" },
        ],
      },
    ],
    [
      "@scalar/docusaurus",
      {
        label: "OpenAPI Spec",
        route: "/api-reference",
        // the navbar link lives in the API Specifications dropdown instead
        showNavLink: false,
        // renderer is copied from node_modules to static/scalar/ by
        // scripts/api-reference-assets.sh so the version is pinned by
        // bun.lock instead of loading latest from jsDelivr
        cdn: "/scalar/standalone.js",
        configuration: {
          // fetched to static/ at build time by the same script; the API
          // 401s cross-origin requests, so a runtime fetch of
          // https://api.theopenlane.io/api-docs only works in production
          sources: [
            {
              url: "/openapi.json",
              // no Scalar-hosted AI agent for this reference
              agent: { disabled: true },
            },
          ],
          hideModels: true,
          mcp: { disabled: true },
          showDeveloperTools: "never",
          // without this, "test request" calls route through Scalar's CORS
          // proxy (proxy.scalar.com), sending tokens through their infra;
          // empty string sends requests straight to api.theopenlane.io
          proxyUrl: "",
          // Inter/Outfit are self-hosted via fontsource; don't pull fonts
          // from the Scalar CDN
          withDefaultFonts: false,
        },
      },
    ],
    [
      'docusaurus-lunr-search',
      {

      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "openlane-workflows-engine",
        sourceBaseUrl: "https://raw.githubusercontent.com/theopenlane/core/refs/heads/main/",
        outDir: "docs/developers/architecture",
        documents: ["internal/workflows/README.md"],
        modifyContent(filename: any, content: any) {
          if (filename.includes("README")) {
            return {
              filename: `workflows-engine.mdx`,
              content: `---
title: Workflows Engine
sidebar_position: 4
description: Architecture of the workflow engine - triggers, conditions, actions, and the event lifecycle
tags:
    - workflows
    - architecture
---

:::info
This page is pulled from [\`internal/workflows/README.md\`](https://github.com/theopenlane/core/blob/main/internal/workflows/README.md) in the core repository, where it is maintained alongside the engine code.
:::

${rewriteRelativeLinks(stripCodeInventoryTables(convertGitHubAlerts(content)), 'https://github.com/theopenlane/core/blob/main/internal/workflows/')}`,
            }
          }
          return undefined
        },
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        name: "openlane-config-reference",
        sourceBaseUrl: "https://raw.githubusercontent.com/theopenlane/core/refs/heads/main/",
        outDir: "docs/developers/operations",
        documents: ["jsonschema/api-docs.md"],
        modifyContent(filename: any, content: any) {
          if (filename.includes("api-docs")) {
            return {
              filename: `configuration-reference.md`,
              content: `---
title: Configuration Reference
sidebar_position: 5
description: Complete generated reference for the core server configuration structure
tags:
    - configuration
    - reference
---

# Configuration Reference

:::info
This reference is generated from the core server's configuration structs and pulled from [\`jsonschema/api-docs.md\`](https://github.com/theopenlane/core/blob/main/jsonschema/api-docs.md) at build time — it always reflects the current configuration surface. For how configuration loads and where secrets belong, see [Config and Secrets](./config-and-secrets.mdx).
:::

${rewriteRelativeLinks(content, 'https://github.com/theopenlane/core/blob/main/jsonschema/').replace(/\[\*\*([^\]]+)\*\*\]\(#[^)]*\)/g, '**$1**')}`,
            }
          }
          return undefined
        },
      },
    ],
  ],
  customFields: {
    pirschKey: process.env.PIRSCH_KEY,
  },
};

export default async function createConfig() {
  return config;
}

// stripCodeInventoryTables removes markdown tables that inventory code
// artifacts (Go files, handler/function names) from ingested README content;
// that detail belongs in the code, not rendered documentation
function stripCodeInventoryTables(str: string) {
  const withoutTables = str.replace(/(?:^\|[^\n]*\|[ \t]*\n)+/gm, (block) => {
    const codeCells = (block.match(/^\|\s*`(?:[\w./-]+\.(?:go|ts|js)|[A-Z][a-z]+[A-Z][A-Za-z]*)`/gm) ?? []).length;
    const goRefs = (block.match(/\.go\b/g) ?? []).length;
    return codeCells >= 2 || goRefs >= 2 ? '' : block;
  });
  // drop headings left with no body after table removal
  return withoutTables.replace(/^#{2,5} [^\n]+\n+(?=#{1,6} )/gm, '');
}

// rewriteRelativeLinks converts relative markdown links/images in remote README
// content into absolute GitHub URLs so they resolve from the docs site
function rewriteRelativeLinks(str: string, baseUrl: string) {
  return str.replace(
    /\]\((?!https?:\/\/|#|mailto:)(\.\/)?([^)\s]+)\)/g,
    (_match, _dot, target) => `](${baseUrl}${target})`,
  )
}

// convertGitHubAlerts rewrites GitHub-style "> [!TIP]" blockquote alerts from
// remote README content into Docusaurus admonitions, which are otherwise
// rendered as literal blockquote text
function convertGitHubAlerts(str: string) {
  const kinds: Record<string, string> = {
    TIP: 'tip',
    NOTE: 'note',
    IMPORTANT: 'info',
    WARNING: 'warning',
    CAUTION: 'danger',
  }
  return str.replace(
    /^> \[!(TIP|NOTE|IMPORTANT|WARNING|CAUTION)\]\n((?:^>.*\n?)*)/gm,
    (_match, kind, body) =>
      `:::${kinds[kind]}\n${body.replace(/^> ?/gm, '')}:::\n`,
  )
}
