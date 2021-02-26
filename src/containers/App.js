import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

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
    // Using the spread operator, helps the state stay immutable
    const persons = [...this.state.persons];
    // remove one specific item from the persons array
    persons.splice(personIndex, 1);
    // set new state based upon updated persons array
    this.setState({ persons: persons });
  };

  // toggle whether or not we show the div containing the Person components
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
