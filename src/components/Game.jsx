import React, {useState} from "react";
import Board from "./Board";

export default function Game() {
  const[playerActive, setPlayerActive] = useState('X')
  const changePlayer = () =>{
    let test = 0;
    if(playerActive == 'X'){
        console.log(test)
        setPlayerActive('O')
    }else {
        setPlayerActive('X')
        console.log(test)

    }
  }
  return (
    <div className="game">
      <Board player={playerActive} change={changePlayer} />
    </div>
  );
}
