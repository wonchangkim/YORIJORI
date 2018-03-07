import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StorageBox from '../components/common/StorageBox';
import { searchDetailRecipe } from '../ducks/Getdatabase';
import ResultRecipeTitle from '../components/SearchRecipe/ResultRecipeTitle';

class ResultRecipeTitleContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }
  render() {
    const { detailRecipeDone } = this.props;
    if (detailRecipeDone) {
      return (
        <Redirect to="/Detailrecipe" />
      );
    }
    return (
      <StorageBox>
        <ResultRecipeTitle {...this.props} />
      </StorageBox>
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
