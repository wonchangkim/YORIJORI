import React, { Component } from 'react';
import MyStorage from '../components/MyStorage';
import Layout from '../components/Layout';


export default class MainScreenContainer extends Component {
  render() {
    return (
      <Layout title="나의냉장고">
        <MyStorage />
      </Layout>
    );
  }
}
