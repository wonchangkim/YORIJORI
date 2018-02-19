import React, { Component } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import styled from 'styled-components';

const ButtonWrap = styled(Button)`
  width: 100px;
`

export default class FotterButton extends Component {
  render() {
    return (
      <div>
        <Button circular color="olive" icon="search" size="huge" />
        <Button circular icon="close" size="huge" />
      </div>
    );
  }
}
