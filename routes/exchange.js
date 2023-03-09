const express = require('express');
let routerExchange = express.Router();
/* this router is for currency exchange rates */
/* idk if i should make every currency different route so for now its just 'exchange-rates'*/

routerExchange.use(function stamp(req,res,next){
    console.log('exchange router used')
    next()
})          



routerExchange
.get('/today',(req, res)=>{
    //handle get request           /*return the currency exchage rate fot today*/
    res.sendStatus(200)
})
.get('/this-week',(req, res)=>{
    //handle get request           /*return the currency exchage rate fot this week*/
    res.sendStatus(200)
})
.get('/this-month',(req, res)=>{
    //handle get request           /*return the currency exchage rate fot this month*/
    res.sendStatus(200)
})
.get('/this-year',(req, res)=>{
    //handle get request           /*return the currency exchage rate fot this year*/
    res.sendStatus(200)
})

module.exports = routerExchange;
//should i make a request for every currency .?.