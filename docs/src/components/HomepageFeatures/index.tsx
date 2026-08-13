import React from 'react';
import Icon from './Icon';
import CardArt from './CardArt';
import '../../css/homepage.css';

/* ------------------------------------------------------------------
   All editable content lives here. Artwork lives in CardArt.tsx.
   ------------------------------------------------------------------ */

const HERO = {
  title: 'Openlane Documentation',
  subtitle:
    'Frameworks, controls, and evidence in one platform. Automate the repetitive work, drop the spreadsheets, and run SOC 2 through ISO 27001 with the same set of objects.',
};

type QuickLink = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const QUICK_LINKS: QuickLink[] = [
  {
    icon: 'rocket',
    title: 'Quickstart',
    description: 'First program in 15 minutes',
    href: '/docs/platform/quickstartguide',
  },
  {
    icon: 'book-open',
    title: 'Core concepts',
    description: 'How the objects fit together',
    href: '/docs/platform/overview',
  },
  {
    icon: 'terminal',
    title: 'API & CLI',
    description: 'GraphQL schema, auth, examples',
    href: '/docs/api/graph-api',
  },
];

type AreaLink = {
  label: string;
  href: string;
};

type Area = {
  key: string;
  href: string;
  title: string;
  description: string;
  links: AreaLink[];
};

const AREAS: Area[] = [
  {
    key: 'grc-fundamentals',
    href: '/docs/platform/grc-fundamentals/overview',
    title: 'GRC Fundamentals',
    description:
      'The concepts behind the product: what GRC is, how laws, regulations, and frameworks differ, and how to prepare for an audit.',
    links: [
      { label: 'Law vs. regulation vs. framework', href: '/docs/platform/grc-fundamentals/overview#laws-regulations-and-frameworks' },
      { label: 'Anatomy of a control', href: '/docs/platform/compliance-management/controls/overview' },
      { label: 'How to prepare for an audit', href: '/docs/platform/grc-fundamentals/audit/' },
    ],
  },
  {
    key: 'compliance-management',
    href: '/docs/platform/compliance-management/overview',
    title: 'Compliance Management',
    description:
      'Policies, controls, evidence, and programs in one place — mapped across every framework you pursue.',
    links: [
      { label: 'Build your first program', href: '/docs/platform/compliance-management/programs/overview' },
      { label: 'Map controls to frameworks', href: '/docs/platform/compliance-management/controls/mapping' },
      { label: 'Collect and review evidence', href: '/docs/platform/compliance-management/evidence/overview' },
    ],
  },
  {
    key: 'registry',
    href: '/docs/platform/registry/overview',
    title: 'Registry',
    description:
      'The system of record for what you operate: platforms, assets, vendors, personnel, and contacts.',
    links: [
      { label: 'Model your platforms', href: '/docs/platform/registry/platforms' },
      { label: 'Vendor tiering and reviews', href: '/docs/platform/registry/entities' },
      { label: 'Define compliance scope', href: '/docs/platform/registry/assets' },
    ],
  },
  {
    key: 'exposure',
    href: '/docs/platform/exposure/overview',
    title: 'Exposure',
    description:
      'Scans, vulnerabilities, findings, and remediations feed your risk register, so security work and risk decisions stay connected.',
    links: [
      { label: 'Connect a scanner', href: '/docs/platform/exposure/scans' },
      { label: 'Triage findings', href: '/docs/platform/exposure/findings' },
      { label: 'Score and treat risks', href: '/docs/platform/exposure/risks/overview' },
    ],
  },
  {
    key: 'trust-center',
    href: '/docs/platform/trust-center/overview',
    title: 'Trust Center',
    description:
      'A public portal for your posture: reports, certifications, controls, and subprocessors, gated by NDA when needed.',
    links: [
      { label: 'Publish your trust center', href: '/docs/platform/trust-center/overview' },
      { label: 'Custom domain and branding', href: '/docs/platform/trust-center/custom-domain' },
      { label: 'Gate documents behind an NDA', href: '/docs/platform/trust-center/ndas' },
    ],
  },
  {
    key: 'automation',
    href: '/docs/platform/automation/overview',
    title: 'Automation',
    description:
      'Workflows and approvals, attestation and questionnaire campaigns, and tracked tasks keep recurring work running.',
    links: [
      { label: 'Build a workflow', href: '/docs/platform/automation/workflows/overview' },
      { label: 'Run a campaign', href: '/docs/platform/automation/campaigns' },
      { label: 'Send a questionnaire', href: '/docs/platform/automation/assessments' },
    ],
  },
];

