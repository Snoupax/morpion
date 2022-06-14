import React, {useState} from "react";

export default function Square(props){
    const styled = { border:'2px solid #000', width: '31%', minHeight: '100px', fontSize: '72px' };
    const value = props.value;
    const player = props.player;
    const symboleX = "X";
    const symboleO = "O";
    const [symboleUse, setSymboleUse] = useState("")
    
    function handleClick (e){
        console.log({value})
        if(player == "X"){
            console.log("X")
            setSymboleUse(symboleX)
            props.change();
        } else if (player == "O"){
            console.log("O")
            setSymboleUse(symboleO)
            props.change();
        }
    }    
    return (
        <div value={value} style={styled} onClick={(e)=> handleClick()}>{symboleUse}</div>
    )
}