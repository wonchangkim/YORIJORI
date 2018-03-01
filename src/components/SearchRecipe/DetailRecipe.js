import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from 'semantic-ui-react';
import CookMarkIcon from '../../assets/icon/cookmark.png';
import CookMarkIconactive from '../../assets/icon/cookmarkactive.png';

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
  margin: 10px 0 0 10px;
  color: black;
`;
const CookMarkIconWrap = styled.label`
  background: url(${CookMarkIcon}) no-repeat center;
  background-size: 40px 70px;
  width: 40px;
  height: 70px;
  position: absolute;
  top: 0;
  right: 20px;

  ${props => props.background && css`
    background: url(${CookMarkIconactive}) no-repeat center;
    background-size: 40px 70px;
  `}
`;
const CookMarkInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding : 0;
  border : 0;
  margin : -1 px;
  overflow : hidden;
  clip : rect(0, 0, 0, 0);
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
  width: 200px;
`;
const InfoWrap = styled.div`
 height: 100px;
 position: relative;
`;
const StepWarp = styled.div`
 margin: 5px 0;
 padding: 10px;
`;
const StepNum = styled.h2`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: RGBA(181, 203, 49, 1.00);
  line-height: 40px;
  text-align: center;
  color: white;
`;
const RecipeIngredientWrap = styled.div`
  padding: 10px;
  display: inline-block;
`;
const InredientWrap = styled.div`
  width: 130px;
  margin: 5px;
  float: left;
`;
const Spanstyle = styled.span`
  margin-right: 15px;
`;
export default class DetailRecipe extends Component {
  state = {
    isChecked: false,
  }
  handleAddCookmark = () => {

  }
  handleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    console.log('CHANGE!');
  }
  render() {
    const { detailRecipe, recipeName, recipeImg, baseRecipe } = this.props;
    return (
      <DetailRecipeWrap>
        <ImgWrap>
          <ImgStyle src={recipeImg} alt="" />
          <InfoWrap>
            <Sumary>서머리</Sumary>
            <TitleStyle>{recipeName}</TitleStyle>
            <div>
              <CookMarkIconWrap htmlFor="checkbox" background={this.state.isChecked} />
              <CookMarkInput id="checkbox" type="checkbox" onChange={this.handleChange} checked={this.state.isChecked} />
            </div>
            <SubInfoWrap>
              <SubInfo>칼로리</SubInfo>
              <SubInfo>4인분</SubInfo>
            </SubInfoWrap>
          </InfoWrap>
        </ImgWrap>
        <RecipeIngredientWrap>
          <h3>요리재료</h3>
          {
            baseRecipe.map(({ ROW_NUM, IRDNT_NM, IRDNT_CPCTY }) => (
              <InredientWrap key={ROW_NUM}>
                <Spanstyle>{IRDNT_NM}</Spanstyle>
                <Spanstyle>{IRDNT_CPCTY}</Spanstyle>
              </InredientWrap>
            ))
          }
        </RecipeIngredientWrap>
        <div>
          {
          detailRecipe.map(({ COOKING_NO, COOKING_DC, STRE_STEP_IMAGE_URL })=> (
            <StepWarp key={COOKING_NO}>
              <StepNum>{COOKING_NO}</StepNum>
              {
                STRE_STEP_IMAGE_URL ?
                  <img src={STRE_STEP_IMAGE_URL} alt="" />
                : null
              }
              <p>{COOKING_DC}</p>
            </StepWarp>
          ))
          }
        </div>
      </DetailRecipeWrap>
    );
  }
}
