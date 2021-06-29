import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(async () => {
    //fetch some monsters.

    try {
      const p = await fetch("https://jsonplaceholder.typicode.com/users");
      const monsters = await p.json();
      console.log(monsters);
      setMonsters(monsters);
    } catch (e) {
      console.error(e.message);
    }

    return () => {
      //destruction
    };
  }, []);

  return (
    <div className="App">
      <h1>Welcome to monsters rolodex!</h1>

      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <div>{monster.name}</div>
            <div>{monster.email}</div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}

export default App;
