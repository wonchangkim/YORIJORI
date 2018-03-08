
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
import DetailRecipePage from './routes/DetailRecipePage';
import CookmarkPage from './routes/CookmarkPage';
import CookmarkDetailPage from './routes/CookmarkDetailPage';
import ShoppingMemoPage from './routes/ShoppingMemoPage';
import SearchresultPage from './routes/SearchresultPage';
import VisionResultpage from './routes/VisionResultpage';
import SharePage from './routes/SharePage';


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
            <Route path="/Detailrecipe" component={DetailRecipePage} />
            <Route path="/cookmark" exact component={CookmarkPage} />
            <Route path="/cookmarkdetail" component={CookmarkDetailPage} />
            <Route path="/memo" component={ShoppingMemoPage} />
            <Route path="/searchresult" component={SearchresultPage} />
            <Route path="/visionresult" component={VisionResultpage} />
            <Route path="/share" component={SharePage} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
