import React from 'react';
import Layout from '../layout';

export default class Main extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Layout>
    );
  }
}
