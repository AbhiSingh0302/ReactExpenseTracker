import React,{useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [formElement,setFormElement] = useState();

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
    }
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            date: new Date(enteredDate),
            amount: enteredAmount,
            title: enteredTitle
        }
        console.log(expenseData);
        props.onSaveExenseData(expenseData);
        setEnteredDate("");
        setEnteredAmount("");
        setEnteredTitle("");
    }

    const closeForm = () => {
        setFormElement();
        document.getElementById('formBtn').style.display = 'block';
    }

    const openForm = (e) => {
        setFormElement(expForm);
        console.log(document.getElementById('formBtn'))
        document.getElementById('formBtn').style.display = 'none';
    }

    const expForm = <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit"> Add Expense </button>
        <button onClick={closeForm}> Cancel </button>
    </div>
</form>
    
    return (
        <div>
            {formElement}
            <div className="new-expense__actions" id="formBtn">
                <button onClick={openForm}>Add Expense</button>
            </div>
        </div>
    )
}

export default ExpenseForm;