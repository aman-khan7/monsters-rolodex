import { Component } from "react";
import "./searchbox.styles.css";
import "./cardlist.style.css";
class SearchBox extends Component {
  render() {
    console.log("aaa");
    return (
      <input
        className={`search-box ${this.props.className}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      ></input>
    );
  }
}
export default SearchBox;
