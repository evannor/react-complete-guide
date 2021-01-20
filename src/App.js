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

  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Becky")}>
          Switch Name
        </button>
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
    );
  }
}

export default App;
