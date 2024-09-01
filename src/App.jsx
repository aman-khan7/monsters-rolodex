import { useState, useEffect } from "react";
import CardList from "./Acomponent.jsx";
import SearchBox from "./searchbox/searchcomponent.jsx";

import "./App.css";

const App = () => {
  const [searchString, setSearchString] = useState("");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);

  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchString]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase() || "";
    setSearchString(searchFieldString);
  };
  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase() || "";
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title"> {title}</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />

      <br />
      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="search title"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
