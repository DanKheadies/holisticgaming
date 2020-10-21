import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import './App.scss';
import * as env from './env';
import { initGA, PageView } from './components/Tracking/Tracking';
import Layout from './hoc/Layout/Layout';

import contactReducer from './store/reducers/contact';

const rootReducer = combineReducers({
  contact: contactReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class App extends Component {
  componentDidMount() {
    initGA(env.GOOG_ANA);
    PageView();
  };

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