'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


document.addEventListener('DOMContentLoaded', function () {
  let main = document.getElementsByTagName('main')[0];
  ReactDOM.render(<App />, main);
});
