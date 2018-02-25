import React, { Component } from 'react';
import styled from 'styled-components';
import SearchingButtonContainer from '../../containers/SearchingButtonContainer';
import VisionResultDimmerContainer from '../../containers/VisionResultDimmerContainer';

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
    const { imageUrl, transResult } = this.props.props;
    return (
      <CardWarp as="div" >
        <VisionResultDimmerContainer />
        <ImageWrap>
          <IngredientImg src={imageUrl} />
        </ImageWrap>
        <FootterWrap>
          <div>
            <p>사진을 검색 하시겠 습니까?</p>
            <SearchingButtonContainer />
            <div>
              {transResult}
            </div>
          </div>
        </FootterWrap>
      </CardWarp>
    );
  }
}
