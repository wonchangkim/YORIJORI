import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import DetailRecipeContainer from '../containers/DetailRecipeContainer';
import withAuth from '../hocs/withAuth';

class DetailRecipePage extends Component {
  render() {
    return (
      <Layout title="레시피정보">
        <DetailRecipeContainer />
      </Layout>
    );
  }
}
export default withAuth(DetailRecipePage);
