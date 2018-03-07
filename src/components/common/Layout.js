import React, { Component } from 'react';
import styled from 'styled-components';
import TopHeader from '../Navigation/TopHeader';
import Menubar from '../Navigation/MenuBar';

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to right, #00E39F, #00C4E1);
  flex-direction: column;
  align-items: center;
  background-color: #7DAA55;
  padding-bottom: 50px;

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