const OSS_LINE = {
  text: 'Openlane is open source. Docs, schema, and issues live on GitHub.',
  href: 'https://github.com/theopenlane',
};

/* ------------------------------------------------------------------
   Layout
   ------------------------------------------------------------------ */

const labelStyle: React.CSSProperties = {
  fontFamily: '\'JetBrains Mono\', monospace',
  fontSize: '12px',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  color: 'var(--dl-fg2)',
};

export default function HomepageFeatures() {
  return (
    <section className="dlSection">

      <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
        <span style={{fontFamily: '\'Outfit\', sans-serif', fontSize: '44px', fontWeight: '600', letterSpacing: '-0.03em', lineHeight: '1.05', color: 'var(--dl-fg)'}}>{HERO.title}</span>
        <span style={{fontSize: '17.5px', lineHeight: '1.55', color: 'var(--dl-fg2)', textWrap: 'pretty'}}>{HERO.subtitle}</span>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
        <span style={labelStyle}>Start here</span>
        <div data-dl-grid="quick" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
          {QUICK_LINKS.map((q) => (
            <a key={q.title} href={q.href} className="dlQuick" style={{color: 'inherit', textDecoration: 'none'}}>
              <span style={{width: '34px', height: '34px', borderRadius: '9px', background: 'var(--dl-accent-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none'}}>
                <Icon n={q.icon} style={{color: 'var(--dl-accent)'}} />
              </span>
              <span style={{flex: '1', minWidth: '0'}}>
                <span style={{display: 'block', fontFamily: '\'Outfit\', sans-serif', fontSize: '15.5px', fontWeight: '600', color: 'var(--dl-fg)'}}>{q.title}</span>
                <span style={{display: 'block', fontSize: '13.5px', color: 'var(--dl-fg2)'}}>{q.description}</span>
              </span>
              <Icon n="arrow-right" style={{color: 'var(--dl-accent)'}} />
            </a>
          ))}
        </div>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '18px'}}>
        <span style={labelStyle}>Explore by area</span>

        <div data-dl-grid="areas" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
          {AREAS.map((area) => (
            <div key={area.key} className="dlCard">
              <a href={area.href} className="dlCardMain">
                <CardArt area={area.key} />
                <span style={{display: 'flex', flexDirection: 'column', gap: '9px', padding: '20px 22px 0'}}>
                  <span style={{fontFamily: '\'Outfit\', sans-serif', fontSize: '18px', fontWeight: '600', color: 'var(--dl-fg)'}}>{area.title}</span>
                  <span style={{fontSize: '14.5px', lineHeight: '1.5', color: 'var(--dl-fg2)', textWrap: 'pretty'}}>{area.description}</span>
                </span>
              </a>
              <span style={{display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto', padding: '12px 22px 22px'}}>
                {area.links.map((link) => (
                  <a key={link.label} href={link.href} className="dlLink">
                    <Icon n="chevron-right" style={{color: 'currentColor', width: '14px', height: '14px'}} />
                    {link.label}
                  </a>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '22px'}}>
        <a href={OSS_LINE.href} className="dlOss">
          {OSS_LINE.text}
          <span style={{color: 'var(--dl-accent)'}}>→</span>
        </a>
      </div>

    </section>
  );
}
