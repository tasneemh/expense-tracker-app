module.exports = (pool) =>{
  const saveNewUser = (user) =>{
    //console.log("user inside index.js: ", user);    
    const {firstName, lastName, email, password} = user;
    return pool.query(`INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *`, [firstName, lastName, email, password]).then(response=>{
      //console.log("response inside index.js: ",response.rows[0]);
      return response.rows[0];
    }).catch(error=>{
      //console.log("error inside index.js: ", error);
      return error;
    });    
  };
  const checkRegisteredUser = (email) =>{
    return pool.query(`SELECT * FROM users WHERE email=$1`,[email]).then(response=>{
      //console.log("response inside index.js",response.rows[0]);
      return response.rows[0];
    }).catch(error=>{
      //console.log("error inside index.js", error);
      return error;
    });
  };
  const saveNewExpense = (expense) =>{
    //console.log("expense inside index.js: ", expense);
    const {userId, type, category, amount, date } = expense;
    //console.log("userId inside index.js in saveNewExpense: ", userId);
    return pool.query(`INSERT INTO expenses(user_id, expense_type, category, amount, expense_date) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [userId, type, category, amount, date]).then(response=>{
      //console.log(response);
      return response.rows[0];
    }).catch(error=>{
      //console.log(error);
      return error;
    });
  };
  const getAllExpenses = (userId) =>{
    //console.log("userId inside index.js: ",userId);
    return pool.query(`SELECT * FROM expenses WHERE user_id = $1 ORDER BY added_at DESC;`, [userId]).then(response=>{
      //console.log("response inside index:", response.rows);
      return response.rows;
    }).catch(error=>{
      console.log("error inside index", error);
      return error;
    });
  };
  const deleteExpenseItem = (userId, itemId) =>{
    return pool.query(`DELETE FROM expenses WHERE user_id = $1 AND id = $2;`, [userId, itemId]).then(response=>{
      //console.log("response inside index: ",response.rows);
      const message = "Successful";
      return message;
    }).catch(error=>{
      console.log(error);
      return error;
    });
  };
  const getTotalIncome = (userId) =>{
    return pool.query(`SELECT SUM(amount) FROM expenses WHERE user_id = $1 AND expense_type = 'income';`, [userId]).then(response=>{
      console.log("response inside index.js",response.rows[0]);
      return response.rows[0];
    }).catch(error=>{
      console.log("error inside index.js: ",error);
      return error;
    });
  };
    const getTotalExpense = (userId) =>{
    return pool.query(`SELECT SUM(amount) FROM expenses WHERE user_id = $1 AND expense_type = 'expense';`, [userId]).then(response=>{
      console.log("response inside index.js",response.rows[0]);
      return response.rows[0];
    }).catch(error=>{
      console.log("error inside index.js: ",error);
      return error;
    });
  };
  return {saveNewUser, checkRegisteredUser, saveNewExpense, getAllExpenses, deleteExpenseItem, getTotalIncome, getTotalExpense};
}