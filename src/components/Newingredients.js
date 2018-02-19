import React, { Component } from 'react';
import styled from 'styled-components';
import { Image, Icon } from 'semantic-ui-react';
import StorageBox from './common/StorageBox';
import ImageCard from './NewIngredients/ImageCard';

export default class newingredients extends Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <StorageBox size="true" >
        <ImageCard imageUrl={imageUrl} />
      </StorageBox>
    );
  }
}
