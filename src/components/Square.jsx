import React, {useState} from "react";

export default function Square(props){
    // Style
    const styled = { border:'2px solid #000', width: '31%', minHeight: '100px', fontSize: '72px' };
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
    const [symboleUse, setSymboleUse] = useState("")

    function handleClick (e){
        if(gameStatus === -1){
            props.changePlayer()
           return;
        }
        console.log({nameDiv})
        if(playerActive === "X"){
            setSymboleUse(symboleX)
            setGameInProgress((prevState => ({
                ...prevState,
                game: {
                    ...prevState.game,
                    [nameDiv]: "X"
                }})))
                winOrNot(gameInProgress.game,gameInProgress.gameStatus)
                props.changePlayer();
        
        } else if (playerActive === "O"){
            setSymboleUse(symboleO)
            setGameInProgress((prevState => ({
                ...prevState,
                game: {
                    ...prevState.game,
                    [nameDiv]: "O"
                }})))
                winOrNot(gameInProgress.game, gameInProgress.gameStatus)
                props.changePlayer();
        }
    }    
    return (
        <div name={nameDiv} style={styled} onClick={(e)=> handleClick()}>{symboleUse}</div>
    )
}