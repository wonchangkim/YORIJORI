import React, { Component } from 'react';
import { Button, Dimmer, Header } from 'semantic-ui-react';
import styled, {css} from 'styled-components';

const Wrap = styled.div`
  position: absolute;
  z-index: 3000;
  width: 300px;
  height: 200px;
  box-shadow: 2px 4px 9px 2px rgba(0,0,0,0.4);
  border: 1px solid #1CB5AC;
  border-radius: 20px;
  left:50%;
  top:50%;
  background: white;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SpanTilte = styled.span`
  padding: 3px 8px;
  background: #1CB5AC;
  color: white;
  border-radius: 8px;
  margin-right: 3px;
`;
const H4 = styled.h4`
  margin:0;
  padding: 0;
`;
const Btnstyle = styled(Button)`
  width: 60px;
  height: 60px;
  display: block;
  ${props => props.left && css`
    margin-right: 5px !important;
  `}
  ${props => props.right && css`
  margin-left: 5px !important;
  `}
`;
export default class checkDelete extends Component {
  static defaultProps = {
    onDelete: () => {},
  }
  handelClick = () => {
    console.log(this.props.cardId);
    this.props.onDelete(this.props.cardId);
  }
  handClose = () => {
    console.log('close');
  }
  render() {
    const { checkedtitle, onClose } = this.props;
    return (
      <Wrap>
        <H4>
            나의 냉장고에서
        </H4>
        <div>
          <SpanTilte>{checkedtitle}</SpanTilte>
          <span>가 삭제됩니다.</span>
        </div>
        <div>
          <Btnstyle circular color="teal" left="true" icon="check" onClick={this.handelClick} />
          <Btnstyle circular right="true" icon="close" onClick={onClose} />
        </div>
      </Wrap>
    );
  }
}
