import React,{useState} from "react";

import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpeneDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={() => setIsEditing(true)}> Add New Expense </button>}
        {isEditing && <ExpenseForm onSaveExenseData={saveExpeneDataHandler} onCancel={() => setIsEditing(true)}/>}
    </div>
}

export default NewExpense;