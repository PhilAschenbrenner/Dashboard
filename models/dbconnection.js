var mysql = require('mysql2');

var connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'your_api',
        insecureAuth: true
    });


connection.connect();

module.exports = connection;