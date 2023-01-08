import React, { useEffect, useReducer, useState } from "react";
import useRandomJoke from "./useRandomJoke";

function App() {
  const joke = useRandomJoke();
  const generateJoke = (e) => {
    e.preventDefault();
  };
  // custom Hook
  // const joke = useRandom("Saddam", "Hussain");

  return (
    <div className="app">
      <center>
        <h1>The Joke Generator</h1>
        <h3>{joke}</h3>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
      </center>
    </div>
  );
}

export default App;
