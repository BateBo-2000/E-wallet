const express = require('express');
let routerStats = express.Router();
/* this router is handling everything that starts with /stats/*/

routerStats.use(function stamp(req,res,next){
    console.log('stats router used')
    next()
})

routerStats
.get('/pieChart',(req, res)=>{
    //handle get request        == get
    res.sendStatus(200)
})
.post('/pieChart',(req, res)=>{
    //handle post request       == get data for pieChart
    res.sendStatus(200)
})
.get('/diagram',(req, res)=>{
    //handle post request       == get data for diagram
    res.sendStatus(200)
})

module.exports = routerStats;