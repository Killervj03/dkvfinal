const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const cors = require("cors");

app.use(cors());
// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dkv_db'
});

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//add new user
app.post('/',(req, res) => {
  let data = {name: req.body.name};
  let sql = "INSERT INTO logins SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

// create a GET route
app.get('/', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
}); //Line 11

//const bodyParser = require('body-parser');
//var connection = require('express-myconnection');
//var mysql = require('mysql');

//app.use(bodyParser.json());
//app.use(
//    connection(mysql, {
//        host: 'localhost', //'localhost',
//        user: 'root',
//        password: '',
//        port: 3306, //port mysql
//        database: 'dkv_db'
//    }, 'pool')); //or single
//app.post('/Home', (req, res) => {
//
//});
//app.listen(5000, () => {
//    console.log(`app is running on port 5000`);
//});

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6