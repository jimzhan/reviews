import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';


document.addEventListener('DOMContentLoaded', function () {
  let main = document.getElementsByTagName('main')[0];
  ReactDOM.render(<App />, main);
});
