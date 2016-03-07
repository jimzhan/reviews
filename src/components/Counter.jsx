import React from 'react';


class Counter extends React.Component {

  increase() {

  }

  render() {
    return (
      <div>
        <span>this.props.value</span>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: React.PropTypes.number.isRequired,
  increase: React.PropTypes.func.isRequired,
};


export default Counter;
