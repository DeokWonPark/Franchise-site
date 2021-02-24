import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import './index.css';
import App from './app';
import FileUpload from './service/fileUpload';
import Database from './service/database';

const fileUpload=new FileUpload();
const database=new Database();
ReactDOM.render(
  <React.StrictMode>
    <App fileUpload={fileUpload} database={database}/>
  </React.StrictMode>,
  document.getElementById('root')
);

