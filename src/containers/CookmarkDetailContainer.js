import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaperBox from '../components/common/PaperBox';
import CookmarkDetail from '../components/CookmarkDetail/CookmarkDetail';
import { AddCookmark, DeleteCookmark, } from '../ducks/AddFirebaseDb';
import { onLoaded, searchDetailRecipe } from '../ducks/Getdatabase';

class CookmarkDetailContainer extends Component {
  static defaultProps = {
    onLoaded: () => {},
  }
  componentDidMount() {
    this.props.onLoaded();
  }
  render() {
    const { selectcookmark } = this.props;

    return (
      <div>
        <PaperBox>
          <CookmarkDetail detail={selectcookmark} />
        </PaperBox>
      </div>
    );
  }
}

export default connect(
  state => ({
    baseRecipe: state.Getdatabase.baseRecipe,
  }),
  dispatch => ({
    onClick: (recipeId) => {
      dispatch(searchDetailRecipe(recipeId));
    },
  }),
)(CookmarkDetailContainer);
