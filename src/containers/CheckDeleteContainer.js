import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckDelete from '../components/NewIngredients/CheckDelete';
import { deleteDatabase } from '../ducks/Getdatabase';

class CheckDeleteContainer extends Component {
  static defaultProps = {
    onDelete: () => {},
  }
  render() {
    return (
      <CheckDelete {...this.props} />
    );
  }
}

export default connect(
  state => ({
    loading: state.Getdatabase.loading,
    ingredients: state.Getdatabase.ingredients,
  }),
  dispatch => ({
    onDelete: (cardId) => {
      dispatch(deleteDatabase(cardId));
    },
  }),
)(CheckDeleteContainer);
