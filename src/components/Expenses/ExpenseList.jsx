import React from 'react'
import '../../App.css'
// import ExpenseItem from './ExpenseItem.jsx'
import ExpenseItem from './ExpenseItem';
;


const ExpensesList = (props) => {
  
  if (props.items.length === 0) {
    return <h2 className='expense-list_fallback'>Found no expenses</h2>; 
  }
  
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        
      ))}
    </ul>
  );
};

export default ExpensesList