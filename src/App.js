import React, { Component } from "react";
import Board from "./Board";
import "./App.css";
import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: ["Roboto", "sans-serif", "Fredoka One", "cursive"],
  },
});

class App extends Component {
  render() {
    return (
      <div className="boardContainer">
        <Board />
      </div>
    );
  }
}

export default App;
