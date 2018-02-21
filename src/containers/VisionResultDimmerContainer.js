import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDatabase } from '../ducks/AddFirebaseDb';
import ResultDimmer from '../components/NewIngredients/ResultDimmer';

class VisionResultDimmerContainer extends Component {
  render() {
    const { ...rest } = this.props;
    return (<ResultDimmer {...rest} />);
  }
}

export default connect(state => ({
  success: state.Fetchvision.success,
  transResult: state.Fetchvision.transResult,
}),
dispatch => ({
  onAdd: (title) => {
    dispatch(addDatabase(title));
  },
}),
)(VisionResultDimmerContainer);
