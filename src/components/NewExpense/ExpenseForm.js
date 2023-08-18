import React,{useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState("");
    // const [enteredAmount, setEnteredAmount] = useState("");
    // const [enteredDate, setEnteredDate] = useState("");
    // Alternative approach for multiple states
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    })

    const titleChangeHandler = (e) => {
        setUserInput({
            enteredTitle: e.target.value,
            ...userInput
        });
    }
    const amountChangeHandler = (e) => {
        setUserInput({
            enteredAmount: e.target.value,
            ...userInput
        });
    }
    const dateChangeHandler = (e) => {
        setUserInput({
            enteredDate: e.target.value,
            ...userInput
        });
    }
    
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default ExpenseForm;