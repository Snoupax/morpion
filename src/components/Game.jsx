import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [gameInProgress, setGameInProgress] = useState({
    gameStatus: 0,
    players: {
      X: {
        win: 0,
      },
      O: {
        win: 0,
      },
    },
    playerActive: "X",
    game: {
      n1: "",
      n2: "",
      n3: "",
      n4: "",
      n5: "",
      n6: "",
      n7: "",
      n8: "",
      n9: "",
    },
  });

  const winOrNot = (game, gameStatus) => {
    console.log(game.n1)
    console.log(game.n2)
    if (
      (game.n1 === game.n2 && game.n2 === game.n3 && game.n1 !== "") ||
      (game.n4 === game.n5 && game.n5 === game.n6 && game.n1 !== "") ||
      (game.n7 === game.n8 && game.n8 === game.n9 && game.n1 !== "")
    ) {
      console.log("Ligne Horizontale");
      gameStatus--;
    } else if (
      (game.n1 === game.n4 && game.n4 === game.n7 && game.n1 !== "") ||
      (game.n2 === game.n5 && game.n5 === game.n8 && game.n2 !== "") ||
      (game.n3 === game.n6 && game.n6 === game.n9 && game.n1 !== "")
    ) {
      console.log("Ligne Verticale");
      gameStatus--;
    } else if (
      (game.n1 === game.n5 && game.n5 === game.n9 && game.n1 !== "") ||
      (game.n7 === game.n5 && game.n5 === game.n3 && game.n1 !== "") 
    ) {
      console.log("Ligne Diagonale");
      gameStatus--;
    }

    if (gameStatus === -1) {
      console.log("Le joueur " + gameInProgress.playerActive + " a gagné!");
    } else {
      console.log("La partie continue !");
    }
  };

  const changePlayer = () => {
    if (gameInProgress.playerActive === "X") {
      setGameInProgress((prevState) => ({
        ...prevState,
        playerActive: "O",
      }));
    } else {
      setGameInProgress((prevState) => ({
        ...prevState,
        playerActive: "X",
      }));
    }
  };
  winOrNot(gameInProgress.game, gameInProgress.gameStatus);

  return (
    <div className="game">
      <Board
        gameInProgress={gameInProgress}
        setGameInProgress={setGameInProgress}
        winOrNot={winOrNot}
        changePlayer={changePlayer}
      />
    </div>
  );
}
