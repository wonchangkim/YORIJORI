import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


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
