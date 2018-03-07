import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PaperBox from '../components/common/PaperBox';
import DetailRecipe from '../components/SearchRecipe/DetailRecipe';
import { AddCookmark } from '../ducks/AddFirebaseDb';
import { clickcookmarkDone } from '../ducks/Getdatabase';

class DetailRecipeContainer extends Component {
  componentDidMount() {
    this.props.clickcookmarkDone();
  }
  render() {
    const { detailRecipe } = this.props;
    // if (detailRecipe.length === 0) {
    //   return (
    //     <Redirect to="/main" />
    //   )
    // }
    return (
      <div>
        <DetailRecipe {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => ({
    recipeName: state.Getdatabase.recipeName,
    detailRecipe: state.Getdatabase.detailRecipe,
    recipeImg: state.Getdatabase.recipeImg,
    baserecipeIngredient: state.Getdatabase.baserecipeIngredient,
    baseRecipe: state.Getdatabase.baseRecipe,
    detailRecipeDone: state.Getdatabase.detailRecipeDone,
  }),
  dispatch => ({
    onAddCookmark: (
      isChecked,
      baseRecipe,
      detailRecipe,
      baserecipeIngredient,
    ) => {
      dispatch(AddCookmark(isChecked, baseRecipe, detailRecipe, baserecipeIngredient));
    },
    clickcookmarkDone: () => {
      dispatch(clickcookmarkDone());
    }
  }),
)(DetailRecipeContainer);
