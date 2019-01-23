import React from 'react';
import Layout from '../layout/';

export default class NotFoundPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
  }
}