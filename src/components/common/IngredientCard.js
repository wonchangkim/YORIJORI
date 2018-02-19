import React, { Component } from 'react';
import styled from 'styled-components';
import { Image, Icon } from 'semantic-ui-react';
import myImg from '../../assets/images/square-image.png';

const CardWarp = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  perspective: 1000px;
`;
const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
`;

const CardFront = styled.div`
  position: absolute;
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
const HeaderWrap = styled.div`
  position: absolute;
  background : RGBA(181, 202, 64, 1);
  width: 120px;
  height: 40px;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;
const BackWrap = styled.div`
  width: 120px;
  height: 120px;
  background : RGBA(251, 236, 63, 1.00);

`;
const H5 = styled.h5`
  margin: 10px 0 1px 0;
`;
const Meta = styled.p`
  line-height: 12px;
  font-size: 11px;
  color : #E5E5E5;
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
  display: flex;
  align-items: center;
`;
export default class IngredientCard extends Component {
  state = {
    transform: '',
    click: false,
  }
  handleCilick = () => {
    this.setState(prevState => ({
      click: !prevState.click,
      transform: !prevState.click ? 'rotateY(180deg)' : 'rotateY(360deg)',
    }))
  }
  render() {
    const { transform } = this.state;
    return (
      <CardWarp onClick={this.handleCilick}>
        <Flipper style={{ transform }} >
          <CardFront>
            <Image src={myImg} circular />
            <HeaderWrap>
              <H5>{this.props.title}</H5>
              <Meta>{this.props.date}</Meta>
            </HeaderWrap>
          </CardFront>
          <CardBack>
            <BackWrap>
              <Left>
                <Icon name="plus circle"  size="large"/>
              </Left>
              <Right>
                <Icon name="minus circle" size="large"/>
              </Right>
            </BackWrap>
          </CardBack>
        </Flipper>
      </CardWarp>
    );
  }
}
// 이미지경로 수정
