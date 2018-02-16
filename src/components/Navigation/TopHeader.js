import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import plateTop from '../../assets/images/plateTop.png';

const Wrap = styled.div`
  position : fixed;
  top: 0;
  height: 80px;
  width: 180px;
  background: url(${plateTop}) no-repeat center;
  background-size: 180px;
  text-align: center;
  magin: 0 auto;
  padding: 15px;
  webkit-filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.5));
`;

export default class TopHeader extends Component {
  static defaultProps = {
    titileProps: {},
    accountProps: {},
  }

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
