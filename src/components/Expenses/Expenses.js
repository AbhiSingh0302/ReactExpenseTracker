import React,{useState} from "react"; // imported just for learning purpose and putting emphasis on it
import './Expenses.css'
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    const filteredExpense = props.items.filter(el => el.date.getFullYear().toString() === filteredYear.toString())
    
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpense}/>
            <ExpensesList items={filteredExpense}/>
        </Card>
    );
}

export default Expenses;
