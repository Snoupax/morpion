import React, { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [gameInProgress, setGameInProgress] = useState({
    gameStatus: 0,
    playerActive: "X",
    prevPlayer: "O",
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
    winner: ""
  });

  // Fonction qui vérifie les conditions de victoires.
  const winOrNot = (game) => {
    console.log(gameInProgress.gameStatus)
    if(gameInProgress.gameStatus === -1){
      return;
    }
    // Condition de win pour ligne horizontale
   if((game.n9 === game.n8 && game.n9 !== "" && game.n9 === game.n7) || (game.n4 === game.n5 && game.n4 !== "" && game.n4 === game.n6) ||  (game.n1 === game.n2 && game.n1 !== "" && game.n1 === game.n3)){
    console.log("Ligne Horizontale _")
    
    setGameInProgress((prevState => ({
      ...prevState, gameStatus: -1, winner: "Le gagnant est "+gameInProgress.prevPlayer})))
      
   } 
    // Condition de win pour ligne verticale
    else if ((game.n9 === game.n6 && game.n9 !== "" && game.n9 === game.n3) || (game.n8 === game.n5 && game.n8 !== "" && game.n8 === game.n2)|| (game.n7 === game.n4 && game.n7 !== "" && game.n7 === game.n1)){
    console.log("Ligne Verticale |")
    setGameInProgress((prevState => ({
      ...prevState, gameStatus: -1, winner: "Le gagnant est "+gameInProgress.prevPlayer})))
   }
    // Condition de win pour ligne diagonale
    else if ((game.n9 === game.n5 && game.n9 !== "" && game.n9 === game.n1) || (game.n7 === game.n5 && game.n7 !== "" && game.n7 === game.n3)){
    console.log("Ligne Diagonale /")
    setGameInProgress((prevState => ({
      ...prevState, gameStatus: -1, winner: "Le gagnant est "+gameInProgress.prevPlayer})))
   }
   console.log(gameInProgress.gameStatus)

  };


  // Fonction qui change le playerActif
  const changePlayer = () => {
    // Verification que la game n'est pas terminé
    if(gameInProgress.gameStatus === -1){
      console.log("Le joueur " + gameInProgress.playerActive + " a gagné!");
      return;
    } else {
      console.log("La partie continue !");
      if (gameInProgress.playerActive === "X") {
        setGameInProgress((prevState) => ({
          ...prevState,
          playerActive: "O",
          prevPlayer: "X"
        }));
        console.log("C'est au tour du joueur 'O'")
      } else {
        setGameInProgress((prevState) => ({
          ...prevState,
          playerActive: "X",
          prevPlayer: "O"
        }));
        console.log("C'est au tour du joueur 'X'")
      }
    }

    // Change le joueur selon la variable playerActive
   
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
      <h1>{gameInProgress.winner}</h1>
    </div>
  );
}
