import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  console.log("key" + siteConfig.customFields.pirschKey);
  console.log("customFields" + JSON.stringify(siteConfig.customFields));

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Compliance made simple"
    >
      <Head>
        {siteConfig.customFields.pirschKey && (
          <script defer src="https://api.pirsch.io/pa.js"
            id="pianjs"
            data-dev="docs.theopenlane.io"
            data-code={siteConfig.customFields.pirschKey}></script>
        )}
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
