import axios from 'axios';
import React from 'react'
import DoughnutChart from "./DoughnutChart";
const Income = (props) => {
  const {totalIncome, setTotalIncome} = props;
  /*
  const getTotalIncome = () =>{
    axios.get(`http://localhost:8080/${userId}/gettotalincome`).then(response=>{
      console.log("response inside income: ", response);
      
    }).catch(error=>{
      console.log(error);
    });
  };
  */
  return (
    <div className="card">
      <p>Income</p>
      <p>{"$"}{totalIncome}</p>      
      <div className="container">
      <h4>Doughnut Chart</h4>  
      <DoughnutChart />
      </div>
    </div>
    
  )
}

export default Income
