import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compliance Automation',
    Svg: require('@site/static/img/visibility.svg').default,
    description: (
      <>
        Automate and scale your compliance program using our pre-built controls (or bring your own) and track their status - plus the progress against mapped frameworks. We support SOC 2, ISO 27001, NIST, and more (or customize your own!) and automate up to 90% of the work associated with them.
      </>
    ),
  },
  {
    title: 'Policy and Procedure Management',
    Svg: require('@site/static/img/document.svg').default,
    description: (
      <>
        We simplify policy creation and management with templates, step-by-step policy builder to guide you through customization, and version control to track changes. Plus, we automate employee acceptance tracking and reminders to keep your business running smoothly.
      </>
    ),
  },
  {
    title: 'Questionnaire Automation',
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
};

function Feature({ Svg, title, description }: FeatureProps) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
