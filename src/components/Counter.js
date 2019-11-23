import React, { Component } from "react";
import styles from "./Counter.module.css";

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
  state = {
    count: 10
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={this.decrement}>-1</button>
        <span className={styles.display}>{this.state.count}</span>
        <button className={styles.button} onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default Counter;
