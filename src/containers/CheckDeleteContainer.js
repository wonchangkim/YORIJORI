import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CheckDelete from '../components/NewIngredients/CheckDelete';
import { deleteDatabase } from '../ducks/Getdatabase';

class CheckDeleteContainer extends Component {
  static defaultProps = {
    onDelete: () => {},
  }
  render() {
    const { done } = this.props;
    if (done) {
      return (
        <Redirect to="main" />
      );
    }
    return (
      <CheckDelete {...this.props} />
    );
  }
}

export default connect(
  state => ({
    done: state.Getdatabase.done,
    ingredients: state.Getdatabase.ingredients,
  }),
  dispatch => ({
    onDelete: (cardId) => {
      dispatch(deleteDatabase(cardId));
    },
  }),
)(CheckDeleteContainer);
