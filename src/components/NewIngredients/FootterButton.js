import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonWrap = styled.div`
  padding: 13px;
`;
const Buttonsearch = styled(Button)`
  margin-right: 20px !important;
`;
const Buttonclose = styled(Button)`
  margin-left: 20px !important;
`;

export default class FotterButton extends Component {
  static defaultProps = {
    onfetch: () => {},
  }
  handleClick = () => {
    console.log(this.props);
    this.props.onfetch(this.props);
  }
  render() {
    return (
      <ButtonWrap>
        <Buttonsearch circular color="teal" icon="search" size="huge" onClick={this.handleClick} />
        <Buttonclose circular icon="close" size="huge" onClick={this.props.onClose} />
      </ButtonWrap>
    );
  }
}
