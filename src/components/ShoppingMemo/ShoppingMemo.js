import React, { Component } from 'react';
import { Button, Loader } from 'semantic-ui-react';
import styled, { css } from 'styled-components';
import StorageBox from '../common/StorageBox';

const Ulstyle = styled.ul`
  margin: 0;
  padding: 0;
  width: 95%;
`;
const MemoLi = styled.li`
  width: 100%;
  border-radius: 50px;
  border: 1px solid #1CB5AC;
  margin: 5px;
  overflow: hidden;
  list-style-type: none;
  display: inline-block;
`;
const ImgWrapover = styled.div`
  overflow: hidden;
  float: left;
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;
const ImgWrap = styled.img`
  height: 50px;
`;
const Title = styled.span`
  line-height: 50px;
  float: left;
  color: #1CB5AC;
  width: 150px;
`;
const Spanstyleingrediente = styled.div`
  width: 100%;
  border-radius: 20px;
  border: 1px solid #1CB5AC;
`;
const MemolistWrap = styled.div`
  display: inline-block;
  padding: 5px;
`;
const HaveWrap = styled.div`
  background:  #1CB5AC;
  width: 90%;
  padding: 10px;
  margin: 5px auto;
  border-radius: 10px;
  display: inline-block;
`;
const NeedWrap = styled.div`
  display: inline-block;
  margin-top: 10px;
`;
const Spanstyle = styled.span`
  padding: 5px 10px;
  border-radius: 10px;
  background: white;
  float: left;
  margin: 5px;
  ${props => props.have && css`
  background: #1CB5AC;
  color: white;
 `}
`;
const Pstyle = styled.span`
  padding: 5px 10px;
  background: white;
  color:  #1CB5AC;
  margin: 5px;
  border-radius: 10px;
  float: left;
`;
const Btnstyled = styled(Button)`
  float: right;
  height: 50px;
  width: 50px;
  margin: 0 !important;
`;
export default class ShoppingMemo extends Component {
  state = {
    click: false,
  }

  handelClick = (e) => {
    this.setState({
      click: e.target.id,
      show: !this.state.show,
    })
    console.log(this.state.click)
  }
  handeDelete = (e, data) => {
    this.setState({
      deleteClick: !this.state.deleteClick,
      delete: data.id,
    });
    console.log(data);
  }
  handeDeleteChecked = () => {
    console.log('dddd', this.state.delete);
    this.props.memoDelete(this.state.delete);
  }
  handeDeleteCancle = () => {
    this.setState({
      deleteClick: false,
    })
  }
  render() {
    const { shoppingMemolist, ingredients, getshoppingmemo } = this.props;
    const newarry = ingredients.map(({ title: value }) => {
      return value;
    });
    return (
      <StorageBox size="true" >
        <Ulstyle>
          {
            this.state.deleteClick ?
              <div>
                <p>쇼핑메모에서 삭제됩니다.</p>
                <Button onClick={this.handeDeleteChecked}>확인</Button>
                <Button onClick={this.handeDeleteCancle}>취소</Button>
              </div>
              : null
          }
          { shoppingMemolist ?
              Object.entries(shoppingMemolist).map(([recipeid, value]) => (
                <div key={Math.random()} >
                  <MemoLi >
                    <ImgWrapover>
                      <ImgWrap src={value.RECIPE_IMG} id={value.RECIPE_ID} alt="레시피이미지" />
                    </ImgWrapover>
                    <Title id={value.RECIPE_ID} onClick={this.handelClick}>{value.RECIPE_KO}</Title>
                    <Btnstyled circular icon="minus" color="teal" id={value.RECIPE_ID} onClick={this.handeDelete} />
                  </MemoLi>
                  {
                    (Number(this.state.click) === value.RECIPE_ID) && this.state.show ?
                      <Spanstyleingrediente >
                        <HaveWrap>
                          <h4>냉장고재료</h4>
                          {
                            newarry.map(title => (
                              <Pstyle key={Math.random()}>{title}</Pstyle>
                            ))
                          }
                        </HaveWrap>
                        <NeedWrap>
                          <h4>필요한재료</h4>
                          {
                            value.Ingredient.map(({ IRDNT_CPCTY, IRDNT_NM }) => (
                              <MemolistWrap key={Math.random()} >
                                {
                                  newarry.includes(IRDNT_NM) ?
                                    <Spanstyle have>
                                      {IRDNT_NM}{IRDNT_CPCTY}
                                    </Spanstyle>
                                  :
                                    <Spanstyle>
                                      {IRDNT_NM}{IRDNT_CPCTY}
                                    </Spanstyle>
                                }
                              </MemolistWrap>
                              ))
                          }
                        </NeedWrap>
                      </Spanstyleingrediente>
                      : null
                  }
                </div>
              )) : <h4>쇼핑메모가 없습니다.</h4>
          }
        </Ulstyle>
      </StorageBox>
    );
  }
}
