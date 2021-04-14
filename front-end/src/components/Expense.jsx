import React from 'react'

const Expense = (props) => {
  const {totalExpense} = props;
  return (
    <div className="card">
      <p>Expense</p>
      <p>{"$"}{totalExpense}</p>
      <div className="container">
      <h4>Doughnut Chart</h4>  
      </div>
    </div>
    
  )
}

export default Expense