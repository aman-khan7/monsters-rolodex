import { Component } from "react";
import Card from "./searchbox/card.components.jsx";
import "./searchbox/cardlist.style.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
export default CardList;
