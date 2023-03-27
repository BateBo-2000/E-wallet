const express = require('express');
const trans_con = require('../controllers/transaction_controller')
const {authenticate} = require('../app/authorization middleware/authorization_service')
const {transactionsMake, transactionsSearchByDate, transactionsSearchByMoney,transactionsSearchByReciever,transactionsSearchByBalance} = require('../app/validator middleware/validators')
let routerTrans = express.Router();
/* this router is handling everything that starts with /transactions/*/

routerTrans.use(function stamp(req,res,next){
    console.log('transactions router used')
    next()
})

routerTrans
.post('/make', transactionsMake, authenticate, trans_con.makeTrans)
.get('/history', authenticate, trans_con.getHistory)
.post('/searchByDate', transactionsSearchByDate, authenticate, trans_con.searchByDate)
.post('/searchByMoney', transactionsSearchByMoney, authenticate, trans_con.searchByMoney)
.post('/searchByReciever', transactionsSearchByReciever, authenticate, trans_con.searchByReciever)
.post('/searchByBalance', transactionsSearchByBalance, authenticate, trans_con.searchByBalance)

module.exports = routerTrans;