import React, { Component } from "react";

let value = 0;

const decrement = () => {
  console.log("-1");
  value = value - 1;
  console.log(value);
};

const increment = () => {
  console.log("+1");
  value = value + 1;
  console.log(value);
};

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={decrement}>-1</button>
        <span>{value}</span>
        <button onClick={increment}>+1</button>
      </div>
    );
  }
}

export default Counter;
