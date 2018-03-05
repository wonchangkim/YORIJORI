import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  border: 1px solid #B5CB31;
  border-radius: 50%;;
  height: 250px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
const H2style = styled.h2`
  color: #B5CB31;
  margin: 0;
  padding: 0;
  width: 150px;
`;
const H4style = styled.h4`
  margin: 0;
  padding: 0;
  color: #96A929;
  width: 180px;
`;
export default class NothingIngredients extends Component {
  render() {
    return (
      <Wrap>
        <H2style>냉장고에 재료가 없습니다.</H2style>
        <H4style>카메라 검색을 통해 재료를 추가해 주세요.</H4style>
      </Wrap>
    );
  }
}
