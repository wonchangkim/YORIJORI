import React, { Component } from 'react';
import { Button, Loader } from 'semantic-ui-react';
import styled from 'styled-components';
import StorageBox from '../common/StorageBox';
import Cookmarkiconcontainer from '../../containers/Cookmarkiconcontainer';

const CookmarkWrap = styled.div`
  width: 300px;
  height: 90px;
  overflow: hidden;
  margin: 5px;
  background: white;
  display: inline-block;
  position: relative;
  border: 1px solid #1CB5AC;
  border-radius: 20px;

`;
const ImgWrap = styled.img`
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`;
const TitleWrap = styled.span`
  position: absolute;
  left: 10px;
  top: 10px;
  background: #1CB5AC;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
`;
const BtnStyle = styled(Button)`
  position: absolute;
  width: 70px;
  height: 70px;
  top: 50%;
  transform: translateY(-50%);
`;
const Addedshoppingmemo = styled.span`
  position: absolute;
  z-index: 3000;
  width: 200px;
  height: 90px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: white;
  line-height: 90px;
  border: 1px solid #1CB5AC;
  border-radius: 20px;
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
      });
      this.props.onAddshoppingMemo(this.state.memoRecipeid, this.state.memoRecipeimg, this.state.memoRecipeko);
    }, 1);
    console.log('메모추가');
  }
  render() {
    const { cookmark, ingredientsNull, shoppingMemoDone } = this.props;
    return (
      <StorageBox size="true" >
        {
          ingredientsNull ? <p>쿡마크가 없습니다.</p> :
          <div>
            { shoppingMemoDone ?
              <Addedshoppingmemo>
                <Loader active inline="centered" />쇼핑메모 추가중..
              </Addedshoppingmemo>
              : null
            }
            {
              cookmark.map(({ IMG_URL, RECIPE_ID, RECIPE_NM_KO, isChecked }) => (
                <CookmarkWrap key={Math.random()} >
                  <ImgWrap src={IMG_URL} id={RECIPE_ID} alt="" onClick={this.handelClick} />
                  <TitleWrap>{RECIPE_NM_KO}</TitleWrap>
                  <BtnStyle circular onClick={this.handelMemo} id={RECIPE_ID} img={IMG_URL} ko={RECIPE_NM_KO}>쇼핑메모추가</BtnStyle>
                  <Cookmarkiconcontainer ischecked={isChecked} />
                </CookmarkWrap>
              ))
            }
          </div>
        }
      </StorageBox>
    );
  }
}
