import { Component } from "react";
import CardList from "./Acomponent.jsx";
import SearchBox from "./searchbox/searchcomponent.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    console.log("component");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  onSearchChange = (event) => {
    const searchString = event?.target?.value?.toLowerCase() || "";
    console.log(searchString);
    this.setState(() => {
      return { searchString };
    });
  };

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;
    console.log("render", this.state.searchString);
    const filterdMonsters = this.state.monsters.filter((monster) => {
      return monster.name
        .toLowerCase()
        .includes(this.state.searchString.toLowerCase());
    });

    return (
      <>
        <div>
          {/* <input
            className="search-box"
            type="search"
            placeholder="search-box"
            onChange={(event) => {
              const str = event.target.value;
              this.setState({ searchString: str });
            }}
          ></input> */}
          {/* {this.state.monsters
            .filter((monster) => {
              return monster.name
                .toLowerCase()
                .includes(this.state.searchString.toLowerCase());
            })
            .map((monster) => {
              return (
                <div key={monster.id}>
                  <h1>{monster.name}</h1>
                </div>
              );
            })} */}
          <div className="App">
            <h1 className="app-title">Monsters Rolodexs</h1>
          </div>
          <SearchBox
            className={"search-box"}
            onChangeHandler={onSearchChange}
            placeholder={"search monsters"}
          />
          <CardList monsters={filterdMonsters} />
        </div>
      </>
    );
  }
}

export default App;
