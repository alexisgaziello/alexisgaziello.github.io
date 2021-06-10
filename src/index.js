import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from 'react-ga';
import 'semantic-ui-css/semantic.min.css';

import Main from "./components/Main.jsx";
import './assets/scss/style.scss';

ReactGA.initialize('GOOGLE_ANALYTICS_TRACKING_ID');

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Main />
  </Router>,
  document.getElementById('root')
);
