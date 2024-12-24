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
            docId: "overview",
            position: "left",
            label: "Documentation",
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
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'custom-docs',
    //     async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
    //       const sidebarItems = await defaultSidebarItemsGenerator(args);
    //       return capitalizeSidebarItems(sidebarItems);
    //     },
    //   },
    // ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

export default async function createConfig() {
  return config;
}

function capitalizeSidebarItems(items) {
  const result = items.map((item) => {
    if (item.type === 'category') {
      return { ...item, items: capitalizeSidebarItems(item.items) };
    }
    return item;
  });


  return toTitleCase(result);
}


export function toTitleCase(str: string) {
  return str.toLowerCase().split(' ').map((word: string) => {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
