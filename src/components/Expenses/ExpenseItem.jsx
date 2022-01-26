import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString('eng-US', {month:'long'})
  const day = props.date.toLocaleString('en-US', {day:'2-digit'})
  const year = props.date.getFullYear();
  return (
    <Card className="expense-item">
    <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <div className="expense-item__name">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;