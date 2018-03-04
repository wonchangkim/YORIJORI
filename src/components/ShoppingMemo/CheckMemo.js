import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import styled, { css } from 'styled-components';
import onClickOutside from 'react-onclickoutside';

const ListWrap = styled.div`
  position: relative;
`;
const DetailList = styled.div`
  width: 100%;
  height: 0px;
  background: yellow;

`;
const Spanstyle = styled.span`
  width: 50px;
  height: 50px;
  background: blue;
  right: 0;
  top: -50px;
  position: absolute;

`;
const styles = {
  transition: 'all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550)',
};
const InredientWrap = styled.div`
  background: #198998;
  display: none;
  height: 0px;
  ${props => props.show && css`
  display: block;
  height: 60px;
 `}
`;
const Spanstyleingrediente = styled.span`
`;

class CheckMemo extends Component {
  state = {
    click: false,
    recipeId: '',
    showlist: false,
  }
  handleClick = () => {
    this.setState({
      click: !this.state.click,
      showlist: true,
    });
    setTimeout(() => {
      if (this.state.showlist) {
        // this.props.oncheckMemo(this.state.recipeId);
        console.log('click', this.state.recipeId);
      }
    }, 100);
  }
  handleClickOutside = () => {
    if (this.state.click) {
      this.handleClick();
    }
  }
  render() {
    const { ingredient, recipeid } = this.props;

    return (
      <ListWrap>
        <Spanstyle id={recipeid} onClick={this.handleClick}>메모확인</Spanstyle>
        <DetailList style={{ ...styles }} click={this.state.click}>
          {
            ingredient.map(({ IRDNT_CPCTY, IRDNT_NM }) => (
              <InredientWrap key={Math.random()} style={{ ...styles }} show={this.state.click}>
                <Spanstyleingrediente>{IRDNT_NM}</Spanstyleingrediente>
                <Spanstyleingrediente>{IRDNT_CPCTY}</Spanstyleingrediente>
              </InredientWrap>
              ))
          }
        </DetailList>
      </ListWrap>

    );
  }
}

export default onClickOutside(CheckMemo);
