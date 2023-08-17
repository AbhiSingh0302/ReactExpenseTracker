import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2023, 7, 17),
      title: 'Car Insurance',
      amount: 294.67,
      location: 'India'
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title}
       date={expenses[0].date}
       amount={expenses[0].amount} 
       location={expenses[0].location}></ExpenseItem>
    </div>
  );
}

export default App;
