import React from "react";
import Square from "./Square";

export default function Board(props) {
  //Style
  const styled = {
    width: "25%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  };
  // Declaration props
  const gameInProgress = props.gameInProgress;
  const setGameInProgress = props.setGameInProgress;
  const winOrNot = props.winOrNot;
  const changePlayer = props.changePlayer;
  let squares = [];
  // Création des squares qu'on stock dans un tableau
  for (let i = 0; i < 9; i++) {
    squares.push(
      <Square
        name={"n" + (i + 1)}
        gameInProgress={gameInProgress}
        winOrNot={winOrNot}
        setGameInProgress={setGameInProgress}
        changePlayer={changePlayer}
      />
    );
  }
  console.log(gameInProgress.game);

  return (
    <div style={styled}>
      <h2 style={{ width: "100%" }}>Player {gameInProgress.playerActive}</h2>
      {/* Injection du tableau Square */}
      {squares}
    </div>
  );
}
