import React from "react";
import styled from "styled-components";
import "./Person.css";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const Person = (props) => {
  return (
    <StyledDiv>
      <p onClick={props.click}>
        Howdy! My name is {props.name} and I am {props.age} years old.
      </p>
      {/* Passing text from wrapped Person text */}
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </StyledDiv>
  );
};

export default Person;
