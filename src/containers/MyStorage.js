import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import Camera from '../components/Ui/Camera';

const Wrapper = styled.div`
  position: relative;
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const FridgeOutter = styled.div`
  width: 90%;
  height: 80%;
  background-color: #FFF;
  border-radius: 50px;
  box-shadow: 7px 9px 8px 0px rgba(0,0,0,0.4);
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
  width: 80%;
  height: 80%;
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
              <p>회원님의 냉장고에는 재료가 아직없습니다.</p>
              <div>
                <Button circular icon="search" color="olive" />
                <Camera />
              </div>
            </Fridge>
          </FridgeInner>
        </FridgeOutter>
      </Wrapper>

    );
  }
}
