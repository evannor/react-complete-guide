import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Erica", age: 32 },
      { name: "Fred", age: 24 },
      { name: "Garcia", age: 45 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Emaria", age: 32 },
        { name: event.target.value, age: 24 },
        { name: "Garcia", age: 45 },
      ],
    });
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
      backgroundColor: "white",
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
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show Person Components
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
