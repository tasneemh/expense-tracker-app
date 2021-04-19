import React, {useEffect} from 'react'
import DoughnutChartForExpense from "./DoughnutChartForExpense";
const Expense = (props) => {
  const {totalExpense, expenseArr, dataArrForExp, setDataArrForExp, expArr, setExpArr, bgColForExp, setBgColForExp, borderColForExp, setBorderColForExp,hoverBgColForExp,setHoverBgColForExp, hoverBorderColForExp,
  setHoverBorderColForExp, labelsArrForExp,
  setLabelsArrForExp} = props;
  
  console.log("expenseArr in Expense component: ", expenseArr);

  const getDataArrForExp = () =>{  
    const arr = expenseArr.filter(item=>{
      if (item.expense_type==="expense"){
      return item.amount;
      }
    });
   setDataArrForExp(arr);
  };

  useEffect(()=>{
    getDataArrForExp();
  },[expenseArr]);

  return (
    <div className="card">
      <p className="card-title">Expense</p>
      <p>{"$"}{totalExpense}</p>
      <div className="container"> 
      <DoughnutChartForExpense 
      dataArrForExp={dataArrForExp}
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
      setLabelsArrForExp={setLabelsArrForExp}
      />
      </div>
    </div>
    
  )
}

export default Expense;