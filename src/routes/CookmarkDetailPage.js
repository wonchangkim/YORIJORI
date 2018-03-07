import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import CookmarkDetailContainer from '../containers/CookmarkDetailContainer';
import withAuth from '../hocs/withAuth';

class CookmarkDetailPage extends Component {
  render() {
    return (
      <Layout title="레시피정보">
        <CookmarkDetailContainer />
      </Layout>
    );
  }
}
export default withAuth(CookmarkDetailPage);
