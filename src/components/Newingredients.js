import React, { Component } from 'react';
import styled from 'styled-components';
import { Image, Icon } from 'semantic-ui-react';
import StorageBox from './common/StorageBox';
import ImageCard from './NewIngredients/ImageCard';

export default class newingredients extends Component {
  render() {
    return (
      <StorageBox size="true" >
        <ImageCard props={this.props} />
      </StorageBox>
    );
  }
}
