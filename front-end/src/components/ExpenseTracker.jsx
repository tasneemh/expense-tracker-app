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
      <p>Powered by Speechly</p>
      <h3>Total Balance: ${balance}</h3>
      <p>Try saying</p>
      <p>Add income for $100 in category salary for Monday</p>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div>
          <label>Type</label>
            <div>
              <select {...register("type")}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
          </div>
          <div>
            <label>Category</label>
              <div>
                <select {...register("category")}>
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
                </select>
              </div>
          </div>
      </div>
      <div className="row">
        <div>
          <label>Amount</label>
            <div>
              <input type="number" {...register("amount")}/>
            </div>
          </div>
          <div >
            <label>Date</label>
              <div {...register("date")}>
                <DatePicker 
                onChange={onChange}
                value={value}/>
              </div>
          </div>
      </div>
      <input type="submit"/>
      
      
      </form>
      <div className="">
      <p>Array of list from database</p>
      <ul className="list-item">
      {expenseArr && expenseArr.map(expenseItem=><ExpenseItem
        totalIncome={totalIncome}
        totalExpense={totalExpense}          
        setTotalIncome={setTotalIncome}
        setTotalExpense={setTotalExpense}  
        expenseItem={expenseItem}
        setExpenseArr={setExpenseArr}
        key={expenseItem.id}
        setBalance={setBalance}/>)}  
      </ul>    
      </div>
    </div>
  )
}

export default ExpenseTracker
