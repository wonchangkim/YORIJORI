
import { createStore, applyMiddleware } from 'redux';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React, { Component } from 'react';
import LoginScreenContainer from './containers/LoginScreenContainer';
import MainPage from './routes/Mainpage';
import withAuth from './hocs/withAuth';
import Memo from './routes/Memo';
import Share from './routes/Share';
import Cookmark from './routes/Cookmark';
import ImageSearch from './routes/ImageSearch';
import rootReducer from './ducks/';

const store = createStore(rootReducer, applyMiddleware(thunk));
const Home = withAuth(() => <Redirect to="/main" />);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={LoginScreenContainer} />
            <Route path="/main" component={MainPage} />
            <Route path="/memo" component={Memo} />
            <Route path="/share" component={Share} />
            <Route path="/cookmark" component={Cookmark} />
            <Route path="/imageSearch" component={ImageSearch} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
