import React from "react";
import { StyleSheet, css } from "aphrodite";
import "./Cockpit.css";

const cockpit = (props) => {
  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
  };
  if (props.showPersons) {
    style.backgroundColor = "red";
  }
  // dyanmically set class
  let classes = [];
  if (props.persons.length <= 2) {
    classes.push("red");
  }
  if (props.persons.length <= 1) {
    classes.push("bold");
  }
  classes = classes.join(" ");

  let styles;
  if (style.backgroundColor === "red") {
    styles = StyleSheet.create({
      hover: {
        ":hover": {
          backgroundColor: "pink !important",
        },
      },
    });
  } else {
    styles = StyleSheet.create({
      hover: {
        ":hover": {
          backgroundColor: "lightgreen",
          color: "black",
        },
      },
    });
  }
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is really working!</p>
      <button
        style={style}
        onClick={props.clicked}
        className={css(styles.hover).concat(" " + classes)}
      >
        Show Person Components
      </button>
    </div>
  );
};

export default cockpit;
