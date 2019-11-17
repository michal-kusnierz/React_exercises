import React from 'react';
import './App.css';
import Bike from "./components/Bike";
import Content from "./components/Content";
import Hero from "./components/Hero.js";

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
