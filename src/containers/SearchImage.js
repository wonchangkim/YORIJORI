import React, { Component } from 'react';
import Container from '../components/container';
import Camera from '../components/Ui/Camera';

export default class SearchImage extends Component {
  componentDidMount() {
    return (
      <Camera />
    );
  }

  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}
