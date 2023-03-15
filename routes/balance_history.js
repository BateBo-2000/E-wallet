const express = require('express');
const balance_history_con = require('../controllers/balance_history_controller')
let routerBalanceHistory = express.Router();
/* this router is handling everything that starts with /balance_history/*/

routerBalanceHistory.use(function stamp(req,res,next){
    console.log('balance router used')
    next()
})

routerBalanceHistory
.post('/',balance_history_con.record)
.post('/getHistory',balance_history_con.getHistory)
.post('/getHistoryByDates',balance_history_con.getHistoryByDate)

module.exports = routerBalanceHistory;