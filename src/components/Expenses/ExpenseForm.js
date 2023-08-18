const ExpenseForm = () => {
    const changeHandler = (e) => {
        console.log(e.target.value);
    }


    return (
        <form>
            <input type="text" placeholder="Enter title" onChange={changeHandler}/>
            <input type="number" placeholder="Enter amount"/>
            <input type="date" placeholder="Enter date"/>
            <input type="submit" placeholder="Add"/>
        </form>
    )
}

export default ExpenseForm;