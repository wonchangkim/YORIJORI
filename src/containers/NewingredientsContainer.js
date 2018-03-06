import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Newingredients from '../components/Newingredients';

class NewingredientsContainer extends Component {
  render() {
    const { success, imageUrl } = this.props;
    if (!imageUrl) {
      return (
        <Redirect to="/" />
      );
    }
    if (success) {
      return (
        <Redirect to="visionresult" />
      );
    }
    return (
      <Newingredients {...this.props} />
    );
  }
}


export default connect(state => ({
  imageUrl: state.CameraCapture.imageUrl,
  base64: state.CameraCapture.base64,
  transResult: state.Fetchvision.transResult,
  success: state.Fetchvision.success,
}))(NewingredientsContainer);
