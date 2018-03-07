import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StorageBox from '../components/common/StorageBox';
import IngredientCard from '../components/common/IngredientCard';
import {
  getdatabaseIngredients,
  deleteDatabase,
  addIngredientForm,
  SearchFormOff,
  searchRecipeDone,
  searchDetail,
} from '../ducks/Getdatabase';
import SearchFormContainer from '../containers/SearchFormContaienr';
import NothingIngredients from '../components/common/NothingIngredients';

class MyStorageContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount();
    this.props.onSearchFormOff();
    this.props.onSearchRecipeDone();
    this.props.onDetailRecipeDone();
  }

  render() {
    const { addSearchFormOn, ingredientsNull, searchRecipeDone } = this.props;
    if (searchRecipeDone) {
      return (
        <Redirect to="searchresult" />
      );
    }
    return (
      <div>
        {
          addSearchFormOn ? <SearchFormContainer {...this.props} /> : null
        }
        <StorageBox title="재료" >
          {
            ingredientsNull ? <NothingIngredients /> : <IngredientCard {...this.props} />
          }
        </StorageBox>
      </div>
    );
  }
}

export default connect(
  state => ({
    searchRecipeDone: state.Getdatabase.searchRecipeDone,
    addSearchFormOn: state.Getdatabase.addSearchFormOn,
    loading: state.Getdatabase.loading,
    ingredients: state.Getdatabase.ingredients,
    ingredientsNull: state.Getdatabase.ingredientsNull,
  }),
  dispatch => ({
    onMount: () => {
      dispatch(getdatabaseIngredients());
    },
    onDelete: ({ cardId }) => {
      dispatch(deleteDatabase({ cardId }));
    },
    onAddIngredients: (cardId, title, imgurl) => {
      dispatch(addIngredientForm(cardId, title, imgurl));
    },
    onSearchFormOff: () => {
      dispatch(SearchFormOff());
    },
    onSearchRecipeDone: () => {
      dispatch(searchRecipeDone(false));
    },
    onDetailRecipeDone: () => {
      dispatch(searchDetail(false));
    },
  }),
)(MyStorageContainer);
