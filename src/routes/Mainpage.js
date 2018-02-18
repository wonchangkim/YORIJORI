import React, { Component } from 'react';
import StorageBox from '../components/common/StorageBox';
import Layout from '../components/common/Layout';


export default class MainScreenContainer extends Component {
  render() {
    return (
      <Layout title="나의냉장고">
        <StorageBox />
      </Layout>
    );
  }
}
