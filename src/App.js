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
      <Bike 
        name="retro"
        avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2N3PhJYSXCcKgEBLopgCMsodhw8R4WS0BGIf716Ysw65j7Ds&s"/>
      <Bike name="ordinary bike..."/>
      <Bike name="is it?"/>
    </div>
  );
}

export default App;
