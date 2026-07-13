import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compliance Management',
    href: '/docs/platform/compliance-management/overview',
    img: require('@site/static/img/compliance-end-to-end-control-mapping.png').default,
    description: (
      <>
        Policies, controls, evidence, and programs in one place. Map controls across the frameworks you pursue and give auditors exactly what they need.
      </>
    ),
  },
  {
    title: 'Registry',
    href: '/docs/platform/registry/overview',
    img: require('@site/static/img/registry_platforms.png').default,
    description: (
      <>
        The system of record for what you operate: assets, vendors, personnel, contacts, and platforms, all tied to your compliance scope.
      </>
    ),
  },
  {
    title: 'Exposure',
    href: '/docs/platform/exposure/overview',
    img: require('@site/static/img/exposure_overview.png').default,
    description: (
      <>
        Scans, vulnerabilities, findings, and remediations feed your risk register, so security work and risk decisions stay connected.
      </>
    ),
  },
  {
    title: 'Trust Center',
    href: '/docs/platform/trust-center/overview',
    img: require('@site/static/img/trust.png').default,
    description: (
      <>
        A public portal for your security posture: share reports, certifications, controls, and subprocessors with customers and prospects.
      </>
    ),
  },
  {
    title: 'Automation',
    href: '/docs/platform/automation/overview',
    img: require('@site/static/img/assessments.png').default,
    description: (
      <>
        Workflows and approvals, attestation and questionnaire campaigns, reusable assessments, and tracked tasks keep recurring work running.
      </>
    ),
  },
  {
    title: 'GRC Fundamentals',
    href: '/docs/platform/grc-fundamentals/overview',
    img: require('@site/static/img/openlane_cloud.png').default,
    description: (
      <>
        The concepts behind the product: what GRC is, how laws, regulations, and frameworks differ, and how to prepare for an audit.
      </>
    ),
  },
];

type FeatureProps = {
  img: string;
  title: string;
  description: React.ReactNode;
  href: string;
};

function Feature({ img, title, description, href }: FeatureProps) {
  return (
    <a href={href} className={styles.cards}>
      <div className={styles.cardImageWrap}>
        <img src={img} alt={title} className={styles.cardImage} />
      </div>
      <div>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.sectionLayoutWrapper}>
      <div className={styles.heroRow}>
        <div className={styles.heroText}>
          <h2 className={styles.sectionTitle}>Openlane Documentation</h2>
          <p className={styles.sectionIntro}>
            Openlane connects your frameworks, controls, and evidence into a single platform. Automate repetitive tasks, eliminate spreadsheets, and manage everything from SOC 2 to ISO 27001 with clarity and confidence.
          </p>
        </div>
      </div>

      {/* Feature cards grid */}
      <div className={styles.cardsGrid}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
