const express = require('express');
const trans_con = require('../controllers/transaction_controller')
let routerTrans = express.Router();
/* this router is handling everything that starts with /transactions/*/

routerTrans.use(function stamp(req,res,next){
    console.log('transactions router used')
    next()
})

routerTrans
.post('/make',trans_con.makeTrans)
.post('/history',trans_con.getHistory)
.delete('/delete',trans_con.delete)
.post('/searchByDate',trans_con.searchByDate)
.post('/searchByMoney',trans_con.searchByMoney)
.post('/searchByReciever',trans_con.searchByReciever)

module.exports = routerTrans;