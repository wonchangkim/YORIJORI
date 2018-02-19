import React, { Component } from 'react';
import { connect } from 'react-redux';
import Newingredients from '../components/Newingredients';

class NewingredientsContainer extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <Newingredients imageUrl={imageUrl} />
    );
  }
}


export default connect(
  state => ({
    imageUrl: state.CameraCapture.imageUrl,
  }),
  null,
)(NewingredientsContainer);
