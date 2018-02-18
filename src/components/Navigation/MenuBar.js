import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import MenuHam from '../Navigation/MenuHam';
import ProfileImg from '../../assets/images/profileImg.png';


const WrapMenu = styled.div`
  position: fixed;
  width: 200px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const InsideArea = styled.div`
  height: 50px;
  width: 100px;
  background: #FFF;
  border-radius: 0 0 50px 50px ;
  position: absolute;
  bottom: 0;
  transform: rotate(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OutsideArea = styled.div`
  width: 340px;
  height: 170px;
  background: #B5CA40;
  border-radius: 340px 340px 0 0 ;
  position: absolute;
  bottom: 0;
  transform-origin: bottom;
`;

const ProfileWrap = styled.img`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
`;
const Btn = styled(Link)`
 width: 50px;
 height: 50px;
 border-radius: 50%;
 background: #FFFB52;
 display: block;
 text-align: center;
 line-height: 50px;
 position: absolute;

 ${props => props.first && css`
    background: white;
    color: palevioletred;
    top: 80px;
    left: 40px;
  `}
 ${props => props.second && css`
  background: white;
  color: palevioletred;
  top: 40px;
  left: 90px;
 `}
 ${props => props.third && css`
  background: white;
  color: palevioletred;
  top: 40px;
  right: 90px;
 `}
  ${props => props.fourth && css`
  background: white;
  color: palevioletred;
  top: 80px;
  right: 40px;
 `}
`;
const styles = {
  transition: 'all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550)',
};


export default class MenuBar extends Component {
  state = {
    transform: 'scale(0.1)',
    buttonOn: false,
  }
  onScale = () => {
    this.setState(prevState => ({
      click: !prevState.click,
      transform: prevState.click ? 'scale(0.1)' : 'scale(1)',
      buttonOn: !prevState.click,
    }));
  }

  render() {
    const { transform } = this.state;
    return (
      <WrapMenu>
        <OutsideArea style={{ ...styles, transform }}>
          <ProfileWrap src={ProfileImg} />
          <Btn to="main" first="true">메인</Btn>
          <Btn to="cookmark" second="true">쿡마크</Btn>
          <Btn to="memo" third="true">메모</Btn>
          <Btn to="share" fourth="true">쉐어</Btn>
          <Btn to="imageSearch" >카메라</Btn>
        </OutsideArea>
        <InsideArea onClick={this.onScale}>
          <MenuHam buttonOn={this.state.buttonOn} />
        </InsideArea>
      </WrapMenu>
    );
  }
}
