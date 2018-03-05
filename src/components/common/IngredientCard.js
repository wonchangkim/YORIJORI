import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import styled from 'styled-components';
import FlipperCard from '../common/FlipperCard';

const HeaderWrap = styled.div`
  position: absolute;
  background : #1CB5AC;
  width: 120px;
  height: 40px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const H5 = styled.h5`
  margin: 10px 0 1px 0;
`;
const Meta = styled.p`
  line-height: 12px;
  font-size: 11px;
  color : #E5E5E5;
`;
const FlipCardWrap = styled.div`
  display: flex;
  align-item: space-around;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const ImgWrap = styled.img`
  max-width: 100%;
`;
export default class IngredientCard extends Component {
  static defaultProps = {
    onAddIngredients: () => {},
  }
  render() {
    const { ingredients, onAddIngredients, loading } = this.props;
    return (
      loading ? <Loader active /> :
      <FlipCardWrap>
        {
          ingredients.map(({
              id, title, downloadURL, createdAt,
            }) => (
              <FlipperCard key={id} cardId={id} title={title} imgUrl={downloadURL} onAddIngredients={onAddIngredients}>
                <ImgWrap src={downloadURL} alt="재료이미지" />
                <HeaderWrap>
                  <H5>{title}</H5>
                  <Meta>{createdAt}</Meta>
                </HeaderWrap>
              </FlipperCard>
          ))
        }
      </FlipCardWrap>
    );
  }
}
