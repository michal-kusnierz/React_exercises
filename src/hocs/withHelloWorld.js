import React from "react";

const withHelloWorld = Component => {
  const ComponentWithHelloWorld = props => {
    return <Component message="Hi, hello World!" />;
  };

  return ComponentWithHelloWorld;
};

export default withHelloWorld;