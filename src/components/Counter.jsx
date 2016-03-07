import React from 'react';
import { store } from '../shared/store';


const increase = () => {
  store.dispatch('INCREMENT');
};

const Counter = (props) => (
  <div>
    <div>{props.value}</div>
    <button onClick={increase}>Increase</button>
  </div>
);

Counter.propTypes = {
  value: React.PropTypes.number.isRequired,
};


export default Counter;
