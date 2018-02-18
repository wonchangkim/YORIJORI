import React, { Component } from 'react';
import styled from 'styled-components';
import TopHeader from '../Navigation/TopHeader';
import Menubar from '../Navigation/MenuBar';
import MianbackgroungImg from '../../assets/images/mainbackground.png';

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background: url(${MianbackgroungImg}) no-repeat center;
  background-size: 400px;
  flex-direction: column;
  align-items: center;
  background-color: #7DAA55;
`;
export default class Layout extends Component {
  render() {
    return (
      <Wrap>
        <TopHeader title={this.props.title} />
        {this.props.children}
        <Menubar />
      </Wrap>
    );
  }
}
