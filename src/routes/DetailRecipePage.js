import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import DetailRecipeContainer from '../containers/DetailRecipeContainer';

export default class DetailRecipePage extends Component {
  render() {
    return (
      <Layout title="레시피정보">
        <DetailRecipeContainer />
      </Layout>
    );
  }
}
