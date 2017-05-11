import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TradesPage from './components/trades/TradesPage';
import ISINPage from './components/isin/ISINPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/isins" component={ISINPage} />
    <Route path="/isins/:isinId" component={TradesPage} />
    <Route path="/trades" component={TradesPage} />
    <Route path="/about" component={AboutPage} />
  </Route>
);
