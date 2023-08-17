import React from "react"; // imported just for learning purpose and putting emphasis on it
import './ExpenseItem.css'

function ExpenseDetails(props){
    return (
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>Rs{props.amount}</div>
        </div>
    )
}

export default ExpenseDetails;