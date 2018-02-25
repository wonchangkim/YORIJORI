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
    filename: '',
  }
  handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    const Url = URL.createObjectURL(file);

    // console.log(file.name);
    reader.onloadend = () => {
      this.setState({
        imageUrl: Url,
        base64: reader.result,
        filename: file.name,
      });
      console.log(reader.result)
      this.props.onCapture(this.state);
    };
    reader.readAsDataURL(file);
  };

  render() {
    return (
      <div>
        <form>
          <CameraLabel htmlFor="camera" />
          <CameraBtn onChange={this.handleImageChange} type="file" id="camera" accept="image/*" />
        </form>
      </div>
    );
  }
}
