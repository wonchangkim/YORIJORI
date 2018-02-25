import onClickOutside from 'react-onclickoutside';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const CardWarp = styled.div`
  width: 120px;
  height: 120px;
  margin: 4px;
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
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: RGBA(253, 174, 34, 1.00);
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

const BackWrap = styled.div`
  width: 120px;
  height: 120px;
  background : RGBA(251, 236, 63, 1.00);
  z-index: 100;
`;

const Left = styled.div`
  float: left;
  width: 50%;
  height: 100%;
  background: RGBA(253, 174, 34, 1.00);
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  float: right;
  width: 50%;
  height: 100%;
  background: RGBA(251, 236, 63, 1.00);
`;
class FlipperCard extends Component {
  state = {
    transform: '',
    click: false,
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
  handleDelet = () => {
    // this.props.onDelet();
    console.log('delet');
  }
  render() {
    const { transform } = this.state;
    return (
      <CardWarp ref={(node) => { this.node = node; }}>
        <Flipper style={{ transform }} >
          <CardFront onClick={this.handleClick} >
            {this.props.children}
          </CardFront>
          <CardBack>
            <BackWrap>
              <Left>
                <Icon name="plus circle" size="large" />
              </Left>
              <Right onClick={this.handleDelet}>
                <Icon name="minus circle" size="large" />
              </Right>
            </BackWrap>
          </CardBack>
        </Flipper>
      </CardWarp>
    );
  }
}
export default onClickOutside(FlipperCard);
