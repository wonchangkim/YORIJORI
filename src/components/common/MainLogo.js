import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo350.png';

const Logo = styled.img`
  width: 40px;
  transform: rotate(30deg);
`;
const SubTitle = styled.h3`
  margin: 10px 0 0 0;
  color: #B5CB31;
`;
const MainTitle = styled.h1`
  margin: 0;
  color: #B5CB31;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130px;
`;

export default class MainLogo extends Component {
  render() {
    return (
      <Wrap>
        <Logo src={logo} alt="logo" />
        <SubTitle as="h3" color="olive">오늘은 뭐 먹지? </SubTitle>
        <MainTitle as="h1" color="olive">YORIJORI </MainTitle>
      </Wrap>
    );
  }
}
