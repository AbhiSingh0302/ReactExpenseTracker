import React,{useState} from "react"; // imported just for learning purpose and putting emphasis on it
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {props.items.filter(el => el.date.getFullYear().toString() === filteredYear.toString()).map((expense) => (
                //Had to use round bracket(()) instead of curly({}) because it was giving return error
                <ExpenseItem title={expense.title}
                date={expense.date}
                amount={expense.amount}
                //Had to use key attr coz new expense was not adding as expected(old element being showed instead of new expense)
                key={expense.id}/>    
            ))}
            {/* <ExpenseItem title={props.items[0].title}
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
                location={props.items[3].location} /> */}
        </Card>
    );
}

export default Expenses;
