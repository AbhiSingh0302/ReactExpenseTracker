import React from "react"; // imported just for learning purpose and putting emphasis on it
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem title={props.items[0].title}
                date={props.items[0].date}
                amount={props.items[0].amount}
                location={props.items[0].location} />
            <ExpenseItem title={props.items[1].title}
                date={props.items[1].date}
                amount={props.items[1].amount}
                location={props.items[1].location} />
            <ExpenseItem title={props.items[2].title}
                date={props.items[2].date}
                amount={props.items[2].amount}
                location={props.items[2].location} />
            <ExpenseItem title={props.items[3].title}
                date={props.items[3].date}
                amount={props.items[3].amount}
                location={props.items[3].location} />
        </Card>
    );
}

export default Expenses;
