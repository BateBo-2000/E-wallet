const express = require('express');
const {authenticate} = require('../app/authorization middleware/authorization_service')
const {spending, reciever} = require('../app/validator middleware/validators')
const stats_con = require('../controllers/statistics_controller')
let routerStats = express.Router();
/* this router is handling everything that starts with /stats/*/

routerStats.use(function stamp(req,res,next){
    console.log('stats router used')
    next()
})

routerStats
.post('/spending', spending, authenticate, stats_con.getSpending)   //req can have parameter step:day/week/month 
.get('/spending-reciever', authenticate, stats_con.getSpendingByReciever)
.post('/reciever', reciever, authenticate, stats_con.getCountbyReciever)


module.exports = routerStats;