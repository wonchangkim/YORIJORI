import * as firebase from 'firebase';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginScreen from '../components/LoginScreen';

export default class LoginScreenContainer extends Component {
  state = {
    redirectToMain: false,
  }
  handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    this.setState({
      redirectToMain: true,
    });
  };

  render() {
    if (this.state.redirectToMain) {
      return (
        <Redirect to="/main" />
      );
    }
    return (
      <div>
        <LoginScreen onGoogleLogin={this.handleGoogleLogin} />
      </div>
    );
  }
}
