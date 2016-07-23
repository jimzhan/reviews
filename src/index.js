import React from 'react';
import ReactDOM from 'react-dom';

import Button from './Button';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');
  ReactDOM.render(<Button>test</Button>, root);
});
