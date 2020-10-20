import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import ReactGA from 'react-ga';
import ReduxThunk from 'redux-thunk';

import './App.scss';
// import * as env from './env';
import Layout from './hoc/Layout/Layout';

import contactReducer from './store/reducers/contact';

// ReactGA.initialize('UA-104097928-1');
// ReactGA.pageview(window.location.pathname + window.location.search);

const rootReducer = combineReducers({
  contact: contactReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <Layout />
        </Provider>
      </div>
    );
  };
}

export default App;