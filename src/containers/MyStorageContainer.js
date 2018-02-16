import { connect } from 'react-redux';
import React, { Component } from 'react';
import MyStorage from '../components/MyStorage';
import {fetchMyIngredientsList} from '../ducks/IngredientsList';

class MyStorageContainer extends Component {
  static defaultProps = {
    omMount: () => {},
  }
  componentDidMount() {
    this.props.omMount();
  }
  render() {
    const { onMount, ...rest } = this.props;
    return (

    )
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({
    onMount: () => {
      dispatch(fetchMyIngredientsList());
    }
  })
)(MyStorageContainer)
