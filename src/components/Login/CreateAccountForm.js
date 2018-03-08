import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Form, Button, Message, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

// 스타일
const FormWrap = styled.div`

`;
const BtnStyle = styled(Button)`
  width: 140px;
`;
const GoogleBtnStyle = styled(Button)`
  margin-top: 1em !important;
`;
const Backbtn = styled(Link)`
  width: 140px;
  margin-left: 100px;
  color: #96A929;
  &:hover {
     color: #E64E64;
  }
  &:visited {
    color: #96A929;
  }
`;
export default class CreateAccountForm extends Component {
  static defaultProps = {
    userCreateErrorMessage: '',
    onGooglelogin: () => {},
    onCreate: () => {},
  }

  state = {
    email: '',
    password: '',
    comfirmpassword: '',
  };
  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    });
  }
  handleSubmit = () => {
    this.props.onCreate(this.state);
  }
  handleGooglelogin = () => {
    this.props.onGooglelogin();
  }

  render() {
    const { email, password, comfirmpassword } = this.state;
    const { errorMessage } = this.props;
    return (
      <FormWrap>
        <Form as="div">
          <Form.Field>
            <label>이메일</label>
            <Input icon="mail" iconPosition="left" name="email" value={email} type="text" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>비밀번호</label>
            <Input icon="key" iconPosition="left" name="password" value={password} type="password" onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>비밀번호확인</label>
            <Input icon="key" iconPosition="left" name="comfirmpassword" value={comfirmpassword} type="password" onChange={this.handleChange} />
          </Form.Field>
          <BtnStyle color="olive" type="submit" onClick={this.handleSubmit}>회원가입</BtnStyle>
          <Backbtn to="/login" >뒤로가기</Backbtn>
          {
            errorMessage && (
              <Message negative>
                <Message.Header>전송할 수 없습니다.</Message.Header>
                <p>{errorMessage}</p>
              </Message>)
          }
        </Form>
        <GoogleBtnStyle fluid color="google plus" onClick={this.handleGooglelogin}>
          <Icon name="google plus" /> 구글계정으로 시작하기
        </GoogleBtnStyle>
      </FormWrap>
    );
  }
}
