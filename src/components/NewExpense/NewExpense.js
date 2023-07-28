import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const receiveData = (data) => {
    const expenseData = {
      ...data,
    };
    props.sendExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm sendData={receiveData} />
    </div>
  );
};

export default NewExpense;
