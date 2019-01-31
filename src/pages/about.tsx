import React from 'react';
import Layout from '../layout/';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';

export default class About extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <SEO title="Обо мне" pathname="/about" />
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>Обо мне</title>
          <link rel="canonical" href="http://juliaph.ru/about" />
        </Helmet> */}
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
      </Layout>
    );
  }
}
