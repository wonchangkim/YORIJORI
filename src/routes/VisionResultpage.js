import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import VisionResultDimmerContainer from '../containers/VisionResultDimmerContainer';
import withAuth from '../hocs/withAuth';

class VisionResultpage extends Component {
  render() {
    return (
      <Layout title="이미지분석">
        <VisionResultDimmerContainer />
      </Layout>
    );
  }
}

export default withAuth(VisionResultpage);
