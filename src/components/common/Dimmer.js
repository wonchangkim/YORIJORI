import React from 'react';
import styled from 'styled-components';

const DimmerWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background: rgba(0,0,0,0.5);
`;

const Dimmer = () => {
  return (
    <DimmerWrap>
    </DimmerWrap>
  );
}

export default Dimmer;
