import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckMemo from '../components/ShoppingMemo/CheckMemo';
import { AddCookmark } from '../ducks/AddFirebaseDb';
import { searchDetailRecipe } from '../ducks/Getdatabase';


class CheckMemoContainer extends Component {

  componentDidMount() {
    // this.props.getingredient();
  }

  render() {
    return (
      <CheckMemo recipeid={this.props.recipeid} {...this.props} />
    );
  }
}

export default connect(
  state => ({
    baserecipeIngredient: state.Getdatabase.baserecipeIngredient,
  }),
  dispatch => ({
    oncheckMemo: (recipeId) => {
      dispatch(searchDetailRecipe(recipeId));
    },
  }),
)(CheckMemoContainer);
