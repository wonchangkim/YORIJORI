import React, { Component } from 'react';
import styled from 'styled-components';
import MyStorage from '../components/MyStorage';
import Layout from '../components/Layout';


export default class MainScreenContainer extends Component {
  render() {
    return (
      <Layout title="쿡마크">
        <MyStorage />
      </Layout>
    );
  }
}
