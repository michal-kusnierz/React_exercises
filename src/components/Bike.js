import React from 'react';

function BikeName(props){
  return <h1>{props.nameOfBike}</h1>
}

const bikeSrc=
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZPwgpXsplbCYJR2IaRo8sg4UxzN6OMcgWJt5BQ9B_3yZvW7SIg&s";

  const BikeImage = props => {
  const { url } = props;

  if (url){
    return <img src={url} />
  } else {
    return null
  }
};

const showName = true;

const Bike = props => (
  <div>
    <BikeImage url={props.avatarUrl}/>
    {showName && <BikeName nameOfBike={props.name} />}
  </div>
);

export default Bike;