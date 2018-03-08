import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 95vw;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
`;
const FridgeOutter = styled.div`
  min-width: 95%;
  min-height: 300px;
  padding: 5px;
  background-color: #FFF;
  border-radius: 50px;
  box-shadow: 2px 5px 2px 2px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FridgeInner = styled.div`
  padding: 8px;
  min-width: 100%;
  min-height: 300px;
  background-color: #e5e5e5;
  border-radius: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Fridge = styled.div`
  padding: 15px;
  min-width: 100%;
  min-height: 500px;
  background: linear-gradient(135deg, rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
  border-radius: 46px;
  text-align : center;
`;

const List = styled.div`
  ${props => props.bigger && css`
    height: 100%;
  `}
`;
// const TiteleWrap = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   background-color: RGBA(243, 243, 243, 0.5);
//   box-shadow: inset 0px 0px 4px 2px RGBA(223, 223, 223,0.3);
// `;
export default class StorageBox extends Component {
  state = {
    isMounted: false,
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
        transition: 'all 700ms',
        opacity: this.state.isMounted ? 1 : 0,
        left: this.state.isMounted ? 0 : 300,
      },
    };
    return (
      <Wrapper style={styles.transitions}>
        <FridgeOutter>
          <FridgeInner>
            <Fridge>
              {
                this.props.children
                ?
                  <List bigger={this.props.size}>
                    {this.props.children}
                  </List>
                : null
              }
            </Fridge>
          </FridgeInner>
        </FridgeOutter>
      </Wrapper>

    );
  }
}
