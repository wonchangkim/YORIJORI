import React, { Component } from 'react';
import styled from 'styled-components';
import MyStorage from '../components/MyStorage';
import SearchImage from '../containers/SearchImage';
import Layout from '../components/Layout';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7DAA55;
`;

export default class ImageSearch extends Component {
  render() {
    return (
      <Layout title="재료찾기" >
        <Wrap>
          <MyStorage />
        </Wrap>
      </Layout>
    );
  }
}
