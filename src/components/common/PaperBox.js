import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  background-color: #FFF;
  box-shadow: 7px 9px 8px 9px rgba(0,0,0,0.4);
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 24px;
  color: black;
`;
const List = styled.div`
  ${props => props.bigger && css`
    height: 100%;
  `}
`;
export default class PaperBox extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>

    );
  }
}
