import { ApolloExplorer } from '@apollo/explorer/react';
import React from 'react';
import Layout from '@theme/Layout';

export default function GrapqhlExplorer() {
    return (
        <Layout title="Graphql" description="Openlane Graphql Explorer">
            <ApolloExplorer
                className='graphql'
                graphRef='Openlane-2fwyqq@12-12-2024'
                persistExplorerState={false}
                initialState={{
                    document: `query Programs {
  programs {
    edges {
      node {
        name
        startDate
        endDate
        description
      }
    }
  }
}
`,
                    variables: {},
                    headers: {
                        'Authorization': 'Bearer YOUR_TOKEN',
                    },
                    displayOptions: {
                        showHeadersAndEnvVars: true,
                        showGlobalHeader: false,
                        docsPanelState: 'open',
                        theme: 'dark',
                    },
                }}

            />
        </Layout >
    );
}