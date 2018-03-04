import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import ShoppingMemoContainer from '../containers/ShoppingMemoContainer';
import withAuth from '../hocs/withAuth';

class ShoppingMemoPage extends Component {
  render() {
    return (
      <Layout title="쇼핑메모">
        <ShoppingMemoContainer />
      </Layout>
    );
  }
}

export default withAuth(ShoppingMemoPage);
