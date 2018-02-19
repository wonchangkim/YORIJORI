
import { createStore, applyMiddleware, compose } from 'redux';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React, { Component } from 'react';
import MainPage from './routes/Mainpage';
import withAuth from './hocs/withAuth';
import rootReducer from './ducks/';
import CreateUserpage from './routes/CreateUserpage';
import Loginpage from './routes/Loginpage';
import NewingredientsPage from './routes/NewingredientsPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const Home = withAuth(() => <Redirect to="/main" />);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Loginpage} />
            <Route path="/CreateAccount" component={CreateUserpage} />
            <Route path="/main" component={MainPage} />
            <Route path="/Newingredients" component={NewingredientsPage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
