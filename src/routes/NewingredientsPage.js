import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import NewingredientsContainer from '../containers/NewingredientsContainer';
import withAuth from '../hocs/withAuth';

class NewingredientsPage extends Component {
  render() {
    return (
      <Layout title="이미지검색">
        <NewingredientsContainer />
      </Layout>
    );
  }
}

export default withAuth(NewingredientsPage);
