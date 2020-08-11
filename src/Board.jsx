import React, { Component } from "react";
import Block from "./Block";
import Row from "./Row";
class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: "X",
      status: "",
    };
  }

  onPlay = (e) => {
    let player = this.state.player;

    if (e.currentTarget.innerHTML === "") {
      e.currentTarget.innerHTML = player;
      let nextTurn = this.state.player === "X" ? "O" : "X";
      this.setState({
        player: nextTurn,
      });
    }

    let tiles = document.querySelectorAll(".row span");

    let tile = [...tiles].map((item) => item);

    let combinations = [
      [tile[0], tile[1], tile[2]],
      [tile[3], tile[4], tile[5]],
      [tile[6], tile[7], tile[8]],
      [tile[0], tile[3], tile[6]],
      [tile[1], tile[4], tile[7]],
      [tile[2], tile[5], tile[8]],
      [tile[0], tile[4], tile[8]],
      [tile[2], tile[4], tile[6]],
    ];

    combinations.forEach((item) => {
      let pos = item.every(
        (list) => list.innerHTML === item[0].innerHTML && list.innerHTML !== ""
      );

      let emp = item.every((list) => list.innerHTML !== "");

      console.log(emp);

      if (pos === true) {
        let winner = item[0].innerHTML;
        // debugger;
        item.forEach((set) => {
          set.style.background = "#faa800";
          set.style.color = "#ffffff";
        });
        this.setState({
          status: winner,
        });
      }
    });
  };

  rePlay = () => {
    let tiles = document.querySelectorAll(".row span");
    [...tiles].forEach((item) => {
      item.innerHTML = "";
      item.style.background = "#2c343a";
      item.style.color = "#969a9d";
    });
    this.setState({
      status: "",
    });
  };

  render() {
    return (
      <div className="boardWrapper">
        <h5 className="player-info">{`Next Player: ${
          this.state.player === "X" ? "Your Turn" : "Opponents Turn"
        }`}</h5>
        <Row>
          <Block onClick={this.onPlay} />
          <Block onClick={this.onPlay} />
          <Block onClick={this.onPlay} />
        </Row>
        <Row>
          <Block onClick={this.onPlay} />
          <Block onClick={this.onPlay} />
          <Block onClick={this.onPlay} />
        </Row>
        <Row>
          <Block onClick={this.onPlay} />
          <Block onClick={this.onPlay} />
          <Block onClick={this.onPlay} />
        </Row>
        <h5 className="status">{`Winner: ${this.state.status}`}</h5>
        <button
          onClick={this.rePlay}
          className="overlay"
          style={{ display: this.state.status ? "flex" : "none" }}
        >
          <span>Restart</span>
        </button>
      </div>
    );
  }
}

export default Board;
