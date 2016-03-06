import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as logger from './shared/logger';


document.addEventListener('DOMContentLoaded', () => {
  logger.info('bang bang DOMContentloaded');
  const main = document.getElementsByTagName('main')[0];
  ReactDOM.render(<App />, main);
});
