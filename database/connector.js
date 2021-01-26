const mysql = require('mysql2');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_doc',
    multipleStatements: true
});

connection.getConnection((err) => {
    if (err) {
        console.log(JSON.stringify(err));
    } else {
        console.log('Connection success!');
    }
})

module.exports = connection.promise();