import React, { Component } from 'react';
import styled from 'styled-components';
import MainLogo from '../components/common/MainLogo';
import SimpleBox from '../components/common/SimpleBox';
import background from '../assets/images/Login-background.png';
import CreateAccountContainer from '../containers/CreateAccountContainer';

const BackGroundImg = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center;
  background-size: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export default class Loginpage extends Component {
  render() {
    return (
      <BackGroundImg>
        <SimpleBox logo={<MainLogo />} body={<CreateAccountContainer />} />
      </BackGroundImg>
    );
  }
}
