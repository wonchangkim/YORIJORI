import React, { Component } from 'react';
import styled from 'styled-components';
import Dimmer from '../common/Dimmer';

const LoginModalWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 40;
`;
const LoginModalOutter = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(238,238,238,1) 0%,rgba(238,238,238,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eeeeee', endColorstr='#eeeeee',GradientType=1 );
  box-shadow: 1px 1px 4px 4px rgba(0,0,0,0.2);
  z-index: 50;
`;
const LoginModalInner = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(249,252,247,1) 0%,rgba(245,249,240,1) 100%);
  ilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9fcf7', endColorstr='#f5f9f0',GradientType=1 );
  z-index: 51;
  text-align: center;
`;
const LoginModalTitle = styled.h1`
  font-size: 12px;
`
class LoginModal extends Component {
  render() {
    return (
      <LoginModalWrapper>
        <LoginModalOutter>
          <LoginModalInner>
            <h4>로그인</h4>

          </LoginModalInner>
        </LoginModalOutter>
        <Dimmer />
      </LoginModalWrapper>
    );
  }
}

export default LoginModal;
