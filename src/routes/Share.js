import React, { Component } from 'react';
import MyStorage from '../components/MyStorage';
import Layout from '../components/Layout';

export default class MainScreenContainer extends Component {
  render() {
    return (
      <Layout title="레시피공유" >
        <MyStorage />
      </Layout>
    );
  }
}
