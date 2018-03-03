import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
  }
  handelClick = (e) => {
    this.setState({
      recipeId: Number(e.target.id),
      click: true,
    })
    setTimeout(() => {
      console.log(this.state.recipeId);
      this.props.onClick(this.state.recipeId, this.state.click);
    }, 100)
  }
  render() {
    const { cookmark } = this.props;
    return (
      <StorageBox size="true" >
        <div>
          {
            cookmark.map(({ IMG_URL, RECIPE_ID, RECIPE_NM_KO }) => (
              // <Link to="/cookmarkdetail" key={Math.random()}>
              <CookmarkWrap key={Math.random()} >
                <ImgWrap src={IMG_URL} id={RECIPE_ID} alt="" onClick={this.handelClick} />
                <p>{RECIPE_NM_KO}</p>
              </CookmarkWrap>
              // </Link>
            ))
          }
        </div>
      </StorageBox>
    );
  }
}
