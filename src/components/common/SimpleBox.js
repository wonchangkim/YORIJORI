import React, { Component } from 'react';
import styled from 'styled-components';

const OutterGradient = styled.div`
  width: 530px;
  height: 530px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 68%, rgba(245,245,245,1) 80%, rgba(204,204,204,1) 100%);
  box-shadow: 2px 5px 8px 3px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const InnerGradient = styled.div`
  width: 430px;
  height: 430px;
  border-radius: 50%;
  background: radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 68%, rgba(245,245,245,1) 80%, rgba(204,204,204,1) 100%);
  box-shadow: inset 2px 2px 8px -6px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default class SimpleBox extends Component {
  render() {
    return (
      <OutterGradient>
        <InnerGradient>
          {this.props.logo}
          {this.props.body}
        </InnerGradient>
      </OutterGradient>
    );
  }
}
