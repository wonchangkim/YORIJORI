import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Wrap = styled.div`
 width: 40px;
 height: 30px;
 background : #FDAE22;
 position: relative;
 margin-bottom: 5px;
`;
const HamTop = styled.div`
  width: 40px;
  height: 4px;
  background: #FFF;
  border-radius: 2px;
  position: absolute;
  top: 0;
`;
const HamMiddle = styled.div `
  width: 40px;
  height: 4px;
  background: #FFF;
  border-radius: 2px ;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;
const HamBottom = styled.div `
  width: 40px;
  height: 4px;
  background: #FFF;
  border-radius: 2px;
  position: absolute;
  bottom: 0;
`;

export default class MenuHam extends Component {
  state = {
    opacity: 1,
    scale: 1,
  }
  onHide() {
    this.setState({
      opacity: 0,
    });
  }
  onShow() {
    this.setState({
      opacity: 1,
    });
  }

  render() {
    return (
      <Wrap>
        <HamTop />
        <HamMiddle />
        <HamBottom />
      </Wrap>
    );
  }
}
