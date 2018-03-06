import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import StorageBox from '../common/StorageBox';

const CookmarkWrap = styled.div`
  float: left;
  margin: 10px;
`;
const ImgWrap = styled.img`
  width: 120px;
`;

export default class Cookmark extends Component {
  state = {
    recipeId: '',
    addMemoe: false,
  }
  handelClick = (e) => {
    this.setState({
      recipeId: Number(e.target.id),
      click: true,
    })
    setTimeout(() => {
      console.log(this.state.recipeId);
      this.props.onClick(this.state.recipeId, this.state.click);
    }, 100);
  }
  handelMemo = (e, data) => {
    this.setState({
      addMemoe: true,
      memoRecipeid: data.id,
      memoRecipeimg: data.img,
      memoRecipeko: data.ko,
    });
    setTimeout(() => {
      this.setState({
        addMemoe: false,
      })
      this.props.onAddshoppingMemo(this.state.memoRecipeid, this.state.memoRecipeimg, this.state.memoRecipeko);
    }, 2000);
    console.log('메모추가');
  }
  render() {
    const { cookmark } = this.props;
    return (
      <StorageBox size="true" >
        <div>
          {this.state.addMemoe ? <p>쇼핑메모에 추가되었습니다</p> : null}
          {
            cookmark.map(({ IMG_URL, RECIPE_ID, RECIPE_NM_KO }) => (
              <CookmarkWrap key={Math.random()} >
                <ImgWrap src={IMG_URL} id={RECIPE_ID} alt="" onClick={this.handelClick} />
                <p>{RECIPE_NM_KO}</p>
                <Button onClick={this.handelMemo} id={RECIPE_ID} img={IMG_URL} ko={RECIPE_NM_KO}>쇼핑메모추가</Button>
              </CookmarkWrap>
            ))
          }
        </div>
      </StorageBox>
    );
  }
}
