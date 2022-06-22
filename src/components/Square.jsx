import React, { useState } from "react";

export default function Square(props) {
  // Style
  const styled = {
    border: "2px solid #000",
    width: "31%",
    minHeight: "100px",
    fontSize: "72px",
  };
  // Renommage des props
  const nameDiv = props.name;
  const gameInProgress = props.gameInProgress;
  const setGameInProgress = props.setGameInProgress;
  // Déclaration des states récupérés
  const playerActive = gameInProgress.playerActive;
  const gameStatus = gameInProgress.gameStatus;
  const winOrNot = props.winOrNot;
  // Déclaration des symboles et du state.
  const symboleX = "X";
  const symboleO = "O";
  // Etat local qui va stocker le symbole à injecter dans le square
  const [symboleUse, setSymboleUse] = useState("");
  // A chaque clique sur un square
  function handleClick(e) {
    // On vérifie que la partie n'est pas terminée
    if (gameStatus === -1) {
      return;
    }
    // On vérifie si le joueur actif est le joueur "X"
    if (playerActive === "X") {
      // On change le symbole à injecter
      setSymboleUse(symboleX);
      // On injecte le symbole
      setGameInProgress((prevState) => ({
        ...prevState,
        game: {
          ...prevState.game,
          [nameDiv]: "X",
        },
      }));
      // On test les conditions de victoires
      winOrNot(gameInProgress.game, gameInProgress.gameStatus);
      // On change le joueur actif
      props.changePlayer();
    }
    // On vérifie si le joueur actif est le joueur "O"
    else if (playerActive === "O") {
      // On change le symbole à injecter
      setSymboleUse(symboleO);
      // On injecte le symbole
      setGameInProgress((prevState) => ({
        ...prevState,
        game: {
          ...prevState.game,
          [nameDiv]: "O",
        },
      }));
      // On test les conditions de victoires
      winOrNot(gameInProgress.game, gameInProgress.gameStatus);
      // On change le joueur actif
      props.changePlayer();

      console.log("fin de fonction handleClick");
    }
  }
  return (
    <div name={nameDiv} style={styled} onClick={(e) => handleClick()}>
      {symboleUse}
    </div>
  );
}
