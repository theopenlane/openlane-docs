import React from 'react';
import styles from './styles.module.css';
import { Image } from 'lucide-react';

const FeatureList = [
  {
    title: 'Compliance Management',
    href: '/docs/platform/compliance-management/overview',
    img: require('@site/static/img/compliance-end-to-end-control-mapping.png').default,
    description: (
      <>
        Openlane is a single platform for managing compliance. Track status, assign tasks, and generate reports to show adherence to standards. Grant auditors access to Openlane and save time uploading evidence.
      </>
    ),
  },
  {
    title: 'Policy and Procedure Management',
    href: '/docs/platform/compliance-management/policy-and-procedure-management/policies',
    img: require('@site/static/img/tab_import_documents.png').default,
    description: (
      <>
        We simplify policy creation and management with templates, ai-assisted policy generation, step-by-step policy builder to guide you through customization, and version control to track changes. Plus, we automate employee acceptance tracking and reminders to keep your business running smoothly.
      </>
    ),
  },
  {
    title: 'Trust Center',
    href: '/docs/platform/trust-center/overview',
    img: require('@site/static/img/trust.png').default,
    description: (
      <>
        Openlane's Trust Center gives customers and auditors a real-time view of your security and compliance posture, directly connected to your controls, evidence, and policies.
      </>
    ),
  },
  {
    title: 'Questionnaire Automation',
    href: '/docs/platform/compliance-management/questionnaires/overview',
    img: require('@site/static/img/assessments.png').default,
    description: (
      <>
        Streamline manual, repetitive, and time-consuming tasks with our questionnaire automation. We provide a library of pre-built questionnaires, the ability to create your own, and automate the distribution, collection, and analysis of responses.
      </>
    ),
  },
  {
    title: 'Evidence Collection',
    href: '/docs/platform/compliance-management/evidence/overview',
    img: require('@site/static/img/evidence.png').default,
    description: (
      <>
        Evidence management is a critical component of compliance programs, providing the documentation and artifacts needed to demonstrate compliance with standards and regulations. Openlane's evidence system centralizes the collection, organization, and management of audit evidence.
      </>
    ),
  },
  {
    title: 'Risk Management',
    href: '/docs/platform/exposure/risks',
    img: require('@site/static/img/risks.png').default,
    description: (
      <>
        Streamline risk assessments and corrective actions with automation that ensures timely compliance and proactive issue resolution.
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
      <div>
        <div style={{ height: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
          <img src={img} alt={title} className={styles.cardImage} style={{ maxHeight: '100%', maxWidth: '100%' }} />
        </div>
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
            Openlane connects your frameworks, controls, and evidence into a single platform. Automate repetitive tasks, eliminate spreadsheets, and manage everything from SOC 2 to ISO 27001 with clarity and confidence — built to fit how your team already works, not the other way around.
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
