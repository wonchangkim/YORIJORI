import React, { Component } from 'react';
import { Button, Loader } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

const ImgWrap = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  float: left;
`;
const Wrap = styled.div`
  width: 310px;
  height: 100px;
  background-color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
  border-radius: 50px;
  border: 1px solid #1CB5AC;
`;

const TitleStyle = styled.p`
  color: black;
  float: left;
  margin-left: 10px;
  margin-top: 30px;
`;
const DimmerWrap = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H4wrap = styled.h4`
  width: 180px;
`;
const Btnstyle = styled(Button)`
  width: 80px;
  height: 80px;
  float: right;
`;
export default class ResultRecipeTitle extends Component {
  state = {
    active: true,
  }
  handelClick = (e, data) => {
    this.setState({
      recipeId: data.value,
    })
    setTimeout(() => {
      console.log(this.state.recipeId);
    }, 100);
    this.props.onDetailRecipe(data.value, data.title, data.img);
  }
  render() {
    const { recipeTitle, searchRecipeDone } = this.props;
    return (
      <div>
        {
          searchRecipeDone ? <Loader active /> :
          <DimmerWrap>
            <H4wrap>자세히 보기를 클릭하면 상세한 레시피를 볼 수 있습니다.</H4wrap>
            {
              recipeTitle.map(({ RECIPE_ID, RECIPE_NM_KO, IMG_URL }) => (
                <Wrap key={RECIPE_ID}>
                  <ImgWrap src={IMG_URL} alt="" />
                  <TitleStyle>{RECIPE_NM_KO}</TitleStyle>
                  <Btnstyle circular color="teal" onClick={this.handelClick} title={RECIPE_NM_KO} value={RECIPE_ID} img={IMG_URL}>자세히보기</Btnstyle>
                </Wrap>
              ))
            }
          </DimmerWrap>
          }
      </div>
    );
  }
}
