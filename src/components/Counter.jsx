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


const mapStateToProps = (state) => {
  console.log(state.counter);
  return { value: state.counter.value };
};


export default connect(
  mapStateToProps,
  (dispatch) => ({ increase: bindActionCreators(counter.increase, dispatch) })
)(Counter);
