import React, { Component } from 'react';
import styled from 'styled-components';
import MyStorage from '../components/MyStorage';
import Layout from '../components/Layout';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7DAA55;
`;

export default class MainScreenContainer extends Component {
  render() {
    return (
      <Layout title="쿡마크" >
        <Wrap >
          <MyStorage />
        </Wrap>
      </Layout>
    );
  }
}
