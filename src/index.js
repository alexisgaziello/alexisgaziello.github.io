import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import '@neocoast/semantic-ui-less/semantic.less';

import './assets/scss/style.scss';
import 'fonts/Windsor/stylesheet.css';
import 'fonts/Sailors/web_font/sailors/stylesheet.css';
import 'fonts/Sailors/web_font/sailors_condensed/stylesheet.css';

import App from './App.jsx';

ReactDOM.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
