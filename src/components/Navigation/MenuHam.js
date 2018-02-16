import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrap = styled.div`
 width: 40px;
 height: 24px;
 position: relative;
 top: 10px;

 ${props => props.buttonOn && css`
  ${HamTop} {
    transform: rotate(45deg);
    top: 10px;
    transition: 0.2s ease-in-out;
  }
  ${HamBottom} {
    transform: rotate(-45deg);
    bottom: 10px;
    transition: 0.2s ease-in-out;
  }
  ${HamMiddle} {
    opacity: 0;
    transition: 0.2s ease-in-out;
  }
 `}
`;
const HamTop = styled.div`
  width: 40px;
  height: 4px;
  background: #24002E;
  border-radius: 3px;
  position: absolute;
  top: 0;
`;
const HamMiddle = styled.div`
  width: 40px;
  height: 4px;
  background: #24002E;
  border-radius: 2px ;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const HamBottom = styled.div`
  width: 40px;
  height: 4px;
  background: #24002E;
  border-radius: 2px;
  position: absolute;
  bottom: 0;
`;

export default class MenuHam extends Component {
  render() {
    return (
      <Wrap buttonOn={this.props.buttonOn}>
        <HamTop />
        <HamMiddle />
        <HamBottom />
      </Wrap>
    );
  }
}
