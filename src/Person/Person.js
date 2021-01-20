import React from "react";
import "./Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Howdy! My name is {props.name} and I am {props.age} years old.
      </p>
      {/* Passing text from wrapped Person text */}
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default Person;
