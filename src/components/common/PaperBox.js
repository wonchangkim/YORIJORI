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
