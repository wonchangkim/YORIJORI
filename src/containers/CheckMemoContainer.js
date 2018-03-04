import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckMemo from '../components/ShoppingMemo/CheckMemo';
import { searchDetailRecipe, getdataShoppingMemo } from '../ducks/Getdatabase';


class CheckMemoContainer extends Component {
  // componentDidMount() {
  //   this.props.getingredient();
  // }

  render() {
    return (
      <CheckMemo ingredient={this.props.ingredient} {...this.props} />
    );
  }
}

export default connect(
  state => ({
    shoppingMemolist: state.Getdatabase.shoppingMemolist,
  }),
  dispatch => ({
    oncheckMemo: (recipeId) => {
      dispatch(searchDetailRecipe(recipeId));
    },
    getingredient: (recipeId) => {
      dispatch(getdataShoppingMemo(recipeId));
    },
  }),
)(CheckMemoContainer);
