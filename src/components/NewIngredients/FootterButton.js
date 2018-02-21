import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';


export default class FotterButton extends Component {
  static defaultProps = {
    onfetch: () => {},
  }
  handleClick = () => {
    console.log(this.props)
    this.props.onfetch(this.props);
  }
  render() {
    return (
      <div>
        <Button circular color="olive" icon="search" size="huge" onClick={this.handleClick} />
        <Button circular icon="close" size="huge" />
      </div>
    );
  }
}
