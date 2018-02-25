import React, { Component } from 'react';
import { Button, Dimmer, Header } from 'semantic-ui-react';

export default class checkDelete extends Component {
  static defaultProps = {
    onDelete: () => {},
  }

  state = {
    active: true,
    name: '',
  }
  handleOpen = () => {
    this.setState({ active: true })
  }
  // handleClose = () => {
  //   this.setState({ active: false })
  // }
  handelClick = () => {
    console.log(this.props.cardId);
    this.props.onDelete(this.props.cardId);
  }
  render() {
    return (
      <div>
        <Dimmer
          active={this.state.active}
          onClickOutside={this.handleClose}
          page
        >
          <Header as="h2" icon inverted>
             나의 냉자고에서
          </Header>
          <Header.Subheader>선택된 재료가 삭제됩니다.</Header.Subheader>
          <Button onClick={this.handelClick}>재료삭제하기</Button>
        </Dimmer>
      </div>
    );
  }
}
