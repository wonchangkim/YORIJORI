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
      console.log(this.state.value);
    }, 100);
  }
  handleCookmarkDelete = () => {
    console.log('delete');
    this.props.DeleteCookmark(this.props.ischecked);
  }
  render() {
    return (
      <div>
        {
          this.props.ischecked ?
            <Cookmarkicon check="true" onclick={this.handleCookmarkDelete} /> :
            <Cookmarkicon onclick={this.handleChange} />
        }
      </div>
    );
  }
}
export default connect(
  null,
  dispatch => ({
    DeleteCookmark: (recipeid) => {
      dispatch(DeleteCookmark(recipeid));
    },
  }),
)(Cookmarkiconcontainer);

