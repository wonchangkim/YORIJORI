import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createAccount } from '../ducks/createUser';
import CreateAccountForm from '../components/Login/CreateAccountForm';

export class CreateAccountContainer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      return (
        <Redirect to="main" />
      );
    }
    return (
      <div>
        <CreateAccountForm {...rest} />
      </div>
    );
  }
}

export default connect(
  state => ({
    success: state.createUser.success,
    errorMessage: state.createUser.userCreateErrorMessage,
  }),
  dispatch => ({
    onCreate: ({ email, password, comfirmpassword }) => {
      dispatch(createAccount({ email, password, comfirmpassword }));
    },
  }),
)(CreateAccountContainer);
