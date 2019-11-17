import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hero() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

function Content() {
  return (
    <div>
      <p>Hello!</p>
    </div>
  );
}

function BikeName(){
  return <h1>Bike?</h1>
}

function BikeImage (){
  return (
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZPwgpXsplbCYJR2IaRo8sg4UxzN6OMcgWJt5BQ9B_3yZvW7SIg&s"/>
  );
};

const showName = true;

const Bike = () => (
  <div>
    <BikeImage />
    {showName && <BikeName />}
  </div>
);

function App() {
  return (
    <div className="App">
      <Hero />
      <Content />
      <Bike />
    </div>
  );
}

export default App;
