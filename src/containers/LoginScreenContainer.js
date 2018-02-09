import * as firebase from 'firebase';
import React, { Component } from 'react';
import LogintapScreen from '../components/LogintapScreen';

export default class LoginScreenContainer extends Component {
  handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  };

  render() {
    return (
      <div>
        <LogintapScreen />
      </div>
    );
  }
}
