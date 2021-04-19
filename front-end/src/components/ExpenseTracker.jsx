import React from 'react';
import { useForm } from "react-hook-form";
import DatePicker from 'react-date-picker';
import axios from "axios";
import { useHistory } from "react-router-dom";
import ExpenseItem from "./ExpenseItem";

const ExpenseTracker = (props) => {
  const {value, onChange, expenseArr, setExpenseArr, totalIncome, setTotalIncome, totalExpense, setTotalExpense, balance, setBalance} = props;
  //console.log("balance: ",balance);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history = useHistory();
  const user = history.location.state.user;
  const userId = user.id;

  const onSubmit = (data) =>{
    data.date = value.toString().slice(0,15);
    data.amount= Number(data.amount);
    data.userId = userId;
    console.log("data: ", data);
    axios.post(`http://localhost:8080/${userId}/savenewexpense`, {data}).then(response=>{
      //console.log("response inside axios: ", response);
      const message = response.data.message;
      //console.log("message: ", message);
      if (message){
      console.log("userId: ",userId);
      axios.get(`http://localhost:8080/${userId}/getallexpenses`).then(info=>{
        setExpenseArr(info.data.arr);
        if (expenseArr){
          Promise.all([axios.get(`http://localhost:8080/${userId}/gettotalincome`), axios.get(`http://localhost:8080/${userId}/gettotalexpense`)]).then(all=>{
            console.log("all[0].data: ",all[0].data);
            console.log("all[1].data: ",all[1].data);
            const inc = all[0].data.sum.sum;
              if (inc === null){
                setTotalIncome(0);
              }else{
                setTotalIncome(inc);
              }  
            const exp = all[1].data.sum.sum;
              if (exp === null){
                setTotalExpense(0);
              }else{
                setTotalExpense(exp);
              }  
              setBalance(inc-exp);           
          }).catch(error=>{
            console.log(error);
            });
              
      }
    }).catch(error=>{
      console.log(error);
      });
    }
  }).catch(error=>{
    console.log(error);
  });
}
  return (
    <div className="card">
      <h2><b>Expense Tracker</b></h2>
      <h3>Total Balance: ${balance}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="item-row">
        <div className="item-column">
          <label className="item-label">Type</label>
            <div className="item-options-col">
              <select className="item-options"
              {...register("type")}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
          </div>
          <div className="item-column">
            <label className="item-label">Category</label>
              <div className="item-options-col">
                <select className="item-options"
                {...register("category")}>
                  <option value="Salary">Salary</option>
                  <option value="Business">Business</option>
                  <option value="Investments">Investments</option>
                  <option value="Extra Income">Extra Income</option>
                  <option value="Deposits">Deposits</option>
                  <option value="Groceries">Groceries </option>
                  <option value="Shopping">Shopping</option>
                  <option value="Gas">Gas</option>
                  <option value="Gifts">Gifts</option>
                  <option value="Savings">Savings</option>
                  <option value="Rental Income">Rental Income</option>
                  <option value="Travel">Travel</option>
                </select>
              </div>
          </div>
      </div>
      <div className="item-row">
        <div className="item-column">
          <label className="item-label">Amount</label>
            <div className="item-amount-col">
              <input className="item-amount" type="number" {...register("amount")}/>
            </div>
          </div>
          <div className="item-column">
            <label className="item-label">Date</label>
              <div className="date-col" {...register("date")}>
                <DatePicker 
                onChange={onChange}
                value={value}/>
              </div>
          </div>
      </div>
      <div className="create-btn-container">
      <input className="create-btn" type="submit" value="CREATE"/>
      </div>
      
      </form>
      <div className="list-item-container">
      <div className="list-items">
      {expenseArr && expenseArr.map(expenseItem=><ExpenseItem
        totalIncome={totalIncome}
        totalExpense={totalExpense}          
        setTotalIncome={setTotalIncome}
        setTotalExpense={setTotalExpense}  
        expenseItem={expenseItem}
        setExpenseArr={setExpenseArr}
        key={expenseItem.id}
        setBalance={setBalance}/>)}  
      </div>    
      </div>
    </div>
  )
}

export default ExpenseTracker;
