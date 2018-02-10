import React from 'react';
import Dropzone from 'react-dropzone';
import styled from 'styled-components';
import ProfileImg from '../assets/images/profileImg.png';

const ImgCricle = styled(Dropzone)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: url(${ProfileImg}) no-repeat center;
  background-size: 100px 100px;
`;

export default class ProfilePicDrop extends React.Component {
  state = {
    accepted: [],
    rejected: [],
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <ImgCricle accept="image/jpeg, image/png"
            onDrop={(accepted, rejected) => {
            this.setState({ accepted, rejected }); }}>
          </ImgCricle>
        </div>
        <div>
          <p>클릭하여 사진을 선택해여 업로드 시키세요.</p>
          <p>jpeg 와 png 모든 이미지파일이 허용됩니다.</p>
        </div>
        <aside>
          <h2>Accepted files</h2>
          <ul>
            {this.state.accepted.map(f => <li key={f.name}>{f.name}- {f.size}bytes</li>)}
          </ul>
        </aside>
      </section>
    );
  }
}
