import React, {useState} from "react";

export default function Square(props){
    // Style
    const styled = { border:'2px solid #000', width: '31%', minHeight: '100px', fontSize: '72px' };
    // Déclaration
    const nameDiv = props.name;



    const gameInProgress = props.gameInProgress;
    const setGameInProgress = props.setGameInProgress
    const playerActive = gameInProgress.playerActive
    const winOrNot = props.winOrNot
    
    const symboleX = "X";
    const symboleO = "O";
    const [symboleUse, setSymboleUse] = useState("")

    function handleClick (e){
        console.log({nameDiv})
        if(playerActive === "X"){
            console.log("X")
            setSymboleUse(symboleX)
            props.changePlayer();
            setGameInProgress((prevState => ({
                ...prevState,
                game: {
                    ...prevState.game,
                    [nameDiv]: "X"
                }})))
            winOrNot(gameInProgress.game, gameInProgress.gameStatus)
        } else if (playerActive === "O"){
            console.log("O")
            setSymboleUse(symboleO)
            props.changePlayer();
            setGameInProgress((prevState => ({
                ...prevState,
                game: {
                    ...prevState.game,
                    [nameDiv]: "O"
                }})))
                winOrNot(gameInProgress.game, gameInProgress.gameStatus)
        }
    }    
    return (
        <div name={nameDiv} style={styled} onClick={(e)=> handleClick()}>{symboleUse}</div>
    )
}