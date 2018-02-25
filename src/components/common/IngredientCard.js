import React, { Component } from 'react';
import styled from 'styled-components';
import FlipperCard from '../common/FlipperCard';

const HeaderWrap = styled.div`
  position: absolute;
  background : RGBA(181, 202, 64, 1);
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
`
export default class IngredientCard extends Component {
  handleDelet = () => {
    this.props.onDelet();
  }
  render() {
    const { ingredients } = this.props;
    return (
      <FlipCardWrap>
        {
          ingredients.map(({
            id, title, downloadURL, createdAt,
          }) => (
            <FlipperCard key={id}>
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
// 이미지경로 수정
