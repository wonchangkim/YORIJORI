import React, { Component } from 'react';
import * as firebase from 'firebase';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import ShoppingMemo from '../components/ShoppingMemo/ShoppingMemo';
import { getdataShoppingMemo } from '../ducks/Getdatabase';


class ShoppingMemoContainer extends Component {
  static defaultProps = {
    onGetShoppingMemo: () => {},
  }
  componentDidMount() {
    this.props.onGetShoppingMemo();
  }

  render() {
    // if (this.props.selectcookmarkclick) {
    //   return (
    //     <Redirect to="detailrecipe" />
    //   );
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
  }),
  dispatch => ({
    onGetShoppingMemo: () => {
      dispatch(getdataShoppingMemo());
    },
  }),
)(ShoppingMemoContainer);
