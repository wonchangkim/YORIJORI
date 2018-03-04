import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import StorageBox from '../common/StorageBox';
import CheckMemoContainer from '../../containers/CheckMemoContainer';

const Ulstyle = styled.ul`
  margin: 0;
  padding: 0;
  width: 280px;
`;
const MemoLi = styled.li`
  width: 100%;
  background: red;
  list-style-type: none;
  display: inline-block;
`;
const ImgWrap = styled.img`
  float: left;
  height: 50px;
`;
const Title = styled.span`
  line-height: 50px;
`;

export default class ShoppingMemo extends Component {
  state = {
    click: false,
  }
  render() {
    const { shoppingMemolist } = this.props;
    return (
      <StorageBox size="true" >
        <div>
          <div>
            냉장고 재료
          </div>
          <Ulstyle>
            { shoppingMemolist ?
              Object.entries(shoppingMemolist).map(([recipeid, value]) => (
                <MemoLi key={Math.random()} >
                  <ImgWrap src={value.RECIPE_IMG} id={value.RECIPE_ID} alt="" onClick={this.handelClick} />
                  <Title>{value.RECIPE_KO}</Title>
                  <CheckMemoContainer recipeid={value.RECIPE_ID} />
                </MemoLi>
              )) : <p>없음</p>
            }
          </Ulstyle>
        </div>
      </StorageBox>
    );
  }
}
