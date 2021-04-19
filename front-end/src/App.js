import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import User from "./components/User";
import {useState} from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [value, onChange] = useState(new Date());
  const [expenseArr, setExpenseArr] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [dataArrForInc, setDataArrForInc] = useState([]);
  const [dataArrForExp, setDataArrForExp] = useState([]);
  const [incArr, setIncArr] = useState([]);
  const [expArr, setExpArr] = useState([]);
  const [bgColForInc, setBgColForInc] = useState([]);
  const [borderColForInc, setBorderColForInc] = useState([]);
  const [hoverBgColForInc, setHoverBgColForInc] = useState([]);
  const [hoverBorderColForInc, setHoverBorderColForInc] = useState([]);
  const [labelsArrForInc, setLabelsArrForInc] = useState([]);
  const [labelsArrForExp, setLabelsArrForExp] = useState([]);
  const [bgColForExp, setBgColForExp] = useState([]);
  const [borderColForExp, setBorderColForExp] = useState([]);
  const [hoverBgColForExp, setHoverBgColForExp] = useState([]);
  const [hoverBorderColForExp, setHoverBorderColForExp] = useState([]);
  const [visibility, setVisibility] = useState(false);
  const validate = () =>{
    setLoggedIn(true);
  }
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register 
          visibility={visibility}
          setVisibility={setVisibility}
          />
        </Route>
        <Route path="/login">
          <Login 
          visibility={visibility}
          setVisibility={setVisibility}
          />
        </Route>
        <Route path="/user">
          <User 
          loggedIn={loggedIn}
          validate={validate}
          value={value}
          onChange={onChange}
          expenseArr={expenseArr}
          setExpenseArr={setExpenseArr}
          totalIncome={totalIncome}
          setTotalIncome={setTotalIncome}
          totalExpense={totalExpense}
          setTotalExpense={setTotalExpense}
          balance={balance}
          setBalance={setBalance}
          dataArrForInc={dataArrForInc}
          setDataArrForInc={setDataArrForInc}
          dataArrForExp={dataArrForExp}
          setDataArrForExp={setDataArrForExp}
          incArr={incArr}
          setIncArr={setIncArr}
          expArr={expArr}
          setExpArr={setExpArr}
          bgColForInc={bgColForInc}
          setBgColForInc={setBgColForInc}
          bgColForExp={bgColForExp}
          setBgColForExp={setBgColForExp}
          borderColForInc={borderColForInc}
          setBorderColForInc={setBorderColForInc}
          hoverBgColForInc={hoverBgColForInc}
          setHoverBgColForInc={setHoverBgColForInc}
          hoverBorderColForInc={hoverBorderColForInc}
          setHoverBorderColForInc={setHoverBorderColForInc}
          borderColForExp={borderColForExp}
          setBorderColForExp={setBorderColForExp}
          hoverBgColForExp={hoverBgColForExp}
          setHoverBgColForExp={setHoverBgColForExp}
          hoverBorderColForExp={hoverBorderColForExp}
          setHoverBorderColForExp={setHoverBorderColForExp}
          labelsArrForInc={labelsArrForInc}
          setLabelsArrForInc={setLabelsArrForInc}
          labelsArrForExp={labelsArrForExp}
          setLabelsArrForExp={setLabelsArrForExp}
          />
        </Route>
      </Switch>
    </Router>      
    </div>
  );
}

export default App;

