import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaperBox from '../components/common/PaperBox';
import DetailRecipe from '../components/SearchRecipe/DetailRecipe';

class DetailRecipeContainer extends Component {
  render() {
    return (
      <div>
        <PaperBox title="테스트">
          <DetailRecipe {...this.props} />
        </PaperBox>
      </div>
    );
  }
}

export default connect(
  state => ({
    recipeName: state.Getdatabase.recipeName,
    detailRecipe: state.Getdatabase.detailRecipe,
    recipeImg: state.Getdatabase.recipeImg,
    baseRecipe: state.Getdatabase.baseRecipe,
    detailRecipeDone: state.Getdatabase.detailRecipeDone,
  }),
)(DetailRecipeContainer);
