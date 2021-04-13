const { Pool } = require('pg');

const pool = new Pool({
  user: 'development',
  password: 'development',
  host: 'localhost',
  database: 'expense_db',
  port: 5432
});
//console.log("pool inside db.js: ", pool);


pool.connect((err) => {
  if (err) throw new Error("error inside db.js: ", err);
})
/*
pool.connect((err)=>{
  if (err){
    return console.error('Error acquiring client', err.stack);
  }
});

pool.connect(err =>{
  console.log("error inside db.js: ", err);
});
/*
pool.connect((err, client, done) => {
  if (err) throw err
  client.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
    done()
    if (err) {
      console.log("error while connecting: ",err.stack)
    } else {
      console.log(res.rows[0])
    }
  })
})
*/
console.log('postgrel sql db connection establishing...');
//exporting pool in 
module.exports = pool;