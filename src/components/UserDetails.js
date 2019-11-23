import React from 'react';

const UserDetails = props => {
  return (
    <div className="User">
      <h1>Users {props.match.params.id}</h1>
      <button
        onClick={() => {
          props.history.replace("/");
        }}
      >
        Go to home screen
      </button>
    </div>
  );
};

export default UserDetails;