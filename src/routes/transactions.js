const express = require('express');
const trans_con = require('../controllers/transaction_controller')
const {authenticate} = require('../app/authorization middleware/authorization_service')
let routerTrans = express.Router();
/* this router is handling everything that starts with /transactions/*/

routerTrans.use(function stamp(req,res,next){
    console.log('transactions router used')
    next()
})

routerTrans
.post('/make', authenticate, trans_con.makeTrans)
.get('/history', authenticate, trans_con.getHistory)
.post('/searchByDate', authenticate, trans_con.searchByDate)
.post('/searchByMoney', authenticate, trans_con.searchByMoney)
.post('/searchByReciever', authenticate, trans_con.searchByReciever)

module.exports = routerTrans;