import React from "react"; // imported just for learning purpose and putting emphasis on it
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log("Clicked!!!");
    }
    const removeHandler = (e) => {
        console.log(e.target.parentNode.remove());
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
            <button onClick={clickHandler}>Change Title!!</button>
            <button onClick={removeHandler}>Delete</button>
        </Card>
    );
}

export default ExpenseItem;