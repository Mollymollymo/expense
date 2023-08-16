import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const receiveFilter = (selectYear) => {
    setFilterYear(selectYear);
  };

  const filerExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} sendFilter={receiveFilter} />
        <ExpenseList items={filerExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
