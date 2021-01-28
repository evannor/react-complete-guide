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

  switchNameHandler = (newName) => {
    // console.log("was clicked");
    // this.state.persons[0].name= "Emaria"; INCORRECT
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Fred", age: 24 },
        { name: "Garcia", age: 13 },
      ],
    });
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

  // toggle whether or not we show the div containing the Person components
  togglePersonsHandler = () => {
    // saves the current state in a variable
    const doesShow = this.state.showPersons;
    console.log(doesShow);
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
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Show Person Components
        </button>
        {/* Use a ternary expression to conditionally render the div and children nodes/elements */}
        {this.state.showPersons ? (
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Emaria")}
              changed={this.nameChangeHandler}
            >
              My Hobbies: Juggling
            </Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
