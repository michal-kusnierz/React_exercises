import React from 'react';

function BikeName(){
  return <h1>Bike?</h1>
}

const bikeSrc=
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZPwgpXsplbCYJR2IaRo8sg4UxzN6OMcgWJt5BQ9B_3yZvW7SIg&s";

  const BikeImage = () => {
  return <img src={bikeSrc} />
};

const showName = true;

const Bike = () => (
  <div>
    <BikeImage />
    {showName && <BikeName />}
  </div>
);

export default Bike;