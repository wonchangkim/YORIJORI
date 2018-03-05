import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchDetailRecipe } from '../ducks/Getdatabase';
import ResultRecipeTitle from '../components/SearchRecipe/ResultRecipeTitle';

class ResultRecipeTitleContainer extends Component {
  render() {
    const { detailRecipeDone, recipeTitle } = this.props;
    if (detailRecipeDone) {
      return (
        <Redirect to="/Detailrecipe" />
      );
    }
    if (recipeTitle.length === 0) {
      return (
        <Redirect to="/main" />
      );
    }
    return (
      <ResultRecipeTitle {...this.props} />
    );
  }
}

export default connect(
  state => ({
    detailRecipeDone: state.Getdatabase.detailRecipeDone,
    searchRecipeDone: state.Getdatabase.searchRecipeDone,
    recipeTitle: state.Getdatabase.recipeTitle,
  }),
  dispatch => ({
    onDetailRecipe: (recipeId, recipeName, recipeImg) => {
      dispatch(searchDetailRecipe(recipeId, recipeName, recipeImg));
    },
  }),
)(ResultRecipeTitleContainer);
