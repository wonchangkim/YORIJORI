import React, { Component } from 'react';
import { Segment, Button, Grid, Form } from 'semantic-ui-react';
import SignupModal from '../components/SignupModal';

export default class LoginScreen extends Component {
  static defaultProps = {
    onLogin: () => {},
  }
  render() {
    return (
      <Grid.Column style={{ width: '300px' }}>
        <Segment>
          <Form>
            <Form.Input label="Email" placeholder="이메일을 입력하세요" />
            <Form.Input label="Password" type="password" placeholder="비밀번호를 입력하세요" />
            <Button floated="left" color="olive" onClick={this.props.onLogin}>로그인</Button>
            <SignupModal />
          </Form>
        </Segment>
      </Grid.Column>
    );
  }
}
