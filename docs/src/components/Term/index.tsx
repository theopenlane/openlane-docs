import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import glossary from '@site/src/data/glossary.json';

type Props = {
  /** glossary slug, e.g. "subprocessor", "carve-out-method" */
  t: string;
  children?: ReactNode;
};

/**
 * Glossary term with a hover tooltip showing the definition, linked to the
 * glossary page. Definitions come from src/data/glossary.json, generated
 * from the glossary page by scripts/glossary-data.mjs (runs during build).
 *
 *   import Term from '@site/src/components/Term';
 *
 *   Every <Term t="subprocessor">subprocessor</Term> should be under a DPA.
 *
 * Unknown slugs render children as plain text so a renamed glossary entry
 * degrades gracefully rather than breaking the page.
 */
export default function Term({t, children}: Props) {
  const entry = (glossary as Record<string, {term: string; def: string}>)[t];
  if (!entry) {
    return <>{children ?? t}</>;
  }
  return (
    <Link
      to="/docs/platform/glossary"
      className="glossary-term"
      data-tooltip={entry.def}
      aria-label={`Glossary: ${entry.term}`}
    >
      {children ?? entry.term}
    </Link>
  );
}
