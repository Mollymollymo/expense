import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const receiveData = (data) => {
    const expenseData = {
      ...data,
    };
    props.sendExpense(expenseData);
    setShowForm(false);
  };

  const [showForm, setShowForm] = useState(false);

  const formHandler = () => {
    setShowForm(true);
  };

  const cancelHandler = () => {
    setShowForm(false);
  };
  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm sendData={receiveData} onCancel={cancelHandler} />
      )}
      {!showForm && <button onClick={formHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
