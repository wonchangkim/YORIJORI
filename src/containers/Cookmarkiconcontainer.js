import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookmarkicon from '../components/Cookmark/Cookmarkicon';
import { DeleteCookmark } from '../ducks/AddFirebaseDb';

class Cookmarkiconcontainer extends Component {
  state = {
    isChecked: false,
    recipeId: '',
  }

  handleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
    setTimeout(() => {
      this.props.onAddCookmark(
        this.state.isChecked,
        this.props.baseRecipe,
        this.props.detailRecipe,
        this.props.baserecipeIngredient,
      );
      console.log(this.state);
    }, 1);
  }
  // handleCookmarkDelete = () => {
  //   console.log('delete');
  //   this.setState({
  //     isChecked: !this.state.isChecked,
  //   });
  //   this.props.DeleteCookmark(this.state.ischecked);
  // }
  render() {
    const { ischecked, cookmark } = this.props;
    return (
      <Cookmarkicon cookmark={cookmark} ischecked={ischecked} state={this.state.isChecked} onadd={this.handleChange} />
    );
  }
}
export default connect(
  state => ({
    cookmark: state.Getdatabase.cookmark,
  }),
  dispatch => ({
    DeleteCookmark: (recipeid) => {
      dispatch(DeleteCookmark(recipeid));
    },
  }),
)(Cookmarkiconcontainer);

