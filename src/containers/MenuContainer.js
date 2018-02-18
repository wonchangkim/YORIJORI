import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handelMenu } from '../ducks/Menu';
import MenuBar from '../components/Navigation/MenuBar';


class MenuContainer extends Component {
  render() {
    const { menuOn, ...rest } = this.props;
    if (menuOn) {
      return (
        <MenuBar {...rest }/>
      );
    }
    return (
      <div>
        <MenuBar {...rest} />
      </div>
    );
  }
}
export default connect(
  state => ({
    menuOn: state.Menu.menuOn,
  }),
  dispatch => ({
    menuOn: () => {
      dispatch(handelMenu( ));
    },
  }),
)(MenuContainer);

