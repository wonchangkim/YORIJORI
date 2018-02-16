import React, { Component } from 'react';
import styled from 'styled-components';
import IconCamera from '../../assets/icon/icon-cameraX2.png';

const CameraBtn = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding : 0;
  border : 0;
  margin : -1 px;
  overflow : hidden;
  clip : rect(0, 0, 0, 0);
`;
const CameraLabel = styled.label`
  width: 45px;
  height: 45px;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  background: #B5CB31 url(${IconCamera}) no-repeat center;
  background-size: 20px;
  &:active,
  &:focus,
  &:hover {
    background-color: #EE7A10;
  }
`;
const ImageWrap = styled.div`
  width: 300px;
  height: 100px;
`;
export default class Cameratest extends Component {
  static defaultProps = {
    errorMessage: '',
    onSumit: () => {},
    creating: false,
  }
  state = {
    title: '',
    imageUrl: '',
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }
  handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log(file.name);
    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result,
        title: file.name,
      });
    };
    reader.readAsDataURL(file);
    console.log('handle uploading-', this.state.imageUrl);
  };


  render() {
    const { imageUrl } = this.state;
    let $imagePreview = null;
    if (imageUrl) {
      $imagePreview = (<img src={imageUrl} width="300" alt="img" />);
    } else {
      $imagePreview = (<div className="previewText">사진검색을 통해 재료를 추가하세요.</div>);
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <CameraLabel htmlFor="camera" />
          <CameraBtn onChange={this.handleImageChange} type="file" id="camera" name="title" accept="image/*" capture="environment" />
        </form>
        <ImageWrap>
          {$imagePreview}
        </ImageWrap>
      </div>
    );
  }
}
