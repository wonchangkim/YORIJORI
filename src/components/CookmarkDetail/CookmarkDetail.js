import React, { Component } from 'react';
import styled from 'styled-components';

const DetailRecipeWrap = styled.div`
  position: relative;

`;
const ImgWrap = styled.div`
  width: 100%;
  background: RGBA(229, 229, 229, 1.00);
`;
const ImgStyle = styled.img`
  width: 100%;
  display: block;
`;
const TitleStyle = styled.h2`
  width: 200px;
  margin: 10px 0 10px 0px;
  color: black;
`;

const SubInfoWrap = styled.div`
  display: block;
  margin: 5px 0 0 10px;
`;
const SubInfo = styled.p`
  display: inline-block;
  padding: 5px 10px 5px 10px;
  background: RGBA(181, 203, 49, 1.00);
  border-radius: 12px;
  margin: 0 5px 0 0;
  font-size: 9px;
`;
const Sumary = styled.p`
  margin: 0 0 0 10px;
  display: block;
  width: 280px;
`;
const InfoWrap = styled.div`
 position: relative;
 padding: 10px;
`;

export default class CookmarkDetail extends Component {
  state = {
    isChecked: false,
  }
  render() {
    const { detail } = this.props;
    const { baseReciperesult } = detail;
    const { IMG_URL, RECIPE_NM_KO, SUMRY, CALORIE, QNT, COOKING_TIME } = baseReciperesult;
    return (
      <DetailRecipeWrap>
        <ImgWrap>
          <ImgStyle src={IMG_URL} alt="" />
          <InfoWrap>
            <TitleStyle>{RECIPE_NM_KO}</TitleStyle>
            <Sumary>{SUMRY}</Sumary>
            <SubInfoWrap>
              <SubInfo>{CALORIE}</SubInfo>
              <SubInfo>{QNT}</SubInfo>
              <SubInfo>{COOKING_TIME}</SubInfo>
            </SubInfoWrap>
          </InfoWrap>
        </ImgWrap>
      </DetailRecipeWrap>
    );
  }
}
