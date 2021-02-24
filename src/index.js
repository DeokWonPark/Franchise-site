import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import './index.css';
import App from './app';
import FileUpload from './service/fileUpload';

const fileUpload=new FileUpload();
ReactDOM.render(
  <React.StrictMode>
    <App fileUpload={fileUpload}/>
  </React.StrictMode>,
  document.getElementById('root')
);

