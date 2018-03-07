import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Cookmark from '../components/Cookmark/Cookmark';
import { getdatabaseCookmark, clickcookmark, searchDetailRecipe } from '../ducks/Getdatabase';
import { addShoppingMemo } from '../ducks/AddFirebaseDb';


class CookmarkContainer extends Component {
  static defaultProps = {
    onGetCookmark: () => {},
    onClick: () => {},
  }
  componentDidMount() {
    this.props.onGetCookmark();
  }

  render() {
    const { selectcookmarkclick, done, ingredientsNull } = this.props;
    if (selectcookmarkclick) {
      return (
        <Redirect to="detailrecipe" />
      );
    }
    if (done) {
      window.location.reload();
    }
    return (
      <div>
        <Cookmark {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => ({
    ingredientsNull: state.Getdatabase.ingredientsNull,
    cookmark: state.Getdatabase.cookmark,
    done: state.AddFirebaseDb.done,
    selectcookmarkclick: state.Getdatabase.selectcookmarkclick,
  }),
  dispatch => ({
    onClick: (recipeId, click) => {
      dispatch(searchDetailRecipe(recipeId));
      dispatch(clickcookmark());
    },
    onGetCookmark: () => {
      dispatch(getdatabaseCookmark());
    },
    onAddshoppingMemo: (memoRecipeId, memoRecipeimg, memoRecipeko) => {
      dispatch(addShoppingMemo(memoRecipeId, memoRecipeimg, memoRecipeko));
    },
  }),
)(CookmarkContainer);
