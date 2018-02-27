import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchRecipe/SearchForm';
import { getdatabaseIngredients, deleteDatabase, searchRecipe } from '../ducks/Getdatabase';

class SearchFormContainer extends Component {
  // static defaultProps = {
  //   onMount: () => {},
  // }
  state = {
    ingredients: '',
  }
  render() {
    return (
      <SearchForm {...this.props} />
    );
  }
}

export default connect(
  state => ({
    searchRecipeDone: state.Getdatabase.searchRecipeDone,
    searchData: state.Getdatabase.searchData,
  }),
  dispatch => ({
    onMount: () => {
      dispatch(getdatabaseIngredients());
    },
    onDelete: ({ cardId }) => {
      dispatch(deleteDatabase({ cardId }));
    },
    onSearch: (searchTitle) => {
      dispatch(searchRecipe(searchTitle));
    },
  }),
)(SearchFormContainer);
