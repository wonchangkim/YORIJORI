import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';

const FormWrap = styled.div`
  width: 250px;
  height: 300px;
`;

const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <FormWrap>
        <Form onSubmit={this.handleSubmit} >
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '이메일을 입력해 주세요.' }],
            })(
              <Input prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="이메일" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '비밀번호를 입력해주세요!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="비밀번호" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: false,
            })(
              <Checkbox>Remember me</Checkbox>,
            )}
            <a href="">비밀번호찾기</a>
            <Button htmlType="submit">로그인</Button>
            <a href="">회원가입</a>
          </FormItem>
        </Form>
      </FormWrap>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;

