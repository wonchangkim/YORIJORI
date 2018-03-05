import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import ResultRecipeTitleContainer from '../containers/ResultRecipeTitleContainer';

export default class NewingredientsPage extends Component {
  render() {
    return (
      <Layout title="레시피검색결과">
        <ResultRecipeTitleContainer />
      </Layout>
    );
  }
}
