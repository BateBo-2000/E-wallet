const express = require('express');
let routerStats = express.Router();
const stats_con = require('../controllers/statistics_controller')
/* this router is handling everything that starts with /stats/*/

routerStats.use(function stamp(req,res,next){
    console.log('stats router used')
    next()
})

routerStats
.get('/spending',stats_con.getSpending)
.post('/income',stats_con.getIncome)
.get('/diagramOfMoney',stats_con.getDiagramJson)

module.exports = routerStats;