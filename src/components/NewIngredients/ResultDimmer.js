import React, { Component } from 'react';
import { Button, Loader, Header } from 'semantic-ui-react';
import styled, { css } from 'styled-components';
import labeback from '../../assets/images/check_radio_sheet.png';
import labebacknone from '../../assets/images/check_radio_sheet_none.png';
import StorageBox from '../common/StorageBox';

const Inputradio = styled.input`
  display: none;
`;
const Labelstyle = styled.label`
  font-size: 18px;
  width: 300px;
  height: 40px;
  margin: 5px;
  border-radius: 20px;
  border: 1px solid #1CB5AC;
  line-height: 40px;
  display: block;
`;
const Checkstyle = styled.span`
  display: inline-block;
  width: 19px;
  height: 19px;
  margin:-2px 10px 0 0;
  vertical-align: middle;
  background: url(${labebacknone}) no-repeat center;
  ${props => props.checked && css`
    background: url(${labeback}) no-repeat center;
  `}
`;
const ListWrap = styled.div`

`;
const DimmerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const AddButton = styled(Button)`
  width: 100px;
  height: 100px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);

`

export default class ResultDimmer extends Component {
  state = {
    active: true,
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
      onBtn: true,
    });
    setTimeout(() => {
      console.log(this.state);
    }, 100);
  }
  handelClick = () => {
    this.props.onAdd(this.state.title, this.props.filename, this.props.base64);
  }
  render() {
    const { transResult, success } = this.props;
    const generateKey = (title, index) => {
      return `${title}_${index}`;
    };
    return (
      <StorageBox>
        {
          success ? <Loader active /> : null
        }
        <DimmerWrap>
          <Header as="h2" icon>
            결과중 하나를 선택해주세요.
            <Header.Subheader>냉장고에 추가 됩니다.</Header.Subheader>
          </Header>
          {
          success ? null : transResult.map((title, index) => (
            <ListWrap key={generateKey(title, index)}>
              <Inputradio
                id={index}
                onChange={this.handleChange}
                type="radio"
                value={title}
                name="transdata"
              />
              <Labelstyle htmlFor={index} ><Checkstyle checked={this.state.title === title} />{title}</Labelstyle>
            </ListWrap>
          ))
          }
          { this.state.onBtn ? <AddButton circular color="teal" onClick={this.handelClick}>냉장고에추가하기</AddButton> : null }
        </DimmerWrap>
      </StorageBox>
    );
  }
}
