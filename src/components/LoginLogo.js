import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo350.png';

const Logo = styled.img`
  width: 60px;
  top: -70px;
  left: 10px;
  transform: rotate(30deg);
`;
const SubTitle = styled.h3`
  margin: 20px 0 0 0;
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
  height: 150px;
`;

export default class LoginLogo extends Component {
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
