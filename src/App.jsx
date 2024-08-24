import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "vihua",
    };
  }

  render() {
    return (
      <>
        <div>
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              this.setState({ name: "andrei" });
            }}
          >
            change Name
          </button>
        </div>
      </>
    );
  }
}

export default App;
