import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from "redux";

import '../index.css';
import reducer from '../Reducers/hotel'
import App from './App';

const store = createStore(reducer);

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
