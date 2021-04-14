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
          <Register />
        </Route>
        <Route path="/login">
          <Login />
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
          />
        </Route>
      </Switch>
    </Router>      
    </div>
  );
}

export default App;
