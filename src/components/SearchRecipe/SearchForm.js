import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import { Button } from 'semantic-ui-react';
import Imgloader from '../common/Imgloader';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
const SearchFormOutter = styled.div`
  width: 95%;
  height: 95%;
  background-color: #FFF;
  border-radius: 50px;
  box-shadow: 2px 5px 2px 2px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SearchFormOutterInner = styled.div`
  width: 98%;
  height: 98%;
  background-color: #e5e5e5;
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SearchFormContent = styled.div`
  width: 90%;
  height: 90%;
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
  border-radius: 46px;
  text-align : center;
  position: relative;
`;
const Btnstyle = styled(Button)`
  height: 130px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: inset 2px 5px 2px 2px rgba(0,0,0,0.4);
  ${props => props.right && css`
    right: 10px;
  `}
  ${props => props.left && css`
    left: 10px;
  `}
`;
const SearchdataWrap = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid #1CB5AC;
  border-radius: 20px;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
`;
const TitleWrap = styled.p`
  background: #1CB5AC;
  height: 30px;
  width: 100%;
  position: absolute;
  bottom: 0;
  line-height: 30px;
`;
class SearchForm extends Component {
  state = {
    click: false,
  }
  handleClick = (e, data) => {
    this.setState({
      click: !this.state.click,
    });
    this.props.onSearch(data.id);
  }
  handleClose = () => {
    this.props.onSearchFormOff();
  }
  handleClickOutside = () => {
    this.handleClose();
  }
  render() {
    const { searchData } = this.props;
    const [imgurl, title] = searchData;
    return (
      <Wrapper>
        <SearchFormOutter>
          <SearchFormOutterInner>
            <SearchFormContent>
              <SearchdataWrap>
                <Imgloader src={imgurl} />
                <TitleWrap>{title}</TitleWrap>
              </SearchdataWrap>
              <Btnstyle right="true" id={title} onClick={this.handleClick} color="teal" icon="search" circular />
              <Btnstyle left="true" onClick={this.handleClose}color="teal" icon="close" circular />
            </SearchFormContent>
          </SearchFormOutterInner>
        </SearchFormOutter>
      </Wrapper>
    );
  }
}

export default onClickOutside(SearchForm);
