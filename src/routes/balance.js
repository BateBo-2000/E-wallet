const express = require('express');
const balance_con = require('../controllers/balance_controller')
let routerBalance = express.Router();
/* this router is handling everything that starts with /balance/*/

routerBalance.use(function stamp(req,res,next){
    console.log('balance router used')
    next()
})

routerBalance
.get('/',balance_con.getUserBalance)
.post('/create',balance_con.createBalance)
.post('/update',balance_con.updateBalance)

module.exports = routerBalance;