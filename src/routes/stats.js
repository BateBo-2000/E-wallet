const express = require('express');
let routerStats = express.Router();
const stats_con = require('../controllers/statistics_controller')
/* this router is handling everything that starts with /stats/*/

routerStats.use(function stamp(req,res,next){
    console.log('stats router used')
    next()
})

routerStats
.post('/spending',stats_con.getSpending)   //req can have parameter step:day/week/month 
.post('/spending-reciever',stats_con.getSpendingByReciever)
.post('/reciever',stats_con.getCountbyReciever)


module.exports = routerStats;