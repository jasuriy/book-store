import "./App.css";
import React,{useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "The Monk who sold his Ferrari",
    amount: 9.99,
    date: new Date(2021, 2, 8),
  },
  {
    id: "e2",
    title: "Who will cry when you die",
    amount: 12.99,
    date: new Date(2022, 1, 3),
  },
  {
    id: "e3",
    title: "The Leader who had no title",
    amount: 9.99,
    date: new Date(2020, 4, 7),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="container">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
