import React, {useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';

const DoughnutChartForExpense = (props) => {
  const {dataArrForExp, expArr, setExpArr, bgColForExp, setBgColForExp, borderColForExp, setBorderColForExp,hoverBgColForExp,setHoverBgColForExp, hoverBorderColForExp, setHoverBorderColForExp, labelsArrForExp, setLabelsArrForExp} = props;
  console.log("dataArrForExp in DoughnutChart: ",dataArrForExp);
  
  const getExpenseArr = async () =>{
    let arr3 = [];
    if (dataArrForExp){
      const arr2 = await dataArrForExp.map(item=>{
      arr3.unshift(item.amount);
      });
      console.log("arr3: in doughnut chart: ",arr3);
    setExpArr(arr3);    
    }  
  };
    
  const backroundColorArr =  () =>{
    const backgroundColorArr =[];
    const borderColorArr = [];
    const hoverBackgroundColorArr = [];
    const hoverBorderColorArr = [];
    const labelsArr = [];
    if (dataArrForExp){
    const arr =  dataArrForExp.filter(item => {
      if (item.category==="Gas"){//red
        backgroundColorArr.unshift('#465C69');
        borderColorArr.unshift('#465C69');
        hoverBackgroundColorArr.unshift('#465C69');
        hoverBorderColorArr.unshift('#465C69');
        labelsArr.unshift("Gas");
      } else if (item.category==="Shopping"){
        backgroundColorArr.unshift('#C4A69D');
        borderColorArr.unshift('#C4A69D');
        hoverBackgroundColorArr.unshift('#C4A69D');
        hoverBorderColorArr.unshift('#C4A69D');
        labelsArr.unshift("Shopping");
      } else if (item.category==="Groceries"){
        backgroundColorArr.unshift('#98A886');
        borderColorArr.unshift('#98A886');
        hoverBackgroundColorArr.unshift('#98A886');
        hoverBorderColorArr.unshift('#98A886');
        labelsArr.unshift("Groceries");
      } else if (item.category==="Business"){
        backgroundColorArr.unshift('#FAA916');
        borderColorArr.unshift('#FAA916');
        hoverBackgroundColorArr.unshift('#FAA916');
        hoverBorderColorArr.unshift('#FAA916');
        labelsArr.unshift("Business");
      } else if (item.category==="Gifts"){
        backgroundColorArr.unshift('#748386');
        borderColorArr.unshift('#748386');
        hoverBackgroundColorArr.unshift('#748386');
        hoverBorderColorArr.unshift('#748386');
        labelsArr.unshift("Gifts");
      } else {
        backgroundColorArr.unshift('#3B0D11');
        borderColorArr.unshift('#3B0D11');
        hoverBackgroundColorArr.unshift('#3B0D11');
        hoverBorderColorArr.unshift('#3B0D11');
        labelsArr.unshift("Travel");
      } 
    });
    setBgColForExp(backgroundColorArr);
    setBorderColForExp(borderColorArr);
    setHoverBgColForExp(hoverBackgroundColorArr);
    setHoverBorderColForExp(hoverBorderColorArr);
    setLabelsArrForExp(labelsArr);
    }
  };
  useEffect(()=>{
    getExpenseArr();
    backroundColorArr();
  }, [dataArrForExp]);
  console.log("bgColForExp: ", bgColForExp);
  console.log("expArr: ", expArr);
  return (
    <div>
      <Doughnut 
      className="doughnut-chart"
      data={{
        labels: labelsArrForExp,
        datasets: [{
        // label: '# of votes',
        backgroundColor: bgColForExp,
        borderColor: borderColForExp,
        borderWidth: 1,
        hoverBackgroundColor: hoverBgColForExp,
        hoverBorderColor: hoverBorderColForExp,
        data: expArr
        }]
      }}
      height={400}
      width={400}
      options={{ maintainAspectRatio: false,
        scales:{
          yAxes:[
            {
              ticks:{
                beginAtZero: true
              }
            }
          ]
        }
        }
      }/> 
    </div>
  )
}

export default DoughnutChartForExpense;
