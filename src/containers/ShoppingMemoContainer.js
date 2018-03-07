import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import ShoppingMemo from '../components/ShoppingMemo/ShoppingMemo';
import { getdataShoppingMemo, deleteShoppingMemo } from '../ducks/Getdatabase';


class ShoppingMemoContainer extends Component {
  static defaultProps = {
    onGetShoppingMemo: () => {},
  }
  componentDidMount() {
    this.props.onGetShoppingMemo();
  }

  render() {
    const { deleteMemoDone } = this.props;
    // if (deleteMemoDone) {
    //   window.location.reload();
    // }
    return (
      <div>
        <ShoppingMemo {...this.props} />
      </div>
    );
  }
}

export default connect(
  state => ({
    shoppingMemolist: state.Getdatabase.shoppingMemolist,
    ingredients: state.Getdatabase.ingredients,
    deleteMemoDone: state.Getdatabase.deleteMemoDone,
  }),
  dispatch => ({
    onGetShoppingMemo: () => {
      dispatch(getdataShoppingMemo());
    },
    memoDelete: (id) => {
      dispatch(deleteShoppingMemo(id));
    }
  }),
)(ShoppingMemoContainer);
