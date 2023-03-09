require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
})

module.exports = con