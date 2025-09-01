// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { themes as prismThemes } from 'prism-react-renderer';

const path = require('path');

const config: Config = {
  title: "Openlane",
  tagline: "Simplify your compliance journey",
  url: "https://www.theopenlane.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },
  themes: ['docusaurus-theme-openapi-docs', '@docusaurus/theme-mermaid'],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          docItemComponent: "@theme/ApiItem",
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
        theme: { light: 'default', dark: 'forest' },
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
          hideable: true,
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
              { label: 'Basic Concepts', to: 'docs/platform/basics/overview' },
              { label: 'Compliance Management', to: 'docs/platform/compliance-management/overview' },
              { label: 'Trust Center', to: 'docs/platform/trust-center/overview' },
              { label: 'Integrations', to: 'docs/platform/integrations' },
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
              { label: 'Developing', to: 'docs/developers/developing/startup' },
              { label: 'Security', to: 'docs/developers/security/authentication/sso-setup' },
              { label: 'Integrations', to: 'docs/developers/integrations/overview' },
              { label: 'Deployment', to: 'docs/developers/deployment/overview' },
              { label: 'Documentation Contributions', to: 'docs/developers/contributing/references' },

            ],
          },
          {
            type: 'dropdown',
            label: 'API Specifications',
            position: 'left',
            items: [
              { label: 'GraphQL', to: '/docs/api/graph-api', activeBasePath: '/docs/api/graph-api' },
              { label: 'OpenAPI Spec', to: '/docs/api', activeBasePath: '/docs/api/rest-api' },
              { label: 'GraphQL Explorer', to: '/graphql' },
            ],
          },
          {
            href: "https://github.com/theopenlane",
            label: "Github",
            position: "right",
          },
        ],
      },

      footer: {
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Platform',
                href: `/docs/platform/overview`,
              },
              {
                label: 'Developers',
                href: `/docs/developers/overview`,
              },
            ],
          },
          {
            title: 'API',
            items: [
              {
                label: 'GraphQL API Reference',
                to: `/docs/api/graph-api`,
                activeBasePath: `/docs/api/graph-api`,
              },
              {
                label: 'OpenAPI Reference',
                to: `/docs/api`,
                activeBasePath: `/docs/api/rest-api`,
              },
              {
                label: 'Client for Golang',
                href: `https://github.com/theopenlane/core/tree/main/pkg/openlaneclient`,
                target: '_self',
                rel: 'dofollow',
              },
              {
                label: 'CLI Client',
                href: `https://github.com/theopenlane/core/releases`,
                target: '_self',
                rel: 'dofollow',
              },
            ],
          },
          {
            title: 'Help',
            items: [
              {
                label: 'Support',
                href: 'https://support.devrev.ai/openlane',
              },
              {
                href: 'https://www.theopenlane.io/company/contact',
                label: 'Contact',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/theopenlane',
              },
              {
                href: 'https://discord.com/invite/4fq2sxDk7D',
                label: 'Discord',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/theopenlane',
              },
            ],
          },
        ],
        logo: {
          alt: 'Openlane Logo',
          src: 'img/logo_full.png',
          href: 'https://www.theopenlane.io',
          width: 160,
          height: 51,
        },
      },
      prism: {
        defaultLanguage: "bash",
        theme: prismThemes.github,
      },
      languageTabs: [
        {
          language: "curl",
        },
        {
          language: "go",
        },
        {
          language: "python",
        },
        {
          language: "nodejs",
        },
        {
          language: "php",
        },
        {
          language: "java",
        },
        {
          language: "rust",
        },
      ],
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",

        config: {
          v1: {
            /** @type {import('docusaurus-plugin-openapi-docs').Options} */
            specPath: "https://api.theopenlane.io/api-docs",
            outputDir: "docs/api/rest-api",
            showSchemas: true,
            showExtensions: true,
            downloadUrl:
              "https://api.theopenlane.io/api-docs",
            template: path.resolve(__dirname, '../templates/api.mdx'),
            // infoTemplate: path.resolve(__dirname, '../templates/api-info.mdx'),
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "docusaurus-graphql-plugin",
      {
        schema: "https://raw.githubusercontent.com/theopenlane/core/refs/heads/main/internal/graphapi/clientschema/schema.graphql",
        routeBasePath: "/docs/api/graph-api",
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
        name: "openlane-core-startup",
        sourceBaseUrl: "https://raw.githubusercontent.com/theopenlane/core/refs/heads/main/",
        outDir: "docs/developers/developing",
        documents: ["README.md"],
        modifyContent(filename: any, content: any) {
          if (filename.includes("README")) {
            return {
              filename: `startup.mdx`,
              content: `---
sidebar_position: 3
sidebar_label: Server Startup
tags:
    - local
    - development
---

# Server Startup

${excerpt(content, "### Starting the Server", "### Creating Queries in GraphQL")}`,
            }
          }

          // we don't want to modify this item, since it doesn't contain "README" in the name
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

// excerpt grabs a substring from a string between two substrings
// generally used for grabbing a section of a remote markdown file
function excerpt(str: string, startString: string, endString: string) {
  const indexStart = str.indexOf(startString, startString.length)
  const indexEnd = str.indexOf(endString)
  return str.slice(indexStart, indexEnd)
}

