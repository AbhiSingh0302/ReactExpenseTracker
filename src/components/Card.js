import React from "react"; // imported just for learning purpose and putting emphasis on it
import './Card.css'

function Card(props){
    const classes = 'card '+props.className;

    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;