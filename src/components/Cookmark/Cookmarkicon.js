import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Button, Image} from 'semantic-ui-react';
import CookMarkIcon from '../../assets/icon/cookmark.png';
import CookMarkIconactive from '../../assets/icon/cookmarkactive.png';
import CookMarkIcondelete from '../../assets/icon/cookmarkdelete.png';

const CookMarkIconWrap = styled.div`
  background: url(${CookMarkIcon}) no-repeat center;
  background-size: 40px 70px;
  width: 40px;
  height: 70px;
  position: absolute;
  top: 0;
  right: 20px;

  ${props => props.checked && css`
    background: url(${CookMarkIconactive}) no-repeat center;
    background-size: 40px 70px;
  `}
   ${props => props.delete && css`
    background: url(${CookMarkIcondelete}) no-repeat center;
    background-size: 40px 70px;
  `}
`;

export default class Cookmarkicon extends Component {

  render() {
    const { state, onadd, ischecked, cookmark } = this.props;
    return (
      <div>
        {
          state || ischecked ?
            <CookMarkIconWrap checked="true" /> :
            <CookMarkIconWrap onClick={onadd} />
        }
      </div>
    );
  }
}
