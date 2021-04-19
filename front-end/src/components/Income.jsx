import React, {useEffect} from 'react';
import DoughnutChartForIncome from "./DoughnutChartForIncome";

const Income = (props) => {
  const {totalIncome, expenseArr, dataArrForInc, setDataArrForInc, incArr, setIncArr, bgColForInc, setBgColForInc, borderColForInc, setBorderColForInc,hoverBgColForInc,setHoverBgColForInc, hoverBorderColForInc,
  setHoverBorderColForInc, labelsArrForInc,
  setLabelsArrForInc} = props;
  
  const getDataArrForInc = () =>{  
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
  

  return (
    <div className="card">
      <p className="card-title">Income</p>
      <p>{"$"}{totalIncome}</p>      
      <div className="container">
        
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
