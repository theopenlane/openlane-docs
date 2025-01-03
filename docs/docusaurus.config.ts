// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Openlane",
  tagline: "Compliance Made Simple",
  url: "https://www.theopenlane.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  markdown: {
    mermaid: true,
  },
  themes: ["docusaurus-theme-openapi-docs", "@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          docItemComponent: "@theme/ApiItem",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
        theme: { light: 'neutral', dark: 'forest' },
      },
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      navbar: {
        hideOnScroll: true,
        title: "",
        logo: {
          alt: "Openlane Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "docs/platform/overview",
            position: "left",
            label: "Platform",
          },
          {
            type: "doc",
            docId: "docs/developers/overview",
            position: "left",
            label: "Developers",
          },
          {
            label: "API Specifications",
            position: "left",
            to: "/docs/api",
          },
          {
            label: "GraphQL Explorer",
            position: "left",
            to: "/graphql",
          },
          {
            href: "https://github.com/theopenlane",
            label: "Github",
            position: "right",
          },
        ],
      },
      footer: {
        logo: {
          alt: 'Openlane Logo',
          src: 'img/logo.svg',
          href: 'https://www.theopenlane.io',
          width: 160,
          height: 51,
        },
        links: [
        ],
      },
      prism: {
        prism: {
          additionalLanguages: [
            "go",
            "nodejs",
            "php",
            "java",
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
            specPath: "https://api.theopenlane.io/api-docs",
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
        outDir: "docs/docs/developers/developing",
        documents: ["README.md"],
        modifyContent(filename, content) {
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
    test: process.env.PUBLIC_EXAMPLE,
    pirschKey: process.env.PIRSCH_KEY,
    anotherTest: process.env.REACT_APP_ANOTHER_TEST,
  }
};

export default async function createConfig() {
  console.log("process env", process.env)

  return config;
}

// excerpt grabs a substring from a string between two substrings
// generally used for grabbing a section of a remote markdown file
function excerpt(str: string, startString: string, endString: string) {
  const indexStart = str.indexOf(startString, startString.length)
  const indexEnd = str.indexOf(endString)
  return str.slice(indexStart, indexEnd)
}
