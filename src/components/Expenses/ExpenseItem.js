import React from "react"; // imported just for learning purpose and putting emphasis on it
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
        </Card>
    );
}

export default ExpenseItem;