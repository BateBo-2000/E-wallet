require('dotenv').config()
const express = require ('express')
const exchage_con = require('../controllers/exchange_rates_controller')
const {authenticate} = require('../app/authorization middleware/authorization_service')
const {exchangeRates, exchangeRatesCustom, exchangeRatesConverter} = require('../app/validator middleware/validators')
let routerExchange = express.Router()
/* this router is for currency exchange rates */
/* idk if i should make every currency different route so for now its just 'exchange-rates'*/

routerExchange.use(function stamp(req,res,next){
    console.log('exchange router used')
    next()
})          

routerExchange
.post('/fluctuation/custom', exchangeRatesCustom,authenticate, exchage_con.getCustomFluctuations)
.post('/timeseries/custom', exchangeRatesCustom, authenticate, exchage_con.getCustomTimeseries)
.post('/converter', exchangeRatesConverter ,authenticate, exchage_con.converter)

module.exports = routerExchange;