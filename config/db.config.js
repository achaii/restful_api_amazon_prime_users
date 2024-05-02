const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs',
}); 

db.connect((err) => {
    if(err){
        console.log('Error, tidak connnect ke mysql: ' + err.stack);
        return;
    }
});

module.exports = db;