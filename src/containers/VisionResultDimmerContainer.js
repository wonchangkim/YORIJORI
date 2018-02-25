import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addDatabase } from '../ducks/AddFirebaseDb';
import ResultDimmer from '../components/NewIngredients/ResultDimmer';

class VisionResultDimmerContainer extends Component {
  render() {
    const { done, ...rest } = this.props;
    if (done) {
      return (
        <Redirect to="main" />
      );
    }
    return (<ResultDimmer {...rest} />);
  }
}

export default connect(
  state => ({
    done: state.AddFirebaseDb.done,
    success: state.Fetchvision.success,
    transResult: state.Fetchvision.transResult,
    filename: state.CameraCapture.filename,
    base64: state.CameraCapture.base64,
  }),
  dispatch => ({
    onAdd: (title, filename, base64) => {
      dispatch(addDatabase(title, filename, base64));
    },
  }),
)(VisionResultDimmerContainer);
