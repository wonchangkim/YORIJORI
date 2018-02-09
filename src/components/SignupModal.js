import React, { Component } from 'react';
import { Button, Modal, Icon, Header, Image } from 'semantic-ui-react';
import SignupScreen from './SignupScreen';
import ModalImg from '../assets/images/modalImg.png';


export default class SignupModal extends Component {
  render() {
    return (
      <div>
        <Modal trigger={ <Button color="olive"> 회원가입 </Button>} >
          <Modal.Header>회원가입</Modal.Header>
          <Modal.Content image>
            <SignupScreen />
            <Modal.Description>
              <Image src={ModalImg} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

