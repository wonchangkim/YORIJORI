import React, { Component } from 'react';
import { Button, Dimmer, Header } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

const ImgWrap = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  float: left;
`;
const Wrap = styled.div`
  width: 90vw;
  height: 100px;
  background-color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  display: inline-block;
`;
const TitleWrap = styled.div`
  float: right;
`;
const TitleStyle = styled.p`
  color: black;
  float: left;
`;
const DimmerWrap = styled.div`
  z-index: 3000;
  width: 100vw;
  padding: 10px;
  text-align: center;
`;
const H4wrap = styled.h4`
  display: block;
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
  handleOpen = () => {
    this.setState({
      active: true,
    });
  }
  handleClose = () => this.setState({ active: false })

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
    const { searchRecipeDone, recipeTitle } = this.props;
    return (
      <DimmerWrap
        onClickOutside={this.handleClose}
      >
        <H4wrap>자세히 보기를 클릭하면 상세한 레시피를 볼 수 있습니다.</H4wrap>
        {
          recipeTitle.map(({ RECIPE_ID, RECIPE_NM_KO, IMG_URL }) => (
            <Wrap key={RECIPE_ID}>
              <ImgWrap src={IMG_URL} alt="" />
              <TitleStyle>{RECIPE_NM_KO}</TitleStyle>
              <Btnstyle circular color="olive" onClick={this.handelClick} title={RECIPE_NM_KO} value={RECIPE_ID} img={IMG_URL}>자세히보기</Btnstyle>
            </Wrap>
          ))
        }
      </DimmerWrap>
    );
  }
}
