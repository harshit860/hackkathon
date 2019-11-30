import React, { Component } from "react";
import Game from "../canvas/Game";
import { Stage } from "react-konva";

export default class Can extends Component {
  render() {
    return (
      <Stage
        className="App"
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Game />
      </Stage>
    );
  }
}
