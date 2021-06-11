import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import 'semantic-ui-css/semantic.min.css'

import App from "./App.jsx";
import './assets/scss/style.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
