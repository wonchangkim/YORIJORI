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
    const { deleteingredientloading } = this.props;
    if (deleteingredientloading) {
      return (
        <Redirect to="/" refresh="true" />
      );
    }
    return (
      <CheckDelete {...this.props} />
    );
  }
}

export default connect(
  state => ({
    deleteingredientloading: state.Getdatabase.deleteingredientloading,
    ingredients: state.Getdatabase.ingredients,
  }),
  dispatch => ({
    onDelete: (cardId) => {
      dispatch(deleteDatabase(cardId));
    },
  }),
)(CheckDeleteContainer);
