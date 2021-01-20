import React from "react";

const person = (props) => {
  return (
    <p>
      Howdy! My name is {props.name} and I am {props.age} years old.
    </p>
  );
};

export default person;
