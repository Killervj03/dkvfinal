let mysql  = require('mysql2');
let config = require('./config');
let connection = mysql.createConnection(config);

// insert statment
let sql = `INSERT INTO login(id,user_name,password)
           VALUES('','admin','admin')`;

// execute the insert statment
connection.query(sql);

connection.end();
