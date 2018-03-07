import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;
const FridgeOutter = styled.div`
  min-width: 95%;
  padding: 5px;
  background-color: #FFF;
  border-radius: 50px;
  box-shadow: 2px 5px 2px 2px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FridgeInner = styled.div`
  padding: 8px;
  min-width: 100%;
  background-color: #e5e5e5;
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Fridge = styled.div`
  padding: 15px;
  min-width: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
  border-radius: 46px;
  text-align : center;
`;

const List = styled.div`
  ${props => props.bigger && css`
    height: 100%;
  `}
`;

export default class StorageBox extends Component {
  render() {
    return (
      <Wrapper>
        <FridgeOutter>
          <FridgeInner>
            <Fridge>
              {
                this.props.children
                ?
                  <List bigger={this.props.size}>
                    {this.props.children}
                  </List>
                : null
              }
            </Fridge>
          </FridgeInner>
        </FridgeOutter>
      </Wrapper>

    );
  }
}
