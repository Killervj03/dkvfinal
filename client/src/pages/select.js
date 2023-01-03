let mysql = require('mysql2');
let config = require('./config.js');

let connection = mysql.createConnection(config);

let sql = `SELECT * FROM login`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

connection.end(); 