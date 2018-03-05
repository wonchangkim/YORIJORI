import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { fetchvision } from '../ducks/Fetchvision';
import FootterButton from '../components/NewIngredients/FootterButton';

class SearchingButtonContainer extends Component {
  state = {
    clickClose: false,
  }
  handelClickClose = () => {
    this.setState({
      clickClose: true,
    });
  }
  render() {
    const { ...rest } = this.props;

    if (this.state.clickClose) {
      return (
        <Redirect to="main" />
      );
    }
    return (
      <FootterButton {...rest} onClose={this.handelClickClose}/>
    );
  }
}


export default connect(
  state => ({
    base64: state.CameraCapture.base64,
  }),
  dispatch => ({
    onfetch: ({ base64 }) => {
      dispatch(fetchvision({ base64 }));
    },
  }),
)(SearchingButtonContainer);
