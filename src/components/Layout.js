import React, { Component } from 'react';
import styled from 'styled-components';
import TopHeader from './Navigation/TopHeader';
import Menubar from './Navigation/MenuBar';

const Wrap = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
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
