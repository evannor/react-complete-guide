import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <p>This is really working!</p>
        <Person name="Erica" age="32" />
        <Person name="Fred" age="24">
          My Hobbies: Juggling
        </Person>
        <Person name="Garcia" age="45" />
      </div>
    );
  }
}

export default App;
