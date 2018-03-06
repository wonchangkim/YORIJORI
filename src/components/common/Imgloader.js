import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import styled, { css } from 'styled-components';

const ImgWrap = styled.img`
  max-width: 100%;
   ${props => props.loading && css`

  `}
`;
const LoderSty = styled(Loader)`
  top: 25px !important;
`
export default class Imgloader extends Component {
  static defaultProps = {
    onAddIngredients: () => {},
  }
  state = {
    imageStatus: true,
  }

  handleImageLoaded = () => {
    this.setState({
      imageStatus: false,
    })
    console.log(this.state)
  }
  render() {
    const { src, id } = this.props;
    return (
      <div>
        <LoderSty active={this.state.imageStatus} inline="centered" />
        <ImgWrap src={src} alt="재료이미지" id={id} onLoad={this.handleImageLoaded} />
      </div>
    );
  }
}
