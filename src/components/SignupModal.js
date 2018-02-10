import React, { Component } from 'react';
import { Button, Modal, Segment } from 'semantic-ui-react';
import SignupScreen from './SignupScreen';


export default class SignupModal extends Component {
  render() {
    return (
      <div>
        <Modal size="mini" trigger={<Button color="olive"> 회원가입 </Button>} closeIcon>
          <Modal.Header>회원가입</Modal.Header>
          <Segment >
            <Modal.Content>
              <SignupScreen />
            </Modal.Content>
          </Segment>
        </Modal>
      </div>
    );
  }
}

