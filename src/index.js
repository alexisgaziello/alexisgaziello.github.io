import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import '@neocoast/semantic-ui-less/semantic.less';

import './assets/scss/style.scss';
import './assets/fonts/Windsor/stylesheet.css';

import App from './App.jsx';

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
