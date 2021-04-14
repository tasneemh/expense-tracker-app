import React from "react";
import Navbar from "./Navbar";
import Income from "./Income";
import Expense from "./Expense";
import ExpenseTracker from "./ExpenseTracker";

export default function User(props){
  const {loggedIn, validate, value, onChange, expenseArr, setExpenseArr, totalIncome, setTotalIncome, totalExpense, setTotalExpense, balance, setBalance} = props;
  validate();
  return (
    <div>
      <Navbar loggedIn={loggedIn}/>
      <div className="details-container">
      <Income 
      totalIncome={totalIncome}
      setTotalIncome={setTotalIncome}/>
      
      <ExpenseTracker 
      onChange={onChange}
      value={value}
      expenseArr={expenseArr}
      setExpenseArr={setExpenseArr}
      totalIncome={totalIncome}
      setTotalIncome={setTotalIncome}
      totalExpense={totalExpense}
      setTotalExpense={setTotalExpense}
      setBalance={setBalance}
      balance={balance}
      />
      <Expense 
      totalExpense={totalExpense}
      setTotalExpense={setTotalExpense}/>
      </div>
    </div>
  );
};