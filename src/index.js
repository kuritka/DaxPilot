/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.css'; //Webpack can import CSS files too!
import './styles/home.styles.css';
import './styles/layout.styles.css';
import './styles/component.styles.css';
import store from './store';
import './styles/slider.css';


render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
