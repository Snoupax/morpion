import React from "react";
import Square from "./Square";


export default function Board(props){
    const styled = {width: '25%', marginLeft:'auto', marginRight:'auto', marginTop: '100px', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'};
    let squares = [];
    for (let i = 0; i<9; i++){
        squares.push(<Square value={i} player={props.player} change={props.change}/>)
      }
    return (
        <div style={styled}>
            <h2 style={{width: '100%'}}>Player {props.player}</h2>
        {squares}
        </div>
        )
}