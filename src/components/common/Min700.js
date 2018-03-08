import React, { Component } from 'react';
import styled from 'styled-components';
import StorageBox from './StorageBox';

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to right, #00E39F, #00C4E1);
  flex-direction: column;
  justify-content: center;
  background-color: #7DAA55;
  padding-bottom: 50px;
  padding: 40px;

   @media only screen and (max-width: 699px) {
    display: none;
  }
`;

export default class Min700 extends Component {
  render() {
    return (
      <Wrap>
        <h1>YORIJORI</h1>
        <p>모바일 회면에 최적화 되었습니다.</p>
        모바일을 이용해서 접속해 주세요.
      </Wrap>
    );
  }
}
