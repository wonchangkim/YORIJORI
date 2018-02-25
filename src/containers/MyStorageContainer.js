import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import StorageBox from '../components/common/StorageBox';
import IngredientCard from '../components/common/IngredientCard';
import { getdatabaseIngredients, deleteDatabase } from '../ducks/Getdatabase';

class MyStorageContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount();
    console.log(firebase.auth())
  }
  render() {
    return (
      <StorageBox title="재료" >
        <IngredientCard {...this.props} />
      </StorageBox>
    );
  }
}

export default connect(
  state => ({
    loading: state.Getdatabase.loading,
    ingredients: state.Getdatabase.ingredients,
  }),
  dispatch => ({
    onMount: () => {
      dispatch(getdatabaseIngredients());
    },
    onDelete: ({ cardId }) => {
      dispatch(deleteDatabase({ cardId }));
    },
  }),
)(MyStorageContainer);
