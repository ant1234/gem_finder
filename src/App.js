import NewExpenseComponent from "./components/Expenses/NewExpenseComponent";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



const App = () => {

  const [expense, setExpense] = useState(DUMMY_DATA);

  const addExpenseHandler = expense => {
    console.log('In App.js');
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onaAddExpense={addExpenseHandler}/>
      <NewExpenseComponent expenses={expense}/>
    </div>
    
  );
}

export default App;
