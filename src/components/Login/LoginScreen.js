import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import background from '../../assets/images/Login-background.png';
import LoginForm from './LoginForm';
import LoginLogo from '../Login/LoginLogo';
import formImg from '../../assets/images/Login-background-form.png';

const FullHeightGrid = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center;
  background-size: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const OutterGradient = styled.div`
  height: 570px;
  background: url(${formImg}) no-repeat center;
  background-size: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const InnerGradient = styled.div`
//   width: 450px;
//   height: 450px;
//   border-radius: 50%;
//   background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 68%, rgba(245,245,245,1) 80%, rgba(204,204,204,1) 100%);
//   box-shadow: inset 2px 2px 8px -6px rgba(0,0,0,0.4);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const ButtonStyle = styled(Button)`
  margin: 10px !important;
  width: 200px;
`;
export default class LoginScreen extends Component {
  static defaultProps = {
    onGoogleLogin: () => {},
    onSignup: () => {},
  }
  render() {
    return (
      <FullHeightGrid centered verticalAlign="top">
        <OutterGradient>
          <LoginLogo />
          <LoginForm />
          <ButtonStyle onClick={this.props.onGoogleLogin} color="google plus">
            <Icon name="google plus" /> 구글계정으로 시작하기
          </ButtonStyle>
        </OutterGradient>
      </FullHeightGrid>
    );
  }
}

/* < Tab > <SignupBtn color="olive">회원가입</SignupBtn> < /Tab> */
/* < Tab > <SignupBtn color="olive">회원가입</SignupBtn> < /Tab> */
