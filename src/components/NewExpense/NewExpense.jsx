import React from "react";
import ExpenseForm from "./ExpenseForm";
// import "./NewExpense.css";
import "../../App.css"
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expneseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expneseData);
    props.onAddExpense(expneseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
