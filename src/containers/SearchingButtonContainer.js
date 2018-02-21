import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchvision } from '../ducks/Fetchvision';
import FootterButton from '../components/NewIngredients/FootterButton';

class SearchingButtonContainer extends Component {
  render() {
    const { ...rest } = this.props;
    return (
      <FootterButton {...rest} />
    );
  }
}


export default connect(
  state => ({
    base64: state.CameraCapture.base64,
  }),
  dispatch => ({
    onfetch: ({ base64 }) => {
      dispatch(fetchvision({ base64 }));
    },
  }),
)(SearchingButtonContainer);
