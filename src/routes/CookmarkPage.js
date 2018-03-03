import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import CookmarkContainer from '../containers/CookmarkContainer';
import withAuth from '../hocs/withAuth';

class CookmarkPage extends Component {
  render() {
    return (
      <Layout title="쿡마크">
        <CookmarkContainer />
      </Layout>
    );
  }
}

export default withAuth(CookmarkPage);
