const express = require("express");
const app = express();
const PORT = 8080;
//for post request
const bodyParser = require("body-parser");
//to avoid network errors with post request
const cors = require('cors');
//for hashing the password
const bcrypt = require('bcrypt');
//importing pool
const pool = require('../sqldb/db');
const { default: axios } = require("axios");
const sqlDbHelpers = require('../sqldb/dbHelpers/index')(pool);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.post("/savenewuser", (request, response)=>{
  //console.log("request.body.data inside server: ", request.body.data);
  const password = request.body.data.password;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = request.body.data;
  user.password = hashedPassword;
  //console.log(user);
  sqlDbHelpers.saveNewUser(user).then(user =>{
    //console.log("response inside savenewuser in server: ", user);
      if (!user){
        response.error({error: "Error in singing up"});
        return;
      }else{
        response.send({newUser:{
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          password: user.password
        }});
      }
  }).catch(error=>{
    //console.log("error inside server.js: ", error);
    response.error({error: "Error"});
  });
  
});
app.post("/checkregistereduser", (request, response)=>{
  //console.log("request.body inside server: ",request.body);
  const user = request.body.data;
  const email = request.body.data.email;
  //console.log("email: ",email);
  sqlDbHelpers.checkRegisteredUser(email).then(user=>{
    //console.log("response inside server.js", user);
    if (!user){
      reseponse.error({error: "error"});
      return;
    } else{
      response.send({newUser: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        password: user.password
      }});
    }
  }).catch(error=>{
    //console.log("error inside server.js: ",error);
    response.error({error: "Error"});
  });
});
app.post("/:id/savenewexpense", (request, response)=>{
  //console.log("request.body: ",request.body);
  const expense = request.body.data;
  sqlDbHelpers.saveNewExpense(expense).then(expense=>{
    //console.log("response inside server.js",expense);
    if (!expense){
      response.error({error: "Error while retrieving info"});
      return;
    } else{
      response.send({message: "Successfully added the expense in database"});
    }    
  }).catch(error=>{
    console.log("error inside server: ", error);
    response.error({error: "Error while saving the expense"});
  });
});
app.get("/:id/getallexpenses", (request, response)=>{
  console.log("request.params in getallexpenses in server.js: ",request.params);
  const userId = request.params.id;
  sqlDbHelpers.getAllExpenses(userId).then(data=>{
    const expenseArr = data;  
    if (!expenseArr){
      response.error({error: "Error"});
    } else{
      response.send({arr: expenseArr});
    }
  }).catch(error=>{
    console.log("error inside server", error);
    response.error({error: "Error while retrieving info"});
  });
});
app.delete("/:userId/:itemId/deleteexpenseitem",(request, response)=>{
  //console.log("request.params inside delete item: ",request.params);
  const userId = request.params.userId;
  const itemId = request.params.itemId;
  //console.log("userId: ", userId);
  //console.log("itemId: ", itemId);
  sqlDbHelpers.deleteExpenseItem(userId, itemId).then(data=>{
    //console.log("data inside server: ",data);
    if (!data){
      response.error({error: "Error"});
    } else{
      response.send({message: data});
    }
  }).catch(error=>{
    console.log("error inside server: ",error);
    response.error({error: "Error"});
  });
});
app.get("/:id/gettotalincome",(request, response)=>{
  console.log("request.params inside server: in gettotalincome",request.params);
  const userId = request.params.id;
  console.log("userId: ", userId);
  sqlDbHelpers.getTotalIncome(userId).then(data=>{
    console.log("data in gettotalincome inside server.js", data);
    if (!data){
      response.error({error: "Error"});
    } else{
      response.send({sum: data});
    }
  }).catch(error=>{
    console.log("error inside server.js: ",error);
  });
});
app.get("/:id/gettotalexpense",(request, response)=>{
  console.log("request.params inside server in gettotalexpense: ",request.params);
  const userId = request.params.id;
  console.log("userId: ", userId);
  sqlDbHelpers.getTotalExpense(userId).then(data=>{
    console.log("data inside server.js in gettotal expense", data);
    if (!data){
      response.error({error: "Error"});
    } else{
      response.send({sum: data});
    }
  }).catch(error=>{
    console.log("error inside server.js: ",error);
  });
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});
