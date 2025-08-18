import React from 'react';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compliance Automation',
    href: '/docs/platform/compliance-automation/overview',
    Svg: require('@site/static/img/visibility.svg').default,
    description: (
      <>
        Automate and scale your compliance program using our pre-built controls (or bring your own) and track their status - plus the progress against mapped frameworks. We support SOC 2, ISO 27001, NIST, and more (or customize your own!) and automate up to 90% of the work associated with them.
      </>
    ),
  },
  {
    title: 'Policy and Procedure Management',
    href: '/docs/platform/policy-and-procedure-management/policies',
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
            Get Started
          </a>
        </div>

        <div className={styles.heroVideo}>
          <div className={styles.videoFrame}>
            <iframe
              src="https://customer-z87tlj9ktpj11m2t.cloudflarestream.com/3b146dbe7ac6ca6e831a0151ffb79300/iframe?poster=https%3A%2F%2Fcustomer-z87tlj9ktpj11m2t.cloudflarestream.com%2F3b146dbe7ac6ca6e831a0151ffb79300%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
              loading="lazy"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            ></iframe>
          </div>
          <p className={styles.videoCaption}>Quick demo of Openlane in action.</p>
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