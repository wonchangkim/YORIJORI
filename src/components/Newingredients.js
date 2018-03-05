import React, { Component } from 'react';
import StorageBox from './common/StorageBox';
import ImageCard from './NewIngredients/ImageCard';

export default class Newingredients extends Component {
  render() {
    return (
      <StorageBox size="true" >
        <ImageCard props={this.props} />
      </StorageBox>
    );
  }
}
