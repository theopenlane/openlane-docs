// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Openlane",
  tagline: "Compliance Made Simple",
  url: "https://theopenlane.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          docItemComponent: "@theme/ApiItem",
        },
        blog: {
          showReadingTime: true,
          onInlineAuthors: "ignore",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Openlane",
        logo: {
          alt: "Openlane Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "docs/product_docs/overview",
            position: "left",
            label: "Product Documentation",
          },
          {
            type: "doc",
            docId: "docs/developer_docs/overview",
            position: "left",
            label: "Developer Documentation",
          },
          {
            label: "Openlane API",
            position: "left",
            to: "/docs/api",
          },
          {
            label: "Openlane GraphQL",
            position: "left",
            to: "/graphql",
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'right'
          },
          {
            href: "https://github.com/theopenlane",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} theopenlane, Inc.`,
      },
      prism: {
        prism: {
          additionalLanguages: [
            "go",
            "nodejs",
            "php",
            "java",
            "php",
            "json",
            "bash",
          ],
        },
        languageTabs: [
          {
            highlight: "python",
            language: "python",
            logoClass: "python",
          },
          {
            highlight: "bash",
            language: "curl",
            logoClass: "bash",
          },
          {
            highlight: "go",
            language: "go",
            logoClass: "go",
          },
          {
            highlight: "javascript",
            language: "nodejs",
            logoClass: "nodejs",
          },
        ],
      },
    } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          openlane: {
            specPath: "http://localhost:17608/api-docs",
            outputDir: "docs/api/rest-api",
            downloadUrl:
              "https://api.theopenlane.io/api-docs",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
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
        outDir: "docs/docs/product_docs/01_quickstart",
        documents: ["README.md"],
        modifyContent(filename, content) {
          if (filename.includes("README")) {
            return {
              filename: `startup.md`,
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

  themes: ["docusaurus-theme-openapi-docs"],
  customFields: {
    pirschKey: process.env.PIRSCH_KEY,
  }
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
