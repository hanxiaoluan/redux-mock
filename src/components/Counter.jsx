import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  incrementIfOdd() {
    if (this.props.value % 2 !== 0) this.props.onIncrement();
  }
  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000);
  }
  render() {
    const { value, onDecrement, onIncrement } = this.props;
    return (
      <div>
        Clicked: {value} times <button onClick={onIncrement}> + </button>{" "}
        <button onClick={onDecrement}> - </button>
        <button onClick={this.incrementIfOdd.bind(this)}>
          {" "}
          incrementIfOdd{" "}
        </button>
        <button onClick={this.incrementAsync.bind(this)}>
          {" "}
          incrementAsync
        </button>
      </div>
    );
  }
}
Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};
export default Counter;
