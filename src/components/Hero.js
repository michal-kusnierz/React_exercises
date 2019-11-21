import React from 'react';
import Counter from "./Counter";
import {withRouter} from 'react-router-dom';

export function Hero(props) {
  return (
    <header className="App-header">
      <img
        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8A9LAM6OhDKTUXl4ctbDB-Ztfy4bUzdKl5GP92sZpM19UNd0iAg&s'}
        className="App-logo"
        alt="logo"
        onClick={() => {
          props.history.push("/asdasdasdad");
        }}
      />  
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

export default withRouter(Hero);