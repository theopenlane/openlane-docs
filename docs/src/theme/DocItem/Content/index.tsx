import React, {type ReactNode} from 'react';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof ContentType>;

/**
 * Renders the compliance-relevance card at the top of the article column.
 * Driven by page frontmatter:
 *   compliance: ["SOC 2 CC1", "ISO 27001 A.6"]
 * Entries sharing a framework prefix (all tokens except the last) collapse
 * into one chip: "SOC 2 | CC1 CC2 CC7". Bare entries like "HIPAA" stay whole.
 *
 * Lives in DocItem/Content (rendered by the openapi theme's ApiItem/Layout)
 * so the card sits inside the article width, under the breadcrumbs and above
 * the title, rather than floating in page chrome.
 */
export default function ContentWrapper(props: Props): ReactNode {
  const {frontMatter} = useDoc() as {frontMatter: {compliance?: string[]}};
  const compliance = frontMatter?.compliance ?? [];

  const groups: {framework: string; refs: string[]}[] = [];
  for (const entry of compliance) {
    const tokens = entry.trim().split(/\s+/);
    const framework = tokens.length > 1 ? tokens.slice(0, -1).join(' ') : entry.trim();
    const ref = tokens.length > 1 ? tokens[tokens.length - 1] : '';
    const existing = groups.find((g) => g.framework === framework);
    if (existing) {
      if (ref) existing.refs.push(ref);
    } else {
      groups.push({framework, refs: ref ? [ref] : []});
    }
  }

  return (
    <>
      {groups.length > 0 && (
        <div className="compliance-card" aria-label="Compliance relevance">
          <span className="compliance-card__label">Compliance relevance</span>
          <div className="compliance-card__groups">
            {groups.map(({framework, refs}) => (
              <span key={framework} className="compliance-pill">
                <strong>{framework}</strong>
                {refs.length > 0 && (
                  <span className="compliance-pill__refs">{refs.join(' ')}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
      <Content {...props} />
    </>
  );
}
