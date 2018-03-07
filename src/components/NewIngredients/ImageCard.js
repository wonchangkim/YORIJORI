import React, { Component } from 'react';
import styled from 'styled-components';
import SearchingButtonContainer from '../../containers/SearchingButtonContainer';

const CardWarp = styled.div`
  overflow: hidden;
  width: 100%;
  height: 450px;
  position: relative;
`;
const IngredientImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 1px solid #1CB5AC;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FootterWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 20px;
  border: 1px solid #1CB5AC;
  height: 120px;
  padding: 10px;
`;
const Pstyle = styled.span`
  padding: 10px;
`
export default class ImageCard extends Component {
  render() {
    const { imageUrl } = this.props.props;
    return (
      <CardWarp as="div" >
        <ImageWrap>
          <IngredientImg src={imageUrl} />
        </ImageWrap>
        <FootterWrap>
          <Pstyle>사진을 검색 하시겠 습니까?</Pstyle>
          <SearchingButtonContainer />
        </FootterWrap>
      </CardWarp>
    );
  }
}
