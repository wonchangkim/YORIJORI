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
  height: 90px;
  background-color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
`;
const TitleWrap = styled.div`
  float: right;
`;
const TitleStyle = styled.p`
  color: black;
`
export default class ResultRecipeTitle extends Component {
  state = {
    active: true,
  }
  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })

  handelClick = (e, data) => {
    this.setState({
      recipeId: data.value,
    })
    setTimeout(() => {
      console.log(this.state.recipeId);
    }, 100);
    this.props.onDetailRecipe(data.value, data.title);
  }
  render() {
    const { searchRecipeDone, recipeTitle } = this.props;
    return (
      <div>
        <Dimmer
          active={searchRecipeDone}
          onClickOutside={this.handleClose}
          page
        >
          <Header as="h2" icon inverted>
             레시피 검색 결과
            <Header.Subheader>자세히 보기를 클릭하면 상세한 레시피를 볼 수 있습니다.</Header.Subheader>
          </Header>
          {
            recipeTitle.map(({ RECIPE_ID, RECIPE_NM_KO, IMG_URL }) => (
              <div key={RECIPE_ID}>
                <Wrap>
                  <ImgWrap src={IMG_URL} alt="" />
                  <TitleWrap>
                    <TitleStyle>{RECIPE_NM_KO}</TitleStyle>
                    <Button onClick={this.handelClick} title={RECIPE_NM_KO} value={RECIPE_ID}>자세히보기</Button>
                  </TitleWrap>
                </Wrap>
              </div>
            ))
          }
        </Dimmer>
      </div>
    );
  }
}
