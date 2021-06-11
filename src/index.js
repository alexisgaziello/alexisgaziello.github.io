import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import 'semantic-ui-css/semantic.min.css'

import './assets/scss/style.scss';

import App from './App.jsx';

ReactDOM.render(
  <Router>
      <App/>
  </Router>,
  document.getElementById('root')
);
