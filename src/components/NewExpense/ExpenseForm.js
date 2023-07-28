import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.sendData(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-controls">
        <div className="form-control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleHandler} />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input type="number" value={inputAmount} onChange={amountHandler} />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input type="date" value={inputDate} onChange={dateHandler} />
        </div>
      </div>
      <div className="form-button">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
