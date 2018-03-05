import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import plateTop from '../../assets/images/plateTop.png';

const Wrap = styled.div`
  height: 73px;
  width: 182px;
  background: url(${plateTop}) no-repeat center;
  background-size: 160px 73px;
  text-align: center;
  padding: 15px;
  webkit-filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.8));
`;

export default class TopHeader extends Component {
  render() {
    const { title } = this.props;
    return (
      <Wrap>
        <Header as="h2" size="small">
          {title}
        </Header>
      </Wrap>
    );
  }
}
