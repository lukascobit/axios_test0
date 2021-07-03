import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:3000/`
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
