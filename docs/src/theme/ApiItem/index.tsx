import React, {type ReactNode} from 'react';
import ApiItem from '@theme-original/ApiItem';
import type ApiItemType from '@theme/ApiItem';
import type {WrapperProps} from '@docusaurus/types';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type Props = WrapperProps<typeof ApiItemType>;

/**
 * The classic preset routes every docs page through @theme/ApiItem
 * (docItemComponent in docusaurus.config.ts), so this wrapper — not a
 * DocItem wrapper — is the one that fires on all doc pages.
 *
 * Wraps every docs page with generated schema.org TechArticle JSON-LD derived
 * from frontmatter and git metadata, replacing the hand-pasted <head> blocks
 * that previously lived in individual MDX files (and drifted stale there).
 *
 * Everything here comes from data Docusaurus already maintains per page:
 * title/description from frontmatter, keywords from frontmatter + tags,
 * dateModified from git via showLastUpdateTime.
 */
export default function ApiItemWrapper(props: Props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {metadata, frontMatter} = props.content as any;

  // generated API reference pages carry no metadata title; structured data
  // with an empty headline is worse than none, so skip those pages
  if (!metadata?.title) {
    return <ApiItem {...props} />;
  }

  const keywords: string[] = [
    ...(frontMatter?.keywords ?? []),
    ...(metadata?.tags ?? []).map((t: {label: string}) => t.label),
  ];

  const ld: Record<string, unknown> = {
    '@context': 'https://schema.org/',
    '@type': 'TechArticle',
    headline: metadata.title,
    url: siteConfig.url + metadata.permalink,
    inLanguage: 'en',
    image: `${siteConfig.url}/img/openlane_docs.png`,
    author: {
      '@type': 'Organization',
      name: 'Openlane',
      url: 'https://theopenlane.io/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Openlane',
      url: 'https://theopenlane.io/',
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Openlane Documentation',
      url: siteConfig.url,
    },
  };
  if (metadata.description) {
    ld.description = metadata.description;
  }
  if (keywords.length > 0) {
    ld.keywords = [...new Set(keywords)].join(', ');
  }
  // lastUpdatedAt is epoch milliseconds sourced from git history; absent for
  // untracked files and in some dev-server contexts
  if (metadata.lastUpdatedAt) {
    ld.dateModified = new Date(metadata.lastUpdatedAt).toISOString();
  }

  return (
    <>
      <Head>
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Head>
      <ApiItem {...props} />
    </>
  );
}
