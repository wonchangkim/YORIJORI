import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, Googlelogin } from '../ducks/User';
import LoginForm from '../components/Login/LoginForm';


class LoginContianer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      return (
        <Redirect to="/main" />
      );
    }
    return (
      <div>
        <LoginForm {...rest} />
      </div>
    );
  }
}
export default connect(
  state => ({
    user: state.user,
    errorMessage: state.User.errorMessage,
    success: state.User.success,
  }),
  dispatch => ({
    onlogin: ({ email, password }) => {
      dispatch(login({ email, password }));
    },
    onGooglelogin: () => {
      dispatch(Googlelogin());
    },
  }),
)(LoginContianer);

