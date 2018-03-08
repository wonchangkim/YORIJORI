import React, { Component } from 'react';
import styled from 'styled-components';
import TopHeader from '../Navigation/TopHeader';
import Menubar from '../Navigation/MenuBar';
import Min700 from './Min700';

const Wrap = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(to right, #00E39F, #00C4E1);
  flex-direction: column;
  align-items: center;
  background-color: #7DAA55;
  padding-bottom: 50px;

   @media only screen and (min-width: 700px) {
    display: none;
  }
`;

export default class Layout extends Component {
  state = {
    isMounted : false,
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isMounted: true,
      })
    }, 700);
  }
  render() {
    const styles = {
      transitions: {
        transition: 'all 500ms',
        opacity: this.state.isMounted ? 1 : 0,
      },
    };
    return (
      <div style={styles.transitions}>
        <Min700 />
        <Wrap >
          <TopHeader title={this.props.title} />
          {this.props.children}
          <Menubar />
        </Wrap>
      </div>
    );
  }
}
