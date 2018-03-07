import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import ResultRecipeTitleContainer from '../containers/ResultRecipeTitleContainer';
import withAuth from '../hocs/withAuth';

class NewingredientsPage extends Component {
  render() {
    return (
      <Layout title="레시피검색결과">
        <ResultRecipeTitleContainer />
      </Layout>
    );
  }
}
export default withAuth(NewingredientsPage);
