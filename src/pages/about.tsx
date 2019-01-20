import React from 'react';
import Layout from '../layout/';

export default class About extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
      </Layout>
    );
  }
}
