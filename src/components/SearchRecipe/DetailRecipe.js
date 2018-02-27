import React, { Component } from 'react';

export default class DetailRecipe extends Component {
  render() {
    const { detailRecipe, recipeName } = this.props;
    return (
      <div>
        <h1>{recipeName}</h1>
        <ol>
          {
          detailRecipe.map(({ COOKING_NO, COOKING_DC, STRE_STEP_IMAGE_URL })=> (
            <li key={COOKING_NO}>
              {
                STRE_STEP_IMAGE_URL ?
                  <img src={STRE_STEP_IMAGE_URL} alt="" />
                : null
              }
              <p>{COOKING_DC}</p>
            </li>
          ))
          }
        </ol>
      </div>
    );
  }
}
