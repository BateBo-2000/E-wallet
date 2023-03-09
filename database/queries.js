const con = require('./connection')

let test = con.query(`select * from paypal.users`, (err, res)=>{
    console.log(err);
    return console.log(res);
})

module.exports = test