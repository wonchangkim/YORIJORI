import React, { Component } from 'react';
import styled from 'styled-components';
import FootterButton from './FootterButton';

const CardWarp = styled.div`
  border-radius: 30px !important;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;
const IngredientImg = styled.img`
  width: 100%;
  height: 100%;
`;
const HeaderWrap = styled.div`
  background: RGBA(181, 203, 49, 0.7);
  height: 40px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const H5 = styled.h5`
  margin: 10px 0 1px 0;
`;
const ImageWrap = styled.div`
  position: relative;
  height: 70%;
`;
const FootterWrap = styled.div`
  background: RGBA(251, 236, 63, 1.00);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
`;
export default class ImageCard extends Component {
  render() {
    const { imageUrl, base64 } = this.props;
    return (
      <CardWarp as="div" >
        <ImageWrap>
          <IngredientImg src={imageUrl} />
        </ImageWrap>
        <FootterWrap>
          <div>
            <p>사진을 검색 하시겠 습니까?</p>
            <FootterButton />
          </div>
        </FootterWrap>
      </CardWarp>
    );
  }
}
