import axios from 'axios';
import React, {useEffect} from 'react'
import DoughnutChartForIncome from "./DoughnutChartForIncome";

const Income = (props) => {
  const {totalIncome, setTotalIncome, expenseArr, dataArrForInc, setDataArrForInc, incArr, setIncArr, bgColForInc, setBgColForInc, borderColForInc, setBorderColForInc,hoverBgColForInc,setHoverBgColForInc, hoverBorderColForInc,
  setHoverBorderColForInc, labelsArrForInc,
  setLabelsArrForInc} = props;
  //console.log("expenseArr in Income component: ", expenseArr);
  
  
  /*
  const getdataArrForInc = async () =>{
    arr = await expenseArr.filter(item =>{
    if (item.expense_type === "income"){
    return item.amount;
    } 
  });
  console.log("arr in income component: ",arr);
  setdataArrForInc(arr);
  };
  */
 //let arr3 = [];
 const getDataArrForInc = () =>{  
/*
   const arr2 = await expenseArr.map(item=>{
     if (item.expense_type==="income"){
     arr3.unshift(item.amount);
     }
   });
   console.log("arr3: in doughnut chart: ",arr3);
*/
  const arr = expenseArr.filter(item=>{
     if (item.expense_type==="income"){
      return item.amount;
     }
   });
   setDataArrForInc(arr);
 };

  useEffect(()=>{
    getDataArrForInc();
  },[expenseArr]);
  
  /*
  const getTotalIncome = () =>{
    axios.get(`http://localhost:8080/${userId}/gettotalincome`).then(response=>{
      console.log("response inside income: ", response);
      
    }).catch(error=>{
      console.log(error);
    });
  };
  */
 //console.log(dataArrForInc);
  return (
    <div className="card">
      <p>Income</p>
      <p>{"$"}{totalIncome}</p>      
      <div className="container">
      <h4>Doughnut Chart</h4>  
      <DoughnutChartForIncome dataArrForInc={dataArrForInc}
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
      </div>
    </div>
    
  )
}

export default Income;
