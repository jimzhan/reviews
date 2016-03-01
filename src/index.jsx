import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementsByTagName('main')[0];
  ReactDOM.render(<App />, main);
});
