import { connect } from 'react-redux';
import React, { Component } from 'react';
import StorageBox from '../components/common/StorageBox';
import IngredientCard from '../components/common/IngredientCard';

export default class MyStorageContainer extends Component {
  render() {
    return (
      <StorageBox title="재료" >
        <IngredientCard title="돼지고기" date="2018.2.17" />
      </StorageBox>
    );
  }
}
