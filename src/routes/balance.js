const express = require('express');
const balance_con = require('../controllers/balance_controller')
const {authenticate} = require('../app/authorization middleware/authorization_service')
let routerBalance = express.Router();
/* this router is handling everything that starts with /balance/*/

routerBalance.use(function stamp(req,res,next){
    console.log('balance router used')
    next()
})

routerBalance
.get('/', authenticate, balance_con.getUserBalance)
.post('/create', authenticate, balance_con.createBalance)
.post('/update', authenticate, balance_con.updateBalance)

module.exports = routerBalance;