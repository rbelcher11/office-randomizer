const mysql = require('mysql');

const getDbConnection = () =>
    mysql.createConnection({
        host: '0.0.0.0',
        user: 'mscott',
        password: 'dunder1!',
        database: 'office'
    });

module.exports = {
    getDbConnection
};