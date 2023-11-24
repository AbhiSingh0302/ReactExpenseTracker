import React,{useState} from "react"; // imported just for learning purpose and putting emphasis on it
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    const clickHandler = () => {
        const newTitle = prompt("What is new Title");
        if(newTitle && newTitle.trim()){
            setTitle(newTitle.trim());
        }
    }
    const changePrice = () => {
        const newAmount = prompt("What is new amount");
        if(!isNaN(Number(newAmount)) && newAmount){
            setAmount(Number(newAmount))
        }
    }
    const removeHandler = (e) => {
        console.log(e.target.parentNode.remove());
    }

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} location={props.location} amount={amount}/>
            <button onClick={clickHandler} className="expense-button">Change Title!!</button>
            <button onClick={removeHandler} className="expense-button">Delete</button>
            <button onClick={changePrice} className="expense-button">Change Price</button>
        </Card>
        </li>
    );
}

export default ExpenseItem;