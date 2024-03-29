import React, { useState } from "react";
import Expense from "./components/Expense/Expenses/Expenses";
import NewExpense from "./components/Expense/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    empName: "Ankit",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    empName: "Ankit",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    empName: "Ankit",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    empName: "Ankit",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
