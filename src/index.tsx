/// <reference path="../typings/tsd.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function () {
  let main = document.getElementsByTagName('main')[0];
  ReactDOM.render(<h2>Hello React</h2>, main);
});
