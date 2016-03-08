import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increase } from '../actions/counter';


class Counter extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.value}</div>
        <button onClick={this.props.increase}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: React.PropTypes.number.isRequired,
  increase: React.PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  increase: bindActionCreators(increase, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
