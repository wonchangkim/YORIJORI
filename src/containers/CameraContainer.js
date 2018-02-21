import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getImage } from '../ducks/CameraCapture';
import Camera from '../components/Ui/Camera';

class CameraContainer extends Component {
  render() {
    const { creating, ...rest } = this.props;
    if (creating) {
      return (
        <Redirect to="/Newingredients" {...rest} />
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
    creating: state.CameraCapture.creating,
    success: state.CameraCapture.success,
    imageUrl: state.CameraCapture.imageUrl,
    base64: state.CameraCapture.base64,
  }),
  dispatch => ({
    onCapture: ({ imageUrl, base64 }) => {
      dispatch(getImage({ imageUrl, base64 }));
    },
  }),
)(CameraContainer);

