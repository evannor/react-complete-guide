import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        Howdy! My name is {props.name} and I am {props.age} years old.
      </p>
      {/* Passing text from wrapped Person text */}
      <p>{props.children}</p>
    </div>
  );
};

export default person;
