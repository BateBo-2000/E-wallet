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
/*
req.body
.currencyArray  format: ['BGN',"USD"]    type: string[]
.baseCurrency   format: 'BGN'            type: string
.start_date     format: '2023-03-11'     type: date   
.end_date       format: '2023-03-11'     type: date
*/

routerExchange
.post('/latest', exchangeRates, authenticate, exchage_con.getLatestFluctuations)
.post('/fluctuation/this-week', exchangeRates, authenticate, exchage_con.getThisWeekFluctuations)
.post('/fluctuation/last-30-days', exchangeRates,authenticate, exchage_con.getLast30DaysFluctuations)
.post('/fluctuation/this-year', exchangeRates,authenticate, exchage_con.getThisYearFluctuations)
.post('/fluctuation/custom', exchangeRatesCustom,authenticate, exchage_con.getCustomFluctuations)
.post('/timeseries/this-week', exchangeRates, authenticate, exchage_con.getThisWeekTimeseries)
.post('/timeseries/last-30-days', exchangeRates, authenticate, exchage_con.getLast30DaysTimeseries)
.post('/timeseries/this-year', exchangeRates, authenticate, exchage_con.getThisYearTimeseries)
.post('/timeseries/custom', exchangeRatesCustom, authenticate, exchage_con.getCustomTimeseries)
.post('/converter', exchangeRatesConverter ,authenticate, exchage_con.converter)

module.exports = routerExchange;
//should i make a request for every currency .?.