import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import MoneyInInfo from './containers/MoneyInInfo';
import Summary from './containers/MoneyInOutSummary';
import MoneyOutInfo from './containers/MoneyOutInfo';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MoneyInInfo} />
    <Route path="moneyout" component={MoneyOutInfo} />
    <Route path="summary" component={Summary} />
  </Route>
);
