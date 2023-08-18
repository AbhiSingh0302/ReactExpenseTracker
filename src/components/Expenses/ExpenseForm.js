const ExpenseForm = () => {
    return (
        <form>
            <input type="text" placeholder="Enter title"/>
            <input type="number" placeholder="Enter amount"/>
            <input type="date" placeholder="Enter date"/>
            <input type="submit" placeholder="Add"/>
        </form>
    )
}

export default ExpenseForm;