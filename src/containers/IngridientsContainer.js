import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Camera from '../components/Ui/Camera';
import { ingredientsAdd } from '../ducks/IngredientsAdd';

class IngridientsContainer extends Component {
  render() {
    const { success, ...rest } = this.props;
    if (success) {
      return (
        <Redirect to="/main" />
      );
    }
    return (
      <Camera {...rest} />
    );
  }
}
export default connect(
  // mapStatetoProps
  state => ({
    creating: state.article.creating,
    success: state.article.success,
    errorMessage: state.article.errorMessage,
  }),
  // mapDispatchtoProps
  dispatch => ({
    onSubmit: ({ title, imageUrl }) => {
      dispatch(ingredientsAdd({ title, imageUrl }));
    },
  }),
)(IngridientsContainer);
