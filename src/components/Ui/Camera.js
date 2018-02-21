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
export default class Camera extends Component {
  static defaultProps = {
    onCapture: () => {},
    success: false,
    imageUrl: '',
    base64: '',
  }
  state = {
    imageUrl: '',
    base64: '',
  }
  handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const Url = URL.createObjectURL(file);
    console.log(file)
    // console.log(file.name);
    reader.onloadend = () => {
      this.setState({
        imageUrl: Url,
        base64: reader.result,
      });
      console.log(reader.result);
      this.props.onCapture(this.state);
    };
    reader.readAsDataURL(file);
    console.log('handle uploading-', Url);
  };

  render() {
    // const { imageUrl } = this.state;
    // let $imagePreview = null;
    // if (imageUrl) {
    //   $imagePreview = (<img src={imageUrl} width="300" alt="img" />);
    // }
    return (
      <div>
        <form>
          <CameraLabel htmlFor="camera" />
          <CameraBtn onChange={this.handleImageChange} type="file" id="camera" accept="image/*" />
        </form>
        {/* <ImageWrap>
          {$imagePreview}
        </ImageWrap> */}
      </div>
    );
  }
}
