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
`;
const Spanstyleingrediente = styled.span`
`;

class CheckMemo extends Component {
  state = {
    click: false,
    recipeId: '',
    showlist: false,
  }
  handleClick = (e) => {
    this.setState({
      click: !this.state.click,
      recipeId: Number(e.target.id),
      showlist: true,
    });
    setTimeout(() => {
      if (this.state.showlist) {
        this.props.oncheckMemo(this.state.recipeId);
        console.log('click', this.state.recipeId);
      }
    }, 500);
  }

  render() {
    const { baserecipeIngredient, recipeid } = this.props;
    return (
      <ListWrap>
        <Spanstyle id={recipeid} onClick={this.handleClick}>메모확인</Spanstyle>
        <DetailList style={{ ...styles }} click={this.state.click}>
          {
            baserecipeIngredient.map(({ RECIPE_ID, IRDNT_NM, IRDNT_CPCTY }) => (
              (RECIPE_ID === recipeid) ?
                <InredientWrap key={Math.random()} style={{ ...styles }}>
                  <Spanstyleingrediente>{IRDNT_NM}</Spanstyleingrediente>
                  <Spanstyleingrediente>{IRDNT_CPCTY}</Spanstyleingrediente>
                </InredientWrap> : null
            ))
          }
        </DetailList>
      </ListWrap>

    );
  }
}

export default onClickOutside(CheckMemo);
