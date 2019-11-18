import React from 'react';
import Counter from "./Counter";

function Hero() {
  return (
    <header className="App-header">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Counter />
    </header>
  );
}

export default Hero;