import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomeGettingStarted from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    null
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Simplify your compliance journey"
    >
      <Head>
        {siteConfig.customFields?.pirschKey
          ? (
            <script
              defer
              src="https://api.pirsch.io/pa.js"
              id="pianjs"
              data-code={siteConfig.customFields.pirschKey}
            ></script>
          ) as React.ReactElement
          : null}
      </Head>
      <HomepageHeader />
      <main>
        <HomeGettingStarted />
      </main>
    </Layout>
  );
}
