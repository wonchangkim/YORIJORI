import React, { Component } from 'react';
import Layout from '../components/common/Layout';
import MyStorageContainer from '../containers/MyStorageContainer';

export default class MainScreenContainer extends Component {
  render() {
    return (
      <Layout title="나의냉장고">
        <MyStorageContainer />
      </Layout>
    );
  }
}
