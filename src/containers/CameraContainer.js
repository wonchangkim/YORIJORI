import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getImage } from '../ducks/CameraCapture';
import Camera from '../components/Ui/Camera';

class CameraContainer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      return (
        <Redirect to="/Newingredients" />
      );
    }
    return (
      <div>
        <Camera {...rest} />
      </div>
    );
  }
}
export default connect(
  state => ({
    success: state.CameraCapture.success,
    imageUrl: state.CameraCapture.imageUrl,
  }),
  dispatch => ({
    onCapture: ({ imageUrl }) => {
      dispatch(getImage({ imageUrl }));
    },
  }),
)(CameraContainer);

