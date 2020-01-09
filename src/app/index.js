import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import App from "./containers/App";
import store from "./store";
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';


render(
    <Provider store={store}>
       <Router history={browserHistory} routes={routes} />
    </Provider>,
    window.document.getElementById('app'));