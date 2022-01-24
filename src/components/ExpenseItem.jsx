import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div className="expense-itme__date">March 28th 2021</div>
      <div className="expense-item__description">
        <div className="expense-item__name">
          <h2>Car Insurence</h2>
        </div>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
