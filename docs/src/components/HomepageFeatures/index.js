import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Compliance Modules',
    Svg: require('@site/static/img/visibility.svg').default,
    description: (
      <>
        Get started with our compliance modules, which are designed to help you
        meet your compliance requirements.
      </>
    ),
  },
  {
    title: 'Policy and Procedure Management',
    Svg: require('@site/static/img/document.svg').default,
    description: (
      <>
        Openlane provides a simple and easy-to-use interface to manage your
        policies and procedures along with templates you can import to get you
        started quickly.
      </>
    ),
  },
  {
    title: 'Questionnaire Automation',
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
        Openlane provides a simple and easy-to-use interface to automate your
        questionnaires. You can create, edit, and delete questionnaires with
        ease.
      </>
    ),
  },

];

function Feature({ Svg, title, description }) {
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
