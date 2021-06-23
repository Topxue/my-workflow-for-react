import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App';
import axios from 'axios'

window.$httpRequest = axios

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
