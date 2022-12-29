import React from "react";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense />
    </div>
  );
}

export default App;
