import React from "react";
import Navbar from "./Navbar";
import Income from "./Income";
import Expense from "./Expense";
import ExpenseTracker from "./ExpenseTracker";


export default function User(props){
  const {loggedIn, validate, value, onChange, expenseArr, setExpenseArr, totalIncome, setTotalIncome, totalExpense, setTotalExpense, balance, setBalance, dataArrForInc, setDataArrForInc, dataArrForExp, setDataArrForExp,incArr, setIncArr, expArr, setExpArr, bgColForInc, setBgColForInc, bgColForExp, setBgColForExp, borderColForInc, setBorderColForInc,hoverBgColForInc,setHoverBgColForInc, hoverBorderColForInc,
  setHoverBorderColForInc, borderColForExp,setBorderColForExp,hoverBgColForExp,setHoverBgColForExp,hoverBorderColForExp,setHoverBorderColForExp, labelsArrForInc,setLabelsArrForInc,labelsArrForExp,setLabelsArrForExp} = props;
  
  console.log("validate in user component: ",validate);
  validate();
  return (
    <div className="main-section">
      <Navbar loggedIn={loggedIn}/>
      <div className="details-container">
      <Income 
      totalIncome={totalIncome}
      setTotalIncome={setTotalIncome}
      expenseArr={expenseArr}
      dataArrForInc={dataArrForInc}
      setDataArrForInc={setDataArrForInc}
      incArr={incArr}
      setIncArr={setIncArr}
      bgColForInc={bgColForInc}
      setBgColForInc={setBgColForInc}      
      borderColForInc={borderColForInc}
      setBorderColForInc={setBorderColForInc}
      hoverBgColForInc={hoverBgColForInc}
      setHoverBgColForInc={setHoverBgColForInc}
      hoverBorderColForInc={hoverBorderColForInc}
      setHoverBorderColForInc={setHoverBorderColForInc}
      labelsArrForInc={labelsArrForInc}
      setLabelsArrForInc={setLabelsArrForInc}    
      />
      
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
      setTotalExpense={setTotalExpense}
      expenseArr={expenseArr}
      dataArrForExp={dataArrForExp}
      setDataArrForExp={setDataArrForExp}
      expArr={expArr}
      setExpArr={setExpArr}
      bgColForExp={bgColForExp}
      setBgColForExp={setBgColForExp}
      borderColForExp={borderColForExp}
      setBorderColForExp={setBorderColForExp}
      hoverBgColForExp={hoverBgColForExp}
      setHoverBgColForExp={setHoverBgColForExp}
      hoverBorderColForExp={hoverBorderColForExp}
      setHoverBorderColForExp={setHoverBorderColForExp}
      labelsArrForExp={labelsArrForExp}
      setLabelsArrForExp={setLabelsArrForExp}/>
      </div>
      
    </div>
  );
};