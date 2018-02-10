import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import LoginScreenContainer from './containers/LoginScreenContainer';
import MainScreenContainer from './containers/MainScreenContainer';
import withAuth from './hocs/withAuth';


const Home = withAuth(() => <Redirect to="/main" />);

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/main" component={MainScreenContainer} />
          <Route path="/login" component={LoginScreenContainer} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
