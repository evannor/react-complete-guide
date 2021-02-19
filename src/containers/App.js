import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import "./App.css";
import Person from "../components/Persons/Persons/Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "sadfj34", name: "Erica", age: 32 },
      { id: "cnallki20", name: "Fred", age: 24 },
      { id: "akdfvab48", name: "Garcia", age: 45 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    // Only update the information for the person selected, based upon the id given
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    // distribute all of the info at personIndex into a new object
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    // Make an exact copy of the persons array
    const persons = [...this.state.persons];
    // set the item at personIndex to updated person
    persons[personIndex] = person;

    // set the state to the updated copy of persons
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // Make a copy of the current state of persons
    // slice makes an exact copy
    // const persons = this.state.persons.slice();

    // Using the spread operator, helps the state stay immutable
    const persons = [...this.state.persons];
    // remove one specific item from the persons array
    persons.splice(personIndex, 1);
    // set new state based upon updated persons array
    this.setState({ persons: persons });
  };

  // toggle whether or not we show the div containing the Person components
  togglePersonsHandler = () => {
    // saves the current state in a variable
    const doesShow = this.state.showPersons;
    // Change the state so that showPersons is changed between true and false
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    // Allows to dynamically set state based upon the latest render of the page
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    // dyanmically set class
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
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
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
          className={css(styles.hover).concat(" " + classes)}
        >
          Show Person Components
        </button>
        {persons}
      </div>
    );
  }
}

export default App;