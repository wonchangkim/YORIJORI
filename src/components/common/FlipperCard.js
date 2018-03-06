import onClickOutside from 'react-onclickoutside';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import CheckDeleteContainer from '../../containers/CheckDeleteContainer';

const CardWarp = styled.div`
  width: 120px;
  height: 120px;
  margin: 4px;
  border: 1px solid  #1CB5AC;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
`;
const Flipper = styled.div`
  transition: 0.3s;
  transform-style: preserve-3d;
  position: relative;
`;

const CardFront = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 20px;
  top: 0;
  left: 0;
  z-index: 2;
  backface-visibility: hidden;
`;
const CardBack = styled.div`
  position: absolute;
  border-radius: 20px;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const BackWrap = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 20px;
  z-index: 100;
`;

const Left = styled.div`
  float: left;
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  float: right;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
class FlipperCard extends Component {
  state = {
    transform: '',
    click: false,
    visivle: false,
    deleteDimemr: false,
    addContainer: false,
  }


  handleClick = () => {
    this.setState(prevState => ({
      click: !prevState.click,
      transform: !prevState.visivle ? 'rotateY(180deg)' : 'rotateY(360deg)',
      visivle: !prevState.visivle,

    }));
  }
  handleClickOutside = () => {
    if (this.state.click) {
      this.handleClick();
    }
  }
  handleDelete = () => {
    console.log(this.props);
    this.setState(prevState => ({
      deleteDimemr: !prevState.deleteDimemr,
      checkedtitle: this.props.title,
    }));
    console.log(this.state.deleteDimemr)
  }
  handleAdd = () => {
    this.props.onAddIngredients(this.props.cardId, this.props.imgUrl, this.props.title);
    console.log(this.props.cardId, this.props.title);
    console.log('추가');
  }
  render() {
    const { transform } = this.state;

    return (
      <div>
        {
          this.state.deleteDimemr ? <CheckDeleteContainer checkedtitle={this.state.checkedtitle} onClose={this.handleDelete} {...this.props} /> : null
        }
        <CardWarp>
          <Flipper style={{ transform }} >
            <CardFront onClick={this.handleClick} >
              {this.props.children}
            </CardFront>
            <CardBack>
              <BackWrap>
                <Left onClick={this.handleAdd}>
                  <Icon name="plus circle" color="teal" size="large" />
                </Left>
                <Right onClick={this.handleDelete}>
                  <Icon name="minus circle" color="teal" size="large" />
                </Right>
              </BackWrap>
            </CardBack>
          </Flipper>
        </CardWarp>
      </div>
    );
  }
}
export default onClickOutside(FlipperCard);
