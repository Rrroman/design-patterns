const { faker } = require('@faker-js/faker');

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user: 'root',
  password : 'Test1234',
  database : 'learning_with_node'
});

function generateAddress(){
  console.log(faker.address.streetAddress());
  console.log(faker.address.city());
  console.log(faker.address.state());
}

generateAddress();

var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].time);
  console.log(results[0].date);
  console.log(results[0].now);
});

connection.end();