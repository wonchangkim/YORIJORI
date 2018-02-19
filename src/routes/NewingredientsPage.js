import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import NewingredientsContainer from '../containers/NewingredientsContainer';

export default class NewingredientsPage extends Component {
  render() {
    return (
      <Layout title="이미지검색">
        <NewingredientsContainer />
      </Layout>
    );
  }
}
