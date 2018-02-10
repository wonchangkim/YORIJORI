import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import MenuHam from './MenuHam';

const WrapMenu = styled.div`
  position: absolute;
  width: 200px;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0px;
`;
const InsideArea = styled.div`
  width: 100px;
  height: 50px;
  background: #B5CB31;
  border-radius: 100px 100px 0 0 ;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  &:hover {
  background : #FDAE22;
  }
  bottom: 0;
  left:50%;
  transform: translateX(-50%);
`;
const OutsideArea = styled.div`
  width: 300px;
  height: 150px;
  background: #19C6B0;
  border-radius: 300px 300px 0 0 ;
  position: absolute;
  bottom: 0;
  left: -50px;
  transform-origin: bottom;
`;

const styles = {
  transition: 'all 500ms cubic-bezier(0.680, -0.550, 0.265, 1.550)',
};

export default class MenuBar extends Component {
  state = {
    opacity: 1,
    transform: 'scale(0.3)',
    click: false,
  }
  onHide() {
    this.setState({
      opacity: 0,
    });
  }
  onShow() {
    this.setState({
      opacity: 1,
    });
  }
  onScale = () => {
    this.setState(prevState => ({
      click: prevState.click ? false : true,
      transform: prevState.click ? 'scale(0.3)' : 'scale(2)',
    }));
  }
  render() {
    return (
      <WrapMenu>
        <OutsideArea style={{ ...styles, ...this.state }} />
        <InsideArea onClick={this.onScale}>
          <MenuHam />
        </InsideArea>
      </WrapMenu>
    );
  }
}
