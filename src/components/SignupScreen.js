import React, { Component } from 'react';
import { Segment, Button, Grid, Form, Icon } from 'semantic-ui-react';
import ProfilePicDrop from './ProfilePicDrop';

export default class SignupScreen extends Component {
  render() {
    return (
      <Grid.Column style={{ width: '300px' }}>
        <Segment>
          <Form>
            <ProfilePicDrop />
            <Form.Input label="Email" placeholder="이메일을 입력하세요" />
            <Form.Input label="Password" icon="lock" iconPosition="left" type="password" placeholder="비밀번호를 입력하세요" />
            <Form.Input label="이름" placeholder="이름을 입력하세요" />
            <Button color="olive">회원가입</Button>
          </Form>
        </Segment>
      </Grid.Column>
    );
  }
}
