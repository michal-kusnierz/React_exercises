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
  render() {
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={decrement}>-1</button>
        <span className={styles.display}>{value}</span>
        <button className={styles.button} onClick={increment}>+1</button>
      </div>
    );
  }
}

export default Counter;
