require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    idleTimeout: 60000,
})

module.exports = pool.promise()