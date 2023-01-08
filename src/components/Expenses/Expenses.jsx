import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

function Expense(props) {
  const [filteredYear, setFilteresYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteresYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expense={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
export default Expense;
