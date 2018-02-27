import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'semantic-ui-react';

const Wrapper = styled.div`
  position: relative;
  width: 98vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;
const SearchFormOutter = styled.div`
  width: 90%;
  height: 90%;
  background-color: #FFF;
  border-radius: 50px;
  box-shadow: 7px 9px 8px 9px rgba(0,0,0,0.4);
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
  width: 88%;
  height: 88%;
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
  border-radius: 30px;
  text-align : center;
`;

export default class SearchForm extends Component {
  handleClick = () => {
    this.props.onSearch(this.props.searchData);
  }
  render() {
    const { searchData } = this.props;
    return (
      <Wrapper>
        <SearchFormOutter>
          <SearchFormOutterInner>
            <SearchFormContent>
              <p>{searchData}</p>
              <Button onClick={this.handleClick}>검색하기</Button>
            </SearchFormContent>
          </SearchFormOutterInner>
        </SearchFormOutter>
      </Wrapper>

    );
  }
}
