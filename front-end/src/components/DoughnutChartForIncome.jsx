import React, {useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';

const DoughnutChartForIncome = (props) => {
  const {dataArrForInc, incArr, setIncArr, bgColForInc, setBgColForInc, borderColForInc, setBorderColForInc,hoverBgColForInc,setHoverBgColForInc, hoverBorderColForInc, setHoverBorderColForInc, labelsArrForInc, setLabelsArrForInc} = props;
  console.log("dataArrForInc in DoughnutChart: ",dataArrForInc);
  let arr = [];
  
  const getIncomeArr = async () =>{
    let arr3 = [];
    if (dataArrForInc){
      const arr2 = await dataArrForInc.map(item=>{
      arr3.unshift(item.amount);
      });
      console.log("arr3: in doughnut chart: ",arr3);
      setIncArr(arr3);
    }  
  };
    
  const backroundColorArr =  () =>{
    const backgroundColorArr =[];
    const borderColorArr = [];
    const hoverBackgroundColorArr = [];
    const hoverBorderColorArr = [];
    const labelsArr = [];
    if (dataArrForInc){
    const arr =  dataArrForInc.filter(item => {
      if (item.category==="Salary"){
        backgroundColorArr.unshift('rgba(255, 99, 132, 0.2)');
        borderColorArr.unshift('rgba(255, 99, 132, 0.2)');
        hoverBackgroundColorArr.unshift('rgba(255, 99, 132, 0.2)');
        hoverBorderColorArr.unshift('rgba(255, 99, 132, 0.2)');
        labelsArr.unshift("Salary");
      } else if (item.category==="Investments"){
        backgroundColorArr.unshift('rgba(54, 162, 235, 0.2)');
        borderColorArr.unshift('rgba(54, 162, 235, 0.2)');
        hoverBackgroundColorArr.unshift('rgba(54, 162, 235, 0.2)');
        hoverBorderColorArr.unshift('rgba(54, 162, 235, 0.2)');
        labelsArr.unshift("Investments");
      } else if (item.category==="Extra Income"){
        backgroundColorArr.unshift('rgba(255, 206, 86, 0.2)');
        borderColorArr.unshift('rgba(255, 206, 86, 0.2)');
        hoverBackgroundColorArr.unshift('rgba(255, 206, 86, 0.2)');
        hoverBorderColorArr.unshift('rgba(255, 206, 86, 0.2)');
        labelsArr.unshift("Extra Income");
      } else if (item.category==="Deposits"){
        backgroundColorArr.unshift('rgba(75, 192, 192, 0.2)');
        borderColorArr.unshift('rgba(75, 192, 192, 0.2)');
        hoverBackgroundColorArr.unshift('rgba(75, 192, 192, 0.2)');
        hoverBorderColorArr.unshift('rgba(75, 192, 192, 0.2)');
        labelsArr.unshift("Deposits");
      } else if (item.category==="Savings"){
        backgroundColorArr.unshift('rgba(153, 102, 255, 0.2)');
        borderColorArr.unshift('rgba(153, 102, 255, 0.2)');
        hoverBackgroundColorArr.unshift('rgba(153, 102, 255, 0.2)');
        hoverBorderColorArr.unshift('rgba(153, 102, 255, 0.2)');
        labelsArr.unshift("Savings");
      } else {
        backgroundColorArr.unshift('rgba(255, 159, 64, 0.2)');
        borderColorArr.unshift('rgba(255, 159, 64, 0.2)');
        hoverBackgroundColorArr.unshift('rgba(255, 159, 64, 0.2)');
        hoverBorderColorArr.unshift('rgba(255, 159, 64, 0.2)');
        labelsArr.unshift("Rental Income");
      } 
    });
    setBgColForInc(backgroundColorArr);
    setBorderColForInc(borderColorArr);
    setHoverBgColForInc(hoverBackgroundColorArr);
    setHoverBorderColForInc(hoverBorderColorArr);
    setLabelsArrForInc(labelsArr);
    }
  };
  useEffect(()=>{
    getIncomeArr();
    backroundColorArr();
  }, [dataArrForInc]);
  console.log("bgColForInc: ", bgColForInc);
  console.log("incArr: ", incArr);
  return (
    <div>
      <Doughnut 
      className="doughnut-chart"
      data={{
      labels: labelsArrForInc,
        datasets: [{
        // label: '# of votes',
        backgroundColor: bgColForInc,
        borderColor: borderColForInc,
        borderWidth: 1,
        hoverBackgroundColor: hoverBgColForInc,
        hoverBorderColor: hoverBorderColForInc,
        data: incArr
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

export default DoughnutChartForIncome;
