import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compliance Management',
    href: '/docs/platform/compliance-management/overview',
    Svg: require('@site/static/img/visibility.svg').default,
    description: (
      <>
        Automate and scale your compliance program using our pre-built controls (or bring your own) and track their status - plus the progress against mapped frameworks. We support SOC 2, ISO 27001, NIST, and more (or customize your own!).
      </>
    ),
  },
  {
    title: 'Policy and Procedure Management',
    href: '/docs/platform/compliance-management/policy-and-procedure-management/policies',
    Svg: require('@site/static/img/document.svg').default,
    description: (
      <>
        We simplify policy creation and management with templates, step-by-step policy builder to guide you through customization, and version control to track changes. Plus, we automate employee acceptance tracking and reminders to keep your business running smoothly.
      </>
    ),
  },
  {
    title: 'Questionnaire Automation',
    href: '/docs/platform/compliance-management/questionnaires/overview',
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
        Streamline manual, repetitive, and time-consuming tasks with our questionnaire automation. We provide a library of pre-built questionnaires, the ability to create your own, and automate the distribution, collection, and analysis of responses.
      </>
    ),
  },

];
type FeatureProps = {
  Svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: React.ReactNode;
  href: string;
};

function Feature({ Svg, title, description, href }: FeatureProps) {
  return (
    <a href={href} className={styles.cards}>
      <div className={styles.cardIcon}>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.sectionLayoutWrapper}>
      {/* Hero row: text left, video right */}
      <div className={styles.heroRow}>
        <div className={styles.heroText}>
          <h2 className={styles.sectionTitle}>Openlane Documentation</h2>
          <p className={styles.sectionIntro}>
            See how we’re redefining cybersecurity and compliance — with continuous
            monitoring, real-time control checks, and automation that goes beyond
            point-in-time audits.
          </p>
          <ul className={styles.featureBullets}>
            <li>Continuous compliance</li>
            <li>Proactive risk monitoring</li>
            <li>Real-time control validation</li>
          </ul>
          <a href="/docs/platform/overview" className={styles.ctaButton}>
            Getting Started
          </a>

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
