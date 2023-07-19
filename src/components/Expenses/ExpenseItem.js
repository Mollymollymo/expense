import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickedHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-description">
        <h2>{title}</h2>
        <div className="expense-price">${props.amount}</div>
      </div>
      <button onChange={clickedHandler}>Changed Title</button>
    </Card>
  );
};

export default ExpenseItem;
