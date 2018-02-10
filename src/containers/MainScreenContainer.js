import React, { Component } from 'react';
import MyStorage from '../components/MyStorage';
import Menubar from '../components/MenuBar';

export default class MainScreenContainer extends Component {
  render() {
    return (
      <div>
        <MyStorage />
        <Menubar />
      </div>
    );
  }
}
