import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import Share from '../components/Share/Share';
import withAuth from '../hocs/withAuth';

class SharePage extends Component {
  render() {
    return (
      <Layout title="레시피공유">
        <Share />
      </Layout>
    );
  }
}
export default withAuth(SharePage);
