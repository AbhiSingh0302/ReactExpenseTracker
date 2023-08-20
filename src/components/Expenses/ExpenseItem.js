import React,{useState} from "react"; // imported just for learning purpose and putting emphasis on it
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title);
    const [amount,setAmount] = useState(props.amount);
    const clickHandler = () => {
        setTitle("Updated!!")
        console.log(title);
    }
    const changePrice = () => {
        setAmount(100)
    }
    const removeHandler = (e) => {
        console.log(e.target.parentNode.remove());
    }

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} location={props.location} amount={amount}/>
            <button onClick={clickHandler}>Change Title!!</button>
            <button onClick={removeHandler}>Delete</button>
            <button onClick={changePrice}>Change Price</button>
        </Card>
        </li>
    );
}

export default ExpenseItem;