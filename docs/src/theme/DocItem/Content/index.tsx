import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Content from '@theme-original/DocItem/Content';
import type ContentType from '@theme/DocItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

type Props = WrapperProps<typeof ContentType>;

const SOC2_CONTROLS_BASE = '/docs/platform/standards/soc2/controls';

const SOC2_CATEGORIES: Record<string, string> = {
  CC: 'security',
  PI: 'processing-integrity',
  A: 'availability',
  C: 'confidentiality',
  P: 'privacy',
};

/**
 * Resolves a compliance ref to a docs page when one exists.
 * SOC 2 criteria refs (CC6.1, A1.2, P4.3) link to their control page under
 * standards/soc2/controls; series refs (CC6) link to the controls index.
 */
function refHref(framework: string, ref: string): string | undefined {
  if (framework !== 'SOC 2') return undefined;
  const criteria = ref.match(/^(CC|PI|A|C|P)(\d+)\.(\d+)$/);
  if (criteria) {
    const [, prefix, major, minor] = criteria;
    return `${SOC2_CONTROLS_BASE}/${SOC2_CATEGORIES[prefix]}/${prefix.toLowerCase()}${major}_${minor}`;
  }
  if (/^(CC|PI|A|C|P)\d+$/.test(ref)) {
    return SOC2_CONTROLS_BASE;
  }
  return undefined;
}

/**
 * Renders the compliance-relevance card at the top of the article column.
 * Driven by page frontmatter:
 *   compliance: ["SOC 2 CC1", "ISO 27001:2022 A.6"]
 * Entries sharing a framework prefix (all tokens except the last) collapse
 * into one chip: "SOC 2 | CC1 CC2 CC7". Bare entries like "HIPAA" stay whole,
 * and a trailing "Clause N" pair stays together as the ref. Refs that map to
 * a docs page (SOC 2 criteria) render as links.
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
    const refLen = tokens.length > 2 && tokens[tokens.length - 2] === 'Clause' ? 2 : 1;
    const framework =
      tokens.length > refLen ? tokens.slice(0, -refLen).join(' ') : entry.trim();
    const ref = tokens.length > refLen ? tokens.slice(-refLen).join(' ') : '';
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
                  <span className="compliance-pill__refs">
                    {refs.map((ref, i) => {
                      const href = refHref(framework, ref);
                      return (
                        <React.Fragment key={ref}>
                          {i > 0 && ' '}
                          {href ? <Link to={href}>{ref}</Link> : ref}
                        </React.Fragment>
                      );
                    })}
                  </span>
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
