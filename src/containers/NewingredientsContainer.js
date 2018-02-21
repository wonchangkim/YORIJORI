import React, { Component } from 'react';
import { connect } from 'react-redux';
import Newingredients from '../components/Newingredients';

class NewingredientsContainer extends Component {
  render() {
    const { ...rest } = this.props;
    return (
      <Newingredients {...rest} />
    );
  }
}


export default connect(state => ({
  imageUrl: state.CameraCapture.imageUrl,
  base64: state.CameraCapture.base64,
  transResult: state.Fetchvision.transResult,
}))(NewingredientsContainer);
