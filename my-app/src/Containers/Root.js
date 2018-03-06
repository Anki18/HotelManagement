import React, { Component } from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from "redux-thunk";
import { applyMiddleware, createStore } from "redux";

import '../index.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import reducer from '../Reducers/hotel'
import App from './App';

const store = createStore(reducer,
  applyMiddleware(thunkMiddleware));

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
