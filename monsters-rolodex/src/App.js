import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/cardList.component/CardList";
import { SearchBox } from "./components/searchBox.component/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [defaultMonster, setDefaultMonster] = useState({});
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  useEffect(async () => {
    //fetch some monsters.

    try {
      const p = await fetch("https://jsonplaceholder.typicode.com/users");
      const monsters = await p.json();
      console.log(monsters);
      setMonsters(monsters);
      setFilteredMonsters(monsters);
      if (monsters.length > 0) {
        setDefaultMonster(monsters[0]);
      }
    } catch (e) {
      console.error(e.message);
    }

    return () => {
      //destruction
    };
  }, []);

  const handleSearch = (_event) => {
    // console.log("[handleSearch]", _event.target.value);
    if (_event.target.value === "") {
      setFilteredMonsters(monsters);
      return;
    }
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(_event.target.value.toLowerCase());
    });
    setFilteredMonsters(filteredMonsters);
  };

  return (
    <div className="App">
      <h1>Welcome to monsters rolodex!</h1>

      {/* {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <div>{monster.name}</div>
            <div>{monster.email}</div>
            <br></br>
          </div>
        );
      })} */}
      <SearchBox
        placeHolder={defaultMonster.name}
        handleSearch={handleSearch}
      ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
}

export default App;
