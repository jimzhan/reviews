import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counter from '../actions/counter';


const Counter = (props) => (
  <div>
    <div>{props.value}</div>
    <button onClick={props.increase}>Increase</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
};


export default connect(
  (state) => ({ value: state.counter.value }),
  (dispatch) => ({ increase: bindActionCreators(counter.increase, dispatch) })
)(Counter);
