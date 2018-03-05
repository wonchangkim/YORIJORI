import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Newingredients from '../components/Newingredients';

class NewingredientsContainer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      return (
        <Redirect to="visionresult" />
      );
    }
    return (
      <Newingredients {...rest} />
    );
  }
}


export default connect(state => ({
  imageUrl: state.CameraCapture.imageUrl,
  base64: state.CameraCapture.base64,
  transResult: state.Fetchvision.transResult,
  success: state.Fetchvision.success,
}))(NewingredientsContainer);
