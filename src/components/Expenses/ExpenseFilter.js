import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {

const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
}

return (
    <>
        <div className="filter-box">
            <label className="filter-label">Filter By Year</label>
            <select value={props.selected} onChange={dropdownChangeHandler} className="filter-select">
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    </>
)
}

export default ExpenseFilter;