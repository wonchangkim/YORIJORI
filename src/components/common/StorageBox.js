import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  position: relative;
  width: 98vw;
  height: 98vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
const FridgeOutter = styled.div`
  width: 90%;
  height: 90%;
  background-color: #FFF;
  border-radius: 50px;
  box-shadow: 7px 9px 8px 9px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FridgeInner = styled.div`
  width: 98%;
  height: 98%;
  background-color: #e5e5e5;
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Fridge = styled.div`
  width: 88%;
  height: 88%;
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;


export default class MyStorage extends Component {
  render() {
    return (
      <Wrapper>
        <FridgeOutter>
          <FridgeInner>
            <Fridge>
              {this.props.children}
            </Fridge>
          </FridgeInner>
        </FridgeOutter>
      </Wrapper>

    );
  }
}
