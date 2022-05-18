const { faker } = require('@faker-js/faker');

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Test1234',
  database: 'learning_with_node',
});

// var data = [];
// for (var i = 0; i < 500; i++) {
//   data.push([faker.internet.email(), faker.date.past()]);
// }

// var q = 'INSERT INTO users (email, created_at) VALUES ?';
// find earliest date a user was joined
var q2 = 'SELECT date_format(min(created_at), \'%b %D %Y\') as earliest_date FROM users;';

connection.query(q2, function (err, result) {
  console.log(err);
  console.log(result);
});

connection.end();
