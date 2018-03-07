import React, { Component } from 'react';
import styled from 'styled-components';
import { Loader } from 'semantic-ui-react';
import Cookmarkiconcontainer from '../../containers/Cookmarkiconcontainer';
import SimpleContainer from '../common/SimpleContaner';

const DetailRecipeWrap = styled.div`
position: relative;
`;
const ImgWrap = styled.div`
  width: 100%;
  background: white;
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
  width: 230px;
`;
const InfoWrap = styled.div`
 position: relative;
 padding: 10px;
`;
const StepWarp = styled.div`
  width: 300px;
  margin: 5px 0;
  border: 1px solid #1CB5AC;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  display: inlibe-block;
`;
const StepNum = styled.p`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #1CB5AC;
  line-height: 26px;
  text-align: center;
  color: white;
  display: block;
`;

const InredientWrap = styled.div`
  width: 130px;
  margin: 5px;
  float: left;
`;
const Spanstyle = styled.span`
  margin-right: 15px;
`;
const OderImg = styled.img`
  width: 300px;
  display: block;
`;
const OderNumWrap = styled.div`
  padding: 10px;
`

export default class DetailRecipe extends Component {
  state = {
    isChecked: false,
    recipeId: '',
  }

  handleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    setTimeout(() => {
      this.props.onAddCookmark(
        this.state.isChecked,
        this.props.baseRecipe,
        this.props.detailRecipe,
        this.props.baserecipeIngredient,
      );
      console.log(this.state.value)
    }, 100);
  }
  render() {
    const { detailRecipe, baseRecipe, baserecipeIngredient, detailRecipeDone } = this.props;
    const [{ IMG_URL, SUMRY, CALORIE, RECIPE_NM_KO, QNT, COOKING_TIME }] = baseRecipe;
    return (
      <div>
        <DetailRecipeWrap>
          {
            <ImgWrap key={Math.random()}>
              <ImgStyle src={IMG_URL} alt="요리이미지" />
              <InfoWrap>
                <TitleStyle>{RECIPE_NM_KO}</TitleStyle>
                <Sumary>{SUMRY}</Sumary>
                <SubInfoWrap>
                  <SubInfo>{CALORIE}</SubInfo>
                  <SubInfo>{QNT}</SubInfo>
                  <SubInfo>{COOKING_TIME}</SubInfo>
                </SubInfoWrap>
                <Cookmarkiconcontainer {...this.props} />
              </InfoWrap>
            </ImgWrap>
          }
        </DetailRecipeWrap>
        <SimpleContainer>
          <h3>요리재료</h3>
          {
            !detailRecipeDone ?
            baserecipeIngredient.map(({ IRDNT_NM, IRDNT_CPCTY }) => (
              <InredientWrap key={Math.random()}>
                <Spanstyle>{IRDNT_NM}</Spanstyle>
                <Spanstyle>{IRDNT_CPCTY}</Spanstyle>
              </InredientWrap>
            )) : <Loader active />
          }
        </SimpleContainer>
        <SimpleContainer>
          <h3>요리방법</h3>
          {
            !detailRecipeDone ?
          detailRecipe.map(({ COOKING_NO, COOKING_DC, STRE_STEP_IMAGE_URL }) => (
            <StepWarp key={Math.random()}>
              {
                STRE_STEP_IMAGE_URL ?
                  <OderImg src={STRE_STEP_IMAGE_URL} alt="요리순서이미지" />
                : null
              }
              <OderNumWrap>
                <StepNum>{COOKING_NO}</StepNum>
                <p>{COOKING_DC}</p>
              </OderNumWrap>
            </StepWarp>
          )) : <Loader active />
          }
        </SimpleContainer>
      </div>

    );
  }
}
