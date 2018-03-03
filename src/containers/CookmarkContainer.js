import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import Cookmark from '../components/Cookmark/Cookmark';
import { getdatabaseCookmark, clickcookmark, searchDetailRecipe } from '../ducks/Getdatabase';


class CookmarkContainer extends Component {
  static defaultProps = {
    onGetCookmark: () => {},
    onClick: () => {},
  }

  componentDidMount() {
    this.props.onGetCookmark();
  }

  render() {
    if (this.props.selectcookmarkclick) {
      return (
        <Redirect to="detailrecipe" />
      );
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
    cookmark: state.Getdatabase.cookmark,
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
  }),
)(CookmarkContainer);
