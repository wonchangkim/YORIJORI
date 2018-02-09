import React, { Component } from 'react';
import { Button, Icon, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import LoginScreen from '../components/LoginScreen';
import background from '../assets/images/backgroundImg1200.png';
import LoginLogo from '../components/LoginLogo';
import SignupModal from '../components/SignupModal';

const FullHeightGrid = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const OutterGradient = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 47%, rgba(237,237,237,1) 100%);
  box-shadow: 9px 11px 29px -6px rgba(0,0,0,0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InnerGradient = styled.div`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 68%, rgba(245,245,245,1) 80%, rgba(204,204,204,1) 100%);
  box-shadow: inset 2px 2px 8px -6px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default class LogintapScreen extends Component {
  render() {
    return (
      <FullHeightGrid columns={1} centered verticalAlign="top">
        <OutterGradient>
          <InnerGradient>
            <div>
            <LoginLogo />
            <LoginScreen />
              <Button color="google plus">
                <Icon name="google plus" /> 구글 로그인
              </Button>
              <SignupModal />
            </div>
          </InnerGradient>
        </OutterGradient>
      </FullHeightGrid>
    );
  }
}

/* < Tab > <SignupBtn color="olive">회원가입</SignupBtn> < /Tab> */
/* < Tab > <SignupBtn color="olive">회원가입</SignupBtn> < /Tab> */
