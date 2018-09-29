const mysql = require('mysql');
// const util = require('util');


const pool  = mysql.createPool({

    connectionLimit: 10,
    host: '138.68.90.69',
    user: 'thanos',
    password: '12345678',
    database: 'knowpsyself'

})

// ERRROR HANDLERS
pool.getConnection((err, connection) => {


    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            throw new Error("connection was closed..")
        }
        if (err.code === "ER_CON_COUNT_ERROR") {
            throw new Error("Database has to many connections..")
        }
        if (err.code === "ECONNREFUSED") {
            throw new Error("Database connection was refused...")
        }
    }
})

// PREPARE POOL FOR ASYNC AWAIT
// pool.query = util.promisify(pool.query);

module.exports = pool;


