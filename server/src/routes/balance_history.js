const express = require('express');
const balance_history_con = require('../controllers/balance_history_controller')
const {authenticate} = require('../app/authorization middleware/authorization_service')
const {BHgetHistory, BHgetHistoryByDates} = require('../app/validator middleware/validators')
let routerBalanceHistory = express.Router();

/* this router is handling everything that starts with /balance_history/*/

routerBalanceHistory.use(function stamp(req,res,next){
    console.log('balance router used')
    next()
})

routerBalanceHistory
.post('/', authenticate, balance_history_con.record)
.post('/getHistory', BHgetHistory, authenticate, balance_history_con.getHistory)
.post('/getHistoryByDates', BHgetHistoryByDates, authenticate, balance_history_con.getHistoryByDate)

module.exports = routerBalanceHistory;