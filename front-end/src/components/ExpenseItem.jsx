import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import axios from "axios";
import { useHistory } from "react-router-dom";

const ExpenseItem = (props) => {
  const {expenseItem, setExpenseArr, totalIncome, totalExpense, setTotalIncome, setTotalExpense, setBalance} = props;
  const history = useHistory();
  const user = history.location.state.user;
  const userId = user.id;
  //console.log("userId: ",userId);
  const deleteExpenseItem = () =>{
    console.log("deleted expense item: ", expenseItem);
    const itemId = expenseItem.id;
    console.log("itemId: ",itemId);
    axios.delete(`http://localhost:8080/${userId}/${itemId}/deleteexpenseitem`).then(response=>{
      //console.log("response inside axios: ", response);
      const message = response.data.message;
      console.log("message: ",message);
      if (message){        
          Promise.all([axios.get(`http://localhost:8080/${userId}/getallexpenses`),
          axios.get(`http://localhost:8080/${userId}/gettotalincome`),
          axios.get(`http://localhost:8080/${userId}/gettotalexpense`)
          ]).then(all=>{
            console.log("all[0].data: ", all[0].data);
            console.log("all[1].data: ", all[1].data);
            console.log("all[2].data: ", all[2].data);
            setExpenseArr(all[0].data.arr);            
            //setTotalExpense(all[2].data.sum.sum);  
            const inc = all[1].data.sum.sum;
            console.log("inc: ", inc);         
            if (inc === null){
              //console.log("HELOO..");
              setTotalIncome(0);
            }else{
              setTotalIncome(inc);
            }
            const exp = all[2].data.sum.sum;
            console.log("exp: ", exp);         
            if (exp === null){
              //console.log("HELOO..");
              setTotalExpense(0);
            }else{
              setTotalExpense(exp);
            }
            setBalance(inc - exp);
          }).catch(error=>{
            console.log(error);
          });
      }
    }).catch(error=>{
      console.log("error inside axios: ", error);
    });
  };
  return (
    <li >
      <h4>{expenseItem.category}</h4>
      <p>{"$"}{expenseItem.amount}{"-"}{expenseItem.expense_date}
      <button onClick={deleteExpenseItem}><AiFillDelete/></button>
      </p>
    </li>
  )
}

export default ExpenseItem;
