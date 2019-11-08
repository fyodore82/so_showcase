import React from 'react';
import ReactDOM from 'react-dom';
import MainScreen from './MainScreen';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ErrorPopper from './errorPopper';

import configureStore from './ConfigureStore'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ErrorPopper/>
    <BrowserRouter>
      <MainScreen />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
