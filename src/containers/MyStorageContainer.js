import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import StorageBox from '../components/common/StorageBox';
import IngredientCard from '../components/common/IngredientCard';
import { getdatabaseIngredients, deleteDatabase, addIngredientForm } from '../ducks/Getdatabase';
import SearchFormContainer from '../containers/SearchFormContaienr';

class MyStorageContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount();
    console.log(firebase.auth())
  }
  render() {
    const { addSearchFormOn } = this.props;
    return (
      <div>
        {
          addSearchFormOn ? <SearchFormContainer {...this.props}/> : null
        }
        <StorageBox title="재료" >
          <IngredientCard {...this.props} />
        </StorageBox>
      </div>
    );
  }
}

export default connect(
  state => ({
    addSearchFormOn: state.Getdatabase.addSearchFormOn,
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
    onAddIngredients: (cardId, title) => {
      dispatch(addIngredientForm(cardId, title));
    },
  }),
)(MyStorageContainer);
