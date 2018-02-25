import React, { Component } from 'react';
import { Button, Dimmer, Header } from 'semantic-ui-react';

export default class ResultDimmer extends Component {
  state = {
    active: true,
    name: '',
  }
  handleOpen = () => this.setState({ active: true })
  handleClose = () => this.setState({ active: false })
  handleChange = (e) => {
    const { value } = e.target;
    this.setState(prevState => ({
      title: value,
      onBtn: true,
    }));
    setTimeout(() => {
      console.log(this.state);
    }, 100);
  }
  handelClick = () => {
    this.props.onAdd(this.state.title, this.props.filename, this.props.base64);
  }
  render() {
    const { success, transResult } = this.props;
    const generateKey = (title, index) => {
      return `${title}_${index}`;
      // return `${pre}_${new Date().getTime()}_${index}`;
    };
    return (
      <div>
        <Dimmer
          active={success}
          onClickOutside={this.handleClose}
          page
        >
          <Header as="h2" icon inverted>
             결과중 하나를 선택해주세요.
            <Header.Subheader>냉장고에 추가 됩니다.</Header.Subheader>
          </Header>
          {
          transResult.map((title, index) => (
            <div key={generateKey(title, index)} >
              <input
                onChange={this.handleChange}
                type="radio"
                value={title}
                name="transdata"
              /> {title}
            </div>
          ))
          }
          { this.state.onBtn ? <Button onClick={this.handelClick}>냉장고에추가하기</Button> : null }
        </Dimmer>
      </div>
    );
  }
}
